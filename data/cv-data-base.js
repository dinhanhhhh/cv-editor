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
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM, định hướng phát triển ứng dụng web với React.js, Next.js, Node.js, Express.js và TypeScript. Có kinh nghiệm thực tế tại Công ty TNHH Công nghệ TAMI trong việc thiết kế cơ sở dữ liệu PostgreSQL, xây dựng RESTful APIs chuẩn hóa dữ liệu tài chính và triển khai ứng dụng lên Cloud. Chủ động ứng dụng công cụ AI và tự động hóa CI/CD để kiểm soát chất lượng mã nguồn và tối ưu quy trình phát triển sản phẩm.",
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
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán tích hợp nguồn dữ liệu tài chính Vnstock3.",
        tasks: [
          "Thiết kế sơ đồ cơ sở dữ liệu quan hệ, đánh Index theo mã cổ phiếu/thời gian và triển khai PostgreSQL trên Supabase Cloud.",
          "Xây dựng các dịch vụ RESTful APIs bằng Next.js Route Handlers để đồng bộ, chuẩn hóa dữ liệu chuỗi thời gian từ Vnstock3.",
          "Xử lý ngoại lệ khi kết nối API bên thứ ba, tích hợp xác thực Google OAuth (NextAuth) bảo vệ các tuyến truy xuất dữ liệu.",
          "Thiết lập bộ kịch bản kiểm thử tích hợp API bằng Postman, phối hợp cùng Mentor tối ưu hóa luồng truy vấn CSDL.",
          "Quản lý nhánh mã nguồn qua Git và triển khai ứng dụng demo vận hành ổn định trên hạ tầng Cloud Vercel.",
        ],
        tech: "Next.js (Route Handlers), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
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
          "Thiết kế RESTful APIs theo kiến trúc phân tầng Controller-Service với Node.js, Express.js và TypeScript cho nghiệp vụ tuyển dụng.",
          "Tích hợp frontend Next.js với backend services cho các luồng đăng nhập, nộp hồ sơ, lọc việc làm đa tiêu chí và phân trang.",
          "Triển khai xác thực JWT qua HttpOnly cookies, phân quyền theo vai trò (RBAC) và cơ chế Refresh Token đảm bảo an toàn phiên.",
          "Mô hình hóa dữ liệu MongoDB, thiết lập Compound Index cho các trường tìm kiếm và xử lý lỗi tập trung (Global Error Handling).",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express.js, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack phục vụ quản lý hồ sơ sinh viên, đăng ký khóa học, kết quả học tập và dashboard quan sát dữ liệu cho admin.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc module với Node.js và Express.js nhằm tách biệt rõ business logic, routing và middleware.",
          "Tích hợp Swagger (OpenAPI) để chuẩn hóa tài liệu API, hỗ trợ kiểm thử hợp đồng dữ liệu và đồng bộ giữa frontend với backend.",
          "Phát triển dashboard quản trị responsive bằng Next.js và Tailwind CSS với đầy đủ thao tác CRUD, bộ lọc và xử lý trạng thái UI.",
          "Áp dụng cơ chế xác thực Access Token và Refresh Token kết hợp middleware kiểm tra quyền truy cập theo cấp độ người dùng.",
        ],
        tech: "Node.js, Express.js, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Hệ thống thương mại điện tử mua sắm trực tuyến với giỏ hàng, danh mục sản phẩm và quy trình xử lý đơn hàng.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng giao diện danh mục sản phẩm, chi tiết, giỏ hàng và luồng đặt hàng bằng React.js kết hợp Tailwind CSS.",
          "Thiết kế RESTful APIs quản lý sản phẩm, đồng bộ trạng thái giỏ hàng và kiểm soát tính hợp lệ dữ liệu đầu vào ở cả client và server.",
          "Mô hình hóa schema MongoDB cho sản phẩm và vòng đời đơn hàng, bảo vệ các thao tác quản trị bằng middleware phân quyền.",
          "Đóng gói dịch vụ bằng Docker và triển khai giao diện frontend lên môi trường đám mây Vercel.",
        ],
        tech: "React.js, Vite, Node.js, Express.js, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Hệ thống tự động hóa quản trị dữ liệu và điều phối tác vụ ứng dụng kiến trúc Serverless kết hợp LLM API.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng ứng dụng web SPA bằng Vanilla JavaScript (ES6+), cơ chế Deep Merge dữ liệu đa phiên bản và chuẩn hóa bố cục in ấn A4.",
          "Thiết kế Serverless Webhook trên Cloudflare Workers kết nối Telegram Bot API và LLM API (Gemini) để tự động phân tích và sinh dữ liệu theo schema.",
          "Thiết lập pipeline CI/CD với GitHub Actions tích hợp bộ kiểm tra chất lượng tự động (Quality Gate Validator) trước khi commit và phát hành.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
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
        items: "Git, GitHub Actions, Postman, Docker, Vercel, Cloudflare Workers",
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
      "Computer Science graduate from Ho Chi Minh City Open University, focusing on web application development with React.js, Next.js, Node.js, Express.js, and TypeScript. Gained hands-on experience at TAMI Technology Co., Ltd in designing PostgreSQL databases, building RESTful APIs for financial data standardization, and deploying cloud applications. Proactively leverages AI workflows and CI/CD automation to ensure code quality and streamline product delivery.",
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
        desc: "Financial stock market data analysis platform integrated with the Vnstock3 library.",
        tasks: [
          "Designed relational database schemas with ticker/time-based indexing and deployed PostgreSQL on Supabase Cloud.",
          "Developed RESTful APIs using Next.js Route Handlers to synchronize and normalize time-series stock data from Vnstock3.",
          "Handled third-party API error edge cases and integrated Google OAuth via NextAuth to secure data access routes.",
          "Created Postman integration test collections and collaborated with mentors to optimize database query workflows.",
          "Managed source control with Git and deployed stable demo builds onto the Vercel cloud environment.",
        ],
        tech: "Next.js (Route Handlers), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
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
          "Designed RESTful APIs following a Controller-Service architecture with Node.js, Express.js, and TypeScript for core recruitment workflows.",
          "Integrated the Next.js frontend with backend services for authentication, job applications, multi-criteria filtering, and pagination.",
          "Implemented JWT authentication with HttpOnly cookies, Role-Based Access Control (RBAC), and a refresh token flow for session security.",
          "Modeled MongoDB schemas, configured compound indexes on search fields, and centralized exception handling via custom middleware.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express.js, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "A full-stack administrative system for student records, course registration, academic performance tracking, and admin data dashboards.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend with Node.js and Express.js to separate business logic, routing, and middleware for maintainability.",
          "Integrated Swagger (OpenAPI) for API documentation and contract testing, streamlining frontend-backend integration.",
          "Developed a responsive admin dashboard with Next.js and Tailwind CSS supporting CRUD operations, filtering, and UI state management.",
          "Implemented access token and refresh token authentication flows with role-based middleware guards.",
        ],
        tech: "Node.js, Express.js, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce web application featuring product catalogs, shopping cart management, and order processing workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed responsive product catalog, product details, shopping cart, and checkout interfaces using React.js and Tailwind CSS.",
          "Built RESTful APIs for product management, cart state synchronization, and client/server input validation.",
          "Modeled MongoDB schemas for products and order lifecycles, securing admin operations with authorization middleware.",
          "Containerized services with Docker and deployed the frontend application to the Vercel cloud platform.",
        ],
        tech: "React.js, Vite, Node.js, Express.js, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
      {
        name: "AI AGENT & AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Automated data management and workflow orchestration system leveraging Serverless architecture and LLM APIs.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered a zero-dependency Vanilla JavaScript (ES6+) SPA featuring runtime deep-merge data state and A4 print layout rendering.",
          "Designed a Serverless Webhook on Cloudflare Workers bridging Telegram Bot API and LLM APIs (Gemini) for schema-based data generation.",
          "Automated CI/CD pipelines with GitHub Actions incorporating a Quality Gate Validator script prior to auto-commit and deployment.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
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
        items: "Git, GitHub Actions, Postman, Docker, Vercel, Cloudflare Workers",
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
