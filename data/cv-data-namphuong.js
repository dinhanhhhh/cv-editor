// ===================================
// NAM PHUONG TECHNOLOGY - BACKEND INTERN
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Thực tập sinh Backend",
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
      "Cử nhân Khoa học Máy tính có nền tảng vững chắc về Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu & Giải thuật và tư duy phân tích logic hệ thống. Có kinh nghiệm thực tế trong thiết kế cơ sở dữ liệu quan hệ (PostgreSQL, MySQL), xây dựng RESTful API chuẩn mực và kiểm thử API bằng Postman. Đã chủ động tiếp cận và thực hành nền tảng C# / .NET (ASP.NET Core). Tinh thần trách nhiệm cao, ham học hỏi và mong muốn gia nhập Nam Phương Technology ở vị trí Thực tập sinh Backend để hỗ trợ phát triển các hệ thống Web/App, phối hợp hiệu quả cùng đội ngũ và học hỏi từ các Mentor.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Tham gia thiết kế cấu trúc CSDL và triển khai CSDL quan hệ PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất và chuẩn hóa dữ liệu tài chính.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth và bảo vệ các API routes nhạy cảm.",
          "Kiểm thử chức năng và hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel, hỗ trợ bảo trì hệ thống.",
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
          "Thiết kế và triển khai hơn 30 RESTful API endpoints áp dụng chặt chẽ kiến trúc phân lớp (Controller - Service).",
          "Xây dựng hệ thống xác thực tập trung sử dụng JWT, HttpOnly cookies kết hợp phân quyền người dùng (RBAC).",
          "Xử lý và tối ưu hóa truy vấn cơ sở dữ liệu, đảm bảo thời gian phản hồi API trung bình dưới 200ms.",
          "Tích hợp cơ chế xử lý lỗi tập trung (Global Exception Handling) và Middleware kiểm soát dữ liệu đầu vào.",
        ],
        tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman",
      },
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Dịch vụ API quản lý sản phẩm, đơn hàng và giỏ hàng cho nền tảng thương mại điện tử.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế sơ đồ CSDL quan hệ MySQL chuẩn hóa (3NF), tối ưu hóa các ràng buộc khóa chính và khóa ngoại.",
          "Xây dựng các API quản lý sản phẩm, danh mục và xử lý luồng tạo đơn hàng (Order Lifecycle).",
          "Triển khai Middleware kiểm tra phân quyền Admin cho các tác vụ cập nhật dữ liệu nhạy cảm.",
          "Kiểm thử toàn diện các luồng API bằng Postman Collection và viết tài liệu hướng dẫn tích hợp cho team Frontend.",
        ],
        tech: "Node.js, Express, MySQL, JWT, Cloudinary, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Lập trình & Ngôn ngữ",
        items: "OOP, Cấu trúc dữ liệu & Giải thuật, C# (cơ bản), JavaScript/TypeScript, Node.js",
      },
      {
        cat: "Backend & Kiến trúc",
        items: "RESTful API Design, MVC Architecture, ASP.NET Core (tìm hiểu/học tập), Express.js, Next.js (API)",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, SQL Server, MySQL, Supabase, Chuẩn hóa CSDL, Indexing & Query Optimization",
      },
      {
        cat: "Bảo mật & Kiểm thử",
        items: "JWT Authentication, RBAC (Phân quyền), Middleware, Postman, Swagger/OpenAPI",
      },
      {
        cat: "Công cụ & Quy trình",
        items: "Git/GitHub, Docker (cơ bản), Agile/Scrum, Clean Code, Phối hợp BA/FE/Mobile",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Backend_NamPhuong_VI",
    coverLetter: `Tiêu đề email: [Ứng tuyển Intern BE – Trương Đình Anh]

Kính gửi Ms. Quỳnh cùng Ban Tuyển dụng Nam Phương Technology,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Qua thông tin tuyển dụng từ Quý công ty, tôi được biết Nam Phương Technology đang tìm kiếm vị trí Thực tập sinh Backend làm việc full-time tại Văn phòng Tòa nhà Vietnamairlines (108 Hồng Hà, Tân Bình). Nhận thấy yêu cầu công việc rất tương đồng với nền tảng đào tạo và định hướng chuyên môn của bản thân, tôi viết thư này để bày tỏ mong muốn được ứng tuyển và cống hiến cho công ty.

Những năng lực và phẩm chất tôi sẵn sàng đóng góp cho đội ngũ:
1. Nền tảng Khoa học Máy tính & Tư duy OOP vững chắc: Tôi nắm chắc kiến thức cốt lõi về Lập trình hướng đối tượng, cấu trúc dữ liệu và giải thuật. Tôi có khả năng phân tích logic nghiệp vụ, tư duy hệ thống mạch lạc và đã chủ động tìm hiểu, thực hành kiến trúc C# / .NET (ASP.NET Core).
2. Kinh nghiệm thiết kế CSDL & Xây dựng RESTful API: Trong quá trình thực tập tại Công ty TNHH Công nghệ TAMI và các dự án cá nhân (Job Portal, E-Commerce), tôi đã trực tiếp thiết kế CSDL quan hệ (PostgreSQL, MySQL), xây dựng hơn 30 RESTful API endpoints, tích hợp xác thực JWT và kiểm thử kỹ lưỡng bằng Postman.
3. Tinh thần trách nhiệm & Sẵn sàng học hỏi: Tôi có khả năng làm việc nhóm, dễ dàng phối hợp cùng BA, UI/UX Designer, Frontend và Mobile Developer để hiện thực hóa tính năng dự án. Tôi luôn chủ động tiếp thu hướng dẫn từ các Mentor và sẵn sàng nỗ lực hết mình để hướng tới mục tiêu trở thành nhân viên chính thức tại Nam Phương Technology.

Tôi có thể đáp ứng lịch làm việc Full-time từ thứ 2 đến thứ 6 và sẵn sàng nhận việc ngay khi có kết quả. Tôi xin gửi kèm CV chi tiết và rất hy vọng có cơ hội được tham gia buổi phỏng vấn trực tiếp cùng Ms. Quỳnh và các anh chị phụ trách kỹ thuật.

Xin chân thành cảm ơn Ms. Quỳnh và Quý công ty đã dành thời gian xem xét hồ sơ!

Trân trọng,
Trương Đình Anh
Số điện thoại: 0923202861
Email: tdinhanh.it@gmail.com`,
  },

  en: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Backend Developer Intern",
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
      "Computer Science graduate with a solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, and backend system logic. Hands-on experience designing relational databases (PostgreSQL, MySQL), building standard RESTful APIs, and testing with Postman. Actively learning and practicing C# / .NET (ASP.NET Core). Possesses strong responsibility, fast learning capacity, and a collaborative mindset, eager to join Nam Phuong Technology as a Backend Intern to assist in web/app development and learn from experienced mentors.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analytics and online information management platform.",
        tasks: [
          "Participated in database architecture design and deployed PostgreSQL schemas on Supabase Cloud.",
          "Developed 15+ RESTful API endpoints using Next.js Route Handlers to retrieve and standardize stock market data.",
          "Integrated Google OAuth authentication via NextAuth and protected sensitive API routes.",
          "Performed functional and performance testing via Postman, resolving edge-case bugs under senior mentorship.",
          "Packaged and deployed demo applications to Cloud Vercel, supporting ongoing platform maintenance.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Core recruitment management system handling complex business logic between recruiters and applicants.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and implemented 30+ RESTful API endpoints strictly following the Controller-Service layered architecture.",
          "Engineered centralized authentication using JWT and HttpOnly cookies coupled with Role-Based Access Control (RBAC).",
          "Optimized database queries and indexing, achieving an average API response time under 200ms.",
          "Integrated global exception handling middleware to maintain high server stability and consistent error responses.",
        ],
        tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman",
      },
      {
        name: "E-COMMERCE API SERVICE",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Core API services managing product catalogs, shopping carts, and order workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed normalized MySQL schemas (3NF) ensuring relational data integrity and foreign key constraints.",
          "Implemented APIs for product classification, cart state management, and the full order lifecycle.",
          "Built custom middleware to enforce administrative authorization for sensitive operational actions.",
          "Authored comprehensive Postman collections for integration testing and shared documentation with Frontend peers.",
        ],
        tech: "Node.js, Express, MySQL, JWT, Cloudinary, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Languages & Core",
        items: "OOP, Data Structures & Algorithms, C# (Foundational), JavaScript/TypeScript, Node.js",
      },
      {
        cat: "Backend & Architecture",
        items: "RESTful API Design, MVC Architecture, ASP.NET Core (Learning), Express.js, Next.js (API)",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, SQL Server, MySQL, Supabase, Schema Normalization, Indexing & Optimization",
      },
      {
        cat: "Security & Testing",
        items: "JWT Authentication, RBAC, Middleware, Postman, Swagger/OpenAPI",
      },
      {
        cat: "Tools & Collaboration",
        items: "Git/GitHub, Docker (Basic), Agile/Scrum, Clean Code, Cross-team collaboration (BA/FE/Mobile)",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Backend_NamPhuong_EN",
    coverLetter: `Email Subject: [Application for Intern BE – Truong Dinh Anh]

Dear Ms. Quynh and the Hiring Team at Nam Phuong Technology,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong enthusiasm for the Backend Developer Intern position at Nam Phuong Technology, based full-time at Vietnamairlines Building (108 Hong Ha, Tan Binh District). With my academic training and hands-on backend development experience, I am confident that I can quickly assimilate and add value to your team.

My relevant qualifications include:
1. Solid Computer Science Core & OOP Thinking: Thorough understanding of Object-Oriented Programming, data structures, algorithms, and modular design. I have also proactively explored and practiced C# / .NET (ASP.NET Core) concepts.
2. Hands-on Database Design & RESTful APIs: Through my internship at TAMI Technology and personal systems (Job Portal, E-Commerce API), I directly modeled relational schemas (PostgreSQL, MySQL), engineered 30+ RESTful API endpoints with JWT authentication, and conducted rigorous test workflows via Postman.
3. Collaborative & Proactive Mindset: Proven ability to coordinate effectively with Business Analysts, UI/UX Designers, Frontend, and Mobile developers to ship project requirements. I am highly eager to learn from Senior Mentors and aim toward becoming a permanent team member.

I am available to work full-time (Monday to Friday) immediately. Thank you for your time and consideration, and I look forward to the opportunity to discuss my application further.

Sincerely,
Truong Dinh Anh
Phone: 0923202861
Email: tdinhanh.it@gmail.com`,
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
