# AGENTS.md – Quy tắc & Quy trình AI (Template dùng chung)

> File này áp dụng cho **mọi AI agent** (Claude, Gemini, Cursor, Copilot, ...) làm việc trong project.
> Cách dùng: copy file vào **root** của project, rồi **điền lại** phần `Project Context` và `Tech Stack` cho đúng project đó.
> ⚠️ Không copy nguyên si giữa các project khác stack — phần Context/Tech Stack PHẢI khớp với project thực tế, nếu không AI sẽ đề xuất sai công nghệ.

---

## Phần 0: Quy tắc giao tiếp

- **Ngôn ngữ phản hồi:** Tiếng Việt (trừ khi tôi hỏi bằng ngôn ngữ khác).
- **Độ dài:** Ngắn gọn, đi thẳng vào vấn đề. Task nhỏ → trả lời ngắn. Task lớn → mới trình bày đầy đủ.
- **Trung thực:** Nếu chưa chắc, nói rõ "chưa chắc" thay vì đoán. Nếu tôi sai, sửa lại tôi một cách thẳng thắn và có lý do.
- **Không nịnh:** Bỏ các câu đệm kiểu "Bạn nói đúng quá", trả lời thẳng vào nội dung.
- **Đọc trước khi nói:** Nếu tôi nhắc đến một file cụ thể, đọc file đó trước khi trả lời, không suy đoán.

---

## Phần 1: Project Context

> ⚠️ **Bắt buộc điền trước khi dùng.** AI dựa vào phần này để hiểu ngữ cảnh. Điền lại cho từng project.

| Trường | Giá trị |
|---|---|
| **Tên project** | CV Editor |
| **Loại project** | Công cụ tạo & chỉnh sửa CV (Single-page HTML/JS/CSS) |
| **Mục tiêu chính** | Cho phép người dùng chỉnh sửa thông tin, chọn template và xuất CV ra file HTML/PDF |
| **Người dùng cuối** | Ứng viên đang chuẩn bị hồ sơ phỏng vấn |
| **Giai đoạn hiện tại** | Đang phát triển / Tối ưu |
| **Ngôn ngữ hiển thị (của sản phẩm)** | Tiếng Việt / Tiếng Anh |

---

## Phần 2: Tech Stack

| Loại | Công nghệ | Ghi chú / Gotcha |
|---|---|---|
| Framework | Không framework (Vanilla HTML/CSS/JS) | Viết JS thuần thao tác DOM, không import React |
| Backend | Cloudflare Workers | Xử lý webhook Telegram, route deploy qua script `cloudflare-worker.js` |
| Styling | CSS thuần (`css/cv-layout.css`) | Tối ưu in ấn khổ A4 |
| Data | JS Objects (`data/cv-data-*.js`) | Dữ liệu CV lưu trữ dạng tĩnh bằng Javascript Object |

**Quy tắc liên quan:**
- Không tự ý đề xuất thêm thư viện/framework mới trừ khi tôi yêu cầu hoặc nó thực sự cần thiết (và phải giải thích lý do trước).
- Bám sát stack hiện tại của codebase, không "kéo" project sang công nghệ khác.

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

## Phần 3: Quy tắc sửa code

- Đọc context xung quanh **trước khi** sửa.
- **Sửa ít nhưng trúng.** Chỉ động vào phần liên quan đến yêu cầu, không refactor lan man, không "dọn dẹp" code không liên quan.
- Giữ nguyên style hiện tại của codebase (cách đặt tên, format, comment).
- Tìm **nguyên nhân gốc** khi fix bug, không vá tạm bề mặt.
- Nếu một cách làm đã thất bại 2 lần → dừng vá vặt, phân tích lại nguyên nhân và đổi hướng.
- Nếu có cách tối ưu hơn nhưng nằm ngoài yêu cầu → **đề xuất trong phần giải thích**, không tự ý làm thêm.

> **Lưu ý về cách trình bày sửa đổi:**
> - Nếu AGENT **tự sửa file trực tiếp** (Claude Code, Cursor, Gemini CLI...): sửa file luôn, rồi **tóm tắt ngắn** đã thay đổi gì. Không cần in lại nguyên đoạn diff.
> - Nếu AI **chỉ chat** (không có quyền sửa file): trình bày rõ phần cũ → phần mới để tôi tự dán.

---

## Phần 4: Quy tắc chủ động hỗ trợ

- Khi tôi gửi code mà không hỏi gì: nếu phát hiện vấn đề tiềm ẩn (logic, performance, security, UX) → cảnh báo và đề xuất hướng xử lý.
- Khi tôi thiết kế kiến trúc: góp ý về cấu trúc thư mục, tách lớp, tổ chức module sao cho dễ mở rộng.
- Khi tôi làm tính năng: có thể gợi ý pattern phù hợp (debounce, pagination, lazy load, caching, transaction...) nếu thực sự hợp ngữ cảnh.

**Ưu tiên khi tư vấn:** Đúng → An toàn → Dễ bảo trì, *rồi mới* tới nâng cao/tối ưu. Có trade-off thì nêu rõ ưu/nhược và đề xuất hướng hợp với project.

---

## Phần 5: Quy trình làm việc

> Mục tiêu là chất lượng, không phải thủ tục. **Chọn mức độ theo quy mô task.**

### 🟢 Task nhỏ → làm thẳng
Sửa typo, đổi text, chỉnh 1–2 dòng, đổi màu, rename biến...
→ **Bỏ qua quy trình.** Sửa luôn + một câu tóm tắt. Không cần phân tích dài dòng.

### 🟡 Task vừa/lớn → theo 4 bước
Feature mới, fix bug phức tạp, refactor, thay đổi nhiều file.

1. **🧭 Phân tích** — Hiểu mục tiêu, nêu giả định đang dùng, tách task nhỏ. **Nếu yêu cầu mơ hồ → hỏi lại ngay, không tự đoán.**
2. **💻 Code** — Nêu nguyên nhân (nếu fix bug), hướng sửa, rồi thực hiện. Cách verify.
3. **🔍 Tự review** — Theo thứ tự ưu tiên: Bug logic → Regression → Lỗi runtime → State/data flow → Performance → Bảo mật → Style. Tách rõ "bug thật" và "ý kiến cá nhân". Không thấy vấn đề nghiêm trọng → nói rõ.
4. **✅ Kiểm tra** — Liệt kê test case chính + edge case dễ quên. Chạy build/test nếu có. Báo rõ cái gì pass, cái gì chưa verify được.

---

## Phần 6: An toàn

### ❌ AI KHÔNG tự động làm (phải hỏi trước):
- Xóa file/thư mục, chạy lệnh phá hủy (`rm`, `del`, `format`, `git reset --hard`, force push)
- Cài package/dependency mới
- Push code lên git, tạo PR
- Sửa file config/hệ thống (`.env`, `*.config.*`, `tsconfig.json`, CI/CD)
- Gửi code/dữ liệu ra dịch vụ bên ngoài
- Tự giả định khi đề bài mơ hồ → phải hỏi lại

### ✅ AI ĐƯỢC tự động làm:
- Đọc file, phân tích code, tìm kiếm trong codebase
- Sửa file source code (trong phạm vi yêu cầu)
- Tạo file source mới (không phải file config)
- Chạy lệnh read-only / dev (`build`, `lint`, `test`, `dev server`)
- Hỏi lại khi không chắc

> Nguyên tắc: hành động **dễ đảo ngược** (sửa source, chạy test) → làm thẳng. Hành động **khó đảo ngược / ảnh hưởng rộng** (xóa, deploy, sửa config, push) → hỏi trước.

---

## Phần 7: Git Convention

**Commit message:** `<type>: <mô tả ngắn bằng TIẾNG ANH>` (Luôn luôn viết commit message bằng tiếng Anh).

| Type | Khi nào dùng |
|---|---|
| `feat` | Thêm tính năng mới |
| `fix` | Sửa bug |
| `style` | Chỉnh UI/CSS, không đổi logic |
| `refactor` | Tái cấu trúc, không đổi hành vi |
| `docs` | Cập nhật tài liệu |
| `chore` | Việc vặt (config, deps) |

**Branch:** `<type>/<mô-ta-ngan>` — vd: `feat/login-form`, `fix/navbar-mobile`

**Khi nào commit:** Chỉ commit khi tôi yêu cầu rõ. Code phải pass build, không còn `console.log` debug, không commit code đang dở.

---

## Phần 8: Checklist verify (tùy loại project, bỏ mục không liên quan)

**Web / Frontend:**
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Không broken link, ảnh có `alt`
- [ ] Animation không giật / layout shift
- [ ] Có đủ trạng thái Loading / Empty / Error (với component có data/interaction)
- [ ] SEO cơ bản: `title`, `description`, `og:image`
- [ ] Console sạch warning/error
- [ ] Build pass

**Backend / API:**
- [ ] Validate input, xử lý error rõ ràng
- [ ] Không lộ secret/thông tin nhạy cảm trong response/log
- [ ] Có auth/phân quyền cho endpoint cần bảo vệ
- [ ] Test các case: happy path, input sai, không có quyền
