// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Node.js Developer (Express / NestJS)",
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
      projects: "DỰ ÁN & KINH NGHIỆM",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Lập trình viên Node.js chuyên về Express và NestJS, sử dụng TypeScript làm ngôn ngữ chính. Có kinh nghiệm thiết kế RESTful API có khả năng mở rộng theo kiến trúc Module/Controller/Service, tối ưu cơ sở dữ liệu (MongoDB, MySQL, PostgreSQL) và xây dựng hệ thống xác thực bảo mật cao (JWT, RBAC, OAuth2). Quan tâm đến lĩnh vực Y tế số (HealthTech) và mong muốn đóng góp vào các sản phẩm có tác động xã hội tích cực. Luôn ưu tiên viết code sạch, dễ bảo trì và tối ưu hiệu suất server.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống lõi quản lý tuyển dụng toàn diện, xử lý luồng dữ liệu phức tạp giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai hơn 30 RESTful API endpoints sử dụng Node.js và kiến trúc Controller-Service (tương tự pattern NestJS).",
          "Xây dựng hệ thống xác thực tập trung sử dụng JWT, HttpOnly cookies kết hợp với phân quyền RBAC chặt chẽ.",
          "Xử lý và tối ưu hóa truy vấn MongoDB (Aggregation Pipeline), đạt thời gian phản hồi API trung bình dưới 200ms.",
          "Tích hợp Global Error Handling, Validation Pipes và Logging middleware để giám sát hệ thống ổn định.",
        ],
        tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman",
      },
      {
        name: "STUDENT MANAGEMENT SERVER",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Xây dựng hạ tầng máy chủ cho quản lý hồ sơ sinh viên, đăng ký khóa học và quản trị điểm số.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Xây dựng backend theo kiến trúc modular, tách biệt rõ Module/Controller/Service/Repository.",
          "Triển khai cơ chế refresh token và Guards để bảo mật phiên đăng nhập và phân quyền truy cập.",
          "Sử dụng Swagger/OpenAPI để tự động hóa tài liệu API, hỗ trợ các thành viên Frontend tích hợp nhanh chóng.",
          "Thiết kế DTO (Data Transfer Object) và Validation Pipes đảm bảo toàn vẹn dữ liệu đầu vào.",
        ],
        tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware",
      },
    ],
    skills: [
      {
        cat: "Ngôn ngữ & Core",
        items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)",
      },
      {
        cat: "Frameworks",
        items:
          "NestJS, Express.js, Modular Architecture, Controller-Service Pattern",
      },
      {
        cat: "Database",
        items:
          "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Guards/Middleware, Swagger/OpenAPI",
      },
      {
        cat: "DevOps & Tools",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
      {
        cat: "AI Coding Tools",
        items:
          "Gemini, Claude, GitHub Copilot — sử dụng AI hỗ trợ coding hàng ngày",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_NodeJS_VI",
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Node.js Developer (Express / NestJS)",
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
      projects: "WORK EXPERIENCE & PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Node.js Developer specializing in Express and NestJS with TypeScript as the primary language. Experienced in designing scalable RESTful APIs using Module/Controller/Service architecture, optimizing database systems (MongoDB, MySQL, PostgreSQL), and implementing secure authentication flows (JWT, RBAC, OAuth2). Passionate about HealthTech and eager to contribute to products with positive social impact. Committed to writing clean, maintainable code and optimizing server performance.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Core recruitment management system handling complex data flows between employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and implemented 30+ RESTful API endpoints using Node.js and Controller-Service architecture (NestJS-like pattern).",
          "Built a centralized authentication system using JWT/HttpOnly cookies combined with strict RBAC permissioning.",
          "Processed and optimized MongoDB queries (Aggregation Pipeline), achieving sub-200ms average API response times.",
          "Integrated Global Exception Filters, Validation Pipes, and Logging Middleware for system stability and observability.",
        ],
        tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman",
      },
      {
        name: "STUDENT MANAGEMENT SERVER",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Server-side infrastructure for student records, course registration, and academic score management.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Built the backend using a modular architecture with clear Module/Controller/Service/Repository separation.",
          "Implemented robust refresh token mechanisms and Guards for secure sessions and access control.",
          "Leveraged Swagger/OpenAPI for automated API documentation, facilitating rapid frontend integration.",
          "Designed DTOs (Data Transfer Objects) and Validation Pipes to ensure input data integrity.",
        ],
        tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware",
      },
    ],
    skills: [
      {
        cat: "Languages & Core",
        items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)",
      },
      {
        cat: "Frameworks",
        items:
          "NestJS, Express.js, Modular Architecture, Controller-Service Pattern",
      },
      {
        cat: "Databases",
        items:
          "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Guards/Middleware, Swagger/OpenAPI",
      },
      {
        cat: "DevOps & Tools",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
      {
        cat: "AI Coding Tools",
        items: "Gemini, Claude, GitHub Copilot — daily AI-assisted development",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_NodeJS_EN",
  },
};
