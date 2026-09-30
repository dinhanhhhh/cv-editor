// =========================================================================
// TINOVATION CV DATA - FRESHER NODEJS MERN DEVELOPER
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "Tinovation",
    position: "Fresher NodeJS MERN Developer",
    recipient: "Bộ phận Tuyển dụng Tinovation",
    email: "tino@tinovation.io.vn",
    contact: "tino@tinovation.io.vn - 08 2727 7157",
    jobUrl: "",
    notes: "Email subject: [Tinovation] Fresher NodeJS MERN - Trương Đình Anh",
    pitchHighlights: "Vững nền tảng MERN Stack (Node.js, Express, MongoDB, React), kinh nghiệm thiết kế RESTful API & CSDL, ứng dụng AI tools tăng tốc độ phát triển"
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Fresher NodeJS MERN Developer",
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
      "Lập trình viên tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM, có nền tảng vững chắc về MERN Stack (JavaScript/Node.js, ExpressJS, MongoDB, ReactJS) và kiến trúc RESTful APIs. Có kinh nghiệm thực tập thiết kế cơ sở dữ liệu, xây dựng hệ thống RESTful APIs và chủ động ứng dụng công cụ AI vào quy trình phân tích và tối ưu mã nguồn. Định hướng học hỏi và bứt phá từ Fresher lên Junior/Middle Node.js Developer lâu dài tại Tinovation.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính (kết nối thư viện Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu các dịch vụ RESTful APIs xử lý và truy xuất dữ liệu với Next.js Route Handlers.",
          "Tích hợp luồng xác thực bảo mật Google Authentication thông qua NextAuth.",
          "Kiểm thử hiệu năng API bằng Postman, tối ưu hóa truy vấn và xử lý ngoại lệ HTTP.",
          "Làm việc nhóm theo quy trình Git chuẩn (branching, pull request, code review) và CI/CD.",
        ],
        tech: "Node.js, Next.js, PostgreSQL, Supabase, NextAuth, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (MERN STACK E-COMMERCE)",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Hệ thống web thương mại điện tử xây dựng trên kiến trúc MERN Stack với thời gian tải trang dưới 2 giây.",
        tasks: [
          "Phát triển hệ thống Backend RESTful API với Node.js, ExpressJS và MongoDB (Mongoose ODM).",
          "Thiết kế cấu trúc dữ liệu MongoDB Schema linh hoạt cho danh mục sản phẩm, người dùng và đơn hàng.",
          "Hiện thực hóa xác thực và phân quyền bằng JSON Web Token (JWT), quản lý giỏ hàng và xử lý thanh toán.",
          "Tích hợp và phối hợp đồng bộ dữ liệu với giao diện Frontend ReactJS qua RESTful APIs.",
          "Đóng gói môi trường phát triển bằng Docker Compose và kiểm thử chức năng tự động.",
        ],
        tech: "Node.js, ExpressJS, MongoDB, ReactJS, JWT, Postman, Docker, Git",
      },
      {
        name: "HỆ THỐNG CV EDITOR & AI AUTOMATION",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng tự động hóa quản lý và tối ưu hồ sơ CV kết hợp Serverless, AI và quy trình CI/CD.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng kiến trúc Backend Serverless trên Cloudflare Workers kết nối Telegram Bot Webhook 2 chiều.",
          "Tích hợp LLM APIs (Google Gemini / OpenAI) xây dựng pipeline phân tích dữ liệu và sinh tài liệu tự động.",
          "Ứng dụng AI tools hỗ trợ rà soát mã nguồn (code review) và thiết lập CI/CD qua GitHub Actions.",
        ],
        tech: "Cloudflare Workers, JavaScript/Node.js, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Backend & MERN Stack",
        items: "Node.js, ExpressJS, MongoDB (Mongoose), NestJS (cơ bản), RESTful APIs, HTTP Protocols",
      },
      {
        cat: "Frontend & Ngôn ngữ",
        items: "JavaScript (ES6+), TypeScript, ReactJS, Next.js, HTML5/CSS3",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "MongoDB (Schema design, CRUD), PostgreSQL, Supabase Cloud, MySQL",
      },
      {
        cat: "Công cụ & Quy trình",
        items: "Git (Pull Request, Code Review), Postman, Docker, CI/CD GitHub Actions, AI-Assisted Tools",
      },
    ],
    btnText: "In / Tải PDF",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Fresher NodeJS MERN Developer",
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
      "Passionate Software Developer with a Computer Science degree from Ho Chi Minh City Open University. Solid foundation in MERN Stack (JavaScript/Node.js, ExpressJS, MongoDB, ReactJS) and RESTful API architecture. Hands-on experience architecting RESTful APIs, designing database schemas, and applying responsible AI tools for code optimization. Aspiring to learn and grow from Fresher to Middle Node.js Developer at Tinovation.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analysis system integrated with Vnstock3 financial data library.",
        tasks: [
          "Designed relational database schemas and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Built and optimized robust RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Integrated secure Google OAuth authentication flow with NextAuth.",
          "Conducted API testing with Postman, handled HTTP exceptions, and optimized query latency.",
          "Collaborated using Git workflows (branching, pull requests, code reviews) and CI/CD automation.",
        ],
        tech: "Node.js, Next.js, PostgreSQL, Supabase, NextAuth, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "MERN STACK E-COMMERCE PLATFORM",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Full-featured online shopping platform built on MERN Stack delivering sub-2-second page loads.",
        tasks: [
          "Developed backend RESTful services using Node.js, ExpressJS, and MongoDB (Mongoose ODM).",
          "Designed flexible MongoDB schemas for product catalog, user profiles, and order tracking.",
          "Implemented JWT authentication, role-based authorization, cart management, and payment processing.",
          "Collaborated and integrated APIs seamlessly with the ReactJS frontend team.",
          "Containerized development environment using Docker Compose and automated testing.",
        ],
        tech: "Node.js, ExpressJS, MongoDB, ReactJS, JWT, Postman, Docker, Git",
      },
      {
        name: "CV EDITOR & AI AUTOMATION SYSTEM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Automated CV management and optimization platform integrating Serverless, AI APIs, and CI/CD pipelines.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered serverless backend on Cloudflare Workers using Telegram Bot Webhooks as a bi-directional interface.",
          "Integrated LLM APIs (Gemini/OpenAI) to build automated data analysis and code synthesis pipelines.",
          "Employed AI-assisted development tools responsibly for code review and automated GitHub Actions CI/CD workflows.",
        ],
        tech: "Cloudflare Workers, JavaScript/Node.js, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
    ],
    skills: [
      {
        cat: "Backend & MERN Stack",
        items: "Node.js, ExpressJS, MongoDB (Mongoose), NestJS (fundamentals), RESTful APIs, HTTP Protocols",
      },
      {
        cat: "Frontend & Languages",
        items: "JavaScript (ES6+), TypeScript, ReactJS, Next.js, HTML5/CSS3",
      },
      {
        cat: "Databases",
        items: "MongoDB (Schema design, CRUD), PostgreSQL, Supabase Cloud, MySQL",
      },
      {
        cat: "Tools & Workflow",
        items: "Git (Pull Requests, Code Review), Postman, Docker, CI/CD GitHub Actions, AI-Assisted Tools",
      },
    ],
    btnText: "Print / Save PDF",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
