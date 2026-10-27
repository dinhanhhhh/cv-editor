# DEV_NOTES.md – Ghi Chú Phát Triển & Phòng Tránh Lỗi (CV Editor)

Tài liệu này lưu lại các lỗi thực tế đã gặp (Gotchas / Post-mortem), nguyên nhân gốc rễ và quy tắc xử lý đúng trong dự án **CV Editor** để tránh lặp lại trong tương lai.

---

## 1. Hệ Thống Theo Dõi Tiến Độ Ứng Tuyển (Job Tracker)

### Lỗi 1: Thao tác đổi trạng thái ở các tab (Chờ phản hồi, Từ chối...) xong F5 bị "trở lại như cũ"
- **Hiện tượng:** Người dùng lọc xem tab "⏳ Đang chờ", "❌ Từ chối" hoặc đổi trạng thái công việc. Sau khi ấn F5 (hoặc đóng mở lại modal), danh sách bị văng về tab "📊 Tổng (Tất cả)", làm tưởng là dữ liệu không lưu. Một số công ty (Octosoft, Goldsun) còn bị nhảy ngược lại trạng thái ban đầu.
- **Nguyên nhân gốc rễ:**
  1. *Chưa lưu bộ lọc:* Biến `currentFilter` chỉ lưu trong RAM, F5 là reset về `"all"`.
  2. *Hardcode ép trạng thái trong `loadJobs()`:* Code cũ có logic `if (seed.cvType === "octosoft" && existing.status !== "interviewing") existing.status = "interviewing";`, khiến mỗi lần F5 lại ép ngược Octosoft về "Phỏng vấn".
  3. *Thiếu ngày nộp khi đổi trạng thái trực tiếp:* Khi chuyển từ "Chờ nộp" (`saved`) sang `reviewing` hay `rejected`, ngày nộp bị bỏ rỗng (`""`), dẫn đến hiển thị `Ngày nộp: N/A` và lỗi sắp xếp.
- **Quy tắc xử lý bắt buộc:**
  - **Lưu tab đang chọn:** Tab active (`currentFilter`) phải luôn được đồng bộ vào `localStorage` (`cv_job_tracker_active_filter`). F5 hay mở lại Modal phải khôi phục đúng tab đó.
  - **Khóa bảo vệ trạng thái (`userModified`):** Tuyệt đối không được hardcode ép `status`. Khi người dùng đã can thiệp (`userModified: true`), trạng thái của họ là bất khả xâm phạm. Cả Seed Data và Markdown Sync đều không được ghi đè.
  - **Tự động điền ngày nộp:** Khi chuyển sang bất kỳ trạng thái nào ngoài "Chờ nộp" (`reviewing`, `interviewing`, `rejected`, `offered`), nếu chưa có `appliedDate` thì tự động gán ngày hôm nay (`getTodayString()`).
  - **Sắp xếp theo ngày mới nhất:** Mọi thay đổi trạng thái hoặc thêm mới công việc phải chạy qua `sortJobsByNewestApplied()` trước khi lưu vào `localStorage`.

---

## 2. Đồng Bộ Dữ Liệu Markdown (`jobs_for_tomorrow.md`)

### Lỗi 2: Cập nhật file Markdown làm reset việc làm người dùng đã nộp
- **Hiện tượng:** Khi nạp danh sách việc làm mới từ file `.md`, các công việc người dùng đã nộp hoặc sửa thông tin bị ghi đè thành "Chờ nộp" (`saved`).
- **Nguyên nhân gốc rễ:** Hàm `mergeImportedJobs()` trước đó so sánh danh sách và gộp thô sơ, chưa phân biệt job chưa động tới và job người dùng đã thao tác.
- **Quy tắc xử lý bắt buộc:**
  - Khi parse file Markdown, chỉ coi dữ liệu nhập vào là bản nháp `saved`.
  - Nếu công việc đã tồn tại trong `localStorage` và có `userModified: true` (hoặc `status !== "saved"`), **giữ nguyên 100% `status`, `appliedDate`, `notes` của người dùng**, chỉ cập nhật thêm `jobUrl` hoặc `jdText` nếu bản cũ còn thiếu.

---

## 3. Xem Chi Tiết JD & May Đo CV

### Lỗi 3: Xem JD của một công ty bị nhảy sang JD của công ty khác
- **Hiện tượng:** Bấm xem mô tả công việc (JD) của các công ty khác nhau nhưng popup luôn hiển thị JD của bản CV đang mở trên trang chính.
- **Nguyên nhân gốc rễ:** Hàm `viewJd(jobId)` ưu tiên đọc `window.cvData.meta.jdText` thay vì đọc trường `jdText` riêng biệt của từng `job` trong mảng `jobs`.
- **Quy tắc xử lý bắt buộc:**
  - `viewJd(jobId)` bắt buộc phải lấy `job.jdText` hoặc `job.notes` của đúng `jobId` đó.
  - Chỉ dùng `window.cvData.meta.jdText` làm fallback cuối cùng khi công việc hoàn toàn chưa có nội dung JD.

### Lỗi 4: URL việc làm bị lỗi 404 từ nguồn Glints / TopCV
- **Hiện tượng:** Link việc làm dạng slug rút gọn (ví dụ Glints thiếu mã UUID hoặc link search chung chung) bấm vào bị báo lỗi 404 hoặc không tìm thấy tin.
- **Quy tắc xử lý bắt buộc:**
  - Với Glints: Chỉ dùng URL chứa mã định danh đầy đủ (`/opportunities/jobs/...-uuid`). Nếu không có URL tuyển dụng trực tiếp, trỏ về trang profile công ty (`https://glints.com/vn/companies/...`) hoặc trang tuyển dụng chính thức của doanh nghiệp.
  - Thường xuyên rà soát và loại bỏ các job hết hạn hoặc sai địa điểm (ngoài TP.HCM) trước khi đưa vào danh sách nộp.

---

## 4. Giao Diện & Bố Cục A4

- **Khổ A4 chuẩn in ấn:** Chiều rộng chuẩn 210mm, không để tràn trang sang trang thứ 2 nếu vị trí là Intern/Fresher.
- **Tiêu đề dự án ngắn gọn:** Không chèn phụ đề song ngữ dài dòng trong thẻ tên dự án để tránh đẩy rớt dòng ngày tháng làm lệch layout A4.
- **Mobile Responsive:** Dùng cơ chế zoom scale canvas A4 (`scale(var(--cv-mobile-scale))`) để giữ nguyên tỉ lệ in ấn thực tế trên màn hình điện thoại như TopCV, không bẻ vỡ bố cục font chữ.
