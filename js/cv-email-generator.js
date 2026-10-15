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
    hemidi: {
      company: "HEMIDI",
      position: "Fresher Node.js Developer",
      recipient: "Ban Tuyển dụng Hemidi",
      contact: "recruit@hemidi.com",
      profileType: "backend_dev"
    },
    yabu: {
      company: "Yabu Aube",
      position: "Intern Backend",
      recipient: "Ban Tuyển dụng Yabu Aube",
      contact: "yabu.aube@gmail.com",
      profileType: "backend_dev"
    },
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

  function toTitleCaseName(str) {
    if (!str) return "Trương Đình Anh";
    return str
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
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
    // Chuẩn hóa tên thành dạng Title Case (Trương Đình Anh) tránh việc chữ hoa toàn bộ
    name = toTitleCaseName(name || CANDIDATE.name);
    return { name, phone, email, github };
  }

  // ----------------------------------------------------
  // Bullet Points Generator (Trích xuất 3 điểm mạnh nhất)
  // ----------------------------------------------------
  function generateHighlights(profileType, jdText, tone, lang) {
    const jdLower = (jdText || "").toLowerCase();
    const isQa = profileType === "qa_tester" || jdLower.includes("qa") || jdLower.includes("tester") || jdLower.includes("test case");
    const isAiFullstack = profileType === "ai_fullstack" || jdLower.includes("octo") || jdLower.includes("agent");
    const isBackend = profileType === "backend_dev" || jdLower.includes("backend") || jdLower.includes("laravel") || jdLower.includes("php");
    const hasPhpLaravel = jdLower.includes("laravel") || jdLower.includes("php") || (window.cvData && window.cvData.meta && (window.cvData.meta.company || "").toLowerCase().includes("yabu"));

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
            "Kinh nghiệm Full-Stack thực chiến: Đã xây dựng và tối ưu hệ thống RESTful APIs, quản trị CSDL PostgreSQL và phát triển các sản phẩm web responsive.",
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
      } else if (isBackend) {
        return [
          "Kinh nghiệm thực tế: Tại Công ty TNHH Công nghệ TAMI, em thiết kế CSDL PostgreSQL (Supabase), xây dựng RESTful API và tích hợp xác thực Google (NextAuth) cho hệ thống phân tích dữ liệu chứng khoán.",
          "Dự án cá nhân: Xây dựng nền tảng thương mại điện tử (React/Tailwind, Node.js/Express/MongoDB), đóng gói Docker và triển khai CI/CD.",
          hasPhpLaravel
            ? "Kỹ năng: JavaScript/TypeScript, RESTful API, Git, Postman; hiện đang tìm hiểu PHP/Laravel để sớm bắt nhịp với công nghệ của Quý công ty."
            : "Kỹ năng: JavaScript/TypeScript, RESTful API, Git, Postman, tư duy OOP/MVC vững chắc và tinh thần học hỏi nhanh."
        ];
      } else {
        // Developer / Fullstack / Frontend
        if (tone === "short") {
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai hệ thống RESTful APIs, thiết kế cơ sở dữ liệu PostgreSQL trên Supabase Cloud tại Cty TNHH Công nghệ TAMI.",
            "Dự án cá nhân: Tự phát triển nền tảng E-commerce với React/Tailwind CSS và Node.js/Express/MongoDB, đóng gói Docker, triển khai CI/CD tối ưu tải trang dưới 2s.",
            "Kỹ năng & Tác phong: Thành thạo Git, Postman, tinh thần học nhanh và có thể nhận việc ngay khi có yêu cầu."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm dự án thực tế: Đã tham gia phát triển hệ thống và xây dựng các dịch vụ RESTful APIs, tích hợp xác thực bảo mật Google OAuth tại Công ty TNHH Công nghệ TAMI.",
            "Năng lực tự học & Sản phẩm thực tế: Tự xây dựng nền tảng web ứng dụng React và Node.js, luôn chú trọng trải nghiệm người dùng và hiệu năng mã nguồn.",
            "Tinh thần trách nhiệm & Cầu tiến: Luôn chủ động giải quyết bài toán kỹ thuật, sẵn sàng học hỏi công nghệ mới và đóng góp hết mình cho sự phát triển của công ty."
          ];
        } else {
          // tech
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai hệ thống RESTful APIs, thiết kế database PostgreSQL trên Supabase Cloud, tích hợp xác thực Google (NextAuth) trong dự án thực tế tại Công ty TNHH Công nghệ TAMI.",
            "Dự án E-commerce / Web App: Tự phát triển nền tảng thương mại điện tử (danh mục sản phẩm, giỏ hàng, checkout) với React/Tailwind CSS ở frontend và Node.js/Express/MongoDB ở backend, đóng gói Docker và triển khai CI/CD.",
            "Nền tảng kỹ thuật & Tác phong: Nắm vững JavaScript/TypeScript, RESTful API, Git, Postman, Docker, chủ động học nhanh và ứng dụng AI nâng cao năng suất lập trình."
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
      } else if (isBackend) {
        return [
          "Hands-on Experience: At TAMI Technology Co., Ltd, designed PostgreSQL schemas on Supabase Cloud, developed RESTful APIs, and integrated Google OAuth (NextAuth).",
          "Personal Project: Built an E-commerce API & Web platform (React/Tailwind, Node.js/Express/MongoDB), containerized with Docker, and deployed via CI/CD.",
          hasPhpLaravel
            ? "Skills: JavaScript/TypeScript, RESTful API, Git, Postman; currently learning PHP/Laravel to quickly get up to speed with your technology stack."
            : "Skills: JavaScript/TypeScript, RESTful API, Git, Postman, solid OOP/MVC mindset, and fast learning capability."
        ];
      } else {
        return [
          "Hands-on Experience: Designed and deployed RESTful APIs, managed PostgreSQL on Supabase Cloud, and integrated Google OAuth at TAMI Technology.",
          "Full-Stack E-commerce Project: Built an end-to-end e-commerce platform with React, Node.js, Express, MongoDB, containerized with Docker and deployed via CI/CD.",
          "Technical Foundation & Problem Solving: Strong command of modern JavaScript/TypeScript, Git, Postman, fast learning agility, and ready to adapt quickly to your tech stack."
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
    const rawPos = position || (lang === "vi" ? "Intern Backend" : "Backend Developer Intern");
    const posTitle = rawPos.replace(/\(.*?\)/g, "").trim() || rawPos;
    const recName = recipient || (lang === "vi" ? `Ban Tuyển dụng ${compName}` : `Hiring Team at ${compName}`);
    const ghDisplay = candidate.github ? candidate.github.replace(/^https?:\/\//, "") : "github.com/dinhanhhhh";

    if (lang === "vi") {
      const subject = (opts.profileType === "ai_fullstack" || (company && company.includes("OCTO")))
        ? `[Full Stack Developer] - ${candidate.name}`
        : `Ứng tuyển ${posTitle} - ${candidate.name}`;
      
      const intro = `Kính gửi ${recName},\n\nEm là ${candidate.name}, tốt nghiệp ngành Khoa học Máy tính tại ĐH Mở TP.HCM. Qua tin tuyển dụng, em thấy vị trí ${posTitle} rất phù hợp với định hướng của mình nên xin gửi hồ sơ ứng tuyển. Một số điểm nổi bật của em:`;
      const pointsText = highlights.map(h => `• ${h}`).join("\n");
      const outro = `Em có thể làm việc Full-time và sẵn sàng bắt đầu ngay. Em xin gửi kèm CV và GitHub (${ghDisplay}) để Anh/Chị tham khảo. Rất mong có cơ hội trao đổi trực tiếp trong buổi phỏng vấn.`;
      const signOff = `Trân trọng,\n${candidate.name}\n${candidate.phone} | ${candidate.email}`;

      const body = `${intro}\n\n${pointsText}\n\n${outro}\n\n${signOff}`;

      return { subject, body };
    } else {
      const subject = `[Job Application] ${posTitle} - ${candidate.name}`;

      const intro = `Dear ${recName},\n\nI am ${candidate.name}, a Computer Science graduate (Ho Chi Minh City Open University). I am writing to apply for the ${posTitle} position at ${compName}, as my background and technical direction align closely with your requirements:`;
      const pointsText = highlights.map(h => `• ${h}`).join("\n");
      const outro = `I am available full-time and ready to start immediately. I have attached my CV and GitHub (${ghDisplay}) for your review. I look forward to the opportunity to discuss further in an interview.`;
      const signOff = `Sincerely,\n${candidate.name}\n(+84) ${candidate.phone.replace(/^0/, "")} | ${candidate.email}`;

      const body = `${intro}\n\n${pointsText}\n\n${outro}\n\n${signOff}`;

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
      footerHint: '💡 <b>Mẹo gửi CV:</b> Nút <b>"📋 Chép Nội Dung"</b> đã tự động in đậm các nhãn và thụt lề bullet chuẩn khi dán vào Gmail! Trước khi gửi nhớ kiểm tra: đính kèm file PDF mới nhất và email người nhận.',
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
      footerHint: '💡 <b>Application Tip:</b> <b>"📋 Copy Body"</b> automatically formats bold labels and proper list indents when pasting into Gmail/Mail clients! Always verify recipient email and PDF attachment before sending.',
      closeBtn: "Close ✓"
    }
  };

  function parseEmailTemplate(text) {
    if (!text || typeof text !== "string") return null;
    const trimmed = text.trim();
    // 1. [Subject: ...] or [Tiêu đề Email: ...] or Tiêu đề Email: ... or Subject: ...
    const m = trimmed.match(/^\[?(?:Subject|Tiêu đề(?: Email)?):\s*([^\]\n]+)\]?\s*\n+([\s\S]*)$/i);
    if (m) {
      return { subject: m[1].trim(), body: m[2].trim() };
    }
    // 2. [Bracketed Subject]
    const bracketMatch = trimmed.match(/^\[([^\]\n]+)\]\s*\n+([\s\S]*)$/);
    if (bracketMatch) {
      return { subject: bracketMatch[1].trim(), body: bracketMatch[2].trim() };
    }
    // 3. First line as application subject (e.g. Ứng tuyển ... or [Job Application] ...)
    const firstLineMatch = trimmed.match(/^([^\n]+)\n\n([\s\S]*)$/);
    if (firstLineMatch && (firstLineMatch[1].startsWith("Ứng tuyển") || firstLineMatch[1].startsWith("[Job Application]"))) {
      return { subject: firstLineMatch[1].trim(), body: firstLineMatch[2].trim() };
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
    const rawPos = (preset && preset.position) || mapInfo.position || metaInfo.position || (window.cvData && window.cvData[currentLang] && window.cvData[currentLang].title) || (trackerJob && trackerJob.position) || "Intern Backend";
    const position = rawPos.replace(/\(.*?\)/g, "").trim() || rawPos;
    const recipient = (preset && preset.recipient) || metaInfo.recipient || mapInfo.recipient || (currentLang === "vi" ? "Ban Tuyển dụng" : "Hiring Team");
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
    const defaultMetaJd = ((window.cvData && window.cvData.meta && window.cvData.meta.jdText) || "").trim();
    if (custom && (!jdText || jdText === defaultMetaJd)) {
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

  function convertEmailTextToRichHtml(bodyText, subjectText) {
    if (!bodyText) return "";
    const blocks = bodyText.split(/\n\n+/);
    const htmlBlocks = blocks.map(block => {
      const trimmed = block.trim();
      const lines = trimmed.split("\n");
      const isListBlock = lines.every(l => l.trim().startsWith("• ") || l.trim().startsWith("- ") || l.trim() === "");
      if (isListBlock && lines.length > 0) {
        const lis = lines
          .map(l => l.trim())
          .filter(Boolean)
          .map(l => {
            let content = l.replace(/^[•\-]\s*/, "");
            // Tự động in đậm nhãn đầu dòng trước dấu hai chấm (vd: "Kinh nghiệm thực tế:", "Dự án cá nhân:", "Kỹ năng:")
            content = content.replace(/^([^:：]+[:：])/, "<strong>$1</strong>");
            return `<li style="margin-bottom: 8px; line-height: 1.6;">${content}</li>`;
          })
          .join("");
        return `<ul style="margin: 14px 0; padding-left: 24px; line-height: 1.6;">${lis}</ul>`;
      } else {
        let pText = trimmed.replace(/\n/g, "<br>");
        pText = pText.replace(/(github\.com\/[^\s\)]+)/g, '<a href="https://$1" target="_blank" style="color: #0969da; text-decoration: underline;">$1</a>');
        return `<p style="margin: 0 0 14px 0; line-height: 1.6;">${pText}</p>`;
      }
    });

    let headerHtml = "";
    if (subjectText) {
      const prefix = currentLang === "vi" ? "Tiêu đề: " : "Subject: ";
      headerHtml = `<p style="margin: 0 0 14px 0; font-weight: bold; color: #1e3a8a;">${prefix}${subjectText}</p><hr style="margin: 12px 0 16px; border: 0; border-top: 1px solid #e2e8f0;">`;
    }

    return `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; color: #222;">${headerHtml}${htmlBlocks.join("")}</div>`;
  }

  async function copyRichText(plainText, htmlText) {
    if (navigator.clipboard && window.ClipboardItem) {
      try {
        const textBlob = new Blob([plainText], { type: "text/plain" });
        const htmlBlob = new Blob([htmlText], { type: "text/html" });
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": textBlob,
            "text/html": htmlBlob
          })
        ]);
        return true;
      } catch (err) {
        console.warn("ClipboardItem write failed, fallback to writeText:", err);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(plainText);
      return true;
    }
    return false;
  }

  function copyBody() {
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl || !bodyEl.value) return;

    const plain = bodyEl.value;
    const html = convertEmailTextToRichHtml(plain);

    copyRichText(plain, html).then(() => {
      const btn = document.getElementById("egCopyBodyBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "vi" ? "✅ Đã chép (Tự in đậm khi dán)!" : "✅ Copied (Rich Text)!";
        setTimeout(() => { btn.textContent = orig; }, 2400);
      }
    });
  }

  function copyAll() {
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl) return;

    const su = subjectEl ? subjectEl.value : "";
    const prefix = currentLang === "vi" ? "Tiêu đề: " : "Subject: ";
    const plain = `${prefix}${su}\n\n${bodyEl.value}`;
    const html = convertEmailTextToRichHtml(bodyEl.value, su);

    copyRichText(plain, html).then(() => {
      const btn = document.getElementById("egCopyAllBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "vi" ? "✅ Đã sao chép toàn bộ!" : "✅ All Copied!";
        setTimeout(() => { btn.textContent = orig; }, 2200);
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
