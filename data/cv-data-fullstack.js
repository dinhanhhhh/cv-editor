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
      { icon: "phone", text: "0349421079" },
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
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG",
    },
    objective:
      "Lập trình viên Full-Stack với nền tảng React.js, Next.js, Node.js và TypeScript. Có kinh nghiệm xây dựng ứng dụng web full-stack, tích hợp RESTful API, làm việc với cơ sở dữ liệu và triển khai tính năng ở cả frontend lẫn backend. Quan tâm đến automation, scripting và xử lý dữ liệu; luôn ưu tiên viết code sạch, dễ bảo trì. Sẵn sàng làm việc full-time, học nhanh và thích nghi tốt với nhiều nhiệm vụ IT khác nhau.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu chứng khoán.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel."
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng toàn diện giúp tối ưu hóa quá trình tuyển dụng cho cả nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển hơn 20 RESTful API endpoints cho quản lý việc làm và hồ sơ ứng tuyển bằng Node.js và Express.",
          "Tích hợp frontend Next.js với backend, xử lý dữ liệu ổn định cho các luồng đăng nhập, ứng tuyển và quản lý người dùng.",
          "Xây dựng cơ chế xác thực JWT với HttpOnly cookies, RBAC và refresh token flow.",
          "Tối ưu truy vấn MongoDB, giúp thời gian phản hồi API dưới 300ms.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack để quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc mô-đun với Node.js và Express cho các nghiệp vụ quản lý sinh viên.",
          "Tích hợp Swagger để tài liệu hóa API và hỗ trợ kiểm thử, bàn giao nhanh hơn.",
          "Triển khai access token và refresh token cho quá trình xác thực người dùng.",
          "Phát triển dashboard quản trị responsive với các thao tác CRUD và xử lý dữ liệu theo thời gian thực.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware",
      },
      {
        cat: "Automation & Data",
        items:
          "JavaScript/TypeScript scripting, API integration, Data processing, Swagger, Postman",
      },
      {
        cat: "Cơ sở dữ liệu",
        items:
          "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Tối ưu hóa truy vấn",
      },
      { cat: "Công cụ", items: "Git/GitHub, Vercel, Render, Docker" },
      {
        cat: "Ngoại ngữ",
        items:
          "Tiếng Anh: Có thể đọc hiểu tài liệu kỹ thuật và giao tiếp công việc cơ bản",
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
      { icon: "phone", text: "0349421079" },
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
      projects: "FEATURED PROJECTS",
      skills: "SKILLS",
    },
    objective:
      "Full-Stack Developer with hands-on experience in React.js, Next.js, Node.js, and TypeScript. Experienced in building full-stack web applications, integrating RESTful APIs, working with databases, and delivering features across both frontend and backend. Interested in automation, scripting, and data-related tasks, with a strong focus on clean, maintainable code. Available full-time, eager to learn, and adaptable to various IT responsibilities.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Designed database schemas and successfully deployed PostgreSQL databases on the Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google Authentication OAuth flow centralized with NextAuth (Google Provider) for user sessions.",
          "Tested and optimized API performance using Postman, resolving critical bugs under mentor guidance.",
          "Configured CI/CD and deployed the demo application smoothly onto the Vercel cloud environment."
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A recruitment platform streamlining the hiring process for employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed 20+ RESTful API endpoints for job and application management using Node.js and Express.",
          "Integrated the Next.js frontend with backend services for authentication, applications, and user management flows.",
          "Implemented JWT-based authentication with HttpOnly cookies, RBAC, and a token refresh flow.",
          "Optimized MongoDB queries and reduced API response times to under 300ms.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "An administrative system for managing student records and academic performance.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend with Node.js and Express for student management workflows.",
          "Integrated Swagger for API documentation, testing, and smoother handoff.",
          "Implemented authentication with access and refresh tokens.",
          "Developed a responsive admin dashboard with CRUD flows and real-time data handling.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware",
      },
      {
        cat: "Automation & Data",
        items:
          "JavaScript/TypeScript scripting, API integration, Data processing, Swagger, Postman",
      },
      {
        cat: "Databases",
        items: "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Query Optimization",
      },
      { cat: "Tools", items: "Git/GitHub, Vercel, Render, Docker" },
      {
        cat: "English",
        items:
          "Able to read technical documentation and communicate at a basic professional level",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_FullStackDev_EN",
  },
};
