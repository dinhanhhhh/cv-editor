# Review Component

Review component/file mà tôi đang mở (active document). Kiểm tra theo thứ tự ưu tiên:

1. **Bug logic** – Lỗi logic, sai state, thiếu cleanup
2. **Performance** – Re-render không cần thiết, missing memo, heavy computation
3. **Accessibility** – Thiếu aria-label, alt text, keyboard navigation
4. **Responsive** – Có hiển thị tốt trên mobile (375px) không
5. **TypeScript** – Có dùng `any` không, type có chặt chẽ không
6. **Best practices** – Naming convention, code structure

## Output format

Chia thành 3 mức:
- 🔴 **Critical** – Phải sửa ngay
- 🟡 **Warning** – Nên sửa
- 🟢 **Suggestion** – Gợi ý cải thiện

Mỗi issue cần: mô tả vấn đề + đoạn code liên quan + đề xuất fix.
