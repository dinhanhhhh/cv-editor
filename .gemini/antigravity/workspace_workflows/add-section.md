# Add Section (CV Editor)

Thêm một mục (section) mới hoặc tùy biến cho tờ CV:

1. **Khảo sát yêu cầu:**
   - Tên mục hiển thị song ngữ: Tiếng Việt và Tiếng Anh (vd: Chứng chỉ / Certificates, Giải thưởng / Awards...).
   - Cấu trúc dữ liệu lưu trong `data/cv-data-base.js` và các file override.
   - Vị trí hiển thị trên tờ CV (A4 khổ chuẩn).

2. **Quy chuẩn kỹ thuật:**
   - Stack: Vanilla HTML/CSS/JS thuần (thao tác DOM trực tiếp, không import React/Next.js/Tailwind).
   - Bảo mật: Mọi nội dung text render ra HTML bắt buộc bọc qua `esc(text)` để chống XSS.
   - Bố cục in ấn: Đảm bảo không làm vỡ giới hạn 1 trang A4 chuẩn in (chiều cao ~1123px ở 96 DPI).
   - Thử nghiệm trên cả Desktop, Mobile (`scale` canvas A4) và chế độ HR View (`?view=hr`).
