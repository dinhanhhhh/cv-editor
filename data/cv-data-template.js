// =========================================================================
// MASTER CV DATA
// Nguon CV goc de:
// 1. Xem truc tiep qua `cv-template.html`
// 2. Lam du lieu dau vao cho Cloudflare Worker + AI tailor theo JD
// 3. Tao them cac phien ban CV chuyen biet khi can
// =========================================================================

var cvData = {
  vi: {
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Software Developer Intern",
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
      "Thực tập sinh Software Developer với nền tảng React.js, Next.js, Node.js, Express và TypeScript, có kinh nghiệm xây dựng ứng dụng web full-stack, tích hợp RESTful API và xử lý dữ liệu ở cả frontend lẫn backend. Chủ động ứng dụng AI tools như Gemini, ChatGPT và GitHub Copilot để tăng tốc phân tích, viết code, kiểm thử và tài liệu hóa. Quan tâm đến automation, clean architecture và khả năng duy trì sản phẩm thực tế. Sẵn sàng làm việc full-time, học nhanh và thích nghi tốt với nhiều domain công nghệ khác nhau.",
    education: {
      school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
      date: "2020 - 2024",
      detail: "Khoa học Máy tính",
    },
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
    projectDisplayLimit: 2,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng full-stack hỗ trợ đăng tin, nộp hồ sơ, quản lý người dùng và xử lý quy trình ứng tuyển cho nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển hơn 20 RESTful API endpoints bằng Node.js và Express cho các nghiệp vụ quản lý việc làm, hồ sơ ứng tuyển và người dùng.",
          "Tích hợp frontend Next.js với backend services cho các luồng đăng nhập, nộp hồ sơ, cập nhật profile và phân quyền truy cập.",
          "Triển khai xác thực JWT với HttpOnly cookies, RBAC và refresh token flow để bảo vệ các thao tác nhạy cảm.",
          "Tối ưu truy vấn MongoDB và cấu trúc xử lý dữ liệu để giúp thời gian phản hồi API xuống dưới 300ms ở các luồng chính.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack phục vụ quản lý hồ sơ sinh viên, đăng ký khóa học, kết quả học tập và dashboard quan sát dữ liệu cho admin.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc module với Node.js và Express để tách rõ business logic, routing và middleware phục vụ khả năng mở rộng.",
          "Tích hợp Swagger để tài liệu hóa API, hỗ trợ test nhanh và giảm thời gian handoff giữa frontend, backend và QA.",
          "Phát triển dashboard quản trị responsive bằng Next.js và Tailwind CSS với các thao tác CRUD và giao tiếp dữ liệu thời gian thực.",
          "Áp dụng access token và refresh token cho luồng xác thực, giúp hệ thống vận hành ổn định và dễ bảo trì hơn.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Hệ thống thương mại điện tử mua sắm trực tuyến với giỏ hàng, danh mục sản phẩm và quy trình thanh toán mượt mà.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng giao diện danh mục sản phẩm, chi tiết, giỏ hàng và thanh toán bằng React kết hợp Tailwind CSS tối ưu UX.",
          "Đồng bộ hóa giỏ hàng và trạng thái người dùng theo thời gian thực, xử lý form validation chặt chẽ.",
          "Tích hợp RESTful API với backend services, tối ưu hiển thị responsive hoàn chỉnh trên cả mobile và desktop.",
          "Đóng gói ứng dụng và triển khai frontend ổn định lên nền tảng đám mây Vercel.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, REST API, Docker, Vercel",
      },
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA CV TÍCH HỢP AI (CV-EDITOR)",
        date: "05/2026 - Hiện tại",
        role: "Developer",
        desc: "Hệ thống tự động hóa quản lý và tối ưu hóa CV tích hợp AI giúp may đo nội dung theo mô tả công việc (JD).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng Web App tĩnh bằng Vanilla HTML/CSS/JS thuần, tối ưu hóa tốc độ load, hỗ trợ live inline editing và quản lý local state.",
          "Thiết kế serverless backend sử dụng Cloudflare Workers làm cổng kết nối Telegram Bot Bridge đến AI API và GitHub API.",
          "Tối ưu luồng dữ liệu tự động: Nhận JD qua Telegram -> AI phân tích may đo CV -> lưu bản nháp Cloudflare KV -> tự động xuất bản PDF qua GitHub Actions trong 40 giây.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Groq AI, GitHub API, GitHub Actions",
      },
    ],
    skills: [
      {
        cat: "AI-assisted Development",
        items:
          "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow",
      },
      {
        cat: "Frontend",
        items:
          "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3",
      },
      {
        cat: "Backend & API",
        items:
          "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Databases & Data",
        items:
          "MongoDB, MySQL, PostgreSQL, Query Optimization, Data Processing",
      },
      {
        cat: "Tools & Deployment",
        items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code",
      },
      {
        cat: "English",
        items:
          "Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc cơ bản, có thể viết mô tả kỹ thuật bằng tiếng Anh",
      },
    ],

    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Master",
  },
  en: {
    name: "TRUONG DINH ANH",
    title: "Software Developer Intern",
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
      "Software Developer Intern with hands-on experience in React.js, Next.js, Node.js, Express, and TypeScript, capable of building full-stack web applications, integrating RESTful APIs, and handling data across both frontend and backend. Proactively uses AI tools such as Gemini, ChatGPT, and GitHub Copilot to accelerate analysis, coding, testing, and documentation work. Interested in automation, clean architecture, and real-world product delivery. Available full-time, quick to learn, and adaptable across different technical domains.",
    education: {
      school: "HO CHI MINH CITY OPEN UNIVERSITY",
      date: "2020 - 2024",
      detail: "Computer Science",
    },
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Designed database schemas and successfully deployed the PostgreSQL database on the Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google Authentication OAuth flow via NextAuth (Google Provider) for user sessions.",
          "Tested and optimized API performance using Postman, resolving critical bugs under a mentor's guidance.",
          "Configured CI/CD and deployed the demo application smoothly onto the Vercel cloud environment.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projectDisplayLimit: 2,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A full-stack recruitment platform supporting job posting, application submission, user management, and hiring workflows for employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed 20+ RESTful API endpoints with Node.js and Express for jobs, applications, and user management workflows.",
          "Integrated the Next.js frontend with backend services for login, profile updates, job application flows, and access control.",
          "Implemented JWT authentication with HttpOnly cookies, RBAC, and a refresh token flow to secure sensitive operations.",
          "Optimized MongoDB queries and data handling flow to keep response times under 300ms on major APIs.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "A full-stack administrative system for student records, course registration, academic performance tracking, and admin data dashboards.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend with Node.js and Express to separate business logic, routing, and middleware for better scalability.",
          "Integrated Swagger for API documentation and faster testing, reducing handoff friction across frontend, backend, and QA.",
          "Developed a responsive admin dashboard with Next.js and Tailwind CSS, including CRUD workflows and real-time data handling.",
          "Implemented access token and refresh token authentication flows to improve system stability and maintainability.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce shopping web application with shopping cart, product catalog, and seamless checkout workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed responsive product catalog, product details, cart, and checkout UI using React and Tailwind CSS.",
          "Synchronized shopping cart state across tabs in real-time, handling form validations securely.",
          "Integrated RESTful APIs with backend services, ensuring optimal performance on both mobile and desktop views.",
          "Packaged and deployed frontend application smoothly to Vercel cloud environment.",
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, REST API, Docker, Vercel",
      },
      {
        name: "AUTOMATED CV BUILDER & AI TAILOR (CV-EDITOR)",
        date: "05/2026 - Present",
        role: "Developer",
        desc: "An automated CV management and optimization tool powered by AI to tailor CV content matching Job Descriptions (JD).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Developed a lightweight static web app using Vanilla HTML/CSS/JS supporting live inline editing and local state management.",
          "Designed a serverless backend with Cloudflare Workers acting as a Telegram Bot Bridge connecting to AI APIs and GitHub API.",
          "Optimized data flow: User sends JD via Telegram -> AI tailors CV data -> stores Cloudflare KV draft -> auto-builds PDF via GitHub Actions in 40s.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Groq AI, GitHub API, GitHub Actions",
      },
    ],
    skills: [
      {
        cat: "AI-assisted Development",
        items:
          "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow",
      },
      {
        cat: "Frontend",
        items:
          "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3",
      },
      {
        cat: "Backend & API",
        items:
          "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger",
      },
      {
        cat: "Databases & Data",
        items:
          "MongoDB, MySQL, PostgreSQL, Query Optimization, Data Processing",
      },
      {
        cat: "Tools & Deployment",
        items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code",
      },
      {
        cat: "English",
        items:
          "Read technical documentation, handle basic workplace communication, and write technical descriptions in English",
      },
    ],

    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Master",
  },
};
