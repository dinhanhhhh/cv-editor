// =========================================================================
// THỦ ĐỨC IT CV DATA - THỰC TẬP SINH IT (FULLSTACK & AI)
// Địa điểm làm việc: 190 Võ Văn Ngân, Bình Thọ, TP. Thủ Đức, TP.HCM
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "Văn phòng IT (190 Võ Văn Ngân, Thủ Đức)",
    position: "Thực Tập Sinh IT (Fullstack & AI)",
    recipient: "Bộ phận Tuyển dụng IT Thủ Đức",
    email: "",
    contact: "",
    jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
    notes: "Địa chỉ làm việc: 190 Võ Văn Ngân, Bình Thọ, Thủ Đức. Vị trí Thực tập sinh IT, ưu tiên Fullstack & AI, CSDL/SQL, Git.",
    pitchHighlights: "Thế mạnh lập trình Fullstack (React/Node.js/SQL) kết hợp tư duy ứng dụng AI (LLM APIs) vào tối ưu phần mềm."
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Thực Tập Sinh IT (Fullstack & AI)",
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
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Có thế mạnh lập trình Fullstack (React.js, Node.js, PostgreSQL/MySQL) kết hợp tư duy ứng dụng AI vào tối ưu phần mềm. Từng thiết kế CSDL trên Supabase Cloud và xây dựng hệ thống RESTful APIs truy xuất dữ liệu tại Tami Technology. Sẵn sàng làm việc trực tiếp toàn thời gian và hỗ trợ phát triển hệ thống phần mềm của công ty.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa luồng xử lý thông tin nội bộ.",
        tasks: [
          "Tham gia thiết kế cấu trúc CSDL và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers để truy xuất dữ liệu thời gian thực.",
          "Viết các truy vấn SQL (JOIN, Indexing, Aggregation) để chuẩn hóa, làm sạch và tối ưu thời gian trích xuất dữ liệu.",
          "Kiểm thử hiệu năng API bằng Postman, thực hiện gỡ lỗi (debugging) và phối hợp tối ưu hóa các luồng dữ liệu.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên hạ tầng Cloud Vercel, quản lý mã nguồn chặt chẽ qua Git.",
        ],
        tech: "PostgreSQL, Supabase, Next.js (API Routes), RESTful API, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA AI AGENT",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng giao diện web quản trị Responsive hỗ trợ xem trước dữ liệu và tương tác theo thời gian thực.",
          "Tích hợp LLM APIs (Gemini/OpenAI) xây dựng pipeline phân tích tự động dữ liệu và sinh cấu trúc mã nguồn.",
          "Phát triển kịch bản kiểm thử tự động (Quality Gate) xác thực tính hợp lệ của cấu trúc dữ liệu trước khi phát hành.",
          "Thiết lập luồng CI/CD với GitHub Actions tự động kích hoạt kiểm thử và deploy ứng dụng lên môi trường Production.",
        ],
        tech: "TypeScript, Cloudflare Workers, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "HỆ THỐNG QUẢN LÝ BÁN HÀNG & KHO VẬN",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Ứng dụng web quản lý danh mục sản phẩm, theo dõi luồng đặt hàng và kiểm soát lượng hàng tồn kho.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế mô hình dữ liệu quản lý chi tiết sản phẩm, danh mục, đơn hàng và lượng hàng tồn kho.",
          "Xây dựng hệ thống RESTful APIs xử lý nghiệp vụ tạo đơn hàng, cập nhật trạng thái giao vận và giỏ hàng.",
          "Phát triển giao diện quản trị responsive với React và Tailwind CSS, hiển thị tối ưu trên cả desktop và mobile.",
          "Tích hợp xác thực bảo mật JWT, phân quyền truy cập và đóng gói ứng dụng bằng Docker Compose.",
        ],
        tech: "React, Node.js, Express.js, MongoDB, Docker, RESTful API, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, Express.js, Python, RESTful API Design, JWT, RBAC",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, Truy vấn SQL, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Swagger, Visual Studio Code, LLM APIs",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_IT_Intern_ThuDuc",
    coverLetters: {
      tech: `[Tiêu đề Email: Ứng tuyển Thực Tập Sinh IT tại Thủ Đức – Trương Đình Anh]

Kính gửi Ban Tuyển dụng,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi viết email này để bày tỏ mong muốn được ứng tuyển vào vị trí Thực Tập Sinh IT tại văn phòng 190 Võ Văn Ngân, Phường Bình Thọ, TP. Thủ Đức.

Những năng lực và thế mạnh thực tế tôi có thể đóng góp cho Quý công ty:

1. Nền tảng Fullstack & Phát triển phần mềm: Sử dụng thành thạo React.js, Next.js, Node.js/Express để phát triển các ứng dụng web; nắm vững nguyên lý hoạt động của Web API, phân quyền người dùng (RBAC) và kiểm thử, gỡ lỗi (debugging) hệ thống.
2. Quản lý Cơ sở dữ liệu & SQL: Hiểu biết vững vàng về thiết kế CSDL quan hệ (PostgreSQL, MySQL), có khả năng viết các câu truy vấn SQL trích xuất, tổng hợp và xử lý dữ liệu hiệu quả.
3. Ứng dụng AI & Tự học công nghệ mới: Có kinh nghiệm thực tế tích hợp LLM APIs xây dựng các công cụ tự động hóa phần mềm; làm quen với Python, Docker và sử dụng thành thạo Git/GitHub, Visual Studio Code.
4. Tinh thần làm việc trực tiếp: Sẵn sàng làm việc trực tiếp toàn thời gian tại văn phòng 190 Võ Văn Ngân từ Thứ 2 đến Thứ 7 và cam kết tinh thần trách nhiệm cao nhất trong công việc.

Kính gửi kèm hồ sơ chi tiết và link GitHub sản phẩm thực tế: https://github.com/dinhanhhhh
Rất mong có cơ hội được tham gia buổi phỏng vấn trực tiếp tại văn phòng công ty.

Trân trọng,
Trương Đình Anh
Số điện thoại: 0923202861
Email: tdinhanh.it@gmail.com
GitHub: https://github.com/dinhanhhhh`,

      short: `[Tiêu đề Email: [Thực Tập Sinh IT - 190 Võ Văn Ngân] - Trương Đình Anh]

Kính gửi Ban Tuyển dụng,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí Thực Tập Sinh IT tại địa chỉ 190 Võ Văn Ngân, Thủ Đức.

Thế mạnh của tôi:
- Fullstack & Web: Thành thạo React.js, Node.js/Express, thiết kế RESTful APIs và kiểm thử, gỡ lỗi phần mềm.
- Cơ sở dữ liệu & SQL: Nắm vững SQL, thiết kế bảng và quản lý dữ liệu trên PostgreSQL/MySQL.
- Công nghệ & AI: Từng xây dựng dự án tự động hóa tích hợp LLM APIs, sử dụng thành thạo Git và Visual Studio Code.
- Thời gian làm việc: Sẵn sàng làm việc trực tiếp toàn thời gian tại văn phòng 190 Võ Văn Ngân.

Tôi xin gửi kèm CV và link GitHub: https://github.com/dinhanhhhh
Rất mong sớm nhận được phản hồi từ Quý công ty.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861 | Email: tdinhanh.it@gmail.com`,

      warm: `[Tiêu đề Email: Ứng tuyển Thực Tập Sinh IT (Thủ Đức) – Trương Đình Anh]

Kính gửi Ban Tuyển dụng,

Em là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Đọc mô tả công việc Thực Tập Sinh IT tại 190 Võ Văn Ngân, em cảm thấy đây là cơ hội vô cùng phù hợp với định hướng lập trình Fullstack và ứng dụng AI của bản thân.

Em sẵn sàng làm việc trực tiếp toàn thời gian tại văn phòng công ty ở đường Võ Văn Ngân. Em có tinh thần cầu tiến, tác phong cẩn thận, ham học hỏi và sẵn sàng hỗ trợ các anh chị trong team ở mọi đầu việc từ phát triển tính năng, quản lý cơ sở dữ liệu đến kiểm thử và bảo trì hệ thống.

Em xin gửi kèm CV và rất mong có cơ hội được gặp gỡ các anh chị trong buổi phỏng vấn sắp tới.

Em xin chân thành cảm ơn!
Trương Đình Anh
SĐT: 0923202861
GitHub: https://github.com/dinhanhhhh`
    }
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "IT Intern (Fullstack & AI)",
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
      "Computer Science graduate from Ho Chi Minh City Open University with strong competencies in Fullstack development (React.js, Node.js, PostgreSQL/MySQL) and practical AI integration skills. Experienced in database schema design on Supabase Cloud and building RESTful APIs at Tami Technology. Ready for full-time on-site work and eager to support software development and maintenance.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analysis system and internal data processing pipelines.",
        tasks: [
          "Participated in relational database schema design and deployed PostgreSQL on Supabase Cloud.",
          "Built and optimized robust RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Crafted complex SQL queries (JOINs, Indexing, Aggregations) to sanitize, transform, and optimize data reporting.",
          "Conducted API performance testing via Postman, debugging issues and optimizing data flow efficiency.",
          "Containerized and deployed stable demo instances on Vercel Cloud, maintaining clean Git versioning.",
        ],
        tech: "PostgreSQL, Supabase, Next.js (API Routes), RESTful API, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "AI AGENT AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Business process automation platform utilizing AI Agent architecture and Serverless computing.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Constructed responsive administrative web interface supporting real-time data preview and user interactions.",
          "Integrated LLM APIs (Gemini/OpenAI) to build automated pipelines for analysis and structured code synthesis.",
          "Implemented automated Quality Gate validation scripts ensuring schema integrity before publication.",
          "Established GitHub Actions CI/CD workflows triggering automatic testing and production deployment.",
        ],
        tech: "TypeScript, Cloudflare Workers, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
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
          "Integrated JWT authentication, access control, and containerized the service using Docker Compose.",
        ],
        tech: "React, Node.js, Express.js, MongoDB, Docker, RESTful API, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "Backend",
        items: "Node.js, Express.js, Python, RESTful API Design, JWT, RBAC",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, SQL Queries, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Docker, Postman, Swagger, Visual Studio Code, LLM APIs",
      },
      {
        cat: "English",
        items: "Technical documentation reading",
      },
    ],
    btnText: "Print / Save PDF",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
