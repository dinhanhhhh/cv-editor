// ===================================
// CV DATA - Web Development Engineer Intern (Remote)
// Tailored for US-partner & restaurant tech support role
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Web Development Engineer Intern (Remote)",
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
      "Web Development Engineer Intern with strong foundations in React.js, Next.js, JavaScript, and Node.js (Express). Hands-on experience building responsive web interfaces, automating internal workflows, and working with SQL/NoSQL databases (Firebase, MongoDB). Experienced in browser debugging, Postman testing, and Google ecosystem integrations. Strong technical English communicator confident in client support and collaborating with US partners.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Built automated internal workflows and web analytics tools for stock market data processing.",
        tasks: [
          "Built internal web tools and automated data workflows using Next.js Route Handlers and Node.js (Express).",
          "Integrated Google OAuth authentication (NextAuth) and conducted API performance testing via Postman.",
          "Used Chrome DevTools for browser-based debugging, resolving UI bugs and deploying demo app to Vercel."
        ],
        tech: "React, Next.js, Node.js, Express, PostgreSQL, Google OAuth, Chrome DevTools, Postman, Vercel"
      }
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A recruitment platform with responsive UI, role-based access, and automated candidate application workflows.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed 20+ RESTful API endpoints for user authentication, job applications, and automated workflows.",
          "Built responsive Next.js frontend with Tailwind CSS; implemented JWT authentication with HttpOnly cookies.",
          "Leveraged AI tools (ChatGPT, GitHub Copilot) to accelerate coding speed and optimize MongoDB queries under 300ms."
        ],
        tech: "React, Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      },
      {
        name: "STUDENT & CLIENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "An administrative web system for real-time record management, client data tracking, and API documentation.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a responsive admin dashboard with Next.js & Tailwind CSS supporting real-time CRUD operations.",
          "Integrated Swagger UI for API visualization, facilitating faster client troubleshooting and technical support.",
          "Implemented modular Express backend with access/refresh token authentication and Firebase/NoSQL integration."
        ],
        tech: "React, Next.js 15, Node.js, Express, Firebase/NoSQL, Swagger, REST API"
      }
    ],
    skills: [
      {
        cat: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & DB",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Firebase (NoSQL), MongoDB, SQL",
      },
      {
        cat: "Google Ecosystem",
        items: "Google Maps API, Google OAuth, Google Business Profile, Google Search Console & Ads overview",
      },
      {
        cat: "Debugging & Support",
        items: "Chrome DevTools, Postman, Swagger UI, Client Technical Support, Troubleshooting, Bug fixing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Vercel, Render, Docker, CI/CD basic concepts, Internal Tools & Workflows",
      },
      {
        cat: "English",
        items: "Strong technical English skills — able to join calls & correspond professionally with US partners",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_WebDev_Intern_Remote",
  },

  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Web Development Engineer Intern (Remote)",
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
      "Thực tập sinh Web Development Engineer với nền tảng React.js, Next.js, JavaScript và Node.js (Express). Có kinh nghiệm thực tế xây dựng giao diện web responsive, tự động hóa quy trình nội bộ (automated workflows) và làm việc với hệ cơ sở dữ liệu SQL/NoSQL (Firebase, MongoDB). Có kỹ năng debug trên trình duyệt, kiểm thử API và tích hợp dịch vụ Google. Giao tiếp Tiếng Anh tốt, sẵn sàng hỗ trợ kỹ thuật khách hàng và làm việc với đối tác Mỹ.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Xây dựng quy trình tự động hóa dữ liệu nội bộ và công cụ phân tích web.",
        tasks: [
          "Xây dựng công cụ nội bộ và tự động hóa luồng xử lý dữ liệu bằng Next.js Route Handlers và Node.js (Express).",
          "Tích hợp xác thực Google OAuth (NextAuth) và kiểm thử hiệu năng API qua Postman.",
          "Sử dụng Chrome DevTools để debug giao diện, khắc phục lỗi và đóng gói triển khai ứng dụng lên Vercel."
        ],
        tech: "React, Next.js, Node.js, Express, PostgreSQL, Google OAuth, Chrome DevTools, Postman, Vercel"
      }
    ],
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng với giao diện responsive, phân quyền và tự động hóa quy trình nộp hồ sơ.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển 20+ RESTful API endpoints (Node.js/Express) cho xác thực và quản lý quy trình ứng tuyển.",
          "Thiết kế giao diện Next.js responsive với Tailwind CSS; triển khai xác thực JWT và bảo mật RBAC.",
          "Ứng dụng AI tools (ChatGPT, GitHub Copilot) tăng tốc độ code và tối ưu truy vấn MongoDB dưới 300ms."
        ],
        tech: "React, Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      },
      {
        name: "HỆ THỐNG QUẢN LÝ KHÁCH HÀNG & SINH VIÊN",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị web theo thời gian thực hỗ trợ theo dõi dữ liệu và chuẩn hóa tài liệu API.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng dashboard quản trị responsive (Next.js/Tailwind) hỗ trợ thao tác CRUD dữ liệu theo thời gian thực.",
          "Tích hợp Swagger UI giúp trực quan hóa API, hỗ trợ giải quyết sự cố kỹ thuật và kiểm thử nhanh chóng.",
          "Phát triển backend mô-đun với Express, cơ chế xác thực Token và tích hợp cơ sở dữ liệu Firebase/NoSQL."
        ],
        tech: "React, Next.js 15, Node.js, Express, Firebase/NoSQL, Swagger, REST API"
      }
    ],
    skills: [
      {
        cat: "Frontend",
        items: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & DB",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Firebase (NoSQL), MongoDB, SQL",
      },
      {
        cat: "Google Ecosystem",
        items: "Google Maps API, Google OAuth, Google Business Profile, Google Search Console & Ads cơ bản",
      },
      {
        cat: "Debugging & Support",
        items: "Chrome DevTools, Postman, Swagger UI, Technical Support khách hàng, Troubleshooting, Fix bug",
      },
      {
        cat: "Công cụ & DevOps",
        items: "Git/GitHub, Vercel, Render, Docker, CI/CD cơ bản, Internal Tools & Automated Workflows",
      },
      {
        cat: "Ngoại ngữ",
        items: "Tiếng Anh chuyên môn tốt — tự tin trao đổi, họp online và làm việc trực tiếp với đối tác Mỹ",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_WebDev_Intern_Remote",
  },
};
