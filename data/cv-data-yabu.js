  // =========================================================================
// CV DATA - YABU AUBE ([TUYỂN DỤNG] INTERN BACKEND – QUẬN 10, TP.HCM)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  meta: {
    company: "Yabu Aube",
    position: "Intern Backend",
    recipient: "Ban Tuyển dụng Yabu Aube",
    email: "yabu.aube@gmail.com",
    contact: "yabu.aube@gmail.com",
    jobUrl: "mailto:yabu.aube@gmail.com?subject=Ứng%20tuyển%20Vị%20trí%20Intern%20Backend%20-%20Trương%20Đình%20Anh",
    notes: "[TUYỂN DỤNG] INTERN BACKEND – QUẬN 10, TP.HCM tại Yabu Aube. Email nhận CV: yabu.aube@gmail.com. Yêu cầu: Nền tảng Backend, MySQL, RESTful API, JavaScript/Node.js, Git. Điểm cộng: MongoDB, Postman, JWT/OAuth, Docker, Redis, Linux/VPS, GitHub projects.",
    jdText: `[TUYỂN DỤNG] INTERN BACKEND – QUẬN 10, TP.HCM

Các yêu cầu đối với vị trí Intern Backend
Kiến thức chuyên môn
● Sinh viên năm cuối hoặc mới tốt nghiệp ngành Công nghệ thông tin, Khoa học máy tính hoặc các ngành liên quan.
● Có kiến thức cơ bản về lập trình Backend và PHP.
● Đã tìm hiểu hoặc có dự án thực hành với Laravel.
● Có kiến thức cơ bản về MySQL, SQL, thiết kế bảng và quan hệ dữ liệu.
● Biết sử dụng RESTful API, JSON và các phương thức HTTP.
● Có kiến thức cơ bản về JavaScript và Node.js.
● Biết MongoDB là lợi thế hoặc sẵn sàng học hỏi trong quá trình thực tập.
● Sử dụng được Git ở mức cơ bản.
● Có tư duy logic, tinh thần trách nhiệm và chủ động học hỏi.

Kỹ năng bổ sung
● Biết sử dụng Postman để kiểm thử API.
● Có kiến thức về Authentication, Authorization, JWT hoặc OAuth.
● Biết Docker, Redis, Linux hoặc triển khai ứng dụng lên VPS là lợi thế.
● Có sản phẩm cá nhân, đồ án hoặc GitHub thể hiện năng lực lập trình là điểm cộng.

Liên hệ & Nộp hồ sơ:
● Inbox trực tiếp qua FB.
● Gửi CV trực tiếp về mail: yabu.aube@gmail.com
● Quét QR để xem chi tiết yêu cầu công việc.`,
    pitchHighlights: "Nền tảng Cử nhân KHMT, vững tư duy kiến trúc MVC và thiết kế CSDL quan hệ MySQL/PostgreSQL chuẩn 3NF, thành thạo xây dựng RESTful APIs bằng Node.js, Express, kiểm thử Postman, xác thực JWT và khả năng thích ứng công nghệ nhanh."
  },
  vi: {
    title: "Thực tập sinh Backend",
    btnText: "In / Tải PDF",
    objective:
      "Cử nhân Khoa học Máy tính (ĐH Mở TP.HCM), định hướng Backend. Nắm vững OOP, MVC, thiết kế CSDL quan hệ (MySQL, PostgreSQL) chuẩn 3NF và xây dựng RESTful API với Node.js/Express; từng thiết kế CSDL, xây dựng API và tích hợp Google OAuth tại TAMI. Đang tìm hiểu PHP/Laravel, mong muốn thực tập Backend tại Yabu Aube để học hỏi và đóng góp cho dự án.",
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Tham gia thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng và tối ưu hệ thống RESTful APIs phục vụ truy xuất và chuẩn hóa dữ liệu tài chính thời gian thực.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth bảo vệ các tuyến API nhạy cảm.",
          "Kiểm thử chức năng và hiệu năng API bằng Postman, phối hợp cùng Mentor xử lý lỗi và tối ưu hóa truy vấn.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên môi trường Cloud Vercel, quản lý mã nguồn qua Git.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Nền tảng thương mại điện tử với hệ thống API quản lý sản phẩm, giỏ hàng và xử lý luồng đơn hàng.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu MongoDB tối ưu lưu trữ danh mục sản phẩm, đơn hàng và giỏ hàng người dùng.",
          "Xây dựng hệ thống RESTful APIs quản lý danh mục sản phẩm, trạng thái giỏ hàng và vòng đời đơn hàng.",
          "Triển khai Middleware xác thực bảo mật JWT, kiểm tra tính hợp lệ của dữ liệu đầu vào và phân quyền (RBAC).",
          "Đóng gói ứng dụng với Docker và kiểm thử toàn diện các luồng nghiệp vụ API bằng Postman Collection.",
        ],
        tech: "Node.js, Express, MongoDB, React, Tailwind CSS, Docker, RESTful API, Postman, Git",
      },
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống lõi quản lý tuyển dụng toàn diện, xử lý luồng dữ liệu nghiệp vụ giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai hệ thống RESTful APIs áp dụng chặt chẽ kiến trúc phân lớp Controller-Service.",
          "Xây dựng luồng xác thực tập trung sử dụng JWT kết hợp cơ chế phân quyền người dùng (RBAC).",
          "Mô hình hóa dữ liệu và tối ưu hóa truy vấn với MongoDB, giảm thiểu thời gian phản hồi cho các tác vụ tìm kiếm.",
          "Tích hợp cơ chế xử lý lỗi tập trung (Global Error Handling) và kiểm thử chất lượng API bằng Postman.",
        ],
        tech: "Node.js, Express, MongoDB, TypeScript, JWT, RESTful API, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, Express.js, TypeScript, RESTful API, MVC Architecture, JWT, RBAC, Middleware",
      },
      {
        cat: "Databases",
        items: "MySQL, PostgreSQL, MongoDB, Schema Design, 3NF, Indexing, Query Optimization",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Postman, Docker, Swagger, Vercel",
      },
      {
        cat: "Frontend",
        items: "JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật, viết tài liệu API",
      },
    ],
    docTitle: "CV_TruongDinhAnh_Backend_YabuAube_VI",
    emailTemplates: {
      short: `Ứng tuyển Intern Backend - Trương Đình Anh

Kính gửi Ban Tuyển dụng Yabu Aube,

Em là Trương Đình Anh, tốt nghiệp ngành Khoa học Máy tính tại ĐH Mở TP.HCM. Qua tin tuyển dụng, em thấy vị trí Intern Backend rất phù hợp với định hướng của mình nên xin gửi hồ sơ ứng tuyển. Một số điểm nổi bật của em:

• Kinh nghiệm thực tế: Tại Công ty TNHH Công nghệ TAMI, em thiết kế CSDL PostgreSQL (Supabase), xây dựng RESTful API và tích hợp xác thực Google (NextAuth) cho hệ thống phân tích dữ liệu chứng khoán.
• Dự án cá nhân: Xây dựng nền tảng thương mại điện tử (React/Tailwind, Node.js/Express/MongoDB), đóng gói Docker và triển khai CI/CD.
• Kỹ năng: JavaScript/TypeScript, RESTful API, Git, Postman; hiện đang tìm hiểu PHP/Laravel để sớm bắt nhịp với công nghệ của Quý công ty.

Em có thể làm việc Full-time và sẵn sàng bắt đầu ngay. Em xin gửi kèm CV và GitHub (github.com/dinhanhhhh) để Anh/Chị tham khảo. Rất mong có cơ hội trao đổi trực tiếp trong buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
0923 202 861 | tdinhanh.it@gmail.com`,
      full: `Ứng tuyển Intern Backend - Trương Đình Anh

Kính gửi Ban Tuyển dụng Yabu Aube,

Em là Trương Đình Anh, tốt nghiệp ngành Khoa học Máy tính tại ĐH Mở TP.HCM. Qua tin tuyển dụng, em thấy vị trí Intern Backend rất phù hợp với định hướng của mình nên xin gửi hồ sơ ứng tuyển. Một số điểm nổi bật của em:

• Kinh nghiệm thực tế: Tại Công ty TNHH Công nghệ TAMI, em thiết kế CSDL PostgreSQL (Supabase), xây dựng RESTful API và tích hợp xác thực Google (NextAuth) cho hệ thống phân tích dữ liệu chứng khoán.
• Dự án cá nhân: Xây dựng nền tảng thương mại điện tử (React/Tailwind, Node.js/Express/MongoDB), đóng gói Docker và triển khai CI/CD.
• Kỹ năng: JavaScript/TypeScript, RESTful API, Git, Postman; hiện đang tìm hiểu PHP/Laravel để sớm bắt nhịp với công nghệ của Quý công ty.

Em có thể làm việc Full-time và sẵn sàng bắt đầu ngay. Em xin gửi kèm CV và GitHub (github.com/dinhanhhhh) để Anh/Chị tham khảo. Rất mong có cơ hội trao đổi trực tiếp trong buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
0923 202 861 | tdinhanh.it@gmail.com`
    },
    interview: {
      notes: "Bộ câu hỏi trọng tâm ôn phỏng vấn Intern Backend (PHP, Laravel, MySQL, RESTful API, Postman, Node.js, JWT, Docker):",
      questions: [
        {
          q: "Kiến trúc MVC trong Laravel / Express hoạt động như thế nào? Mô tả luồng đi của một request?",
          a: "Request từ Client -> Route (định tuyến URL) -> Middleware (kiểm tra token, validate input, CORS) -> Controller (tiếp nhận request, gọi Service/Model xử lý logic nghiệp vụ) -> Model/ORM (truy vấn CSDL MySQL/PostgreSQL) -> Controller đóng gói JSON Response trả về Client cùng HTTP Status Code thích hợp (200, 201, 400, 401, 403, 500)."
        },
        {
          q: "Bạn thiết kế CSDL quan hệ MySQL như thế nào? Chuẩn hóa 3NF và Indexing có tác dụng gì?",
          a: "Thiết kế bảng dựa trên thực thể và mối quan hệ (1-1, 1-N, N-N thông qua bảng trung gian). Áp dụng 3NF để loại bỏ trùng lặp dữ liệu, đảm bảo tính toàn vẹn khi thêm/sửa/xóa. Sử dụng Indexing (B-Tree) trên các cột thường xuyên dùng trong mệnh đề WHERE, JOIN hoặc ORDER BY để tăng tốc truy vấn, đồng thời lưu ý không lạm dụng index gây chậm thao tác ghi (INSERT/UPDATE)."
        },
        {
          q: "Phân biệt các HTTP methods: GET, POST, PUT, PATCH, DELETE và các mã trạng thái (status code) phổ biến?",
          a: "GET: lấy dữ liệu (Idempotent). POST: tạo mới tài nguyên. PUT: cập nhật toàn bộ tài nguyên. PATCH: cập nhật một phần tài nguyên. DELETE: xóa tài nguyên. Status codes: 200 OK (thành công), 201 Created (tạo mới thành công), 400 Bad Request (lỗi dữ liệu gửi lên), 401 Unauthorized (chưa xác thực/hết hạn token), 403 Forbidden (không có quyền truy cập), 404 Not Found (không tìm thấy tài nguyên), 500 Internal Server Error (lỗi máy chủ)."
        },
        {
          q: "Cơ chế xác thực bằng JWT (JSON Web Token) hoạt động ra sao và làm sao để bảo mật?",
          a: "JWT gồm 3 phần: Header.Payload.Signature. Khi user đăng nhập thành công, server ký và sinh ra Access Token (kèm Refresh Token nếu có). Client gửi JWT trong header 'Authorization: Bearer <token>' ở các request tiếp theo. Server xác thực chữ ký (Signature) bằng secret key mà không cần lưu session trong bộ nhớ. Để bảo mật: lưu token trong HttpOnly Cookie để chống XSS, dùng HTTPS, đặt thời gian sống ngắn cho Access Token và dùng Refresh Token để gia hạn."
        },
        {
          q: "Khi nào nên dùng MySQL (Relational DB) và khi nào nên dùng MongoDB (NoSQL Document)?",
          a: "Dùng MySQL khi dữ liệu có cấu trúc chặt chẽ, cần tính toàn vẹn quan hệ (foreign keys, transaction ACID) cao như tài chính, thương mại điện tử, thanh toán, quản lý đơn hàng. Dùng MongoDB khi cấu trúc dữ liệu linh hoạt, thay đổi thường xuyên, cần đọc ghi tốc độ cao hoặc lưu trữ dữ liệu dạng document lồng nhau như bài đăng mạng xã hội, logs, catalogue linh hoạt."
        }
      ]
    }
  },
  en: {
    title: "Backend Developer Intern",
    btnText: "Print / Save PDF",
    objective:
      "Computer Science graduate from Ho Chi Minh City Open University, targeting Backend. Solid in OOP, MVC, 3NF relational database design (MySQL, PostgreSQL), and RESTful API development with Node.js/Express; hands-on database design, API engineering, and Google OAuth integration at TAMI. Currently exploring PHP/Laravel, eager to intern as a Backend Developer at Yabu Aube to learn and contribute to projects.",
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analytics system and real-time processing pipeline.",
        tasks: [
          "Participated in relational database schema design and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Architected and optimized RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Integrated Google OAuth authentication via NextAuth protecting sensitive backend routes.",
          "Conducted functional and performance API testing with Postman, debugging and optimizing queries with mentors.",
          "Packaged and deployed demo applications to Cloud Vercel, maintaining structured Git workflows.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Core API services managing product catalogs, shopping carts, and order workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed structured MongoDB schemas ensuring data integrity for products, orders, and user carts.",
          "Implemented RESTful APIs for product classification, cart state management, and the complete order lifecycle.",
          "Built custom middleware to enforce input validation and Role-Based Access Control (RBAC).",
          "Containerized services with Docker and authored comprehensive Postman collections for integration testing.",
        ],
        tech: "Node.js, Express, MongoDB, React, Tailwind CSS, Docker, RESTful API, Postman, Git",
      },
      {
        name: "JOB PORTAL BACKEND SYSTEM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Core recruitment backend system handling complex business logic between recruiters and applicants.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and implemented RESTful APIs strictly adhering to the Controller-Service layered architecture.",
          "Engineered centralized authentication using JWT and Role-Based Access Control (RBAC).",
          "Modeled schemas and optimized MongoDB queries, minimizing response times for search and filtering operations.",
          "Integrated centralized global exception handling and verified API quality through Postman.",
        ],
        tech: "Node.js, Express, MongoDB, TypeScript, JWT, RESTful API, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, Express.js, TypeScript, RESTful API, MVC Architecture, JWT, RBAC, Middleware",
      },
      {
        cat: "Databases",
        items: "MySQL, PostgreSQL, MongoDB, Schema Design, 3NF, Indexing, Query Optimization",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Postman, Docker, Swagger, Vercel",
      },
      {
        cat: "Frontend",
        items: "JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS",
      },
      {
        cat: "English",
        items: "Technical documentation reading and writing",
      },
    ],
    docTitle: "CV_TruongDinhAnh_Backend_YabuAube_EN",
    emailTemplates: {
      short: `[Job Application] Intern Backend - Truong Dinh Anh

Dear Hiring Team at Yabu Aube,

I am Truong Dinh Anh, a Computer Science graduate (Ho Chi Minh City Open University). I am writing to apply for the Intern Backend position, as my qualifications align closely with your requirements:

• Hands-on Experience: At TAMI Technology Co., Ltd, I designed PostgreSQL schemas on Supabase Cloud, developed RESTful APIs, and integrated Google OAuth (NextAuth) for a financial analytics platform.
• Personal Project: Built an E-commerce API & Web platform (React/Tailwind, Node.js/Express/MongoDB), containerized with Docker, and deployed via CI/CD.
• Skills: JavaScript/TypeScript, RESTful API, Git, Postman; currently learning PHP/Laravel to quickly get up to speed with your technology stack.

I am available full-time and ready to start immediately. I have attached my CV and GitHub (github.com/dinhanhhhh) for your review. I look forward to the opportunity to discuss further in an interview.

Sincerely,
Truong Dinh Anh
(+84) 923 202 861 | tdinhanh.it@gmail.com`,
      full: `[Job Application] Intern Backend - Truong Dinh Anh

Dear Hiring Team at Yabu Aube,

I am Truong Dinh Anh, a Computer Science graduate (Ho Chi Minh City Open University). I am writing to apply for the Intern Backend position, as my qualifications align closely with your requirements:

• Hands-on Experience: At TAMI Technology Co., Ltd, I designed PostgreSQL schemas on Supabase Cloud, developed RESTful APIs, and integrated Google OAuth (NextAuth) for a financial analytics platform.
• Personal Project: Built an E-commerce API & Web platform (React/Tailwind, Node.js/Express/MongoDB), containerized with Docker, and deployed via CI/CD.
• Skills: JavaScript/TypeScript, RESTful API, Git, Postman; currently learning PHP/Laravel to quickly get up to speed with your technology stack.

I am available full-time and ready to start immediately. I have attached my CV and GitHub (github.com/dinhanhhhh) for your review. I look forward to the opportunity to discuss further in an interview.

Sincerely,
Truong Dinh Anh
(+84) 923 202 861 | tdinhanh.it@gmail.com`
    }
  }
};
