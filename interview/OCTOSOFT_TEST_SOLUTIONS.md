# 🎯 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT BÀI KIỂM TRA TUYỂN DỤNG FULL STACK DEVELOPER – OCTOSOFT
> **Ứng viên:** Trương Đình Anh  
> **Thời gian làm bài:** 75 phút | **Tổng số câu:** 14 câu hỏi tự luận chuyên sâu  
> **Phân loại Level:** Senior Full Stack $\rightarrow$ Tech Lead / AI-Native Software Engineer

---

## 📑 MỤC LỤC
- [PHẦN 1: CORE FULLSTACK & BACKEND ARCHITECTURE (CÂU 1 – 8)](#phần-1-core-fullstack--backend-architecture)
  - [Câu 1: Thiết kế Flow API Tạo Đơn Hàng & Phân chia Xử lý Sync/Async](#câu-1-thiết-kế-flow-api-tạo-đơn-hàng--phân-chia-xử-lý-syncasync)
  - [Câu 2: Điều tra API Đơn Hàng Hàng Triệu Records Bị Chậm (CPU Không Cao)](#câu-2-điều-tra-api-đơn-hàng-hàng-triệu-records-bị-chậm-cpu-không-cao)
  - [Câu 3: Phân tích Sự cố JWT: 401, Multi-tab Logout & Mobile Mất Phiên](#câu-3-phân-tích-sự-cố-jwt-401-multi-tab-logout--mobile-mất-phiên)
  - [Câu 4: Refactor Backend Monolith Node.js/Python Phình To Không Đập Đi Làm Lại](#câu-4-refactor-backend-monolith-nodejspython-phình-to-không-đập-đi-làm-lại)
  - [Câu 5: React Race Condition khi Đổi Filter Nhanh & Update State After Unmount](#câu-5-react-race-condition-khi-đổi-filter-nhanh--update-state-after-unmount)
  - [Câu 6: Quản trị State Form Đơn Hàng Phức Tạp & Nguồn Sự Thật (Source of Truth)](#câu-6-quản-trị-state-form-đơn-hàng-phức-tạp--nguồn-sự-thật-source-of-truth)
  - [Câu 7: Profiling & Tối ưu Render React khi Danh Sách Lớn](#câu-7-profiling--tối-ưu-render-react-khi-danh-sách-lớn)
  - [Câu 8: Phân quyền Web Admin Đa Vai Trò (RBAC), XSS, CSRF & Token Storage](#câu-8-phân-quyền-web-admin-đa-vai-trò-rbac-xss-csrf--token-storage)
- [PHẦN 2: THỰC CHIẾN PRODUCTION & AI AGENTS (CÂU 9 – 14)](#phần-2-thực-chiến-production--ai-agents)
  - [Câu 9: Tiếp quản Legacy Codebase, Kế hoạch 8 Tuần & Dùng AI Audit Repo](#câu-9-tiếp-quản-legacy-codebase-kế-hoạch-8-tuần--dùng-ai-audit-repo)
  - [Câu 10: Điều tra 3 Lỗi Khó Tái Hiện & Tổ chức AI Agent Điều Tra](#câu-10-điều-tra-3-lỗi-khó-tái-hiện--tổ-chức-ai-agent-điều-tra)
  - [Câu 11: Biến Feature Mơ Hồ Thành Kế Hoạch & Điều Phối Nhiều AI Agent Song Song](#câu-11-biến-feature-mơ-hồ-thành-kế-hoạch--điều-phối-nhiều-ai-agent-song-song)
  - [Câu 12: Review Code Do AI Sinh & Chống Hiện Tượng "AI Đồng Thuận Sai"](#câu-12-review-code-do-ai-sinh--chống-hiện-tượng-ai-đồng-thuận-sai)
  - [Câu 13: Thiết Kế Quy Trình AI-Assisted SDLC & Guardrails An Toàn](#câu-13-thiết-kế-quy-trình-ai-assisted-sdlc--guardrails-an-toàn)
  - [Câu 14: Triage & Xử lý Khủng hoảng Khi Quá Tải Nhiều Việc Cùng Lúc](#câu-14-triage--xử-lý-khủng-hoảng-khi-quá-tải-nhiều-việc-cùng-lúc)

---

# PHẦN 1: CORE FULLSTACK & BACKEND ARCHITECTURE

---

### Câu 1: Thiết kế Flow API Tạo Đơn Hàng & Phân chia Xử lý Sync/Async

#### 📌 Đề bài:
> Một API tạo đơn hàng phải kiểm tra khách hàng, sản phẩm, giá, voucher, tồn kho, quyền người dùng và thanh toán. Hãy mô tả cách bạn thiết kế flow backend để bảo đảm validation, authorization, transaction và tính idempotent. Phần nào nên xử lý trong request chính, phần nào nên đưa sang queue/worker? Giải thích vì sao.

#### 💡 Lời giải & Phân tích chuyên sâu:

```
[Client Request] 
  │ (Kèm Header: Idempotency-Key & Authorization: Bearer JWT)
  ▼
[API Gateway / Middleware]
  ├── 1. Xác thực danh tính (Authentication) & Kiểm tra quyền (Authorization)
  └── 2. Kiểm tra Idempotency-Key (Redis Cache) -> Đã xử lý? Trả ngay kết quả cũ!
  ▼
[Request Controller & Validator]
  └── 3. Validate Schema payload (SKU, số lượng > 0, địa chỉ, format voucher)
  ▼
[Core Business Service: DB Transaction Bắt Đầu (ACID Boundary)]
  ├── 4. Khóa dòng & Trừ tồn kho: SELECT stock ... FOR UPDATE (hoặc Atomic UPDATE)
  ├── 5. Đọc giá từ DB (KHÔNG tin giá client gửi) & Validate điều kiện áp Voucher
  ├── 6. Trừ lượt dùng voucher (usage_limit = usage_limit - 1)
  ├── 7. Tạo bản ghi đơn hàng (orders) với trạng thái: PENDING_PAYMENT
  └── 8. Tạo bản ghi chi tiết đơn hàng (order_items)
  ▼
[Commit DB Transaction & Lưu Cache Idempotency-Key = SUCCESS]
  ▼
[Dispatch Message vào Queue (RabbitMQ / Kafka / Redis Streams)]
  ├── Job 1: Gửi Email / SMS xác nhận đơn
  ├── Job 2: Sinh hóa đơn PDF & upload lên S3
  ├── Job 3: Bắn sự kiện Webhook / Analytics BI
  └── Job 4: Schedule Delayed Job: Tự động hủy đơn & hoàn kho sau 15 phút nếu chưa thanh toán
  ▼
[Response 201 Created về Client] (order_id, payment_url)
```

#### ⚖️ Phân chia Xử lý Đồng bộ vs Bất đồng bộ & **TẠI SAO?**:
1. **Xử lý trong Request chính (Synchronous - Bắt buộc):**
   - *Gồm:* Authen/Author, Validate payload, Khóa & trừ kho, Trừ voucher, Tạo record Order/OrderItems trong DB Transaction.
   - **TẠI SAO:**
     - **Tính toàn vẹn dữ liệu (Data Consistency - ACID):** Trừ kho và áp voucher phải là thao tác nguyên tử (atomic). Nếu đẩy việc trừ kho sang Worker chạy nền, sẽ xuất hiện một khoảng trễ (lag từ vài trăm ms đến vài giây), dẫn đến hiện tượng **Overselling (bán âm kho)** khi nhiều người cùng bấm mua sản phẩm sale cuối cùng.
     - **Phản hồi tức thì cho khách hàng (UX):** Khách cần biết ngay họ có giữ được hàng và voucher thành công không trước khi bước sang cổng thanh toán quẹt thẻ.
2. **Đưa sang Queue / Worker (Asynchronous):**
   - *Gồm:* Gửi Email/SMS, render hóa đơn PDF, thông báo đẩy (Push notification), đồng bộ số liệu sang Data Warehouse, lập lịch đếm ngược 15 phút hủy đơn.
   - **TẠI SAO:**
     - **Độ trễ (Latency & Throughput):** Các tác vụ I/O (gọi SMTP server bên ngoài, render file PDF ngốn CPU) mất từ 1 – 3 giây. Nếu để trong request chính, thread/worker của web server sẽ bị nghẽn, làm giảm chỉ số RPS (Requests Per Second) của hệ thống.
     - **Khả năng chịu lỗi (Resilience & Retry):** Dịch vụ bên thứ ba (SendGrid, Twilio) có thể gặp sự cố mạng hoặc timeout. Đẩy vào Message Queue cho phép tự động Retry theo cơ chế Exponential Backoff mà không làm đơn hàng của khách bị thất bại.

---

### Câu 2: Điều tra API Đơn Hàng Hàng Triệu Records Bị Chậm (CPU Không Cao)

#### 📌 Đề bài:
> Một API danh sách đơn hàng có vài triệu records, hỗ trợ search, filter, sort, pagination và export Excel; production bắt đầu phản hồi chậm nhưng CPU server không luôn cao. Hãy nêu thứ tự điều tra thực tế của bạn: query plan, index, join, pagination, N+1, connection pool, cache và export. Khi nào bạn mới cân nhắc thay đổi schema hoặc loại database?

#### 💡 Lời giải & Phân tích chuyên sâu:

> **Nhận định cốt lõi:** *Tại sao CPU server không cao nhưng API vẫn chậm?*  
> CPU thấp nhưng độ trễ (latency) cao là dấu hiệu điển hình của việc hệ thống bị **nghẽn I/O (I/O Wait / Disk Latency)** hoặc **nghẽn chờ đợi tài nguyên (Connection Pool Exhaustion / Row Lock Contention)**. Thread của ứng dụng đang nhàn rỗi để chờ đĩa cứng đọc dữ liệu hoặc chờ lấy được connection từ pool.

#### 🔍 Thứ tự điều tra thực tế (Từ gốc rễ đến bề mặt):
1. **Chạy `EXPLAIN (ANALYZE, BUFFERS)` (Query Plan):**
   - *Điều tra:* Kiểm tra xem DB đang dùng `Index Scan` hay `Seq Scan` (quét toàn bộ đĩa cứng hàng triệu dòng). Xem thông số `shared hit` vs `read` để biết dữ liệu nằm trong RAM (buffer pool) hay phải đọc từ ổ cứng.
2. **Kiểm tra Composite Index:**
   - *Điều tra:* Các truy vấn kết hợp Filter + Sort (vd: `WHERE store_id = ? AND status = ? ORDER BY created_at DESC`) bắt buộc phải có Composite Index tuân theo quy tắc: **Equality (Cột so sánh `=`) $\rightarrow$ Range (Cột khoảng `<`, `>`) $\rightarrow$ Sort (Cột sắp xếp)**. Nếu sai thứ tự, DB buộc phải đọc index rồi quét filter thủ công ngoài bộ nhớ tạm.
3. **Phân tích chiến lược Pagination (Phân trang):**
   - *Điều tra:* Xem hệ thống có đang dùng `OFFSET` lớn (vd: `OFFSET 200000 LIMIT 20`) không.
   - *Khắc phục:* `OFFSET` lớn ép DB phải đọc và duyệt qua 200.000 bản ghi trước đó rồi mới vứt đi. Phải chuyển sang **Keyset Pagination (Cursor-based):** `WHERE (created_at, id) < (cursor_date, cursor_id) ORDER BY created_at DESC LIMIT 20`.
4. **Kiểm tra N+1 Queries & JOIN thừa:**
   - *Điều tra:* Bật SQL logger của ORM. Xem 1 request lấy 20 đơn hàng có vô tình bắn thêm 20 câu query con để lấy thông tin khách hàng/địa chỉ không. Thay thế bằng Eager Loading (`JOIN` có chọn lọc) hoặc Batch Loading (Dataloader).
5. **Kiểm tra Connection Pool (HikariCP / PgBouncer / Node-pg pool):**
   - *Điều tra:* Nếu pool size quá nhỏ (vd: 10 connections) trong khi có 50 request đồng thời, 40 request còn lại sẽ bị đưa vào hàng đợi chờ đợi connection (`Queue Wait Time` tăng cao dù CPU server hoàn toàn rảnh rỗi).
6. **Kiểm tra cơ chế Cache (Redis):**
   - *Điều tra:* Các bộ lọc danh mục cố định hoặc trang đầu tiên của danh sách có được cache lại không; độ biến động dữ liệu có cho phép áp dụng Cache Stampede protection không.
7. **Tách biệt luồng Export Excel:**
   - *Điều tra:* Không bao giờ cho phép export hàng trăm nghìn dòng trực tiếp trên web request chính (gây nghẽn RAM và crash tiến trình). Cần chuyển sang Background Worker, dùng Database Cursor/Stream để ghi thẳng vào file CSV/XLSX dạng chunk rồi tải lên Cloud Storage (S3), gửi link qua email/notification cho user.

#### 🔄 Khi nào mới cân nhắc thay đổi Schema hoặc Loại Database?
- **Đổi Schema:** Khi bảng đơn hàng quá nhiều cột to (nhiều trường text dài, json blob) làm kích thước bản ghi (Row Size) phình to, số bản ghi trên một trang đĩa (Page Block) giảm $\rightarrow$ Tách bảng thành `orders` (chứa metadata chính) và `order_details` (chứa dữ liệu phụ ít đọc); hoặc áp dụng **Table Partitioning theo thời gian** (mỗi tháng một partition).
- **Đổi loại Database:**
  - Chuyển sang **Elasticsearch / OpenSearch** khi người dùng có nhu cầu tìm kiếm Full-text search đa ngôn ngữ, không dấu, filter động hàng chục tiêu chí linh hoạt mà RDBMS index không gánh nổi.
  - Chuyển sang **ClickHouse / BigQuery** khi hệ thống cần thực hiện các truy vấn phân tích, báo cáo tổng hợp (OLAP) quét qua hàng chục triệu bản ghi để tính toán doanh thu/sản lượng theo chu kỳ.

---

### Câu 3: Phân tích Sự cố JWT: 401, Multi-tab Logout & Mobile Mất Phiên

#### 📌 Đề bài:
> Hệ thống dùng JWT access token và refresh token. Người dùng phản ánh vừa login đôi khi vẫn bị 401, mở nhiều tab dễ bị logout và mobile thỉnh thoảng mất phiên. Hãy phân tích các nguyên nhân có thể xảy ra từ token lifecycle, refresh race, storage, clock/time, backend và authorization; đồng thời đề xuất auth flow ổn định hơn cho production.

#### 💡 Lời giải & Phân tích chuyên sâu:

```
[Tab 1] Hết hạn Access Token ──► Gọi /refresh (Refresh Token A) ──► Thành công (Cấp Token B, HỦY A)
                                                                        ▲
[Tab 2] Hết hạn Access Token ──► Gọi /refresh (Vẫn dùng Token A cũ) ────┘
                                         │
                                         ▼ Backend kích hoạt "Token Reuse Detection"
                                    (Nghi ngờ bị Hacker trộm token cũ)
                                         ▼
                             HỦY TOÀN BỘ PHIÊN ĐĂNG NHẬP ──► USER BỊ VĂNG KHỎI HỆ THỐNG!
```

#### 🔬 Phân tích nguyên nhân gốc rễ:
1. **Mở nhiều tab bị Logout (Refresh Race Condition):**
   - **TẠI SAO:** Hệ thống áp dụng cơ chế bảo mật **Refresh Token Rotation (RTR)**: Mỗi lần cấp access token mới, refresh token cũ bị hủy ngay lập tức và thay bằng token mới. Khi mở nhiều tab, khi access token hết hạn, các tab đồng loạt gửi request refresh với cùng một token cũ. Request của Tab 1 đến trước được chấp nhận; Request của Tab 2 đến sau mang token vừa bị hủy $\rightarrow$ Backend nhận định đây là hành vi **Replay Attack (Token bị đánh cắp)** $\rightarrow$ Backend tự động thu hồi (revoke) toàn bộ session của tài khoản $\rightarrow$ Khách hàng bị logout oan trên mọi tab.
2. **Vừa Login xong đôi khi vẫn bị 401 (Lệch giờ - Clock Skew):**
   - **TẠI SAO:** Đồng hồ hệ thống giữa Auth Server (máy chủ cấp token) và API Gateway / Resource Server (máy chủ kiểm tra token) bị lệch nhau vài giây. Nếu Auth Server chạy nhanh hơn API Server, khi tạo token có claim `nbf` (Not Before) hoặc `iat` (Issued At), API Server kiểm tra thấy thời gian của token nằm ở "tương lai" $\rightarrow$ coi token chưa hợp lệ và trả về 401.
3. **Mobile thỉnh thoảng mất phiên:**
   - **TẠI SAO:** 
     - Ứng dụng mobile lưu token vào bộ nhớ tạm thời bị hệ điều hành (Android/iOS) kill tiến trình khi thiếu RAM.
     - Background sync gọi refresh token trong khi app đang bị suspend/tắt mạng giữa chừng, dẫn đến token mới lưu không thành công vào KeyStore/SecureStorage.

#### 🛡️ Đề xuất Auth Flow Ổn Định Chuẩn Production:
1. **Client-side Request Mutex & Queueing:**
   - Ở tầng Network Client (Axios Interceptor / Fetch Wrapper), dùng cờ `isRefreshing`. Khi request đầu tiên gặp 401, chặn toàn bộ các request tiếp theo và đưa vào một mảng Promise Queue. Sau khi refresh xong, giải phóng queue bằng Access Token mới.
   - Giữa các Tab trên trình duyệt, dùng **`BroadcastChannel`** hoặc sự kiện `storage` để thông báo: *"Tab 1 đang refresh token, các tab khác hãy chờ!"*.
2. **Backend Grace Period cho Refresh Token Rotation:**
   - Khi refresh token $R_1$ được đổi thành $R_2$, **không xóa ngay $R_1$**, mà cho phép $R_1$ sống thêm một khoảng thời gian ân hạn (**Grace Period từ 15 – 30 giây**). Nếu có request khác gửi $R_1$ lên trong 30 giây này, backend vẫn trả về $R_2$ thay vì coi là bị tấn công.
3. **Cấu hình Clock Tolerance:**
   - Ở middleware xác thực JWT, cấu hình độ trễ cho phép: `jwt.verify(token, secret, { clockTolerance: 30 })` (cho phép lệch đồng hồ tối đa 30 giây).
4. **Storage an toàn:**
   - **Web:** Lưu Access Token trong Memory (hoặc HttpOnly Cookie `SameSite=Lax/Strict`), Refresh Token lưu trong HttpOnly Secure Cookie.
   - **Mobile:** Sử dụng iOS Keychain và Android EncryptedSharedPreferences (Keystore).

---

### Câu 4: Refactor Backend Monolith Node.js/Python Phình To Không Đập Đi Làm Lại

#### 📌 Đề bài:
> Một backend Node.js/Python lớn dần theo thời gian: business logic nằm trong controller, query rải rác, error handling không thống nhất và khó test. Hãy đề xuất cách tổ chức lại code để tách controller/service/repository hoặc các lớp tương đương; đồng thời nêu cách bạn chuẩn hóa error response, logging/trace và database migration để hệ thống dễ maintain mà không phải refactor toàn bộ một lần.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🧱 1. Chiến lược Refactor từng bước (Strangler Fig Pattern nội bộ):
> **Nguyên tắc vàng:** Tuyệt đối không dừng toàn bộ dự án để "viết lại từ đầu". Phải tiến hành refactor theo từng lát cắt nghiệp vụ (Vertical Slice) cho các module đang có bug hoặc sắp sửa làm thêm tính năng mới.

1. **Bước 1 - Tách Repository Layer (Tập trung truy vấn):**
   - Gom toàn bộ các câu lệnh SQL/ORM rải rác trong Controller vào một class Repository. Lúc này Controller vẫn giữ logic nghiệp vụ nhưng đã gọi query qua Repository $\rightarrow$ Code controller sạch hơn 40%, dễ dàng mock database để viết unit test.
2. **Bước 2 - Tách Service Layer (Độc lập Business Logic):**
   - Rút toàn bộ logic tính toán, validate nghiệp vụ, gọi bên thứ ba ra khỏi Controller và đưa vào Service.
   - **Controller chỉ còn 4 dòng nhiệm vụ:** Nhận request $\rightarrow$ Validate DTO input $\rightarrow$ Gọi Service $\rightarrow$ Trả HTTP Response.
3. **Bước 3 - Viết Integration Test cho từng Service vừa tách:** Đảm bảo test pass trước khi chuyển sang module khác.

#### 🚨 2. Chuẩn hóa Error Response:
- Tạo một lớp cha `AppError extends Error` chứa: `statusCode`, `errorCode`, `isOperational`.
- Viết một **Global Error Handling Middleware** duy nhất để bắt mọi Exception, chuẩn hóa format theo chuẩn **RFC 7807 (Problem Details)**:
```json
{
  "success": false,
  "error": {
    "code": "ORDER_ITEMS_OUT_OF_STOCK",
    "message": "Một số sản phẩm trong giỏ hàng đã hết",
    "details": [{ "sku": "IPHONE15", "available": 0 }],
    "traceId": "c8f2a1b9-3e4d-4b8a-9f1a-8c7e6d5e4f3a"
  }
}
```

#### 🔍 3. Logging & Distributed Tracing:
- Gán một **Correlation ID / Request ID** (UUID) ở API Gateway hoặc Middleware đầu vào cho mỗi request, truyền qua context (`AsyncLocalStorage` trong Node.js hoặc contextvars trong Python).
- Sử dụng Structured Logging (Winston, Pino, Loguru) xuất ra định dạng JSON kèm theo `timestamp`, `level`, `traceId`, `userId`, `durationMs`. Khi có lỗi trên production, chỉ cần search đúng `traceId` là thấy toàn bộ hành trình của request.

#### 🗄️ 4. Database Migration an toàn (Expand & Contract Pattern):
- Không bao giờ thực hiện các lệnh làm gián đoạn hệ thống như `RENAME COLUMN` hoặc `DROP COLUMN` trực tiếp:
  - **Giai đoạn 1 (Expand):** Thêm cột mới trong DB song song với cột cũ.
  - **Giai đoạn 2 (Dual Write):** Cập nhật code để ghi dữ liệu vào cả cột cũ và cột mới. Chạy background script migrate dữ liệu lịch sử.
  - **Giai đoạn 3 (Switch Read):** Cập nhật code chuyển sang đọc dữ liệu hoàn toàn từ cột mới.
  - **Giai đoạn 4 (Contract):** Sau 1-2 tuần hệ thống chạy ổn định, tạo migration xóa cột cũ.

---

### Câu 5: React Race Condition khi Đổi Filter Nhanh & Update State After Unmount

#### 📌 Đề bài:
> Một component React gọi API theo filter. Khi người dùng đổi filter nhanh, loading nháy nhiều lần, dữ liệu cũ đôi khi đè dữ liệu mới và console có warning update state after unmount. Hãy phân tích nguyên nhân có thể xảy ra và trình bày thứ tự bạn debug, bao gồm request race, effect dependency, cancellation, stale state và caching.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🔬 1. Phân tích nguyên nhân kỹ thuật & TẠI SAO?
* **Request Race Condition:** Khi user chuyển từ Filter A sang Filter B. Request A phát đi trước nhưng do mạng chập chờn mất 2 giây mới về; Request B phát đi sau nhưng phản hồi chỉ mất 300ms. Kết quả: Dữ liệu của B hiển thị lên màn hình trước, nhưng sau đó response của A mới về tới nơi và gọi `setData(resA)` ghi đè lên state $\rightarrow$ Màn hình đang hiển thị kết quả của Filter A cũ dù thanh tìm kiếm đang chọn B!
* **Update state after unmount:** User chuyển sang trang khác trong lúc request vẫn đang bay trên mạng. Khi Promise resolve, hàm `setLoading(false)` hoặc `setData()` được gọi trên một component đã bị gỡ khỏi cây DOM $\rightarrow$ Gây rò rỉ bộ nhớ (Memory Leak) và sinh warning trong console.
* **Loading nháy nhiều lần:** Do mỗi lần đổi filter lại set `loading = true` rồi `loading = false` liên tục mà không có cơ chế giữ lại dữ liệu cũ trong lúc fetch mới.

#### 🛠️ 2. Thứ tự Debug và Giải pháp khắc phục:

1. **Cơ chế Hủy Request (Request Cancellation với `AbortController`):**
   ```javascript
   useEffect(() => {
     const controller = new AbortController();
     setIsLoading(true);

     api.getProducts(filters, { signal: controller.signal })
       .then(data => {
         setData(data);
         setIsLoading(false);
       })
       .catch(err => {
         // Bỏ qua lỗi do chủ động hủy request
         if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
           setError(err);
           setIsLoading(false);
         }
       });

     // Cleanup function: Tự động kích hoạt hủy request cũ khi filters thay đổi hoặc component unmount
     return () => controller.abort();
   }, [filters]);
   ```
2. **Loại bỏ Stale State bằng biến cờ (Active Flag Pattern):**
   - Đặt một biến `let isCurrent = true` bên trong `useEffect`, trong cleanup function gán `isCurrent = false`. Chỉ gọi `setData` khi `if (isCurrent)`.
3. **Áp dụng TanStack Query (React Query) / SWR (Giải pháp chuẩn Production):**
   - **TẠI SAO nên dùng thư viện:** Tự quản lý `useEffect` rất dễ mắc lỗi edge case. React Query tự động xử lý:
     - Tự động hủy các request cũ đang bay khi query key thay đổi.
     - Cơ chế **`placeholderData: keepPreviousData`**: Giữ nguyên dữ liệu cũ trên màn hình cho đến khi dữ liệu mới tải xong $\rightarrow$ Triệt tiêu hoàn toàn hiện tượng nhấp nháy loading.
     - Cache dữ liệu thông minh theo query key `['products', filters]`, quay lại filter cũ không cần gọi lại mạng.

---

### Câu 6: Quản trị State Form Đơn Hàng Phức Tạp & Nguồn Sự Thật (Source of Truth)

#### 📌 Đề bài:
> Một form tạo đơn hàng gồm chọn khách hàng, nhiều sản phẩm, tính giá, voucher, phương thức thanh toán và submit. Hãy mô tả cách bạn tổ chức local/global/server state, validation, derived state và side effect để tránh dữ liệu lệch giữa UI và backend. Dữ liệu nào frontend chỉ được hiển thị nhưng không được xem là nguồn sự thật?

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🏛️ 1. Phân chia kiến trúc State:
* **Local State (React Hook Form + Zod):** Quản lý giá trị nhập liệu tức thời của form (ID khách hàng được chọn, danh sách sản phẩm `[{ productId, qty }]`, mã voucher nhập tay, ghi chú, phương thức thanh toán).
* **Server State (TanStack Query):** Danh sách gợi ý khách hàng, danh mục sản phẩm, danh sách voucher người dùng đang sở hữu.
* **Derived State (State tính toán - KHÔNG TẠO `useState` RIÊNG):**
  - **TẠI SAO:** Không bao giờ tạo state kiểu `const [subTotal, setSubTotal] = useState(0)`. Vì nếu số lượng sản phẩm thay đổi mà quên cập nhật `subTotal`, dữ liệu sẽ bị lệch (Desynchronization).
  - **Cách làm đúng:** Dùng `useMemo` tính trực tiếp từ mảng items:
    ```javascript
    const estimatedSubTotal = useMemo(() => {
      return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    }, [items]);
    ```
* **Side Effects:** Khi giỏ hàng hoặc mã voucher thay đổi, kích hoạt API tính giá tạm thời (`POST /api/orders/calculate-preview` kèm debounce 300ms) để backend trả về con số tính toán chính thức kèm thuế, phí ship và số tiền voucher thực tế được giảm.

#### 🚫 2. Dữ liệu nào Frontend CHỈ HIỂN THỊ, TUYỆT ĐỐI KHÔNG COI LÀ NGUỒN SỰ THẬT?
* **Đơn giá sản phẩm, Số tiền giảm giá voucher, Số tiền thanh toán cuối cùng (Grand Total), Trạng thái còn hàng (Tồn kho):**
  - **TẠI SAO:**
    - Mã nguồn JavaScript trên trình duyệt của người dùng (Client-side) hoàn toàn có thể bị can thiệp và chỉnh sửa qua DevTools hoặc gửi request giả mạo qua Postman (ví dụ sửa giá từ 10.000.000đ xuống 1.000đ).
    - Dữ liệu hiển thị trên giao diện người dùng chỉ có giá trị **trưng bày (Presentation)** để phục vụ trải nghiệm người xem.
    - **Nguồn sự thật duy nhất (Single Source of Truth) BẮT BUỘC là Cơ sở dữ liệu Backend.** Khi bấm Submit, frontend chỉ gửi lên `{ customerId, items: [{ productId, quantity }], voucherCode }`. Backend sẽ tự query lại DB để lấy đúng giá niêm yết hiện tại, kiểm tra điều kiện voucher và nhân chia ra tổng số tiền thực tế cần thanh toán.

---

### Câu 7: Profiling & Tối ưu Render React khi Danh Sách Lớn

#### 📌 Đề bài:
> Một trang ReactJS có API phản hồi tương đối nhanh nhưng trải nghiệm vẫn chậm, nhất là khi danh sách dữ liệu lớn. Hãy nêu quy trình profiling và các giả thuyết bạn ưu tiên kiểm tra: unnecessary re-render, component tree, bundle, lazy loading, virtualization, image/resource loading, memoization và browser main thread. Bạn sẽ đo trước/sau tối ưu bằng gì?

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🔬 1. Quy trình Profiling thực tế:
1. **Chrome DevTools Performance Tab:** Ghi lại thao tác cuộn và tương tác. Quan sát biểu đồ **Flamechart**: Tìm kiếm các khối màu đỏ dài biểu thị **Long Tasks (> 50ms)** đang block Browser Main Thread.
2. **React DevTools Profiler:** Bật tùy chọn *"Record why each component rendered"*. Quan sát biểu đồ Ranked Chart xem component nào tốn thời gian render nhiều nhất và nguyên nhân do đâu (props change, hook change, hay parent render).
3. **Lighthouse & Web Vitals Extension:** Đo các chỉ số hiệu năng thực tế của người dùng: **INP (Interaction to Next Paint)**, **LCP (Largest Contentful Paint)** và **CLS (Cumulative Layout Shift)**.

#### 💡 2. Các giả thuyết ưu tiên kiểm tra & Giải pháp:
* **Giả thuyết 1: DOM Tree quá lớn do render toàn bộ danh sách (DOM Bloat) $\rightarrow$ Ưu tiên số 1:**
  - *Hiện tượng:* Danh sách có 1.000 – 5.000 items, render ra hàng chục nghìn thẻ HTML làm trình duyệt cạn kiệt RAM, mỗi lần re-render tốn hàng trăm ms để tính toán Layout.
  - *Khắc phục:* Áp dụng **List Virtualization (`@tanstack/react-virtual` hoặc `react-window`)**. Chỉ render đúng số lượng item vừa vặn khung nhìn màn hình (10 – 15 items), tái sử dụng DOM node khi người dùng cuộn.
* **Giả thuyết 2: Unnecessary Re-render lan truyền:**
  - *Hiện tượng:* Khi state của trang cha thay đổi, toàn bộ 1.000 component item con đều bị re-render theo dù props của chúng không hề thay đổi.
  - *Khắc phục:* Bọc item component bằng `React.memo`, kết hợp truyền hàm xử lý sự kiện qua `useCallback` để tránh tạo object/function reference mới sau mỗi lần render.
* **Giả thuyết 3: Tải ảnh hàng loạt làm nghẽn Network và CPU Decode:**
  - *Khắc phục:* Thêm thuộc tính `loading="lazy"` và `decoding="async"` cho các thẻ `<img>`, sử dụng định dạng nén hiện đại WebP/AVIF và set kích thước cố định (`width`, `height`) để chống nhảy giao diện (CLS).
* **Giả thuyết 4: Tính toán nặng nằm trực tiếp trong Render Path:**
  - *Khắc phục:* Đưa các thao tác format ngày tháng phức tạp, sort/filter mảng dữ liệu lớn vào `useMemo` hoặc chuyển sang Web Worker nếu tính toán quá nặng.

#### 📊 3. Đo lường Trước / Sau tối ưu:
- **Chỉ số INP (Interaction to Next Paint):** Từ mức kém (> 300ms, giật khựng khi click) giảm xuống mức tốt (**< 50ms**).
- **Thời gian Render Commit của React:** Giảm từ > 250ms xuống **< 16ms** (đạt chuẩn mượt mà 60 FPS).
- **Số lượng DOM Nodes:** Giảm từ 15.000 nodes xuống chỉ còn **dưới 150 nodes**.

---

### Câu 8: Phân quyền Web Admin Đa Vai Trò (RBAC), XSS, CSRF & Token Storage

#### 📌 Đề bài:
> Một web admin có nhiều role: super admin, admin chi nhánh, kế toán và sale. Hãy mô tả cách bạn tổ chức route guard, component permission, auth state và error handling ở frontend nhưng vẫn tránh coi frontend là lớp bảo mật. Đồng thời nêu các rủi ro XSS/CSRF/token storage và cách phối hợp contract với backend để hạn chế bug phân quyền.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🛡️ 1. Tổ chức Kiến trúc Frontend:
* **Auth State:** Lưu thông tin người dùng và danh sách quyền chi tiết trong Global State (Zustand hoặc React Context): `{ user, permissions: ['order:read', 'order:create', 'report:export'] }`.
* **Route Guard:** Bọc các route nhạy cảm qua component bảo vệ:
  ```jsx
  <Route element={<ProtectedRoute requiredPermission="order:delete" />}>
    <Route path="/orders/manage" element={<OrderManagementPage />} />
  </Route>
  ```
* **Granular Component-level Permission:** Tạo component kiểm tra quyền chi tiết đến từng nút bấm:
  ```jsx
  <Can do="report:export">
    <Button onClick={handleExport}>Xuất Báo Cáo Kế Toán</Button>
  </Can>
  ```
* **Error Handling:** Khi gọi API bị trả về `403 Forbidden`, hiển thị giao diện báo lỗi thân thiện thay vì để màn hình trắng hoặc crash ứng dụng.

> ⚠️ **TẠI SAO tuyệt đối không coi Frontend là lớp bảo mật?**  
> Vì toàn bộ code JavaScript ở client đều nằm trong tay người dùng, bất kỳ ai cũng có thể mở DevTools sửa biến `role = 'SUPER_ADMIN'` hoặc xóa thuộc tính `disabled` của nút bấm. **Phân quyền ở Frontend chỉ có duy nhất mục đích phục vụ UX (giúp người dùng không nhìn thấy những tính năng họ không có quyền thao tác). Lớp bảo mật thực sự bắt buộc 100% phải nằm ở Backend Middleware.**

#### 🔐 2. Rủi ro XSS, CSRF & Chiến lược Lưu trữ Token:
| Vị trí lưu trữ | Nguy cơ XSS | Nguy cơ CSRF | Đánh giá & Khắc phục |
| :--- | :--- | :--- | :--- |
| **`localStorage`** | ❌ **Rất cao**: Mã độc JS chỉ cần gọi `localStorage.getItem('token')` là lấy trọn token. | ✅ Không bị ảnh hưởng CSRF. | **Không an toàn cho Web Admin** vì dễ bị dính XSS từ các thư viện npm bên thứ ba. |
| **Cookie thông thường** | ❌ Có thể bị đọc nếu thiếu cờ `HttpOnly`. | ❌ **Rất cao**: Trình duyệt tự động đính kèm cookie khi bị lừa click link từ site khác. | Không an toàn nếu thiếu cấu hình phòng thủ. |
| **HttpOnly Cookie (Khuyên dùng)** | ✅ **An toàn**: JavaScript hoàn toàn không thể đọc được token. | ⚠️ Có nguy cơ nếu không cấu hình đúng cờ. | **Giải pháp chuẩn:** Thêm cờ **`HttpOnly`**, **`Secure`** và **`SameSite=Lax` hoặc `SameSite=Strict`** $\rightarrow$ Miễn nhiễm XSS đọc token và chặn đứng 100% tấn công CSRF. |

#### 🤝 3. Phối hợp API Contract với Backend để chống Bug Phân Quyền:
- **Tuyệt đối không phân quyền theo Role Name chung chung (Role-based):** Không thiết kế contract kiểu `if (role === 'BRANCH_ADMIN')` ở frontend. Vì khi doanh nghiệp đổi cơ cấu hoặc thêm role mới, toàn bộ frontend phải sửa lại.
- **Phân quyền theo Hành động Cụ thể (Action-based / Permission-based):** Backend trả về danh sách claims quyền dạng mảng chuỗi hạt nhân:
  ```json
  {
    "userId": "usr_123",
    "role": "BRANCH_ADMIN",
    "permissions": ["order:view_branch", "order:edit_branch", "inventory:view"]
  }
  ```
- Backend API Middleware kiểm tra chính xác `permissions` này trên từng endpoint API tương ứng, đảm bảo tính nhất quán tuyệt đối giữa hai phía.

---
---

# PHẦN 2: THỰC CHIẾN PRODUCTION & AI AGENTS

---

### Câu 9: Tiếp quản Legacy Codebase, Kế hoạch 8 Tuần & Dùng AI Audit Repo

#### 📌 Đề bài:
> Bạn tiếp quản một dự án cũ: backend/frontend thiếu ranh giới, PostgreSQL và MongoDB dùng thiếu chiến lược, không có test, deploy thủ công, bug production nhiều nhưng business vẫn yêu cầu ra feature. Team có 4 dev. Hãy đưa ra cách bạn phân tích codebase và lập kế hoạch 8 tuần: việc gì làm ngay, việc gì hoãn, tiêu chí ưu tiên. Nếu dùng AI/AI Agent để audit repository, bạn sẽ chia phạm vi cho các Agent như thế nào, cung cấp context gì và kiểm chứng kết luận của chúng ra sao?

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 📅 1. Kế hoạch 8 Tuần (Team 4 Dev):
> **Tiêu chí ưu tiên cốt lõi:** Ổn định Production & Khả năng quan sát (Observability) > Tự động hóa CI/CD > Chất lượng Code > Feature mới.

* **Tuần 1 – 2: Cầm máu sự cố & Thiết lập "Mắt thần" (Làm Ngay):**
  - *Tích hợp Error Tracking & Centralized Logging:* Cài Sentry và cấu hình log tập trung. Không thể sửa bug nếu không biết bug đang nổ ở đâu trên production.
  - *Setup CI/CD Pipeline tự động:* Dùng GitHub Actions tự động build, test và deploy lên Staging/Production. **Loại bỏ hoàn toàn việc deploy bằng tay qua SSH/FTP** (nguyên nhân hàng đầu gây sai lệch phiên bản).
  - *Cắt cử 1 Dev trực chiến sửa dứt điểm các blocker bug trên prod.*
* **Tuần 3 – 4: Thiết lập Ranh giới & Test hạt nhân:**
  - *Quy chuẩn ranh giới dữ liệu:* Quy định cứng: PostgreSQL lưu dữ liệu có tính giao dịch tài chính (Đơn hàng, tiền tệ, user); MongoDB chỉ lưu log, metadata phi cấu trúc, audit trail.
  - *Viết Integration Test cho 3 luồng sống còn:* Login, Checkout, Payment. Không cố viết Unit Test phủ 100% cho code cũ (sẽ kiệt sức và lãng phí thời gian).
  - *Thống nhất API Contract giữa Frontend và Backend bằng Swagger/OpenAPI.*
* **Tuần 5 – 6: Ra Feature mới theo nguyên tắc "Hướng đạo sinh" (Boy Scout Rule):**
  - Bắt đầu triển khai feature mới mà business đòi hỏi. Áp dụng quy tắc: *Đụng vào module cũ nào để làm tính năng thì viết test và refactor sạch sẽ module đó*.
  - Phân chia: 2 Dev làm feature mới, 1 Dev refactor backend, 1 Dev dọn dẹp frontend.
* **Tuần 7 – 8: Tối ưu hóa & Ổn định quy trình:**
  - Đánh index lại cơ sở dữ liệu cho các query chậm; chuẩn hóa tài liệu phát triển cho team.
* **CÁC VIỆC TẠM HOÃN (TUYỆT ĐỐI CHƯA LÀM):**
  - Hoãn việc đập đi viết lại toàn bộ hệ thống sang Microservices.
  - Hoãn việc chuyển đổi cơ sở dữ liệu nếu lượng dữ liệu hiện tại chưa vượt ngưỡng phần cứng.

#### 🤖 2. Tổ chức AI Agent để Audit Repository:
* **Phân chia phạm vi (Scope) cho các Agent:**
  - *Agent 1 (Security & Secret Scanner):* Chuyên quét secret hardcode trong git history, lỗ hổng SQL Injection, thư viện npm/pip có CVE bảo mật nguy hiểm.
  - *Agent 2 (Data Flow & Architecture Audit):* Chuyên phân tích các điểm gọi chéo giữa PostgreSQL và MongoDB (tìm những đoạn code join dữ liệu 2 DB thủ công ở tầng application gây nghẽn RAM).
  - *Agent 3 (Error Handling & Dead Code):* Quét toàn bộ controller tìm những chỗ thiếu try/catch, unhandled promise rejections hoặc nuốt lỗi (`catch(e) {}`).
* **Context cần cung cấp cho AI:**
  - Database schema (`schema.prisma`, file SQL DDL, Mongoose schemas).
  - File cấu hình môi trường mẫu (`.env.example`), sơ đồ thư mục dự án.
  - System Prompt có định dạng đầu ra bắt buộc: *"Chỉ báo cáo các điểm có kèm File Path, Số dòng code và Bằng chứng cụ thể. Tuyệt đối không đưa ra nhận xét chung chung mang tính suy đoán"*.
* **Kiểm chứng kết luận của AI:**
  - **TẠI SAO phải kiểm chứng?** AI rất hay bị **False Positive (Báo lỗi ảo)** hoặc hiểu sai ngữ cảnh nghiệp vụ đặc thù của dự án.
  - **Cách làm:** Lead Dev xem xét danh sách cảnh báo của AI, yêu cầu AI viết kèm một đoạn test tái hiện lỗi (Reproducing Script) để chạy thử trên local trước khi kết luận.

---

### Câu 10: Điều tra 3 Lỗi Khó Tái Hiện & Tổ chức AI Agent Điều Tra

#### 📌 Đề bài:
> Production có ba lỗi khó tái hiện: tồn kho đôi khi âm, user bấm một lần nhưng tạo hai đơn, payment gateway báo thành công nhưng đơn chưa cập nhật. Hãy trình bày quy trình điều tra từ giả thuyết đến root cause. Nếu tổ chức nhiều AI Agent hỗ trợ, bạn sẽ cho Agent nào kiểm tra frontend, backend, database/transaction và payment/queue; làm sao ngăn các Agent kết luận quá sớm hoặc cùng lặp lại một giả định sai?

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🔬 1. Quy trình từ Giả thuyết $\rightarrow$ Root Cause cho 3 lỗi:

* **Lỗi 1: Tồn kho đôi khi âm (Negative Stock)**
  - *Giả thuyết:* Bị Race Condition khi nhiều request đồng thời mua cùng 1 sản phẩm cuối cùng do dùng logic kiểu `Read-Modify-Write` không có khóa: Đọc `stock = 1`, thấy còn hàng, sau đó mới trừ kho.
  - *Root Cause Verification:* Truy vấn Database Query Log. Tìm 2 transaction cùng ghi nhận thao tác trừ kho cho cùng 1 SKU trong cùng 1 mili-giây mà không có lệnh khóa dòng (`FOR UPDATE`).
* **Lỗi 2: Bấm một lần tạo hai đơn**
  - *Giả thuyết:* Frontend chưa disable nút bấm (thiếu debounce), mạng chập chờn khiến trình duyệt tự động gửi lại request (Network Retry), hoặc proxy/gateway timeout tự retry request.
  - *Root Cause Verification:* Tra cứu Nginx Access Log theo IP khách hàng. Thấy 2 request gửi lên cách nhau 100 – 300ms với cùng payload và session $\rightarrow$ Xác nhận nguyên nhân do double click và API thiếu Idempotency key.
* **Lỗi 3: Payment Gateway báo thành công nhưng đơn chưa cập nhật**
  - *Giả thuyết:* Webhook của cổng thanh toán gửi về bị timeout, bị chặn bởi firewall/WAF, lỗi xác thực chữ ký (Signature verification fail), hoặc Webhook được xử lý trước khi DB transaction tạo đơn hàng ban đầu được commit.
  - *Root Cause Verification:* Vào Dashboard cổng thanh toán (VNPAY/Momo/Stripe) kiểm tra Webhook Delivery History. Xem HTTP status trả về là gì (500, 403 hay Connection Timeout).

#### 🤖 2. Tổ chức AI Agent Điều Tra & Chống Thiên Kiến (Bias):
* **Phân công chuyên môn hóa:**
  - *Agent Frontend:* Phân tích client event logs, network waterfall, tìm hành vi gửi lặp request.
  - *Agent Backend:* Phân tích application log, tìm các exception bị nuốt và lỗi serialize transaction.
  - *Agent Database:* Phân tích lock contention, slow query logs, transaction isolation level.
  - *Agent Payment/Queue:* Phân tích webhook delivery logs, consumer acknowledge, độ trễ tin nhắn trong queue.
* **Làm sao ngăn các Agent kết luận quá sớm hoặc lặp lại giả định sai?**
  - **TẠI SAO AI hay kết luận vội?** Vì bản chất của LLM là suy diễn dựa trên xác suất từ ngữ (Pattern matching) và có xu hướng "chiều lòng người hỏi" (Confirmation Bias). Nếu một agent đưa ra giả định sai, các agent khác đọc lại sẽ bị hiệu ứng "tâm lý bầy đàn" (Hallucination Cascade).
  - **Biện pháp kỹ thuật chống kết luận vội:**
    1. **Nguyên tắc "No Log, No Proof":** Ép Agent theo quy tắc: *"Mỗi giả thuyết đưa ra PHẢI trích dẫn chính xác log timestamp, request ID hoặc mã lỗi cụ thể từ dữ liệu log thực tế. Nếu không có bằng chứng, Agent phải ghi 'Không đủ dữ liệu để kết luận'"*.
    2. **Cô lập Ngữ cảnh (Context Isolation):** Mỗi Agent hoạt động độc lập, không cho Agent này đọc kết luận của Agent kia để tránh bị lây nhiễm thiên kiến.
    3. **Chỉ định một Red-Team Agent (Phản biện):** Cấu hình một Agent chuyên đóng vai trò "Trọng tài khó tính", nhiệm vụ duy nhất là tìm ra các điểm bất hợp lý trong giả thuyết của các Agent điều tra trước khi con người ra quyết định.

---

### Câu 11: Biến Feature Mơ Hồ Thành Kế Hoạch & Điều Phối Nhiều AI Agent Song Song

#### 📌 Đề bài:
> Business giao một feature mới nhưng yêu cầu còn mơ hồ: React form, backend API, PostgreSQL, voucher, tồn kho, thanh toán, email, PDF và audit log. Hãy mô tả cách bạn biến yêu cầu thành kế hoạch thực thi: làm rõ requirement, API contract, dependency, acceptance criteria, test và thứ tự triển khai. Sau đó thiết kế cách giao việc cho nhiều AI Agent sao cho task nào chạy song song được, task nào phải chờ, và làm sao tránh nhiều Agent sửa xung đột cùng một phần codebase.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 📋 1. Biến Yêu Cầu Mơ Hồ Thành Kế Hoạch Thực Thi:
1. **Làm rõ Requirements & Edge Cases với Stakeholders:**
   - Quy tắc Voucher: Có cho phép cộng dồn nhiều voucher không? Giới hạn lượt dùng theo IP hay theo User ID?
   - Khi thanh toán thất bại/hủy đơn: Tồn kho giữ chỗ trong bao lâu thì tự nhả ra? Voucher có được hoàn lại cho khách không?
2. **Thiết kế API Contract (OpenAPI / Swagger Spec):**
   - Định nghĩa chính xác Request Payload, Response Format, Validation Constraints và mã HTTP Error trước khi viết bất kỳ dòng code nào.
3. **Viết Acceptance Criteria theo chuẩn BDD (Given - When - Then):**
   - *Given* khách hàng nhập mã giảm giá hết hạn, *When* bấm áp dụng, *Then* hệ thống báo lỗi rõ ràng và không cho thanh toán.
4. **Xác định Dependencies & Thứ tự triển khai:**
   - *Bước 1:* DB Migration (Bảng vouchers, orders, audit_logs) $\rightarrow$ *Bước 2:* Core Service (Tồn kho, Voucher) $\rightarrow$ *Bước 3:* API Endpoints & Payment Gateway $\rightarrow$ *Bước 4:* Async Workers (Email, PDF, Audit) $\rightarrow$ *Bước 5:* React Form UI.

#### 🤖 2. Phân chia AI Agent Song Song & Chống Xung Đột Code (Merge Conflict):

```
                     ┌────────────────────────────────────────┐
                     │ Task 1 (BẮT BUỘC CHỜ - Sequential):    │
                     │ Agent DB: Viết Schema & DB Migration   │
                     └───────────────────┬────────────────────┘
                                         │ Có API Contract & Schema xong
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
┌───────────────────────┐  ┌───────────────────────────┐  ┌───────────────────────────────┐
│ Task Song Song A:     │  │ Task Song Song B:         │  │ Task Song Song C:             │
│ Agent Frontend (React)│  │ Agent Backend API         │  │ Agent Async Workers           │
│ Scope: src/features/  │  │ Scope: src/services/order/│  │ Scope: src/workers/           │
│ (Mock API dữ liệu)    │  │ (Logic trừ kho & voucher) │  │ (Email template, render PDF)  │
└───────────────────────┘  └───────────────────────────┘  └───────────────────────────────┘
```

* **Cơ chế chống xung đột Codebase (Code Isolation Guardrails):**
  - **Phân vùng Thư mục Nghiêm ngặt (Strict Directory Scoping):** Mỗi Agent chỉ được phép tạo mới và sửa đổi file trong đúng thư mục được chỉ định (vd: Agent FE chỉ làm trong `src/features/checkout/`, Agent Worker chỉ làm trong `src/jobs/`).
  - **Cấm sửa File Chung (Shared Files):** Tuyệt đối cấm các Agent tự ý sửa các file cấu hình tập trung như `app.js`, `routes.ts` hay `index.ts`. Các route mới phải được thiết kế theo dạng tự nạp (Auto-loading / Plugin Pattern) hoặc để Lead Dev ghép nối thủ công.
  - **Mỗi Agent một Git Branch riêng biệt:** Agent tự commit và mở Pull Request độc lập để chạy test tự động.

---

### Câu 12: Review Code Do AI Sinh & Chống Hiện Tượng "AI Đồng Thuận Sai"

#### 📌 Đề bài:
> Một developer dùng AI sinh gần như toàn bộ feature; PR nhìn sạch và automated test đều pass. Bạn là người review. Hãy trình bày phương pháp xác định code có thực sự đủ điều kiện lên production không, ưu tiên kiểm tra business logic, authorization, security, transaction/concurrency, data integrity, performance, error handling và maintainability. Có nên dùng một AI khác để review code AI sinh ra không? Nếu có, bạn thiết kế vòng review độc lập thế nào để giảm nguy cơ "AI đồng thuận sai"?

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🔍 1. Phương pháp Thẩm định Code AI sinh ra (Checklist của Senior Reviewer):
> **Đặc điểm code do AI sinh ra:** Cú pháp rất đẹp mắt, comment đầy đủ, test viết cho luồng chuẩn (Happy Path) đều pass 100%, nhưng **rất hay có "lỗ hổng vô hình" về Concurrency, Quyền hạn và Tính toàn vẹn dữ liệu**.

* **Ưu tiên kiểm tra số 1: Transaction & Concurrency:**
  - Các câu lệnh ghi DB liên quan có được bọc trong cùng một Transaction không?
  - Khi có lỗi ở bước thứ 3, transaction có thực sự Rollback không hay bị try/catch nuốt mất?
  - Có nguy cơ Race condition khi 2 request chạy song song không (đã dùng Lock hoặc Atomic Update chưa)?
* **Ưu tiên kiểm tra số 2: Phân quyền & IDOR (Insecure Direct Object References):**
  - AI cực kỳ hay mắc lỗi: `Order.findById(req.body.id)` mà quên kiểm tra `userId: req.user.id` $\rightarrow$ Cho phép người dùng xem/sửa đơn hàng của người khác.
* **Ưu tiên kiểm tra số 3: Data Integrity & Boundary Values:**
  - Số lượng có bị nhận số âm (`qty: -5`), giá trị tiền tệ có bị lỗi làm tròn số thực (Floating point issue) không?
* **Ưu tiên kiểm tra số 4: Resource Leaks & Connection Pool:**
  - Có mở kết nối DB/file stream mà quên đóng trong khối `finally` không? Có query toàn bộ bảng vào bộ nhớ RAM không?

#### 🤖 2. Dùng AI Review AI & Chống hiện tượng "AI Đồng Thuận Sai" (False Consensus):
* **Có nên dùng AI để review không?** **CÓ**, nhưng tuyệt đối không dùng theo cách thông thường (đưa code vào và hỏi "đoạn code này có tốt không?").
* **TẠI SAO có hiện tượng "AI đồng thuận sai"?** Vì các mô hình ngôn ngữ lớn (LLM) được huấn luyện trên cùng một tập dữ liệu internet nên có chung các "điểm mù" (blind spots). Nếu Agent 1 viết sai một logic tinh vi, Agent 2 khi đọc code nhìn thấy code sạch đẹp sẽ rất dễ bị đánh lừa và tán thành theo.
* **Thiết kế Vòng Review Độc Lập Chống Đồng Thuận Sai (Adversarial Review):**
  1. **Tách biệt Persona thành "Hacker / Red Team":** Giao cho AI Reviewer một System Prompt mang tính đối kháng: *"Bạn là một chuyên gia thâm nhập bảo mật (Penetration Tester) và Database Architect cực kỳ khó tính. Nhiệm vụ duy nhất của bạn là TÌM RA ÍT NHẤT 3 LỖ HỔNG về Concurrency, Security (IDOR/Injection) hoặc Resource Leak trong đoạn code sau. Nếu không tìm ra, hãy chứng minh chặt chẽ tại sao code an toàn"*.
  2. **Giấu kín Prompt gốc:** Không cung cấp prompt mà dev đã dùng để sinh code cho AI Reviewer đọc, để tránh AI Reviewer bị dẫn dắt theo tư duy ban đầu.
  3. **Yêu cầu AI Reviewer sinh Test Phá Hoại (Fuzzing/Adversarial Tests):** Yêu cầu AI Reviewer viết các test case cố tình truyền dữ liệu biên dị thường (số âm, payload khổng lồ, request song song) để xem code của PR có chịu nổi không.
  4. **Quyền quyết định tối cao thuộc về Con người:** AI chỉ đóng vai trò "chỉ điểm", Lead Dev bắt buộc phải tự tay đối chiếu lại các cảnh báo đó trên thực tế.

---

### Câu 13: Thiết Kế Quy Trình AI-Assisted SDLC & Guardrails An Toàn

#### 📌 Đề bài:
> Hãy thiết kế một quy trình AI-assisted development cho team từ Requirement $\rightarrow$ Analysis $\rightarrow$ Planning $\rightarrow$ Coding $\rightarrow$ Testing $\rightarrow$ Code Review $\rightarrow$ Deploy $\rightarrow$ Monitoring. Ở từng giai đoạn, nêu rõ AI được phép làm gì, input/context cần có, output bắt buộc, điều kiện chuyển bước và human approval. Đặc biệt giải thích guardrail cho quyền sửa repository, branch/PR, secret/API key, dữ liệu khách hàng, production log và quyền tự deploy.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🔄 1. Ma trận Quy trình AI-Assisted Development:

| Giai đoạn | AI được phép làm gì? | Input / Context cần thiết | Output bắt buộc | Điều kiện chuyển bước & Human Approval |
| :--- | :--- | :--- | :--- | :--- |
| **1. Requirement** | Phân tích tài liệu thô, tìm lỗ hổng logic, gợi ý edge case | Bản mô tả tính năng của Business/PO | Bảng câu hỏi làm rõ & User Stories chuẩn | **Human Approval:** PO duyệt bộ yêu cầu |
| **2. Analysis & Planning** | Đề xuất kiến trúc, vẽ flow, thiết kế API Contract & Schema | User Stories đã duyệt, Architecture Guidelines | OpenAPI Spec (.yaml), Schema Migration Script | **Human Approval:** Tech Lead phê duyệt thiết kế |
| **3. Coding** | Sinh boilerplate, viết logic nghiệp vụ theo API Contract | API Spec, Coding Standards, Scope thư mục | Code logic hoàn chỉnh, Type definitions | Không có lỗi compile/linter |
| **4. Testing** | Sinh Unit Tests, Edge-case tests, Mock dữ liệu | Code vừa viết + Acceptance Criteria | Test Suite tự động phủ các case biên | **Điều kiện:** 100% Automated Tests pass trên CI |
| **5. Code Review** | Quét bảo mật, check conventions, tìm concurrency bug | Git Diff của PR | Danh sách checklist cảnh báo rủi ro | **Human Approval:** Ít nhất 1 Senior Dev approve PR |
| **6. Deploy** | 🚫 **NGHIÊM CẤM AI CAN THIỆP** | N/A | Release Notes tự động | **Human Approval:** Kích hoạt deploy thủ công trên CI/CD |
| **7. Monitoring** | Tổng hợp log lỗi, phân tích xu hướng incident | Sentry alerts, Metrics (Prometheus/Grafana) | Tóm tắt sự cố & Đề xuất hướng xử lý | Kỹ sư trực ca tiếp nhận và điều tra |

#### 🛡️ 2. Hệ Thống Guardrails An Toàn Cốt Tử:
- **Quyền sửa Repository & Branch/PR:** AI tuyệt đối không có quyền push trực tiếp vào các branch chính (`main`, `staging`). Mọi tác vụ sửa code bắt buộc phải thực hiện trên branch tính năng riêng (`feat/ai-...`) và phải mở Pull Request để con người review.
- **Bảo mật Secret & API Key:** Cấu hình file `.aiignore` và `.gitignore`. Tuyệt đối không để AI đọc các file `.env`, chứng chỉ SSL, Private Key. Sử dụng công cụ quét bí mật tự động (như `git-leaks`, `trufflehog`) trên pipeline CI/CD để chặn đứng nếu AI vô tình ghi secret vào code.
- **Bảo vệ Dữ liệu Khách hàng & Production Log (PII):** Trước khi đưa log hệ thống vào context cho AI phân tích, log bắt buộc phải đi qua một script **Sanitize/Masking** để che mờ thông tin cá nhân (Email, số điện thoại, số thẻ tín dụng, mật khẩu).
- **Quyền tự Deploy:** **NGHIÊM CẤM 100% việc cấp quyền cho AI tự kích hoạt deploy lên Production.** Phải luôn luôn có **Human-in-the-loop** bấm nút xác nhận cuối cùng.

---

### Câu 14: Triage & Xử lý Khủng hoảng Khi Quá Tải Nhiều Việc Cùng Lúc

#### 📌 Đề bài:
> Trong cùng một thời điểm có: production bug ảnh hưởng khách hàng, task gấp từ quản lý, feature bạn đang làm dở 70%, một AI Agent đang refactor module lớn, một Agent khác báo lỗ hổng security, CI/CD của PR khác đang fail và đồng đội cần bạn review. Hãy nêu thứ tự ưu tiên, việc nào dừng/tiếp tục, việc nào giao lại cho người hoặc AI, và cách bạn cập nhật manager/team.

#### 💡 Lời giải & Phân tích chuyên sâu:

#### 🚨 1. Thứ tự Ưu tiên (Ma trận Tác động x Khẩn cấp):
1. **Ưu tiên 1 (TỐI CAO - Khẩn cấp & Tác động lớn): Production bug đang ảnh hưởng khách hàng.**
   - *Hành động:* Ảnh hưởng trực tiếp đến người dùng và doanh thu. Dừng mọi việc khác, lập tức khoanh vùng mức độ. Nếu nghiêm trọng thì thực hiện **Rollback** về phiên bản ổn định trước đó ngay lập tức để giảm thiểu thiệt hại, sau đó mới bật log truy tìm root cause.
2. **Ưu tiên 2: Đánh giá nhanh Lỗ hổng Security do AI Agent báo.**
   - *Hành động:* Dành 5 phút thẩm định mức độ nguy hiểm (Severity). Nếu là lỗ hổng Critical đang bị khai thác ngoài internet (RCE, SQLi) $\rightarrow$ Đưa vào vá chung đợt hotfix với bug prod. Nếu là rủi ro lý thuyết mức Low/Medium $\rightarrow$ Đưa vào backlog xử lý sau.
3. **Ưu tiên 3: Task gấp từ Quản lý.**
   - *Hành động:* Trao đổi nhanh với quản lý (xem kịch bản giao tiếp bên dưới) để thống nhất mức độ ưu tiên giữa task này và bug prod.
4. **Ưu tiên 4: CI/CD của PR khác đang fail & Review code cho đồng đội.**
5. **Ưu tiên 5: Feature đang làm dở 70%.**

#### 🛑 2. Việc nào DỪNG / TIẾP TỤC / GIAO CHO NGƯỜI HOẶC AI:
* **DỪNG NGAY LẬP TỨC:**
  - **Dừng ngay AI Agent đang refactor module lớn!** 
  - **TẠI SAO?** Vì trong lúc production đang có bug và sắp có hotfix được đẩy lên, việc để AI refactor code trên diện rộng sẽ làm git history biến động dữ dội, tạo ra các cuộc xung đột code (merge conflicts) khổng lồ, khiến việc cherry-pick bản vá lỗi trở thành thảm họa.
* **TẠM HOÃN:**
  - Tạm hoãn feature đang làm dở 70% (chạy lệnh `git stash` để cất giữ trạng thái code hiện tại).
* **GIAO CHO AI:**
  - Giao AI hỗ trợ phân tích log lỗi của Production bug để rút ngắn thời gian tra cứu.
  - Giao AI đọc log build của CI/CD đang fail cho đồng đội, gửi lại tóm tắt nguyên nhân để họ tự sửa.
* **GIAO CHO ĐỒNG ĐỘI:**
  - Nhờ một đồng đội khác trong team hỗ trợ review chéo PR thay mình trong lúc mình đang tập trung cứu hỏa production.

#### 📢 3. Cách Cập Nhật Manager & Team (Nguyên tắc 3T: Tình trạng - Trở ngại - Thời gian):
* Gửi một thông báo ngắn gọn, dứt khoát vào channel chung:
  > *"Em xin phép cập nhật nhanh tình hình hiện tại:  
  > 1. Hệ thống đang có **bug trên Production ảnh hưởng trực tiếp đến khách hàng**, em đang ưu tiên xử lý dứt điểm sự cố này đầu tiên (dự kiến cần 30 – 45 phút để rollback/hotfix).  
  > 2. Vì vậy, em xin phép **tạm hoãn task gấp của anh và tính năng đang làm dở** cho đến khi production ổn định hoàn toàn.  
  > 3. Về PR của bạn [Đồng đội], em đã nhờ bạn [Dev khác] review giúp.  
  > Ngay khi hệ thống prod an toàn trở lại, em sẽ bắt tay xử lý ngay task gấp của anh ạ."*

---
*(Tài liệu này được biên soạn độc quyền phục vụ ôn tập phỏng vấn Full Stack Developer & AI Engineer tại OctoSoft).*
