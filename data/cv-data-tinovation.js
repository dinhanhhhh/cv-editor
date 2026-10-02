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
