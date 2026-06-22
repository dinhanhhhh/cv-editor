// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 1,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Back-End Developer",
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
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN CÁ NHÂN",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Lập trình viên Back-End sử dụng Node.js và TypeScript với nền tảng tư duy hệ thống tốt, định hướng phát triển chuyên sâu vào tối ưu hóa API và bảo mật hệ thống. Có khả năng tự chủ công việc cao, thành thạo tối ưu hóa cơ sở dữ liệu và triển khai quy trình vận hành dự án thực tế. Mong muốn cống hiến năng lực giải quyết vấn đề của mình để xây dựng các giải pháp backend ổn định và đồng hành cùng sự tăng trưởng bền vững của công ty.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 09/2025",
        role: "Thực tập sinh Back-End Developer",
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
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống lõi quản lý tuyển dụng toàn diện, xử lý luồng dữ liệu phức tạp giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai hơn 30 RESTful API endpoints sử dụng Node.js và kiến trúc Controller-Service.",
          "Xây dựng hệ thống xác thực tập trung sử dụng JWT, HttpOnly cookies kết hợp với phân quyền RBAC chặt chẽ.",
          "Xử lý và tối ưu hóa truy vấn MongoDB (Aggregation Pipeline), đạt thời gian phản hồi API trung bình dưới 200ms.",
          "Tích hợp các cơ chế xử lý lỗi (Global Error Handling) và Logging để giám sát hệ thống ổn định.",
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
          "Xây dựng backend theo mô hình MVC, tách biệt rõ giữa logic nghiệp vụ và lưu trữ dữ liệu.",
          "Triển khai cơ chế refresh token để bảo mật phiên đăng nhập và đảm bảo trải nghiệm người dùng liền mạch.",
          "Sử dụng Swagger để tự động hóa tài liệu API, hỗ trợ các thành viên Frontend tích hợp nhanh chóng.",
          "Tối ưu hóa sơ đồ cơ sở dữ liệu (Schema Design) để đảm bảo toàn vẹn dữ liệu và mở rộng linh hoạt.",
        ],
        tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware",
      },
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Phát triển các dịch vụ API cốt lõi cho nền tảng thương mại điện tử, quản lý đơn hàng và tồn kho.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng API quản lý sản phẩm đa phân loại và hệ thống giỏ hàng phía server.",
          "Triển khai Middleware kiểm tra quyền hạn Admin cho các thao tác thay đổi dữ liệu nhạy cảm.",
          "Thiết kế cơ chế xử lý thanh toán và trạng thái đơn hàng (Order Lifecycle) đảm bảo tính nhất quán.",
          "Thực hiện kiểm thử API kỹ lưỡng với Postman để đảm bảo độ tin cậy của mã nguồn.",
        ],
        tech: "Node.js, Express, MySQL/MongoDB, JWT, Cloudinary (Image storage)",
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
          "Express.js, Nest.js (Learning), Next.js (API Routes), MVC Architecture",
      },
      {
        cat: "Database",
        items:
          "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Middleware, Swagger/OpenAPI",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_BackendDev_VI",
  },

  en: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 1,
    name: "TRUONG DINH ANH",
    title: "Back-End Developer",
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
      projects: "PERSONAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Back-End Developer proficient in Node.js and TypeScript with a solid system mindset, aiming to specialize in API optimization and system security. Possesses strong self-direction, database optimization skills, and hands-on experience in production deployment. Committed to leveraging problem-solving skills to build reliable backend services and grow alongside the company’s sustainable success.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 09/2025",
        role: "Back-End Developer Intern",
        desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Designed database schemas and successfully deployed PostgreSQL databases on the Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google Authentication OAuth flow centralized with NextAuth (Google Provider) for user sessions.",
          "Tested and optimized API performance using Postman, resolving critical bugs under mentor guidance.",
          "Configured CI/CD and deployed the demo application smoothly onto the Vercel cloud environment.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Core recruitment management system handling complex data flows between employers and candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and implemented 30+ RESTful API endpoints using Node.js and Controller-Service architecture.",
          "Built a centralized authentication system using JWT/HttpOnly cookies combined with strict RBAC permissioning.",
          "Processed and optimized MongoDB queries (Aggregation Pipeline), achieving sub-200ms average API response times.",
          "Integrated global error handling and logging mechanisms to ensure system stability and observability.",
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
          "Built the backend using the MVC pattern, with clear separation between business logic and data persistence.",
          "Implemented a robust refresh token mechanism for secure sessions and a seamless user experience.",
          "Leveraged Swagger for automated API documentation, facilitating rapid frontend integration.",
          "Optimized database schema design to ensure data integrity and flexible system scalability.",
        ],
        tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware",
      },
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Developed core API services for e-commerce platforms, order fulfillment, and inventory management.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed server-side product management APIs and cart persistence systems.",
          "Implemented admin authorization middleware for sensitive data operations and management features.",
          "Designed payment processing flows and order lifecycle management to maintain data consistency.",
          "Performed rigorous API testing with Postman to ensure code reliability and high success rates.",
        ],
        tech: "Node.js, Express, MySQL/MongoDB, JWT, Cloudinary",
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
          "Express.js, Nest.js (Learning), Next.js (API Routes), MVC Architecture",
      },
      {
        cat: "Databases",
        items:
          "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Middleware, Swagger/OpenAPI",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_BackendDev_EN",
  },
};
