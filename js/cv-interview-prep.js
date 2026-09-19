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
            <button type="button" class="interview-tab-btn" data-tab="questions">🎯 5 Câu hỏi Kỹ thuật (STAR)</button>
            <button type="button" class="interview-tab-btn" data-tab="reverse">❓ Hỏi lại Nhà tuyển dụng</button>
            <button type="button" class="interview-tab-btn" data-tab="notes">📝 Ghi chú Phỏng vấn</button>
          </div>

          <!-- Body Content -->
          <div class="interview-modal-body">
            <!-- TAB 1: PITCH -->
            <div class="interview-tab-pane active" id="interviewPane-pitch">
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
              <div class="interview-help-banner">
                💡 <b>Mô hình STAR giúp câu trả lời chặt chẽ:</b> <b>S</b>ituation (Bối cảnh) &rarr; <b>T</b>ask (Nhiệm vụ) &rarr; <b>A</b>ction (Hành động bạn trực tiếp làm) &rarr; <b>R</b>esult (Kết quả đo lường được).
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
    const title = d.title || "Developer";
    const cleanTitle = title.replace(/\(.*?\)/g, "").trim();

    // Rút trích 3 kỹ năng nổi bật
    let topSkills = "Next.js, Node.js, RESTful API và cơ sở dữ liệu PostgreSQL";
    if (d.skills && d.skills.length > 0) {
      const firstGroup = d.skills[0];
      if (firstGroup && firstGroup.items) {
        topSkills = firstGroup.items.split(",").slice(0, 4).join(", ").trim();
      }
    }

    return `Dạ chào Anh/Chị, em là <b>Trương Đình Anh</b>, tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Định hướng của em là phát triển chuyên sâu ở vai trò <b>${cleanTitle}</b>.

Trong quá trình học tập và làm việc, em đã tham gia phát triển dự án thực tế tại Công ty TNHH Công nghệ TAMI, nơi em trực tiếp xây dựng và tối ưu hơn 15 RESTful API endpoints với Next.js và thiết kế CSDL PostgreSQL trên nền tảng Supabase Cloud.

Thế mạnh của em là nắm vững nền tảng <b>${topSkills}</b>, đồng thời chủ động ứng dụng sức mạnh của các công cụ AI (như Cursor, Claude) vào quy trình lập trình để tăng tốc độ phát triển sản phẩm mà vẫn làm chủ mã nguồn. 

Em ứng tuyển vào công ty vì nhận thấy định hướng công nghệ và môi trường làm việc của Quý công ty rất tương đồng với thế mạnh của em. Em tự tin với tinh thần trách nhiệm và khả năng tự học nhanh, em có thể nhanh chóng bắt nhịp và đóng góp hiệu quả vào các dự án của team ngay khi nhận việc ạ.`;
  }

  /**
   * Sinh bài pitch 30s Tiếng Anh
   */
  function generatePitchEn(d, cvKey) {
    const title = d.title || "Developer";
    const cleanTitle = title.replace(/\(.*?\)/g, "").trim();

    let topSkills = "Next.js, Node.js, RESTful API, and PostgreSQL";
    if (d.skills && d.skills.length > 0) {
      const firstGroup = d.skills[0];
      if (firstGroup && firstGroup.items) {
        topSkills = firstGroup.items.split(",").slice(0, 4).join(", ").trim();
      }
    }

    return `Hello, my name is <b>Truong Dinh Anh</b>. I graduated with a degree in Computer Science from Ho Chi Minh City Open University, and I am focused on growing as a professional <b>${cleanTitle}</b>.

During my hands-on internship at TAMI Technology, I was responsible for developing and optimizing 15+ RESTful API endpoints using Next.js and designing relational schemas with PostgreSQL on Supabase Cloud.

My core strengths lie in <b>${topSkills}</b>. Additionally, I embrace an AI-first development mindset, utilizing tools like Claude and Cursor to boost productivity while strictly adhering to Clean Code and best security practices.

I am very excited about this opportunity because my technical background and proactive attitude align strongly with your team's current goals. I am confident in my ability to onboard quickly and make meaningful contributions from day one.`;
  }

  /**
   * Chọn 5 câu hỏi phỏng vấn phù hợp nhất với bản CV hiện tại
   */
  function pickRelevantQuestions(cvText) {
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

    // Lấy top 5 câu hỏi có điểm cao nhất
    return scoredQuestions.slice(0, 5).map(sq => sq.item);
  }

  /**
   * Cập nhật dữ liệu vào Modal khi mở
   */
  function populateModal() {
    const lang = (window.currentLang === "en") ? "en" : "vi";
    const dataVi = (window.cvData && window.cvData.vi) ? window.cvData.vi : {};
    const dataEn = (window.cvData && window.cvData.en) ? window.cvData.en : {};
    const currentData = (lang === "en") ? dataEn : dataVi;

    const cvKey = window.cvVersion || "default";
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

    // Technical Questions
    const cvText = extractTechKeywords(currentData);
    const questions = pickRelevantQuestions(cvText);
    const qListContainer = document.getElementById("interviewQuestionsList");

    if (qListContainer) {
      qListContainer.innerHTML = questions.map((q, idx) => `
        <div class="interview-q-card">
          <div class="interview-q-header">
            <span class="interview-q-num">Câu ${idx + 1}</span>
            <span class="interview-q-tag">${q.category}</span>
          </div>
          <div class="interview-q-title">❓ ${q.q_vi}</div>
          <div class="interview-star-box">
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
      const savedNotes = localStorage.getItem(`interview_notes_${cvKey}`) || "";
      notesArea.value = savedNotes;
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
