# 🚀 CẨM NANG ÔN TẬP PHỎNG VẤN: PHÁT KIẾN GIA (AI & DATA ANALYTICS INTERN)
## CÔNG TY TNHH PHÁT KIẾN GIA (FMCG / THỰC PHẨM NHẬP KHẨU)
> **Ứng viên:** Trương Đình Anh  
> **Vị trí:** Thực Tập Sinh AI & Data Analytics (Full-time / Part-time)  
> **Lĩnh vực doanh nghiệp:** Nhập khẩu & phân phối thực phẩm (Tulip, Monini, Harvey Fresh...)  
> **Trọng tâm kỹ thuật:** Python, SQL (PostgreSQL, MySQL), LLM APIs (Gemini, OpenAI), Workflow Automation, Phân tích dữ liệu Bán hàng & Kho vận  

---

## 📌 PHẦN 1: GIỚI THIỆU BẢN THÂN (GÂY ẤN TƯỢNG TRONG 90 GIÂY)

**Gợi ý trả lời tự tin, đúng trọng tâm và thuyết phục:**
> "Dạ em chào anh/chị trong Ban Tuyển dụng của Phát Kiến Gia. Em tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM.
> 
> Em ứng tuyển vào vị trí Thực Tập Sinh AI & Data Analytics vì nhận thấy thế mạnh của mình rất khớp với định hướng ứng dụng AI vào thực tế doanh nghiệp của công ty.
> 
> Thứ nhất, về **Ứng dụng AI & Tự động hóa (Workflow Automation)**: Em không chỉ dừng lại ở việc dùng các công cụ prompt thông thường như ChatGPT hay Claude, mà đã trực tiếp gọi các **LLM APIs (Google Gemini, OpenAI)** để xây dựng hệ thống tự động hóa thực tế (phân tích, trích xuất dữ liệu và tương tác 2 chiều qua Telegram Bot trên nền tảng Serverless). Em có thể viết script Python tự động hóa các quy trình thủ công như tổng hợp số liệu, tra cứu bảng giá và hỗ trợ các phòng ban.
> 
> Thứ hai, về **Dữ liệu & SQL**: Em có nền tảng vững vàng về cơ sở dữ liệu quan hệ (PostgreSQL, MySQL). Em từng có kinh nghiệm thực tế tại Tami Technology trong việc viết các truy vấn SQL để làm sạch, trích xuất và chuẩn hóa luồng dữ liệu. Đồng thời, em đã tự tay xây dựng hệ thống quản lý bán hàng và kho vận (theo dõi sản phẩm, tồn kho, đơn hàng) nên rất quen thuộc với luồng dữ liệu thương mại.
> 
> Phát Kiến Gia là doanh nghiệp phân phối uy tín với nhiều thương hiệu thực phẩm quốc tế. Em mong muốn mang tư duy tự động hóa và kỹ năng kỹ thuật của mình để hỗ trợ các anh chị tối ưu hóa công việc hàng ngày, đồng thời học hỏi thêm về quy trình vận hành thực tế của ngành FMCG."

---

## ⚙️ PHẦN 2: ỨNG DỤNG AI & AUTOMATION TRONG DOANH NGHIỆP FMCG

### 1. Tại sao doanh nghiệp FMCG / Bán lẻ cần AI và Automation? Em có thể giúp gì cho các phòng ban?
* **Phòng Kinh doanh (Sales):**
  * *Vấn đề:* Nhân viên Sales mất nhiều thời gian tra cứu bảng giá, chính sách chiết khấu, hạn mức công nợ hoặc tình trạng tồn kho của từng mặt hàng (Tulip, Monini...).
  * *Giải pháp AI:* Xây dựng Chatbot tra cứu nội bộ (qua Telegram/Zalo/Web) kết nối API/File dữ liệu tồn kho. Sales chỉ cần gõ tên sản phẩm là bot trả về số lượng còn, quy cách đóng gói và giá bán tức thì.
* **Phòng Kho vận - Logistics & Mua hàng (Purchasing):**
  * *Vấn đề:* Quản lý hạn sử dụng (Expiry date), cảnh báo hàng sắp hết tồn kho an toàn (Safety Stock).
  * *Giải pháp Automation:* Viết script Python chạy tự động mỗi sáng (Cron job), quét CSDL và bắn tin nhắn cảnh báo danh sách các lô hàng tồn kho dưới mức tối thiểu hoặc sắp hết hạn về nhóm chat nội bộ.
* **Phòng Marketing & Nhập khẩu:**
  * *Vấn đề:* Dịch thuật nhãn phụ, tóm tắt tài liệu sản phẩm từ nhà sản xuất nước ngoài (Đan Mạch, Ý, Úc).
  * *Giải pháp AI:* Ứng dụng LLM APIs tự động dịch và chuẩn hóa thông tin sản phẩm sang tiếng Việt theo đúng format nhãn phụ thực phẩm.

---

### 2. Sự khác biệt giữa việc "Dùng ChatGPT trên web" và "Gọi LLM API qua Code"?
* **ChatGPT trên giao diện Web:** Thao tác thủ công từng lần, copy-paste bằng tay, không thể tích hợp trực tiếp vào phần mềm hay cơ sở dữ liệu nội bộ của công ty.
* **Gọi LLM API qua Code (OpenAI / Gemini API):**
  * Có thể tự động hóa hàng loạt (Batch processing): Nạp danh sách 500 sản phẩm từ file Excel, gọi API tự động chuẩn hóa danh mục và lưu ngược lại vào Database.
  * Tích hợp vào quy trình (Pipeline): Kết nối vào Webhook, trigger sự kiện tự động khi có đơn hàng mới hoặc khi có yêu cầu tra cứu.
  * Khống chế định dạng đầu ra (Structured Output / JSON Mode): Ép LLM trả về đúng cấu trúc JSON chuẩn để hệ thống phần mềm đọc được mà không bị lỗi cú pháp.

---

### 3. Em hiểu thế nào về RAG (Retrieval-Augmented Generation)? Khi nào cần dùng RAG thay vì fine-tuning?
* **Khái niệm:** RAG là kỹ thuật kết hợp giữa việc "Truy xuất thông tin (Retrieval)" từ tài liệu nội bộ (PDF chính sách, bảng giá, catalogue sản phẩm) và "Sinh văn bản (Generation)" của LLM.
* **Quy trình hoạt động:**
  1. Chuyển đổi tài liệu nội bộ thành Vector Embeddings và lưu vào cơ sở dữ liệu vector.
  2. Khi người dùng đặt câu hỏi, tìm kiếm các đoạn văn bản có độ tương đồng cao nhất.
  3. Gắn đoạn văn bản đó vào prompt làm ngữ cảnh (Context) để LLM trả lời dựa trên sự thật, tránh bịa đặt (Hallucination).
* **So với Fine-tuning:** 
  * Fine-tuning tốn kém chi phí, dữ liệu cập nhật khó thay đổi và dễ quên kiến thức cũ.
  * RAG phù hợp 100% cho bài toán doanh nghiệp vì dữ liệu sản phẩm, giá bán, chính sách thay đổi liên tục – chỉ cần cập nhật file tài liệu là hệ thống trả lời đúng ngay.

---

## 🗄️ PHẦN 3: CƠ SỞ DỮ LIỆU & SQL PHÂN TÍCH BÁN HÀNG

### 1. Viết câu truy vấn SQL tìm Top 5 sản phẩm bán chạy nhất theo doanh thu trong tháng qua
```sql
SELECT 
    p.id AS product_id,
    p.name AS product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN products p ON oi.product_id = p.id
WHERE o.order_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
  AND o.order_date < DATE_TRUNC('month', CURRENT_DATE)
  AND o.status = 'COMPLETED'
GROUP BY p.id, p.name
ORDER BY total_revenue DESC
LIMIT 5;
```

---

### 2. Viết câu truy vấn tìm các sản phẩm có số lượng tồn kho thấp hơn mức an toàn (Safety Stock)
```sql
SELECT 
    p.id,
    p.sku,
    p.name,
    i.current_stock,
    i.reorder_level,
    (i.reorder_level - i.current_stock) AS stock_deficit
FROM inventory i
JOIN products p ON i.product_id = p.id
WHERE i.current_stock < i.reorder_level
ORDER BY stock_deficit DESC;
```

---

## 💼 PHẦN 4: CÂU HỎI VỀ ĐỘ PHÙ HỢP & THỜI GIAN LÀM VIỆC

### 1. "Công việc này có lúc phải làm việc với các bảng tính Excel lộn xộn của các phòng ban, em có ngại không?"
> *"Dạ hoàn toàn không ạ. Em xem đó là cơ hội tốt nhất để phát huy giá trị của tự động hóa. Trong các dự án trước đây, em đã quen với việc dữ liệu ban đầu thường bị thiếu chuẩn hóa (trùng lặp, sai định dạng ngày tháng, khoảng trắng thừa). Em thường dùng Python với thư viện Pandas hoặc script xử lý dữ liệu để viết các hàm làm sạch (data cleaning) tự động, giúp chuyển đổi các file Excel thủ công thành dữ liệu có cấu trúc chuẩn để đưa vào CSDL hoặc báo cáo một cách chính xác."*

### 2. "Thời gian học tập và làm việc của em như thế nào? Có đáp ứng được yêu cầu của công ty không?"
> *"Dạ em vừa hoàn thành chương trình Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM nên thời gian hiện tại của em rất chủ động và linh hoạt. Em hoàn toàn có thể đáp ứng thời gian làm việc từ 20 giờ/tuần trở lên, sẵn sàng lên văn phòng công ty 2-3 buổi/tuần theo lịch phân công và có thể làm việc toàn thời gian khi công ty có dự án cần đẩy nhanh tiến độ."*

### 3. "Mục tiêu của em trong 3 - 6 tháng thực tập tại Phát Kiến Gia là gì?"
> *"Mục tiêu của em là trong tháng đầu tiên nắm bắt trọn vẹn luồng dữ liệu kinh doanh và danh mục sản phẩm của công ty, triển khai được ít nhất 1-2 công cụ tự động hóa hoặc bot hỗ trợ thiết thực cho các phòng ban (như tra cứu tồn kho, tự động xuất báo cáo số liệu). Sau đó, em muốn đào sâu hơn vào việc xây dựng luồng phân tích dữ liệu chuyên sâu và phấn đấu hoàn thành xuất sắc kỳ thực tập để có cơ hội trở thành nhân viên chính thức đồng hành lâu dài cùng công ty."*
