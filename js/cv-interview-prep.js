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
      keywords: ["ai", "cursor", "claude", "llm", "copilot", "prompt", "vibe coding", "automation"],
      category: "AI-First & Productivity",
      q_vi: "Bạn tự nhận có tư duy AI-first và tận dụng các công cụ như Cursor, Claude. Bạn sử dụng AI như thế nào để vừa tăng tốc độ code vừa đảm bảo chất lượng và tính bảo mật?",
      star_vi: {
        situation: "Công nghệ AI phát triển nhanh, nếu chỉ copy-paste mù quáng sẽ dễ tạo ra code rác, tiềm ẩn lỗi logic và rò rỉ bảo mật.",
        task: "Tận dụng AI như một trợ lý lập trình cấp cao (pair programmer) để tăng năng suất gấp 2-3 lần nhưng vẫn làm chủ 100% mã nguồn.",
        action: "Áp dụng quy trình: (1) Tự thiết kế kiến trúc và luồng dữ liệu trước; (2) Dùng AI để viết boilerplate, sinh mock data, viết unit test và kiểm tra edge cases; (3) Tự tay code review từng dòng code AI đề xuất, kiểm thử kỹ lưỡng và tuyệt đối không đưa secret keys lên prompt.",
        result: "Rút ngắn thời gian phát triển tính năng từ nhiều ngày xuống vài giờ, đồng thời mã nguồn vẫn sạch và tuân thủ chuẩn Clean Code."
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
      title: "Về quy trình kỹ thuật & Code Review",
      q: "Dạ cho em hỏi quy trình phát triển và review code (code review, CI/CD pipeline) của đội ngũ kỹ thuật tại công ty hiện đang diễn ra như thế nào ạ?",
      why: "Thể hiện bạn quan tâm đến chất lượng code, làm việc nhóm bài bản và quy trình chuyên nghiệp."
    },
    {
      title: "Về mục tiêu và thử thách của team",
      q: "Thử thách kỹ thuật hoặc bài toán lớn nhất mà team mình đang tập trung giải quyết trong quý tới là gì ạ?",
      why: "Chứng minh bạn có tư duy hướng tới mục tiêu chung và sẵn sàng đối mặt với thử thách thực tế."
    },
    {
      title: "Về kỳ vọng với nhân sự mới",
      q: "Đối với một nhân sự mới ở vị trí này, tiêu chí quan trọng nhất để Anh/Chị đánh giá là hoàn thành xuất sắc nhiệm vụ trong 2-3 tháng đầu tiên là gì ạ?",
      why: "Cho thấy bạn là người chủ động, có định hướng rõ ràng và muốn tạo ra giá trị ngay từ đầu."
    },
    {
      title: "Về cơ hội học tập & Ứng dụng công nghệ mới",
      q: "Đội ngũ kỹ thuật của công ty có lộ trình đào tạo, chia sẻ nội bộ (tech sharing) hoặc chính sách khuyến khích ứng dụng các công cụ mới (như AI, Cloud) như thế nào ạ?",
      why: "Khẳng định tinh thần ham học hỏi và mong muốn gắn bó, phát triển lâu dài cùng tổ chức."
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
            <button type="button" class="interview-tab-btn" data-tab="questions">🎯 Câu hỏi Kỹ thuật (STAR)</button>
            <button type="button" class="interview-tab-btn" data-tab="reverse">❓ Hỏi lại Nhà tuyển dụng</button>
            <button type="button" class="interview-tab-btn" data-tab="notes">📝 Ghi chú Phỏng vấn</button>
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

            <!-- TAB 2: QUESTIONS -->
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
      return `Lời đầu tiên, em xin cảm ơn Anh/Chị và Quý công ty <b>Octo Software</b> đã dành thời gian xem hồ sơ của em ạ.

Em tên là <b>Trương Đình Anh</b>, tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Em định hướng phát triển chuyên sâu ở vai trò <b>Full-Stack Developer</b> với thế mạnh kết hợp cả <b>React, Next.js</b> ở Frontend và <b>Node.js, Express</b> cùng các hệ CSDL quan hệ lẫn NoSQL (<b>PostgreSQL, MongoDB, MySQL</b>) ở Backend.

Đặc biệt, em rất ấn tượng với định hướng phát triển hệ thống <b>AI Agent (flowagentica.com)</b> của Octo Software. Bản thân em có tư duy <b>AI-First</b> và đã trực tiếp xây dựng nền tảng tự động hóa Serverless trên Cloudflare Workers tích hợp AI Agent qua Telegram Bot và các mô hình LLM API (Gemini/OpenAI), thiết lập pipeline CI/CD với GitHub Actions tự sinh mã nguồn. Ngoài ra, em từng thực tập 6 tháng tại TAMI Technology xây dựng và tối ưu hơn 25+ RESTful API endpoints và thiết kế CSDL Supabase PostgreSQL.

Với nền tảng kỹ thuật sẵn có và tính kỷ luật trong quy trình Git, em tin rằng mình có thể nhanh chóng bắt nhịp và đóng góp hiệu quả vào các dự án của Octo Software ạ.`;
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
        "ai_vibe_coding",
        "rest_api_auth",
        "sql_vs_nosql_ecommerce",
        "nextjs_router",
        "git_testing_deploy",
        "database_optimization_perf",
        "jwt_rbac_auth_security"
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
              <span class="star-desc">${q.star_vi.situation}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-t">T (Nhiệm vụ)</span>
              <span class="star-desc">${q.star_vi.task}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-a">A (Hành động)</span>
              <span class="star-desc">${q.star_vi.action}</span>
            </div>
            <div class="interview-star-row">
              <span class="star-badge star-r">R (Kết quả)</span>
              <span class="star-desc">${q.star_vi.result}</span>
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
