// =========================================================================
// ALPHASPHERE CV DATA - FULLSTACK DEVELOPER TRAINEE
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 3,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Full-Stack Developer",
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
      skills: "KỸ NĂNG",
    },
    objective:
      "Cử nhân Khoa học Máy tính có nền tảng thuật toán và tư duy logic vững chắc. Có kinh nghiệm thực chiến phát triển các ứng dụng Web Fullstack bằng React.js, Next.js, Node.js/Express và TypeScript. Đam mê học hỏi qua trải nghiệm thực tế (learn by doing), luôn hướng tới viết code sạch, tối ưu hiệu suất hệ thống. Sẵn sàng cống hiến 100% thời gian và năng lượng để đồng hành cùng AlphaSphere phát triển các dự án thực tế.",
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
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng thông minh với hệ thống backend tự động hóa và xử lý dữ liệu người dùng theo thời gian thực.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế giao diện Next.js responsive với Tailwind CSS, tối ưu hóa hiển thị và xử lý các trạng thái dữ liệu phía client để tăng tính nhất quán giao diện.",
          "Xây dựng 20+ RESTful API endpoints sử dụng Node.js/Express, tối ưu hóa truy vấn MongoDB giúp phản hồi API dưới 300ms.",
          "Triển khai cơ chế xác thực JWT bảo mật qua HttpOnly cookies, phân quyền RBAC và luồng refresh token.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "AUTOMATED CV BUILDER & AI TAILOR (CV-EDITOR)",
        date: "05/2026 - Hiện tại",
        role: "Developer",
        desc: "Công cụ quản trị và tối ưu hóa CV tự động tích hợp AI giúp cá nhân hóa nội dung CV phù hợp với mô tả công việc (JD).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng Web App tĩnh bằng Vanilla HTML/CSS/JS thuần, hỗ trợ live inline editing, quản lý local state và tính năng căn chỉnh trang A4 (Magic Fit).",
          "Thiết kế serverless backend sử dụng Cloudflare Workers làm cổng kết nối Telegram Bot Bridge đến Gemini API và GitHub API.",
          "Tự động hóa pipeline: Khi gửi JD qua Telegram Bot, AI phân tích và may đo nội dung -> tự động commit code lên GitHub -> kích hoạt GitHub Actions tự sinh file PDF mới trong 40 giây.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack để quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc mô-đun với Node.js và Express cho các nghiệp vụ quản lý sinh viên.",
          "Tích hợp Swagger để tài liệu hóa API hỗ trợ đội ngũ kiểm thử phát hiện lỗi sớm.",
          "Phát triển dashboard quản trị responsive với các thao tác CRUD và xử lý dữ liệu theo thời gian thực.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, HTML5/CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, SQL, Tối ưu hóa truy vấn",
      },
      {
        cat: "Công cụ & CI/CD",
        items: "Git/GitHub, GitHub Actions, Docker, Postman, Swagger, Cloudflare Workers, Vercel",
      },
      {
        cat: "Ngoại ngữ",
        items: "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt, viết tài liệu và giao tiếp cơ bản tốt",
      },
    ],
    coverLetters: {
      tech: `[Tiêu đề Email: Ứng tuyển Chương trình Đào tạo The Next Alpha – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng AlphaSphere,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào chương trình đào tạo "The Next Alpha" của quý công ty.

Với định hướng trở thành một lập trình viên Fullstack thực chiến, tôi nhận thấy "The Next Alpha" là một bệ phóng hoàn hảo nhờ triết lý đào tạo "learn by doing" - làm việc trực tiếp trên các dự án production thực tế.

Những nền tảng và kinh nghiệm của tôi phù hợp với chương trình:
- **Nền tảng Fullstack tốt:** Thành thạo JavaScript, TypeScript, React.js, Next.js ở frontend và Node.js/Express, MongoDB/PostgreSQL ở backend.
- **Tư duy logic & giải quyết vấn đề:** Đã tự tay phát triển các hệ thống hoàn chỉnh từ đầu, như cổng thông tin Job Portal (Next.js 15 + MongoDB) hay ứng dụng tự động hóa CV-Editor sử dụng Cloudflare Workers & GitHub Actions.
- **Tinh thần học hỏi & kỷ luật:** Sẵn sàng cam kết 100% thời gian (Full-time) tham gia chương trình đào tạo kéo dài 10 tuần, học hỏi từ các Mentor và đóng góp hiệu quả vào các dự án sản xuất của AlphaSphere.

Tôi rất mong có cơ hội tham gia các vòng tuyển chọn tiếp theo để chứng minh năng lực của mình.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
    },
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_AlphaSphere_Fullstack",
  },

  en: {
    projectDisplayLimit: 3,
    name: "TRUONG DINH ANH",
    title: "Full-Stack Developer",
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
      "Computer Science graduate with a strong algorithmic foundation and solid logical thinking. Experienced in developing Fullstack Web applications using React.js, Next.js, Node.js/Express, and TypeScript. Passionate about learning by doing, writing clean code, and optimizing system performance. Fully committed to working full-time and contributing directly to AlphaSphere's production projects.",
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
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "An intelligent recruitment platform with automated data processing pipelines and real-time user data handling.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Built a responsive Next.js frontend using Tailwind CSS, systematically handling data states (Loading/Skeleton, Empty, Error) for a polished user experience.",
          "Developed 20+ secure RESTful API endpoints using Node.js and Express, optimizing MongoDB queries to reduce API response times to under 300ms.",
          "Implemented secure JWT authentication with HttpOnly cookies, RBAC, and token refresh flows.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "AUTOMATED CV BUILDER & AI TAILOR (CV-EDITOR)",
        date: "05/2026 - Present",
        role: "Developer",
        desc: "An automated CV management and optimization tool powered by AI to customize CV contents based on Job Descriptions (JD).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Developed a lightweight static web app using Vanilla HTML/CSS/JS supporting dynamic rendering via query params, live inline editing, and smart page-fitting (Magic Fit).",
          "Designed a serverless backend with Cloudflare Workers acting as a Telegram Bot Bridge to connect Gemini API with the GitHub API.",
          "Built an automated pipeline: User sends JD via Telegram -> Gemini AI refines CV content -> Bot commits code to GitHub repository -> GitHub Actions auto-builds updated PDF in 40s.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "An administrative system for managing student records and academic performance.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend with Node.js and Express for student management workflows.",
          "Integrated Swagger for API documentation, testing, and smoother handoff.",
          "Developed a responsive admin dashboard with CRUD flows and real-time data handling.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind, Swagger",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, HTML5/CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, SQL, Query Optimization",
      },
      {
        cat: "Tools & CI/CD",
        items: "Git/GitHub, GitHub Actions, Docker, Postman, Swagger, Cloudflare Workers, Vercel",
      },
      {
        cat: "Languages",
        items: "English: Good technical documentation reading comprehension, basic professional communication",
      },
    ],
    coverLetters: {
      tech: `[Subject: Application for The Next Alpha Training Program – Truong Dinh Anh]

Dear AlphaSphere Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for "The Next Alpha" training program.

Aspiring to become a practical Fullstack Developer, I believe this program is the perfect platform for me due to its "learn by doing" philosophy—allowing trainees to work directly on production-level projects.

Key highlights that make me a great fit:
- **Strong Fullstack Foundation:** Proficient in JavaScript, TypeScript, React.js/Next.js for frontend, and Node.js/Express, MongoDB/PostgreSQL for backend.
- **Logical Thinking & Problem-Solving:** Experienced in building fully functional systems from scratch, such as the Job Portal Platform and the CV-Editor automation tool using Cloudflare Workers.
- **Commitment & Discipline:** Ready to commit 100% of my time and energy full-time over the 10-week period to learn from your experienced leaders and contribute to AlphaSphere's projects.

I look forward to demonstrating my skills in the next rounds of the selection process.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
    },
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_AlphaSphere_Fullstack",
  },
};
