# Review Component & Feature (CV Editor)

Review file hoặc tính năng đang làm việc trong project CV Editor theo thứ tự ưu tiên:

1. **Bảo mật & XSS** – Mọi dữ liệu đưa vào `innerHTML` có bọc qua `esc()` và `escUrl()` chưa.
2. **Quy chuẩn dữ liệu (AGENTS.md)** – Trường `role` luôn là "Developer", mốc thời gian Tami "06/2025 - 12/2025", cấu trúc kỹ năng dùng `cat`.
3. **Bố cục in ấn A4 & Whitelist** – Không làm tràn sang trang 2, tuân thủ Whitelist cho HR View (`?view=hr`) và `@media print`.
4. **Responsive Mobile** – Khổ giấy A4 scale canvas chuẩn, không phá vỡ tỷ lệ 210mm x 297mm.
5. **Hiệu năng & Trạng thái** – Zero-dependency, tải nhanh dưới 100ms, không memory leak.
