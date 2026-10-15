// =========================================================================
// CV DATA - HEMIDI (FRESHER NODEJS DEVELOPER)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  meta: {
    company: "HEMIDI",
    position: "Fresher Node.js Developer",
    recipient: "Ban Tuyển dụng Hemidi",
    email: "recruit@hemidi.com",
    contact: "recruit@hemidi.com | Zalo: 0937538997 | 483 Nguyễn Oanh, P. Gò Vấp, TP.HCM",
    jobUrl: "mailto:recruit@hemidi.com?subject=Ứng%20tuyển%20Fresher%20Node.js%20Developer%20-%20Trương%20Đình%20Anh",
    notes: "Tuyển dụng Fresher NodeJS Developer tại HEMIDI. Địa điểm: 483 Nguyễn Oanh, Gò Vấp. Giờ làm việc: Thứ 2 – Thứ 6 (8:00 – 17:00). Email nhận CV: recruit@hemidi.com. Zalo: 0937538997. Yêu cầu: Node.js (ưu tiên NestJS), Clean code, OOP/SOLID, TDD, RESTful, PostgreSQL, TypeORM, BullMQ/Redis.",
    jdText: `HEMIDI - TUYỂN DỤNG ĐỒNG ĐỘI MỚI
💻 Vị trí: Fresher NodeJS Developer (JS)
Slogan: Build the next solution

THÔNG TIN LÀM VIỆC & LIÊN HỆ:
📌 Thời gian làm việc: Thứ 2 – Thứ 6 | 8:00 – 17:00 (Nghỉ Thứ 7 & Chủ Nhật)
📍 Địa điểm: 483 Nguyễn Oanh, Phường Gò Vấp, TP. Hồ Chí Minh
📩 Email ứng tuyển: recruit@hemidi.com
📲 Chi tiết công việc / Zalo: 0937538997

YÊU CẦU ỨNG VIÊN:
● Có ít nhất 1 năm kinh nghiệm làm việc với Node.js, ưu tiên ứng viên có kinh nghiệm sử dụng NestJS.
● Viết code sạch, dễ bảo trì, có tài liệu rõ ràng, tuân thủ các best practices và tiêu chuẩn lập trình đã được thiết lập.
● Hiểu biết về các nguyên tắc thiết kế phần mềm và kiến trúc backend (OOP, SOLID, Design Patterns, Layered Architecture).
● Chủ động tham gia vào quá trình viết mã, review code, và phát triển unit test theo phương pháp Test-Driven Development (TDD).
● Thiết kế và triển khai RESTful, tối ưu cơ sở dữ liệu PostgreSQL; viết migration, quản lý schema với TypeORM.
● Xây dựng và vận hành các tác vụ xử lý nền (background job) như lấy dữ liệu từ API bên thứ ba, đồng bộ dữ liệu, xử lý retry và lỗi bằng BullMQ.
● Phối hợp cùng các thành viên trong team để đảm bảo chất lượng sản phẩm và phát triển các giải pháp phần mềm ổn định, đáng tin cậy.

QUYỀN LỢI:
● Được cấp máy tính bàn phục vụ công việc.
● Được tài trợ gói bảo hiểm sức khỏe nâng cao của Công ty (DBV).
● Ngày nghỉ: 12 ngày phép trong năm + 03h phép/tháng & các ngày theo Luật Quy định.
● Thưởng nóng, Lễ, Tết, thưởng doanh số, ...
● Tham gia chương trình Coaching & Mentoring, khóa đào tạo nội bộ/bên ngoài.
● Tham gia các Câu lạc bộ: Tiếng Anh, Đọc sách, Wellbeing, Cầu lông...
● Tặng quà các ngày: 8/3 (phụ nữ), 6/4 (đàn ông), sinh nhật, ...
● Hỗ trợ các khoản trợ cấp: Kết hôn, tang chế, ốm đau, thai sản, ...
● Tham gia các hoạt động thường niên: Tất niên, Tân niên, Teambuilding, ...

Gia nhập Hemidi cùng tạo nên những giá trị mới!`,
    pitchHighlights: "Nền tảng vững chắc về Node.js/TypeScript, kiến trúc phân tầng, quản trị CSDL PostgreSQL/TypeORM và kinh nghiệm triển khai background jobs với BullMQ/Redis theo chuẩn Clean Code & TDD."
  },
  vi: {
    title: "Fresher Node.js Developer",
    btnText: "In / Tải PDF",
    objective:
      "Cử nhân Khoa học Máy tính, định hướng Backend với thế mạnh Node.js, TypeScript và kiến trúc phân tầng Controller-Service. Nắm vững OOP, thiết kế CSDL (PostgreSQL, MongoDB) và xây dựng RESTful API; có kinh nghiệm thực tế thiết kế CSDL PostgreSQL và tích hợp dịch vụ tại TAMI. Tuân thủ Clean Code, nắm chắc nguyên lý hàng đợi bất đồng bộ và sẵn sàng tiếp cận BullMQ, TypeORM để đóng góp cho Hemidi ở vị trí Fresher Node.js Developer.",
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa dữ liệu thời gian thực.",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng và tối ưu hệ thống RESTful APIs phục vụ truy xuất và chuẩn hóa dữ liệu tài chính từ API đối tác.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth bảo vệ các tuyến API nhạy cảm.",
          "Kiểm thử toàn diện hiệu năng và tính đúng đắn của API bằng Postman, phối hợp tối ưu hóa truy vấn CSDL.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên môi trường Cloud Vercel, quản lý mã nguồn qua Git.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng toàn diện, xử lý nghiệp vụ kết nối giữa nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và triển khai kiến trúc phân tầng Controller-Service chuẩn mực với Node.js, Express và TypeScript.",
          "Xây dựng hệ thống RESTful APIs cho các phân hệ quản lý việc làm, hồ sơ ứng tuyển và người dùng.",
          "Triển khai xác thực bảo mật JWT với HttpOnly Cookies và cơ chế phân quyền người dùng nhiều cấp độ (RBAC).",
          "Tối ưu hóa cấu trúc cơ sở dữ liệu MongoDB và xử lý ngoại lệ tập trung (Global Error Handling) theo Clean Code.",
          "Kiểm thử toàn diện các luồng API chức năng bằng Postman Collection và hoàn thiện tài liệu tích hợp API.",
        ],
        tech: "Node.js, Express, TypeScript, MongoDB, JWT, RESTful API, Tailwind CSS, Postman, Git",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE)",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Dịch vụ web và API quản lý danh mục sản phẩm, giỏ hàng và xử lý luồng đơn hàng thương mại điện tử.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế hệ thống RESTful APIs quản lý danh mục sản phẩm, trạng thái giỏ hàng và quy trình đặt hàng.",
          "Triển khai Middleware kiểm tra tính hợp lệ của dữ liệu đầu vào và phân quyền quản trị viên (Admin RBAC).",
          "Mô hình hóa dữ liệu NoSQL MongoDB, tối ưu hóa truy vấn và đảm bảo tính nhất quán của giao dịch đơn hàng.",
          "Đóng gói toàn bộ ứng dụng bằng Docker container, triển khai môi trường demo và kiểm thử tự động qua Postman.",
        ],
        tech: "Node.js, Express, MongoDB, React, Tailwind CSS, Docker, RESTful API, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, TypeScript, Express.js, NestJS, RESTful API, OOP, Layered Architecture, Clean Code, TDD",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, MySQL, TypeORM, Schema Migration, Database Design, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Jest, Cursor, GitHub Copilot, VS Code",
      },
      {
        cat: "Frontend",
        items: "JavaScript (ES6+), React.js, Next.js, HTML5/CSS3",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật, viết tài liệu API",
      },
    ],
    docTitle: "CV_TruongDinhAnh_NodeJS_Hemidi_VI",
    emailTemplates: {
      short: `Ứng tuyển Fresher Node.js Developer - Trương Đình Anh

Kính gửi Ban Tuyển dụng Hemidi,

Em là Trương Đình Anh, tốt nghiệp ngành Khoa học Máy tính tại ĐH Mở TP.HCM. Qua tin tuyển dụng, em thấy vị trí Fresher Node.js Developer rất phù hợp với định hướng của mình nên xin gửi hồ sơ ứng tuyển. Một số điểm nổi bật của em:

• Kinh nghiệm thực tế: Tại Công ty TNHH Công nghệ TAMI, em thiết kế CSDL PostgreSQL (Supabase), xây dựng RESTful API và tích hợp xác thực Google (NextAuth) cho hệ thống phân tích dữ liệu chứng khoán.
• Dự án cá nhân: Xây dựng nền tảng tuyển dụng JOB PORTAL PLATFORM (Node.js/Express, TypeScript, MongoDB) và hệ thống E-commerce với kiến trúc phân tầng chuẩn mực, đóng gói Docker và CI/CD.
• Kỹ năng & Thích ứng: Thành thạo Node.js, TypeScript, RESTful API, Git, Postman; nắm vững tư duy OOP, Clean Code, có nền tảng tốt về hàng đợi bất đồng bộ và sẵn sàng bắt nhịp nhanh với NestJS, BullMQ, TypeORM.

Em có thể làm việc Full-time và sẵn sàng bắt đầu ngay. Em xin gửi kèm CV và GitHub (github.com/dinhanhhhh) để Anh/Chị tham khảo. Rất mong có cơ hội trao đổi trực tiếp trong buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
0923 202 861 | tdinhanh.it@gmail.com`,
      full: `Ứng tuyển Fresher Node.js Developer - Trương Đình Anh

Kính gửi Ban Tuyển dụng Hemidi,

Em là Trương Đình Anh, tốt nghiệp ngành Khoa học Máy tính tại ĐH Mở TP.HCM. Qua tin tuyển dụng, em thấy vị trí Fresher Node.js Developer rất phù hợp với định hướng của mình nên xin gửi hồ sơ ứng tuyển. Một số điểm nổi bật của em:

• Kinh nghiệm thực tế: Tại Công ty TNHH Công nghệ TAMI, em thiết kế CSDL PostgreSQL (Supabase), xây dựng RESTful API và tích hợp xác thực Google (NextAuth) cho hệ thống phân tích dữ liệu chứng khoán.
• Dự án cá nhân: Xây dựng nền tảng tuyển dụng JOB PORTAL PLATFORM (Node.js/Express, TypeScript, MongoDB) và hệ thống E-commerce với kiến trúc phân tầng chuẩn mực, đóng gói Docker và CI/CD.
• Kỹ năng & Thích ứng: Thành thạo Node.js, TypeScript, RESTful API, Git, Postman; nắm vững tư duy OOP, Clean Code, có nền tảng tốt về hàng đợi bất đồng bộ và sẵn sàng bắt nhịp nhanh với NestJS, BullMQ, TypeORM.

Em có thể làm việc Full-time và sẵn sàng bắt đầu ngay. Em xin gửi kèm CV và GitHub (github.com/dinhanhhhh) để Anh/Chị tham khảo. Rất mong có cơ hội trao đổi trực tiếp trong buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
0923 202 861 | tdinhanh.it@gmail.com`
    },
    interview: {
      notes: "Bộ câu hỏi trọng tâm ôn phỏng vấn Fresher Node.js Developer tại Hemidi (Node.js, TypeScript, PostgreSQL, TypeORM, BullMQ, Redis, TDD, Clean Code):",
      questions: [
        {
          q: "Kiến trúc phân tầng (Controller - Service - Repository) trong Node.js / NestJS mang lại lợi ích gì và bạn áp dụng ra sao?",
          a: "Kiến trúc phân tầng giúp phân tách rõ ràng trách nhiệm (Separation of Concerns): Controller chỉ đảm nhiệm tiếp nhận HTTP request, validate dữ liệu đầu vào và trả về response; Service chứa toàn bộ logic nghiệp vụ (business logic); Repository đóng gói các câu lệnh truy vấn CSDL qua TypeORM. Lợi ích là code dễ đọc, dễ bảo trì, tuân thủ nguyên tắc Single Responsibility (SOLID) và cực kỳ thuận tiện để viết Unit Test độc lập bằng cách mock tầng Repository."
        },
        {
          q: "Cơ chế hoạt động của Background Jobs với BullMQ và Redis? Làm thế nào để xử lý retry, rate limit và lỗi khi gọi API bên thứ ba?",
          a: "BullMQ sử dụng Redis làm message broker lưu trữ hàng đợi công việc (Job Queue). Producer đẩy job vào queue, Worker liên tục lắng nghe và xử lý bất đồng bộ, không làm nghẽn Event Loop của main thread. Khi gọi API bên thứ ba có thể bị gián đoạn, ta cấu hình cơ chế Exponential Backoff (thử lại sau 1s, 2s, 4s...) với số lần retry tối đa (vd: 3-5 lần). Nếu vẫn thất bại, job được chuyển vào Dead-Letter Queue (hoặc failed status) để ghi log, phát cảnh báo và xem xét xử lý thủ công mà không làm mất dữ liệu."
        },
        {
          q: "Tại sao nên dùng TypeORM Migration trong môi trường làm việc nhóm và production thay vì synchronize: true?",
          a: "Dùng synchronize: true chỉ phù hợp khi phát triển ban đầu vì nó tự động alter bảng, dễ gây mất dữ liệu cột hoặc drop index ngoài ý muốn trên production. Migration ghi lại lịch sử thay đổi cấu trúc bảng theo thời gian thông qua các file migration có chứa phương thức up() (áp dụng thay đổi) và down() (rollback khi có sự cố). Giúp cả team đồng bộ chính xác phiên bản database qua Git và kiểm soát rủi ro an toàn 100% khi deploy."
        },
        {
          q: "Quy trình Test-Driven Development (TDD) gồm các bước nào? Bạn viết Unit Test cho một Service như thế nào?",
          a: "TDD tuân theo chu trình Red - Green - Refactor: 1) Red: Viết test case trước dựa trên yêu cầu nghiệp vụ, chạy test và thấy test fail; 2) Green: Viết mã nguồn tối thiểu vừa đủ để test pass; 3) Refactor: Tối ưu và làm sạch mã nguồn (Clean Code) trong khi vẫn đảm bảo tất cả test cases đều pass. Khi viết Unit Test cho Service với Jest, ta mock các dependency như Repository và Queue để kiểm tra chính xác logic nội bộ mà không cần kết nối tới database thật."
        },
        {
          q: "Nguyên tắc Clean Code và Best Practices nào bạn luôn tuân thủ khi viết mã nguồn Backend Node.js?",
          a: "1) Đặt tên biến, hàm rõ ràng theo ý nghĩa nghiệp vụ (nói không với tên tắt vô nghĩa); 2) Hàm ngắn gọn, làm duy nhất một việc (Single Responsibility); 3) Xử lý lỗi tập trung (Global Exception Filter / Middleware) và không bao giờ nuốt lỗi (empty catch); 4) Luôn kiểm tra tính hợp lệ của dữ liệu đầu vào (Input Validation / DTOs); 5) Tránh lặp code (DRY) và tránh phụ thuộc cứng bằng Dependency Injection."
        }
      ]
    }
  },
  en: {
    title: "Fresher Node.js Developer",
    btnText: "Print / Save PDF",
    objective:
      "Computer Science graduate, targeting Backend with strong expertise in Node.js, TypeScript, and Controller-Service layered architecture. Solid foundation in OOP, database design (PostgreSQL, MongoDB), and RESTful API engineering; hands-on experience in PostgreSQL database design and service integration at TAMI. Committed to Clean Code, solid grasp of async queue principles, and ready to adopt BullMQ and TypeORM to contribute to Hemidi as a Fresher Node.js Developer.",
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analytics system and real-time processing pipeline.",
        tasks: [
          "Participated in relational database schema design and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Architected and optimized RESTful APIs for real-time market data retrieval from third-party data providers.",
          "Integrated Google OAuth authentication via NextAuth protecting sensitive backend routes.",
          "Conducted functional and performance API testing with Postman, debugging and optimizing queries with mentors.",
          "Packaged and deployed demo applications to Cloud Vercel, maintaining structured Git workflows.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A full-stack recruitment platform featuring job listings, applicant management, and structured recruitment workflows.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Architected RESTful API endpoints using Node.js, Express, and TypeScript adhering to Clean Code and modular patterns.",
          "Implemented robust JWT authentication with HttpOnly cookies, RBAC, and refresh token rotation to secure API routes.",
          "Centralized exception handling with custom error middlewares and structured response formatting across all services.",
          "Optimized MongoDB indexing and query pipelines, maintaining API response latency under 300ms for core workflows.",
          "Conducted comprehensive integration testing via Postman collections and maintained clean technical documentation.",
        ],
        tech: "Node.js, Express, TypeScript, MongoDB, JWT, RESTful API, Tailwind CSS, Postman, Git",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce platform managing product catalogs, shopping cart state, and order workflows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed normalized database schemas and implemented RESTful APIs for product catalog and checkout flows.",
          "Built custom middlewares for request body validation, authentication guards, and centralized error logging.",
          "Containerized application services using Docker and Docker Compose for consistent development and deployment.",
          "Integrated RESTful APIs with frontend services, maintaining high performance and responsive UI rendering.",
        ],
        tech: "Node.js, Express, MongoDB, React, Tailwind CSS, Docker, RESTful API, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, TypeScript, Express.js, RESTful API, OOP, Layered Architecture, Clean Code, Postman, Docker",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, Supabase, Database Design, Indexing, Query Optimization",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Jest, Cursor, GitHub Copilot, VS Code",
      },
      {
        cat: "Frontend",
        items: "JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5/CSS3",
      },
      {
        cat: "English",
        items: "Technical documentation reading and writing",
      },
    ],
    docTitle: "CV_TruongDinhAnh_NodeJS_Hemidi_EN",
    emailTemplates: {
      short: `[Job Application] Fresher Node.js Developer - Truong Dinh Anh

Dear Hemidi Hiring Team,

I am Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. Seeing your job opening, I find the Fresher Node.js Developer position closely aligns with my career direction and would love to submit my application. Key highlights of my qualifications:

• Hands-on Experience: At TAMI Technology Co., Ltd, I designed PostgreSQL schemas on Supabase Cloud, developed RESTful APIs, and integrated Google OAuth (NextAuth) for a financial analytics platform.
• Personal Projects: Built a recruitment platform and e-commerce services (Node.js, Express, TypeScript, MongoDB) applying clean layered architecture, JWT authentication, and Docker containerization; solid grasp of async processing principles and ready to adopt TypeORM / BullMQ.
• Skills & Mindset: Proficient in Node.js, TypeScript, RESTful API, Postman, Git; strong command of layered architecture, Clean Code principles, and fast adaptability.

I am available full-time and ready to start immediately. I have attached my CV and GitHub (github.com/dinhanhhhh) for your review. I look forward to the opportunity to discuss further in an interview.

Sincerely,
Truong Dinh Anh
(+84) 923 202 861 | tdinhanh.it@gmail.com`,
      full: `[Job Application] Fresher Node.js Developer - Truong Dinh Anh

Dear Hemidi Hiring Team,

I am Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. Seeing your job opening, I find the Fresher Node.js Developer position closely aligns with my career direction and would love to submit my application. Key highlights of my qualifications:

• Hands-on Experience: At TAMI Technology Co., Ltd, I designed PostgreSQL schemas on Supabase Cloud, developed RESTful APIs, and integrated Google OAuth (NextAuth) for a financial analytics platform.
• Personal Projects: Built a recruitment platform and e-commerce services (Node.js, Express, TypeScript, MongoDB) applying clean layered architecture, JWT authentication, and Docker containerization; solid grasp of async processing principles and ready to adopt TypeORM / BullMQ.
• Skills & Mindset: Proficient in Node.js, TypeScript, RESTful API, Postman, Git; strong command of layered architecture, Clean Code principles, and fast adaptability.

I am available full-time and ready to start immediately. I have attached my CV and GitHub (github.com/dinhanhhhh) for your review. I look forward to the opportunity to discuss further in an interview.

Sincerely,
Truong Dinh Anh
(+84) 923 202 861 | tdinhanh.it@gmail.com`
    }
  }
};
