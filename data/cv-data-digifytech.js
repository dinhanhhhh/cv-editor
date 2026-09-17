// ===================================
// CV DATA - DIGIFYTECH BACK-END DEVELOPER INTERN
// Tailored for DigifyTech: Teamwork with BA, PM, UI/UX, FE, Tester + E-Commerce focus
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Thực Tập Sinh Back-End Developer",
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
      objective: "TÓM TẮT NĂNG LỰC & MỤC TIÊU",
      education: "HỌC VẤN",
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Sinh viên năm cuối ngành Khoa học Máy tính (Đại học Mở TP.HCM) mong muốn ứng tuyển vị trí Thực tập sinh Back-End Developer tại DigifyTech. Nắm vững tư duy lập trình với Node.js, Express, RESTful API và cơ sở dữ liệu (PostgreSQL, MongoDB). Có kinh nghiệm viết tài liệu API bằng Swagger giúp Frontend và Tester tích hợp dễ dàng, cùng kỹ năng kiểm thử Postman chặt chẽ. Tinh thần cầu tiến, chủ động học hỏi, sẵn sàng phối hợp cùng BA, PM, UI/UX, Dev và QA để hoàn thành tốt các dự án thực tế tại DigifyTech và hướng đến gắn bó lâu dài.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để xử lý và truy xuất dữ liệu chứng khoán.",
          "Tích hợp luồng xác thực Google OAuth qua NextAuth (Google Provider) bảo mật phiên truy cập người dùng.",
          "Kiểm thử hiệu năng và độ tin cậy của API bằng Postman, tối ưu hóa các luồng truy xuất dữ liệu.",
          "Phối hợp đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Node.js, Next.js (API Routes), PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống API dịch vụ lõi cho nền tảng thương mại điện tử, quản lý sản phẩm, giỏ hàng và vòng đời đơn hàng.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế và xây dựng hơn 15 RESTful API endpoints cho quản lý danh mục sản phẩm, biến thể và giỏ hàng phía server.",
          "Triển khai Middleware phân quyền Admin/User (RBAC) và xác thực JWT bảo vệ các thao tác dữ liệu nhạy cảm.",
          "Tài liệu hóa toàn bộ API bằng Swagger UI, giúp đội ngũ Frontend và Tester kiểm thử, tích hợp nhanh chóng và chính xác.",
          "Thực hiện kiểm thử API toàn diện bằng Postman, tích hợp Global Error Handling xử lý lỗi tập trung.",
        ],
        tech: "Node.js, Express, MongoDB / PostgreSQL, RESTful API, JWT, Swagger, Postman, Git",
      },
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống lõi quản lý tuyển dụng trực tuyến, xử lý luồng dữ liệu phân quyền giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai hơn 20 RESTful API endpoints theo kiến trúc Controller-Service mô-đun hóa rõ ràng, dễ bảo trì.",
          "Xây dựng luồng xác thực an toàn với JWT, HttpOnly Cookies và Refresh Token flow chống tấn công XSS/CSRF.",
          "Tối ưu hóa sơ đồ CSDL MongoDB (Schema Design, Compound Index) giúp tăng tốc độ truy vấn lọc dữ liệu.",
          "Chủ động phối hợp kiểm thử với các thành viên, xử lý kịp thời các trường hợp biên (edge cases).",
        ],
        tech: "Node.js, Express, TypeScript, MongoDB, JWT (HttpOnly, RBAC), Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend Core",
        items: "Node.js, Express.js, JavaScript (ES6+), TypeScript, RESTful API, MVC / Controller-Service, Middleware",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, MySQL, MongoDB (Mongoose), Supabase, Thiết kế Schema CSDL, Tối ưu hóa truy vấn SQL/NoSQL",
      },
      {
        cat: "API & Tài liệu",
        items: "Swagger / OpenAPI (Viết tài liệu API), Postman (Kiểm thử API), JWT Authentication, RBAC, Global Error Handling",
      },
      {
        cat: "Kỹ năng làm việc nhóm",
        items: "Phối hợp với BA (làm rõ nghiệp vụ), UI/UX & Frontend (tích hợp API), QA/Tester (kiểm thử & sửa lỗi)",
      },
      {
        cat: "Công cụ & Tác phong",
        items: "Git/GitHub, Vercel, Docker cơ bản; Địa điểm làm việc gần cty (Thủ Đức di chuyển nhanh sang Bình Lợi Trung)",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_BackEnd_Intern_TruongDinhAnh",
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Back-End Developer Intern",
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
      "Final-year Computer Science student at Ho Chi Minh City Open University seeking a Back-End Developer Intern position at DigifyTech. Strong foundations in Node.js, Express, RESTful APIs, and databases (PostgreSQL, MongoDB). Experienced in API documentation with Swagger for seamless Frontend/QA collaboration and API testing with Postman. Proactive, fast learner, eager to work closely with BA, PM, UI/UX, Dev, and Tester teams on production projects, aiming for a full-time role post-internship.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Designed relational database schemas and deployed PostgreSQL on the Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google OAuth authentication via NextAuth for secure session management.",
          "Tested and verified API endpoints using Postman, optimizing data querying workflows under mentor guidance.",
          "Assisted in configuring deployment pipelines to smoothly run demo applications on Vercel.",
        ],
        tech: "Node.js, Next.js (API Routes), PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Core backend API services for an e-commerce platform managing products, server-side carts, and order lifecycles.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed and developed 15+ RESTful API endpoints for multi-variant products, categories, and server-side cart logic.",
          "Implemented Admin/User RBAC middleware and JWT authentication protecting sensitive business operations.",
          "Documented APIs with Swagger UI for efficient integration and test execution by Frontend and QA teams.",
          "Conducted thorough testing with Postman and integrated Global Error Handling for system reliability.",
        ],
        tech: "Node.js, Express, MongoDB / PostgreSQL, RESTful API, JWT, Swagger, Postman, Git",
      },
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Core recruitment management backend handling secure authentication and complex data workflows.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Built 20+ RESTful API endpoints following a modular Controller-Service architecture for maintainability.",
          "Implemented secure JWT authentication with HttpOnly cookies and Refresh Token flow preventing XSS/CSRF.",
          "Optimized MongoDB schemas and compound indexes to accelerate search and filtering query speeds.",
          "Collaborated closely with cross-functional peers to debug and handle edge-case business logic.",
        ],
        tech: "Node.js, Express, TypeScript, MongoDB, JWT (HttpOnly, RBAC), Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend Core",
        items: "Node.js, Express.js, JavaScript (ES6+), TypeScript, RESTful API, MVC / Controller-Service, Middleware",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, MongoDB (Mongoose), Supabase, Schema Design, SQL/NoSQL Query Optimization",
      },
      {
        cat: "API & Documentation",
        items: "Swagger / OpenAPI, Postman Testing, JWT Authentication, RBAC, Global Error Handling",
      },
      {
        cat: "Team Collaboration",
        items: "Effective collaboration with BA (requirements), UI/UX & Frontend (API integration), QA/Tester (bug fixing)",
      },
      {
        cat: "Tools & Workplace",
        items: "Git/GitHub, Vercel, Docker basic; Convenient commute from Thu Duc to Binh Loi Trung office",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_BackEnd_Intern_TruongDinhAnh",
  },
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
