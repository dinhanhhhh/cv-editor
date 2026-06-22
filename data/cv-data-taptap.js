// ===================================
// CV DATA FOR TAPTAP INTERNSHIP
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

if (typeof require !== "undefined" && typeof cvGlobalExp === "undefined") {
  global.cvGlobalExp = require("./cv-global.js");
}

var cvData = {
  vi: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Software Engineer Intern",
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
      experience: "KINH NGHIỆM THỰC TẾ",
      projects: "DỰ ÁN KỸ THUẬT TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Cử nhân Khoa học Máy tính định hướng phát triển Backend chuyên sâu với tư duy logic tốt. Đam mê thiết kế RESTful API, tối ưu hóa cơ sở dữ liệu (PostgreSQL, MongoDB) và phân quyền bảo mật hệ thống. Có năng lực ứng dụng hiệu quả các công cụ AI (Claude, Copilot, Lovable AI) để đẩy nhanh tốc độ code và giải quyết bug nhanh chóng. Am hiểu quy trình làm việc Agile, Git và vận hành container cơ bản (Docker). Mong muốn gia nhập TAPTAP ở vị trí Backend Intern để cùng phát triển các hệ thống E-commerce & Loyalty hiệu năng cao.",
    education: cvGlobalEdu.vi,
    experience: cvGlobalExp.vi,
    projects: [
      {
        name: "E-COMMERCE & SHOPPING PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Ứng dụng mua sắm trực tuyến tích hợp quy trình đặt hàng và quản lý sản phẩm phía server.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Phát triển giao diện giỏ hàng và trang giới thiệu sản phẩm bằng React, kết hợp validation form phía client.",
          "Xây dựng API quản lý sản phẩm đa phân loại và hệ thống giỏ hàng phía server sử dụng Node.js & Express.",
          "Ứng dụng AI Coding Workflow (Lovable AI, Claude) để thiết kế giao diện động, tăng 40% hiệu suất hoàn thiện sản phẩm.",
          "Thiết kế cơ chế lưu trữ ảnh qua Cloudinary và xử lý trạng thái đơn hàng (Order Lifecycle) nhất quán.",
        ],
        tech: "React, Node.js, Express, MongoDB/MySQL, Lovable AI, Cloudinary, Git, Vercel",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống quản lý tuyển dụng toàn diện hỗ trợ phân quyền người dùng và xử lý luồng dữ liệu bảo mật.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế 20+ RESTful API endpoints sử dụng Node.js & TypeScript, áp dụng kiến trúc mô-đun để dễ dàng bảo trì.",
          "Triển khai cơ chế xác thực JWT qua HttpOnly Cookies kết hợp phân quyền RBAC và luồng Refresh Token.",
          "Sử dụng Docker Compose để thiết lập môi trường phát triển nhất quán giữa local và staging.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Docker, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "Backend & Core",
        items:
          "Node.js (Express), RESTful API, JWT, RBAC Middleware, JavaScript/TypeScript (ES6+), C/C++ basic",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, Tối ưu hóa truy vấn",
      },
      {
        cat: "DevOps & Tools",
        items:
          "Docker, Docker Compose, Linux basics, Git/GitHub, CI/CD cơ bản, Postman",
      },
      {
        cat: "AI-Assisted",
        items:
          "AI Coding Workflow (Claude, Copilot, Lovable AI) để tối ưu và tăng tốc viết code",
      },
      {
        cat: "Frontend cơ bản",
        items: "React, Next.js, HTML5 & CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Lợi thế khác",
        items:
          "Làm việc nhóm tốt trong môi trường Agile, đọc hiểu tài liệu tiếng Anh tốt",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_TAPTAP_Intern",
  },

  en: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Software Engineer Intern",
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
      experience: "WORK EXPERIENCE",
      projects: "TECHNICAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Computer Science graduate focused on Backend development with strong logical thinking. Passionate about designing RESTful APIs, optimizing databases (PostgreSQL, MongoDB), and securing system authorization. Highly efficient in leveraging smart AI tools (Claude, Copilot, Lovable AI) to accelerate code generation and speed up debugging. Familiar with Agile, Git workflows, and basic containerization (Docker). Eager to join TAPTAP as a Backend Intern to contribute to building high-performance E-commerce & Loyalty systems.",
    education: cvGlobalEdu.en,
    experience: cvGlobalExp.en,
    projects: [
      {
        name: "E-COMMERCE & SHOPPING PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "An online shopping application integrated with order processing and product management on the server side.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed cart interfaces and responsive landing pages using React with client-side form validation.",
          "Built server-side product management APIs and cart persistence flows using Node.js & Express.",
          "Leveraged AI coding workflows (Lovable AI, Claude) to accelerate dynamic UI component delivery by 40%.",
          "Designed payment state handling and image storage integrations via Cloudinary.",
        ],
        tech: "React, Node.js, Express, MongoDB/MySQL, Lovable AI, Cloudinary, Git, Vercel",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A recruitment management system with secure user authentication and modular backend routing.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed 20+ RESTful API endpoints using Node.js & TypeScript, applying modular patterns for maintainability.",
          "Implemented secure JWT authentication via HttpOnly cookies, RBAC, and refresh token flows.",
          "Utilized Docker Compose to establish a consistent local development and testing environment.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Docker, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "Backend & Core",
        items:
          "Node.js (Express), RESTful API, JWT, RBAC Middleware, JavaScript/TypeScript (ES6+), basic C/C++",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, Query Optimization",
      },
      {
        cat: "DevOps & Tools",
        items:
          "Docker, Docker Compose, Linux basics, Git/GitHub, basic CI/CD, Postman",
      },
      {
        cat: "AI-Assisted",
        items:
          "AI Coding Workflow (Claude, Copilot, Lovable AI) for code optimization and acceleration",
      },
      {
        cat: "Basic Frontend",
        items: "React, Next.js, HTML5 & CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Other Strengths",
        items:
          "Strong team player in Agile environments, good reading comprehension in English",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_TAPTAP_Intern",
  },
};
