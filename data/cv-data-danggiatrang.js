// =========================================================================
// CV DATA - DANG GIA TRANG INTERN DATA ENGINEER / BACKEND NODE.JS
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Data Engineer / Backend Developer Intern",
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
      projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
      skills: "KỸ NĂNG & CÔNG CỤ",
    },
    objective:
      "Thực tập sinh Backend & Data Engineer có nền tảng về Node.js, JavaScript/TypeScript và cơ sở dữ liệu (PostgreSQL, MongoDB). Có kinh nghiệm viết script thu thập, chuẩn hóa dữ liệu từ REST API và sử dụng Docker. Đang chủ động tìm hiểu các công nghệ về Data Pipeline (Kafka, MinIO). Mong muốn thực tập tại Đặng Gia Trang để hỗ trợ tối ưu hệ thống dữ liệu và học hỏi từ các dự án thực tế.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI (BACKEND / DATA INTERN)",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống thu thập và phân tích dữ liệu thị trường tài chính tích hợp thư viện Vnstock3.",
        tasks: [
          "Phát triển các script tự động thu thập (crawling) dữ liệu giá cổ phiếu từ các API tài chính nguồn, xử lý và chuẩn hóa dữ liệu thô sang cấu trúc JSON/CSV đồng nhất.",
          "Thiết kế ERD, tối ưu hóa các truy vấn SQL lớn và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng đám mây Supabase Cloud giúp truy xuất dữ liệu lịch sử nhanh chóng.",
          "Xây dựng hơn 15 RESTful API endpoints bằng Next.js Route Handlers để cung cấp dữ liệu chứng khoán chuẩn hóa cho phía Frontend hiển thị thời gian thực.",
          "Thiết lập cơ chế kiểm thử hiệu năng API bằng Postman, giám sát và tối ưu hóa tốc độ phản hồi của các luồng xử lý dữ liệu giúp hệ thống chạy ổn định.",
          "Đóng gói toàn bộ ứng dụng bằng Docker để đảm bảo môi trường phát triển và kiểm thử đồng nhất."
        ],
        tech: "Next.js (API Routes), Node.js, PostgreSQL, Supabase Cloud, Vnstock3, Docker, Postman, Git"
      }
    ],
    projects: [
      {
        name: "HỆ THỐNG QUẢN LÝ DỰ ÁN & ĐIỀU PHỐI DỮ LIỆU (STUDENT MANAGEMENT SYSTEM)",
        date: "06/2025 - 09/2025",
        role: "Backend Developer",
        desc: "Hệ thống quản lý thông tin học tập và hồ sơ sinh viên quy mô lớn với Dashboard quan sát số liệu trực quan.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Xây dựng backend hoàn chỉnh với Node.js và Express, thiết kế RESTful API chuẩn REST phục vụ các thao tác CRUD và kết nối cơ sở dữ liệu.",
          "Tối ưu truy vấn cơ sở dữ liệu MongoDB/MySQL, cấu trúc lại định dạng phản hồi dữ liệu thô nhằm giảm đáng kể thời gian xử lý và tải trang.",
          "Đóng gói container ứng dụng bằng Docker giúp đồng bộ môi trường phát triển cục bộ và triển khai máy chủ dễ dàng.",
          "Áp dụng cơ chế xác thực JWT, RBAC và tích hợp Swagger để tài liệu hóa toàn bộ API phục vụ quá trình tích hợp và kiểm tra chéo giữa các bên."
        ],
        tech: "Node.js, Express, MongoDB/MySQL, Next.js 15, TypeScript, Swagger, Docker"
      }
    ],
    skills: [
      {
        cat: "Backend & API",
        items: "Node.js (Express), TypeScript, JavaScript (ES6+), RESTful API, JWT, RBAC, Middleware, Swagger"
      },
      {
        cat: "Cơ sở dữ liệu & Data",
        items: "PostgreSQL, MySQL (Sequelize/Prisma), MongoDB (Mongoose), Data Crawling & Processing"
      },
      {
        cat: "Công cụ & DevOps",
        items: "Docker, Git/GitHub, Postman, Linux Command Line, Vercel, Render"
      },
      {
        cat: "Kỹ năng & Lợi thế",
        items: "Tư duy logic tốt, khả năng tự học nhanh công nghệ mới, đọc hiểu tài liệu tiếng Anh kỹ thuật tốt, sẵn sàng làm việc toàn thời gian"
      }
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_DE_BE_Intern_DangGiaTrang_VI",
    coverLetter: `[Tiêu đề Email: [DE/BE Intern] - Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng Đặng Gia Trang,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ nguyện vọng ứng tuyển vào vị trí Thực tập sinh Data Engineer / Backend Node.js tại Đặng Gia Trang.

Qua mô tả công việc, tôi vô cùng hào hứng khi được biết Quý công ty đang tìm kiếm một thực tập sinh tham gia trực tiếp vào các dự án xử lý dữ liệu thực tế, đặc biệt là phát triển các script bằng Node.js để cào dữ liệu từ API và làm việc với hệ sinh thái như Kafka, MinIO hay Data Pipeline. Với nền tảng hiện có và tinh thần ham học hỏi, tôi tự tin mình là một ứng viên phù hợp:

- Về Node.js và REST API: Tôi có nền tảng vững vàng về JavaScript/TypeScript, phát triển Backend bằng Node.js (Express, Next.js Route Handlers) và tích hợp các RESTful API. Tôi đã từng xây dựng thành công các script cào và chuẩn hóa dữ liệu tài chính (thông qua Vnstock3) cho hệ thống phân tích dữ liệu ở Tami Technology.
- Về Xử lý và Lưu trữ Dữ liệu: Tôi sử dụng thành thạo các cơ sở dữ liệu như PostgreSQL, MySQL, MongoDB. Tôi biết cách thiết kế schema và tối ưu truy vấn để nâng cao tốc độ xử lý dữ liệu lớn.
- Định hướng Data Engineer & DevOps: Tôi sử dụng Docker thành thạo để đóng gói ứng dụng. Đồng thời, tôi đã và đang tự nghiên cứu, thực hành các công nghệ phục vụ Data Pipeline như Apache Kafka để xử lý luồng dữ liệu thời gian thực và MinIO làm Object Storage để lưu trữ tập tin phi cấu trúc.

Tôi có thể làm việc toàn thời gian (Thứ 2 – Thứ 6, từ 08:00 – 17:00) tại văn phòng 77 Lê Trung Nghĩa, Tân Bình, TP.HCM. Với tư duy logic vững chắc, tinh thần học hỏi cao và sự cẩn thận trong xử lý dữ liệu, tôi rất mong muốn được rèn luyện dưới sự hướng dẫn của các Mentor tại Đặng Gia Trang để nhanh chóng làm chủ công việc và đóng góp giá trị cho dự án.

Tôi xin gửi kèm CV để Quý công ty tiện tham khảo. Rất mong nhận được phản hồi và có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Tôi xin chân thành cảm ơn!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Data Engineer / Backend Developer Intern",
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
      projects: "TECHNICAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Backend & Data Engineer Intern with a foundation in Node.js, JavaScript/TypeScript, and databases (PostgreSQL, MongoDB). Experienced in writing scripts to crawl and normalize REST API data, and using Docker. Proactively studying Data Pipeline concepts (Kafka, MinIO). Eager to intern at Dang Gia Trang to support data system optimization and learn from real-world projects.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD (BACKEND / DATA INTERN)",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "A financial stock market data collection and analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Developed automated scripts to crawl stock market data from source financial APIs, cleaning and normalizing raw data into consistent JSON/CSV formats.",
          "Designed ERDs, optimized large SQL queries, and deployed PostgreSQL databases on Supabase Cloud infrastructure for fast historical data retrieval.",
          "Built 15+ secure RESTful API endpoints using Next.js Route Handlers to provide standardized financial data feeds to the frontend in real-time.",
          "Established API performance testing workflows using Postman, identifying bottleneck logs and optimizing data handling speeds for system stability.",
          "Packaged the application using Docker to ensure consistent development, testing, and production environments."
        ],
        tech: "Next.js (API Routes), Node.js, PostgreSQL, Supabase Cloud, Vnstock3, Docker, Postman, Git"
      }
    ],
    projects: [
      {
        name: "STUDENT MANAGEMENT & DATA COORDINATION SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Backend Developer",
        desc: "A large-scale student record and grade administration system with an intuitive administrative dashboard.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Built a complete backend application with Node.js and Express, designing clean RESTful APIs for database communication and CRUD operations.",
          "Optimized MongoDB/MySQL queries and restructured raw response payloads to reduce data latency and page load times.",
          "Containerized the application using Docker to simplify local setup and ensure smooth production deployment.",
          "Implemented JWT authentication, Role-Based Access Control (RBAC), and Swagger API documentation to ease integration and QA testing."
        ],
        tech: "Node.js, Express, MongoDB/MySQL, Next.js 15, TypeScript, Swagger, Docker"
      }
    ],
    skills: [
      {
        cat: "Backend & API",
        items: "Node.js (Express), TypeScript, JavaScript (ES6+), RESTful API, JWT, RBAC, Middleware, Swagger"
      },
      {
        cat: "Databases & Data Eng",
        items: "PostgreSQL, MySQL (Sequelize/Prisma), MongoDB (Mongoose), Data Crawling & Processing"
      },
      {
        cat: "Tools & DevOps",
        items: "Docker, Git/GitHub, Postman, Linux Command Line, Vercel, Render"
      },
      {
        cat: "Key Strengths",
        items: "Logical thinking, fast learner, good technical English reading comprehension, available for full-time work"
      }
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_DE_BE_Intern_DangGiaTrang_EN",
    coverLetter: `[Subject: Job Application: DE/BE Intern – Truong Dinh Anh]

Dear Dang Gia Trang Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the Data Engineer / Backend Node.js Intern position at Dang Gia Trang.

I am highly motivated by your job description, which offers hands-on experience in building data scraping scripts, processing real-world datasets, and working with Kafka, MinIO, and data pipelines. With my academic background and hands-on projects, I believe I am a suitable candidate for this role:

- Node.js & REST APIs: I have a solid foundation in JavaScript/TypeScript, developing backends using Node.js (Express, Next.js Route Handlers), and integrating RESTful APIs. I developed scripts to automatically collect and normalize financial stock market data (using Vnstock3) for a data platform at Tami Technology.
- Data Processing & Storage: I am proficient in relational and non-relational database management systems including PostgreSQL, MySQL, and MongoDB. I understand database schema design and query optimization for high performance.
- Data Engineering & DevOps Aspiration: I use Docker to containerize applications. Furthermore, I have proactively researched and practiced building data pipelines using Apache Kafka for real-time stream processing and MinIO as an Object Storage system.

I am fully available to work on-site (Monday to Friday, 08:00 – 17:00) at your office at 77 Le Trung Nghia, Tan Binh District, HCMC. With a logical mind, high adaptability, and great attention to detail in data processing, I am eager to learn under the guidance of your mentors to quickly master the job and bring value to your projects.

Please find my attached CV for your consideration. I look forward to the opportunity of discussing my qualifications in an interview.

Thank you very much for your time and consideration!

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
  }
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
