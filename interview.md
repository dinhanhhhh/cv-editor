# 🚀 CẨM NANG ÔN TẬP: YODY SHAPER PROGRAM 2026
## Vị trí: IT Fresher - AI Product Builder
> **Ứng viên:** Trương Đình Anh  
> **Mục tiêu:** Vượt qua vòng Test Online & Phỏng vấn sơ loại của YODY.

---

## 📌 PHẦN 1: GIỚI THIỆU BẢN THÂN (Định hướng "AI-first & Builder")
*Khi nhà tuyển dụng yêu cầu giới thiệu bản thân, hãy làm nổi bật tinh thần chủ động và khả năng ứng dụng công nghệ để giải quyết bài toán thực tế.*

**Mẫu giới thiệu gợi ý:**
> "Chào anh/chị, em tên là Trương Đình Anh, tốt nghiệp Khoa học Máy tính tại Đại học Mở TP.HCM. Em định vị bản thân là một **AI Product Builder** với tư duy **AI-first**. 
>
> Thay vì chỉ lập trình truyền thống, em tập trung vào việc ứng dụng các mô hình ngôn ngữ lớn (LLM) thông qua **Vibe Coding** (sử dụng Cursor, Claude) để tăng tốc độ xây dựng sản phẩm mẫu (Prototyping) lên gấp 3 lần. Em đã tự tay xây dựng độc lập các dự án Fullstack bằng Next.js, Tailwind CSS và Node.js. 
>
> Hiện tại, em đang tìm hiểu sâu về các công cụ tự động hóa quy trình như **n8n** để giải quyết bài toán tối ưu nguồn lực nội bộ. Em rất hào hứng với cơ hội tại YODY vì đây là môi trường đề cao văn hóa năng động, dám thử nghiệm và tối ưu hóa vận hành bằng công nghệ."

---

## ⚙️ PHẦN 2: KIẾN THỨC CỐT LÕI (Cheat-Sheet)

### 1. Vibe Coding & AI-first là gì?
*   **Vibe Coding:** Là phương thức lập trình mà lập trình viên đóng vai trò là **Kiến trúc sư/Product Manager**, định hướng logic, luồng đi của dữ liệu và thiết kế prompt; còn AI (như Cursor, Claude, GitHub Copilot) đóng vai trò là **Coder** thực thi viết mã nguồn.
*   **Lợi ích:** Rút ngắn thời gian phát triển MVP (Minimum Viable Product), tập trung nhiều hơn vào trải nghiệm người dùng (UX) và logic nghiệp vụ của doanh nghiệp thay vì tốn thời gian sửa lỗi cú pháp.

### 2. Tư duy Automation với n8n
*   **Workflow:** Gồm 3 thành phần chính:
    1.  **Trigger:** Nơi bắt đầu (Webhook từ hệ thống bán hàng, Email nhận được, Cron-job hẹn giờ).
    2.  **Logic/LLM Nodes:** Nơi xử lý dữ liệu (Sử dụng AI Node để phân tích sắc thái bình luận, trích xuất thông tin đơn hàng từ ảnh chụp hóa đơn).
    3.  **Action:** Kết quả đầu ra (Gửi tin nhắn Zalo, cập nhật bảng Google Sheets, đẩy thông tin lên hệ thống ERP).
*   **Tại sao dùng n8n/Low-code:** Giúp doanh nghiệp thử nghiệm nhanh các giải pháp tự động hóa nội bộ mà không cần tốn hàng tháng trời code hệ thống lớn từ đầu.

### 3. RESTful API & JSON
*   **HTTP Methods:**
    *   `GET`: Lấy thông tin đơn hàng/sản phẩm.
    *   `POST`: Tạo đơn hàng mới/khách hàng mới.
    *   `PUT`/`PATCH`: Cập nhật trạng thái đơn hàng (Đang giao -> Đã giao).
    *   `DELETE`: Hủy đơn hàng/xóa tài khoản.
*   **HTTP Status Codes cần nhớ:**
    *   `2xx` (Thành công): `200 OK`, `201 Created`.
    *   `4xx` (Lỗi Client): `400 Bad Request` (sai định dạng dữ liệu), `401 Unauthorized` (chưa đăng nhập), `403 Forbidden` (không có quyền), `404 Not Found`.
    *   `5xx` (Lỗi Server): `500 Internal Server Error`.

---

## 💡 PHẦN 3: GIẢI QUYẾT BÀI TOÁN THỰC TẾ (Case Studies YODY)

### Case 1: Tự động hóa phân loại và xử lý phản hồi khách hàng tiêu cực
*   **Bài toán:** Khách hàng đánh giá sản phẩm YODY trên website/shopee. Làm sao để phát hiện sớm các đánh giá 1-2 sao để bộ phận CSKH xử lý ngay lập tức?
*   **Giải pháp:**
    1.  Dựng webhook nhận dữ liệu đánh giá mới từ sàn/website.
    2.  Dùng API của Claude/GPT quét nội dung đánh giá: Phân loại cảm xúc (Tích cực/Tiêu cực) và lý do (Lỗi size, giao chậm, chất vải xấu).
    3.  Nếu là **Tiêu cực**, tự động tạo một ticket trên hệ thống nội bộ và gửi tin nhắn cảnh báo chứa thông tin khách hàng lên nhóm chat Slack/Telegram của đội CSKH.

### Case 2: Tự động hóa báo cáo tồn kho hàng ngày
*   **Bài toán:** Quản lý kho cần biết những mặt hàng nào sắp hết hạn hoặc còn tồn kho quá nhiều để lên kế hoạch khuyến mãi.
*   **Giải pháp:**
    1.  Cài đặt Cron-job kích hoạt workflow vào 7h sáng mỗi ngày.
    2.  Workflow tự động gọi API lấy dữ liệu tồn kho từ hệ thống ERP.
    3.  Chạy qua một node xử lý (JS/Python hoặc AI Node) lọc ra các mặt hàng có số lượng tồn kho > 500 chiếc hoặc < 10 chiếc.
    4.  Tự động xuất ra file Excel, lưu trữ lên Google Drive và gửi email kèm link báo cáo đến bộ phận mua sắm/marketing.

---

## 🙋‍♂️ PHẦN 4: CÂU HỎI HÀNH VI (Behavioral Questions)

**Câu 1: "Tại sao bạn lại muốn ứng tuyển chương trình The Shaper của YODY thay vì làm Developer truyền thống tại các công ty outsourcing?"**
*   **Trả lời:** "Tại các công ty outsourcing, lập trình viên thường chỉ nhận tài liệu mô tả (SRS) rồi viết code theo yêu cầu mà ít khi được tham gia vào việc giải quyết bài toán thực tế của doanh nghiệp. Ở YODY, em muốn trở thành một Builder thực thụ – trực tiếp nhìn thấy bài toán vận hành của chuỗi cửa hàng thời trang và ứng dụng công nghệ để giải quyết nhanh, tạo ra giá trị tức thì cho người dùng nội bộ và khách hàng."

**Câu 2: "Khi gặp một công nghệ hoàn toàn mới (ví dụ như n8n hoặc một công cụ AI mới ra mắt) mà bạn chưa từng học ở trường, bạn sẽ tiếp cận thế nào?"**
*   **Trả lời:** "Em sẽ tiếp cận theo 3 bước:
    1.  **Đọc nhanh Quickstart/Documentation:** Để hiểu khái niệm cốt lõi và kiến trúc của công cụ.
    2.  **Xây dựng một Mini-project thực tế:** Em học tốt nhất qua việc làm (learning by doing). Em sẽ thử tự tay cấu hình một workflow nhỏ chạy được luôn.
    3.  **Tối ưu hóa bằng AI:** Sử dụng ChatGPT/Claude để hỏi về các Best Practices, cách xử lý các lỗi thường gặp trong quá trình làm."
