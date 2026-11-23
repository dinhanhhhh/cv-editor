# AGENTS.md – Cấu hình dự án CV Editor

## Phần 1: Project Context

| Trường | Giá trị |
|---|---|
| **Tên project** | CV Editor |
| **Loại project** | Công cụ tạo & chỉnh sửa CV (Single-page HTML/JS/CSS) |
| **Mục tiêu chính** | Cho phép người dùng chỉnh sửa thông tin, chọn template và xuất CV ra file HTML/PDF |
| **Người dùng cuối** | Ứng viên đang chuẩn bị hồ sơ phỏng vấn |
| **Giai đoạn hiện tại** | Đang phát triển / Tối ưu |
| **Ngôn ngữ hiển thị** | Tiếng Việt / Tiếng Anh |

---

## Phần 2: Tech Stack

| Loại | Công nghệ | Ghi chú / Gotcha |
|---|---|---|
| Framework | Không framework (Vanilla HTML/CSS/JS) | Viết JS thuần thao tác DOM, không import React |
| Backend | Cloudflare Workers | Xử lý request, route, hoặc deploy file tĩnh qua script `cloudflare-worker.js` |
| Styling | CSS thuần (tách file trong `css/` hoặc nhúng trực tiếp) | |
| Data | JS Objects (nằm trong thư mục `data/`) | Dữ liệu CV lưu trữ dạng tĩnh bằng Javascript Object/JSON |

**Quy tắc liên quan:**
- Không tự ý đề xuất thêm thư viện/framework mới trừ khi tôi yêu cầu hoặc nó thực sự cần thiết (và phải giải thích lý do trước).
- Bám sát stack hiện tại của codebase, không "kéo" project sang công nghệ khác.
- **Bảo mật DOM:** Ưu tiên dùng `textContent`; nếu bắt buộc dùng `innerHTML` với dữ liệu người dùng thì phải escape ký tự HTML trước khi render.

### ⚠️ Quy tắc dữ liệu CV (BẮT BUỘC):
- **Role chuẩn:** Mọi trường `role` trong các file `data/cv-data-*.js` (ở cả mục Kinh nghiệm/Experience lẫn Dự án/Projects, cho cả tiếng Việt và tiếng Anh) **BẮT BUỘC LUÔN ĐỂ LÀ `"Developer"`**. Tuyệt đối không tự ý đổi thành Web Developer, Full-Stack Developer, hay System Integrator...
- **Thời gian thực tập chuẩn (Tami Technology):** Mốc thời gian làm việc tại CÔNG TY TNHH CÔNG NGHỆ TAMI / TAMI TECHNOLOGY CO., LTD **BẮT BUỘC LUÔN ĐỂ LÀ `"06/2025 - 12/2025"`** (6 tháng). Tuyệt đối không để là 03/2025 - 09/2025 hay 06/2025 - 09/2025.
- **Tiêu đề mục kinh nghiệm chuẩn:** Trường `sections.experience` (nếu có khai báo) **BẮT BUỘC LUÔN ĐỂ LÀ `"KINH NGHIỆM LÀM VIỆC"`** (tiếng Việt) và **`"WORK EXPERIENCE"`** (tiếng Anh). Tuyệt đối không tự ý đổi thành "KINH NGHIỆM THỰC TẾ" hay "KINH NGHIỆM THỰC CHIẾN".
- **Tiêu đề mục kỹ năng chuẩn:** Trường `sections.skills` (nếu có khai báo) **BẮT BUỘC LUÔN ĐỂ LÀ `"KỸ NĂNG CHUYÊN MÔN"`** (tiếng Việt) và **`"TECHNICAL SKILLS"`** (tiếng Anh). Tuyệt đối không tự ý đổi thành "KỸ NĂNG", "SKILLS" hay "KEY SKILLS".
- **Cấu trúc danh mục kỹ năng chuẩn (`skills`):** Mỗi item trong mảng `skills` **BẮT BUỘC dùng thuộc tính `cat`** (`{ cat: "Tên danh mục", items: "..." }`). **TUYỆT ĐỐI KHÔNG DÙNG `name`** vì hàm render HTML đọc `skill.cat` (dùng `name` sẽ bị biến mất cột danh mục bên trái).
- **Trường văn bản nút in (`btnText`):** Mọi nhánh ngôn ngữ **BẮT BUỘC PHẢI CÓ** trường `btnText`:
  - Tiếng Việt: `btnText: "In / Tải PDF"`
  - Tiếng Anh: `btnText: "Print / Save PDF"`
  Tuyệt đối không được bỏ sót, tránh làm nút in hiển thị lỗi `undefined`.
- **CẤM đếm số lượng API vụn vặt ("25+ API endpoints", "15+ APIs"):** **TUYỆT ĐỐI KHÔNG** dùng các cụm từ đếm số lượng như `"25+ API endpoints"`, `"15+ APIs"` trong toàn bộ nội dung CV (Tóm tắt, Kinh nghiệm, Dự án), Email ứng tuyển hay Kịch bản ôn phỏng vấn. Thay vào đó, tập trung diễn đạt chuyên môn kiến trúc hệ thống (vd: *"Thiết kế cơ sở dữ liệu, xây dựng và tối ưu hệ thống RESTful APIs phục vụ truy xuất dữ liệu thời gian thực"*, *"Xây dựng các dịch vụ RESTful APIs hoàn chỉnh..."*).
- **Tiêu đề dự án ngắn gọn (Tránh rớt dòng ngày tháng):** Trường `name` của mỗi dự án trong `projects` **BẮT BUỘC NGẮN GỌN** (dưới 40 ký tự), ví dụ: `"HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT"` (VI) / `"AI AGENT & AUTOMATION PLATFORM"` (EN) hoặc `"HỆ THỐNG CV EDITOR & AI AUTOMATION"`. **TUYỆT ĐỐI KHÔNG** nối thêm phụ đề song ngữ dài dòng trong ngoặc đơn (kiểu `"HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT (AI AGENT & AUTOMATION PLATFORM)"`) vì sẽ chiếm trọn chiều ngang, đẩy mốc ngày tháng rớt xuống dòng dưới làm xô lệch bố cục 1 trang A4.
- **Chuẩn viết mục Kỹ năng (Skills ATS-friendly):**
  - Nhãn `cat` chỉ dùng nhóm chuẩn: `Backend`, `Frontend`, `Databases`, `Tools & DevOps`, `English`. Cấm ghép kiểu "Languages & Backend", "Frontend & Web", và cấm nhóm chung chung như "Core Competencies", "Năng lực chuyên môn".
  - Thứ tự nhóm: nhóm khớp JD nhất đặt lên đầu.
  - `items` chỉ ghi công nghệ/khái niệm cụ thể (JWT, RBAC, 3NF, Indexing). Bỏ từ chung chung (Clean Code, Basic SEO) và kỹ năng quá cơ bản (HTML5, CSS3).
  - Cấm chú thích làm yếu kỹ năng: "basics", "overview", "foundational", "cơ bản", "nền tảng", "(thành thạo)". Kỹ năng còn yếu thì bỏ hẳn.
  - Viết đúng tên chuẩn: Node.js, Express.js, Next.js, React.js, PostgreSQL, TypeScript.
  - Không tự thêm kỹ năng ứng viên chưa có. Keyword JD còn thiếu thì liệt kê riêng để ứng viên tự quyết.
  - Dòng `tech` của dự án phải khớp đúng stack thật trong repo GitHub. Tuyệt đối không bịa thêm công nghệ chỉ để làm đẹp CV/khớp JD.
- **Chuẩn viết mục Tóm tắt chuyên môn (ATS-friendly):**
  - Độ dài: Một đoạn văn thuần 3-4 câu, khoảng 50-70 từ, không gạch đầu dòng, không markdown. Giọng kỹ sư, súc tích, đọc tự nhiên như người viết.
  - Các ý cần có mặt (thứ tự linh hoạt chọn sao cho khớp JD nhất, mở đầu bằng điểm mạnh liên quan nhất tới JD):
    - Học vấn: Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM.
    - 3-5 công nghệ khớp JD nhất, CHỈ lấy từ CV hiện tại.
    - Kinh nghiệm thực tế tại TAMI, chọn khía cạnh liên quan nhất với JD.
    - Một câu về công ty chỉ khi có điểm cụ thể từ JD để nói. Nếu không có thì bỏ.
  - Cấm cụm từ sáo rỗng: "tiếp thu nhanh", "năng động", "đam mê học hỏi", "tư duy chuẩn mực", hoặc "gắn bó lâu dài" nếu không kèm lý do cụ thể.
  - Trung thực tuyệt đối: Không bịa số liệu, công nghệ hay kinh nghiệm. Thiếu số liệu định lượng thì để placeholder `[điền số liệu]`. Thứ JD yêu cầu mà ứng viên chưa có thì liệt kê riêng bên ngoài đoạn tóm tắt.
  
### ⚠️ Quy tắc kiến trúc giao diện (HR View & In ấn A4):
- **Kiến trúc Whitelist cho HR View (`?view=hr`):** Khi chế độ `body.recruiter-view` kích hoạt, **CHỈ DUY NHẤT 2 THÀNH PHẦN** được phép xuất hiện: Tờ CV (`main#cv-preview`) và Nút thao tác của HR (`#hrActionContainer`). Mọi công cụ chỉnh sửa, thanh menu, danh sách bản CV, thanh mobile, hay modal mới thêm vào trang **BẮT BUỘC** phải tuân theo cơ chế Whitelist: `body.recruiter-view > *:not(main):not(#cv-preview):not(#hrActionContainer):not(.hr-action-container):not(script):not(style) { display: none !important; }`. Tuyệt đối không ẩn kiểu Blacklist liệt kê từng class thủ công tránh sót component mới.
- **Kiến trúc Whitelist cho In ấn PDF (`@media print`):** Tương tự, khi xuất in / PDF, chỉ có `main#cv-preview` được phép in: `body > *:not(main):not(#cv-preview):not(script):not(style) { display: none !important; }`. Mọi thanh công cụ khác không bao giờ được phép lọt vào bản in.
- **Trạng thái xem tĩnh trong HR View:** Ở chế độ `recruiter-view`, toàn bộ tương tác chỉnh sửa nội tuyến `[contenteditable]` phải tắt con trỏ / outline để Nhà tuyển dụng có trải nghiệm xem CV tĩnh chuyên nghiệp, không gây hiểu nhầm là form nhập liệu.
- **Kiến trúc Responsive né CV trên Desktop hẹp / Zoom (< 1360px):** Khi viewport từ 993px đến 1360px (màn hình nhỏ hoặc khi người dùng zoom to trình duyệt): 2 panel trên đỉnh (`#projectSelectorPanel`, `#versionSwitch`) tự động thu gọn (collapse) thành mini-bar sát mép (click/hover mở flyout) và 2 cụm điều khiển dưới đáy (`.left-controls`, `.controls`) tự động co về dạng thanh biểu tượng tròn (Icon Dock 48px) né sát mép để chừa tối đa không gian cho tờ CV ở giữa, tuyệt đối không được đè lên mặt giấy A4.
- **Cơ chế bật/tắt 1-chạm trên Mobile (Toggle on/off):** Mọi nút trên thanh điều khiển Mobile Bottom Bar (`mobile-bottom-bar`) và Top Bar khi người dùng ấn lần 2 phải tự động đóng lại (toggle off), đồng thời tự động đóng các modal/drawer khác đang mở để tránh chồng chéo giao diện.
- **Kiến trúc Canvas A4 Scale trên Mobile (Chuẩn TopCV):** Tờ CV trên mobile (`<= 992px`) **BẮT BUỘC** giữ nguyên 100% kích thước và cấu trúc khổ A4 chuẩn in ấn (`width: 210mm; min-height: 297mm;`). **TUYỆT ĐỐI KHÔNG** ghi đè `width: 100%`, không bẻ nhỏ font chữ từng phần tử, không biến CV thành bài viết blog cuộn dài. Căn giữa và thu nhỏ tự động bằng cơ chế tọa độ: `position: relative; left: 50%; transform: translateX(-50%) scale(var(--cv-mobile-scale))` kết hợp bù trừ `margin-bottom: var(--cv-mobile-margin-bottom)` để người dùng luôn thấy trọn vẹn bản in A4 thực tế như TopCV.
- **Kiến trúc Phân tầng Z-Index & Header Modal trên Mobile:** 
  - Phân tầng Z-Index cố định: Mobile Bottom Bar (`2300`) > Modal Overlays (`2200`) > Mobile Top Bar (`2100`).
  - Khi mở Modal (Tiến độ, Email, Phỏng vấn), thanh Top Bar tự động ẩn (`body.modal-open .mobile-top-bar { display: none !important; }`) để Header của Modal nằm trọn vẹn trên đỉnh, tuyệt đối không để 2 header đè lên nhau.
  - Header của các Modal trên mobile bắt buộc chia 2 tầng dọc (Tầng 1: Tiêu đề + Nút X; Tầng 2: Grid 4 nút action dàn đều). Mọi nút bấm phải dùng `white-space: nowrap` và `border-radius: 6px–8px` để không bị méo tròn khi rớt dòng.
- **Chống iOS Safari Auto-Zoom:** Mọi thẻ `input`, `select`, `textarea` trên mobile (`<= 992px`) bắt buộc có `font-size: 16px !important;` để ngăn Safari tự động phóng to 125% làm vỡ layout khi chạm vào ô nhập.

---

## Commands

*(Kiểm tra thực tế: dự án hiện **chưa có** `package.json` và **chưa có** `wrangler.toml` ở thư mục gốc).*

- **Chạy local (Frontend):** Mở trực tiếp `index.html` trên trình duyệt hoặc dùng extension Live Server trong VS Code (chưa có lệnh CLI dev server).
- **Chạy local / Deploy Worker (`cloudflare-worker.js`):** **Chưa có** cấu hình CLI (`wrangler.toml`); Worker hiện được cấu hình biến môi trường (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN`, `GEMINI_API_KEY`) và KV binding (`CV_KV`) trực tiếp trên Cloudflare Dashboard.
- **Build:** **Chưa có** bước build frontend (chạy tĩnh trực tiếp). Trên CI, GitHub Actions (`.github/workflows/generate-pdf.yml`) tự động chạy `node .github/scripts/generate-pdf.js` để xuất PDF khi push thay đổi trong `data/*.js`.
- **Scripts tiện ích (Node.js):**
  - Kiểm tra tính hợp lệ dữ liệu CV & manifest: `node scripts/verify-cv-data.js`
  - Tạo nhanh phiên bản CV mới: `node scripts/new-cv.js`

---

## Cấu trúc thư mục

- **Entry point:** `index.html` (nạp theo thứ tự: `css/cv-layout.css` → `data/cv-manifest.js` → `data/cv-data-base.js` → `js/cv-router.js` → file `data/cv-data-<key>.js` theo query `?type=<key>` → các module trong `js/`).
- **File & thư mục chính:**
  - `index.html`: Giao diện SPA chính của trình xem/chỉnh sửa CV và các modal công cụ.
  - `css/cv-layout.css`: Toàn bộ styling giao diện, scale khổ A4 trên mobile và CSS in ấn (`@media print`).
  - `js/`: Các module Vanilla JS (`cv-router.js` điều hướng `?type=` & `?draft=`, `cv-renderer.js` render DOM & inline edit, `cv-a4-metrics.js`, `cv-tracker.js`, `cv-pro-tools.js`, `cv-email-generator.js`, `cv-interview-prep.js`, `cv-diff.js`, `cv-mobile.js`, `cv-hotkeys.js`).
  - `data/`:
    - `cv-manifest.js`: Danh sách đăng ký tất cả phiên bản CV (`CV_MANIFEST`).
    - `cv-data-base.js`: Dữ liệu gốc dùng chung (`cvDataBase`) và hàm hợp nhất sâu `mergeWithBaseCv(base, override)`.
    - `cv-data-template.js` & `cv-global.js`: Bản mẫu boilerplate và cấu hình dùng chung.
    - `cv-data-*.js`: Các bản CV may đo theo từng công ty/vị trí; `data/history/` lưu bản backup tự động.
  - `cloudflare-worker.js`: Serverless Worker nối Telegram Bot với GitHub API, LLM API (Gemini/Groq) và Cloudflare KV (`CV_KV`) cho `/api/cv`, `/api/draft/:key`, `/api/tracker`.
  - `scripts/`: Script Node.js kiểm tra dữ liệu (`verify-cv-data.js`), tạo CV mới (`new-cv.js`), đồng bộ và quét việc làm.
  - `.github/`: Workflow và script Puppeteer tự động xuất PDF gửi về Telegram.

- **Schema ngắn của object dữ liệu CV (`data/cv-data-*.js`):**
  ```js
  var cvData = {
    meta: { company, position, recipient, email, contact, jobUrl, notes, jdText, pitchHighlights }, // tùy chọn
    vi: {
      name: "TRƯƠNG ĐÌNH ANH",
      title: "string",
      btnText: "In / Tải PDF",
      docTitle: "CV_TruongDinhAnh",
      contact: [{ icon, text, link }],
      sections: { objective, education, experience, projects, skills },
      objective: "string",
      education: { school, date, detail },
      experience: [{ name, date, role, desc, tasks: ["string"], tech }],
      projectDisplayLimit: 2,
      projects: [{ name, date, role, desc, github, tasks: ["string"], tech }],
      skills: [{ cat, items }]
    },
    en: { /* cấu trúc tương đồng nhánh vi */ }
  };
  ```

---

## Phần 8: Checklist verify (Vanilla JS)

- [ ] Responsive trên mobile (375px), tablet (768px), desktop (1280px+) và chế độ in A4 (`@media print`) không tràn/vỡ layout.
- [ ] Không lỗi cú pháp/runtime trên DevTools Console; chạy pass `node scripts/verify-cv-data.js` khi sửa dữ liệu trong `data/`.
- [ ] Chuyển đổi đúng cả 2 ngôn ngữ (`vi` / `en`), query `?type=` nạp đúng file data và không xuất hiện `undefined` trên giao diện.
- [ ] Thao tác DOM an toàn (ưu tiên `textContent`, escape khi dùng `innerHTML` với dữ liệu người dùng), không gắn trùng event listener khi re-render.
- [ ] Không broken link; các thanh công cụ/modal không bị lọt vào bản in PDF và chế độ HR View (`?view=hr`).
