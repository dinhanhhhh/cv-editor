// =========================================================================
// CV DATA - HỆ THỐNG GIÁO DỤC BẢN VIỆT (NHÂN VIÊN IT WEBSITE WORDPRESS)
// Vị trí: Nhân Viên IT Website WordPress (Lê Văn Sỹ, Phường Nhiêu Lộc, Q.3, HCM)
// Sử dụng 100% dự án & kinh nghiệm thật của Trương Đình Anh
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Nhân Viên IT Website WordPress",
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
      {
        icon: "address",
        text: "Thủ Đức, TP. Hồ Chí Minh",
      },
    ],
    sections: {
      objective: "MỤC TIÊU NGHỀ NGHIỆP",
      education: "HỌC VẤN",
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Cử nhân Khoa học Máy tính có nền tảng vững về lập trình Web (HTML5, CSS3, JavaScript, React, Next.js) và kinh nghiệm thực tế xây dựng giao diện responsive, API, cơ sở dữ liệu. Có kiến thức cơ bản về WordPress, Elementor, SEO Onpage, cấu hình hosting và chỉnh sửa hình ảnh bằng Canva. Mong muốn đồng hành lâu dài cùng Hệ thống Giáo dục Bản Việt, chủ động học hỏi để nhanh chóng làm chủ hệ thống website.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Nền tảng phân tích dữ liệu chứng khoán và quản lý thông tin trực tuyến.",
        tasks: [
          "Phát triển giao diện web Responsive, tối ưu hiển thị đồng bộ trên Mobile, Tablet và PC.",
          "Xây dựng 15+ RESTful API endpoints xử lý truy xuất và đồng bộ dữ liệu người dùng.",
          "Thiết kế CSDL quan hệ trên Supabase / PostgreSQL, tối ưu các truy vấn dữ liệu.",
          "Kiểm thử API qua Postman và cấu hình triển khai ứng dụng tự động lên môi trường Vercel.",
        ],
        tech: "HTML5, CSS3, JavaScript, Next.js, PostgreSQL, Supabase, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG QUẢN LÝ ĐÀO TẠO & SINH VIÊN",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản lý thông tin học vụ, hồ sơ sinh viên và khóa học với giao diện bảng điều khiển (Dashboard) trực quan.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Xây dựng giao diện trang quản trị (Admin Dashboard) thân thiện, hỗ trợ đầy đủ các thao tác tìm kiếm, lọc và cập nhật danh sách khóa học, học viên.",
          "Thiết kế bố cục web chuẩn Responsive, hiển thị trực quan biểu đồ dữ liệu và biểu mẫu nhập liệu trên nhiều kích thước màn hình.",
          "Tích hợp Swagger UI để tài liệu hóa chi tiết các luồng API, giúp việc kiểm thử chức năng và bàn giao dữ liệu diễn ra nhanh chóng, chính xác.",
          "Tối ưu hóa tốc độ phản hồi và thời gian tải trang, xử lý mượt mà các trạng thái giao diện khi tải dữ liệu (Loading, Empty, Error).",
        ],
        tech: "Next.js, Node.js, Express, MongoDB, HTML5, CSS3, Tailwind CSS, Swagger, Git",
      },
    ],
    skills: [
      {
        cat: "Lập trình Web",
        items:
          "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Thiết kế Responsive (Mobile / Tablet / PC), RESTful API, Node.js, Express",
      },
      {
        cat: "Cơ sở dữ liệu & Triển khai",
        items:
          "PostgreSQL, MySQL, MongoDB, Supabase Cloud, Git/GitHub, Vercel, Postman, Swagger",
      },
      {
        cat: "WordPress & CMS",
        items:
          "Cấu trúc WordPress CMS, Elementor (kéo thả giao diện), Cài đặt Theme/Plugin, Gutenberg, Quản trị nội dung & Đăng bài",
      },
      {
        cat: "SEO & Web Hosting",
        items:
          "On-page SEO (H1-H6, Meta Tags), Tối ưu tốc độ tải trang (PageSpeed), cPanel Hosting, Cấu hình DNS/Cloudflare, SSL, Sao lưu dữ liệu",
      },
      {
        cat: "Công cụ hỗ trợ & Kỹ năng mềm",
        items:
          "Canva (chỉnh sửa banner cơ bản), Cẩn thận, Trách nhiệm cao, Tự học nhanh, Phối hợp tốt với nhóm",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_IT_Website_WordPress_BanViet",
    coverLetters: {
      tech: `[Tiêu đề Email: Ứng tuyển vị trí Nhân Viên IT Website WordPress – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Hệ thống Giáo dục Bản Việt,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được ứng tuyển vào vị trí **Nhân Viên IT Website WordPress** tại cơ sở 386/52 Bis Lê Văn Sỹ, Phường Nhiêu Lộc, TP. Hồ Chí Minh.

Với nền tảng đào tạo chính quy về CNTT cùng kinh nghiệm thực tế phát triển web, tôi tin rằng mình có thể nhanh chóng tiếp nhận và đảm nhiệm tốt công việc:

- **Nền tảng Lập trình Web vững chắc**: Tôi đã trực tiếp xây dựng giao diện responsive, RESTful API và cơ sở dữ liệu cho nhiều dự án thực tế sử dụng HTML5, CSS3, JavaScript, Next.js, Node.js. Nền tảng này giúp tôi hiểu sâu cấu trúc web — từ đó có thể xử lý tốt các vấn đề về giao diện, tùy chỉnh CSS/JS cho WordPress khi cần.
- **Kinh nghiệm Quản trị Dữ liệu & Hệ thống**: Dự án Student Management System tôi tự phát triển full-stack gồm bảng điều khiển quản trị, biểu mẫu nhập liệu, truy vấn và tối ưu CSDL — kinh nghiệm này hoàn toàn có thể áp dụng cho việc quản lý nội dung website giáo dục.
- **Đang chủ động tự học WordPress & SEO**: Hiện tôi đang tìm hiểu WordPress CMS, Elementor, SEO Onpage cơ bản (thẻ H1-H6, meta tags) và cấu hình hosting. Tôi biết JD ghi nhận sẽ được đào tạo thêm, và tôi cam kết chủ động học hỏi nhanh nhất có thể.
- **Tính cẩn thận & Tinh thần cầu tiến**: Tôi cẩn thận trong từng chi tiết, biết sử dụng Canva để chỉnh sửa banner cơ bản và sẵn sàng phối hợp với bộ phận Marketing.

Là một người có trách nhiệm cao và mong muốn phát triển lâu dài trong môi trường giáo dục, tôi tin mình sẽ nhanh chóng hòa nhập và đóng góp hiệu quả cho hệ thống website của trường.

Tôi xin gửi kèm CV chi tiết và rất mong có cơ hội được tham gia phỏng vấn trực tiếp cùng Quý đơn vị.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861
Email: tdinhanh.it@gmail.com
GitHub: https://github.com/dinhanhhhh`,

      short: `[Tiêu đề Email: Ứng tuyển Nhân Viên IT Website WordPress – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Hệ thống Giáo dục Bản Việt,

Tôi tên là Trương Đình Anh, tốt nghiệp Khoa học Máy tính từ Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí **Nhân Viên IT Website WordPress** tại cơ sở Lê Văn Sỹ.

Điểm mạnh tôi mang đến:
- **Nền tảng lập trình Web thực tế**: Có kinh nghiệm xây dựng giao diện responsive, API và CSDL bằng HTML5, CSS3, JS, Next.js — giúp tôi nắm bắt nhanh cấu trúc WordPress và tự chỉnh sửa code khi cần.
- **Quản trị dữ liệu**: Đã phát triển dự án Student Management System full-stack, hiểu quy trình quản lý biểu mẫu, truy vấn và sao lưu CSDL.
- **Đang tự học WordPress, SEO & Hosting**: Chủ động tìm hiểu Elementor, SEO Onpage, cPanel và sẵn sàng được đào tạo thêm.
- **Hỗ trợ Marketing**: Biết sử dụng Canva chỉnh sửa banner cơ bản, cẩn thận trong từng chi tiết.

Rất mong có cơ hội được trao đổi trực tiếp cùng Anh/Chị trong buổi phỏng vấn.

Trân trọng cảm ơn Anh/Chị!
Trương Đình Anh - SĐT: 0923202861`,

      warm: `[Tiêu đề Email: Đồng hành cùng Hệ thống Giáo dục Bản Việt – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Hệ thống Giáo dục Bản Việt,

Chào Anh/Chị, tôi là Trương Đình Anh, cử nhân Khoa học Máy tính tại Đại học Mở TP.HCM. Khi tìm hiểu về vị trí Nhân Viên IT Website WordPress tại chi nhánh Lê Văn Sỹ của Bản Việt, tôi rất ấn tượng với môi trường giáo dục và mong muốn được ứng dụng kiến thức kỹ thuật của mình để chăm sóc hệ thống website của trường.

Với nền tảng Khoa học Máy tính, tôi đã có kinh nghiệm thực tế xây dựng web responsive, API và quản trị CSDL. Hiện tôi đang chủ động tự học WordPress, Elementor và SEO Onpage để sẵn sàng đảm nhận công việc quản trị website. Tính cách cẩn thận, chỉn chu trong từng chi tiết và tinh thần tự học nhanh sẽ giúp tôi hỗ trợ phòng Marketing hiệu quả ngay khi nhận việc.

Chúc Hệ thống Giáo dục Bản Việt ngày càng phát triển. Rất hy vọng sớm có dịp gặp gỡ và trao đổi trực tiếp cùng Anh/Chị!

Thân ái,
Trương Đình Anh
SĐT: 0923202861`
    }
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "WordPress Website IT Specialist",
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
      {
        icon: "address",
        text: "Thu Duc, Ho Chi Minh City",
      },
    ],
    sections: {
      objective: "CAREER OBJECTIVE",
      education: "EDUCATION",
      experience: "WORK EXPERIENCE",
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Computer Science graduate with solid Web development skills (HTML5, CSS3, JavaScript, React, Next.js) and hands-on experience building responsive UIs, APIs, and database systems. Have foundational knowledge of WordPress, Elementor, On-page SEO, hosting configuration, and Canva. Eager to grow long-term with Ban Viet Education System and quickly master web operations.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analytics and online information management platform.",
        tasks: [
          "Developed responsive web interfaces optimized for seamless display across Mobile, Tablet, and PC.",
          "Built 15+ RESTful API endpoints handling data retrieval and client-server synchronization.",
          "Designed relational schemas on Supabase / PostgreSQL, optimizing SQL query performance.",
          "Conducted API testing with Postman and configured automated application deployment to Vercel.",
        ],
        tech: "HTML5, CSS3, JavaScript, Next.js, PostgreSQL, Supabase, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Academic information and student management system with an intuitive administrative dashboard.",
        github: "https://github.com/dinhanhhhh/student-management-BE",
        tasks: [
          "Engineered an intuitive Admin Dashboard supporting comprehensive CRUD operations for student profiles and course management.",
          "Designed 100% responsive layouts, cleanly displaying statistical charts and structured data entry forms on multiple viewport sizes.",
          "Integrated Swagger UI for clear API documentation, accelerating functional testing and seamless system handoffs.",
          "Optimized server response latency and page loading performance, handling all client data states (Loading, Empty, Error).",
        ],
        tech: "Next.js, Node.js, Express, MongoDB, HTML5, CSS3, Tailwind CSS, Swagger, Git",
      },
    ],
    skills: [
      {
        cat: "Web Development",
        items:
          "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design (Mobile / Tablet / PC), RESTful API, Node.js, Express",
      },
      {
        cat: "Databases & Deployment",
        items:
          "PostgreSQL, MySQL, MongoDB, Supabase Cloud, Git/GitHub, Vercel, Postman, Swagger",
      },
      {
        cat: "WordPress & CMS",
        items:
          "WordPress CMS Structure, Elementor (Drag & Drop Builder), Theme/Plugin Setup, Gutenberg, Content Management & Publishing",
      },
      {
        cat: "SEO & Web Hosting",
        items:
          "Basic On-page SEO (H1-H6, Meta Tags), Page Speed Optimization, cPanel Hosting, DNS/Cloudflare, SSL, Database Backup",
      },
      {
        cat: "Tools & Soft Skills",
        items:
          "Canva (Basic banner editing), Detail-oriented, Highly responsible, Fast self-learner, Effective team collaboration",
      },
    ],
    btnText: "Print / Download PDF",
    docTitle: "CV_TruongDinhAnh_IT_Website_WordPress_BanViet_EN",
    coverLetters: {
      tech: `[Subject: Job Application: WordPress Website IT Specialist – Truong Dinh Anh]

Dear Hiring Team at Ban Viet Education System,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the **WordPress Website IT Specialist** position at your 386/52 Bis Le Van Sy, Nhieu Loc Ward campus.

With a formal Computer Science background and hands-on experience building web applications, I believe I can quickly adapt and contribute effectively:

- **Solid Web Development Foundation**: I have direct experience building responsive interfaces, RESTful APIs, and database systems using HTML5, CSS3, JavaScript, Next.js, and Node.js. This deep understanding of web architecture enables me to troubleshoot UI issues and customize CSS/JS in WordPress environments.
- **Data & System Management Experience**: I personally developed a full-stack Student Management System with admin dashboard, form handling, and database optimization — skills directly applicable to managing educational website content.
- **Actively Self-learning WordPress & SEO**: I am currently studying WordPress CMS, Elementor, basic On-page SEO (H1-H6 tags, meta tags), and hosting configuration. I am fully committed to learning quickly and appreciate that the role offers additional training.
- **Detail-oriented & Proactive**: I use Canva for basic banner editing and am meticulous in my work, ready to collaborate with Marketing teams.

With high responsibility and a desire for long-term growth in education, I am confident I can quickly integrate and contribute to the school's web ecosystem.

Please find my CV attached. I look forward to discussing my qualifications in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0923202861
Email: tdinhanh.it@gmail.com
GitHub: https://github.com/dinhanhhhh`,

      short: `[Subject: Job Application: WordPress Website IT Specialist – Truong Dinh Anh]

Dear Hiring Team at Ban Viet Education System,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the **WordPress Website IT Specialist** role at your Le Van Sy office.

Key strengths I bring:
- **Proven Web Development Skills**: Hands-on experience building responsive UIs, APIs, and databases with HTML5, CSS3, JS, Next.js — enabling me to quickly grasp WordPress structures and customize code when needed.
- **Database & System Management**: Built a full-stack Student Management System, experienced in form handling, data queries, and database backup workflows.
- **Actively Learning WordPress, SEO & Hosting**: Currently studying Elementor, On-page SEO, and cPanel setup — eager to receive additional training.
- **Marketing Support**: Can use Canva for basic banner editing, detail-oriented and team-ready.

I welcome the opportunity to discuss my qualifications in an interview.

Best regards,
Truong Dinh Anh - Phone: 0923202861`,

      warm: `[Subject: Contributing to Ban Viet Education System – Truong Dinh Anh]

Dear Hiring Team at Ban Viet Education System,

I am Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong enthusiasm for the WordPress Website IT Specialist position at your Le Van Sy campus.

With a solid computer science background, I have hands-on experience building responsive web applications, APIs, and database systems. I am currently self-learning WordPress, Elementor, and On-page SEO to prepare for website administration. My meticulous attention to detail, fast learning ability, and basic Canva skills will help me support your Marketing team effectively from day one.

Wishing Ban Viet Education System continued growth and success!

Warm regards,
Truong Dinh Anh
Phone: 0923202861`
    }
  }
};

if (typeof global !== "undefined") {
  global.cvData = cvData;
}
if (typeof module !== "undefined") {
  module.exports = cvData;
}
