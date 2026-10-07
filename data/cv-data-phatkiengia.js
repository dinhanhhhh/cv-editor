// =========================================================================
// PHÁT KIẾN GIA CV DATA - THỰC TẬP SINH AI & DATA ANALYTICS
// Công ty TNHH Phát Kiến Gia (FMCG / Thực phẩm nhập khẩu / E-commerce)
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "Công ty TNHH Phát Kiến Gia",
    position: "Thực Tập Sinh AI & Data Analytics",
    recipient: "Ban Tuyển dụng Công ty TNHH Phát Kiến Gia",
    email: "",
    contact: "",
    jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
    notes: "Công ty TNHH Phát Kiến Gia (FMCG/Nhập khẩu thực phẩm: Tulip, Monini, Harvey Fresh...). TTS AI & Data Analytics: Python, SQL, LLM APIs (Gemini/OpenAI), Workflow Automation, tự động hóa báo cáo và xử lý dữ liệu Kho vận/Bán hàng.",
    pitchHighlights: "Kinh nghiệm thực tế gọi LLM APIs (Gemini/OpenAI) xây dựng hệ thống tự động hóa, thành thạo SQL và xử lý dữ liệu đơn hàng, kho vận E-commerce."
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Thực Tập Sinh AI & Data Analytics",
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
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Có thế mạnh về lập trình Python, xử lý dữ liệu với SQL (PostgreSQL, MySQL) và tích hợp các LLM APIs (Gemini, OpenAI) xây dựng pipeline tự động hóa quy trình. Từng thiết kế CSDL và chuẩn hóa luồng dữ liệu tài chính tại Tami Technology. Mong muốn ứng dụng AI vào tối ưu hóa vận hành và phân tích dữ liệu tại Phát Kiến Gia.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa luồng thông tin nội bộ.",
        tasks: [
          "Tham gia thiết kế cấu trúc CSDL và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers để truy xuất dữ liệu thời gian thực.",
          "Viết các truy vấn SQL (JOIN, Indexing, Aggregation) để làm sạch, trích xuất và chuẩn hóa dữ liệu tài chính.",
          "Kiểm thử hiệu năng API bằng Postman, thực hiện gỡ lỗi và tối ưu hóa các luồng truyền tải dữ liệu.",
          "Đóng gói và triển khai ứng dụng demo lên hạ tầng Cloud Vercel, quản lý mã nguồn chặt chẽ qua Git.",
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
          "Xây dựng kiến trúc Serverless trên Cloudflare Workers kết nối Telegram Bot Webhook làm kênh tương tác 2 chiều.",
          "Tích hợp LLM APIs (Gemini/OpenAI) xây dựng pipeline tự động phân tích dữ liệu, tóm tắt và sinh mã nguồn.",
          "Phát triển kịch bản kiểm thử tự động (Quality Gate) xác thực tính toàn vẹn của cấu trúc dữ liệu trước khi xuất bản.",
          "Thiết lập luồng CI/CD với GitHub Actions tự động kích hoạt kiểm thử và deploy ứng dụng lên Production.",
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
        items: "Python, Node.js, Express.js, RESTful API Design, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, Truy vấn SQL, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "LLM APIs, Git, GitHub, Docker, Postman, Cloudflare Workers, CI/CD",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript, Responsive Design",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_AI_Data_Analytics_PhatKienGia",
    coverLetters: {
      tech: `[Tiêu đề Email: Ứng tuyển Thực Tập Sinh AI & Data Analytics – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Công ty TNHH Phát Kiến Gia,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi viết email này để bày tỏ nguyện vọng được ứng tuyển vào vị trí Thực Tập Sinh AI & Data Analytics tại Quý công ty.

Những năng lực và thế mạnh thực tế tôi có thể đóng góp cho Phát Kiến Gia:

1. Tích hợp AI & Tự động hóa quy trình (Workflow Automation): Đã trực tiếp xây dựng sản phẩm thực tế tích hợp LLM APIs (Google Gemini / OpenAI) qua nền tảng Serverless và Telegram Bot Webhook, có khả năng viết script Python tự động hóa tổng hợp dữ liệu, tra cứu thông tin và hỗ trợ các phòng ban.
2. Xử lý dữ liệu & SQL: Thành thạo thiết kế cơ sở dữ liệu quan hệ (PostgreSQL, MySQL), viết các câu truy vấn SQL phức tạp để làm sạch, trích xuất và chuẩn hóa dữ liệu báo cáo kinh doanh.
3. Nghiệp vụ Bán hàng & Quản lý kho vận (FMCG/E-commerce): Từng thiết kế và phát triển hoàn chỉnh hệ thống Quản lý Bán hàng & Kho vận (theo dõi sản phẩm, tồn kho, đơn hàng), hiểu rõ bài toán luồng dữ liệu trong doanh nghiệp phân phối.
4. Tác phong làm việc: Sẵn sàng sắp xếp thời gian làm việc linh hoạt (đáp ứng part-time >= 20 giờ/tuần hoặc full-time), chủ động nghiên cứu các công cụ AI mới và cam kết trách nhiệm cao.

Tôi xin gửi kèm CV chi tiết và link GitHub sản phẩm thực tế: https://github.com/dinhanhhhh
Rất mong có cơ hội được trao đổi trực tiếp trong buổi phỏng vấn cùng Quý công ty.

Trân trọng,
Trương Đình Anh
Số điện thoại: 0923202861
Email: tdinhanh.it@gmail.com
GitHub: https://github.com/dinhanhhhh`,

      short: `[Tiêu đề Email: [TTS AI & Data Analytics] - Trương Đình Anh]

Kính gửi Ban Tuyển dụng Công ty TNHH Phát Kiến Gia,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí Thực Tập Sinh AI & Data Analytics.

Thế mạnh của tôi:
- AI & Automation: Kinh nghiệm tích hợp LLM APIs (OpenAI, Gemini), viết script Python tự động hóa luồng dữ liệu và xây dựng bot tra cứu nội bộ.
- Dữ liệu & SQL: Nắm vững SQL, phân tích và trích xuất dữ liệu trên PostgreSQL/MySQL; có kinh nghiệm làm sạch dữ liệu tài chính tại Tami Technology.
- Hiểu biết nghiệp vụ: Đã xây dựng dự án Quản lý bán hàng & kho vận (sản phẩm, tồn kho, đơn hàng).
- Thời gian: Sẵn sàng làm việc linh hoạt từ 20 giờ/tuần hoặc toàn thời gian tại văn phòng công ty.

Kính gửi kèm CV và link GitHub: https://github.com/dinhanhhhh
Rất mong nhận được phản hồi từ Quý công ty.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861 | Email: tdinhanh.it@gmail.com`,

      warm: `[Tiêu đề Email: Ứng tuyển Thực Tập Sinh AI & Data Analytics – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Phát Kiến Gia,

Em là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Đọc mô tả công việc Thực Tập Sinh AI & Data Analytics tại Phát Kiến Gia, em cảm thấy đây là cơ hội tuyệt vời để vận dụng tư duy công nghệ AI vào giải quyết bài toán vận hành thực tế của một doanh nghiệp phân phối thực phẩm uy tín.

Bản thân em có kinh nghiệm thực chiến gọi LLM APIs (Gemini/OpenAI) xây dựng các công cụ tự động hóa quy trình, đồng thời làm việc rất chắc tay với SQL và lập trình Python. Em từng tự tay phát triển hệ thống quản lý bán hàng và kho vận, nên rất hào hứng được hỗ trợ các anh chị phòng Kinh doanh, Kho vận, Marketing tự động hóa báo cáo và tối ưu hóa luồng công việc hàng ngày.

Em có thể sắp xếp thời gian làm việc linh hoạt tại văn phòng công ty và luôn sẵn sàng học hỏi, thử nghiệm các giải pháp mới.

Em xin gửi kèm CV và rất mong có cơ hội được tham gia phỏng vấn cùng công ty!

Em xin chân thành cảm ơn!
Trương Đình Anh
SĐT: 0923202861
GitHub: https://github.com/dinhanhhhh`
    }
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "AI & Data Analytics Intern",
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
      "Computer Science graduate from Ho Chi Minh City Open University specializing in Python, SQL data processing (PostgreSQL, MySQL), and LLM API integrations (Gemini, OpenAI) for workflow automation. Experienced in database design and financial data standardization at Tami Technology. Eager to deploy practical AI tools and data analytics solutions at Phat Kien Gia.",
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
          "Constructed serverless architecture on Cloudflare Workers using Telegram Bot Webhooks as a bi-directional interface.",
          "Integrated LLM APIs (Gemini/OpenAI) to build automated pipelines for analysis, summarization, and structured code synthesis.",
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
        items: "Python, Node.js, Express.js, RESTful API Design, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, SQL Queries, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "LLM APIs, Git, GitHub, Docker, Postman, Cloudflare Workers, CI/CD",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript, Responsive Design",
      },
      {
        cat: "English",
        items: "Technical documentation reading",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_AI_Data_Analytics_PhatKienGia_EN",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
