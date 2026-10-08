/**
 * ===================================================================
 * CV APPLICATION EMAIL GENERATOR (TẠO EMAIL ỨNG TUYỂN 1-CLICK)
 * ===================================================================
 * Tự động phân tích phiên bản CV hiện tại (và JD nếu có) để sinh email
 * ứng tuyển hoàn chỉnh theo form chuẩn đã tối ưu (Tiêu đề + 3 gạch đầu
 * dòng kinh nghiệm đắt giá + chữ ký chuyên nghiệp).
 * 
 * Hỗ trợ 1-click Copy nội dung, Copy Subject, Mở trực tiếp Gmail & mailto.
 */

(function () {
  // Dữ liệu profile ứng viên mặc định
  const CANDIDATE = {
    name: "Trương Đình Anh",
    phone: "0923202861",
    email: "tdinhanh.it@gmail.com",
    github: "https://github.com/dinhanhhhh",
    address: "Thủ Đức, TP. Hồ Chí Minh",
    school: "Đại học Mở TP.HCM"
  };

  // Ánh xạ thông tin công ty và vị trí từ cvVersion
  const VERSION_MAP = {
    octosoft: {
      company: "CÔNG TY OCTO SOFTWARE",
      position: "Full Stack Developer",
      recipient: "Bộ phận Tuyển dụng Octo Software",
      contact: "tuyendung@octosoft.co",
      profileType: "ai_fullstack"
    },
    cgecom: {
      company: "CÔNG TY TNHH CG ECOM",
      position: "Full Stack Developer",
      recipient: "Anh/Chị phụ trách tuyển dụng",
      contact: "",
      profileType: "ecommerce_fullstack"
    },
    favolist5: {
      company: "FAVOLIST5 ASIA",
      position: "Intern QA/QC Tester",
      recipient: "Chị Giang cùng Bộ phận Tuyển dụng",
      contact: "giang.ha@favolist5.com",
      profileType: "qa_tester"
    },
    banviet: {
      company: "TRƯỜNG ĐẠI HỌC GIA ĐỊNH",
      position: "Chuyên viên IT / Web Developer",
      recipient: "Hội đồng Tuyển dụng",
      contact: "",
      profileType: "it_support_web"
    },
    digifytech: {
      company: "DIGIFYTECH",
      position: "Backend Developer Intern",
      recipient: "Bộ phận Tuyển dụng",
      contact: "",
      profileType: "backend_dev"
    },
    onhandbi: {
      company: "ON HAND BI",
      position: "Full Stack Developer",
      recipient: "Anh/Chị phụ trách tuyển dụng",
      contact: "",
      profileType: "ecommerce_fullstack"
    },
    lienkhuong: {
      company: "CẢNG HÀNG KHÔNG LIÊN KHƯƠNG",
      position: "Kỹ sư CNTT",
      recipient: "Hội đồng Tuyển dụng",
      contact: "",
      profileType: "it_support_web"
    },
    "webdev-intern": {
      company: "Hiring Team",
      position: "Web Development Intern",
      recipient: "Hiring Manager",
      contact: "",
      profileType: "webdev_intern"
    }
  };

  // State của modal
  let currentTone = "tech"; // 'tech' | 'short' | 'warm'
  let currentLang = "vi";   // 'vi' | 'en'

  // ----------------------------------------------------
  // Helpers
  // ----------------------------------------------------
  function getCurrentCvKey() {
    if (window.cvVersion) return window.cvVersion;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("type") || "default";
  }

  function getCandidateInfo() {
    let name = CANDIDATE.name;
    let phone = CANDIDATE.phone;
    let email = CANDIDATE.email;
    let github = CANDIDATE.github;

    if (window.cvData && window.cvData[currentLang]) {
      const data = window.cvData[currentLang];
      if (data.name) name = data.name;
      if (Array.isArray(data.contact)) {
        data.contact.forEach(c => {
          if (c.icon === "phone") phone = c.text;
          if (c.icon === "email") email = c.text;
          if (c.icon === "github") github = c.link || ("https://" + c.text);
        });
      }
    }
    return { name, phone, email, github };
  }

  // ----------------------------------------------------
  // Bullet Points Generator (Trích xuất 3 điểm mạnh nhất)
  // ----------------------------------------------------
  function generateHighlights(profileType, jdText, tone, lang) {
    const jdLower = (jdText || "").toLowerCase();
    const isQa = profileType === "qa_tester" || jdLower.includes("qa") || jdLower.includes("tester") || jdLower.includes("test case");

    const isAiFullstack = profileType === "ai_fullstack" || jdLower.includes("octo") || jdLower.includes("agent");

    if (lang === "vi") {
      if (isAiFullstack) {
        if (tone === "short") {
          return [
            "Kinh nghiệm Full-Stack: Thành thạo React, Next.js, Node.js/Express; làm chủ CSDL PostgreSQL (Supabase) và MongoDB, tối ưu hóa truy vấn và API.",
            "Tích hợp AI & AI Agent: Tự phát triển nền tảng tự động hóa Serverless (Cloudflare Workers) kết nối Telegram Bot, LLM API (Gemini/OpenAI) và CI/CD GitHub Actions.",
            "Tác phong kỹ thuật: Quản lý Git chặt chẽ, tư duy phân tích hệ thống độc lập, có thể nhận việc và bắt nhịp dự án ngay."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm Full-Stack thực chiến: Đã xây dựng và tối ưu hệ thống RESTful APIs, quản trị CSDL PostgreSQL và phát triển các sản phẩm web responsive hoàn chỉnh.",
            "Đam mê AI & Tự động hóa: Nhạy bén tích hợp AI Agent và LLM API vào quy trình phát triển thực tế, tối ưu năng suất làm việc gấp nhiều lần.",
            "Tinh thần trách nhiệm & Đồng hành: Tác phong làm việc chủ động, kỷ luật mã nguồn cao và rất mong muốn được cống hiến lâu dài cùng Octo Software."
          ];
        } else {
          return [
            "Nền tảng Full-Stack & CSDL: Thành thạo React.js, Next.js, Node.js/Express; có kinh nghiệm thiết kế CSDL quan hệ PostgreSQL và NoSQL MongoDB, xây dựng và tối ưu hệ thống RESTful APIs tại Công nghệ TAMI.",
            "Tích hợp AI & AI Agent Workflow: Tự phát triển hệ thống tự động hóa Serverless trên Cloudflare Workers kết nối Telegram Bot Bridge và LLM APIs (Gemini/OpenAI), tự động hóa pipeline CI/CD với GitHub Actions.",
            "Kỷ luật mã nguồn & Git: Quản lý source code bài bản bằng Git, khả năng đọc hiểu/debug lỗi nhanh, tư duy giải pháp thực tế và sẵn sàng nhận việc ngay."
          ];
        }
      } else if (isQa) {
        if (tone === "short") {
          return [
            "Manual & API Testing: Thiết kế test case, kiểm thử chức năng và kiểm thử hệ thống RESTful APIs bằng Postman tại Công nghệ TAMI.",
            "Database (SQL): Nắm vững truy vấn PostgreSQL, MongoDB để trực tiếp kiểm tra và đối soát tính toàn vẹn của dữ liệu.",
            "Ứng dụng AI & Tác phong: Dùng AI hỗ trợ sinh test data, rà soát edge cases; sẵn sàng làm việc linh hoạt (full-time/part-time >= 4 ngày/tuần)."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm kiểm thử thực tế: Thiết kế test case chặt chẽ, kiểm thử luồng nghiệp vụ và hệ thống RESTful APIs bằng Postman tại Công ty TNHH Công nghệ TAMI.",
            "Đối soát dữ liệu chuẩn xác: Thành thạo truy vấn SQL trên PostgreSQL và MongoDB, giúp phát hiện sớm các lỗi dữ liệu trước khi bàn giao.",
            "Tác phong cầu thị & Năng động: Nhạy bén áp dụng công cụ AI tăng tốc độ test, tinh thần trách nhiệm cao và sẵn sàng đồng hành lâu dài cùng Quý công ty."
          ];
        } else {
          // tech
          return [
            "Manual & API Testing: Thành thạo thiết kế test scenario, boundary value analysis và kiểm thử chức năng cho hệ thống RESTful APIs bằng Postman trong dự án thực tế tại Công nghệ TAMI.",
            "Truy vấn cơ sở dữ liệu (SQL): Nắm vững cú pháp SQL trên PostgreSQL và MongoDB để trực tiếp kiểm tra, đối soát tính toàn vẹn và nhất quán của dữ liệu.",
            "Ứng dụng AI nâng cao năng suất: Chủ động kết hợp ChatGPT và Gemini để sinh dữ liệu mẫu, rà soát edge cases và cải thiện độ bao phủ của bộ test."
          ];
        }
      } else {
        // Developer / Fullstack / Backend / Frontend
        if (tone === "short") {
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai hệ thống RESTful APIs, thiết kế cơ sở dữ liệu PostgreSQL trên Supabase Cloud tại Cty TNHH Công nghệ TAMI.",
            "Dự án hoàn chỉnh: Tự phát triển nền tảng E-commerce với React/Tailwind CSS và Node.js/Express/MongoDB, đóng gói Docker, triển khai CI/CD tối ưu tải trang dưới 2s.",
            "Kỹ năng & Tác phong: Thành thạo Git, sẵn sàng hỗ trợ các tác vụ IT nội bộ và có thể nhận việc ngay khi có yêu cầu."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm dự án thực tế: Đã tham gia phát triển hệ thống và xây dựng các dịch vụ RESTful APIs, tích hợp xác thực bảo mật Google OAuth tại Công ty TNHH Công nghệ TAMI.",
            "Năng lực tự học & Sản phẩm thực tế: Tự xây dựng trọn vẹn nền tảng web ứng dụng React và Node.js, luôn chú trọng trải nghiệm người dùng và hiệu năng mã nguồn.",
            "Tinh thần trách nhiệm & Cầu tiến: Luôn chủ động giải quyết bài toán kỹ thuật, sẵn sàng học hỏi công nghệ mới và đóng góp hết mình cho sự phát triển của công ty."
          ];
        } else {
          // tech
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai hệ thống RESTful APIs hoàn chỉnh, thiết kế database PostgreSQL trên Supabase Cloud, tích hợp xác thực Google (NextAuth) trong dự án thực tế tại Công ty TNHH Công nghệ TAMI.",
            "Dự án E-commerce / Web App: Tự phát triển hoàn chỉnh một nền tảng thương mại điện tử (danh mục sản phẩm, giỏ hàng, checkout) với React/Tailwind CSS ở frontend và Node.js/Express/MongoDB ở backend, đóng gói Docker và triển khai CI/CD.",
            "Nền tảng kỹ thuật & AI: Nắm vững JavaScript/TypeScript, RESTful API, Docker, chủ động ứng dụng AI nâng cao năng suất code và linh hoạt hỗ trợ kỹ thuật IT nội bộ."
          ];
        }
      }
    } else {
      // English
      if (isAiFullstack) {
        return [
          "Full-Stack & Database Expertise: Proficient in React, Next.js, Node.js/Express; hands-on experience designing PostgreSQL (Supabase) & MongoDB schemas and robust RESTful APIs at TAMI Technology.",
          "AI Agent & Workflow Integration: Built an autonomous agent workflow on Cloudflare Workers integrating LLM APIs (Gemini/OpenAI) and Telegram Bot with automated GitHub Actions CI/CD pipelines.",
          "Technical Discipline & Git: Strong command of Git workflows, requirement breakdown, clean code practices, and ready to contribute to Octo Software immediately."
        ];
      } else if (isQa) {
        return [
          "Manual & API Testing: Proficient in writing test cases, test scenarios, and executing testing for RESTful APIs using Postman at TAMI Technology.",
          "Database Verification (SQL): Strong SQL skills on PostgreSQL and MongoDB to query and ensure data integrity.",
          "AI-Assisted & Proactive: Leveraged AI tools (ChatGPT, Gemini) to generate mock data and edge case suites; ready for full-time/part-time employment immediately."
        ];
      } else {
        return [
          "Hands-on Experience: Designed and deployed robust RESTful APIs, managed PostgreSQL on Supabase Cloud, and integrated Google OAuth at TAMI Technology.",
          "Full-Stack E-commerce Project: Built an end-to-end e-commerce platform with React, Node.js, Express, MongoDB, containerized with Docker and deployed via CI/CD.",
          "Technical Foundation & Problem Solving: Strong command of modern JavaScript/TypeScript, Git workflow, AI coding assistants, and ready to adapt quickly to your tech stack."
        ];
      }
    }
  }

  // ----------------------------------------------------
  // Email Generator Function
  // ----------------------------------------------------
  function generateEmail(opts) {
    const { company, position, recipient, jdText, tone, lang } = opts;
    const candidate = getCandidateInfo();
    const highlights = generateHighlights(opts.profileType, jdText, tone, lang);

    const compName = company || (lang === "vi" ? "Quý công ty" : "your company");
    const posTitle = position || (lang === "vi" ? "Vị trí tuyển dụng" : "the position");
    const recName = recipient || (lang === "vi" ? `Bộ phận Tuyển dụng ${compName}` : `Hiring Team at ${compName}`);

    if (lang === "vi") {
      const subject = (opts.profileType === "ai_fullstack" || (company && company.includes("OCTO")))
        ? `[Full Stack Developer] - ${candidate.name}`
        : `[Ứng tuyển] ${posTitle} - ${candidate.name}`;
      
      let intro = `Kính gửi ${recName},\n\nQua thông tin tuyển dụng vị trí ${posTitle} của Quý công ty, em nhận thấy yêu cầu công việc rất phù hợp với định hướng và nền tảng kỹ thuật của bản thân. Em xin phép được gửi hồ sơ ứng tuyển vào vị trí này.`;

      let pointsHeader = "Một số điểm nổi bật trong kinh nghiệm và kỹ năng của em:";
      let pointsText = highlights.map(h => `• ${h}`).join("\n");

      let availability = "Em có thể sắp xếp làm việc Full-time và sẵn sàng nhận việc ngay khi Quý công ty có yêu cầu.";
      let attachment = "Em xin gửi kèm CV chi tiết để Anh/Chị tiện tham khảo thêm về kinh nghiệm và các sản phẩm em đã thực hiện.";

      let closing = `Em rất mong có cơ hội được trao đổi trực tiếp cùng Anh/Chị trong buổi phỏng vấn sắp tới.\n\nKính chúc Anh/Chị một ngày làm việc hiệu quả và nhiều niềm vui!`;

      let signOff = `Trân trọng,\n${candidate.name}\nSố điện thoại: ${candidate.phone}\nEmail: ${candidate.email}`;

      const body = `${intro}\n\n${pointsHeader}\n\n${pointsText}\n\n${availability}\n${attachment}\n\n${closing}\n\n${signOff}`;

      return { subject, body };
    } else {
      const subject = `[Job Application] ${posTitle} - ${candidate.name}`;

      let intro = `Dear ${recName},\n\nI am writing to express my strong interest in the ${posTitle} opening at ${compName}. With my technical background and hands-on project experience, I believe I can make an immediate and positive contribution to your team.`;

      let pointsHeader = "Key highlights of my qualifications:";
      let pointsText = highlights.map(h => `• ${h}`).join("\n");

      let availability = "I am available to start immediately and excited to commit full-time to the team.";
      let attachment = "I have attached my detailed CV for your review.";

      let closing = `Thank you for your time and consideration. I look forward to the opportunity to discuss my qualifications further in an interview.`;

      let signOff = `Sincerely,\n${candidate.name}\nPhone: ${candidate.phone}\nEmail: ${candidate.email}`;

      const body = `${intro}\n\n${pointsHeader}\n\n${pointsText}\n\n${availability}\n${attachment}\n\n${closing}\n\n${signOff}`;

      return { subject, body };
    }
  }

  // ----------------------------------------------------
  // I18N Dictionary & Templates Helper
  // ----------------------------------------------------
  const I18N = {
    vi: {
      modalTitle: "✉️ Thư & Email Ứng Tuyển",
      tabEmail: "⚡ Email gửi nhanh (1-Click)",
      tabCover: "📄 Thư giới thiệu (Cover Letter)",
      subtitleEmail: "Soạn nhanh email ứng tuyển 1-click với 3 điểm mạnh nhất theo CV & JD để gửi Nhà tuyển dụng.",
      subtitleCover: "Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.",
      configTitle: "⚙️ Thông tin ứng tuyển",
      lblCompany: "Tên Công Ty / Doanh Nghiệp:",
      lblPosition: "Vị Trí Ứng Tuyển:",
      lblRecipient: "Kính Gửi (Người nhận):",
      lblEmail: "Email Nhà Tuyển Dụng (Để mở Gmail gửi luôn):",
      lblTone: "Phong Cách Văn Phong (Tone):",
      toneTech: "💻 Kỹ Thuật & Số Liệu",
      toneShort: "⚡ Ngắn Gọn & Súc Tích",
      toneWarm: "😊 Nhiệt Huyết & Cầu Tiến",
      lblJd: "Bản mô tả công việc (JD) tùy chọn:",
      jdPlaceholder: "Dán yêu cầu tuyển dụng vào đây để hệ thống tự tối ưu từ khóa phù hợp...",
      previewTitle: "✉️ Email Hoàn Chỉnh (Đã may đo)",
      copySubject: "📋 Chép Tiêu Đề",
      copyBody: "📋 Chép Nội Dung",
      subjectTag: "Tiêu đề:",
      copyAll: "📋 Sao Chép Toàn Bộ",
      gmailBtn: "🚀 Mở Gmail Soạn Luôn",
      mailtoBtn: "✉️ Mở Mail Client",
      tmplLabel: "Mẫu thư:",
      footerHint: '💡 <b>Mẹo:</b> Chọn tab <b>"Email gửi nhanh"</b> để lấy 3 gạch đầu dòng gửi Gmail, hoặc tab <b>"Thư giới thiệu"</b> để lấy bản thư dài trang trọng.',
      closeBtn: "Đóng ✓"
    },
    en: {
      modalTitle: "✉️ Cover Letter & Application Email",
      tabEmail: "⚡ Quick Email (1-Click)",
      tabCover: "📄 Cover Letter",
      subtitleEmail: "Quickly generate a 1-click application email tailored with your top qualifications for recruiters.",
      subtitleCover: "A concise, well-written cover letter or application email will help you stand out and make a professional impression on recruiters.",
      configTitle: "⚙️ Application Details",
      lblCompany: "Company Name:",
      lblPosition: "Target Position:",
      lblRecipient: "Recipient (Dear):",
      lblEmail: "Recruiter Email (To open Gmail directly):",
      lblTone: "Tone / Writing Style:",
      toneTech: "💻 Tech Focus & Metrics",
      toneShort: "⚡ Concise & Direct",
      toneWarm: "😊 Enthusiastic & Cultural",
      lblJd: "Optional Job Description (JD):",
      jdPlaceholder: "Paste the job requirements here to tailor keywords...",
      previewTitle: "✉️ Tailored Application Email",
      copySubject: "📋 Copy Subject",
      copyBody: "📋 Copy Body",
      subjectTag: "Subject:",
      copyAll: "📋 Copy All",
      gmailBtn: "🚀 Open in Gmail",
      mailtoBtn: "✉️ Open Mail Client",
      tmplLabel: "Letter Template:",
      footerHint: '💡 <b>Tip:</b> Choose <b>"Quick Email"</b> for concise bullets to send via Gmail, or <b>"Cover Letter"</b> for a formal full-length letter.',
      closeBtn: "Close ✓"
    }
  };

  function parseEmailTemplate(text) {
    if (!text || typeof text !== "string") return null;
    const trimmed = text.trim();
    const m = trimmed.match(/^\[(?:Subject|Tiêu đề(?: Email)?):\s*([^\]]+)\]\s*\n+([\s\S]*)$/i);
    if (m) {
      return { subject: m[1].trim(), body: m[2].trim() };
    }
    const bracketMatch = trimmed.match(/^\[([^\]]+)\]\s*\n+([\s\S]*)$/);
    if (bracketMatch) {
      return { subject: bracketMatch[1].trim(), body: bracketMatch[2].trim() };
    }
    return { subject: "", body: trimmed };
  }

  function getCustomTemplate(lang, tone) {
    if (!window.cvData || !window.cvData[lang]) return null;
    const data = window.cvData[lang];

    // 1. Check emailTemplates
    if (data.emailTemplates && typeof data.emailTemplates === "object") {
      let candidateText = null;
      if (tone === "short" && data.emailTemplates.short) {
        candidateText = data.emailTemplates.short;
      } else if (tone === "tech" && (data.emailTemplates.tech || data.emailTemplates.full)) {
        candidateText = data.emailTemplates.tech || data.emailTemplates.full;
      } else if (tone === "warm" && (data.emailTemplates.warm || data.emailTemplates.full)) {
        candidateText = data.emailTemplates.warm || data.emailTemplates.full;
      } else if (data.emailTemplates[tone]) {
        candidateText = data.emailTemplates[tone];
      } else if (data.emailTemplates.full || data.emailTemplates.short) {
        candidateText = data.emailTemplates.full || data.emailTemplates.short;
      }
      if (candidateText) return parseEmailTemplate(candidateText);
    }

    // 2. Check coverLetters
    if (data.coverLetters && typeof data.coverLetters === "object") {
      const candidateText = data.coverLetters[tone] || data.coverLetters.tech || data.coverLetters.short;
      if (candidateText) return parseEmailTemplate(candidateText);
    }

    return null;
  }

  // ----------------------------------------------------
  // UI & Event Handlers
  // ----------------------------------------------------
  let activeTab = "email"; // 'email' | 'cover'

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.vi;

    const titleEl = document.getElementById("clModalTitle");
    if (titleEl) titleEl.innerHTML = dict.modalTitle;

    const tabEmailBtn = document.getElementById("clTabEmailBtn");
    if (tabEmailBtn) tabEmailBtn.innerHTML = dict.tabEmail;

    const tabCoverBtn = document.getElementById("clTabCoverBtn");
    if (tabCoverBtn) tabCoverBtn.innerHTML = dict.tabCover;

    const subtitleEl = document.getElementById("clModalSubtitle");
    if (subtitleEl) {
      subtitleEl.innerHTML = activeTab === "email" ? dict.subtitleEmail : dict.subtitleCover;
    }

    const configTitle = document.querySelector("#clPaneEmail .eg-col-config .eg-section-title");
    if (configTitle) configTitle.textContent = dict.configTitle;

    const lblCompany = document.querySelector('label[for="egInputCompany"]');
    if (lblCompany) lblCompany.textContent = dict.lblCompany;

    const lblPosition = document.querySelector('label[for="egInputPosition"]');
    if (lblPosition) lblPosition.textContent = dict.lblPosition;

    const lblRecipient = document.querySelector('label[for="egInputRecipient"]');
    if (lblRecipient) lblRecipient.textContent = dict.lblRecipient;

    const lblEmail = document.querySelector('label[for="egInputEmail"]');
    if (lblEmail) lblEmail.textContent = dict.lblEmail;

    const lblTone = document.querySelector("#clPaneEmail .eg-tone-label, #clPaneEmail .eg-field-group > label.eg-label:not([for])");
    if (lblTone) lblTone.textContent = dict.lblTone;

    const toneBtns = document.querySelectorAll(".eg-tone-btn");
    toneBtns.forEach(btn => {
      const tone = btn.getAttribute("data-tone");
      if (tone === "tech") {
        btn.textContent = dict.toneTech;
        btn.title = lang === "vi" ? "Nêu bật số liệu, stack công nghệ & dự án thực tế" : "Highlight metrics, tech stack & real-world projects";
      } else if (tone === "short") {
        btn.textContent = dict.toneShort;
        btn.title = lang === "vi" ? "Đi thẳng vào điểm cốt lõi, siêu ngắn gọn" : "Straight to the point, highly concise";
      } else if (tone === "warm") {
        btn.textContent = dict.toneWarm;
        btn.title = lang === "vi" ? "Ấn tượng văn hóa, nhiệt huyết & cầu tiến" : "Culture fit, enthusiastic & eager to grow";
      }
    });

    const lblJd = document.querySelector('label[for="egInputJd"]');
    if (lblJd) lblJd.textContent = dict.lblJd;

    const inputJd = document.getElementById("egInputJd");
    if (inputJd) inputJd.placeholder = dict.jdPlaceholder;

    const previewTitleSpan = document.querySelector("#clPaneEmail .eg-preview-title > span");
    if (previewTitleSpan) previewTitleSpan.textContent = dict.previewTitle;

    const copySubBtn = document.getElementById("egCopySubjectBtn");
    if (copySubBtn) copySubBtn.textContent = dict.copySubject;

    const copyBodyBtn = document.getElementById("egCopyBodyBtn");
    if (copyBodyBtn) copyBodyBtn.textContent = dict.copyBody;

    const subjectTag = document.querySelector("#clPaneEmail .eg-subject-tag");
    if (subjectTag) subjectTag.textContent = dict.subjectTag;

    const copyAllBtn = document.getElementById("egCopyAllBtn");
    if (copyAllBtn) copyAllBtn.textContent = dict.copyAll;

    const gmailBtn = document.getElementById("egGmailBtn");
    if (gmailBtn) gmailBtn.textContent = dict.gmailBtn;

    const mailtoBtn = document.getElementById("egMailtoBtn");
    if (mailtoBtn) mailtoBtn.textContent = dict.mailtoBtn;

    const tmplLabel = document.querySelector('label[for="clTemplateSelect"]');
    if (tmplLabel) tmplLabel.textContent = dict.tmplLabel;

    const footerHint = document.getElementById("clFooterHint");
    if (footerHint) footerHint.innerHTML = dict.footerHint;

    const closeFooterBtn = document.querySelector(".cl-modal-footer .cl-btn-primary");
    if (closeFooterBtn) closeFooterBtn.textContent = dict.closeBtn;
  }

  function setLang(lang, syncCv = true) {
    currentLang = lang === "en" ? "en" : "vi";
    window.currentLang = currentLang;

    updateLangButtons();
    applyI18n(currentLang);

    // Sync input fields for current language
    const metaInfo = (window.cvData && window.cvData.meta) || {};
    const cvKey = getCurrentCvKey();
    const mapInfo = VERSION_MAP[cvKey] || {};

    const posInput = document.getElementById("egInputPosition");
    const recInput = document.getElementById("egInputRecipient");

    if (posInput) {
      const viTitle = window.cvData?.vi?.title;
      const enTitle = window.cvData?.en?.title;
      if (!posInput.value || posInput.value === viTitle || posInput.value === enTitle || posInput.value === "Developer") {
        posInput.value = (window.cvData && window.cvData[currentLang] && window.cvData[currentLang].title) || metaInfo.position || mapInfo.position || "Developer";
      }
    }

    if (recInput) {
      const viDefault = "Anh/Chị phụ trách tuyển dụng";
      const enDefault = "Hiring Team";
      if (!recInput.value || recInput.value === viDefault || recInput.value === enDefault) {
        recInput.value = currentLang === "vi" 
          ? (metaInfo.recipient || (mapInfo.company ? `Bộ phận Tuyển dụng ${mapInfo.company}` : viDefault))
          : (metaInfo.recipient || (mapInfo.company ? `Hiring Team at ${mapInfo.company}` : enDefault));
      }
    }

    rebuildEmail();

    if (typeof window.updateCoverLetterText === "function") {
      window.updateCoverLetterText();
    }

    if (syncCv) {
      const targetBtn = currentLang === "en" ? document.getElementById("langEnBtn") : document.getElementById("langViBtn");
      if (targetBtn && !targetBtn.classList.contains("active")) {
        targetBtn.click();
      }
    }
  }

  function switchTab(tabName) {
    activeTab = tabName || "email";
    const paneEmail = document.getElementById("clPaneEmail");
    const paneCover = document.getElementById("clPaneCover");
    const tabEmailBtn = document.getElementById("clTabEmailBtn");
    const tabCoverBtn = document.getElementById("clTabCoverBtn");
    const modalSubtitle = document.getElementById("clModalSubtitle");

    const dict = I18N[currentLang] || I18N.vi;

    if (activeTab === "email") {
      if (paneEmail) paneEmail.style.display = "block";
      if (paneCover) paneCover.style.display = "none";
      if (tabEmailBtn) {
        tabEmailBtn.classList.add("active");
        tabEmailBtn.setAttribute("aria-selected", "true");
      }
      if (tabCoverBtn) {
        tabCoverBtn.classList.remove("active");
        tabCoverBtn.setAttribute("aria-selected", "false");
      }
      if (modalSubtitle) {
        modalSubtitle.innerHTML = dict.subtitleEmail;
      }
      rebuildEmail();
    } else {
      if (paneEmail) paneEmail.style.display = "none";
      if (paneCover) paneCover.style.display = "block";
      if (tabCoverBtn) {
        tabCoverBtn.classList.add("active");
        tabCoverBtn.setAttribute("aria-selected", "true");
      }
      if (tabEmailBtn) {
        tabEmailBtn.classList.remove("active");
        tabEmailBtn.setAttribute("aria-selected", "false");
      }
      if (modalSubtitle) {
        modalSubtitle.innerHTML = dict.subtitleCover;
      }
      if (typeof window.updateCoverLetterText === "function") {
        window.updateCoverLetterText();
      }
    }
  }

  function openModal(preset, preferredTab) {
    const overlay = document.getElementById("clModalOverlay");
    if (!overlay) return;

    currentLang = window.currentLang || "vi";

    // Detect preset, cvData.meta or current cv
    const cvKey = getCurrentCvKey();
    const metaInfo = (window.cvData && window.cvData.meta) || {};
    const mapInfo = VERSION_MAP[cvKey] || {};

    let trackerJob = null;
    if (window.cvTracker && Array.isArray(window.cvTracker.jobs)) {
      trackerJob = window.cvTracker.jobs.find(j => j.cvType === cvKey);
    }

    const company = (preset && preset.company) || metaInfo.company || (trackerJob && trackerJob.company) || mapInfo.company || "";
    const position = (preset && preset.position) || (window.cvData && window.cvData[currentLang] && window.cvData[currentLang].title) || metaInfo.position || (trackerJob && trackerJob.position) || mapInfo.position || "Developer";
    const recipient = (preset && preset.recipient) || metaInfo.recipient || mapInfo.recipient || (currentLang === "vi" ? "Anh/Chị phụ trách tuyển dụng" : "Hiring Team");
    const contact = (preset && preset.contact) || metaInfo.email || metaInfo.contact || (trackerJob && trackerJob.contact) || mapInfo.contact || "";
    const jdText = (preset && preset.jdText) || metaInfo.jdText || (trackerJob && trackerJob.jdText) || "";

    const compInput = document.getElementById("egInputCompany");
    const posInput = document.getElementById("egInputPosition");
    const recInput = document.getElementById("egInputRecipient");
    const emailInput = document.getElementById("egInputEmail");
    const jdInput = document.getElementById("egInputJd");

    if (compInput) compInput.value = company;
    if (posInput) posInput.value = position;
    if (recInput) recInput.value = recipient;
    if (emailInput) emailInput.value = contact;
    if (jdInput) jdInput.value = jdText;

    applyI18n(currentLang);
    updateLangButtons();
    updateToneButtons();

    switchTab(preferredTab || "email");

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    const overlay = document.getElementById("clModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
  }

  function rebuildEmail() {
    const jdText = (document.getElementById("egInputJd")?.value || "").trim();
    const custom = getCustomTemplate(currentLang, currentTone);

    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    // If tailored template exists and user didn't enter a custom JD, prioritize tailored template
    if (custom && !jdText) {
      if (subjectEl) subjectEl.value = custom.subject;
      if (bodyEl) bodyEl.value = custom.body;
      return;
    }

    const company = (document.getElementById("egInputCompany")?.value || "").trim();
    const position = (document.getElementById("egInputPosition")?.value || "").trim();
    const recipient = (document.getElementById("egInputRecipient")?.value || "").trim();

    const cvKey = getCurrentCvKey();
    const mapInfo = VERSION_MAP[cvKey] || {};

    const result = generateEmail({
      company,
      position,
      recipient,
      jdText,
      tone: currentTone,
      lang: currentLang,
      profileType: mapInfo.profileType
    });

    if (subjectEl) subjectEl.value = result.subject;
    if (bodyEl) bodyEl.value = result.body;
  }

  function updateToneButtons() {
    document.querySelectorAll(".eg-tone-btn").forEach(btn => {
      if (btn.getAttribute("data-tone") === currentTone) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function updateLangButtons() {
    const viBtn = document.getElementById("clLangViBtn");
    const enBtn = document.getElementById("clLangEnBtn");
    if (viBtn && enBtn) {
      if (currentLang === "vi") {
        viBtn.classList.add("active");
        enBtn.classList.remove("active");
      } else {
        enBtn.classList.add("active");
        viBtn.classList.remove("active");
      }
    }
  }

  function copySubject() {
    const subjectEl = document.getElementById("egSubjectOutput");
    if (!subjectEl || !subjectEl.value) return;

    navigator.clipboard.writeText(subjectEl.value).then(() => {
      const btn = document.getElementById("egCopySubjectBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "vi" ? "✅ Đã chép!" : "✅ Copied!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }
    });
  }

  function copyBody() {
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl || !bodyEl.value) return;

    navigator.clipboard.writeText(bodyEl.value).then(() => {
      const btn = document.getElementById("egCopyBodyBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "vi" ? "✅ Đã sao chép!" : "✅ Copied!";
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  }

  function copyAll() {
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl) return;

    const prefix = currentLang === "vi" ? "Tiêu đề: " : "Subject: ";
    const full = `${prefix}${subjectEl ? subjectEl.value : ""}\n\n${bodyEl.value}`;
    navigator.clipboard.writeText(full).then(() => {
      const btn = document.getElementById("egCopyAllBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "vi" ? "✅ Đã sao chép toàn bộ!" : "✅ All Copied!";
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  }

  function openGmail() {
    const emailInput = document.getElementById("egInputEmail");
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    const to = (emailInput?.value || "").trim();
    const su = subjectEl?.value || "";
    const body = bodyEl?.value || "";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }

  function openMailto() {
    const emailInput = document.getElementById("egInputEmail");
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    const to = (emailInput?.value || "").trim();
    const su = subjectEl?.value || "";
    const body = bodyEl?.value || "";

    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  // ----------------------------------------------------
  // Init
  // ----------------------------------------------------
  function init() {
    // Nút mở trên thanh công cụ: coverLetterBtn
    const openBtn = document.getElementById("coverLetterBtn");
    if (openBtn) {
      openBtn.onclick = () => openModal(null, "email");
    }

    // Tabs
    const tabEmailBtn = document.getElementById("clTabEmailBtn");
    if (tabEmailBtn) tabEmailBtn.onclick = () => switchTab("email");

    const tabCoverBtn = document.getElementById("clTabCoverBtn");
    if (tabCoverBtn) tabCoverBtn.onclick = () => switchTab("cover");

    // Nút đóng
    const closeBtn = document.getElementById("clModalCloseBtn");
    if (closeBtn) closeBtn.onclick = closeModal;

    const overlay = document.getElementById("clModalOverlay");
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
      };
    }

    // Tone buttons
    document.querySelectorAll(".eg-tone-btn").forEach(btn => {
      btn.onclick = () => {
        currentTone = btn.getAttribute("data-tone") || "tech";
        updateToneButtons();
        rebuildEmail();
      };
    });

    // Lang buttons
    const viBtn = document.getElementById("clLangViBtn");
    if (viBtn) {
      viBtn.onclick = () => setLang("vi", true);
    }

    const enBtn = document.getElementById("clLangEnBtn");
    if (enBtn) {
      enBtn.onclick = () => setLang("en", true);
    }

    // Inputs change
    ["egInputCompany", "egInputPosition", "egInputRecipient", "egInputJd", "egInputEmail"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.oninput = rebuildEmail;
      }
    });

    // Action buttons
    const copySubjectBtn = document.getElementById("egCopySubjectBtn");
    if (copySubjectBtn) copySubjectBtn.onclick = copySubject;

    const copyBodyBtn = document.getElementById("egCopyBodyBtn");
    if (copyBodyBtn) copyBodyBtn.onclick = copyBody;

    const copyAllBtn = document.getElementById("egCopyAllBtn");
    if (copyAllBtn) copyAllBtn.onclick = copyAll;

    const gmailBtn = document.getElementById("egGmailBtn");
    if (gmailBtn) gmailBtn.onclick = openGmail;

    const mailtoBtn = document.getElementById("egMailtoBtn");
    if (mailtoBtn) mailtoBtn.onclick = openMailto;

    // Phím tắt ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay && overlay.style.display !== "none") {
        closeModal();
      }
    });
  }

  // Export API
  window.cvEmailGen = {
    openModal,
    closeModal,
    switchTab,
    rebuildEmail,
    generateEmail,
    setLang
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
