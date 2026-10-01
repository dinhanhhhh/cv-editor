/**
 * ===================================================================
 * CV INTERVIEW PREPARATION CHEAT SHEET ENGINE
 * ===================================================================
 * Công cụ cẩm nang phỏng vấn 1-click may đo riêng theo từng phiên bản CV:
 * 1. Kịch bản giới thiệu bản thân 30s - 1 phút (Elevator Pitch) VI & EN
 * 2. Top 5 câu hỏi phỏng vấn kỹ thuật sát sườn kèm gợi ý trả lời theo mô hình STAR
 * 3. Câu hỏi thông minh dành cho ứng viên hỏi ngược lại nhà tuyển dụng
 * 4. Sổ tay ghi chú phỏng vấn cá nhân theo từng công ty (lưu localStorage)
 */

(function () {
  // Kho câu hỏi kỹ thuật chuyên sâu theo từng mảng công nghệ
  const QUESTION_BANK = [
    {
      id: "octosoft_exp_gap",
      keywords: ["kinh nghiệm", "2 năm", "6 tháng", "khoảng trống", "tami", "octosoft", "yêu cầu"],
      category: "Kinh Nghiệm Thực Tế (6 Tháng vs 2 Năm)",
      q_vi: "JD yêu cầu tối thiểu 2 năm kinh nghiệm, em chỉ có 6 tháng thì nghĩ mình đáp ứng yêu cầu công việc thế nào?",
      star_vi: {
        situation: "JD yêu cầu tối thiểu 2 năm kinh nghiệm thực tế, trong khi kinh nghiệm làm việc chính thức tại TAMI là 6 tháng.",
        task: "Thuyết phục nhà tuyển dụng rằng năng lực thực chiến, chiều sâu giải quyết bài toán trọn vẹn (end-to-end) và tốc độ tự học đáp ứng hoàn toàn kỳ vọng công việc.",
        action: "Em thẳng thắn thừa nhận: 'Dạ em có 6 tháng kinh nghiệm làm việc thực tế tại TAMI. Tuy nhiên, trong 6 tháng đó em không chỉ làm một phần nhỏ mà được trực tiếp tham gia trọn vẹn từ thiết kế CSDL PostgreSQL trên Supabase, xây dựng hệ thống RESTful API với Next.js/Node.js cho đến tích hợp Authentication. Ngoài giờ, em cũng tự xây dựng các dự án tự động hóa và AI chạy thực tế. Em có nền tảng tự học nhanh, thói quen đọc tài liệu kỹ thuật gốc, chủ động trao đổi và tiếp thu code review từ các anh chị đi trước.'",
        result: "Thể hiện thái độ trung thực, cầu tiến và tự tin có thể bắt nhịp, làm việc độc lập trong dự án của công ty sau 1-2 tuần đầu tiên."
      }
    },
    {
      id: "octo_test_order_api",
      keywords: ["tạo đơn hàng", "idempotent", "transaction", "queue", "worker", "octosoft", "order"],
      category: "OctoSoft Test: Flow API Tạo Đơn Hàng & Xử Lý Async",
      q_vi: "Thiết kế flow backend tạo đơn hàng đảm bảo validation, authorization, transaction, idempotent và phân chia Sync vs Async?",
      star_vi: {
        situation: "API tạo đơn hàng xử lý nhiều bước: khách hàng, tồn kho, voucher, thanh toán; cần chống race condition và duplicate submit.",
        task: "Thiết kế kiến trúc flow API chuẩn ACID, chống overselling và tối ưu độ trễ bằng Message Queue.",
        action: "1. Request chính (Sync): Nhận Idempotency-Key từ header (tra cứu Redis), Authen/Author, validate schema, mở DB Transaction khóa hàng (SELECT ... FOR UPDATE hoặc Atomic Update) -> trừ voucher -> tạo đơn hàng status PENDING_PAYMENT -> Commit DB. 2. Đưa sang Queue/Worker (Async): Gửi email/SMS, render hóa đơn PDF, bắn log BI, schedule delayed job hủy đơn sau 15p nếu chưa trả tiền. Lý do: Giữ ACID trong request chính để chống overselling; đẩy các I/O nặng sang worker để tránh nghẽn thread và retry độc lập khi bên thứ ba timeout.",
        result: "Đảm bảo tính toàn vẹn 100% dữ liệu tài chính, giảm độ trễ API xuống dưới 200ms và loại bỏ hoàn toàn rủi ro bán âm tồn kho."
      }
    },
    {
      id: "octo_test_slow_query",
      keywords: ["vài triệu records", "chậm", "cpu không cao", "query plan", "index", "pagination", "n+1", "connection pool", "octosoft"],
      category: "OctoSoft Test: Tối Ưu API Hàng Triệu Records Khi CPU Thấp",
      q_vi: "API đơn hàng vài triệu records bị chậm dù CPU không cao. Thứ tự điều tra thực tế và khi nào cần đổi DB?",
      star_vi: {
        situation: "API đơn hàng triệu bản ghi phản hồi chậm dù CPU server nhàn rỗi (dấu hiệu nghẽn I/O Disk hoặc chờ Connection Pool).",
        task: "Xác định nguyên nhân nghẽn cổ chai và đưa ra lộ trình tối ưu truy vấn.",
        action: "Thứ tự điều tra: (1) Chạy EXPLAIN (ANALYZE, BUFFERS) kiểm tra Seq Scan vs Index Scan; (2) Kiểm tra Composite Index theo quy tắc Equality -> Range -> Sort; (3) Sửa Pagination từ OFFSET lớn sang Keyset/Cursor Pagination; (4) Khắc phục N+1 queries bằng Eager loading; (5) Kiểm tra Connection Pool xem có bị thiếu connection gây hàng đợi chờ; (6) Cache Redis cho filter phổ biến; (7) Tách Export Excel sang Worker stream ghi S3. Cân nhắc đổi sang Elasticsearch khi cần tìm kiếm văn bản phức tạp, hoặc ClickHouse khi cần báo cáo phân tích tổng hợp (OLAP).",
        result: "Tốc độ phản hồi API danh sách giảm từ 3-5 giây xuống dưới 150ms trên tập dữ liệu hàng triệu dòng."
      }
    },
    {
      id: "octo_test_jwt_refresh_race",
      keywords: ["jwt", "refresh token", "401", "nhiều tab", "logout", "mobile", "clock skew", "race condition", "octosoft"],
      category: "OctoSoft Test: Khắc Phục Sự Cố JWT (Multi-tab Logout & 401)",
      q_vi: "Tại sao mở nhiều tab lại dễ bị logout khi dùng Refresh Token Rotation, và làm sao để thiết kế auth flow ổn định?",
      star_vi: {
        situation: "Hệ thống JWT áp dụng Refresh Token Rotation (RTR). Mở nhiều tab bị logout ngẫu nhiên, vừa login thỉnh thoảng bị 401.",
        task: "Phân tích nguyên nhân và thiết kế Auth Flow an toàn chuẩn Production.",
        action: "Nguyên nhân: Mở nhiều tab khi access token hết hạn đồng thời gọi refresh token cũ; tab 1 đổi thành công làm hủy token cũ, tab 2 gửi token cũ sau đó bị backend coi là Replay Attack -> thu hồi toàn bộ session. Vừa login bị 401 là do Clock Skew giữa Auth server và API server. Giải pháp: Frontend dùng Mutex/Promise queue (BroadcastChannel) để chỉ 1 request được refresh; Backend cấp Grace Period 15-30s cho refresh token cũ; cấu hình clockTolerance: 30s; Access Token lưu trong Memory, Refresh Token lưu trong HttpOnly Secure SameSite Cookie.",
        result: "Triệt tiêu 100% tình trạng logout oan khi mở nhiều tab và khắc phục hoàn toàn lỗi 401 do lệch giờ server."
      }
    },
    {
      id: "octo_test_react_race_condition",
      keywords: ["react", "filter", "nháy", "race condition", "unmount", "abortcontroller", "tanstack query", "octosoft"],
      category: "OctoSoft Test: Xử Lý React Race Condition Khi Filter Nhanh",
      q_vi: "Khi đổi filter nhanh, React bị nháy loading, data cũ đè data mới và warning unmount. Nguyên nhân và cách xử lý?",
      star_vi: {
        situation: "Component React gọi API theo filter bị lỗi Race Condition: Request gửi sau về trước, request gửi trước về sau ghi đè state mới.",
        task: "Xử lý hủy request cũ, ngăn chặn stale state và khắc phục rò rỉ bộ nhớ khi component unmount.",
        action: "Dùng AbortController trong cleanup của useEffect để tự động hủy request cũ khi filter đổi hoặc component unmount: controller.abort(). Chuẩn hóa production bằng TanStack Query (React Query): tự động deduplicate request, tự động cancel fetch cũ, hỗ trợ placeholderData: keepPreviousData giúp UI giữ nguyên dữ liệu cũ trong lúc tải mới, loại bỏ hoàn toàn nhấp nháy loading.",
        result: "UI phản hồi mượt mà, không giật nháy, dữ liệu hiển thị luôn khớp 100% với bộ lọc đang chọn."
      }
    },
    {
      id: "octo_test_negative_stock_triage",
      keywords: ["tồn kho âm", "hai đơn", "double submit", "webhook", "ai agent", "root cause", "octosoft"],
      category: "OctoSoft Test: Điều Tra 3 Lỗi Prod Khó Tái Hiện & Tổ Chức AI Agent",
      q_vi: "Quy trình điều tra 3 lỗi prod: tồn kho âm, tạo 2 đơn, payment webhook chậm; và cách tổ chức AI Agent tránh thiên kiến?",
      star_vi: {
        situation: "Hệ thống gặp 3 lỗi khó tái hiện: Tồn kho âm, bấm 1 lần ra 2 đơn, cổng thanh toán báo thành công nhưng đơn chưa cập nhật.",
        task: "Xác định nguyên nhân gốc rễ và tổ chức đội ngũ AI Agent điều tra mà không bị kết luận vội.",
        action: "1. Root Cause: Tồn kho âm do race condition Read-Modify-Write (sửa bằng SELECT ... FOR UPDATE hoặc Atomic Update); Tạo 2 đơn do thiếu debounce frontend + thiếu Idempotency-Key backend; Webhook chưa cập nhật do webhook đến trước khi DB commit tạo đơn, hoặc chữ ký sai. 2. Tổ chức AI Agent: Phân chia Agent FE (access log), Agent BE (app log), Agent DB (lock log), Agent Payment (webhook log). Chống thiên kiến: Ép quy tắc 'No Log, No Proof' (bắt buộc trích dẫn log ID cụ thể, không suy đoán) và dùng 1 Red-Team Agent chuyên phản biện các kết luận vội.",
        result: "Khắc phục triệt để 3 lỗi hổng nghiêm trọng trên production và thiết lập quy trình điều tra sự cố bằng AI chuẩn xác."
      }
    },
    {
      id: "octo_test_review_ai_code",
      keywords: ["review code", "ai sinh", "automated test pass", "idor", "concurrency", "ai đồng thuận sai", "octosoft"],
      category: "OctoSoft Test: Review Code AI Sinh & Chống 'AI Đồng Thuận Sai'",
      q_vi: "Developer dùng AI sinh toàn bộ feature, test pass hết. Bạn review thế nào và chống hiện tượng 'AI đồng thuận sai' ra sao?",
      star_vi: {
        situation: "PR do AI sinh nhìn rất sạch đẹp và automated test xanh 100%, nhưng tiềm ẩn nguy cơ lỗi logic sâu và bảo mật.",
        task: "Thẩm định chất lượng thực tế và thiết lập quy trình review độc lập để chống AI đồng thuận sai.",
        action: "1. Trọng tâm review: Kiểm tra Transaction Rollback khi lỗi, kiểm tra lỗ hổng IDOR (req.user.id), chặn số âm (qty < 0), kiểm tra Race condition và rò rỉ connection pool trong khối finally. 2. Chống 'AI đồng thuận sai': Cho AI thứ hai đóng vai trò Hacker / Red Team (prompt: 'Tìm ít nhất 3 lỗ hổng bảo mật và concurrency trong code sau'); giấu kín prompt gốc của dev; yêu cầu AI viết các test phá hoại (Fuzzing tests). Quyết định cuối cùng bắt buộc do Lead Developer đối chiếu thực tế.",
        result: "Ngăn chặn 100% các lỗ hổng bảo mật và lỗi bất đồng bộ tiềm ẩn lọt lên môi trường Production."
      }
    },
    {
      id: "octo_test_ai_sdlc_guardrails",
      keywords: ["ai-assisted", "sdlc", "guardrails", "human approval", "secret", "deploy", "octosoft"],
      category: "OctoSoft Test: Quy Trình AI-Assisted SDLC & Guardrails An Toàn",
      q_vi: "Thiết kế quy trình AI-assisted development từ Requirement đến Monitoring và các guardrails an toàn cốt tử?",
      star_vi: {
        situation: "Áp dụng AI vào toàn bộ vòng đời phát triển phần mềm (SDLC) nhưng cần đảm bảo an toàn dữ liệu và quyền kiểm soát của con người.",
        task: "Xây dựng ma trận phân quyền AI qua 7 giai đoạn và thiết lập ranh giới bảo mật nghiêm ngặt.",
        action: "Quy trình: Requirement (AI gợi ý edge cases -> PO duyệt) -> Planning (AI đề xuất OpenAPI Spec -> Lead duyệt) -> Coding (AI code theo scope thư mục) -> Testing (AI sinh test biên -> CI pass) -> Review (AI quét CVE/concurrency -> Senior duyệt) -> Deploy (CẤM AI, Human kích hoạt) -> Monitoring (AI phân tích alert log). Guardrails: AI chỉ làm trên feature branch qua PR; cấm đọc .env/secret qua .aiignore; sanitize che mờ PII trong log; NGHIÊM CẤM AI TỰ DEPLOY LÊN PRODUCTION.",
        result: "Tăng năng suất toàn team lên gấp 2-3 lần nhưng vẫn bảo đảm an toàn tuyệt đối về bảo mật và sự ổn định hệ thống."
      }
    },
    {
      id: "octo_test_crisis_prioritization",
      keywords: ["triage", "quá tải", "prod bug", "security", "refactor", "manager", "ưu tiên", "octosoft"],
      category: "OctoSoft Test: Xử Lý Khủng Hoảng Khi Quá Tải Nhiều Việc Cùng Lúc",
      q_vi: "Cùng lúc có bug prod, security hole, task sếp, PR review, agent refactor: Thứ tự ưu tiên và cách xử lý thế nào?",
      star_vi: {
        situation: "Đồng thời xuất hiện: Bug prod ảnh hưởng khách hàng, Agent báo lỗ hổng security, task sếp dí, feature đang làm 70%, Agent đang refactor lớn, CI fail.",
        task: "Phân loại mức độ ưu tiên theo ma trận Eisenhower và điều phối nguồn lực người/AI chính xác.",
        action: "1. Ưu tiên: Top 1 là Bug Prod (Rollback/Hotfix ngay) -> Top 2 là thẩm định Security (nếu Critical vá chung hotfix) -> Top 3 báo cáo Manager xin hoãn task gấp. 2. DỪNG NGAY: Dừng ngay Agent đang refactor module lớn để tránh sinh merge conflict khổng lồ lúc hotfix; Stash feature 70%. 3. Giao việc: Cho AI đọc log bug prod và log build CI fail; nhờ đồng đội khác review hộ PR. 4. Cập nhật Manager theo format 3T: Tình trạng sự cố -> Trở ngại cần hoãn task -> Thời gian dự kiến hoàn thành.",
        result: "Xử lý êm đẹp khủng hoảng production trong thời gian ngắn nhất mà không làm xáo trộn tiến độ chung của dự án."
      }
    },
    {
      id: "tami_architecture",
      keywords: ["kiến trúc", "chứng khoán", "stock", "tami", "hệ thống", "3-tier"],
      category: "Kiến Trúc Hệ Thống (TAMI - Stock Analysis)",
      q_vi: "Em hãy mô tả kiến trúc tổng thể hệ thống phân tích chứng khoán mà em từng xây dựng tại TAMI?",
      star_vi: {
        situation: "Hệ thống phân tích chứng khoán tại TAMI cần thu thập, lưu trữ và trực quan hóa dữ liệu chỉ số tài chính, biểu đồ nến kỹ thuật từ các nguồn dữ liệu chứng khoán Việt Nam.",
        task: "Thiết kế kiến trúc phân tầng rõ ràng (3-tier architecture), phân tách mạch lạc giữa tầng hiển thị, tầng xử lý nghiệp vụ/API và tầng lưu trữ dữ liệu.",
        action: "Phân chia hệ thống làm 3 tầng độc lập: (1) Frontend: Next.js (App Router) dựng giao diện bảng điện, biểu đồ nến, bộ lọc cổ phiếu; (2) Backend/API: Node.js/Next.js Route Handlers đóng vai trò API Gateway, xử lý authentication, validate input và gọi service trích xuất dữ liệu từ thư viện Vnstock3; (3) Database: Supabase PostgreSQL lưu trữ thông tin người dùng, watchlist cá nhân, lịch sử giá và các chỉ số tài chính đã tính toán sẵn.",
        result: "Kiến trúc module hóa rõ ràng giúp hệ thống dễ bảo trì, thời gian phản hồi API trung bình dưới 300ms và dễ dàng mở rộng thêm các chỉ số phân tích mới mà không ảnh hưởng code cũ."
      }
    },
    {
      id: "tami_database_indexing",
      keywords: ["supabase", "postgresql", "index", "b-tree", "composite index", "csdl", "bảng giá"],
      category: "Database & Indexing (PostgreSQL / Supabase)",
      q_vi: "Tại sao em chọn Supabase/PostgreSQL? Em thiết kế bảng thế nào và có đánh index để tối ưu truy vấn không?",
      star_vi: {
        situation: "Dữ liệu tài chính/chứng khoán đòi hỏi tính toàn vẹn (ACID), có quan hệ chặt chẽ giữa mã cổ phiếu, bảng giá theo ngày và danh mục theo dõi (watchlist) của người dùng.",
        task: "Thiết kế cấu trúc CSDL quan hệ chuẩn hóa và tối ưu hiệu năng truy vấn khi lượng bản ghi lịch sử giá tăng cao.",
        action: "Chọn PostgreSQL vì là CSDL quan hệ mạnh mẽ, hỗ trợ transaction chuẩn ACID; chọn Supabase vì cung cấp PostgreSQL hosted sẵn, tích hợp Auth, RLS (Row Level Security) và Dashboard trực quan. Thiết kế các bảng chính: users (id, email, role), watchlists (user_id, symbol, notes), stock_prices (symbol, date, open, high, low, close, volume). Đánh B-Tree Composite Index trên cặp (symbol, date DESC) trong bảng giá để tăng tốc tối đa các truy vấn lấy lịch sử nến gần nhất theo từng mã cổ phiếu.",
        result: "Tốc độ truy vấn lịch sử giá giảm từ hàng trăm ms xuống dưới 20ms kể cả khi bảng có hàng chục nghìn bản ghi nến giá, bảo đảm biểu đồ hiển thị tức thì."
      }
    },
    {
      id: "tami_vnstock_perf",
      keywords: ["vnstock", "vnstock3", "caching", "pagination", "chậm", "dữ liệu lớn", "hiệu năng"],
      category: "Data Flow, Caching & Performance (Vnstock3)",
      q_vi: "Hệ thống lấy dữ liệu qua Vnstock3 như thế nào? Khi dữ liệu lớn hoặc API bị chậm thì em xử lý ra sao?",
      star_vi: {
        situation: "Dữ liệu thị trường lấy qua Vnstock3 có thể bị nghẽn mạng, rate limit hoặc trả về độ trễ cao trong giờ giao dịch cao điểm.",
        task: "Tối ưu luồng truy xuất dữ liệu, hạn chế gọi trực tiếp lặp lại và tránh giật lag giao diện người dùng.",
        action: "Áp dụng 3 giải pháp đồng bộ: (1) Caching: Không gọi trực tiếp Vnstock3 mỗi khi người dùng tải trang; dữ liệu nến ngày chỉ cập nhật sau phiên, nên áp dụng In-Memory Cache (hoặc lưu bảng tạm PostgreSQL) với TTL 5-15 phút; (2) Phân trang / Giới hạn phạm vi: Với dữ liệu lịch sử nến nhiều năm, chỉ tải theo khoảng thời gian (from_date -> to_date), mặc định chỉ nạp 30-90 nến gần nhất; (3) Trải nghiệm tải: Ở Frontend hiển thị skeleton loader và áp dụng AbortController để hủy các request cũ khi người dùng bấm chuyển nhanh giữa các mã cổ phiếu.",
        result: "Giảm hơn 70% số lượng request gọi ra bên ngoài, loại bỏ hoàn toàn hiện tượng treo API và mang lại trải nghiệm mượt mà cho người dùng."
      }
    },
    {
      id: "tami_auth_security",
      keywords: ["nextauth", "google", "oauth", "bảo mật", "api security", "rls", "jwt", "validate"],
      category: "Authentication & API Security (NextAuth & Google OAuth)",
      q_vi: "Đăng nhập Google qua NextAuth hoạt động thế nào? Em bảo mật các API endpoints ra sao (phân quyền, validate input)?",
      star_vi: {
        situation: "Cần cung cấp trải nghiệm đăng nhập nhanh 1-click qua tài khoản Google nhưng vẫn phải kiểm soát chặt chẽ phiên đăng nhập và bảo vệ dữ liệu cá nhân của người dùng.",
        task: "Tích hợp OAuth 2.0 chuẩn mực và thiết lập hàng rào bảo mật nhiều lớp cho toàn bộ các API endpoints nhạy cảm.",
        action: "Luồng NextAuth: User click đăng nhập Google -> Chuyển hướng sang Google cấp quyền -> Google trả authorization code về NextAuth callback -> NextAuth đổi lấy access token/user profile từ Google và tạo session token (JWT mã hóa lưu trong httpOnly Cookie). Bảo mật API: Tạo middleware kiểm tra session/token ở mọi route /api/user/* hoặc /api/watchlist/*, từ chối ngay HTTP 401 nếu chưa đăng nhập; Validate chặt chẽ dữ liệu đầu vào (loại bỏ ký tự lạ, kiểm tra format mã cổ phiếu) để phòng ngừa SQL/XSS Injection; Bật Row Level Security (RLS) trên Supabase để user chỉ truy vấn được watchlist của chính mình.",
        result: "Hệ thống xác thực mượt mà không cần quản lý mật khẩu thủ công, API được bảo vệ an toàn 100% trước truy cập trái phép."
      }
    },
    {
      id: "tami_hardest_bug",
      keywords: ["bug khó nhất", "sự cố", "upsert", "duplicate", "trùng lặp", "nến giá", "debug"],
      category: "Problem Solving & Hardest Bug (Duplicate Key & UPSERT)",
      q_vi: "Bug kỹ thuật khó nhất mà em từng gặp trong dự án chứng khoán là gì và em đã debug, giải quyết nó như thế nào?",
      star_vi: {
        situation: "Khi đồng bộ dữ liệu nến giá lịch sử từ nguồn bên ngoài, xảy ra tình trạng bản ghi nến giá của cùng một ngày bị lặp đôi (duplicate records) hoặc bị lỗi khóa trùng lặp (duplicate key constraint violation) làm gián đoạn cả tiến trình đồng bộ.",
        task: "Tìm ra nguyên nhân gốc (root cause) và xử lý dứt điểm để quá trình sync dữ liệu diễn ra idempotent (chạy bao nhiêu lần kết quả vẫn chuẩn xác).",
        action: "Em debug bằng cách đặt log kiểm tra luồng sync: phát hiện nguồn dữ liệu trả về thời gian có chênh lệch múi giờ (UTC vs GMT+7) dẫn đến cùng 1 ngày giao dịch nhưng tạo ra 2 timestamp khác nhau khi lưu. Khắc phục: (1) Chuẩn hóa toàn bộ ngày tháng về định dạng chuẩn YYYY-MM-DD trước khi lưu; (2) Tạo Unique Constraint trên cặp (symbol, trade_date); (3) Thay thế lệnh INSERT thông thường bằng cú pháp UPSERT (INSERT ... ON CONFLICT (symbol, trade_date) DO UPDATE) trên PostgreSQL/Supabase.",
        result: "Quá trình đồng bộ dữ liệu chạy trơn tru 100%, không còn bị crash tiến trình hay sai lệch số liệu biểu đồ kỹ thuật."
      }
    },
    {
      id: "level1_null_vs_undefined",
      keywords: ["null", "undefined", "javascript", "kiểu dữ liệu", "js core"],
      category: "Cấp độ 1: DỄ (JavaScript Core)",
      q_vi: "Phân biệt null và undefined trong JavaScript? Khi làm việc thực tế với API và Database, trường hợp nào trả về null và khi nào là undefined?",
      star_vi: {
        situation: "Khi xử lý dữ liệu trả về từ API backend hoặc đọc thuộc tính từ các object lồng nhau (nested objects), rất dễ gặp lỗi crash: 'TypeError: Cannot read properties of undefined'.",
        task: "Hiểu rõ bản chất kiểu dữ liệu để validate và gán giá trị mặc định chuẩn xác, an toàn.",
        action: "• <b>undefined:</b> Biến đã khai báo nhưng chưa gán giá trị, hoặc thuộc tính không hề tồn tại trong object, hàm không return giá trị.<br>• <b>null:</b> Giá trị gán có chủ đích để chỉ 'rỗng' / 'không có dữ liệu' (ví dụ PostgreSQL trả về trường NULL khi cột không có dữ liệu).<br>• <b>Áp dụng thực tế:</b> Dùng Optional Chaining (<code>obj?.user?.name</code>) và Nullish Coalescing (<code>name ?? 'Khách'</code>) để fallback an toàn, không bị nhầm giá trị 0 hoặc chuỗi rỗng thành false như toán tử ||.",
        result: "Triệt tiêu hoàn toàn lỗi crash runtime ở Frontend và đồng bộ nhất quán kiểu dữ liệu với Backend."
      }
    },
    {
      id: "level2_react_useeffect_rerender",
      keywords: ["useeffect", "dependency", "re-render", "infinite loop", "react", "lifecycle"],
      category: "Cấp độ 2: TRUNG BÌNH (React & Lifecycle)",
      q_vi: "useEffect trong React chạy vào thời điểm nào? Cơ chế Dependency Array hoạt động ra sao và làm thế nào để tránh bẫy vòng lặp vô tận (infinite re-render)?",
      star_vi: {
        situation: "Khi component cần fetch dữ liệu từ API hoặc lắng nghe sự kiện (event listener), nếu quản lý effect không khéo sẽ gây re-render liên tục làm đơ trình duyệt.",
        task: "Kiểm soát chính xác thời điểm kích hoạt side-effect và dọn dẹp (cleanup) tài nguyên đúng lúc.",
        action: "• <b>Thời điểm chạy:</b> Chạy sau khi component đã render xong ra màn hình (sau commit phase).<br>• <b>Dependency Array:</b> <code>[]</code> rỗng chỉ chạy 1 lần khi mount; <code>[id]</code> chạy lại khi id thay đổi giá trị (so sánh Object.is); không truyền mảng sẽ chạy sau mỗi lần re-render.<br>• <b>Cách tránh bẫy vô tận:</b> Không cập nhật chính state đang nằm trong effect nếu không có điều kiện dừng; dùng functional update <code>setState(prev => prev + 1)</code>; luôn khai báo hàm cleanup <code>return () => { abortController.abort() }</code> khi unmount.",
        result: "Tránh 100% rò rỉ bộ nhớ (memory leak), tối ưu số lần gọi API và giữ giao diện mượt mà 60 FPS."
      }
    },
    {
      id: "level3_rest_put_vs_patch",
      keywords: ["put", "patch", "restful", "api", "idempotent", "update", "http method"],
      category: "Cấp độ 3: TRUNG BÌNH KHÁ (RESTful API Design)",
      q_vi: "Phân biệt phương thức PUT và PATCH trong thiết kế RESTful API? Khi cập nhật thông tin người dùng hoặc danh mục cổ phiếu, em ưu tiên dùng cái nào?",
      star_vi: {
        situation: "Hệ thống cần cung cấp API cập nhật thông tin người dùng, cài đặt tài khoản hoặc danh mục theo dõi cổ phiếu.",
        task: "Thiết kế API đúng chuẩn RFC HTTP, tối ưu băng thông mạng và tránh ghi đè mất dữ liệu cũ của người dùng.",
        action: "• <b>PUT:</b> Thay thế toàn bộ tài nguyên (Full Replacement) — Client bắt buộc phải gửi lên toàn bộ các trường, trường nào không gửi sẽ bị ghi đè thành null/mặc định (mang tính Idempotent).<br>• <b>PATCH:</b> Cập nhật một phần (Partial Update) — Client chỉ gửi lên đúng các trường cần sửa (ví dụ: chỉ gửi <code>{ notes: 'Ưu tiên mua' }</code>).<br>• <b>Lựa chọn thực tế:</b> Em ưu tiên sử dụng PATCH cho các chức năng chỉnh sửa form thực tế để tiết kiệm dung lượng payload mạng và an toàn, tránh vô tình làm mất các trường thông tin khác.",
        result: "API thiết kế chuyên nghiệp, tiết kiệm băng thông và giúp Frontend tích hợp cực kỳ nhẹ nhàng."
      }
    },
    {
      id: "level4_db_btree_index_tradeoff",
      keywords: ["index", "b-tree", "trade-off", "đánh đổi", "hiệu năng", "database", "sql"],
      category: "Cấp độ 4: KHÓ (Database & Index Trade-off)",
      q_vi: "Chỉ mục (Index) trong CSDL hoạt động theo cơ chế nào? Khi nào KHÔNG NÊN đánh Index vì sẽ phản tác dụng làm giảm hiệu năng hệ thống?",
      star_vi: {
        situation: "Bảng dữ liệu tăng trưởng nhanh, câu lệnh SELECT có điều kiện WHERE, ORDER BY bị chậm vì DB phải quét toàn bộ bảng (Full Table Scan).",
        task: "Hiểu sâu cấu trúc dữ liệu Index để tối ưu truy vấn mà không làm tổn hại đến tốc độ ghi và dung lượng đĩa.",
        action: "• <b>Cơ chế:</b> Mặc định dùng cấu trúc cây B-Tree tự cân bằng, lưu trữ các khóa đã sắp xếp kèm con trỏ tới dòng dữ liệu, giúp tìm kiếm đạt độ phức tạp O(log N) thay vì O(N).<br>• <b>Khi KHÔNG NÊN đánh Index:</b><br>&nbsp;&nbsp;1. Bảng có dung lượng quá nhỏ (vài chục đến vài trăm dòng) vì scan toàn bảng còn nhanh hơn duyệt cây index.<br>&nbsp;&nbsp;2. Cột có độ phân tán thấp (Low Cardinality) như gender (Nam/Nữ) hay status boolean (true/false).<br>&nbsp;&nbsp;3. Bảng có tần suất GHI liên tục (High Write/Insert/Update) như bảng log hoặc sensor — vì mỗi lệnh INSERT, DB phải cập nhật lại cấu trúc cây index trên đĩa, làm chậm tiến trình ghi và tốn RAM/Disk.",
        result: "Cân bằng tối ưu giữa tốc độ Đọc (Read) và tốc độ Ghi (Write), giữ hệ thống vận hành ổn định dưới tải cao."
      }
    },
    {
      id: "level5_sql_injection_xss_defense",
      keywords: ["sql injection", "xss", "security", "bảo mật", "httponly", "csrf", "sanitize"],
      category: "Cấp độ 5: RẤT KHÓ (System Security & Defense in Depth)",
      q_vi: "Làm thế nào để phòng chống tấn công SQL Injection và Cross-Site Scripting (XSS) trong một hệ thống Web Full Stack? Em đã áp dụng cụ thể ở những tầng nào?",
      star_vi: {
        situation: "Hệ thống web công khai luôn đứng trước nguy cơ bị tin tặc khai thác dữ liệu nhạy cảm qua các ô nhập liệu hoặc chèn mã script độc hại vào trình duyệt người dùng.",
        task: "Thiết lập mô hình phòng thủ theo chiều sâu (Defense in Depth) trên cả tầng Frontend lẫn Backend.",
        action: "• <b>Chống SQL Injection:</b> Tuyệt đối không cộng chuỗi SQL trực tiếp. Sử dụng Parameterized Queries (Truy vấn tham số hóa) hoặc Prepared Statements thông qua Supabase/PostgreSQL Client / ORM để DB phân tách rõ ranh giới giữa Lệnh thực thi và Dữ liệu; kết hợp validate kiểu dữ liệu đầu vào (Zod/Joi).<br>• <b>Chống XSS:</b><br>&nbsp;&nbsp;1. Ở Client: Tránh dùng dangerouslySetInnerHTML; các framework như React/Next.js mặc định escape dữ liệu trước khi render.<br>&nbsp;&nbsp;2. Ở Auth: Lưu trữ Token (Refresh Token / Session) trong Cookie có cờ <code>httpOnly, Secure, SameSite=Strict</code> — mã độc JS không thể truy cập document.cookie để đánh cắp phiên.<br>&nbsp;&nbsp;3. Ở Server: Cấu hình Content Security Policy (CSP) Headers để chặn nạp script từ domain lạ.",
        result: "Bảo vệ hệ thống an toàn 100% trước hai lỗ hổng bảo mật phổ biến và nguy hiểm nhất trong danh sách OWASP Top 10."
      }
    },
    {
      id: "fullstack_rest_vs_graphql",
      keywords: ["rest", "graphql", "api", "endpoint", "error handling", "status code"],
      category: "Full Stack: REST API vs GraphQL & Error Handling",
      q_vi: "REST API khác gì với GraphQL? Em quy ước đặt tên endpoint và chuẩn hóa xử lý lỗi (error handling) như thế nào?",
      star_vi: {
        situation: "Hệ thống cần cung cấp dữ liệu ổn định cho cả Web và Mobile client với cấu trúc dữ liệu đa dạng.",
        task: "Phân tích ưu nhược điểm giữa REST và GraphQL; xây dựng chuẩn mực thiết kế REST API dễ tích hợp và bảo trì.",
        action: "• <b>Khác biệt:</b> REST dùng nhiều endpoint tài nguyên riêng biệt (<code>/users</code>, <code>/watchlist</code>), dễ gặp Over-fetching (dữ liệu thừa) hoặc Under-fetching (phải gọi nhiều API); GraphQL chỉ dùng 1 endpoint (<code>/graphql</code>) cho phép client query đúng trường cần. Em ưu tiên REST vì đơn giản, cache HTTP tốt và bảo mật dễ dàng hơn.<br>• <b>Đặt tên Endpoint:</b> Dùng danh từ số nhiều, phân cấp rõ ràng (vd: <code>GET /api/v1/users/:id/watchlists</code>); dùng đúng HTTP verbs (GET, POST, PUT, PATCH, DELETE).<br>• <b>Xử lý lỗi chuẩn:</b> Luôn trả về đúng HTTP Status Code (400, 401, 403, 404, 500) kèm format JSON đồng bộ: <code>{ success: false, error: { code: 'INVALID_SYMBOL', message: 'Mã cổ phiếu không tồn tại' } }</code>.",
        result: "Frontend dễ dàng bắt lỗi và hiển thị thông báo thân thiện; team dễ mở rộng API theo thời gian."
      }
    },
    {
      id: "fullstack_sql_vs_nosql_mongodb",
      keywords: ["sql", "nosql", "mongodb", "postgresql", "mysql", "database", "acid"],
      category: "Full Stack: SQL vs NoSQL & Học Nhanh MongoDB",
      q_vi: "Khi nào nên dùng SQL và khi nào dùng NoSQL? Trong JD có nhắc tới MongoDB, nếu em chưa dùng nhiều thì em sẽ học và làm chủ nó thế nào?",
      star_vi: {
        situation: "Dự án cần lưu trữ cả dữ liệu quan hệ chặt chẽ (tài khoản, giao dịch tài chính) lẫn dữ liệu schema linh hoạt (logs, metadata cấu hình workflow AI).",
        task: "Lựa chọn đúng loại CSDL và thể hiện sự trung thực, thái độ cầu tiến về kỹ năng công nghệ.",
        action: "• <b>Khi nào dùng:</b> Chọn SQL (PostgreSQL, MySQL) khi dữ liệu có cấu trúc cố định, quan hệ nhiều bảng, cần chuẩn ACID tuyệt đối. Chọn NoSQL (MongoDB) khi schema thay đổi liên tục, dữ liệu dạng document JSON lồng nhau, cần mở rộng theo chiều ngang (horizontal scaling).<br>• <b>Thành thật về MongoDB:</b> Em xin chia sẻ thật là các dự án trước em làm sâu với PostgreSQL và MySQL. Tuy nhiên, em đã nắm vững tư duy Document-based và cấu trúc JSON. Với nền tảng Khoa học Máy tính sẵn có, em tự tin có thể nắm vững cú pháp MongoDB, ODM Mongoose và các toán tử Aggregation chỉ sau 3-5 ngày tự học và thực hành.",
        result: "Nhà tuyển dụng đánh giá cao sự trung thực, thái độ cầu thị và tự tin vào tốc độ học công nghệ mới."
      }
    },
    {
      id: "fullstack_slow_query_optimization",
      keywords: ["slow query", "explain analyze", "tối ưu query", "index", "bottleneck"],
      category: "Full Stack: Tối Ưu Truy Vấn Chậm (Slow Query)",
      q_vi: "Khi phát hiện một câu truy vấn Database bị chậm (slow query), em sẽ điều tra và tối ưu theo các bước cụ thể nào?",
      star_vi: {
        situation: "Khi lượng dữ liệu bảng giá hoặc danh mục người dùng tăng cao, API phản hồi bị kéo dài từ 200ms lên 3-5 giây.",
        task: "Xác định chính xác nguyên nhân gốc (bottleneck) ở tầng CSDL và kéo thời gian thực thi xuống dưới 100ms.",
        action: "• <b>Bước 1 - Định vị:</b> Chạy <code>EXPLAIN ANALYZE</code> trên PostgreSQL/MySQL để đọc Execution Plan (kiểm tra xem DB có bị Seq Scan/Full Table Scan hay Nested Loop nặng không).<br>• <b>Bước 2 - Tối ưu câu lệnh:</b> Bỏ <code>SELECT *</code> (chỉ lấy đúng các cột cần); tránh bọc hàm xử lý lên cột trong mệnh đề WHERE (vd: <code>WHERE DATE(created_at)</code> làm vô hiệu hóa index); giải quyết N+1 query bằng JOIN hoặc batching.<br>• <b>Bước 3 - Đánh Index:</b> Thêm Composite Index (B-Tree) trên các cột kết hợp tìm kiếm và sắp xếp (vd: <code>symbol + date DESC</code>).<br>• <b>Bước 4 - Phân trang & Cache:</b> Dùng Cursor-based Pagination thay cho OFFSET lớn; cache kết quả ít thay đổi trên bộ nhớ RAM.",
        result: "Thời gian thực thi query giảm trên 90%, tải CPU của server CSDL giảm rõ rệt."
      }
    },
    {
      id: "fullstack_git_workflow_conflict",
      keywords: ["git", "rebase", "merge", "conflict", "teamwork", "pull request"],
      category: "Full Stack: Git Workflow, Rebase vs Merge & Conflict",
      q_vi: "Phân biệt Git Rebase vs Git Merge? Quy trình làm việc nhóm bằng Git của em ra sao và em xử lý xung đột (conflict) thế nào?",
      star_vi: {
        situation: "Team gồm nhiều lập trình viên cùng phát triển các tính năng song song, thường xuyên gặp xung đột code khi hợp nhất nhánh.",
        task: "Giữ lịch sử commit gọn gàng, minh bạch và giải quyết conflict an toàn, không làm mất code của đồng đội.",
        action: "• <b>Rebase vs Merge:</b> Merge tạo một commit gộp (Merge Commit) lưu giữ mốc thời gian thực; Rebase tua lại từng commit đặt lên ngọn nhánh đích, giúp lịch sử thẳng tắp (Lưu ý: Không bao giờ rebase trên nhánh chung <code>main/develop</code>).<br>• <b>Quy trình nhóm:</b> Tạo nhánh từ <code>develop</code> theo chuẩn <code>feat/ten-feature</code>; commit theo Conventional Commits; trước khi tạo PR, pull code mới nhất từ <code>develop</code> và rebase ở local; chạy test pass mới mở PR.<br>• <b>Xử lý conflict:</b> Dùng VS Code so sánh Current vs Incoming Change, chủ động trao đổi trực tiếp với người viết đoạn code đó để thống nhất logic đúng trước khi Accept và commit.",
        result: "Không bao giờ xảy ra lỗi ghi đè mất code của team, lịch sử Git sạch đẹp dễ truy vết bug."
      }
    },
    {
      id: "fullstack_web_security_basics",
      keywords: ["bảo mật", "security", "sqli", "xss", "csrf", "jwt", "bcrypt", "password"],
      category: "Full Stack: Bảo Mật Cơ Bản (SQLi, XSS, CSRF, Mật Khẩu, JWT)",
      q_vi: "Em hãy nêu các nguyên tắc bảo mật cơ bản trong một ứng dụng Web (SQLi, XSS, CSRF, lưu mật khẩu và JWT)?",
      star_vi: {
        situation: "Ứng dụng web cần bảo vệ dữ liệu người dùng và hệ thống trước các kỹ thuật tấn công phổ biến trong OWASP Top 10.",
        task: "Thiết lập cơ chế phòng vệ nhiều lớp (Defense in Depth) trên cả Frontend lẫn Backend.",
        action: "• <b>SQL Injection:</b> Tuyệt đối không cộng chuỗi SQL; dùng Parameterized Queries / Prepared Statements thông qua Supabase/ORM.<br>• <b>XSS:</b> Không dùng <code>dangerouslySetInnerHTML</code>; sanitize input; lưu token trong <code>httpOnly Cookie</code> để JS độc hại không đọc được.<br>• <b>CSRF:</b> Cấu hình Cookie với <code>SameSite=Strict</code> hoặc <code>SameSite=Lax</code>, kết hợp Anti-CSRF Token.<br>• <b>Lưu mật khẩu:</b> Băm bằng thuật toán một chiều mạnh (Bcrypt hoặc Argon2) kèm Salt ngẫu nhiên, không bao giờ lưu plaintext.<br>• <b>JWT:</b> Sử dụng Dual Token: Access Token thời hạn ngắn (15-30 phút), Refresh Token thời hạn dài lưu trong httpOnly Cookie an toàn.",
        result: "Hệ thống được bảo vệ vững chắc trước các rủi ro bảo mật phổ biến nhất trên môi trường Internet."
      }
    },
    {
      id: "ai_telegram_gemini_project",
      keywords: ["telegram", "gemini", "prompt", "token", "chi phí", "hallucination", "bot"],
      category: "AI Agent: Dự Án Telegram Bot Tích Hợp Gemini API",
      q_vi: "Kể chi tiết về dự án Bot Telegram dùng Gemini? Prompt được thiết kế thế nào? Xử lý khi AI trả sai format/hallucination ra sao và em quản lý chi phí/token thế nào?",
      star_vi: {
        situation: "Cần công cụ tự động hóa nhận JD tuyển dụng, trích xuất yêu cầu công nghệ và tinh chỉnh nội dung hồ sơ theo thời gian thực qua tin nhắn Telegram.",
        task: "Xây dựng hệ thống Serverless trên Cloudflare Workers kết nối Telegram Bot Webhook với Gemini LLM API, phản hồi nhanh, chính xác và định dạng chuẩn.",
        action: "• <b>Thiết kế Prompt:</b> Áp dụng kỹ thuật Role Prompting + Few-Shot: Khai báo rõ vai trò chuyên gia tuyển dụng, cung cấp JSON schema mẫu và ra lệnh nghiêm ngặt: 'Chỉ trả về JSON hợp lệ, không giải thích'.<br>• <b>Xử lý sai format / Hallucination:</b> Bật cờ <code>response_mime_type: 'application/json'</code> của Gemini API; ở Backend dùng thư viện Zod parse và validate cấu trúc; nếu JSON lỗi, có hàm tự động retry 1 lần kèm prompt nhắc sửa lỗi cú pháp.<br>• <b>Quản lý chi phí & Token:</b> Sử dụng model Gemini 1.5 Flash (chi phí cực thấp, tốc độ cao); tiền xử lý cắt bỏ các đoạn văn bản thừa của JD; cache kết quả phân tích cho các JD trùng nhau.",
        result: "Bot phản hồi mượt mà trong 2-3 giây, tỷ lệ trả về JSON chuẩn đạt 99%, vận hành 24/7 với chi phí gần như 0 đồng trên Cloudflare Workers."
      }
    },
    {
      id: "ai_agent_vs_chatbot_workflow",
      keywords: ["ai agent", "chatbot", "workflow", "automation", "tools", "flowagentica"],
      category: "AI Agent: AI Agent Khác Gì Chatbot & Cấu Trúc Workflow",
      q_vi: "AI Agent khác gì một Chatbot thông thường? Một hệ thống Workflow tự động hóa (Automation Workflow) cần những thành phần cốt lõi nào?",
      star_vi: {
        situation: "Xu hướng AI đang chuyển dịch mạnh mẽ từ tương tác hỏi-đáp văn bản sang tự động hóa giải quyết bài toán phức tạp theo quy trình (như sản phẩm FlowAgentica của OctoSoft).",
        task: "Hiểu sâu kiến trúc AI Agent và các khối thành phần xây dựng nền tảng Workflow Automation.",
        action: "• <b>Khác biệt:</b> Chatbot chỉ phản hồi thụ động Text-in &rarr; Text-out trong 1 phiên hội thoại. AI Agent có tính chủ động (Autonomy): có Mục tiêu (Goal), Bộ nhớ (Memory), Khả năng lập kế hoạch (Planning loop ReAct: Reason + Act) và quan trọng nhất là có Công cụ (Tools / Function Calling) để gọi API, truy vấn DB và tương tác thế giới thực.<br>• <b>Thành phần Workflow tự động hóa:</b><br>&nbsp;&nbsp;1. <b>Trigger:</b> Điểm kích hoạt (Webhook, Timer/Cron, Event tin nhắn).<br>&nbsp;&nbsp;2. <b>Engine / Orchestrator:</b> Điều phối luồng thực thi dạng Node-based Graph.<br>&nbsp;&nbsp;3. <b>LLM Decision Node:</b> Phân tích ngữ cảnh và quyết định rẽ nhánh logic.<br>&nbsp;&nbsp;4. <b>Action / Connectors:</b> Các cổng tích hợp gọi API bên thứ ba (Database, Slack, Sheets, Email).<br>&nbsp;&nbsp;5. <b>State Management:</b> Lưu trạng thái checkpoint để retry khi mạng gián đoạn.",
        result: "Chứng minh tư duy kiến trúc hệ thống hiện đại, trùng khớp 100% với định hướng sản phẩm của OctoSoft."
      }
    },
    {
      id: "behavior_unclear_requirements",
      keywords: ["yêu cầu mơ hồ", "sếp", "thái độ", "làm rõ", "prioritize", "user story"],
      category: "Thái Độ & Kỹ Năng Mềm: Xử Lý Yêu Cầu Mơ Hồ",
      q_vi: "Nếu Sếp hoặc Tech Lead giao một yêu cầu nghiệp vụ mơ hồ, em sẽ xử lý như thế nào trước khi bắt tay vào code?",
      star_vi: {
        situation: "Trong môi trường phát triển sản phẩm nhanh, nhiều bài toán mới chỉ dừng ở ý tưởng sơ khởi hoặc mô tả ngắn gọn.",
        task: "Làm rõ yêu cầu để tránh rủi ro hiểu sai bài toán, code xong phải đập đi xây lại làm mất thời gian của team.",
        action: "• <b>Bước 1:</b> Tuyệt đối không tự đoán mò và không vội vàng code ngay.<br>• <b>Bước 2:</b> Phác thảo ra các câu hỏi cốt lõi: Mục tiêu kinh doanh là gì? Người dùng cuối là ai? Có những trường hợp biên (edge cases) nào?<br>• <b>Bước 3:</b> Chủ động hẹn 10-15 phút với Sếp/Lead, trình bày tóm tắt cách em hiểu bài toán kèm sơ đồ User Flow hoặc bản vẽ giao diện nháp để xác nhận.<br>• <b>Bước 4:</b> Chia nhỏ thành các mốc MVP làm trước, tính năng phụ làm sau và liên tục demo sớm để nhận phản hồi.",
        result: "Tính năng bàn giao đúng 100% mong đợi, tiết kiệm nguồn lực và thể hiện tính chủ động, cẩn trọng cao."
      }
    },
    {
      id: "behavior_prioritizing_tasks",
      keywords: ["nhiều task gấp", "ưu tiên", "quản lý thời gian", "eisenhower", "stress"],
      category: "Thái Độ & Kỹ Năng Mềm: Ưu Tiên Công Việc Khi Nhiều Task Gấp",
      q_vi: "Khi có nhiều yêu cầu công việc cùng được báo là 'rất gấp' trong cùng một ngày, em sắp xếp thứ tự ưu tiên như thế nào?",
      star_vi: {
        situation: "Môi trường công việc thực tế vừa có deadline sprint, vừa có sự cố phát sinh từ người dùng hoặc yêu cầu khẩn cấp từ các phòng ban.",
        task: "Sắp xếp thứ tự ưu tiên khoa học, giữ vững tâm lý và giải quyết triệt để vấn đề quan trọng nhất.",
        action: "• <b>Phân loại mức độ ảnh hưởng (Impact):</b><br>&nbsp;&nbsp;1. <b>Mức Khẩn cấp & Nghiêm trọng (P0):</b> Bug làm gián đoạn hệ thống, ảnh hưởng thanh toán hoặc dữ liệu người dùng &rarr; Tập trung xử lý ngay lập tức.<br>&nbsp;&nbsp;2. <b>Mức Blocker (P1):</b> Task đang làm nghẽn tiến độ của đồng đội khác trong team &rarr; Giải quyết tiếp theo.<br>&nbsp;&nbsp;3. <b>Mức Kế hoạch (P2):</b> Các tính năng theo roadmap sprint thông thường.<br>• <b>Chủ động trao đổi:</b> Nếu khối lượng vượt quá thời gian làm việc trong ngày, chủ động báo cáo Lead/PM kèm ước lượng thời gian để thống nhất hoãn việc ít ảnh hưởng hơn.",
        result: "Các sự cố nghiêm trọng được dập tắt nhanh chóng, công việc vận hành trật tự, không bị quá tải hay stress."
      }
    },
    {
      id: "behavior_long_term_career",
      keywords: ["gắn bó lâu dài", "sản phẩm", "product", "outsource", "kế hoạch 2 năm"],
      category: "Định Hướng Nghề Nghiệp: Vì Sao Chọn Product & Kế Hoạch 1-2 Năm",
      q_vi: "Em có định hướng gắn bó lâu dài không? Vì sao em chọn mảng sản phẩm (Product) thay vì gia công (Outsource)? Kế hoạch 1-2 năm tới của em là gì?",
      star_vi: {
        situation: "Nhà tuyển dụng tìm kiếm nhân sự có sự cam kết, đam mê gắn bó và có lộ trình phát triển rõ ràng cùng tổ chức.",
        task: "Bày tỏ động lực cá nhân chân thành, phù hợp với văn hóa công ty công nghệ sản phẩm.",
        action: "• <b>Vì sao chọn Product:</b> Em thích cảm giác cùng team xây dựng và nuôi dưỡng một sản phẩm, lắng nghe phản hồi của người dùng thực tế và liên tục tối ưu. Làm Product rèn cho em tư duy sâu về kiến trúc hệ thống và giá trị kinh doanh dài hạn.<br>• <b>Kế hoạch 1-2 năm tới:</b><br>&nbsp;&nbsp;• <i>Năm thứ 1:</i> Nắm vững codebase, hoàn thành xuất sắc các tính năng Fullstack và đóng góp tích cực vào các module AI Workflow Automation.<br>&nbsp;&nbsp;• <i>Năm thứ 2:</i> Nâng cao năng lực System Design, tối ưu hạ tầng Cloud và sẵn sàng hướng dẫn (mentor) cho các bạn mới vào team.",
        result: "Gây ấn tượng sâu sắc về sự chín chắn, tính kỷ luật và cam kết đồng hành bền vững cùng công ty."
      }
    },
    {
      id: "practical_salary_and_start_date",
      keywords: ["mức lương", "lương mong muốn", "khi nào đi làm", "deal lương", "thực tế"],
      category: "Câu Hỏi Thực Tế: Mức Lương Mong Muốn & Thời Gian Đi Làm",
      q_vi: "Mức lương mong muốn của em là bao nhiêu và khi nào em có thể bắt đầu đi làm tại OctoSoft?",
      star_vi: {
        situation: "Câu hỏi ở phần cuối buổi phỏng vấn khi công ty đánh giá mức độ phù hợp và chế độ đãi ngộ.",
        task: "Đưa ra khoảng kỳ vọng hợp lý, khéo léo, thể hiện tinh thần cởi mở dựa trên năng lực và sẵn sàng gia nhập.",
        action: "• <b>Về mức lương:</b> 'Dạ dựa trên yêu cầu công việc Full Stack Developer và những đóng góp thực tế em có thể mang lại ngay (REST API, PostgreSQL, AI Automation), em kỳ vọng mức lương khởi điểm trong khoảng <b>10 - 13 triệu VNĐ/tháng</b>. Tuy nhiên, với em cơ hội được làm việc trong môi trường chuyên nghiệp về AI Workflow tại OctoSoft là ưu tiên hàng đầu, nên em hoàn toàn cởi mở và linh hoạt theo đánh giá bài test và chính sách của Quý công ty ạ.'<br>• <b>Về thời gian nhận việc:</b> 'Dạ em hiện đã hoàn thành xong việc học và có thể sắp xếp bắt đầu đi làm ngay lập tức (hoặc sau 1 tuần) ạ.'",
        result: "Tạo thiện cảm lớn: tự tin về giá trị bản thân nhưng rất cầu thị, linh hoạt và sẵn sàng cống hiến."
      }
    },
    {
      id: "ecommerce_cart_order",
      keywords: ["ecommerce", "e-commerce", "thương mại điện tử", "giỏ hàng", "đơn hàng", "checkout", "cart"],
      category: "E-Commerce & System Architecture",
      q_vi: "Trong dự án Nền tảng Thương mại Điện tử (E-Commerce Platform), bạn thiết kế luồng Giỏ hàng, Đặt hàng (Checkout) và xử lý đồng bộ giữa Frontend và Backend như thế nào?",
      star_vi: {
        situation: "Hệ thống bán hàng online cần phục vụ cả khách vãng lai và khách đã đăng nhập, bảo đảm không mất giỏ hàng và tránh đặt hàng khi hết tồn kho.",
        task: "Xây dựng luồng giỏ hàng mượt mà ở Client và đồng bộ an toàn ở Server Database, xử lý checkout atomic và bảo vệ tính toàn vẹn dữ liệu.",
        action: "Khách chưa đăng nhập lưu giỏ hàng ở LocalStorage để thêm sản phẩm tức thì; khi đăng nhập tự động gọi API merge giỏ hàng vào MongoDB/MySQL. Khi bấm Thanh toán, Backend kiểm tra tồn kho (inventory check), mở Database Transaction để trừ số lượng sản phẩm và tạo đơn hàng (Order Lifecycle) trước khi phản hồi.",
        result: "Trải nghiệm mua sắm mượt mà, không gặp tình trạng âm kho (race condition), thời gian xử lý API đặt hàng dưới 200ms."
      }
    },
    {
      id: "sql_vs_nosql_ecommerce",
      keywords: ["postgresql", "mongodb", "mysql", "nosql", "sql", "csdl", "database design"],
      category: "Database & System Architecture",
      q_vi: "Khi nào bạn chọn PostgreSQL (SQL) và khi nào chọn MongoDB (NoSQL) trong một hệ thống E-commerce đa dạng mặt hàng?",
      star_vi: {
        situation: "Hệ thống E-commerce xử lý song song cả giao dịch tài chính nhạy cảm lẫn danh mục hàng hóa đa dạng với vô số biến thể sản phẩm khác nhau.",
        task: "Lựa chọn và phối hợp giữa CSDL quan hệ (SQL) và CSDL phi quan hệ (NoSQL) để vừa đảm bảo an toàn giao dịch vừa linh hoạt mở rộng nghiệp vụ.",
        action: "Sử dụng PostgreSQL/MySQL cho User, Đơn hàng (Orders) và Giao dịch thanh toán đòi hỏi tính toàn vẹn dữ liệu và chuẩn ACID tuyệt đối. Sử dụng MongoDB cho Danh mục sản phẩm (Product Catalog) vì mỗi mặt hàng có thuộc tính riêng biệt (quần áo có size/màu, điện máy có chip/ram); schema JSON linh hoạt giúp truy vấn nhanh và thêm thuộc tính mà không cần chạy migration nặng nề.",
        result: "Đảm bảo 100% tính chính xác của hóa đơn và doanh thu, đồng thời tốc độ truy xuất trang sản phẩm luôn duy trì dưới 200ms."
      }
    },
    {
      id: "nextjs_ssr_seo_ecommerce",
      keywords: ["next.js", "nextjs", "ssr", "isr", "seo", "render", "vite", "react"],
      category: "Frontend & SEO Architecture",
      q_vi: "Next.js khác gì React thuần (SPA/Vite)? Tại sao các nền tảng E-commerce lại bắt buộc phải ưu tiên sử dụng SSR và ISR của Next.js?",
      star_vi: {
        situation: "Website thương mại điện tử cần hiển thị sản phẩm ngay lập tức và phải được Google Bot cào dữ liệu nhanh chóng để đạt thứ hạng SEO cao.",
        task: "Khắc phục nhược điểm của React SPA truyền thống: ban đầu chỉ có file HTML trắng, phải tải JS rồi mới render, gây tải chậm lần đầu và rất kém SEO.",
        action: "Áp dụng Next.js với SSR (Server-Side Rendering) để sinh sẵn mã HTML chứa đầy đủ thông tin sản phẩm và thẻ meta OpenGraph trực tiếp từ Server. Kết hợp ISR (Incremental Static Regeneration) để tạo sẵn trang HTML tĩnh cho hàng nghìn sản phẩm và tự động làm mới ngầm (revalidate) định kỳ mà không cần build lại toàn bộ ứng dụng.",
        result: "Trang sản phẩm hiển thị tức thì (FCP dưới 0.8s), điểm Google Lighthouse SEO đạt 95+ và bot tìm kiếm lập chỉ mục (index) sản phẩm trọn vẹn."
      }
    },
    {
      id: "jwt_rbac_auth_security",
      keywords: ["jwt", "auth", "rbac", "security", "token", "bảo mật", "phân quyền", "cookie"],
      category: "Security & Authentication",
      q_vi: "Bạn xử lý cơ chế Authentication & Phân quyền người dùng (RBAC) với JWT như thế nào để đảm bảo tính an toàn và ngăn chặn lộ Token?",
      star_vi: {
        situation: "Hệ thống cần phân tách ranh giới bảo mật tuyệt đối giữa Khách mua hàng và Quản trị viên (Admin), đồng thời phòng chống các cuộc tấn công XSS và đánh cắp phiên đăng nhập.",
        task: "Xây dựng luồng xác thực an toàn, cấp phát và thu hồi token chuẩn mực cùng các middleware kiểm tra quyền hạn chặt chẽ.",
        action: "Áp dụng cơ chế Dual Token: Access Token thời hạn ngắn (15-30 phút) đính kèm Header Authorization cho các API call thông thường; Refresh Token thời hạn dài (7 ngày) lưu an toàn trong httpOnly Cookie (có cờ Secure, SameSite=Strict) để chống đánh cắp qua mã độc XSS. Ở Backend tạo Middleware giải mã JWT, kiểm tra Role của User (User/Admin) và từ chối ngay HTTP 403 Forbidden nếu không đủ thẩm quyền.",
        result: "Toàn bộ API quản trị nội bộ được bảo vệ 100%, phiên đăng nhập của người dùng được duy trì mượt mà và an toàn."
      }
    },
    {
      id: "ecommerce_race_condition_bug",
      keywords: ["bug", "sự cố", "race condition", "checkout", "tồn kho", "atomic", "transaction", "debug"],
      category: "Problem Solving & Bug Fixing (STAR)",
      q_vi: "Kể về một bug hoặc sự cố kỹ thuật khó khăn nhất mà bạn từng gặp trong dự án E-Commerce và cách bạn debug giải quyết triệt để?",
      star_vi: {
        situation: "Trong quá trình kiểm thử tải luồng đặt hàng, phát hiện trường hợp khách hàng click nút 'Thanh toán' liên tục (double-click) hoặc nhiều người cùng mua món hàng cuối cùng trong cùng một tích tắc dẫn đến tình trạng trừ âm số lượng tồn kho (Race Condition).",
        task: "Xử lý đồng thời (concurrency control) để đảm bảo giao dịch đặt hàng diễn ra mang tính Atomic và không bao giờ bị bán quá số lượng kho.",
        action: "Xử lý triệt để ở 2 lớp: (1) Client: Vô hiệu hóa (disable) nút Đặt hàng ngay cú click đầu tiên, hiển thị loading spinner và áp dụng debounce; (2) Server: Bọc toàn bộ logic kiểm tra và trừ tồn kho trong một Database Transaction có điều kiện khóa bản ghi (SELECT ... FOR UPDATE trong PostgreSQL hoặc câu lệnh update atomic 'quantity >= ordered_qty' trong MongoDB). Nếu số lượng không đủ, transaction tự động rollback và báo lỗi hết hàng.",
        result: "Loại bỏ hoàn toàn 100% nguy cơ trừ âm kho và đơn hàng trùng lặp, hệ thống vận hành ổn định và chính xác dưới tải cao."
      }
    },
    {
      id: "it_support_troubleshooting",
      keywords: ["it support", "máy tính", "mạng", "phần mềm", "thiết bị", "hardware", "network"],
      category: "IT Support & Office Operations",
      q_vi: "Trong JD có yêu cầu hỗ trợ sự cố IT nội bộ (máy tính, mạng LAN/Wifi, phần mềm, thiết bị). Là một Developer, bạn có thái độ như thế nào và quy trình xử lý sự cố mạng/máy tính của bạn ra sao?",
      star_vi: {
        situation: "Trong môi trường công ty, sự cố mạng chập chờn, máy in không kết nối hoặc máy tính nhân viên lỗi phần mềm làm gián đoạn công việc kinh doanh.",
        task: "Xử lý nhanh chóng các sự cố kỹ thuật văn phòng với thái độ chủ động, tinh thần trách nhiệm cao, không nề hà công việc.",
        action: "Em luôn sẵn sàng hỗ trợ vì mục tiêu chung là công ty vận hành trơn tru. Quy trình xử lý bài bản: (1) Cách ly và khoanh vùng sự cố (lỗi cục bộ 1 máy hay toàn hệ thống); (2) Kiểm tra kết nối vật lý (cáp mạng, switch, nguồn); (3) Kiểm tra tầng mạng (ping gateway, DNS 8.8.8.8, cấp phát IP DHCP); (4) Xử lý xung đột driver hoặc malware trên máy trạm.",
        result: "Khắc phục nhanh sự cố giúp đồng đội tiếp tục làm việc, được đồng nghiệp và cấp trên tin tưởng về tính linh hoạt và tinh thần Ownership."
      }
    },
    {
      id: "database_optimization_perf",
      keywords: ["tối ưu", "dưới 2 giây", "mongodb", "mysql", "indexing", "truy vấn", "query optimization"],
      category: "Database & Performance Tuning",
      q_vi: "Trong CV bạn có ghi tối ưu hóa truy vấn cơ sở dữ liệu, giảm thời gian tải trang xuống dưới 2 giây. Bạn đã áp dụng những kỹ thuật cụ thể nào?",
      star_vi: {
        situation: "Trang danh mục sản phẩm và tin tuyển dụng khi dữ liệu tăng thường bị nghẽn (bottleneck) ở các câu query JOIN hoặc lookup phức tạp.",
        task: "Tối ưu hóa tầng truy vấn Database và giảm payload dữ liệu truyền tải về Client.",
        action: "Đánh Compound Index trên các trường hay tìm kiếm kết hợp (category + status + createdAt); Chỉ SELECT/Project các trường cần thiết thay vì SELECT *; Sử dụng phân trang theo con trỏ (Cursor-based) hoặc limit/skip hợp lý; Tối ưu Aggregation Pipeline trong MongoDB và caching các danh mục tĩnh.",
        result: "Thời gian phản hồi API trung bình từ 1.8s giảm xuống dưới 200ms, thời gian tải trang đạt chuẩn dưới 2 giây trên mọi thiết bị."
      }
    },
    {
      id: "nextjs_router",
      keywords: ["next.js", "nextjs", "app router", "route handlers", "ssr", "server components"],
      category: "Next.js & Frontend Architecture",
      q_vi: "Sự khác biệt cốt lõi giữa Server Components và Client Components trong Next.js App Router là gì? Khi nào bạn bắt buộc phải dùng 'use client'?",
      star_vi: {
        situation: "Trong các dự án Next.js hiện đại, việc render toàn bộ ở client làm phình to bundle JS và giảm điểm Web Vitals.",
        task: "Phải phân định ranh giới rõ ràng giữa Server Components và Client Components để tối ưu tốc độ tải trang và SEO.",
        action: "Mặc định để các component là Server Component để lấy dữ liệu trực tiếp, giữ bí mật API keys/token và giảm zero bundle size. Chỉ đẩy 'use client' xuống các leaf component nhỏ nhất khi cần tương tác như onClick, form input, hoặc dùng React hooks (useState, useEffect).",
        result: "Trang tải nhanh hơn, giảm hơn 40% dung lượng JavaScript tải về trình duyệt và điểm Lighthouse đạt trên 90."
      }
    },
    {
      id: "rest_api_auth",
      keywords: ["restful", "api", "nextauth", "jwt", "authentication", "backend", "express", "endpoint"],
      category: "Backend & RESTful API",
      q_vi: "Khi thiết kế hơn 15 RESTful API endpoints, bạn áp dụng những chuẩn mực nào? Bạn xử lý luồng xác thực (Authentication) và bảo mật như thế nào?",
      star_vi: {
        situation: "Hệ thống cần cung cấp dữ liệu ổn định, an toàn cho frontend và các client bên thứ ba.",
        task: "Thiết kế API chuẩn RESTful, trực quan, xử lý lỗi nhất quán và bảo vệ các route nhạy cảm.",
        action: "Đặt tên endpoint theo danh từ số nhiều (vd: /api/jobs, /api/auth), áp dụng đúng HTTP verbs và status codes (200, 201, 400, 401, 403, 500). Tích hợp NextAuth hoặc JWT với cơ chế kiểm tra token ở middleware, lưu trữ token an toàn và validate dữ liệu đầu vào (Zod/Joi) trước khi xử lý.",
        result: "Hệ thống API hoạt động tin cậy, không bị lỗi injection dữ liệu rác, tài liệu hóa Swagger rõ ràng giúp đồng đội tích hợp dễ dàng."
      }
    },
    {
      id: "postgresql_supabase",
      keywords: ["postgresql", "supabase", "database", "csdl", "sql", "query", "mysql"],
      category: "Database & Query Optimization",
      q_vi: "Trong dự án tại TAMI Technology, bạn thiết kế mô hình CSDL PostgreSQL trên Supabase ra sao và bạn đã tối ưu hóa hiệu năng truy vấn như thế nào?",
      star_vi: {
        situation: "Hệ thống phân tích chứng khoán yêu cầu lưu trữ và truy vấn nhiều bảng dữ liệu quan hệ với tốc độ cao.",
        task: "Thiết kế schema chuẩn hóa, đảm bảo tính toàn vẹn dữ liệu và tối ưu tốc độ truy xuất.",
        action: "Thiết kế schema đạt chuẩn 3NF, thiết lập đầy đủ khóa chính (PK), khóa ngoại (FK) và ràng buộc (Constraints). Tạo Index (B-Tree) trên các trường thường xuyên lọc và sắp xếp (symbol, created_at), dùng Supabase RLS để kiểm soát quyền truy cập ở tầng DB.",
        result: "Thời gian thực thi các câu truy vấn phức tạp giảm đáng kể, dữ liệu được bảo vệ an toàn ngay tại tầng CSDL."
      }
    },
    {
      id: "ai_vibe_coding",
      keywords: ["ai", "cursor", "claude", "llm", "copilot", "prompt", "vibe coding", "automation", "bảo mật", "kiểm soát"],
      category: "Tư Duy AI-First: Tăng Tốc Code, Kiểm Soát Chất Lượng & Bảo Mật",
      q_vi: "Bạn tự nhận có tư duy AI-first và tận dụng Cursor, Claude. Bạn sử dụng AI như thế nào để vừa tăng tốc độ code vừa đảm bảo chất lượng và tính bảo mật?",
      star_vi: {
        situation: "Nhà tuyển dụng muốn kiểm tra xem ứng viên thực sự làm chủ công cụ AI hay chỉ 'copy-paste mù quáng từ AI' và không nắm vững mã nguồn.",
        task: "Khẳng định tư duy cốt lõi: 'Em coi AI như một đồng nghiệp junior làm việc rất nhanh nhưng luôn cần được code review cẩn trọng, chứ AI không phải là người đưa ra quyết định kiến trúc'.",
        action: "• <b>1. Dùng AI vào việc gì:</b> Tăng tốc ở những việc lặp lại có khuôn mẫu (dựng boilerplate, viết API route, query SQL, viết test, giải thích code lạ, gợi ý hướng debug). Còn thiết kế cấu trúc bảng, luồng xác thực, phân quyền thì em tự quyết trước, rồi mới dùng AI để đối chiếu tìm điểm bỏ sót.<br>• <b>2. Kiểm soát chất lượng:</b> Tuyệt đối không merge code mình chưa hiểu; đọc kỹ từng đoạn, chạy thử, kiểm tra các trường hợp biên; yêu cầu AI làm từng phần nhỏ chứ không giao cả tính năng một lần vì phần nhỏ dễ review hơn; dùng Git diff để so sánh và rollback nếu AI sửa sai.<br>• <b>3. Kiểm soát bảo mật (3 nguyên tắc):</b> (1) Không đưa dữ liệu nhạy cảm (API key, token, user data thật) vào prompt; dùng biến môi trường; (2) Soi kỹ những chỗ AI hay viết chạy được nhưng thiếu lớp bảo vệ: validate input, chống SQL injection, phân quyền và xử lý lỗi; (3) Kiểm tra thư viện AI gợi ý có thật, còn được duy trì và an toàn không (tránh package hallucination).",
        result: "• <b>Ví dụ thực tế:</b> Khi làm bot Telegram dùng Gemini chỉnh CV, em phải kiểm soát chính đầu ra của AI: ép định dạng JSON trả về, validate kết quả trước khi dùng, và chặn không để AI tự bịa thêm kinh nghiệm không có trong CV gốc &rarr; Giúp em hiểu rõ AI mạnh ở đâu và dễ sai ở đâu để làm chủ 100% mã nguồn."
      }
    },
    {
      id: "state_management",
      keywords: ["redux", "zustand", "vuex", "state", "react", "vue"],
      category: "State Management & Performance",
      q_vi: "Khi xây dựng ứng dụng web phức tạp, bạn phân chia và quản lý trạng thái (state) như thế nào? Khi nào dùng Global State thay vì Local State?",
      star_vi: {
        situation: "Ứng dụng web mở rộng nhiều tính năng, việc truyền props (prop drilling) hoặc lạm dụng Context API gây ra re-render không kiểm soát.",
        task: "Xây dựng kiến trúc state tinh gọn, dễ debug và duy trì hiệu năng mượt mà.",
        action: "Phân chia rõ: UI state cục bộ giữ ở component (useState); Server cache dùng React Query / SWR; Global state (giỏ hàng, user session, modal) sử dụng Zustand hoặc Redux Toolkit với selector chọn lọc để tránh re-render diện rộng.",
        result: "Ứng dụng vận hành trơn tru, không gặp hiện tượng giật lag UI khi người dùng thao tác nhanh."
      }
    },
    {
      id: "responsive_ui_ux",
      keywords: ["responsive", "css", "html5", "tailwind", "ui/ux", "figma", "frontend"],
      category: "UI/UX & Responsive Development",
      q_vi: "Làm thế nào bạn đảm bảo giao diện web hiển thị đồng bộ, chuẩn pixel và thân thiện trên cả Mobile, Tablet và Desktop?",
      star_vi: {
        situation: "Người dùng truy cập từ nhiều kích thước màn hình khác nhau, giao diện dễ bị vỡ bố cục hoặc tràn viền.",
        task: "Chuyển đổi thiết kế từ Figma thành mã HTML/CSS chuẩn W3C, đáp ứng tốt triết lý Mobile-First.",
        action: "Sử dụng CSS Flexbox & CSS Grid linh hoạt, khai báo media queries theo các breakpoint chuẩn (375px, 768px, 1024px, 1280px+). Chú ý touch targets tối thiểu 44px trên mobile, tối ưu font size và khoảng cách padding/margin cân đối.",
        result: "Giao diện hiển thị sắc nét, không bị giật layout (zero CLS) và đem lại trải nghiệm mượt mà cho người dùng trên mọi thiết bị."
      }
    },
    {
      id: "git_testing_deploy",
      keywords: ["git", "postman", "vercel", "deploy", "ci/cd", "docker", "testing"],
      category: "Workflow & Deployment",
      q_vi: "Quy trình kiểm thử API và triển khai ứng dụng (Deployment) của bạn diễn ra như thế nào?",
      star_vi: {
        situation: "Trước khi đưa sản phẩm lên môi trường production hoặc cho nhà tuyển dụng xem demo, cần đảm bảo hệ thống chạy ổn định.",
        task: "Thiết lập quy trình kiểm thử và tự động hóa việc deploy.",
        action: "Sử dụng Postman để kiểm thử các trường hợp dữ liệu hợp lệ và biên (edge cases). Quản lý code bằng Git với commit message chuẩn mực (Conventional Commits). Cấu hình CI/CD tự động build & deploy lên Vercel / Cloudflare mỗi khi đẩy code lên nhánh main.",
        result: "Các bản demo luôn online 24/7 với độ ổn định cao, phản hồi nhanh và sẵn sàng cho nhà tuyển dụng trải nghiệm trực tiếp."
      }
    }
  ];

  // Danh sách câu hỏi ứng viên hỏi ngược nhà tuyển dụng (Reverse Interviewing)
  const REVERSE_QUESTIONS = [
    {
      title: "Về sản phẩm FlowAgentica & Quy mô team",
      q: "Dạ cho em hỏi sản phẩm FlowAgentica của OctoSoft hiện đang ở giai đoạn phát triển nào (MVP, Beta hay đã ra Production), và quy mô team kỹ thuật phụ trách hiện gồm mấy người ạ?",
      why: "Ghi điểm cực lớn vì chứng tỏ bạn đã chủ động tìm hiểu sâu về sản phẩm chủ lực của công ty."
    },
    {
      title: "Về kỳ vọng với Full Stack mới trong 3 tháng đầu",
      q: "Đối với một Full Stack Developer mới gia nhập, trong 3 tháng đầu tiên team kỳ vọng em sẽ đảm nhiệm những tính năng hoặc bài toán cụ thể nào ạ?",
      why: "Cho thấy bạn là người có tinh thần trách nhiệm, định hướng kết quả rõ ràng và muốn tạo ra giá trị ngay từ đầu."
    },
    {
      title: "Về quy trình kỹ thuật & Code Review",
      q: "Dạ cho em hỏi quy trình phát triển, code review và triển khai CI/CD của đội ngũ kỹ thuật tại công ty hiện đang diễn ra như thế nào ạ?",
      why: "Thể hiện bạn quan tâm đến chất lượng code, làm việc nhóm bài bản và quy trình chuyên nghiệp."
    },
    {
      title: "Về định hướng mở rộng AI của team",
      q: "Đội ngũ kỹ thuật của công ty có kế hoạch mở rộng các mô hình AI mã nguồn mở (như Llama, DeepSeek) chạy self-hosted hay chủ yếu tích hợp qua API của OpenAI/Gemini/Anthropic ạ?",
      why: "Khẳng định tư duy kỹ thuật sâu về mảng AI/LLM mà OctoSoft đang tuyển dụng."
    }
  ];

  /**
   * Khởi tạo giao diện Modal trong DOM
   */
  function injectInterviewModal() {
    if (document.getElementById("interviewModalOverlay")) return;

    const modalHtml = `
      <div class="interview-modal-overlay" id="interviewModalOverlay" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="interviewModalTitle">
        <div class="interview-modal">
          <!-- Header -->
          <div class="interview-modal-header">
            <div class="interview-header-left">
              <div class="interview-badge-icon">🎙️</div>
              <div>
                <h2 class="interview-modal-title" id="interviewModalTitle">Cẩm nang Phỏng vấn 1-Click</h2>
                <div class="interview-modal-subtitle">
                  Bản CV: <span class="interview-cv-key-tag" id="interviewCvKeyTag">default</span>
                  <span class="interview-cv-role-tag" id="interviewCvRoleTag">Developer</span>
                </div>
              </div>
            </div>
            <div class="interview-header-actions">
              <button type="button" class="interview-btn-copy-all" id="interviewCopyAllBtn" title="Sao chép toàn bộ cẩm nang ôn tập">📋 Sao chép tất cả</button>
              <button type="button" class="interview-modal-close" id="interviewCloseBtn" aria-label="Đóng cẩm nang">&times;</button>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <div class="interview-nav-tabs">
            <button type="button" class="interview-tab-btn active" data-tab="pitch">🎙️ Giới thiệu 30s</button>
            <button type="button" class="interview-tab-btn" data-tab="questions">🎯 Phỏng vấn STAR</button>
            <button type="button" class="interview-tab-btn" data-tab="techtest">💻 Ôn Test Chuyên Môn</button>
            <button type="button" class="interview-tab-btn" data-tab="reverse">❓ Hỏi lại NTD</button>
            <button type="button" class="interview-tab-btn" data-tab="notes">📝 Ghi chú</button>
          </div>

          <!-- Body Content -->
          <div class="interview-modal-body">
            <!-- TAB 1: PITCH -->
            <div class="interview-tab-pane active" id="interviewPane-pitch">
              <!-- Đồng hồ bấm giờ luyện nói 60s -->
              <div class="interview-timer-card">
                <div class="interview-timer-header">
                  <div class="interview-timer-title-wrap">
                    <span class="interview-timer-icon">⏱️</span>
                    <div>
                      <div class="interview-timer-title">Bộ đếm giờ Luyện nói (Elevator Pitch Timer)</div>
                      <div class="interview-timer-sub">Tập nói trôi chảy, căn đúng 60 giây không vấp</div>
                    </div>
                  </div>
                  <div class="interview-timer-config">
                    <button type="button" class="interview-timer-preset active" data-time="60">60s</button>
                    <button type="button" class="interview-timer-preset" data-time="45">45s</button>
                    <button type="button" class="interview-timer-preset" data-time="30">30s</button>
                  </div>
                </div>
                <div class="interview-timer-body">
                  <div class="interview-timer-time" id="interviewTimerTime">01:00</div>
                  <div class="interview-timer-progress-wrap">
                    <div class="interview-timer-progress" id="interviewTimerProgress" style="width: 100%;"></div>
                  </div>
                  <div class="interview-timer-btns">
                    <button type="button" class="interview-timer-btn-primary" id="interviewTimerToggleBtn">▶️ Bắt đầu</button>
                    <button type="button" class="interview-timer-btn-secondary" id="interviewTimerResetBtn" title="Đặt lại">🔄 Đặt lại</button>
                  </div>
                </div>
                <div class="interview-timer-alert" id="interviewTimerAlert" style="display: none;"></div>
              </div>

              <div class="interview-section-card">
                <div class="interview-card-header">
                  <div class="interview-card-title">🇻🇳 Kịch bản mở đầu Tiếng Việt (Khuyên dùng khi bắt đầu)</div>
                  <button type="button" class="interview-quick-copy" data-target="interviewPitchVi">Sao chép</button>
                </div>
                <div class="interview-pitch-box" id="interviewPitchVi">
                  Đang phân tích dữ liệu CV...
                </div>
              </div>

              <div class="interview-section-card">
                <div class="interview-card-header">
                  <div class="interview-card-title">🇬🇧 English Elevator Pitch (For Foreign/English Interviews)</div>
                  <button type="button" class="interview-quick-copy" data-target="interviewPitchEn">Copy</button>
                </div>
                <div class="interview-pitch-box" id="interviewPitchEn">
                  Generating English pitch...
                </div>
              </div>
            </div>

            <!-- TAB 2: QUESTIONS (STAR) -->
            <div class="interview-tab-pane" id="interviewPane-questions">
              <div class="interview-questions-toolbar">
                <div class="interview-help-banner" style="margin-bottom: 0; flex: 1;">
                  💡 <b>Mô hình STAR giúp câu trả lời chặt chẽ:</b> <b>S</b>ituation &rarr; <b>T</b>ask &rarr; <b>A</b>ction &rarr; <b>R</b>esult.
                </div>
                <button type="button" class="interview-flashcard-btn" id="interviewFlashcardBtn" title="Ẩn câu trả lời để tự suy nghĩ phản xạ trước khi xem gợi ý">
                  🗂️ Bật Flashcard (Tự luyện)
                </button>
              </div>
              <div class="interview-questions-list" id="interviewQuestionsList">
                <!-- Danh sách câu hỏi được đổ bởi JS -->
              </div>
            </div>

            <!-- TAB 3: TECH TEST & CODING CHEAT SHEET -->
            <div class="interview-tab-pane" id="interviewPane-techtest">
              <div class="interview-help-banner">
                ⚡ <b>Cẩm nang Ôn thi Test Chuyên Môn & Live Coding:</b> Tổng hợp 5 khối kiến thức trọng điểm cho bài test Fullstack (JavaScript Core, Database & SQL, REST API & Security, Live Coding Challenges, Git Workflow).
              </div>

              <!-- KHỐI 1: JAVASCRIPT CORE -->
              <div class="interview-section-card" style="margin-bottom: 14px;">
                <div class="interview-card-header">
                  <div class="interview-card-title">🔥 1. JavaScript Core & Các Bẫy Kinh Điển (Trắc Nghiệm & Phỏng Vấn)</div>
                </div>
                <div class="interview-techtest-body">
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Q1. Event Loop: Thứ tự in ra màn hình của đoạn code sau là gì?</b></div>
                    <pre class="quiz-code"><code>console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');</code></pre>
                    <div class="quiz-ans">
                      <b>👉 Đáp án:</b> <code>1 &rarr; 4 &rarr; 3 &rarr; 2</code><br>
                      <b>💡 Giải thích:</b> <code>1</code> và <code>4</code> chạy đồng bộ (Call Stack). Khi Call Stack trống, Event Loop ưu tiên quét sạch hàng đợi <b>Microtask Queue</b> (Promise <code>.then</code> &rarr; in ra <code>3</code>) trước khi lấy tác vụ từ <b>Macrotask Queue</b> (<code>setTimeout</code> &rarr; in ra <code>2</code>).
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Q2. Bẫy Closure & Vòng lặp <code>var</code> vs <code>let</code>:</b></div>
                    <pre class="quiz-code"><code>for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}</code></pre>
                    <div class="quiz-ans">
                      <b>👉 Đáp án:</b> In ra <code>3, 3, 3</code> (chứ không phải 0, 1, 2).<br>
                      <b>💡 Giải thích:</b> <code>var</code> có Function/Global Scope, biến <code>i</code> bị ghi đè sau mỗi vòng lặp. Khi <code>setTimeout</code> chạy sau 100ms, vòng lặp đã kết thúc và <code>i = 3</code>.<br>
                      <b>🔧 Cách sửa:</b> Đổi <code>var i</code> thành <code>let i</code> (Block Scope - mỗi vòng lặp tạo một biến <code>i</code> độc lập).
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Q3. Phân biệt <code>==</code> (Loose) vs <code>===</code> (Strict) và các phép so sánh lạ:</b></div>
                    <div class="quiz-ans">
                      • <code>==</code> tự động ép kiểu (Type Coercion); <code>===</code> so sánh cả giá trị lẫn kiểu dữ liệu.<br>
                      • <code>[] == false</code> &rarr; <b>true</b> (Mảng rỗng ép sang chuỗi <code>""</code>, rồi sang số <code>0</code>, <code>false</code> cũng thành <code>0</code>).<br>
                      • <code>null == undefined</code> &rarr; <b>true</b>, nhưng <code>null === undefined</code> &rarr; <b>false</b>.<br>
                      • <code>typeof NaN</code> &rarr; <b>'number'</b> (NaN là số không hợp lệ). Kiểm tra bằng <code>Number.isNaN(val)</code>.
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Q4. Shallow Copy vs Deep Copy trong JavaScript:</b></div>
                    <div class="quiz-ans">
                      • <b>Shallow Copy</b> (<code>{ ...obj }</code> hoặc <code>Object.assign({}, obj)</code>): Chỉ sao chép tầng ngoài cùng. Nếu object có lồng object/mảng bên trong, tham chiếu vẫn bị dùng chung!<br>
                      • <b>Deep Copy</b>: Sao chép độc lập toàn bộ các tầng lồng nhau.<br>
                      &nbsp;&nbsp;+ Chuẩn hiện đại: Dùng <code>structuredClone(obj)</code> (hỗ trợ Date, Map, Set, Regex).<br>
                      &nbsp;&nbsp;+ Cách truyền thống: <code>JSON.parse(JSON.stringify(obj))</code> (bị mất Function, undefined, Date bị biến thành string).
                    </div>
                  </div>
                </div>
              </div>

              <!-- KHỐI 2: DATABASE & SQL -->
              <div class="interview-section-card" style="margin-bottom: 14px;">
                <div class="interview-card-header">
                  <div class="interview-card-title">🗄️ 2. Database & SQL Queries Thường Gặp Trong Bài Test</div>
                </div>
                <div class="interview-techtest-body">
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>SQL 1. Tìm nhân viên có mức lương cao thứ nhì (Second Highest Salary):</b></div>
                    <pre class="quiz-code"><code>-- Cách 1: Dùng LIMIT & OFFSET (nhanh nhất)
SELECT DISTINCT salary FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;

-- Cách 2: Dùng Subquery (chuẩn ANSI SQL)
SELECT MAX(salary) FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);</code></pre>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>SQL 2. Phân biệt INNER JOIN vs LEFT JOIN:</b></div>
                    <div class="quiz-ans">
                      • <b>INNER JOIN:</b> Chỉ trả về các dòng có khóa khớp ở <b>CẢ HAI BẢNG</b>.<br>
                      • <b>LEFT JOIN:</b> Lấy <b>TOÀN BỘ</b> dòng từ bảng bên trái (Left), nếu bảng phải không có dòng khớp tương ứng thì các cột của bảng phải sẽ mang giá trị <code>NULL</code>.<br>
                      <i>Ví dụ: Lấy danh sách tất cả User và số lượng đơn hàng (kể cả User chưa từng mua hàng): Dùng <code>LEFT JOIN orders ON users.id = orders.user_id</code>.</i>
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>SQL 3. Đếm số đơn hàng và tổng tiền của từng khách hàng có tổng chi tiêu > 5 triệu:</b></div>
                    <pre class="quiz-code"><code>SELECT user_id, COUNT(id) AS total_orders, SUM(total_amount) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total_amount) > 5000000;
-- Lưu ý: WHERE lọc trước khi nhóm (từng dòng), HAVING lọc sau khi đã GROUP BY (trên kết quả gom nhóm).</code></pre>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>SQL 4. Cơ chế Indexing trong Database & Khi nào không nên dùng:</b></div>
                    <div class="quiz-ans">
                      • <b>Bản chất:</b> Index (thường cấu trúc B-Tree) hoạt động như mục lục cuốn sách, giúp tra cứu <code>O(log N)</code> thay vì quét toàn bộ bảng (Full Table Scan <code>O(N)</code>).<br>
                      • <b>Nên đánh Index:</b> Các cột thường xuyên xuất hiện trong mệnh đề <code>WHERE</code>, <code>JOIN ... ON</code>, <code>ORDER BY</code>, hoặc các cột có độ phân tán giá trị cao (High Cardinality như email, user_id).<br>
                      • <b>Không nên đánh Index:</b> Bảng dữ liệu quá nhỏ; hoặc bảng có tần suất <code>INSERT/UPDATE/DELETE</code> liên tục với khối lượng lớn (vì mỗi lần ghi dữ liệu, DB phải tính toán lại cây Index, làm chậm tốc độ ghi).
                    </div>
                  </div>
                </div>
              </div>

              <!-- KHỐI 3: REST API & SECURITY -->
              <div class="interview-section-card" style="margin-bottom: 14px;">
                <div class="interview-card-header">
                  <div class="interview-card-title">🌐 3. REST API Status Codes & Web Security Cheat Sheet</div>
                </div>
                <div class="interview-techtest-body">
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Bảng tra cứu nhanh HTTP Status Codes chuẩn:</b></div>
                    <div class="quiz-ans">
                      • <code>200 OK</code>: Xử lý thành công (thường dùng cho GET, PUT, DELETE).<br>
                      • <code>201 Created</code>: Tạo mới tài nguyên thành công (bắt buộc dùng cho POST tạo mới).<br>
                      • <code>204 No Content</code>: Thành công nhưng không có nội dung trả về (thường dùng khi DELETE).<br>
                      • <code>400 Bad Request</code>: Dữ liệu gửi lên sai định dạng hoặc vi phạm schema validation.<br>
                      • <code>401 Unauthorized</code>: Chưa xác thực (Chưa gửi Token hoặc Token đã hết hạn/không hợp lệ).<br>
                      • <code>403 Forbidden</code>: Đã xác thực danh tính nhưng <b>KHÔNG CÓ QUYỀN</b> truy cập tài nguyên (ví dụ User thường cố truy cập API của Admin).<br>
                      • <code>404 Not Found</code>: Không tìm thấy tài nguyên (sai URL hoặc ID không tồn tại trong DB).<br>
                      • <code>409 Conflict</code>: Xung đột tài nguyên (ví dụ đăng ký email đã tồn tại trong hệ thống).<br>
                      • <code>500 Internal Server Error</code>: Lỗi sập code, ngoại lệ chưa bắt (Unhandled Exception) ở Backend.
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Phân biệt PUT vs PATCH và tính Idempotent:</b></div>
                    <div class="quiz-ans">
                      • <b>PUT (Idempotent):</b> Thay thế toàn bộ tài nguyên. Gửi 1 lần hay 100 lần kết quả trên DB vẫn như nhau.<br>
                      • <b>PATCH (Không bắt buộc Idempotent):</b> Cập nhật cục bộ (từng trường riêng lẻ).<br>
                      • <b>POST (Non-idempotent):</b> Mỗi lần gọi sẽ tạo ra một tài nguyên mới (gọi 5 lần tạo 5 bản ghi).
                    </div>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Bảo mật Web cơ bản (XSS vs CSRF):</b></div>
                    <div class="quiz-ans">
                      • <b>XSS (Cross-Site Scripting):</b> Kẻ tấn công chèn mã JavaScript độc hại vào trang web. Phòng ngừa: Sanitize input/output, mã hóa HTML entities, <b>lưu JWT Token trong cookie <code>httpOnly</code></b> (JavaScript không thể đọc được <code>document.cookie</code>).<br>
                      • <b>CSRF (Cross-Site Request Forgery):</b> Lừa trình duyệt của người dùng gửi request giả mạo kèm cookie có sẵn. Phòng ngừa: Cấu hình cờ <code>SameSite=Strict</code> hoặc <code>SameSite=Lax</code> trên Cookie, sử dụng CSRF Token cho các action nhạy cảm.
                    </div>
                  </div>
                </div>
              </div>

              <!-- KHỐI 4: LIVE CODING CHALLENGES -->
              <div class="interview-section-card" style="margin-bottom: 14px;">
                <div class="interview-card-header">
                  <div class="interview-card-title">💻 4. Live Coding Challenges (3 Bài Tập Code Kinh Điển)</div>
                </div>
                <div class="interview-techtest-body">
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Bài 1: Khử trùng lặp phần tử trong mảng (Unique Elements):</b></div>
                    <pre class="quiz-code"><code>// Cách 1: Dùng Set (nhanh và chuẩn nhất - O(N))
const removeDuplicates = arr => [...new Set(arr)];

// Cách 2: Dùng filter + indexOf (nếu phỏng vấn cấm dùng Set)
const removeDuplicatesFilter = arr => arr.filter((item, index) => arr.indexOf(item) === index);</code></pre>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Bài 2: Đếm tần suất xuất hiện của từng phần tử trong mảng:</b></div>
                    <pre class="quiz-code"><code>function countFrequencies(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
// Ví dụ: countFrequencies(['apple', 'banana', 'apple']) 
// -> { apple: 2, banana: 1 }</code></pre>
                  </div>

                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Bài 3: Viết API Route phân trang (Pagination) chuẩn trong Node.js / Express:</b></div>
                    <pre class="quiz-code"><code>app.get('/api/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Product.find().skip(skip).limit(limit).lean(),
      Product.countDocuments()
    ]);

    return res.status(200).json({
      success: true,
      data: items,
      pagination: {
        page,
        limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});</code></pre>
                  </div>
                </div>
              </div>

              <!-- KHỐI 5: GIT COMMANDS -->
              <div class="interview-section-card">
                <div class="interview-card-header">
                  <div class="interview-card-title">🌱 5. Git Commands & Quy Trình Teamwork Thường Hỏi</div>
                </div>
                <div class="interview-techtest-body">
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Phân biệt Git Merge vs Git Rebase:</b></div>
                    <div class="quiz-ans">
                      • <b>Git Merge:</b> Tạo ra một commit gộp (Merge Commit) nối hai nhánh lại với nhau. Giữ nguyên toàn bộ lịch sử commit theo đúng mốc thời gian thực tế.<br>
                      • <b>Git Rebase:</b> Nhặt từng commit của nhánh hiện tại và "đặt lại gốc" lên đỉnh của nhánh đích. Lịch sử commit sẽ thành một đường thẳng tắp, sạch sẽ, không có merge commit rác.<br>
                      • <i>Quy tắc vàng:</i> Không bao giờ rebase trên các nhánh công khai dùng chung (như <code>main</code> hoặc <code>develop</code>).
                    </div>
                  </div>
                  <div class="interview-quiz-item">
                    <div class="quiz-q"><b>Git Stash & Cherry-pick là gì?</b></div>
                    <div class="quiz-ans">
                      • <code>git stash</code>: Cất tạm những file đang sửa dở dang vào ngăn kéo để pull code mới hoặc chuyển branch khẩn cấp mà không cần commit rác. Dùng <code>git stash pop</code> để lôi ra làm tiếp.<br>
                      • <code>git cherry-pick &lt;commit-hash&gt;</code>: Bốc chính xác một commit cụ thể từ nhánh khác và áp dụng vào nhánh hiện tại (rất hay dùng khi cần hotfix một bug từ dev sang production).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TAB 3: REVERSE -->
            <div class="interview-tab-pane" id="interviewPane-reverse">
              <div class="interview-help-banner">
                💡 <b>Chiến thuật hỏi ngược:</b> Cuối buổi phỏng vấn khi HR hỏi <i>"Em có câu hỏi gì cho công ty không?"</i>, hãy chọn 2-3 câu hỏi dưới đây để ghi điểm tuyệt đối.
              </div>
              <div class="interview-reverse-list" id="interviewReverseList">
                <!-- Danh sách câu hỏi hỏi ngược -->
              </div>
            </div>

            <!-- TAB 4: NOTES -->
            <div class="interview-tab-pane" id="interviewPane-notes">
              <div class="interview-notes-container">
                <div class="interview-notes-header">
                  <div>
                    <div class="interview-notes-title">Sổ tay ghi chú phỏng vấn riêng cho công ty này</div>
                    <div class="interview-notes-hint">Ghi lại câu hỏi nhà tuyển dụng đã hỏi, văn hóa công ty hoặc điều cần chuẩn bị thêm (tự động lưu vào máy bạn).</div>
                  </div>
                  <div class="interview-save-status" id="interviewSaveStatus">Đã lưu tự động</div>
                </div>
                <textarea class="interview-notes-textarea" id="interviewNotesTextarea" placeholder="Ví dụ:
- Người phỏng vấn: Anh Nam (Tech Lead) và Chị Trang (HR)
- Công ty đang làm dự án e-commerce quy mô 100k người dùng
- Câu hỏi cần ôn thêm: Phân biệt useCallback và useMemo, cách index trong PostgreSQL..."></textarea>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="interview-modal-footer">
            <div class="interview-footer-tip">
              ⚡ <b>Mẹo phỏng vấn:</b> Giữ giọng nói tự tin, nói chậm rãi, nếu không rõ yêu cầu hãy mạnh dạn hỏi lại để làm rõ đề bài trước khi trả lời.
            </div>
            <button type="button" class="interview-btn-close-secondary" id="interviewCloseFooterBtn">Đóng</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHtml);
    bindModalEvents();
  }

  /**
   * Trích xuất các từ khóa công nghệ chính trong CV
   */
  function extractTechKeywords(data) {
    if (!data) return [];
    let text = "";
    if (data.skills && Array.isArray(data.skills)) {
      data.skills.forEach(s => {
        text += " " + (s.name || "") + " " + (s.items || "");
      });
    }
    if (data.experience && Array.isArray(data.experience)) {
      data.experience.forEach(e => {
        text += " " + (e.tech || "") + " " + (e.desc || "") + " " + (e.tasks ? e.tasks.join(" ") : "");
      });
    }
    if (data.projects && Array.isArray(data.projects)) {
      data.projects.forEach(p => {
        text += " " + (p.tech || "") + " " + (p.desc || "") + " " + (p.tasks ? p.tasks.join(" ") : "");
      });
    }
    return text.toLowerCase();
  }

  /**
   * Sinh bài pitch 30s Tiếng Việt
   */
  function generatePitchVi(d, cvKey) {
    const meta = (window.cvData && window.cvData.meta) || {};
    if (meta.pitchVi) {
      return meta.pitchVi;
    }

    if (cvKey === "octosoft") {
      return `Dạ em chào Anh/Chị. Em là <b>Trương Đình Anh</b>, tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM, và đang theo định hướng <b>Full-Stack Developer</b>.

Em từng có 6 tháng làm việc thực tế tại Công ty TAMI, nơi em trực tiếp xây dựng hệ thống phân tích dữ liệu chứng khoán: phát triển hệ thống RESTful API với Next.js/Node.js, thiết kế CSDL PostgreSQL trên Supabase và tích hợp xác thực người dùng Google.

Đặc biệt, em có định hướng chuyên sâu về mảng <b>AI Agent, Workflow Automation và Tích hợp API</b>. Em đã tự tay xây dựng hệ thống serverless trên Cloudflare Workers kết hợp Telegram Bot, tích hợp mô hình Gemini LLM API để tự động phân tích và xử lý dữ liệu theo thời gian thực. Em rất hào hứng với định hướng công nghệ của OctoSoft và tin rằng nền tảng Full Stack cùng tư duy AI-First sẽ giúp em nhanh chóng bắt nhịp và đóng góp hiệu quả vào các dự án của Quý công ty ạ.`;
    }

    if (cvKey === "cgecom") {
      return `Lời đầu tiên, em xin cảm ơn Anh/Chị và quý công ty đã dành thời gian sắp xếp buổi phỏng vấn ngày hôm nay cùng em ạ.

Em tên là <b>Trương Đình Anh</b>, tốt nghiệp ngành Khoa học máy tính tại Trường Đại học Mở TP.HCM. Em định hướng phát triển chuyên sâu ở vị trí <b>Full-Stack Developer</b>, đặc biệt tập trung vào mảng Website. Em thấy định hướng của em và yêu cầu công việc của <b>CG ECOM</b> rất khớp nhau, nên em rất mong muốn có cơ hội được thử sức và đóng góp cho công ty.

Thế mạnh của em là làm tốt cả <b>React, Next.js</b> ở frontend và <b>Node.js, Express</b> cùng các hệ CSDL <b>PostgreSQL, MongoDB</b> ở backend. Em từng có 6 tháng thực tập làm việc với API, database thực tế và đã tự tay phát triển một nền tảng <b>E-commerce</b> hoàn chỉnh từ giao diện, giỏ hàng cho tới xử lý đơn hàng ạ.

Ngoài ra, em là người có tinh thần <b>chủ động và rất linh hoạt</b>: Em nắm bắt nghiệp vụ mới nhanh, biết ứng dụng AI để tối ưu tốc độ làm việc, và luôn sẵn sàng hỗ trợ cả các vấn đề IT, phần mềm hay máy tính nội bộ bất cứ khi nào team cần ạ.`;
    }

    const companyName = meta.company || "Quý công ty";
    const title = meta.position || d.title || "Developer";
    const cleanTitle = title.replace(/\(.*?\)/g, "").trim();

    // Rút trích 3 kỹ năng nổi bật
    let topSkills = "Next.js, Node.js, RESTful API và cơ sở dữ liệu PostgreSQL";
    if (d.skills && d.skills.length > 0) {
      const firstGroup = d.skills[0];
      if (firstGroup && firstGroup.items) {
        topSkills = firstGroup.items.split(",").slice(0, 4).join(", ").trim();
      }
    }

    const highlightSentence = meta.pitchHighlights 
      ? `\n\nĐiểm mạnh nổi bật của em phù hợp với yêu cầu: <b>${meta.pitchHighlights}</b>.`
      : "";

    return `Dạ chào Anh/Chị, em là <b>Trương Đình Anh</b>, tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Định hướng của em là phát triển chuyên sâu ở vai trò <b>${cleanTitle}</b>.

Trong quá trình học tập và làm việc, em đã tham gia phát triển dự án thực tế tại Công ty TNHH Công nghệ TAMI, nơi em trực tiếp xây dựng và tối ưu hơn 15 RESTful API endpoints với Next.js và thiết kế CSDL PostgreSQL trên nền tảng Supabase Cloud.

Thế mạnh của em là nắm vững nền tảng <b>${topSkills}</b>, đồng thời chủ động ứng dụng sức mạnh của các công cụ AI (như Cursor, Claude) vào quy trình lập trình để tăng tốc độ phát triển sản phẩm mà vẫn làm chủ mã nguồn.${highlightSentence}

Em ứng tuyển vào <b>${companyName}</b> vì nhận thấy định hướng công nghệ và môi trường làm việc của Quý công ty rất tương đồng với thế mạnh của em. Em tự tin với tinh thần trách nhiệm và khả năng tự học nhanh, em có thể nhanh chóng bắt nhịp và đóng góp hiệu quả vào các dự án của team ngay khi nhận việc ạ.`;
  }

  /**
   * Sinh bài pitch 30s Tiếng Anh
   */
  function generatePitchEn(d, cvKey) {
    const meta = (window.cvData && window.cvData.meta) || {};
    if (meta.pitchEn) {
      return meta.pitchEn;
    }

    const companyName = meta.company || "your company";
    const title = meta.position || d.title || "Developer";
    const cleanTitle = title.replace(/\(.*?\)/g, "").trim();

    let topSkills = "Next.js, Node.js, RESTful API, and PostgreSQL";
    if (d.skills && d.skills.length > 0) {
      const firstGroup = d.skills[0];
      if (firstGroup && firstGroup.items) {
        topSkills = firstGroup.items.split(",").slice(0, 4).join(", ").trim();
      }
    }

    const highlightSentence = meta.pitchHighlights 
      ? `\n\nMy core value proposition for this role: <b>${meta.pitchHighlights}</b>.`
      : "";

    return `Hello, my name is <b>Truong Dinh Anh</b>. I graduated with a degree in Computer Science from Ho Chi Minh City Open University, and I am focused on growing as a professional <b>${cleanTitle}</b>.

During my hands-on internship at TAMI Technology, I was responsible for developing and optimizing 15+ RESTful API endpoints using Next.js and designing relational schemas with PostgreSQL on Supabase Cloud.

My core strengths lie in <b>${topSkills}</b>. Additionally, I embrace an AI-first development mindset, utilizing tools like Claude and Cursor to boost productivity while strictly adhering to Clean Code and best security practices.${highlightSentence}

I am very excited about this opportunity at <b>${companyName}</b> because my technical background and proactive attitude align strongly with your team's current goals. I am confident in my ability to onboard quickly and make meaningful contributions from day one.`;
  }

  /**
   * Chọn bộ câu hỏi phỏng vấn phù hợp nhất với bản CV hiện tại
   */
  function pickRelevantQuestions(cvText, cvKey) {
    const isOctoSoft = cvKey === "octosoft" || cvText.includes("octosoft") || cvText.includes("flowagentica") || cvText.includes("octo software");
    if (isOctoSoft) {
      const priorityIds = [
        "octo_test_order_api",
        "octo_test_slow_query",
        "octo_test_jwt_refresh_race",
        "octo_test_react_race_condition",
        "octo_test_negative_stock_triage",
        "octo_test_review_ai_code",
        "octo_test_ai_sdlc_guardrails",
        "octo_test_crisis_prioritization",
        "octosoft_exp_gap",
        "level1_null_vs_undefined",
        "level2_react_useeffect_rerender",
        "level3_rest_put_vs_patch",
        "fullstack_rest_vs_graphql",
        "fullstack_sql_vs_nosql_mongodb",
        "fullstack_slow_query_optimization",
        "level4_db_btree_index_tradeoff",
        "fullstack_web_security_basics",
        "level5_sql_injection_xss_defense",
        "fullstack_git_workflow_conflict",
        "tami_architecture",
        "tami_auth_security",
        "tami_vnstock_perf",
        "tami_database_indexing",
        "tami_hardest_bug",
        "ai_telegram_gemini_project",
        "ai_agent_vs_chatbot_workflow",
        "ai_vibe_coding",
        "behavior_unclear_requirements",
        "behavior_prioritizing_tasks",
        "behavior_long_term_career",
        "practical_salary_and_start_date"
      ];
      const result = [];
      priorityIds.forEach(id => {
        const found = QUESTION_BANK.find(q => q.id === id);
        if (found) result.push(found);
      });
      if (result.length > 0) return result;
    }

    const isCgEcom = cvKey === "cgecom" || cvText.includes("cgecom") || (cvText.includes("thương mại điện tử") && cvText.includes("cg ecom"));
    if (isCgEcom) {
      const priorityIds = [
        "ecommerce_cart_order",
        "sql_vs_nosql_ecommerce",
        "nextjs_ssr_seo_ecommerce",
        "jwt_rbac_auth_security",
        "ecommerce_race_condition_bug",
        "it_support_troubleshooting",
        "database_optimization_perf"
      ];
      const result = [];
      priorityIds.forEach(id => {
        const found = QUESTION_BANK.find(q => q.id === id);
        if (found) result.push(found);
      });
      if (result.length > 0) return result;
    }

    const scoredQuestions = QUESTION_BANK.map(item => {
      let score = 0;
      item.keywords.forEach(kw => {
        if (cvText.includes(kw)) {
          score += 1;
        }
      });
      return { item, score };
    });

    // Sắp xếp theo độ phù hợp
    scoredQuestions.sort((a, b) => b.score - a.score);

    // Lấy top 7 câu hỏi có điểm cao nhất
    return scoredQuestions.slice(0, 7).map(sq => sq.item);
  }

  // ===================================================================
  // MOCK INTERVIEW CONTROLLERS: TIMER & FLASHCARD
  // ===================================================================
  let timerInterval = null;
  let timerDuration = 60;
  let timerSecondsLeft = 60;
  let isTimerRunning = false;
  let isFlashcardMode = false;

  function updateTimerUI() {
    const timeEl = document.getElementById("interviewTimerTime");
    const progressEl = document.getElementById("interviewTimerProgress");
    const toggleBtn = document.getElementById("interviewTimerToggleBtn");
    const alertEl = document.getElementById("interviewTimerAlert");

    if (!timeEl || !progressEl) return;

    const mins = Math.floor(timerSecondsLeft / 60);
    const secs = timerSecondsLeft % 60;
    timeEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    const percent = Math.max(0, (timerSecondsLeft / timerDuration) * 100);
    progressEl.style.width = percent + "%";

    // Đổi màu thanh tiến trình
    if (percent > 30) {
      progressEl.style.background = "linear-gradient(90deg, #10b981, #059669)";
      timeEl.style.color = "#0f172a";
    } else if (percent > 15) {
      progressEl.style.background = "linear-gradient(90deg, #f59e0b, #d97706)";
      timeEl.style.color = "#d97706";
    } else {
      progressEl.style.background = "linear-gradient(90deg, #ef4444, #dc2626)";
      timeEl.style.color = "#dc2626";
    }

    if (toggleBtn) {
      toggleBtn.textContent = isTimerRunning ? "⏸️ Tạm dừng" : "▶️ Bắt đầu";
      if (isTimerRunning) {
        toggleBtn.classList.add("running");
      } else {
        toggleBtn.classList.remove("running");
      }
    }

    if (timerSecondsLeft === 0 && alertEl) {
      alertEl.style.display = "block";
      alertEl.innerHTML = "🎉 <b>Hết giờ!</b> Hãy tự đánh giá: Bạn đã giới thiệu trọn vẹn trong " + timerDuration + " giây chưa? (Tốc độ chuẩn: 120-150 từ/phút).";
    } else if (alertEl) {
      alertEl.style.display = "none";
    }
  }

  function startTimer() {
    if (isTimerRunning) {
      pauseTimer();
      return;
    }
    if (timerSecondsLeft === 0) {
      timerSecondsLeft = timerDuration;
    }
    isTimerRunning = true;
    updateTimerUI();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSecondsLeft--;
      if (timerSecondsLeft <= 0) {
        timerSecondsLeft = 0;
        pauseTimer();
      }
      updateTimerUI();
    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    updateTimerUI();
  }

  function resetTimer() {
    pauseTimer();
    timerSecondsLeft = timerDuration;
    updateTimerUI();
  }

  /**
   * Cập nhật dữ liệu vào Modal khi mở
   */
  function populateModal() {
    const lang = (window.currentLang === "en") ? "en" : "vi";
    const dataVi = (window.cvData && window.cvData.vi) ? window.cvData.vi : {};
    const dataEn = (window.cvData && window.cvData.en) ? window.cvData.en : {};
    const currentData = (lang === "en") ? dataEn : dataVi;

    const urlParams = new URLSearchParams(window.location.search);
    let cvKey = window.cvVersion || urlParams.get("type") || (urlParams.get("draft") ? ("draft_" + urlParams.get("draft")) : "default");

    // Tự động nhận diện bản cgecom hoặc octosoft nếu đang nạp dữ liệu tương ứng
    const docTitle = (dataVi.docTitle || dataEn.docTitle || "").toLowerCase();
    if (cvKey === "default") {
      if (docTitle.includes("octosoft")) {
        cvKey = "octosoft";
      } else if (docTitle.includes("cgecom")) {
        cvKey = "cgecom";
      }
    }

    const cvRole = currentData.title || "Developer";

    // Tags
    const keyTag = document.getElementById("interviewCvKeyTag");
    const roleTag = document.getElementById("interviewCvRoleTag");
    if (keyTag) keyTag.textContent = cvKey;
    if (roleTag) roleTag.textContent = cvRole;

    // Pitch
    const pitchViBox = document.getElementById("interviewPitchVi");
    const pitchEnBox = document.getElementById("interviewPitchEn");
    if (pitchViBox) pitchViBox.innerHTML = generatePitchVi(dataVi, cvKey);
    if (pitchEnBox) pitchEnBox.innerHTML = generatePitchEn(dataEn, cvKey);

    // Reset Timer display
    resetTimer();

    // Technical Questions
    const cvText = extractTechKeywords(currentData);
    const questions = pickRelevantQuestions(cvText, cvKey);
    const qListContainer = document.getElementById("interviewQuestionsList");
    const formatStarText = (txt) => {
      if (!txt) return "";
      return String(txt).replace(/\n/g, "<br>");
    };

    if (qListContainer) {
      qListContainer.innerHTML = questions.map((q, idx) => `
        <div class="interview-q-card ${isFlashcardMode ? 'flashcard-active' : ''}" data-idx="${idx}">
          <div class="interview-q-header">
            <span class="interview-q-num">Câu ${idx + 1}</span>
            <span class="interview-q-tag">${q.category}</span>
          </div>
          <div class="interview-q-title">❓ ${q.q_vi}</div>
          <div class="interview-flashcard-action" style="${isFlashcardMode ? 'display: block;' : 'display: none;'}">
            <button type="button" class="interview-star-toggle-btn" data-target="star-${idx}">
              👁️ Xem gợi ý STAR
            </button>
          </div>
          <div class="interview-star-box ${isFlashcardMode ? 'hidden-star' : ''}" id="star-${idx}">
            <div class="interview-star-title">🎯 Dàn ý trả lời theo mô hình STAR:</div>
            <div class="interview-star-row">
              <span class="star-badge star-s">S (Bối cảnh)</span>
              <span class="star-desc">${formatStarText(q.star_vi.situation)}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-t">T (Nhiệm vụ)</span>
              <span class="star-desc">${formatStarText(q.star_vi.task)}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-a">A (Hành động)</span>
              <span class="star-desc">${formatStarText(q.star_vi.action)}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-r">R (Kết quả)</span>
              <span class="star-desc">${formatStarText(q.star_vi.result)}</span>
            </div>
          </div>
        </div>
      `).join("");
    }

    // Reverse Questions
    const reverseContainer = document.getElementById("interviewReverseList");
    if (reverseContainer) {
      reverseContainer.innerHTML = REVERSE_QUESTIONS.map((rq, idx) => `
        <div class="interview-reverse-card">
          <div class="interview-reverse-header">
            <span class="interview-reverse-num">Gợi ý #${idx + 1}</span>
            <span class="interview-reverse-type">${rq.title}</span>
          </div>
          <div class="interview-reverse-q">🗣️ "${rq.q}"</div>
          <div class="interview-reverse-why"><b>Mục đích:</b> ${rq.why}</div>
        </div>
      `).join("");
    }

    // Personal Notes
    const notesArea = document.getElementById("interviewNotesTextarea");
    if (notesArea) {
      let savedNotes = localStorage.getItem(`interview_notes_${cvKey}`);
      if (!savedNotes && cvKey === "cgecom") {
        savedNotes = `🎯 CHIẾN LƯỢC TÁC CHIẾN PHỎNG VẤN CG ECOM (10H30 NGÀY 22/09/2026)
📍 Địa điểm: 313/17/6A Phan Huy Ích, An Hội Tây, Gò Vấp, TP. HCM
💼 Vị trí: Full Stack Developer (React / Node.js / E-Commerce)

1. BA VŨ KHÍ CỐT LÕI CẦN THỂ HIỆN:
- E-commerce thực chiến: Tự tin nói về dự án Nền tảng Thương mại Điện tử (xử lý giỏ hàng LocalStorage vs Database, Checkout, tối ưu truy vấn < 2s).
- Năng lực Fullstack: Làm chủ cả Frontend (React/Tailwind CSS) và Backend (Node.js/Express, RESTful API, PostgreSQL/MongoDB/MySQL, Docker).
- Tinh thần không ngại việc: Sẵn sàng hỗ trợ các vấn đề IT nội bộ (máy tính, mạng LAN, máy in) để vận hành công ty trơn tru.

2. CÁCH TRẢ LỜI CÂU HỎI VỀ IT SUPPORT (ĂN ĐIỂM TUYỆT ĐỐI):
"Xuất thân từ ngành Khoa học Máy tính, em nắm vững phần cứng, hệ điều hành và mạng máy tính. Với em, công việc chung của công ty vận hành trơn tru là quan trọng nhất, nên khi team cần, em luôn sẵn sàng xắn tay áo xử lý sự cố mạng, máy tính văn phòng nhanh chóng."

3. BA CÂU HỎI HỎI LẠI SẾP CG ECOM CUỐI BUỔI:
- "Dạ cho em hỏi hệ thống E-commerce hiện tại của CG ECOM đang phục vụ đối tượng khách hàng B2B hay B2C, và định hướng công nghệ sắp tới của team là gì ạ?"
- "Quy trình phát triển và review code trong team Dev của công ty hiện diễn ra như thế nào ạ?"
- "Nếu được nhận vào vị trí này, trong tháng đầu tiên em cần đạt được những cột mốc nào để được coi là hoàn thành xuất sắc nhiệm vụ ạ?"`;
        localStorage.setItem(`interview_notes_${cvKey}`, savedNotes);
      } else if (!savedNotes && cvKey === "octosoft") {
        savedNotes = `🎯 CHIẾN LƯỢC TÁC CHIẾN TEST & PHỎNG VẤN OCTOSOFT (10H00 NGÀY 01/10/2026)
📍 Địa điểm: Tầng 9 - Tòa nhà International Plaza, 343 Phạm Ngũ Lão, P. Bến Thành, Q.1
💼 Vị trí: Full Stack Developer (Sản phẩm: FlowAgentica - AI Agent & Workflow Automation)
📞 Liên hệ: Zalo 0867490600 (Linh Trần) / tuyendung@octosoft.co

🔥 BÀI KIỂM TRA TUYỂN DỤNG FULL STACK 14 CÂU (ĐÃ CÓ TRONG KHO CÂU HỎI & FILE OCTOSOFT_TEST_SOLUTIONS.md):
- Câu 1: Flow API tạo đơn hàng (Sync vs Async Message Queue, Transaction, Idempotency-Key).
- Câu 2: Query triệu dòng chậm dù CPU thấp (I/O Bottleneck, EXPLAIN ANALYZE, Keyset Pagination, Connection Pool).
- Câu 3: JWT 401 & Multi-tab Logout (Refresh Token Rotation race condition, Grace period, Mutex Queue).
- Câu 4: Refactor monolith Node.js/Python (Controller-Service-Repo, RFC 7807 Error, TraceId, Expand-Contract Migration).
- Câu 5: React filter nháy & stale state (AbortController, TanStack Query keepPreviousData).
- Câu 6: State Form phức tạp & Single source of truth (Derived state useMemo, giá & kho từ DB).
- Câu 7: Profiling React list lớn (List Virtualization @tanstack/react-virtual, INP < 50ms).
- Câu 8: RBAC Admin & Bảo mật (FE guard chỉ cho UX, Backend là bảo mật, HttpOnly Cookie).
- Câu 9: Tiếp quản legacy 8 tuần (CI/CD trước, Sentry log, Postgres = ACID, Mongo = Log, AI audit).
- Câu 10: Triage 3 lỗi prod (Tồn kho âm = SELECT FOR UPDATE; 2 đơn = Idempotency; AI rule 'No Log No Proof').
- Câu 11: Feature mơ hồ (OpenAPI Contract trước, chia AI FE & BE song song theo thư mục riêng).
- Câu 12: Review code AI sinh (Check Transaction rollback, IDOR, số âm, Red-Team AI phản biện).
- Câu 13: Quy trình AI-Assisted SDLC (7 bước có Human Approval, cấm AI tự deploy, sanitize log).
- Câu 14: Triage quá tải (Top 1 là Bug Prod, dừng ngay AI refactor module lớn, giao AI đọc log).

1. VŨ KHÍ CỐT LÕI ĐỂ GHI ĐIỂM CAO:
- Về AI Agent & Serverless: Tự tin demo/giải thích dự án CV Editor & AI Automation (Cloudflare Workers + Telegram Bot + Gemini LLM API + GitHub Actions CI/CD). Đây là điểm khớp 100% với định hướng sản phẩm FlowAgentica của OctoSoft!
- Về Backend & API: Trình bày kinh nghiệm thực tế tại Tami Technology (Next.js Route Handlers, Node.js, thiết kế CSDL quan hệ PostgreSQL trên Supabase Cloud).
- Về Fullstack & Database: Luồng đặt hàng E-commerce, xử lý transaction chống race condition, JWT Dual Token an toàn (Access Token + httpOnly Refresh Token).`;
        localStorage.setItem(`interview_notes_${cvKey}`, savedNotes);
      }
      notesArea.value = savedNotes || "";
    }
  }

  /**
   * Gắn sự kiện điều khiển Modal
   */
  function bindModalEvents() {
    const overlay = document.getElementById("interviewModalOverlay");
    const closeBtn = document.getElementById("interviewCloseBtn");
    const closeFooterBtn = document.getElementById("interviewCloseFooterBtn");
    const copyAllBtn = document.getElementById("interviewCopyAllBtn");
    const notesArea = document.getElementById("interviewNotesTextarea");
    const saveStatus = document.getElementById("interviewSaveStatus");

    // Đóng modal
    const closeModal = () => {
      if (overlay) overlay.style.display = "none";
      document.body.style.overflow = "";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener("click", closeModal);

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
      });
    }

    // Phím ESC đóng modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay && overlay.style.display !== "none") {
        closeModal();
      }
    });

    // Chuyển Tab
    const tabBtns = document.querySelectorAll(".interview-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetTab = btn.getAttribute("data-tab");
        document.querySelectorAll(".interview-tab-pane").forEach(pane => {
          pane.classList.remove("active");
        });

        const activePane = document.getElementById(`interviewPane-${targetTab}`);
        if (activePane) activePane.classList.add("active");
      });
    });

    // Quick copy từng khối
    document.querySelectorAll(".interview-quick-copy").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        const textToCopy = targetEl.innerText || targetEl.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const oldText = btn.textContent;
          btn.textContent = "✔ Đã sao chép!";
          btn.style.background = "#10b981";
          btn.style.color = "#fff";
          setTimeout(() => {
            btn.textContent = oldText;
            btn.style.background = "";
            btn.style.color = "";
          }, 2000);
        });
      });
    });

    // Sao chép toàn bộ cẩm nang ôn tập
    if (copyAllBtn) {
      copyAllBtn.addEventListener("click", () => {
        const pitchVi = document.getElementById("interviewPitchVi")?.innerText || "";
        const cvKey = window.cvVersion || "default";

        let fullText = `=== CẨM NANG PHỎNG VẤN 1-CLICK (BẢN CV: ${cvKey.toUpperCase()}) ===\n\n`;
        fullText += `--- 1. BÀI GIỚI THIỆU BẢN THÂN (ELEVATOR PITCH) ---\n${pitchVi}\n\n`;
        fullText += `--- 2. CÂU HỎI HỎI LẠI NHÀ TUYỂN DỤNG ---\n`;
        REVERSE_QUESTIONS.forEach((rq, i) => {
          fullText += `${i + 1}. ${rq.q}\n   (${rq.why})\n`;
        });

        const notes = notesArea ? notesArea.value.trim() : "";
        if (notes) {
          fullText += `\n--- 3. GHI CHÚ RIÊNG ---\n${notes}\n`;
        }

        navigator.clipboard.writeText(fullText).then(() => {
          const old = copyAllBtn.textContent;
          copyAllBtn.textContent = "✔ Đã sao chép toàn bộ!";
          copyAllBtn.style.background = "#10b981";
          setTimeout(() => {
            copyAllBtn.textContent = old;
            copyAllBtn.style.background = "";
          }, 2200);
        });
      });
    }

    // Tự động lưu ghi chú phỏng vấn vào localStorage
    let saveTimeout = null;
    if (notesArea) {
      notesArea.addEventListener("input", () => {
        if (saveStatus) {
          saveStatus.textContent = "Đang lưu...";
          saveStatus.style.color = "#eab308";
        }

        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
          const cvKey = window.cvVersion || "default";
          localStorage.setItem(`interview_notes_${cvKey}`, notesArea.value);
          if (saveStatus) {
            saveStatus.textContent = "✔ Đã lưu tự động";
            saveStatus.style.color = "#10b981";
          }
        }, 600);
      });
    }

    // ===================================================================
    // EVENTS: TIMER LUYỆN NÓI
    // ===================================================================
    const timerToggleBtn = document.getElementById("interviewTimerToggleBtn");
    const timerResetBtn = document.getElementById("interviewTimerResetBtn");
    const timerPresets = document.querySelectorAll(".interview-timer-preset");

    if (timerToggleBtn) {
      timerToggleBtn.addEventListener("click", () => {
        startTimer();
      });
    }

    if (timerResetBtn) {
      timerResetBtn.addEventListener("click", () => {
        resetTimer();
      });
    }

    timerPresets.forEach(btn => {
      btn.addEventListener("click", () => {
        timerPresets.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        timerDuration = parseInt(btn.getAttribute("data-time"), 10) || 60;
        resetTimer();
      });
    });

    // ===================================================================
    // EVENTS: FLASHCARD STAR TOGGLE
    // ===================================================================
    const flashcardBtn = document.getElementById("interviewFlashcardBtn");
    if (flashcardBtn) {
      flashcardBtn.addEventListener("click", () => {
        isFlashcardMode = !isFlashcardMode;
        flashcardBtn.classList.toggle("active", isFlashcardMode);
        flashcardBtn.textContent = isFlashcardMode ? "📖 Tắt Flashcard (Hiện tất cả)" : "🗂️ Bật Flashcard (Tự luyện)";

        const qCards = document.querySelectorAll(".interview-q-card");
        qCards.forEach(card => {
          const actionBox = card.querySelector(".interview-flashcard-action");
          const toggleBtn = card.querySelector(".interview-star-toggle-btn");
          const starBox = card.querySelector(".interview-star-box");
          if (isFlashcardMode) {
            card.classList.add("flashcard-active");
            if (actionBox) actionBox.style.display = "block";
            if (toggleBtn) {
              toggleBtn.textContent = "👁️ Xem gợi ý STAR";
              toggleBtn.classList.remove("opened");
            }
            if (starBox) starBox.classList.add("hidden-star");
          } else {
            card.classList.remove("flashcard-active");
            if (actionBox) actionBox.style.display = "none";
            if (starBox) starBox.classList.remove("hidden-star");
          }
        });
      });
    }

    // Ủy quyền click nút "Xem gợi ý STAR" cho từng câu hỏi
    const qListContainer = document.getElementById("interviewQuestionsList");
    if (qListContainer) {
      qListContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".interview-star-toggle-btn");
        if (!btn) return;
        const targetId = btn.getAttribute("data-target");
        const starBox = document.getElementById(targetId);
        if (!starBox) return;

        const isHidden = starBox.classList.toggle("hidden-star");
        if (isHidden) {
          btn.textContent = "👁️ Xem gợi ý STAR";
          btn.classList.remove("opened");
        } else {
          btn.textContent = "🙈 Ẩn gợi ý STAR";
          btn.classList.add("opened");
        }
      });
    }
  }

  /**
   * Mở modal cẩm nang phỏng vấn
   */
  window.openInterviewPrepModal = function () {
    injectInterviewModal();
    populateModal();
    const overlay = document.getElementById("interviewModalOverlay");
    if (overlay) {
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  };

  // Tự động gán sự kiện cho nút trigger khi DOM sẵn sàng
  document.addEventListener("DOMContentLoaded", () => {
    const triggerBtn = document.getElementById("interviewPrepBtn");
    if (triggerBtn) {
      triggerBtn.addEventListener("click", () => {
        window.openInterviewPrepModal();
      });
    }
  });
})();
