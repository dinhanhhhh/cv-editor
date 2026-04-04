# 📄 CV Editor - Dynamic Portfolio

Dự án này là một trình chỉnh sửa và hiển thị CV cá nhân hóa, cho phép thay đổi giao diện và nội dung linh hoạt giữa các vị trí (Frontend, Backend, TopCV style) thông qua hệ thống routing đơn giản.

## ✨ Tính năng nổi bật
- **Dynamic Content**: Tự động thay đổi nội dung CV (Header, Kinh nghiệm, Kỹ năng) dựa trên dữ liệu JSON.
- **Multiple Versions**: Hỗ trợ 3 chế độ xem chính:
  - `?type=frontend`: CV tối ưu cho vị trí Frontend Developer.
  - `?type=backend`: CV tối ưu cho vị trí Backend Developer.
  - `?type=topcv`: Giao diện chuẩn theo phong cách TopCV.
- **Responsive Design**: Hiển thị đẹp trên cả Desktop và Mobile.
- **Professional Favicon**: Tự động cập nhật favicon tương ứng với từng phiên bản CV.

## 🛠 Công nghệ sử dụng
- **HTML5 & CSS3**: Cấu trúc và giao diện (Vanilla CSS).
- **JavaScript (ES6+)**: Xử lý logic routing, render dữ liệu động.
- **Google Fonts**: Sử dụng font "Outfit" và "Roboto" mang lại cảm giác hiện đại, chuyên nghiệp.

## 📂 Cấu trúc thư mục chính
```text
├── css/            # Chứa các file định dạng styles (topcv.css)
├── js/             # Logic điều hướng (cv-router.js) và render (topcv.js)
├── data/           # Dữ liệu CV cho từng vị trí (FE, BE)
├── index.html      # File chạy chính của ứng dụng
└── README.md       # Tài liệu hướng dẫn
