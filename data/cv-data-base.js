// =========================================================================
// MASTER BASE CV DATA & MERGER (SINGLE SOURCE OF TRUTH)
// Single Source of Truth cho toàn bộ dữ liệu CV dùng chung:
// - Thông tin ứng viên (Name, Contact, Education)
// - Kinh nghiệm thực tập chuẩn (Tami Technology: 06/2025 - 12/2025, role: Developer)
// - Master Projects Pool & Fallback Skills
// - Cấu hình in ấn và tiêu đề mục chuẩn ATS
// =========================================================================

const cvDataBase = {
  vi: {
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Software Developer Intern",
    contact: [
      { icon: "phone", text: "0923202861" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thủ Đức, TP. Hồ Chí Minh" },
    ],
    sections: {
      objective: "TÓM TẮT CHUYÊN MÔN",
      education: "HỌC VẤN",
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Thực tập sinh Software Developer với nền tảng React.js, Next.js, Node.js, Express và TypeScript, có kinh nghiệm xây dựng ứng dụng web full-stack, tích hợp RESTful API và xử lý dữ liệu ở cả frontend lẫn backend. Chủ động ứng dụng AI tools như Gemini, ChatGPT và GitHub Copilot để tăng tốc phân tích, viết code, kiểm thử và tài liệu hóa. Quan tâm đến automation, clean architecture và khả năng duy trì sản phẩm thực tế. Sẵn sàng làm việc full-time, học nhanh và thích nghi tốt với nhiều domain công nghệ khác nhau.",
    education: {
      school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
      date: "2020 - 2024",
      detail: "Khoa học Máy tính",
    },
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng và tối ưu hệ thống RESTful APIs bằng Next.js Route Handlers phục vụ truy xuất dữ liệu chứng khoán thời gian thực.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider) cho phiên làm việc người dùng.",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projectDisplayLimit: 2,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng full-stack hỗ trợ đăng tin, nộp hồ sơ, quản lý người dùng và xử lý quy trình ứng tuyển cho nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển các RESTful API endpoints bằng Node.js và Express cho các nghiệp vụ quản lý việc làm, hồ sơ ứng tuyển và người dùng.",
          "Tích hợp frontend Next.js với backend services cho các luồng đăng nhập, nộp hồ sơ, cập nhật profile và phân quyền truy cập.",
          "Triển khai xác thực JWT với HttpOnly cookies, RBAC và refresh token flow để bảo vệ các thao tác nhạy cảm.",
          "Tối ưu truy vấn MongoDB và cấu trúc xử lý dữ liệu để giúp thời gian phản hồi API xuống dưới 300ms ở các luồng chính.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack phục vụ quản lý hồ sơ sinh viên, đăng ký khóa học, kết quả học tập và dashboard quan sát dữ liệu cho admin.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc module với Node.js và Express để tách rõ business logic, routing và middleware phục vụ khả năng mở rộng.",
          "Tích hợp Swagger để tài liệu hóa API, hỗ trợ test nhanh và giảm thời gian handoff giữa frontend, backend và QA.",
          "Phát triển dashboard quản trị responsive bằng Next.js và Tailwind CSS với các thao tác CRUD và giao tiếp dữ liệu thời gian thực.",
          "Áp dụng access token và refresh token cho luồng xác thực, giúp hệ thống vận hành ổn định và dễ bảo trì hơn.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Hệ thống thương mại điện tử mua sắm trực tuyến với giỏ hàng, danh mục sản phẩm và quy trình thanh toán mượt mà.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng giao diện danh mục sản phẩm, chi tiết, giỏ hàng và thanh toán bằng React kết hợp Tailwind CSS tối ưu UX.",
          "Đồng bộ hóa giỏ hàng và trạng thái người dùng theo thời gian thực, xử lý form validation chặt chẽ.",
          "Tích hợp RESTful API với backend services, tối ưu hiển thị responsive hoàn chỉnh trên cả mobile và desktop.",
          "Đóng gói ứng dụng và triển khai frontend ổn định lên nền tảng đám mây Vercel.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, REST API, Docker, Vercel",
      },
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng giao diện web tương tác thời gian thực bằng Vanilla JS/HTML5/CSS3 với hiệu năng cao, zero-dependency.",
          "Thiết kế Serverless Backend trên Cloudflare Workers kết nối Telegram Bot Bridge và tích hợp LLM API (Gemini/OpenAI) để xử lý logic AI Agent tự động.",
          "Tự động hóa pipeline CI/CD với GitHub Actions: Nhận lệnh từ Telegram bot -> AI Agent phân tích và sinh mã nguồn -> tự động commit và trigger build sản phẩm trong 40 giây.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, MySQL, Query Optimization, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc cơ bản",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh",
  },
  en: {
    name: "TRUONG DINH ANH",
    title: "Software Developer Intern",
    contact: [
      { icon: "phone", text: "0923202861" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thu Duc, Ho Chi Minh City" },
    ],
    sections: {
      objective: "PROFESSIONAL SUMMARY",
      education: "EDUCATION",
      experience: "WORK EXPERIENCE",
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Software Developer Intern with hands-on experience in React.js, Next.js, Node.js, Express, and TypeScript, capable of building full-stack web applications, integrating RESTful APIs, and handling data across both frontend and backend. Proactively uses AI tools such as Gemini, ChatGPT, and GitHub Copilot to accelerate analysis, coding, testing, and documentation work. Interested in automation, clean architecture, and real-world product delivery. Available full-time, quick to learn, and adaptable across different technical domains.",
    education: {
      school: "HO CHI MINH CITY OPEN UNIVERSITY",
      date: "2020 - 2024",
      detail: "Computer Science",
    },
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Architected relational database schemas and successfully deployed PostgreSQL on the Supabase cloud infrastructure.",
          "Developed and optimized RESTful APIs using Next.js Route Handlers for high-frequency stock market data querying.",
          "Integrated Google Authentication OAuth flow via NextAuth (Google Provider) for secure user sessions.",
          "Tested API performance and handled edge-case error logging using Postman under mentor guidance.",
          "Packaged and deployed the demo application smoothly onto the Vercel cloud environment.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projectDisplayLimit: 2,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A full-stack recruitment platform supporting job posting, application submission, user management, and hiring workflows for employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed RESTful API endpoints with Node.js and Express for jobs, applications, and user management workflows.",
          "Integrated the Next.js frontend with backend services for login, profile updates, job application flows, and access control.",
          "Implemented JWT authentication with HttpOnly cookies, RBAC, and a refresh token flow to secure sensitive operations.",
          "Optimized MongoDB queries and data handling flow to keep response times under 300ms on major APIs.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "A full-stack administrative system for student records, course registration, academic performance tracking, and admin data dashboards.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend with Node.js and Express to separate business logic, routing, and middleware for better scalability.",
          "Integrated Swagger for API documentation and faster testing, reducing handoff friction across frontend, backend, and QA.",
          "Developed a responsive admin dashboard with Next.js and Tailwind CSS, including CRUD workflows and real-time data handling.",
          "Implemented access token and refresh token authentication flows to improve system stability and maintainability.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce shopping web application with shopping cart, product catalog, and seamless checkout workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed responsive product catalog, product details, cart, and checkout UI using React and Tailwind CSS.",
          "Synchronized shopping cart state across tabs in real-time, handling form validations securely.",
          "Integrated RESTful APIs with backend services, ensuring optimal performance on both mobile and desktop views.",
          "Packaged and deployed frontend application smoothly to Vercel cloud environment.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, REST API, Docker, Vercel",
      },
      {
        name: "AI AGENT & AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Enterprise automation and management platform leveraging AI Agent architecture and Serverless computing.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered real-time interactive web interfaces using Vanilla JS/HTML5/CSS3 with high performance and zero external dependencies.",
          "Designed a Serverless Backend on Cloudflare Workers bridging Telegram Bot and LLM APIs (Gemini/OpenAI) to automate AI Agent workflows.",
          "Automated CI/CD pipelines with GitHub Actions: Processed commands via Telegram Bot -> AI Agent analyzed & generated code -> auto-committed & triggered production builds within 40s.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, MySQL, Query Optimization, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code",
      },
      {
        cat: "English",
        items: "Read technical documentation, handle basic workplace communication",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh",
  },
};

/**
 * Hàm hợp nhất sâu (Runtime Deep Merge) giữa CV Base và dữ liệu may đo (Override).
 * Đảm bảo 100% tương thích ngược và tự động điền các trường còn thiếu.
 */
function mergeWithBaseCv(base, override) {
  if (!base && !override) return {};
  if (!base) return JSON.parse(JSON.stringify(override));
  if (!override) return JSON.parse(JSON.stringify(base));

  const result = {};

  // Bảo toàn thông tin metadata tuyển dụng (công ty, vị trí, ghi chú...)
  if (base.meta || override.meta) {
    result.meta = Object.assign({}, base.meta || {}, override.meta || {});
  }

  // Chuẩn hóa dữ liệu nếu root chứa thẳng các trường phẳng (không lồng vi/en)
  const normOverride = (override.vi || override.en) ? override : {
    vi: Object.assign({}, override),
    en: Object.assign({}, override, { name: "TRUONG DINH ANH" })
  };

  const langs = ['vi', 'en'];
  langs.forEach((lang) => {
    const bLang = base[lang] || {};
    const oLang = normOverride[lang] || {};

    const merged = {};

    // 1. Tên & Chức danh
    merged.name = oLang.name || (oLang.header && oLang.header.name) || bLang.name || (lang === 'vi' ? "TRƯƠNG ĐÌNH ANH" : "TRUONG DINH ANH");
    merged.title = oLang.title || (oLang.header && oLang.header.title) || bLang.title || "Developer";

    // 2. Liên hệ
    merged.contact = Array.isArray(oLang.contact) && oLang.contact.length > 0
      ? JSON.parse(JSON.stringify(oLang.contact))
      : JSON.parse(JSON.stringify(bLang.contact || []));

    // 3. Tiêu đề các mục (Sections)
    merged.sections = Object.assign({}, bLang.sections || {}, oLang.sections || {});
    if (lang === 'vi') {
      merged.sections.experience = "KINH NGHIỆM LÀM VIỆC";
      merged.sections.skills = "KỸ NĂNG CHUYÊN MÔN";
      if (!merged.sections.objective) merged.sections.objective = "TÓM TẮT CHUYÊN MÔN";
      if (!merged.sections.education) merged.sections.education = "HỌC VẤN";
      if (!merged.sections.projects) merged.sections.projects = "DỰ ÁN TIÊU BIỂU";
    } else {
      merged.sections.experience = "WORK EXPERIENCE";
      merged.sections.skills = "TECHNICAL SKILLS";
      if (!merged.sections.objective) merged.sections.objective = "PROFESSIONAL SUMMARY";
      if (!merged.sections.education) merged.sections.education = "EDUCATION";
      if (!merged.sections.projects) merged.sections.projects = "FEATURED PROJECTS";
    }

    // 4. Tóm tắt chuyên môn (Objective)
    merged.objective = oLang.objective || bLang.objective || "";

    // 5. Học vấn (Education)
    merged.education = oLang.education
      ? JSON.parse(JSON.stringify(oLang.education))
      : JSON.parse(JSON.stringify(bLang.education || {}));

    // 6. Kinh nghiệm thực tập (Experience)
    merged.experience = Array.isArray(oLang.experience) && oLang.experience.length > 0
      ? JSON.parse(JSON.stringify(oLang.experience))
      : JSON.parse(JSON.stringify(bLang.experience || []));

    // Áp dụng quy tắc bắt buộc: role luôn là 'Developer' và ngày thực tập Tami chuẩn 06/2025 - 12/2025
    merged.experience.forEach((exp) => {
      exp.role = "Developer";
      if (exp.name && exp.name.toUpperCase().includes("TAMI")) {
        exp.date = "06/2025 - 12/2025";
      }
    });

    // 7. Dự án (Projects)
    merged.projectDisplayLimit = typeof oLang.projectDisplayLimit === 'number'
      ? oLang.projectDisplayLimit
      : (typeof bLang.projectDisplayLimit === 'number' ? bLang.projectDisplayLimit : 2);

    if (Array.isArray(oLang.projects) && oLang.projects.length > 0) {
      merged.projects = JSON.parse(JSON.stringify(oLang.projects));
    } else {
      merged.projects = JSON.parse(JSON.stringify(bLang.projects || []));
    }
    merged.projects.forEach((proj) => {
      proj.role = "Developer";
    });

    // 8. Kỹ năng chuyên môn (Skills)
    if (Array.isArray(oLang.skills) && oLang.skills.length > 0) {
      merged.skills = JSON.parse(JSON.stringify(oLang.skills));
    } else {
      merged.skills = JSON.parse(JSON.stringify(bLang.skills || []));
    }

    // 9. Nút tải và tiêu đề file
    merged.btnText = oLang.btnText || bLang.btnText || (lang === 'vi' ? "In / Tải PDF" : "Print / Save PDF");
    merged.docTitle = oLang.docTitle || bLang.docTitle || "CV_TruongDinhAnh";

    // 10. Kế thừa các thuộc tính tùy biến khác (nếu có, ví dụ margin, line-height...)
    Object.keys(oLang).forEach((k) => {
      if (!(k in merged)) {
        merged[k] = JSON.parse(JSON.stringify(oLang[k]));
      }
    });

    result[lang] = merged;
  });

  return result;
}

var cvData = cvDataBase;

// Gắn vào cả môi trường trình duyệt và Node.js
if (typeof window !== "undefined") {
  window.cvData = cvData;
  window.cvDataBase = cvDataBase;
  window.mergeWithBaseCv = mergeWithBaseCv;
}

if (typeof global !== "undefined") {
  global.cvData = cvData;
  global.cvDataBase = cvDataBase;
  global.mergeWithBaseCv = mergeWithBaseCv;
}

if (typeof module !== "undefined") {
  module.exports = { cvDataBase, mergeWithBaseCv, vi: cvDataBase.vi, en: cvDataBase.en };
}
