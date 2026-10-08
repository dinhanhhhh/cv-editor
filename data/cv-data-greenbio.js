// =========================================================================
// GREEN BIO CV DATA - WEB DEVELOPER INTERN (OVERRIDE FORMAT)
// CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  meta: {
    company: "CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO",
    position: "Web Developer Intern",
    recipient: "Bộ phận Tuyển dụng CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO",
    email: "",
    contact: "",
    jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
    notes: "Địa chỉ làm việc: 85 Phạm Huy Thông, Phường 17 / Phường Gò Vấp, TP.HCM. Hệ thống nội bộ: Bán hàng, kho vận, nhân sự, website. Stack: Python (Django/Flask/FastAPI), React, PostgreSQL/MySQL, REST API, Docker.",
    pitchHighlights: "Thành thạo React.js & Responsive, kiến thức nền tảng Python (FastAPI/Django), thiết kế CSDL PostgreSQL/MySQL và xây dựng RESTful APIs."
  },
  vi: {
    title: "Web Developer Intern",
    objective:
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Thế mạnh phát triển web với React.js, Next.js, Node.js, PostgreSQL/MySQL và có kiến thức Python. Từng thiết kế CSDL PostgreSQL trên Supabase Cloud và xây dựng RESTful APIs truy xuất dữ liệu tài chính tại Tami Technology. Sẵn sàng tham gia phát triển và vận hành các hệ thống web nội bộ tại Green Bio.",
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa luồng xử lý thông tin nội bộ.",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers để truy xuất dữ liệu thời gian thực.",
          "Viết các truy vấn SQL (JOIN, Indexing, Aggregation) để chuẩn hóa, làm sạch và tối ưu thời gian trích xuất dữ liệu.",
          "Tích hợp luồng xác thực Google OAuth (NextAuth) bảo vệ các endpoints nhạy cảm và kiểm thử API toàn diện bằng Postman.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên hạ tầng Cloud Vercel, quản lý mã nguồn chặt chẽ qua Git.",
        ],
        tech: "PostgreSQL, Supabase, Python (Scripting), Next.js (API Routes), RESTful API, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG QUẢN LÝ BÁN HÀNG & KHO VẬN",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Ứng dụng web quản lý danh mục sản phẩm, theo dõi luồng đặt hàng và kiểm soát lượng hàng tồn kho.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế mô hình dữ liệu quản lý chi tiết sản phẩm, danh mục, đơn hàng và lượng tồn kho.",
          "Xây dựng hệ thống RESTful APIs xử lý nghiệp vụ tạo đơn hàng, cập nhật trạng thái giao vận và giỏ hàng.",
          "Phát triển giao diện quản trị responsive với React và Tailwind CSS, hiển thị tối ưu trên cả desktop và mobile.",
          "Tích hợp xác thực bảo mật JWT, phân quyền truy cập và đóng gói ứng dụng với Docker.",
        ],
        tech: "React, Node.js, Express.js, MongoDB, Docker, RESTful API, Tailwind CSS",
      },
      {
        name: "HỆ THỐNG QUẢN TRỊ NHÂN SỰ & HỒ SƠ",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống dashboard quản trị thông tin nhân sự/học viên, phân quyền vai trò và trích xuất báo cáo vận hành.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc mô-đun với Node.js và Express, chuẩn hóa tài liệu API qua Swagger UI.",
          "Triển khai xác thực JWT và cơ chế phân quyền người dùng (RBAC) chặt chẽ giữa ban quản trị và nhân viên.",
          "Xây dựng giao diện dashboard trực quan với React hỗ trợ các thao tác CRUD, bộ lọc đa điều kiện và tìm kiếm thời gian thực.",
          "Tuân thủ quy chuẩn clean code, tối ưu truy vấn cơ sở dữ liệu và quản lý phiên bản qua Git.",
        ],
        tech: "React, Next.js, Node.js, Express.js, MongoDB, Swagger UI, JWT, RBAC, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Python, Node.js, Express.js, RESTful API, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, SQL, 3NF, Indexing",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Swagger, Vercel",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật",
      },
    ],
    emailTemplates: {
      short: `[Tiêu đề Email: [Web Developer Intern] - Trương Đình Anh]

Kính gửi Ban Tuyển dụng CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí Web Developer Intern tại Green Bio (85 Phạm Huy Thông, Gò Vấp).

Những thế mạnh phù hợp với yêu cầu của Quý công ty:
- Frontend & Website: Thành thạo React.js, Next.js, responsive đa thiết bị, cập nhật giao diện mượt mà và hiểu biết SEO cơ bản.
- CSDL & Báo cáo: Thành thạo SQL (PostgreSQL, MySQL), thiết kế mô hình dữ liệu quan hệ, viết câu truy vấn xử lý dữ liệu và xây dựng báo cáo nội bộ.
- Backend & Python: Nắm vững kiến trúc RESTful APIs, có kiến thức nền tảng về Python (FastAPI, Django/DRF) và viết clean code dễ bảo trì.
- Công cụ: Thành thạo Git, làm quen với Docker, Linux, Celery và Redis; đã xây dựng các dự án thực tế về quản lý bán hàng, kho vận và nhân sự.

Tôi xin gửi kèm CV và link GitHub dự án cá nhân: https://github.com/dinhanhhhh
Rất mong sớm nhận được phản hồi từ Quý công ty.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861 | Email: tdinhanh.it@gmail.com`,

      warm: `[Tiêu đề Email: [Web Developer Intern] - Trương Đình Anh]

Kính gửi Ban Tuyển dụng Green Bio,

Em là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Đọc mô tả công việc Web Developer Intern tại Green Bio, em cảm nhận đây chính là cơ hội thực tập lý tưởng để em vừa phát huy thế mạnh chuyên sâu về React.js và CSDL PostgreSQL/MySQL, vừa được vận dụng và học hỏi sâu thêm về Python trong quy trình vận hành thực tế của doanh nghiệp từ bán hàng, kho vận cho đến nhân sự.

Em hiện sinh sống tại Thủ Đức, việc di chuyển sang văn phòng công ty tại 85 Phạm Huy Thông (Gò Vấp) rất gần và thuận lợi. Em có tinh thần trách nhiệm cao, tác phong cẩn thận, ham học hỏi và sẵn sàng hỗ trợ các anh chị trong team ở mọi đầu việc từ phát triển tính năng, viết truy vấn báo cáo đến bảo trì website.

Em xin gửi kèm CV và mong có cơ hội được gặp gỡ các anh chị trong buổi phỏng vấn sắp tới.

Em xin chân thành cảm ơn!
Trương Đình Anh
SĐT: 0923202861
GitHub: https://github.com/dinhanhhhh`
    }
  },
  en: {
    title: "Web Developer Intern",
    objective:
      "Computer Science graduate from Ho Chi Minh City Open University proficient in modern web development with React.js and Next.js, backed by solid foundations in relational databases (PostgreSQL, MySQL) and RESTful APIs. Possesses foundational knowledge of Python (FastAPI, Django/DRF) with rapid learning capability for backend integration. Hands-on experience developing responsive internal management systems with clean code practices and basic SEO. Dedicated, proactive, eager to contribute long-term at Green Bio.",
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analysis system and internal data processing pipelines.",
        tasks: [
          "Designed relational database schemas and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Built and optimized robust RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Crafted complex SQL queries (JOINs, Indexing, Aggregations) to sanitize, transform, and optimize data reporting.",
          "Integrated Google OAuth authentication flow with NextAuth and executed comprehensive API testing via Postman.",
          "Containerized and deployed stable demo instances on Vercel Cloud, maintaining clean version control via Git.",
        ],
        tech: "PostgreSQL, Supabase, Python (Scripting), Next.js (API Routes), RESTful API, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "SALES & INVENTORY MANAGEMENT SYSTEM",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Web application managing product catalogs, order fulfillment lifecycles, and real-time inventory control.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed data models managing product catalogs, categories, customer orders, and inventory stock.",
          "Developed backend RESTful APIs handling order creation, fulfillment status updates, and cart management.",
          "Implemented responsive management interfaces using React and Tailwind CSS, optimized for desktop and mobile.",
          "Integrated JWT authentication, access control, and containerized the service using Docker.",
        ],
        tech: "React, Node.js, Express.js, MongoDB, Docker, RESTful API, Tailwind CSS",
      },
      {
        name: "PERSONNEL & RECORDS MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Administrative dashboard managing employee/student records, role-based permissions, and operation analytics.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built modular backend services using Node.js and Express; documented APIs with Swagger UI for smooth integration.",
          "Enforced JWT authentication and Role-Based Access Control (RBAC) ensuring granular permission security.",
          "Constructed dynamic React dashboards supporting real-time CRUD operations, complex filtering, and search.",
          "Maintained clean coding conventions, optimized database queries, and managed continuous code review via Git.",
        ],
        tech: "React, Next.js, Node.js, Express.js, MongoDB, Swagger UI, JWT, RBAC, Git",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Python, Node.js, Express.js, RESTful API, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, SQL, 3NF, Indexing",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Swagger, Vercel",
      },
      {
        cat: "English",
        items: "Technical documentation reading",
      },
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
