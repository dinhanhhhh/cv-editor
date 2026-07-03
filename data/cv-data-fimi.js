// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
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
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Lập trình viên Back-End sử dụng Node.js và TypeScript với nền tảng tư duy hệ thống tốt, định hướng phát triển chuyên sâu vào thiết kế RESTful API, tìm hiểu mô hình Microservices và tối ưu hóa hiệu suất cơ sở dữ liệu (PostgreSQL, MySQL, NoSQL). Có khả năng làm việc tự chủ cao, giải quyết vấn đề linh hoạt và sẵn sàng cống hiến năng lực để xây dựng các giải pháp backend ổn định, đồng hành cùng sự tăng trưởng bền vững của FIMI.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 09/2025",
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
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống lõi quản lý tuyển dụng toàn diện, xử lý luồng dữ liệu phức tạp giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai hơn 30 RESTful API endpoints sử dụng Node.js và kiến trúc Controller-Service.",
          "Xây dựng hệ thống xác thực tập trung sử dụng JWT, HttpOnly cookies kết hợp với phân quyền RBAC chặt chẽ.",
          "Xử lý và tối ưu hóa truy vấn MongoDB (Aggregation Pipeline), đạt thời gian phản hồi API trung bình dưới 200ms.",
          "Tích hợp các cơ chế xử lý lỗi tập trung (Global Error Handling) và Middleware để đảm bảo hệ thống vận hành ổn định.",
        ],
        tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman",
      },
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Phát triển các dịch vụ API cốt lõi cho nền tảng thương mại điện tử, quản lý đơn hàng và tồn kho.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng các API quản lý sản phẩm đa phân loại và hệ thống giỏ hàng phía server.",
          "Thiết kế sơ đồ cơ sở dữ liệu MySQL và tối ưu hóa quan hệ dữ liệu để đảm bảo tính nhất quán.",
          "Triển khai Middleware kiểm tra quyền hạn Admin cho các thao tác thay đổi dữ liệu nhạy cảm.",
          "Thiết kế cơ chế xử lý thanh toán và quản lý trạng thái đơn hàng (Order Lifecycle) chuẩn xác.",
        ],
        tech: "Node.js, Express, MySQL, JWT, Cloudinary (Image storage), Postman",
      },
    ],
    skills: [
      {
        cat: "Ngôn ngữ & Core",
        items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)",
      },
      {
        cat: "Frameworks & Kiến trúc",
        items:
          "Express.js, NestJS (Learning), Next.js (API Routes), MVC Architecture, Microservices (concepts)",
      },
      {
        cat: "Cơ sở dữ liệu",
        items:
          "PostgreSQL, MySQL, MongoDB (Mongoose), Query Optimization, Database Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Guards/Middleware, Swagger/OpenAPI",
      },
      {
        cat: "Công cụ & DevOps",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Backend_FIMI_VI",
    coverLetter: `[Tiêu đề Email: Ứng tuyển vị trí Backend Developer – Trương Đình Anh]

Kính gửi Ms. Hồng và Bộ phận Tuyển dụng FIMI,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Qua tin tuyển dụng từ FIMI, tôi nhận thấy yêu cầu của vị trí Backend Developer rất phù hợp với nền tảng kỹ thuật và định hướng nghề nghiệp của bản thân. Do đó, tôi viết thư này để bày tỏ mong muốn được đồng hành cùng Quý công ty.

Với kinh nghiệm thực tế trong việc phát triển hệ thống backend sử dụng Node.js, Express và TypeScript, tôi đã từng:
- Thiết kế và triển khai hơn 30 RESTful API endpoints với kiến trúc Controller-Service chặt chẽ, tối ưu truy vấn cơ sở dữ liệu MongoDB (Aggregation Pipeline) cho dự án Job Portal.
- Có kinh nghiệm làm việc thực tế với PostgreSQL (Supabase Cloud) và MySQL thông qua dự án tại TAMI Technology (hệ thống dữ liệu chứng khoán sử dụng thư viện Vnstock3) và dự án E-Commerce API Service.
- Triển khai thành thạo các cơ chế bảo mật như JWT, HttpOnly cookies, phân quyền RBAC và tích hợp các luồng xác thực OAuth2.

Tôi luôn đặt chất lượng code lên hàng đầu, hướng tới việc viết code sạch, dễ bảo trì và tối ưu hiệu năng tối đa cho hệ thống. Tôi rất ấn tượng với định hướng "kiến tạo sản phẩm công nghệ hiện đại và bền vững" của FIMI và tin tưởng rằng sự chủ động, tinh thần cầu tiến cùng khả năng tự học nhanh của mình sẽ đóng góp hiệu quả cho đội ngũ phát triển.

Tôi đã đính kèm CV chi tiết trong email này và rất mong có cơ hội được trao đổi sâu hơn với Ms. Hồng cùng Ban tuyển dụng trong một buổi phỏng vấn trực tiếp.

Chúc Ms. Hồng và Công ty FIMI một ngày làm việc hiệu quả và gặt hái nhiều thành công!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },

  en: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
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
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Back-End Developer proficient in Node.js and TypeScript with a strong system mindset, aiming to specialize in RESTful API design, Microservices architecture, and database optimization (PostgreSQL, MySQL, NoSQL). Possesses high proactivity, problem-solving skills, and a willingness to build reliable backend services and contribute to FIMI's sustainable growth.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 09/2025",
        role: "Developer",
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
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Developed core API services for e-commerce platforms, order fulfillment, and inventory management.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed server-side product management APIs and cart persistence systems.",
          "Designed MySQL database schemas and optimized data relations to ensure consistency.",
          "Implemented admin authorization middleware for sensitive data operations and management features.",
          "Designed payment processing flows and order lifecycle management to maintain data consistency.",
        ],
        tech: "Node.js, Express, MySQL, JWT, Cloudinary, Postman",
      },
    ],
    skills: [
      {
        cat: "Languages & Core",
        items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)",
      },
      {
        cat: "Frameworks & Architecture",
        items:
          "Express.js, NestJS (Learning), Next.js (API Routes), MVC Architecture, Microservices (concepts)",
      },
      {
        cat: "Databases",
        items:
          "PostgreSQL, MySQL, MongoDB (Mongoose), Query Optimization, Database Transactions",
      },
      {
        cat: "Security & API",
        items:
          "RESTful API Design, JWT, RBAC, OAuth2, Guards/Middleware, Swagger/OpenAPI",
      },
      {
        cat: "Tools & DevOps",
        items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Backend_FIMI_EN",
    coverLetter: `[Subject: Job Application: Backend Developer – Truong Dinh Anh]

Dear Ms. Hong and the FIMI Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. Having read FIMI's hiring poster, I believe my technical background in backend development and database systems aligns perfectly with your Backend Developer position. Therefore, I am writing to express my strong interest in joining your team.

With hands-on experience in backend development using Node.js, Express, and TypeScript, I have successfully:
- Designed and implemented 30+ robust RESTful API endpoints with a modular Controller-Service architecture and optimized MongoDB queries (using Aggregation Pipelines) to achieve sub-200ms response times.
- Gained practical database experience with PostgreSQL (Supabase Cloud) and MySQL through my work at TAMI Technology (stock market data analysis system) and an E-Commerce API Service.
- Implemented secure authentication flows using JWT, HttpOnly cookies, RBAC, and integrated OAuth2 providers.

I am highly committed to writing clean, maintainable code and optimizing database query performance. I am deeply inspired by FIMI's mission to "create modern and sustainable technology products." With my proactivity, problem-solving mindset, and rapid learning ability, I am confident in my ability to quickly adapt and add value to FIMI’s development team.

I have attached my CV to this email and look forward to the opportunity to discuss my application further in an interview.

Thank you for your time and consideration.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },
};
