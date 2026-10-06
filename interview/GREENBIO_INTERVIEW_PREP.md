# 🚀 CẨM NANG ÔN TẬP PHỎNG VẤN: GREEN BIO (WEB DEVELOPER INTERN)
## CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO
> **Ứng viên:** Trương Đình Anh  
> **Vị trí:** Web Developer Intern (Phát triển hệ thống nội bộ: Bán hàng, Kho vận, Nhân sự & Website)  
> **Địa điểm làm việc:** 85 Phạm Huy Thông, Phường Gò Vấp, TP.HCM  

---

## 📌 PHẦN 1: GIỚI THIỆU BẢN THÂN (GÂY ẤN TƯỢNG TRONG 90 GIÂY)

**Gợi ý trả lời tự tin, mạch lạc (Đúng thực lực & Thuyết phục):**
> "Dạ em chào anh/chị trong Ban Tuyển dụng của Green Bio. Em tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM.
> 
> Thế mạnh nổi trội và tự tin nhất của em là phát triển web Frontend với **React.js, Next.js** và xây dựng các giao diện quản trị responsive mượt mà trên mọi thiết bị. Bên cạnh đó, em làm việc rất chắc tay với các hệ cơ sở dữ liệu quan hệ như **PostgreSQL và MySQL**, từ việc thiết kế lược đồ bảng chuẩn hóa 3NF cho đến viết các câu truy vấn SQL phức tạp phục vụ tổng hợp dữ liệu và xuất báo cáo.
> 
> Về Backend, em có kiến thức nền tảng tốt về **Python (FastAPI, Django REST Framework)** và tư duy xây dựng RESTful APIs chuẩn mực. Em đã trực tiếp thực hành phát triển các dự án thực tế về quản lý bán hàng & luồng kho vận (Order/Inventory) và hệ thống quản trị nhân sự/hồ sơ (RBAC, Dashboard).
> 
> Đọc mô tả công việc tại Green Bio, em thấy vị trí Web Developer Intern rất phù hợp với thế mạnh React và CSDL của em, đồng thời tạo cơ hội tuyệt vời để em vận dụng và đào sâu thêm Python trong môi trường thực tế của doanh nghiệp. Nhà em ở Thủ Đức, di chuyển qua văn phòng công ty ở đường Phạm Huy Thông (Gò Vấp) rất gần và thuận lợi, nên em hoàn toàn có thể làm việc trực tiếp toàn thời gian và gắn bó lâu dài cùng công ty."

---

## ⚙️ PHẦN 2: KIẾN THỨC PYTHON & BACKEND (TRỌNG TÂM JD)

### 1. So sánh Django, FastAPI và Flask: Khi nào nên dùng framework nào?
* **Django (và Django REST Framework - DRF):**
  * *Đặc điểm:* Framework "Batteries-included" (có sẵn hầu như mọi thứ: ORM mạnh mẽ, hệ thống Authentication, trang Admin quản trị cực kỳ xịn, cơ chế bảo mật CSRF/SQL Injection tích hợp sẵn).
  * *Khi nào dùng:* Rất phù hợp cho các hệ thống phần mềm doanh nghiệp, ERP, CRM nội bộ (quản lý bán hàng, kho, nhân sự) cần dựng nhanh trang quản trị dữ liệu và cấu trúc dự án chuẩn mực.
* **FastAPI:**
  * *Đặc điểm:* Hiện đại, hiệu năng cao (dựa trên Starlette và Pydantic), hỗ trợ `async/await` bất đồng bộ native, tự động sinh tài liệu Swagger/OpenAPI docs chuẩn xác.
  * *Khi nào dùng:* Phù hợp xây dựng REST API thuần túy, Microservices, các API cần xử lý lưu lượng cao hoặc tích hợp dữ liệu thời gian thực giữa các hệ sinh thái.
* **Flask:**
  * *Đặc điểm:* Micro-framework cực kỳ nhẹ, tối giản, tự do lựa chọn thư viện (tự chọn ORM như SQLAlchemy).
  * *Khi nào dùng:* Phù hợp cho các ứng dụng nhỏ, prototype hoặc các dịch vụ độc lập không quá cồng kềnh.

---

### 2. Pydantic (FastAPI) và Serializer (Django REST Framework) giải quyết vấn đề gì?
* **Bản chất chung:** Cả hai đều giải quyết bài toán:
  1. **Data Validation:** Kiểm tra dữ liệu đầu vào từ Client gửi lên (Body/Query Params) có đúng kiểu dữ liệu, bắt buộc hay không (VD: email đúng định dạng, số lượng hàng tồn kho phải là số nguyên > 0).
  2. **Data Serialization / Deserialization:** Chuyển đổi giữa các đối tượng phức tạp (Python Object / Database Model) sang định dạng JSON để trả về Client và ngược lại.
* **Ví dụ thực tế:** Khi tạo đơn hàng mới, Pydantic Schema hoặc DRF Serializer sẽ kiểm tra ngay xem danh sách sản phẩm có rỗng không, số lượng mua có âm không, trước khi dữ liệu chạm vào Database logic.

---

### 3. Clean Code trong Backend Python là gì? Em áp dụng như thế nào?
* **Tuân thủ PEP 8:** Quy chuẩn đặt tên (snake_case cho biến/hàm, PascalCase cho Class), tổ chức import rõ ràng.
* **Kiến trúc phân lớp rõ ràng (Layered Architecture):**
  * `Router/Controller`: Chỉ nhận request, validate input và trả về HTTP response.
  * `Service / Business Logic`: Xử lý nghiệp vụ (tính tổng tiền, trừ kho, gửi thông báo).
  * `Repository / Models`: Thao tác trực tiếp với Database (ORM hoặc truy vấn SQL).
  * *Lợi ích:* Code dễ bảo trì, dễ viết Unit Test và không bị rối khi logic phình to.
* **Xử lý ngoại lệ tập trung (Global Exception Handling):** Dùng Middleware hoặc Custom Exception Handlers để bắt lỗi, không để lộ Stack Trace nội bộ ra ngoài, trả về định dạng JSON lỗi chuẩn (`{ "success": false, "message": "...", "code": 400 }`).

---

## 🗄️ PHẦN 3: CƠ SỞ DỮ LIỆU (POSTGRESQL & MYSQL) & BÁO CÁO DỮ LIỆU

### 1. Thiết kế CSDL cho bài toán: Bán hàng & Quản lý kho (Sales & Inventory)
**Các bảng cốt lõi (Chuẩn hóa 3NF):**
1. `categories` (id, name, slug)
2. `products` (id, category_id, name, sku, price, is_active)
3. `warehouses` (id, name, address)
4. `inventory_stocks` (id, warehouse_id, product_id, quantity, updated_at) -> *Quản lý số lượng tồn của từng sản phẩm tại từng kho.*
5. `orders` (id, customer_name, phone, address, total_amount, status, created_at)
6. `order_items` (id, order_id, product_id, unit_price, quantity)

---

### 2. Làm thế nào để giải quyết vấn đề Race Condition (Bán quá số lượng tồn kho)?
* **Tình huống:** Trong kho chỉ còn đúng 1 sản phẩm cuối cùng. Cùng 1 giây, 2 khách hàng đồng thời bấm "Đặt hàng".
* **Giải pháp chuẩn:**
  1. **Dùng Database Transaction:** Đảm bảo tính ACID, bọc toàn bộ thao tác trong 1 transaction (`BEGIN TRANSACTION` ... `COMMIT`).
  2. **Row-level Locking (Pessimistic Locking):** Dùng câu lệnh `SELECT quantity FROM inventory_stocks WHERE product_id = ... FOR UPDATE`. Khi đó, transaction thứ nhất sẽ khóa dòng này lại, transaction thứ hai bắt buộc phải chờ transaction thứ nhất hoàn tất.
  3. **Atomic Update (Optimistic):**
     ```sql
     UPDATE inventory_stocks 
     SET quantity = quantity - :buy_qty 
     WHERE product_id = :prod_id AND quantity >= :buy_qty;
     ```
     Sau đó kiểm tra số dòng bị ảnh hưởng (`affected rows`). Nếu là 0, tức là kho không đủ hàng -> Báo lỗi cho khách ngay lập tức.

---

### 3. Viết câu truy vấn SQL tổng hợp báo cáo doanh thu theo tháng
**Tình huống phỏng vấn:** Viết câu truy vấn lấy tổng doanh thu và tổng số đơn hàng thành công theo từng tháng trong năm 2026.
* **Trên PostgreSQL:**
```sql
SELECT 
    DATE_TRUNC('month', created_at) AS report_month,
    COUNT(id) AS total_orders,
    SUM(total_amount) AS total_revenue
FROM orders
WHERE status = 'COMPLETED' 
  AND created_at >= '2026-01-01' 
  AND created_at < '2027-01-01'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY report_month ASC;
```
* **Tối ưu hiệu năng báo cáo:** Tạo Index trên cột `status` và `created_at`:
```sql
CREATE INDEX idx_orders_status_created ON orders (status, created_at);
```

---

## 🌐 PHẦN 4: FRONTEND REACT & RESPONSIVE, SEO

### 1. Làm thế nào để xây dựng bảng dữ liệu (Data Table) quản lý hàng nghìn dòng mượt mà?
* **Pagination (Phân trang ở Server-side):** Không tải toàn bộ 10,000 dòng lên trình duyệt. Gửi query params `?page=1&limit=20`, Backend truy vấn `LIMIT 20 OFFSET 0`.
* **Debounce khi tìm kiếm:** Khi người dùng gõ từ khóa tìm sản phẩm, dùng kỹ thuật `debounce` (trễ khoảng 300ms - 500ms) trước khi gọi API, tránh gửi hàng chục request liên tục làm nghẽn server.
* **Virtualization (Nếu cần render dài):** Dùng các thư viện như `react-window` hoặc `tanstack-virtual` để chỉ render những dòng đang hiển thị trong khung nhìn màn hình.

---

### 2. Thiết kế Responsive cho giao diện quản trị (Admin Dashboard)
* **Mobile & Tablet:** Nhân viên kho hoặc nhân viên bán hàng thường cầm điện thoại/iPad để kiểm tra hàng.
* **Giải pháp:**
  * Sidebar menu thu gọn thành Hamburger drawer (Menu trượt).
  * Bảng dữ liệu dài (Table) cho phép cuộn ngang (`overflow-x: auto`) hoặc chuyển đổi thành dạng danh sách thẻ (Card view) trên màn hình nhỏ.
  * Sử dụng các breakpoint chuẩn (Mobile `< 768px`, Tablet `768px - 1024px`, Desktop `> 1024px`) với Flexbox và CSS Grid.
  * Đảm bảo nút bấm tối thiểu `44px x 44px` để dễ chạm bằng ngón tay.

---

### 3. Kiến thức SEO cơ bản cho website công ty
* **Semantic HTML:** Sử dụng đúng thẻ `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` thay vì lạm dụng thẻ `<div>`.
* **Heading Hierarchy:** Mỗi trang chỉ có 1 thẻ `<h1>` duy nhất chứa từ khóa chính, tiếp theo là `<h2>`, `<h3>`.
* **Meta Tags & Open Graph:** Cung cấp đầy đủ `title`, `meta description` (150-160 ký tự), các thẻ `og:title`, `og:image`, `og:description` để hiển thị đẹp khi chia sẻ link lên Zalo, Facebook.
* **Performance:** Tối ưu kích thước hình ảnh (WebP format), lazy load ảnh và tối ưu Core Web Vitals (LCP, CLS, FID).

---

## 🚀 PHẦN 5: CÔNG NGHỆ CỘNG ĐIỂM (CELERY, REDIS, DOCKER, LINUX)

### 1. Celery và Redis hoạt động như thế nào trong ứng dụng Python?
* **Vấn đề thực tế:** Khi một khách hàng đặt hàng hoặc xuất file báo cáo kho vận nặng (10,000 dòng):
  * Nếu chạy đồng bộ (synchronous), người dùng phải ngồi chờ 10-15 giây, trình duyệt có thể bị timeout.
* **Giải pháp với Celery & Redis:**
  * **Redis:** Đóng vai trò là **Message Broker** (hàng đợi tin nhắn trong RAM, cực nhanh).
  * **Celery:** Đóng vai trò là **Task Queue / Worker**.
  * **Quy trình:** Khi bấm "Xuất báo cáo", Backend chỉ tạo 1 task, đẩy vào Redis (`task.delay(...)`) và trả về ngay mã `202 Accepted` cho client trong 50ms. Worker Celery chạy ngầm bên dưới sẽ lấy task ra xử lý, tạo file Excel rồi lưu lại hoặc gửi email. Người dùng không phải chờ đợi.

---

### 2. Docker mang lại lợi ích gì cho dự án?
* **"Chạy được trên máy em nhưng lỗi trên server":** Docker đóng gói toàn bộ code, runtime Python/Node.js, thư viện phụ thuộc và biến môi trường vào 1 Image độc lập.
* **Khởi tạo môi trường nhanh:** Chỉ cần 1 lệnh `docker compose up -d`, cả hệ thống gồm Backend (FastAPI/Django), Database (PostgreSQL) và Cache (Redis) đều được dựng lên hoàn chỉnh trong vài phút.

---

### 3. Một số lệnh Linux cơ bản thường dùng khi vận hành web
* `ls -la`: Liệt kê tất cả file và thư mục kèm quyền hạn và kích thước.
* `tail -f /var/log/nginx/error.log` hoặc `docker logs -f <container_name>`: Theo dõi log lỗi thời gian thực.
* `grep -rn "ERROR" ./logs/`: Tìm kiếm chuỗi lỗi trong toàn bộ thư mục log.
* `ps aux | grep python`: Kiểm tra tiến trình Python nào đang chạy trên máy chủ.
* `top` / `htop`: Theo dõi mức tiêu hao CPU và RAM của hệ thống.

---

## 🎯 PHẦN 6: BỘ CÂU HỎI TÌNH HUỐNG (BEHAVIORAL & SCENARIO)

### Câu 1: "Nếu vào làm, em chưa thành thạo sâu một framework nội bộ của công ty (ví dụ Django hoặc một thư viện lạ), em sẽ làm thế nào?"
> **Trả lời:**
> "Dạ, nền tảng cốt lõi của em là Khoa học Máy tính, em đã nắm vững tư duy lập trình hướng đối tượng (OOP), cấu trúc dữ liệu, nguyên lý REST API và mô hình CSDL quan hệ. Framework chỉ là công cụ thực thi.
> Khi tiếp cận công nghệ mới, cách học của em gồm 3 bước:
> 1. Đọc tài liệu chính thức (Official Documentation) và xem qua kiến trúc mẫu của dự án hiện tại để hiểu luồng chạy của công ty.
> 2. Đọc code cũ của các anh chị đi trước để nắm coding convention và cách tổ chức thư mục.
> 3. Tận dụng các công cụ hỗ trợ để tra cứu nhanh, chủ động ghi chú các điểm chưa hiểu và hỏi đúng trọng tâm Mentor để không làm phiền thời gian của anh chị.
> Em tự tin có khả năng tự học tốt và có thể bắt nhịp công việc thực tế trong vòng 3 đến 5 ngày."

---

### Câu 2: "Tại sao em muốn ứng tuyển vào Green Bio thay vì một công ty phần mềm (Outsourcing)?"
> **Trả lời:**
> "Dạ, ở công ty phần mềm thuần túy, thường các bạn chỉ nhận task kỹ thuật được giao mà ít khi thấy được bức tranh toàn cảnh về cách doanh nghiệp vận hành.
> Còn tại Green Bio, công ty có sản phẩm thực tế, có quy trình vận hành từ bán hàng, quản lý kho vận đến nhân sự. Em rất mong muốn được hiểu sâu quy trình kinh doanh thực tế, trực tiếp xây dựng những công cụ nội bộ giúp nhân viên và ban lãnh đạo tiết kiệm thời gian, giảm sai sót dữ liệu và tối ưu vận hành. Cảm giác sản phẩm mình viết ra giải quyết được nỗi đau hàng ngày của người dùng nội bộ là điều em thấy giá trị nhất ạ."

---

### Câu 3: "Câu hỏi ngược lại dành cho Nhà tuyển dụng ở cuối buổi phỏng vấn:"
* **Câu 1:** *"Dạ cho em hỏi hiện tại hệ thống quản lý nội bộ của công ty đang vận hành bằng công nghệ nào chính (Django hay FastAPI/React), và mục tiêu ưu tiên của team công nghệ trong quý tới là gì ạ?"*
* **Câu 2:** *"Trong quá trình thực tập, các bạn thực tập sinh thường sẽ được kèm cặp theo mô hình thế nào (có Mentor 1:1 không), và tiêu chí cụ thể để đánh giá một bạn hoàn thành tốt kỳ thực tập để lên nhân viên chính thức là gì ạ?"*
