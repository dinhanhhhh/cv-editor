// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Software Engineering Intern (Node.js / TypeScript)",
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
      objective: "MỤC TIÊU NGHỀ NGHIỆP",
      education: "HỌC VẤN",
      projects: "DỰ ÁN KỸ THUẬT",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Fresher Developer đam mê xây dựng hệ thống backend hiệu năng cao với Node.js và TypeScript. Có tư duy về kiến trúc mô-đun và lập trình hướng sự kiện (Event-driven). Thành thạo việc sử dụng AI tools (Cursor, Claude) để tối ưu hóa quy trình phát triển mã nguồn và đảm bảo chất lượng code. Mong muốn đóng góp vào đội ngũ MDaaS tại OPSWAT.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "JOB PORTAL PLATFORM (Node.js & TS)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống quản lý tuyển dụng với kiến trúc backend tập trung vào tính mở rộng và bảo mật dữ liệu.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế 20+ RESTful API endpoints sử dụng Node.js & TypeScript, áp dụng kiến trúc mô-đun để dễ dàng bảo trì.",
          "Triển khai xác thực đa lớp với JWT, HttpOnly Cookies và cơ chế Refresh Token đảm bảo an toàn phiên làm việc.",
          "Xây dựng hệ thống phân quyền (RBAC) chặt chẽ cho Nhà tuyển dụng và Ứng viên.",
          "Tối ưu hóa Aggregation Pipeline trong MongoDB, đảm bảo phản hồi API ổn định dưới 300ms.",
          "Ứng dụng AI Coding Workflow để thực hiện unit test và refactor code theo chuẩn Clean Code.",
        ],
        tech: "Node.js, TypeScript, Next.js, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị hồ sơ với Dashboard tương tác thời gian thực và tài liệu API chuẩn hóa.",
        github:
          "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Phát triển Backend dựa trên mô hình MVC tách biệt, chuẩn bị sẵn sàng cho việc chuyển đổi sang Microservices.",
          "Thiết lập Swagger API Documentation giúp chuẩn hóa giao thức kết nối giữa các module hệ thống.",
          "Triển khai Dashboard với Next.js & TypeScript, xử lý logic phức tạp tại Client-side một cách tối ưu.",
          "Sử dụng Docker Compose để thiết lập môi trường phát triển nhất quán giữa Local và Staging.",
        ],
        tech: "Node.js, TypeScript, MongoDB, Next.js, Swagger, Docker",
      },
    ],
    skills: [
      {
        cat: "Core Tech",
        items:
          "TypeScript (Strong), Node.js (Express), JavaScript (ES6+), React/Next.js",
      },
      {
        cat: "Backend Logic",
        items:
          "RESTful API Design, JWT, RBAC, Event-driven (Conceptual), MVC/Modular Architecture",
      },
      {
        cat: "Database",
        items: "MongoDB (Mongoose), MySQL, Query Optimization",
      },
      {
        cat: "AI & Tools",
        items:
          "AI-Assisted Coding (Cursor, Copilot), Git, Postman, Docker, Swagger",
      },
      {
        cat: "Soft Skills",
        items:
          "Technical English (Read/Write), Receptive to feedback, Proactive problem solving",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_OPSWAT_Intern",
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Software Engineering Intern (Node.js / TypeScript)",
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
      objective: "CAREER OBJECTIVE",
      education: "EDUCATION",
      projects: "TECHNICAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Passionate Fresher Developer focused on building high-performance backend systems with Node.js and TypeScript. Strong interest in Modular Architecture and Event-driven systems. Proficient in leveraging AI tools (Cursor, Claude) to accelerate development cycles and ensure code quality. Eager to contribute to the MDaaS team at OPSWAT.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL PLATFORM (Node.js & TS)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A recruitment management system with a backend architecture focused on scalability and security.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed 20+ RESTful API endpoints using Node.js & TypeScript, applying modular patterns for maintainability.",
          "Implemented multi-layer authentication with JWT, HttpOnly Cookies, and Refresh Token mechanisms.",
          "Engineered a robust Role-Based Access Control (RBAC) system for Employers and Candidates.",
          "Optimized MongoDB Aggregation Pipelines, maintaining stable API response times under 300ms.",
          "Utilized AI-Assisted workflows for automated unit testing and code refactoring following Clean Code standards.",
        ],
        tech: "Node.js, TypeScript, Next.js, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "An administrative system featuring a real-time interactive dashboard and standardized API documentation.",
        github:
          "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Developed Backend based on decoupled MVC patterns, preparing the architecture for microservices transition.",
          "Established Swagger API Documentation to standardize communication protocols between system modules.",
          "Built a responsive Dashboard using Next.js & TypeScript, optimizing complex client-side logic.",
          "Leveraged Docker Compose to maintain a consistent development environment across local and staging.",
        ],
        tech: "Node.js, TypeScript, MongoDB, Next.js, Swagger, Docker",
      },
    ],
    skills: [
      {
        cat: "Core Tech",
        items:
          "TypeScript (Strong), Node.js (Express), JavaScript (ES6+), React/Next.js",
      },
      {
        cat: "Backend Logic",
        items:
          "RESTful API Design, JWT, RBAC, Event-driven (Conceptual), MVC/Modular Architecture",
      },
      {
        cat: "Database",
        items: "MongoDB (Mongoose), MySQL, Query Optimization",
      },
      {
        cat: "AI & Tools",
        items:
          "AI-Assisted Coding (Cursor, Copilot), Git, Postman, Docker, Swagger",
      },
      {
        cat: "Soft Skills",
        items:
          "Technical English (Written/Reading), Receptive to feedback, Proactive problem solving",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_OPSWAT_Intern",
  },
};
