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
| **Tên project** | `<điền>` |
| **Loại project** | `<vd: web app / portfolio / CLI tool / API service>` |
| **Mục tiêu chính** | `<điền>` |
| **Người dùng cuối** | `<điền>` |
| **Giai đoạn hiện tại** | `<vd: MVP / đang phát triển / bảo trì>` |
| **Ngôn ngữ hiển thị (của sản phẩm)** | `<vd: Tiếng Việt>` |

---

## Phần 2: Tech Stack

> Điền đúng stack thực tế. Nếu là project vanilla (HTML/CSS/JS thuần) thì ghi rõ "không framework" để AI không gợi ý React/Next.js.

| Loại | Công nghệ | Ghi chú / Gotcha |
|---|---|---|
| Framework | `<điền hoặc "không có">` | |
| Language | `<điền>` | |
| Styling | `<điền>` | |
| Package Manager | `<điền>` | Dùng đúng cái này, không tự đổi |
| Deploy | `<điền>` | |

**Quy tắc liên quan:**
- Không tự ý đề xuất thêm thư viện/framework mới trừ khi tôi yêu cầu hoặc nó thực sự cần thiết (và phải giải thích lý do trước).
- Bám sát stack hiện tại của codebase, không "kéo" project sang công nghệ khác.

> 💡 Mục "Ghi chú / Gotcha" là nơi ghi các bẫy đã gặp (vd: phiên bản thư viện đổi API, config đặc biệt). Càng nhiều gotcha thực tế, AI càng ít sai.

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
