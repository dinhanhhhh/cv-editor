# ĐÁNH GIÁ CHI TIẾT CV & LỘ TRÌNH NÂNG CẤP NĂNG LỰC (GÓC NHÌN TECH LEAD)

> Tài liệu này tổng hợp toàn bộ các lỗi chí mạng trong hệ thống CV hiện tại của **Trương Đình Anh**, cách sửa ngay lập tức trên CV để không bị đánh rớt vô lý, và lộ trình học tập/nâng cấp dự án thực chiến để tự tin vượt qua phỏng vấn.

---

## 🔥 PHẦN 1: PHÊ BÌNH THẲNG THẮN – NHỮNG LỖI CHÍ MẠNG TRONG CV

### 1. Hội chứng "Bơm thổi từ vựng" (Over-claiming) & Cái bẫy tự đào hố chôn mình
Bạn đang dùng nhiều từ ngữ đao to búa lớn nhưng các dự án trên GitHub thực chất vẫn dừng ở mức **CRUD cơ bản**:
- **Bẫy "Tắc kè hoa" nhét keyword bất chấp vào mục Skills:**
  - Trong `data/cv-data-hemidi.js`, thấy JD yêu cầu `NestJS, TypeORM, TDD, Jest`, bạn đưa hết vào mục Skills (`NestJS, TDD, TypeORM, Schema Migration, Jest`). Tuy nhiên, nhìn vào 3 dự án bên trên thì **100% là Express + MongoDB + Next.js**, không có một dòng code NestJS hay một file `.spec.ts` (Unit Test) nào trên GitHub.
  - Trong `data/cv-data-yabu.js`, bạn ghi kỹ năng `Redis, Linux, VPS Deployment`, nhưng toàn bộ dự án đều deploy bằng Vercel/Render (click-to-deploy PaaS), chưa hề có kiến trúc caching bằng Redis hay cấu hình Nginx/systemd trên Linux VPS.
  - **Hậu quả khi phỏng vấn:** Người phỏng vấn mở GitHub của bạn ra, không thấy `jest.config` hay `NestJS`, họ sẽ hỏi đúng 1 câu: *"Em mở repo chỉ cho anh xem chỗ nào em viết TDD và Migration với TypeORM?"* — Không chỉ được là **rớt ngay lập tức vì lỗi trung thực**.

### 2. Số liệu "ảo" và thiếu ngữ cảnh kỹ thuật (Fake / Meaningless Metrics)
- **Số liệu độ trễ API thiếu căn cứ (`< 300ms`, `< 200ms`):**
  - Trong `data/cv-data-base.js` và `data/cv-data-be.js`: *"Tối ưu truy vấn MongoDB giúp thời gian phản hồi API xuống dưới 300ms (hoặc 200ms)"*.
  - Với một DB chỉ có vài chục đến vài trăm dòng dữ liệu mẫu trên local/Atlas miễn phí, dù không tối ưu gì thì query cũng chỉ mất **5ms – 20ms**. Khoe `< 300ms` với Senior Backend chẳng khác nào tự thú nhận: *"Em chưa bao giờ làm việc với dữ liệu lớn và cũng không biết đo benchmark thực tế"*.
  - Muốn nói về tối ưu query, phải trả lời được: **Trước khi tối ưu là bao nhiêu ms? Với bao nhiêu bản ghi (100k hay 1 triệu)? Bị nghẽn ở đâu (`COLLSCAN`, N+1 query, hay thiếu Compound Index)? Dùng lệnh `.explain("executionStats")` kiểm tra ra sao?**
- **Số liệu thời gian tải trang phi thực tế (`< 80ms`):**
  - Trong `data/cv-data-credosis.js`: *"thời gian tải trang dưới 80ms"*.
  - Ngay cả một trang trắng trên mạng cáp quang nội địa, riêng thời gian DNS lookup + TCP Handshake + SSL + tải Google Fonts (`Be Vietnam Pro`) đã vượt quá 80ms. Ghi con số phi vật lý này khiến dân kỹ thuật đánh giá bạn không hiểu về Network & Browser Rendering.

### 3. Mâu thuẫn thời gian & "Độ" lại dự án cá nhân quá đà
- **Mâu thuẫn thời gian ngay trong cùng 1 file:**
  - Dự án `E-COMMERCE PLATFORM` ở `data/cv-data-base.js` ghi `08/2025 - 11/2025`, nhưng sang `data/cv-data-hemidi.js` (bản tiếng Việt) lại ghi `08/2025 - 09/2025`, trong khi bản tiếng Anh ngay bên dưới vẫn là `08/2025 - 11/2025`. Đây là lỗi bất cẩn sơ đẳng giữa 2 ngôn ngữ.
- **Khai khống quy mô dự án `cv-editor`:**
  - Ở `data/cv-data-base.js` và `data/cv-data-credosis.js`, bạn gọi repo `github.com/dinhanhhhh/cv-editor` là *"Enterprise automation and management platform"* / *"Nền tảng SaaS quản trị và tự động hóa quy trình nghiệp vụ"*.
  - Khi HR/Tech Lead bấm vào link GitHub, họ thấy ngay đây chính là **công cụ quản lý CV cá nhân của bạn**. Bản thân công cụ này rất sáng tạo (có Cloudflare Worker + Telegram Bot + GitHub Actions + Quality Gate là điểm cộng lớn!), nhưng gọi nó là "Enterprise SaaS" thì người đọc sẽ thấy bạn đang "nổ" quá đà.

### 4. Mô tả kinh nghiệm thực tập tại TAMI còn "nông" và thiếu dấu ấn kỹ thuật
- Nhìn vào phần `TAMI TECHNOLOGY` (`06/2025 - 12/2025`):
  - *"Thiết kế cấu trúc CSDL quan hệ và triển khai PostgreSQL trên Supabase"* -> Thiết kế bảng gì? Dữ liệu chứng khoán (OHLCV theo phút/ngày) có đặc thù là dữ liệu chuỗi thời gian (time-series) rất nhiều dòng, bạn xử lý trùng lặp (`UPSERT` / `ON CONFLICT`), phân trang hay đánh index theo `(symbol, trading_date)` như thế nào?
  - *"Tích hợp Google Authentication qua NextAuth"* -> Việc cấu hình `GoogleProvider` trong NextAuth chỉ tốn khoảng **15 phút đọc docs**. Đưa nó thành 1 trong 5 gạch đầu dòng chính của 6 tháng thực tập làm cho kỳ thực tập của bạn trông rất ít việc.
  - *"Kiểm thử hiệu năng API bằng Postman"* -> Postman dùng để test chức năng (Functional/Integration test) hoặc chạy Collection Runner cơ bản, còn kiểm thử hiệu năng (Load/Stress test) thực tế người ta dùng `k6`, `Artillery`, hoặc `JMeter`.

### 5. Các bản CV cũ vi phạm chính quy tắc chuẩn ATS của dự án
- `data/cv-data-be.js` vẫn còn câu *"Xây dựng hơn 15 RESTful API endpoints"*, vẫn còn từ làm yếu kỹ năng như `Nest.js (Learning)`, `CI/CD basic`.
- `data/cv-data-fullstack.js` vẫn còn ghi `Docker cơ bản` / `Basic Docker` và nhãn danh mục kỹ năng chưa chuẩn hóa (`Cơ sở dữ liệu`, `Công cụ`, `Ngoại ngữ` thay vì `Databases`, `Tools & DevOps`, `English`).
- **Khoảng trống thời gian (Career Gap):** Bạn học `2020 - 2024`, thực tập `06/2025 - 12/2025`, và hiện tại là `2026` vẫn ứng tuyển vị trí `Intern / Fresher`. Nhà tuyển dụng chắc chắn sẽ đặt câu hỏi về khoảng thời gian trống này.

---

## 🛠️ PHẦN 2: GIẢI PHÁP SỬA CV NGAY LẬP TỨC

### 1. Nguyên tắc "Có trên GitHub mới ghi vào Skills chính"
- **Công nghệ đã dùng thật trong repo** (`Node.js, Express.js, Next.js, React.js, TypeScript, PostgreSQL, MongoDB, Docker, Git, Postman`) -> Đưa vào mục `KỸ NĂNG CHUYÊN MÔN` (`Skills`).
- **Công nghệ JD yêu cầu nhưng bạn mới đọc lý thuyết** (`NestJS, TypeORM, BullMQ, PHP/Laravel`) -> **TUYỆT ĐỐI KHÔNG** nhét vào `Skills` như thể đã làm qua. Chỉ nhắc đến ở câu cuối phần `Tóm tắt chuyên môn` (`Objective`) hoặc trong `Email ứng tuyển` với tâm thế trung thực:
  > *"Nắm vững nguyên lý [kiến trúc phân tầng / hàng đợi bất đồng bộ] và đang chủ động thực hành [NestJS / BullMQ / Laravel] để bắt nhịp nhanh với tech stack của công ty."*

### 2. Chuyển cách viết Bullet Points từ "Kể lể CRUD" sang "Giải quyết bài toán kỹ thuật"
- ❌ **Cách viết cũ (Nông, ai cũng viết giống nhau):**
  > *"Phát triển các RESTful API endpoints bằng Node.js và Express cho các nghiệp vụ quản lý việc làm, hồ sơ ứng tuyển và người dùng."*
- ✅ **Cách viết mới (Chuẩn Engineering, có chiều sâu):**
  > *"Thiết kế RESTful API theo kiến trúc phân tầng Controller-Service; xử lý truy vấn lọc đa điều kiện (search, filter, pagination) và kiểm soát phân quyền truy cập (RBAC) tách biệt giữa Nhà tuyển dụng, Ứng viên và Admin."*

### 3. Định vị lại dự án `cv-editor` đúng bản chất nhưng vẫn ấn tượng
- Không gọi là *"Enterprise SaaS"*. Hãy gọi đúng bản chất: **"HỆ THỐNG TỰ ĐỘNG HÓA QUẢN TRỊ HỒ SƠ & AI AGENT"** (`AI-POWERED WORKFLOW & AUTOMATION PLATFORM`).
- Nhấn mạnh đúng những điểm kỹ thuật đắt giá mà bạn **thực sự đã code** trong repo này:
  1. Xây dựng SPA bằng Vanilla JS (Zero-dependency), tối ưu bộ dựng trang in ấn chuẩn kích thước A4 và cơ chế Deep Merge dữ liệu đa phiên bản.
  2. Thiết kế Serverless Webhook trên **Cloudflare Workers** kết nối **Telegram Bot API** và **LLM API (Gemini)** để tự động phân tích JD và sinh cấu trúc dữ liệu chuẩn hóa.
  3. Thiết lập **Quality Gate (`validate-cv.js`)** và pipeline **GitHub Actions CI/CD** tự động kiểm tra tính toàn vẹn dữ liệu trước khi commit và phát hành.

### 4. Làm sâu sắc hơn mục Kinh nghiệm tại TAMI Technology
- Thay vì chỉ nói "cài NextAuth" và "test Postman", hãy làm rõ luồng dữ liệu:
  - Chuẩn hóa và đồng bộ dữ liệu thị trường từ thư viện tài chính `Vnstock3` vào `PostgreSQL` (Supabase), xử lý ngoại lệ khi nguồn dữ liệu bên thứ ba bị trễ hoặc lỗi định dạng.
  - Thiết kế schema bảng và đánh Index tối ưu cho các truy vấn lọc theo mã cổ phiếu và khung thời gian.

---

## 📚 PHẦN 3: LỘ TRÌNH HỌC & NÂNG CẤP DỰ ÁN (TRONG 3 TUẦN)

Hiện tại bạn có **3 dự án giống hệt nhau về độ khó** (`Job Portal`, `Student Management`, `E-commerce` đều là Express + MongoDB + JWT + CRUD). Làm 3 dự án CRUD không giúp bạn giỏi lên gấp 3 lần, mà chỉ lặp lại 1 mức kiến thức 3 lần.

Thay vì làm thêm dự án CRUD thứ 4, hãy dành **3 tuần** nâng cấp duy nhất dự án **JOB PORTAL** thành một dự án cấp độ **Fresher/Junior thực thụ**:

### 📅 Tuần 1: Chuyển từ "Biết gọi thư viện" sang "Hiểu bản chất bên dưới"
1. **Database & Indexing thực chiến (MongoDB & PostgreSQL):**
   - **Thực hành:** Dùng thư viện `@faker-js/faker` viết 1 script seed khoảng **100,000 bản ghi** việc làm và hồ sơ ứng tuyển vào DB.
   - Chạy câu lệnh tìm kiếm việc làm theo `title + location + salary` kèm `.explain("executionStats")`.
   - Quan sát sự khác biệt giữa `COLLSCAN` (quét toàn bộ bảng, tốn ~300-500ms) và `IXSCAN` sau khi tạo **Compound Index** (giảm xuống ~5-15ms).
   - Chụp ảnh màn hình kết quả Before/After đưa vào `README.md` của repo `JOB-PORTAL`. Khi đó câu viết trong CV của bạn là **bằng chứng thép 100%**.
2. **Hiểu thấu đáo Authentication & Bảo mật Web:**
   - Tự trả lời trôi chảy các câu hỏi:
     - *Tại sao lưu JWT trong `HttpOnly Cookie` chống được XSS nhưng vẫn có nguy cơ dính CSRF? Thuộc tính `SameSite=Lax/Strict` hoạt động thế nào?*
     - *Access Token là stateless (không lưu DB), vậy khi user bấm "Đăng xuất trên mọi thiết bị" hoặc bị khóa tài khoản ngay lập tức thì làm sao chặn Access Token cũ khi nó chưa hết hạn? (Gợi ý: Token Blacklist trên Redis hoặc kiểm tra `tokenVersion` / `passwordChangedAt`).*

### 📅 Tuần 2: Bổ sung 3 mảnh ghép "Ăn tiền" vào repo GitHub
Nhà tuyển dụng soi code của ứng viên Fresher sẽ tìm 3 thứ mà 90% sinh viên không làm:
1. **Input Validation & DTO chặt chẽ:**
   - Dùng `Zod` hoặc `Joi` viết middleware validate toàn bộ `req.body`, `req.query`, `req.params` trước khi vào Controller.
2. **Background Jobs với BullMQ & Redis (Làm thật 1 luồng):**
   - Trong `JOB-PORTAL`, khi ứng viên bấm "Ứng tuyển", thay vì bắt user chờ gửi email thông báo cho HR (mất 2-3 giây), hãy đẩy job `SEND_APPLICATION_EMAIL` vào **BullMQ (Redis)**.
   - Cấu hình `attempts: 3` và `backoff: { type: 'exponential', delay: 2000 }` để tự động thử lại nếu dịch vụ gửi mail lỗi.
   - Chỉ cần 1 luồng chạy thật này trên GitHub, bạn tự tin ghi `Redis, BullMQ, Background Jobs` vào CV mà không sợ bất kỳ ai hỏi xoáy!
3. **Viết Unit Test thật với Jest:**
   - Không cần test toàn bộ dự án. Chỉ cần viết Unit Test cho **2 Service quan trọng nhất**: `AuthService` (đăng ký trùng email, đăng nhập sai pass, cấp token) và `ApplicationService` (nộp CV khi job đã hết hạn, nộp trùng 2 lần).
   - Có thư mục `__tests__` pass xanh mượt trên GitHub Actions sẽ nâng giá trị hồ sơ của bạn lên một bậc hoàn toàn khác.

### 📅 Tuần 3: Chinh phục NestJS + TypeORM/Prisma (Chuẩn Enterprise)
- Hầu hết các công ty tuyển Backend/Fullstack Node.js hiện nay đều ưu tiên **NestJS** vì nó chuẩn hóa **OOP, SOLID, Dependency Injection (DI), Modular Architecture**.
- **Cách học hiệu quả nhất (Không học vẹt qua video):**
  - Tự tay viết lại module `Auth` + `Jobs` của dự án `JOB-PORTAL` bằng **NestJS + PostgreSQL (TypeORM hoặc Prisma)**.
  - Qua quá trình đó, nắm chắc sự khác biệt giữa: `Module`, `Controller`, `Service (@Injectable)`, `Guard` (xác thực JWT & RBAC), `Pipe` (validation DTO), và `ExceptionFilter` (xử lý lỗi tập trung).
  - Thực hành tạo và chạy `Migration` bằng CLI thay vì dùng `synchronize: true`.

---

## 🎯 PHẦN 4: 5 CÂU HỎI "SÁT THỦ" CẦN LUYỆN TRẢ LỜI TRƯỚC KHI ĐI PHỎNG VẤN

Hãy tự tập trả lời thành tiếng (không nhìn tài liệu) 5 câu hỏi xoáy trực tiếp vào CV của bạn:

1. **Câu hỏi về TAMI Technology:**
   > *"Tại TAMI, khi em gọi dữ liệu từ thư viện `Vnstock3` mà bên cung cấp dữ liệu bị chậm, rate-limit hoặc trả về thiếu trường dữ liệu thì API của em xử lý như thế nào để không làm treo ứng dụng hoặc lưu dữ liệu rác vào PostgreSQL?"*
2. **Câu hỏi về Concurrency / Race Condition (Job Portal / E-commerce):**
   > *"Trong dự án E-commerce của em, nếu món hàng chỉ còn tồn kho `stock = 1`, mà có 2 người dùng cùng bấm 'Đặt hàng' tại cùng một mili-giây, code hiện tại của em có bị bán lố (overselling) thành `-1` không? Xử lý ở tầng Database như thế nào (Atomic Update / Transaction / Pessimistic & Optimistic Locking)?"*
3. **Câu hỏi về Thiết kế CSDL (3NF):**
   > *"Trong CV em ghi nắm vững chuẩn hóa 3NF. Em hãy lấy 1 bảng cụ thể trong dự án của em và giải thích tại sao nó đạt 3NF? Khi nào trong thực tế người ta chấp nhận phá vỡ 3NF (Denormalization)?"*
4. **Câu hỏi về dự án `cv-editor` (AI Agent & CI/CD):**
   > *"Trong luồng Telegram Bot -> Cloudflare Worker -> LLM -> GitHub Actions của em, nếu LLM trả về JSON bị lỗi cú pháp hoặc thiếu trường bắt buộc (Hallucination), hệ thống của em chặn ở bước nào để không làm hỏng trang web đang chạy trên Production?"*
5. **Câu hỏi về Khoảng trống thời gian (2024 – 2026):**
   > *"Em tốt nghiệp năm 2024 và kết thúc thực tập tại TAMI vào tháng 12/2025. Trong khoảng thời gian từ đó đến nay em đã làm gì, học được gì và tại sao hiện tại em vẫn ứng tuyển vị trí Intern/Fresher?"*
   - **Gợi ý cách trả lời khéo léo:** Tập trung vào việc bạn dành thời gian hệ thống hóa lại kiến trúc phần mềm (chuyển từ viết code chạy được sang làm chủ TypeScript, Docker, CI/CD, tích hợp AI Agent vào quy trình phát triển thực tế) và hiện tại đã sẵn sàng 100% thời gian để cống hiến lâu dài Full-time mà không bị vướng bận lịch học.
