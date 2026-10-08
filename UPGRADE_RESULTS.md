# BÁO CÁO KỸ THUẬT & ĐẶC TẢ KIẾN TRÚC CV EDITOR (PRO TOOLS)

Tài liệu đặc tả kiến trúc, hiệu năng và các module tính năng trong hệ thống công cụ CV Editor.

---

## 1. TỔNG QUAN KIẾN TRÚC & CHỈ SỐ KỸ THUẬT

Hệ thống được thiết kế theo mô hình **Zero-Build, Zero-Framework** (Vanilla HTML5, CSS3, ES6+ Javascript) nhằm đạt hiệu năng tối đa, không phụ thuộc vào chuỗi công cụ build (Webpack/Vite/Babel) và có thể chạy trực tiếp trên bất kỳ HTTP server tĩnh hoặc Cloudflare Workers nào.

| Tiêu chí | Thông số đo lường / Kỹ thuật | Ghi chú kiến trúc |
|:---|:---|:---|
| **Thời gian nạp DOM ban đầu** | **< 80ms** (môi trường local/static) | Không có overhead hydration từ framework ảo (Virtual DOM) |
| **Phụ thuộc bên thứ ba (Dependencies)** | **0 external dependencies** | Toàn bộ module tự viết bằng DOM APIs thuần |
| **Dung lượng Bundle JS/CSS** | **0 KB bundle overhead** | Tải theo từng file script độc lập có cơ chế `defer` |
| **Bố cục in ấn A4** | **210mm × 297mm (Tỉ lệ chuẩn 1:1.414)** | Khống chế hoàn hảo bằng CSS Paged Media `@media print` |
| **Kiến trúc quản lý phiên bản** | **47+ phiên bản may đo** | Mô hình Single Source of Truth + Runtime Override |
| **Bảo mật XSS & Input** | **Whitelist Scheme + Contextual Escaping** | Hàm `esc()` và `escUrl()` lọc toàn bộ input trước khi chèn DOM |

---

## 2. ĐẶC TẢ CÁC MODULE KỸ THUẬT CỐT LÕI

### 2.1. Dynamic Routing & Runtime Data Loader (`js/cv-router.js`)
- **Nguyên lý hoạt động:** Trích xuất tham số `?type=<version_key>` từ `window.location.search`. Tra cứu file dữ liệu tương ứng trong `window.CV_MANIFEST`.
- **Cơ chế Base + Override Merge:** Nạp file nền tảng `data/cv-data-base.js` trước, sau đó nạp file dữ liệu chuyên biệt của công ty ứng tuyển và thực hiện Runtime Deep Merge qua hàm `mergeWithBaseCv()`.
- **Bảo mật:** Khóa cứng URL Cloudflare Worker chính thức, loại bỏ tham số inject `?worker=`, di chuyển mã PIN xác thực sang HTTP Request Header `X-Tracker-Pin`.

### 2.2. A4 Metrics & Magic Fit Engine (`js/cv-a4-metrics.js`)
- **Đo lường kích thước A4 chuẩn:** Sử dụng DOM probe ẩn (height: 297mm) để tính toán chính xác số pixel chiều cao của khổ A4 trên từng thiết bị hiển thị:
  $$\text{TargetHeight} = \text{probe.getBoundingClientRect().height}$$
- **A4 Fit Meter:** Đo độ cao thực tế của khối nội dung (`#cvContent`) so với khổ giấy in A4 chuẩn theo thời gian thực (MutationObserver + ResizeObserver), xuất tỉ lệ phần trăm trực quan.
- **Thuật toán Magic Fit:** Vòng lặp điều chỉnh biên độ CSS variables (`--cv-section-margin`, `--cv-item-margin`, `line-height`, `font-size`) theo từng nấc vi mô để nội dung luôn đạt ngưỡng vàng 94% - 97% trang A4 mà không bị rớt sang trang 2.

### 2.3. CV Version Diff Viewer (`js/cv-diff.js`)
- **Nguyên lý:** So sánh cấu trúc dữ liệu giữa 2 bản CV bất kỳ (hoặc giữa bản lưu nháp `localStorage` và bản gốc).
- **Chuẩn hóa định danh dự án:** Sử dụng hàm `normalizeProjId()` để gán ID tĩnh cho các dự án tương đương ngay cả khi tiêu đề có sự khác biệt về ngôn ngữ (VI/EN).
- **Phân loại khác biệt:** Tự động phát hiện các dự án độc quyền (Unique), dự án chung (Shared), và phân tích độ sai khác về Tech Stack giữa 2 phiên bản.

### 2.4. CV Health & ATS Quality Audit (`js/cv-pro-tools.js`)
- **Hệ thống chấm điểm 5 tiêu chí (Thang điểm 100):**
  1. *Độ dài & Dung lượng từ:* 380 - 580 từ (Tối đa 20 điểm).
  2. *Kênh liên hệ chuẩn:* Đầy đủ Số điện thoại, Email, GitHub, Địa chỉ (Tối đa 20 điểm).
  3. *Động từ hành động mạnh:* Đối chiếu từ điển hành động kỹ thuật VI/EN (Tối đa 25 điểm).
  4. *Chỉ số định lượng & Tác động thực tế:* Nhận diện số liệu phần trăm, độ trễ, quy mô (Tối đa 20 điểm).
  5. *Cấu trúc mục chuẩn ATS:* Đầy đủ 5 khối nội dung tiêu chuẩn (Tối đa 15 điểm).
- **Nguyên tắc trung thực:** Hệ thống tích hợp cảnh báo bắt buộc yêu cầu ứng viên chỉ sử dụng số liệu đo lường thực tế từ dự án thật (benchmark, latency, traffic), tuyệt đối không tự bịa số liệu ảo.

### 2.5. Command Palette Spotlight (`js/cv-pro-tools.js`)
- Phím tắt kích hoạt: `Ctrl + K` hoặc `Cmd + K`.
- Tìm kiếm tức thời (fuzzy filter) trên toàn bộ 47+ phiên bản CV và các lệnh điều khiển hệ thống (`In PDF`, `Magic Fit`, `Đổi bố cục`, `Đổi màu`, `Xem phím tắt`, `Job Tracker`).

### 2.6. Trung tâm Xuất dữ liệu Đa định dạng (Export Center)
- **JSON Resume:** Trích xuất dữ liệu DOM/Object sang chuẩn quốc tế `schema.jsonresume.org` phục vụ việc nộp hồ sơ tự động qua API.
- **Markdown / Plain Text:** Tạo bản text thuần có cấu trúc phân cấp rõ ràng để sao chép vào các form tuyển dụng trực tuyến.

---

## 3. KIẾN TRÚC AN TOÀN & BẢO MẬT (AGENTS.MD COMPLIANCE)

1. **Whitelist Architecture cho Chế độ HR (`body.recruiter-view`):**
   - Áp dụng bộ chọn CSS Whitelist: `body.recruiter-view > *:not(main):not(#cv-preview):not(#hrActionContainer):not(.hr-action-container):not(script):not(style) { display: none !important; }`.
   - Đảm bảo nhà tuyển dụng chỉ xem được tờ CV tĩnh và nút thao tác, mọi thanh công cụ chỉnh sửa tự động bị triệt tiêu hoàn toàn.
2. **Whitelist Architecture cho Bản in PDF (`@media print`):**
   - Chỉ duy nhất phần tử `main#cv-preview` được phép hiển thị trên bản in, loại bỏ 100% các modal, popover và thanh điều hướng.
3. **Canvas A4 Scale trên Mobile:**
   - Bảo toàn 100% kích thước chuẩn 210mm × 297mm, không bẻ vỡ font hay làm biến dạng layout in ấn trên màn hình nhỏ nhờ cơ chế tọa độ CSS Transform Scale kết hợp bù trừ Margin.

---

## 4. HƯỚNG DẪN KIỂM CHỨNG & VẬN HÀNH

- **Kiểm tra tính toàn vẹn dữ liệu:**
  ```bash
  node scripts/verify-cv-data.js
  ```
- **Kiểm tra cú pháp code các module:**
  ```bash
  node --check js/cv-router.js
  node --check js/cv-renderer.js
  node --check js/cv-a4-metrics.js
  node --check js/cv-diff.js
  node --check js/cv-pro-tools.js
  ```
- **Tạo bản CV may đo mới (Định dạng Base + Override):**
  ```bash
  node scripts/new-cv.js <company_key> "<Tên Công Ty>"
  ```
