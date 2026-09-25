// =========================================================================
// OCTO SOFTWARE CV DATA - FULL STACK DEVELOPER
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "CÔNG TY OCTO SOFTWARE",
    position: "Full Stack Developer",
    recipient: "Bộ phận Tuyển dụng Octo Software",
    email: "tuyendung@octosoft.co",
    contact: "tuyendung@octosoft.co",
    jobUrl: "https://flowagentica.com",
    notes: "343 Phạm Ngũ Lão, P. Bến Thành, Q.1. Fullstack web + API + CSDL (PostgreSQL, MongoDB). AI Agent (flowagentica.com).",
    pitchHighlights: "Tư duy AI-First, phát triển AI Agent & Workflow tự động hóa kết hợp nền tảng Full-Stack React/Next.js/Node/PostgreSQL"
  },
  vi: {
    projectDisplayLimit: 3,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Full-Stack Developer",
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
      "Lập trình viên Full-Stack tốt nghiệp chuyên ngành Khoa học Máy tính, có kinh nghiệm phát triển ứng dụng web với React.js, Next.js, Node.js, Express và các hệ cơ sở dữ liệu (PostgreSQL, MongoDB, MySQL). Có kinh nghiệm xây dựng RESTful API, tích hợp dịch vụ bên thứ ba và ứng dụng AI Agent vào quy trình tự động hóa phần mềm. Nắm vững quy trình làm việc với Git, sẵn sàng học hỏi và đóng góp vào các dự án phần mềm tại Octo Software.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng và tối ưu hơn 25+ RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất và xử lý dữ liệu chứng khoán thời gian thực.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT (AI AGENT & AUTOMATION PLATFORM)",
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
      {
        name: "NỀN TẢNG TÌM KIẾM VIỆC LÀM (JOB PORTAL PLATFORM)",
        date: "09/2025 - 11/2025",
        role: "Developer",
        desc: "Nền tảng kết nối ứng viên và nhà tuyển dụng với hệ thống backend phân quyền và lọc dữ liệu đa chiều.",
        github: "https://github.com/dinhanhhhh/jobportal",
        tasks: [
          "Phát triển giao diện người dùng responsive, tối ưu UX/UI với React, Next.js và Tailwind CSS.",
          "Xây dựng 20+ RESTful API endpoints bằng Node.js và Express, tối ưu truy vấn MongoDB giúp thời gian phản hồi API dưới 300ms.",
          "Triển khai cơ chế xác thực JWT bảo mật qua HttpOnly Cookies, phân quyền RBAC đa cấp độ (Ứng viên / Doanh nghiệp).",
        ],
        tech: "React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, JWT, Postman",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 10/2025",
        role: "Developer",
        desc: "Ứng dụng web thương mại điện tử phục vụ duyệt sản phẩm, quản lý giỏ hàng và quy trình thanh toán trực tuyến.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng frontend bằng React và Tailwind CSS, tích hợp đồng bộ trạng thái giỏ hàng giữa LocalStorage và CSDL.",
          "Thiết kế RESTful API với Node.js, Express và MongoDB, xử lý luồng đặt hàng an toàn chống lỗi race condition tồn kho.",
          "Đóng gói Docker container cho backend, tối ưu hóa truy vấn CSDL và deploy ứng dụng ổn định lên Vercel.",
        ],
        tech: "React, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items:
          "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & API",
        items:
          "Node.js, Express.js, RESTful API, Third-party API Integration, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Cơ sở dữ liệu",
        items:
          "PostgreSQL, MongoDB, MySQL, Supabase, Tối ưu hóa truy vấn (Query Optimization), Database Design",
      },
      {
        cat: "AI & AI Agent",
        items:
          "AI Agent Workflows, LLM APIs (Gemini/OpenAI), Prompt Engineering, Cursor, Claude, GitHub Copilot",
      },
      {
        cat: "Hệ thống & Công cụ",
        items:
          "Git/GitHub, CI/CD, Docker, GitHub Actions, Cloudflare Workers, Vercel, Postman",
      },
      {
        cat: "Ngoại ngữ & Quy trình",
        items:
          "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt, giao tiếp công việc cơ bản; Viết tài liệu kỹ thuật, Code review",
      },
    ],
    btnText: "In / Lưu PDF",
    docTitle: "CV_TruongDinhAnh_OctoSoft_Fullstack_VI",
  },
  en: {
    projectDisplayLimit: 3,
    name: "TRUONG DINH ANH",
    title: "Full-Stack Developer",
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
      "Full-Stack Developer with a degree in Computer Science, experienced in developing web applications using React.js, Next.js, Node.js, Express, and databases (PostgreSQL, MongoDB, MySQL). Hands-on experience building RESTful APIs, integrating third-party services, and applying AI Agents into automated software pipelines. Proficient in Git workflows, eager to contribute effectively to software development at Octo Software.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Stock market financial data analysis system connected to Vnstock3 financial data library.",
        tasks: [
          "Designed relational database architecture and deployed PostgreSQL database on Supabase Cloud infrastructure.",
          "Developed and optimized 25+ RESTful API endpoints using Next.js Route Handlers for real-time stock market data processing.",
          "Integrated Google OAuth authentication flow using NextAuth (Google Provider).",
          "Conducted API performance testing using Postman, handled errors, and optimized data retrieval pipelines.",
          "Containerized and deployed the demo web application reliably on Vercel Cloud platform.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "AI AGENT AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Workflow management and automation system powered by AI Agent architecture and serverless infrastructure.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered high-performance, real-time interactive user interface using Vanilla JS/HTML5/CSS3 with zero external dependencies.",
          "Built serverless backend on Cloudflare Workers integrating Telegram Bot Bridge and LLM APIs (Gemini/OpenAI) for autonomous agent workflows.",
          "Automated end-to-end CI/CD pipeline via GitHub Actions: Telegram command -> AI Agent analysis & code generation -> auto-commit & build in 40 seconds.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "09/2025 - 11/2025",
        role: "Developer",
        desc: "Online recruitment platform connecting candidates and employers with role-based access control and multi-filter search.",
        github: "https://github.com/dinhanhhhh/jobportal",
        tasks: [
          "Built responsive and intuitive UI/UX with React, Next.js, and Tailwind CSS across all device screen sizes.",
          "Constructed 20+ RESTful API endpoints using Node.js and Express; optimized MongoDB queries for sub-300ms latency.",
          "Implemented secure JWT authentication with HttpOnly cookies and Role-Based Access Control (Candidate / Employer).",
        ],
        tech: "React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, JWT, Postman",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 10/2025",
        role: "Developer",
        desc: "Full-stack e-commerce web application featuring dynamic catalog, cart state synchronization, and checkout workflow.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed front-end application with React and Tailwind CSS, synchronizing cart states between LocalStorage and backend database.",
          "Designed RESTful APIs using Node.js, Express, and MongoDB; engineered atomic inventory checks preventing race conditions during checkout.",
          "Containerized backend with Docker, optimized database queries, and deployed web services reliably to Vercel.",
        ],
        tech: "React, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items:
          "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & API",
        items:
          "Node.js, Express.js, RESTful API, Third-party API Integration, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Databases",
        items:
          "PostgreSQL, MongoDB, MySQL, Supabase, Query Optimization, Database Architecture Design",
      },
      {
        cat: "AI & AI Agent",
        items:
          "AI Agent Workflows, LLM APIs (Gemini/OpenAI), Prompt Engineering, Cursor, Claude, GitHub Copilot",
      },
      {
        cat: "Systems & Tools",
        items:
          "Git/GitHub, CI/CD, Docker, GitHub Actions, Cloudflare Workers, Vercel, Postman",
      },
      {
        cat: "Languages & Workflow",
        items:
          "English (Technical reading, documentation & basic communication); Technical documentation, Code review",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_OctoSoft_Fullstack_EN",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
