# CV Editor

Một ứng dụng CV tĩnh được xây bằng HTML, CSS và JavaScript thuần, tập trung vào một nhu cầu rất thực tế: tạo nhiều phiên bản CV từ cùng một codebase, chuyển nhanh theo vị trí ứng tuyển, xem trước bố cục A4 và xuất PDF trực tiếp từ trình duyệt.

## Demo Modes

Chuyển đổi giữa các phiên bản CV bằng query string `?type=`:

| Query | Vị trí | Emoji |
|---|---|---|
| `index.html` (mặc định) | Fullstack Developer | 💼 |
| `?type=frontend` | Frontend Developer | 🎨 |
| `?type=backend` | Backend Developer | ⚙️ |
| `?type=nestjs` | NestJS Developer | 🏥 |
| `?type=healthcare` | Healthcare Fullstack | 🦷 |
| `?type=ai` | AI Engineer | 🤖 |
| `?type=ai-webdev` | AI Web Developer | 🌐 |
| `?type=agrizen` | Agrizen Fullstack | 🌱 |
| `?type=opswat` | OPSWAT Engineer | 🛡️ |
| `?type=catspeak` | CatSpeak Developer | 🐈 |
| `?type=techsupport` | Tech Support | 🛠️ |
| `?type=itdev` | IT Developer | 💻 |
| `?type=kitgroup` | KIT Group Fullstack Intern | 🏢 |

## Highlights
- Dùng query string để route giữa **12+ phiên bản CV** mà không cần framework.
- Tách riêng `data`, `router` và `render logic` để dễ bảo trì.
- Hỗ trợ song ngữ Việt/Anh.
- **Global Education Config**: Thông tin học vấn được quản lý tập trung trong `cv-global.js`, cập nhật một nơi — đồng bộ toàn bộ CV.
- Có `Magic Fit`, `A4 Preview` và tối ưu CSS cho chế độ in PDF.
- Tự đổi favicon (emoji) theo từng phiên bản CV.
- Có `cv-data-template.js` làm boilerplate để tạo phiên bản CV mới nhanh chóng.
- Giữ lại các file HTML legacy để tham chiếu và so sánh phiên bản.

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts: `Be Vietnam Pro`

## Project Structure
```text
├── css/
│   └── cv-layout.css          # Toàn bộ styling + print-optimized CSS
├── data/
│   ├── history/               # Các bản sao lưu tự động khi may đo CV
│   ├── cv-global.js            # Cấu hình dùng chung (học vấn, ...)
│   ├── cv-data-fullstack.js    # Dữ liệu CV Fullstack (mặc định)
│   ├── cv-data-fe.js           # Dữ liệu CV Frontend
│   ├── cv-data-be.js           # Dữ liệu CV Backend
│   ├── cv-data-nestjs.js       # Dữ liệu CV NestJS
│   ├── cv-data-kitgroup.js     # Dữ liệu CV KIT Group
│   ├── cv-data-*.js            # ... và các phiên bản khác
│   └── cv-data-template.js     # Boilerplate để tạo phiên bản mới
├── js/
│   ├── cv-router.js            # Đọc query param, nạp đúng file data
│   └── cv-renderer.js          # Render CV từ dữ liệu đã nạp
├── cloudflare-worker.js        # Telegram Bot Bridge (AI Tailor & Auto deploy)
├── index.html                  # Entry chính
├── INTERVIEW_PREP.md           # Tài liệu ôn tập phỏng vấn
├── truong-dinh-anh-*.html      # Các file HTML legacy
└── README.md
```

## How It Works
1. `index.html` là entry chính.
2. `js/cv-router.js` đọc query param `type` để xác định phiên bản CV cần hiển thị.
3. Nạp `data/cv-global.js` (cấu hình dùng chung) trước → nạp file data tương ứng → cuối cùng nạp `js/cv-renderer.js` để render CV.
4. Người dùng có thể đổi ngôn ngữ, chỉnh cỡ chữ, bật A4 preview và in PDF.

## Automation Pipeline (Telegram Bot & AI Tailor)

Dự án tích hợp một Telegram Bot chạy trên **Cloudflare Workers** (`cloudflare-worker.js`) kết nối trực tiếp với **GitHub Repository** và **Gemini API** để tự động hóa việc cập nhật CV:

1. **AI Auto-Tailoring (`/job`):**
   * Gửi tin nhắn: `/job <#hashtag> <Nội dung tin tuyển dụng / JD>`
   * Ví dụ: `/job #opswat Cần tuyển Node.js developer, TypeScript...`
   * Worker sẽ lấy dữ liệu CV gốc, dùng Gemini AI để tự tối ưu hóa thông tin cho khớp với JD (hỗ trợ cả Tiếng Việt và Tiếng Anh).
   * Tự động commit code trực tiếp lên GitHub và lưu một bản backup vào `data/history/`.
2. **Deploy nhanh bằng File (`.js`):**
   * Kéo thả file dữ liệu CV (ví dụ `cv-data-opswat.js`) vào chat.
   * Thêm caption `#opswat` để deploy thẳng, hoặc `/preview #opswat` để xem trước nội dung trước khi ghi đè.
3. **Tra cứu lịch sử:**
   * Sử dụng lệnh `/history` hoặc `/history #opswat` để xem danh sách các bản backup đã lưu.

> Sau khi dữ liệu được commit lên GitHub, GitHub Actions sẽ tự động kích hoạt pipeline biên dịch mã nguồn thành file PDF mới trong vòng 30-40 giây.

## Worker Environment Variables

Để chạy được Cloudflare Worker, cần cấu hình các biến môi trường sau trong Cloudflare Dashboard hoặc file `.dev.vars` (khi chạy local):

* `TELEGRAM_BOT_TOKEN`: Token của Telegram Bot tạo từ @BotFather.
* `TELEGRAM_CHAT_ID`: Chat ID của riêng bạn (để bảo mật, chỉ nhận lệnh từ bạn).
* `GITHUB_OWNER`: Username GitHub của bạn.
* `GITHUB_REPO`: Tên repository chứa project CV này.
* `GITHUB_TOKEN`: GitHub Personal Access Token (có quyền write nội dung repo).
* `GEMINI_API_KEY`: API Key lấy từ Google AI Studio (để chạy tính năng AI Tailor).
* `MASTER_CV_FILE`: File CV gốc dùng làm mẫu để AI may đo (Mặc định: `data/cv-data-template.js`).

## Tạo Phiên Bản CV Mới
1. Copy `data/cv-data-template.js` → đặt tên mới: `cv-data-[tên-phiên-bản].js`
2. Điền thông tin vào các trường trong file mới.
3. Khai báo phiên bản mới trong `js/cv-router.js` (thêm vào object `versions`).

## Run Locally
- Mở `index.html` trực tiếp trong trình duyệt.
- Hoặc dùng Live Server trong VS Code để làm việc thuận tiện hơn.

## Why This Project Matters
Điểm mạnh của dự án không nằm ở độ phức tạp kỹ thuật cực lớn, mà ở tính thực dụng và sự chăm chút trải nghiệm. Đây là một mini product phục vụ đúng bài toán cá nhân, nhưng vẫn thể hiện được tư duy tách dữ liệu, tổ chức render, routing đơn giản, tối ưu in ấn và polish UI/UX ở mức tốt.

## Notes
- `index.html` là luồng chạy chính hiện tại.
- Các file HTML legacy (`truong-dinh-anh-*.html`) vẫn được giữ lại để tham chiếu lịch sử.
- Thông tin học vấn chung được quản lý tập trung trong `data/cv-global.js` — chỉ cần sửa một nơi là đồng bộ toàn bộ CV.
- Nếu muốn phát triển tiếp, các hướng hợp lý là chuyển `cvData` sang schema chặt hơn, thêm editor nhập liệu, hoặc sinh PDF ổn định hơn bằng pipeline riêng.

