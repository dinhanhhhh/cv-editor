# CV Editor

Một ứng dụng CV tĩnh được xây bằng HTML, CSS và JavaScript thuần, tập trung vào một nhu cầu rất thực tế: tạo nhiều phiên bản CV từ cùng một codebase, chuyển nhanh theo vị trí ứng tuyển, xem trước bố cục A4 và xuất PDF trực tiếp từ trình duyệt.

## Demo Modes
- `index.html`: CV chung
- `index.html?type=frontend`: CV Frontend
- `index.html?type=backend`: CV Backend

## Highlights
- Dùng query string để route giữa nhiều phiên bản CV mà không cần framework.
- Tách riêng `data`, `router` và `render logic` để dễ bảo trì.
- Hỗ trợ song ngữ Việt/Anh.
- Có `Magic Fit`, `A4 Preview` và tối ưu CSS cho chế độ in PDF.
- Tự đổi favicon theo từng phiên bản CV.
- Giữ lại các file HTML cũ để tham chiếu và so sánh phiên bản.

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts: `Be Vietnam Pro`

## Project Structure
```text
├── css/
│   └── cv-layout.css
├── data/
│   ├── cv-data-fullstack.js
│   ├── cv-data-fe.js
│   └── cv-data-be.js
├── js/
│   ├── cv-router.js
│   └── cv-renderer.js
├── index.html
├── truong-dinh-anh-fullstack.html
├── truong-dinh-anh-frontend.html
├── truong-dinh-anh-backend.html
└── README.md
```

## How It Works
1. `index.html` là entry chính.
2. `js/cv-router.js` đọc query param `type` để chọn file data phù hợp.
3. File data được nạp trước, sau đó `js/cv-renderer.js` render CV tương ứng.
4. Người dùng có thể đổi ngôn ngữ, chỉnh cỡ chữ, bật A4 preview và in PDF.

## Run Locally
- Mở `index.html` trực tiếp trong trình duyệt.
- Hoặc dùng Live Server trong VS Code để làm việc thuận tiện hơn.

## Why This Project Matters
Điểm mạnh của dự án không nằm ở độ phức tạp kỹ thuật cực lớn, mà ở tính thực dụng và sự chăm chút trải nghiệm. Đây là một mini product phục vụ đúng bài toán cá nhân, nhưng vẫn thể hiện được tư duy tách dữ liệu, tổ chức render, routing đơn giản, tối ưu in ấn và polish UI/UX ở mức tốt.

## Notes
- `index.html` là luồng chạy chính hiện tại.
- Ba file HTML cũ vẫn được giữ lại để tham chiếu lịch sử và các biến thể trước đó.
- Nếu muốn phát triển tiếp, các hướng hợp lý là chuyển `cvData` sang schema chặt hơn, thêm editor nhập liệu, hoặc sinh PDF ổn định hơn bằng pipeline riêng.
