# 🚀 TÀI LIỆU ÔN TẬP PHỎNG VẤN (INTERVIEW CHEAT-SHEET)
## Vị trí: Intern Fullstack Developer (Node.js / Next.js / MySQL)
> **Ứng viên:** Trương Đình Anh
> **Mục tiêu:** Vượt qua vòng phỏng vấn tại KIT Group & các công ty công nghệ.

Tài liệu này tổng hợp các câu hỏi kỹ thuật cốt lõi dựa trên **CV thực tế** của bạn và **JD tuyển dụng**. Hãy ôn tập kỹ các phần này để trả lời phỏng vấn một cách tự tin, mạch lạc nhất.

---

## 📂 PHẦN 1: NODE.JS & BACK-END DEVELOPMENT (EXPRESS)

### 1. Cơ chế xác thực JWT (JSON Web Token) hoạt động như thế nào?
JWT là một cơ chế xác thực **stateless**. Cách giải thích ngắn gọn, dễ nói:
1. **Đăng nhập:** Client gửi email/username và password lên server.
2. **Tạo token:** Nếu thông tin hợp lệ, server tạo `access token` (và có thể có thêm `refresh token`) rồi ký token bằng `SECRET_KEY`.
3. **Gửi token ở các request sau:** Client gửi token kèm theo request để chứng minh danh tính.
4. **Xác thực:** Server **verify chữ ký** của token, kiểm tra hạn dùng (`exp`) và dữ liệu bên trong token. Nếu hợp lệ thì cho đi tiếp, thường sẽ gán thông tin user vào `req.user`.

**Lưu ý khi trả lời để tránh bị bắt bẻ:**
* Nếu dùng **Bearer token**, client thường gửi qua header: `Authorization: Bearer <token>`.
* Nếu dùng **HttpOnly cookie**, trình duyệt sẽ tự gửi qua `Cookie` header. Với web app, đây thường là cách an toàn hơn `localStorage` vì giảm rủi ro XSS.

* **Câu hỏi mở rộng:** *Tại sao dùng JWT thay vì Session?*
  * **Trả lời:** JWT dễ scale hơn vì server không phải giữ session trong bộ nhớ cho từng người dùng. Tuy nhiên, Session lại dễ thu hồi (revoke) hơn. Em thường xem JWT phù hợp với hệ thống API/stateless, còn lựa chọn cụ thể còn phụ thuộc kiến trúc hệ thống.

---

### 2. Làm thế nào để phân quyền người dùng (RBAC - Role-Based Access Control)?
**Cách bạn đã làm trong dự án (Job Portal):**
* Em định nghĩa các Role trong Database (ví dụ: `Candidate` và `Recruiter`).
* Em xây dựng một **Middleware phân quyền** trong Express:
```javascript
const authorize = (roles = []) => {
  return (req, res, next) => {
    // req.user được gán từ middleware decode JWT trước đó
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Không có quyền truy cập!" });
    }
    next();
  };
};
// Sử dụng: router.post('/jobs', authorize(['Recruiter']), createJob);
```

**Điểm cần nhấn mạnh khi phỏng vấn:**
* Role phải đến từ token đã được server xác thực hoặc từ dữ liệu trong database, không tin trực tiếp dữ liệu role do client gửi lên.
* RBAC giúp gom logic phân quyền vào middleware, tránh lặp lại ở từng controller.

---

### 3. Xử lý tải lên file (File Upload) trong Express thế nào để đảm bảo bảo mật?
**Các ý ngắn gọn nên trả lời:**
1. **Kiểm tra loại file:** Không chỉ kiểm tra phần đuôi file mà còn nên kiểm tra `mimetype` để chỉ cho phép các định dạng hợp lệ như `.pdf`, `.doc`, `.docx`, `.jpg`, `.png`.
2. **Giới hạn dung lượng:** Dùng `multer` để giới hạn kích thước file, ví dụ tối đa 5MB, nhằm tránh upload file quá lớn gây quá tải.
3. **Đổi tên file khi lưu:** Dùng UUID hoặc timestamp để tránh trùng tên file và tránh ghi đè.
4. **Không để lộ file upload công khai nếu không cần:** Nếu là tài liệu nhạy cảm như CV, nên lưu ở khu vực private hoặc chỉ cho phép tải xuống qua server kiểm soát quyền truy cập.
5. **Validate thêm ở backend:** Không tin dữ liệu từ client; nên kiểm tra lại đầy đủ ở server trước khi xử lý tiếp.

**Nếu muốn nói sâu hơn:**
* Với hệ thống production, có thể bổ sung quét virus/malware, giới hạn số lần upload, và log lại các upload lỗi để theo dõi bảo mật.

---

## 🗄️ PHẦN 2: CƠ SỞ DỮ LIỆU & MYSQL (SEQUELIZE ORM)

### 1. Database Indexing (Đánh chỉ mục) là gì? Khi nào nên và không nên dùng?
**Khái niệm:**
Index giống như một "mục lục" của cuốn sách. Thay vì quét toàn bộ bảng từ đầu đến cuối (Full Table Scan), MySQL có thể tìm nhanh hơn thông qua cấu trúc **B+Tree** của index trong đa số trường hợp với InnoDB.

* **Khi nào NÊN dùng:**
  * Đánh chỉ mục trên các cột thường xuất hiện trong `WHERE`, `JOIN`, `ORDER BY`, hoặc các cột khóa ngoại.
  * Cân nhắc **composite index** nếu truy vấn thường lọc theo nhiều cột cùng lúc.
* **Khi nào KHÔNG NÊN dùng (hoặc hạn chế):**
  * Không lạm dụng index trên các cột thường xuyên bị cập nhật vì mỗi lần ghi dữ liệu, MySQL phải cập nhật lại index, làm giảm hiệu suất ghi.
  * Các cột có độ đa dạng dữ liệu thấp (ví dụ cột `gender` chỉ có Nam/Nữ).
  * Những truy vấn như `LIKE '%abc'` thường không tận dụng tốt index thông thường vì có wildcard ở đầu.

---

### 2. Làm thế nào bạn tối ưu hóa các truy vấn MySQL phức tạp dưới 250ms?
**Kinh nghiệm thực tế của bạn:**
1. **Đọc execution plan trước:** Em dùng `EXPLAIN` để xem truy vấn có bị Full Table Scan không, có dùng index đúng như mong muốn không.
2. **Sử dụng Index đúng chỗ:** Đánh chỉ mục cho các cột khóa ngoại (`recruiter_id`, `candidate_id`) và các trường tìm kiếm/lọc chính.
3. **Hạn chế `SELECT *`:** Chỉ lấy các cột thật sự cần thiết để giảm dữ liệu truyền từ DB lên server.
4. **Tối ưu `JOIN` và `include`:** Khi dùng Sequelize, em chỉ `include` các bảng cần thiết và giới hạn điều kiện lọc sớm để tránh kéo quá nhiều dữ liệu.
5. **Phân trang và giới hạn dữ liệu:** Dùng `LIMIT/OFFSET` hoặc pagination để tránh trả về hàng nghìn bản ghi trong một request.

---

## 🎨 PHẦN 3: FRONT-END DEVELOPMENT (NEXT.JS & REACT)

### 1. Sự khác biệt giữa Server Components (RSC) và Client Components trong Next.js 13+ là gì?
* **Server Components (mặc định trong App Router):** Render ở phía server, phù hợp cho fetch dữ liệu và giữ logic/secrets ở server-side, giúp giảm lượng JavaScript gửi về client. Tuy nhiên, chúng không dùng được `useState`, `useEffect` hay browser APIs.
* **Client Components (có `"use client"`):** Chạy/hydrate ở phía client, hỗ trợ hooks, event handlers và các tương tác UI.

**Quy tắc vàng:** Ưu tiên Server Components cho phần render dữ liệu tĩnh hoặc fetch dữ liệu. Chỉ chuyển sang Client Components khi thật sự cần tương tác như click, nhập form, state cục bộ, hoặc dùng browser APIs.

**Lưu ý để trả lời chuẩn hơn:**
* Server Component không tự động "an toàn tuyệt đối"; vẫn phải kiểm tra authentication, authorization và validate dữ liệu ở phía server.
* Thực tế thường tách theo kiểu: Server Component lo data fetching, Client Component lo UI tương tác.

---

### 2. Tại sao bạn xử lý 3 trạng thái (Loading, Empty, Error) cho mọi Component tương tác?
**Tư duy sản phẩm (Product Mindset):**
* **Loading State:** Giúp người dùng biết hệ thống đang xử lý, tránh cảm giác ứng dụng bị đơ (sử dụng Skeleton/Spinner).
* **Empty State:** Chỉ dẫn hành động tiếp theo cho người dùng thay vì để màn hình trắng trơn (ví dụ: *"Chưa có dự án nào - Tạo ngay dự án mới"*).
* **Error State:** Giúp nâng cao trải nghiệm khi có sự cố mạng/server, luôn đi kèm nút **Thử lại (Retry)** để phục hồi luồng hoạt động mà không bắt người dùng tải lại trang.

---

## ☁️ PHẦN 4: DEVOPS & MÔI TRƯỜNG PHÁT TRIỂN (DOCKER, AWS)

### 1. Tại sao bạn sử dụng Docker Compose trong môi trường phát triển cục bộ (Local)?
Docker Compose giúp định nghĩa và chạy các ứng dụng đa container. Em dùng nó để đóng gói MySQL và server Node.js thành các container riêng, giúp mọi người trong nhóm có môi trường phát triển đồng nhất. Nhờ vậy, khi onboard hoặc chạy dự án trên máy mới sẽ nhanh hơn, giảm lỗi kiểu "máy em chạy được nhưng máy bạn không chạy được". Thực tế chỉ cần `docker compose up` là có thể khởi động nhanh môi trường local.

---

### 2. Nếu được hỏi về Presigned URL của AWS S3 thì nên trả lời thế nào?
Nếu interviewer hỏi phần này, bạn nên trả lời ở mức **hiểu khái niệm**, đúng với CV hiện tại:

Presigned URL là một đường dẫn tạm thời do server tạo ra bằng quyền của AWS. Nó cho phép client upload hoặc download một file cụ thể trong thời gian ngắn mà **không cần public toàn bộ bucket**.

**Vì sao dùng nó:**
* Giữ file ở chế độ private thay vì public.
* Chỉ cấp quyền truy cập tạm thời cho đúng file cần dùng.
* Hạn chế lộ dữ liệu nếu đường link bị chia sẻ vì link sẽ hết hạn.

**Cách nói an toàn khi phỏng vấn:**
* "Hiện tại em mới tìm hiểu AWS ở mức cơ bản, chưa triển khai production sâu. Tuy nhiên theo hiểu biết của em, Presigned URL là cách phù hợp để cho phép truy cập tạm thời đến object trong S3 mà vẫn giữ bucket ở chế độ private."

---

## 🤝 PHẦN 5: KỸ NĂNG MỀM & QUY TRÌNH AGILE

### 1. Bạn hiểu thế nào về quy trình Agile/Scrum?
Agile là một triết lý phát triển phần mềm linh hoạt, tập trung vào việc bàn giao sản phẩm sớm và cải tiến liên tục. Scrum là một framework phổ biến triển khai Agile. Trong đó:
* Công việc được chia nhỏ thành các chu kỳ ngắn gọi là **Sprint** (thường từ 1-4 tuần).
* Mỗi ngày cả đội có buổi họp ngắn **Daily Standup** (15 phút) để báo cáo: Hôm qua làm gì? Hôm nay làm gì? Có gặp khó khăn gì không?
* Cuối Sprint có buổi **Demo/Review** sản phẩm và **Retrospective** (Họp cải tiến) để rút kinh nghiệm cho Sprint tiếp theo.

### 2. Khi gặp một task khó/bị kẹt (blocked), bạn sẽ giải quyết thế nào?
1. **Tự nghiên cứu trước (15-30 phút):** Tra cứu tài liệu chính thức, tìm kiếm trên StackOverflow hoặc sử dụng AI để hiểu gốc rễ lỗi.
2. **Đặt câu hỏi thông minh:** Nếu vẫn chưa giải quyết được, em sẽ chủ động liên hệ với Mentor hoặc đồng nghiệp. Khi hỏi, em luôn chuẩn bị sẵn:
   * Mô tả lỗi rõ ràng kèm log/ảnh chụp màn hình.
   * Các hướng em đã thử giải quyết nhưng chưa thành công.
   * Đề xuất hướng giải quyết hiện tại để xin ý kiến phản hồi của họ.

---

## 🚀 PHẦN 6: BÀI KIỂM TRA TUYỂN DỤNG FULL STACK DEVELOPER (OCTOSOFT - 14 CÂU THỰC CHIẾN)
> 📄 **Xem tài liệu giải chi tiết đầy đủ 100% kèm code & giải thích tại:** [OCTOSOFT_TEST_SOLUTIONS.md](file:///c:/Users/Admin/Documents/CV_Truong%20Dinh%20Anh/Ph%E1%BB%8Fng%20v%E1%BA%A5n/cv-editor/OCTOSOFT_TEST_SOLUTIONS.md)

### 📌 Tóm Tắt 14 Câu Hỏi & Khung Đáp Án Cốt Tử:

#### 1. API Tạo Đơn Hàng (Validation, Authorization, Transaction, Idempotency)
- **Request chính (Sync):** Authen/Author -> Validate payload -> Khóa tồn kho (`SELECT ... FOR UPDATE` hoặc Atomic update `stock = stock - qty WHERE stock >= qty`) -> Trừ lượt voucher -> Tạo đơn hàng status `PENDING_PAYMENT`. Phải bọc trong **Database Transaction**. Dùng **Idempotency-Key** trong header để chống duplicate.
- **Queue/Worker (Async):** Gửi Email, render hóa đơn PDF, bắn log BI, lập lịch delayed job tự hủy đơn sau 15p nếu chưa thanh toán. *TẠI SAO:* Tác vụ I/O lâu (1-3s) làm nghẽn worker pool nếu để ở request chính; đẩy ra queue để có thể retry độc lập khi bên thứ ba chập chờn.

#### 2. Query Triệu Bản Ghi Bị Chậm Dù CPU Không Cao
- **Nguyên nhân CPU thấp nhưng API chậm:** Bị nghẽn I/O (chờ đọc đĩa) hoặc nghẽn hàng đợi kết nối (Connection Pool Exhaustion / Row Lock).
- **Thứ tự điều tra:** `EXPLAIN (ANALYZE, BUFFERS)` (xem Seq Scan vs Index Scan) -> Composite Index (thứ tự: Equality -> Range -> Sort) -> Pagination (chuyển `OFFSET` sang Keyset/Cursor Pagination) -> N+1 Queries (Eager loading) -> Connection Pool size -> Cache Redis -> Tách Export Excel ra worker stream ghi S3.

#### 3. Sự Cố JWT: 401, Multi-tab Logout, Mất Phiên Mobile
- **Nhiều tab bị logout (Refresh Race):** Cơ chế Refresh Token Rotation (RTR) hủy token cũ ngay lập tức. Khi nhiều tab cùng refresh, tab 2 gửi token cũ vừa bị hủy -> Backend nghi ngờ bị Replay Attack -> Thu hồi toàn bộ session. *Khắc phục:* Frontend dùng Mutex/Promise queue (`BroadcastChannel`); Backend cấp **Grace Period 15-30s** cho phép token cũ còn giá trị ngắn hạn.
- **Vừa login vẫn 401:** Do lệch đồng hồ (Clock Skew) giữa Auth server và API server. Cấu hình `clockTolerance: 30s`.

#### 4. Refactor Backend Node.js/Python Phình To
- **Strangler Fig Pattern:** Tách từng lát cắt (Vertical Slice). Tách Repository (gom query) -> Tách Service (business logic) -> Controller chỉ validate DTO và trả HTTP status.
- **Chuẩn hóa:** Error format theo chuẩn RFC 7807; Logging có `traceId` (UUID) xuyên suốt request; DB Migration theo quy tắc **Expand & Contract** (thêm cột mới song song, dual write, switch read, xóa cột cũ sau 2 tuần).

#### 5. React Race Condition Khi Đổi Filter Nhanh
- **Nguyên nhân:** Request sau về trước request trước do network latency; unmount component nhưng promise resolve vẫn gọi `setState`.
- **Khắc phục:** Dùng `AbortController` trong cleanup của `useEffect` để chủ động cancel request cũ; hoặc dùng **TanStack Query** có sẵn cơ chế auto-cancel, deduplication và `keepPreviousData` chống nhấp nháy loading.

#### 6. State Form Đơn Hàng Phức Tạp & Single Source of Truth
- **Phân chia state:** Local (React Hook Form nhập liệu), Server (TanStack Query nạp voucher/sản phẩm), Derived State (dùng `useMemo` tính subtotal, không tạo `useState` riêng).
- **Frontend CHỈ HIỂN THỊ, KHÔNG LÀ NGUỒN SỰ THẬT:** Đơn giá, tiền giảm voucher, tổng bill, số lượng tồn kho. Frontend có thể bị sửa bằng DevTools; Backend DB mới là nguồn sự thật tuyệt đối.

#### 7. Profiling & Tối Ưu React Khi Danh Sách Lớn
- **Giả thuyết hàng đầu:** DOM Bloat (render hàng nghìn DOM node làm nghẽn RAM và Layout recalculation).
- **Giải pháp:** **List Virtualization (`@tanstack/react-virtual`)** chỉ render 10-15 phần tử trong viewport; bọc `React.memo` + `useCallback` chống render thừa; lazy load ảnh. Đo bằng INP (< 50ms) và render commit (< 16ms).

#### 8. RBAC, XSS/CSRF & Token Storage
- **Frontend Guard chỉ để phục vụ UX:** Bảo mật thực sự 100% nằm ở Backend API Middleware.
- **Lưu trữ:** Access token trong Memory, Refresh token trong **HttpOnly, Secure, SameSite=Lax Cookie** để miễn nhiễm cả XSS lẫn CSRF. Contract trả về `permissions: ['order:read', 'order:delete']` thay vì role name cố định.

#### 9. Tiếp Quản Legacy Codebase 8 Tuần & AI Audit
- **8 Tuần (Team 4 Dev):** T1-2 (Cài Sentry log, setup CI/CD pipeline tự động, bỏ deploy tay); T3-4 (Quy chuẩn PostgreSQL = giao dịch tài chính, MongoDB = log phi cấu trúc; viết E2E test cho Login/Checkout/Payment); T5-6 (Làm feature mới theo luật Hướng đạo sinh - chạm vào đâu refactor sạch sẽ chỗ đó); T7-8 (Tối ưu index DB).
- **AI Audit:** Chia Agent Security, Agent Data Flow, Agent Dead Code. Context: Schema DB + .env.example. Bắt buộc kiểm chứng: Chạy reproducing test trước khi xác nhận bug vì AI dễ bị False Positive.

#### 10. Điều Tra 3 Lỗi Prod Khó Tái Hiện & AI Agent
- **3 Lỗi:** Tồn kho âm (Race condition `Read-Modify-Write`, sửa bằng `SELECT ... FOR UPDATE`); Bấm 1 ra 2 đơn (Thiếu debounce UI + thiếu Idempotency key API); Webhook thanh toán báo thành công nhưng đơn chưa cập nhật (Webhook đến trước khi DB commit tạo đơn, hoặc chữ ký bị lệch, hoặc timeout).
- **Tránh AI kết luận vội / Đồng thuận sai:** Quy tắc "No Log, No Proof" (bắt buộc trích dẫn log/ID cụ thể); cô lập context từng agent; dùng 1 Agent chuyên đóng vai trò phản biện (Red Team).

#### 11. Biến Feature Mơ Hồ Thành Kế Hoạch & Đội Ngũ AI Song Song
- **Quy trình:** Làm rõ nghiệp vụ voucher/hoàn tồn kho -> OpenAPI Contract -> Acceptance Criteria (BDD Given-When-Then) -> Phân chia dependency (DB migration -> Service -> API -> Workers -> UI).
- **AI song song:** Agent DB chạy trước (Sequential); sau khi có OpenAPI Contract thì Agent Frontend (UI React mock) và Agent Backend chạy song song; các Agent Worker (PDF, Email) chạy riêng. Mỗi agent một thư mục riêng biệt, nghiêm cấm sửa file shared chung để chống merge conflict.

#### 12. Review Code Do AI Sinh & Chống "AI Đồng Thuận Sai"
- **Checklist review:** AI hay viết code đẹp nhưng sót Transaction rollback, thiếu check quyền sở hữu (IDOR `userId = req.user.id`), không chặn số âm (`qty < 0`), rò rỉ connection pool.
- **Vòng review độc lập:** Cho AI thứ 2 đóng vai trò **Hacker / Red Team** tìm ít nhất 3 lỗ hổng; giấu kín prompt gốc của dev; yêu cầu AI viết test phá hoại (Fuzzing tests). Quyền quyết định cuối cùng do Lead Dev đối chiếu.

#### 13. Quy Trình AI-Assisted SDLC & Guardrails
- **Ma trận 7 bước:** Requirement -> Planning -> Coding -> Testing -> Review -> Deploy -> Monitoring.
- **Guardrails:** AI chỉ hoạt động trên feature branch qua Pull Request, không push trực tiếp nhánh chính; cấm AI đọc file secret/key qua `.aiignore`; dữ liệu log phải được sanitize che mờ PII trước khi đưa vào context; **TUYỆT ĐỐI CẤM AI TỰ DEPLOY LÊN PRODUCTION** (luôn cần Human-in-the-loop).

#### 14. Triage Khủng Hoảng Khi Quá Tải Nhiều Việc
1. **Ưu tiên 1 (Tối cao):** Production bug ảnh hưởng khách hàng -> Rollback/Hotfix ngay lập tức.
2. **Ưu tiên 2:** Đánh giá độ nguy hiểm của lỗ hổng Security từ AI (Critical thì vá ngay, Low thì để sau).
3. **Ưu tiên 3:** Báo cáo manager xin hoãn task gấp để ưu tiên cứu hỏa prod.
4. **DỪNG NGAY:** Dừng ngay Agent đang refactor module lớn để tránh sinh merge conflict khổng lồ lúc hotfix.
5. **Giao AI / Đồng đội:** Giao AI phân tích log lỗi prod và log CI/CD fail; nhờ đồng đội khác review hộ PR.

---

### 🌟 LỜI KHUYÊN KHI PHỎNG VẤN:
* Hãy nói **chậm rãi, rõ ràng**. Nếu chưa hiểu rõ câu hỏi, hãy lịch sự hỏi lại: *"Anh/chị có thể làm rõ hơn ý này được không ạ?"*
* Nếu gặp câu hỏi chưa biết trả lời, **tuyệt đối không nói bừa**. Hãy trả lời: *"Hiện tại em chưa có cơ hội làm việc sâu với công nghệ/khái niệm này trong các dự án trước. Tuy nhiên, theo em hiểu sơ bộ thì nó là... Em sẽ tìm hiểu kỹ hơn ngay sau buổi hôm nay ạ."* (Nhà tuyển dụng cực kỳ đánh giá cao sự trung thực và tinh thần cầu tiến này).

**Chúc bạn phỏng vấn thành công mỹ mãn! 🎯**
