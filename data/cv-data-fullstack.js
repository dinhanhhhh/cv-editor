// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
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
      "Lập trình viên Full-Stack với nền tảng vững chắc về React.js, Next.js, Node.js và TypeScript. Có kinh nghiệm thiết kế kiến trúc web đa tầng, xây dựng RESTful APIs bảo mật, làm việc với PostgreSQL/MongoDB và triển khai ứng dụng lên Cloud. Chủ động ứng dụng tư duy AI-First, scripting tự động hóa để tăng tốc độ phát triển sản phẩm; luôn đề cao Clean Code và khả năng mở rộng. Sẵn sàng làm việc full-time và thích nghi nhanh với mục tiêu công nghệ của doanh nghiệp.",
    education: cvGlobalEdu.vi,
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
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng toàn diện giúp tối ưu hóa quá trình tuyển dụng cho cả nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế kiến trúc API theo dạng module hóa cho nghiệp vụ quản lý việc làm, hồ sơ và quy trình tuyển dụng ứng viên.",
          "Tích hợp frontend Next.js với backend Node.js/Express, xử lý đồng bộ dữ liệu ổn định cho các luồng thao tác người dùng.",
          "Xây dựng cơ chế xác thực JWT với HttpOnly cookies, phân quyền người dùng (RBAC) và refresh token flow an toàn.",
          "Tối ưu truy vấn cơ sở dữ liệu MongoDB, giúp thời gian phản hồi API duy trì ổn định dưới 300ms.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack để quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc mô-đun với Node.js và Express cho các nghiệp vụ quản lý sinh viên.",
          "Tích hợp Swagger để tài liệu hóa API và hỗ trợ kiểm thử, bàn giao nhanh hơn.",
          "Triển khai cơ chế xác thực access token và refresh token cho quá trình phân quyền người dùng.",
          "Phát triển dashboard quản trị responsive với các thao tác CRUD và xử lý dữ liệu theo thời gian thực.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js 15, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, MVC Architecture",
      },
      {
        cat: "AI & Automation",
        items:
          "Ứng dụng AI (Cursor, Claude), Tích hợp LLM API, Scripting tự động hóa (JS/TS), Swagger, Postman",
      },
      {
        cat: "Cơ sở dữ liệu",
        items:
          "PostgreSQL, MongoDB (Mongoose), MySQL, Tối ưu hóa truy vấn, Supabase Cloud",
      },
      { cat: "Công cụ", items: "Git/GitHub, CI/CD, Vercel, Render, Docker cơ bản" },
      {
        cat: "Ngoại ngữ",
        items:
          "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật chuyên ngành và giao tiếp công việc cơ bản",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_FullStackDev_VI",
  },

  en: {
    projectDisplayLimit: 2,
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
      "Full-Stack Developer with solid expertise in React.js, Next.js, Node.js, and TypeScript. Experienced in designing multi-tier web architectures, building secure RESTful APIs, managing PostgreSQL/MongoDB, and cloud deployments. Proactively adopting an AI-First mindset and scripting automation to accelerate development lifecycle while adhering to Clean Code standards. Available full-time, fast learner, and highly adaptable to enterprise engineering goals.",
    education: cvGlobalEdu.en,
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
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A recruitment platform streamlining the hiring process for employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Engineered modular RESTful APIs for end-to-end recruitment management, job postings, and candidate applications.",
          "Integrated Next.js frontend with Node.js/Express backend for robust, synchronized data flows across user journeys.",
          "Implemented JWT authentication with HttpOnly cookies, Role-Based Access Control (RBAC), and a secure refresh token flow.",
          "Optimized MongoDB queries, ensuring consistent API response times under 300ms.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "An administrative system for managing student records and academic performance.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend architecture with Node.js and Express for academic and student record operations.",
          "Integrated Swagger for interactive API documentation, rapid contract testing, and smooth developer handoff.",
          "Implemented authentication flows with access and refresh tokens for role-based system access.",
          "Developed a responsive admin dashboard with CRUD flows and real-time data handling.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js 15, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, MVC Architecture",
      },
      {
        cat: "AI & Automation",
        items:
          "AI-assisted development (Cursor, Claude), LLM API integration, Scripting (JS/TS), Swagger, Postman",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, Query Optimization, Supabase Cloud",
      },
      { cat: "Tools", items: "Git/GitHub, CI/CD, Vercel, Render, Basic Docker" },
      {
        cat: "English",
        items:
          "Able to read technical documentation and communicate effectively at a professional level",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_FullStackDev_EN",
  },
};
