# POSTMORTEM & LESSONS LEARNED

---

## [2026-11-23] Parser `parseMarkdownJobs` bỏ sót dòng dữ liệu có chứa từ khóa tiêu đề bảng

### 1. Triệu chứng lỗi
- Khi nạp danh sách việc làm từ `jobs_for_tomorrow.md` (136 việc làm), hàm `parseMarkdownJobs()` trong `js/cv-tracker.js` chỉ phân tích được **135 việc làm**, bỏ sót dòng **#6 (KIT System Solutions Việt Nam)** mặc dù cú pháp bảng Markdown hoàn toàn hợp lệ.

### 2. Nguyên nhân gốc rễ
- Đoạn kiểm tra hàng tiêu đề trong `parseMarkdownJobs()` dùng `lineLower.includes("công ty") && (lineLower.includes("vị trí") || lineLower.includes("stt"))` trên toàn bộ chuỗi thô của dòng Markdown.
- Khi một dòng dữ liệu có tên doanh nghiệp chứa `"CÔNG TY"` (cột Công ty) đồng thời phần tóm tắt yêu cầu chứa từ `"Vị trí"` (cột Tóm tắt), điều kiện trên nhận nhầm dòng dữ liệu thành dòng tiêu đề bảng (`continue`), vừa làm mất bản ghi vừa ghi đè `headerCols`.

### 3. Giải pháp & Quy tắc phòng ngừa
- **Giải pháp:** Sửa điều kiện nhận diện hàng tiêu đề sang so khớp chính xác theo từng ô (`lowerCells.some(c => c === "công ty" || c === "company") && lowerCells.some(c => c === "vị trí" || c === "stt" || c === "position" || c === "role")`) thay vì `includes()` trên toàn dòng.
- **Quy tắc phòng ngừa:** Mọi bộ phân tích cú pháp bảng Markdown bắt buộc kiểm tra khớp cấp độ ô (cell-level) và có script kiểm thử tự động xác minh số lượng bản ghi sau khi parse khớp 100% số dòng thực tế trong file nguồn.
