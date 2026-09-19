// ===================================
// CV DATA - CG ECOM FULLSTACK DEVELOPER
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
      "Lập trình viên Full-Stack với kinh nghiệm xây dựng ứng dụng web bằng React.js, Next.js, Node.js, TypeScript và các hệ cơ sở dữ liệu (PostgreSQL, MongoDB, MySQL). Thành thạo phát triển nền tảng Ecommerce, tích hợp API và ứng dụng AI (Gemini, ChatGPT, Copilot) để tối ưu quy trình làm việc. Trách nhiệm cao, linh hoạt xử lý vấn đề, sẵn sàng hỗ trợ các tác vụ IT nội bộ.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu chứng khoán.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Ứng dụng web thương mại điện tử phục vụ duyệt sản phẩm, quản lý giỏ hàng và quy trình đặt hàng, thanh toán trực tuyến.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng giao diện danh mục, chi tiết sản phẩm, giỏ hàng và checkout bằng React và Tailwind CSS, responsive mượt mà trên mọi thiết bị.",
          "Xây dựng và tích hợp RESTful API backend (Node.js/Express, MongoDB) để đồng bộ trạng thái đơn hàng và giỏ hàng theo thời gian thực.",
          "Đóng gói Docker container cho backend, thiết lập CI/CD và triển khai ứng dụng trên Vercel đảm bảo hiệu năng và uptime cao.",
          "Thực hiện kiểm thử và tối ưu hóa truy vấn cơ sở dữ liệu, giảm thời gian tải trang xuống dưới 2 giây.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
      {
        name: "NỀN TẢNG TÌM KIẾM VIỆC LÀM (JOB PORTAL PLATFORM)",
        date: "09/2025 - 10/2025",
        role: "Developer",
        desc: "Nền tảng kết nối ứng viên và nhà tuyển dụng, hỗ trợ đăng tin tuyển dụng, nộp hồ sơ trực tuyến và quản lý trạng thái ứng tuyển.",
        github: "https://github.com/dinhanhhhh/jobportal",
        tasks: [
          "Xây dựng giao diện người dùng thân thiện, tương thích đa thiết bị bằng React, Next.js và Tailwind CSS.",
          "Thiết kế cấu trúc cơ sở dữ liệu và xây dựng RESTful API backend bằng Node.js và Express, xử lý logic nộp hồ sơ và bộ lọc tin tuyển dụng.",
          "Tích hợp luồng xác thực phân quyền người dùng (RBAC) với JWT cho Ứng viên và Doanh nghiệp tuyển dụng.",
          "Tối ưu hiệu năng tải trang và triển khai ứng dụng ổn định trên môi trường Cloud Vercel và Render.",
        ],
        tech: "React, Next.js, Node.js, Express, PostgreSQL, Supabase, Tailwind CSS, RESTful API, JWT, Vercel",
      },
      {
        name: "HỆ THỐNG QUẢN LÝ SINH VIÊN (STUDENT MANAGEMENT SYSTEM)",
        date: "07/2025 - 08/2025",
        role: "Developer",
        desc: "Ứng dụng web quản trị thông tin sinh viên, lớp học và điểm số theo cấu trúc phòng ban dành cho trường đại học.",
        github: "https://github.com/dinhanhhhh/student-management",
        tasks: [
          "Phát triển giao diện quản trị với React, Vite và Tailwind CSS, tích hợp bảng dữ liệu động hỗ trợ lọc, tìm kiếm và phân trang.",
          "Xây dựng RESTful API CRUD quản lý hồ sơ, lớp học và điểm số với Node.js, Express và MongoDB.",
          "Tối ưu hóa các truy vấn database, đảm bảo tính toàn vẹn dữ liệu khi thao tác hàng loạt bản ghi.",
          "Kiểm thử bảo mật đầu vào bằng Postman và xử lý middleware xác thực JWT.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, JWT, Postman",
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
          "Node.js, Express.js, RESTful API, JWT, Middleware, Third-party Integration, Swagger",
      },
      {
        cat: "Databases & Data",
        items:
          "PostgreSQL, MongoDB, MySQL, Supabase, Database Design & Optimization",
      },
      {
        cat: "Tools & Systems",
        items:
          "Git/GitHub, CI/CD, Docker, Vercel, Render, Postman, IT Support (Hardware/Network)",
      },
      {
        cat: "AI-assisted Dev",
        items:
          "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow",
      },
      {
        cat: "English",
        items:
          "Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc cơ bản, viết mô tả kỹ thuật bằng tiếng Anh",
      },
    ],
    btnText: "In / Lưu PDF",
    docTitle: "CV_TruongDinhAnh_CGEcom_Fullstack_VI",
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
      "Full-Stack Developer experienced in building web applications with React.js, Next.js, Node.js, TypeScript, and databases (PostgreSQL, MongoDB, MySQL). Proficient in developing e-commerce platforms, integrating APIs, and leveraging AI tools (Gemini, ChatGPT, Copilot) to optimize workflows. Highly responsible, adaptable, and ready to support internal IT operations.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial stock market data analysis platform integrated with the Vnstock3 financial data library.",
        tasks: [
          "Designed database schemas and successfully deployed the PostgreSQL database on Supabase Cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google Authentication OAuth flow via NextAuth (Google Provider) for secure user sessions.",
          "Tested and optimized API performance using Postman, resolving critical bugs under a mentor's guidance.",
          "Configured CI/CD and deployed the demo application smoothly onto the Vercel cloud environment.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce web application enabling product browsing, cart management, and seamless checkout with responsive UI and API integration.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Built product catalog, detail pages, shopping cart, and checkout UI with React and Tailwind CSS, optimizing UX across all devices.",
          "Developed and integrated RESTful backend APIs (Node.js/Express, MongoDB) for real-time cart and order synchronization.",
          "Containerized backend with Docker and established CI/CD deployment on Vercel to guarantee high uptime and scalability.",
          "Conducted rigorous testing and database indexing, reducing page load time to under 2 seconds.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, Docker, Vercel",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "09/2025 - 10/2025",
        role: "Developer",
        desc: "A platform connecting job seekers and employers with recruitment postings, online applications, and application status tracking.",
        github: "https://github.com/dinhanhhhh/jobportal",
        tasks: [
          "Built responsive and intuitive user interfaces using React, Next.js, and Tailwind CSS.",
          "Designed database models and built RESTful backend APIs with Node.js and Express to handle application workflows and search filters.",
          "Implemented Role-Based Access Control (RBAC) with JWT authentication for Candidates and Employers.",
          "Optimized page load performance and deployed the production-ready application to Vercel and Render.",
        ],
        tech: "React, Next.js, Node.js, Express, PostgreSQL, Supabase, Tailwind CSS, RESTful API, JWT, Vercel",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "07/2025 - 08/2025",
        role: "Developer",
        desc: "A web-based administration system for managing student records, academic classes, and grades for universities.",
        github: "https://github.com/dinhanhhhh/student-management",
        tasks: [
          "Developed responsive administrative dashboard with React, Vite, and Tailwind CSS, featuring dynamic filtering and pagination.",
          "Engineered CRUD RESTful APIs for student records, classes, and grade tracking using Node.js, Express, and MongoDB.",
          "Optimized database queries ensuring high data integrity during batch record updates.",
          "Conducted security testing on input validation via Postman and implemented JWT authentication middleware.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, RESTful API, JWT, Postman",
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
          "Node.js, Express.js, RESTful API, JWT, Middleware, Third-party Integration, Swagger",
      },
      {
        cat: "Databases & Data",
        items:
          "PostgreSQL, MongoDB, MySQL, Supabase, Database Design & Optimization",
      },
      {
        cat: "Tools & Systems",
        items:
          "Git/GitHub, CI/CD, Docker, Vercel, Render, Postman, IT Support (Hardware/Network)",
      },
      {
        cat: "AI-assisted Dev",
        items:
          "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow",
      },
      {
        cat: "English",
        items:
          "Able to read technical documentation and communicate at a basic professional level",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_CGEcom_Fullstack_EN",
  },
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
