// =========================================================================
// SLIMAI CV DATA - AI DEVELOPER INTERN
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 3,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "AI Developer Intern",
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
      "Cử nhân Khoa học Máy tính có nền tảng thuật toán vững chắc và tư duy AI-first. Đam mê ứng dụng LLMs, Prompt Engineering để phát triển nhanh sản phẩm thực tế. Có kinh nghiệm xây dựng Web App (Next.js), AI Tool/Automation (Cloudflare Workers, Gemini API, Telegram Bot) và Backend (Node.js, SQL/NoSQL). Làm việc kỷ luật, chủ động, nhạy bén UI/UX và mong muốn tạo ra các sản phẩm tinh gọn (micro-SaaS) mang lại giá trị và doanh thu thật.",
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
          "Ứng dụng AI tools (GitHub Copilot, ChatGPT) để tự động hóa viết unit test, kiểm thử hiệu năng API bằng Postman.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider) và deploy lên Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "AUTOMATED CV BUILDER & AI TAILOR (CV-EDITOR)",
        date: "05/2026 - Hiện tại",
        role: "Developer",
        desc: "Công cụ quản trị và tối ưu hóa CV tự động tích hợp AI giúp cá nhân hóa nội dung CV phù hợp với mô tả công việc (JD).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng Web App tĩnh bằng Vanilla HTML/CSS/JS thuần, tối ưu hóa tốc độ load, hỗ trợ live inline editing, quản lý local state và tính năng căn chỉnh trang A4 (Magic Fit).",
          "Thiết kế serverless backend sử dụng Cloudflare Workers làm cổng kết nối Telegram Bot Bridge đến Gemini API và GitHub API.",
          "Tự động hóa pipeline: Khi gửi JD qua Telegram Bot, AI phân tích và may đo nội dung -> tự động commit code lên GitHub -> kích hoạt GitHub Actions tự sinh file PDF mới trong 40 giây.",
          "Chăm chút kỹ lưỡng trải nghiệm người dùng (UX) với đầy đủ các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) và micro-animations.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng thông minh với hệ thống backend tự động hóa và xử lý dữ liệu người dùng theo thời gian thực.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế giao diện Next.js responsive với Tailwind CSS, tối ưu hóa hiển thị và xử lý chuẩn các trạng thái dữ liệu phía client để tăng tính nhất quán giao diện.",
          "Xây dựng 20+ RESTful API endpoints sử dụng Node.js/Express, tối ưu hóa truy vấn MongoDB giúp phản hồi API dưới 300ms.",
          "Áp dụng AI tools (GitHub Copilot, Gemini) vào quy trình viết code giúp tăng gấp đôi tốc độ phát triển dự án.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "AI & Automation",
        items:
          "Gemini API, OpenAI API, Cloudflare Workers, Prompt Engineering, Agentic AI concepts, AI-assisted development (Cursor, Copilot)",
      },
      {
        cat: "Lập trình & Core",
        items:
          "Python, JavaScript, TypeScript, HTML5/CSS3 (Vanilla CSS, Tailwind CSS), Browser Extension basics",
      },
      {
        cat: "Backend & Cloud",
        items:
          "Node.js, Express.js, RESTful API, PostgreSQL, Supabase, MongoDB, JWT, RBAC, API design",
      },
      {
        cat: "Công cụ & CI/CD",
        items: "Git/GitHub, GitHub Actions, Postman, Swagger, Docker, Vercel, Render",
      },
      {
        cat: "Ngoại ngữ",
        items:
          "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt, viết báo cáo/mô tả kỹ thuật, giao tiếp công việc cơ bản",
      },
    ],
    coverLetters: {
      tech: `[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng SlimAI,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào vị trí Thực tập sinh AI Developer tại SlimAI.

Tôi rất ấn tượng với định hướng của SlimAI trong việc dùng AI để tạo ra sản phẩm thực tế có người dùng và doanh thu thật. Bản thân tôi là một người theo đuổi tư duy AI-first, thường xuyên ứng dụng AI (Gemini, Claude, Copilot, Cursor) để gia tăng hiệu suất và tốc độ phát triển phần mềm.

Một số điểm nổi bật về kinh nghiệm của tôi phù hợp với SlimAI:
- **Đã tự build một AI tool & automation:** Hệ thống tự động hóa tối ưu nội dung CV (cv-editor) theo JD thông qua Telegram Bot chạy trên Cloudflare Workers kết nối Gemini API và GitHub API. Hệ thống tự động nhận JD -> AI phân tích/may đo nội dung -> commit lên repo -> GitHub Actions tự biên dịch PDF mới trong 40 giây.
- **Kỹ năng lập trình tốt:** Thành thạo Python, JavaScript, TypeScript, Next.js và backend Node.js/Express. Có khả năng tự học rất nhanh và tư duy giải quyết vấn đề độc lập.
- **Quan tâm sâu sắc đến UI/UX:** Luôn thiết kế giao diện tối ưu trải nghiệm người dùng, xử lý đầy đủ các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) thay vì chỉ biết viết code.

Tôi xin gửi kèm CV và mong muốn được trao đổi chi tiết hơn trong một buổi phỏng vấn trực tiếp để cùng SlimAI tạo ra các sản phẩm mang lại doanh thu thật.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
      short: `[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng SlimAI,

Tôi viết thư này để ứng tuyển vào vị trí Thực tập sinh AI Developer tại SlimAI. Là một cử nhân Khoa học Máy tính có tư duy AI-first, tôi có thế mạnh trong việc ứng dụng AI để xây dựng sản phẩm nhanh và có tính ứng dụng cao.

Tôi đã tự tay xây dựng một AI & Automation tool thực tế: Hệ thống tự động hóa may đo CV theo mô tả công việc (JD) qua Telegram Bot sử dụng Cloudflare Workers, Gemini API và GitHub API. Ngoài ra, tôi có nền tảng tốt về Python, JavaScript, Next.js, Node.js và đặc biệt quan tâm tới UI/UX của sản phẩm.

Tôi rất mong muốn được đồng hành cùng SlimAI phát triển các sản phẩm phần mềm nhỏ nhưng đem lại doanh thu thật trên thị trường toàn cầu. Chi tiết dự án có trong CV đính kèm.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
      warm: `[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng SlimAI,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi đã theo dõi SlimAI và cực kỳ thích triết lý của công ty: "không chỉ học code, mà muốn dùng AI để tạo ra sản phẩm có người dùng và doanh thu thật". Đây cũng chính là kim chỉ nam trong học tập và làm việc của tôi.

Là một người chủ động và kỷ luật, tôi luôn cố gắng tối ưu hóa mọi thứ bằng AI. Dự án gần đây nhất của tôi chính là tự build một tool automation tối ưu CV tự động thông qua Telegram Bot và Gemini API. Tôi tin rằng với khả năng tự học nhanh, nền tảng lập trình vững cùng tư duy hướng đến trải nghiệm người dùng, tôi sẽ đóng góp tích cực cho các sản phẩm của SlimAI.

Cảm ơn anh/chị đã dành thời gian đọc thư. Tôi rất mong có cơ hội được phỏng vấn để chia sẻ nhiều hơn.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_SlimAI_Intern",
  },

  en: {
    projectDisplayLimit: 3,
    name: "TRUONG DINH ANH",
    title: "AI Developer Intern",
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
      "Computer Science graduate with a strong algorithmic foundation and an AI-first mindset. Passionate about utilizing LLMs and Prompt Engineering to rapidly build real-world products. Experienced in Web Apps (Next.js), AI Tools & Automation (Cloudflare Workers, Gemini API, Telegram Bot), and Backend systems (Node.js, SQL/NoSQL). Disciplined, self-driven, UX-focused, and eager to build lean products (micro-SaaS) that generate real revenue.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        tasks: [
          "Designed database schemas and successfully deployed PostgreSQL databases on Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Leveraged AI tools (GitHub Copilot, ChatGPT) to automate unit test writing and API performance testing with Postman.",
          "Integrated Google OAuth authentication via NextAuth and deployed the demo application smoothly onto Vercel.",
        ],
        tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
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
          "Polished user experience (UX) with responsive design, data state handlers (Loading/Skeleton, Empty, Error), and smooth transitions.",
        ],
        tech: "Vanilla HTML5/CSS3/JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "An intelligent recruitment platform with automated data processing pipelines and real-time user data handling.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Built a responsive Next.js frontend using Tailwind CSS, systematically handling data states (Loading/Skeleton, Empty, Error) for a polished user experience.",
          "Developed 20+ secure RESTful API endpoints using Node.js and Express, optimizing MongoDB queries to reduce API response times to under 300ms.",
          "Applied AI tools (GitHub Copilot, Gemini) throughout the development process to accelerate coding and improve quality.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
    ],
    skills: [
      {
        cat: "AI & Automation",
        items:
          "Gemini API, OpenAI API, Cloudflare Workers, Prompt Engineering, Agentic AI concepts, AI-assisted development (Cursor, Copilot)",
      },
      {
        cat: "Programming & Core",
        items:
          "Python, JavaScript, TypeScript, HTML5/CSS3 (Vanilla CSS, Tailwind CSS), Browser Extension basics",
      },
      {
        cat: "Backend & Cloud",
        items:
          "Node.js, Express.js, RESTful API, PostgreSQL, Supabase, MongoDB, JWT, RBAC, API design",
      },
      {
        cat: "Tools & CI/CD",
        items: "Git/GitHub, GitHub Actions, Postman, Swagger, Docker, Vercel, Render",
      },
      {
        cat: "Languages",
        items:
          "English: Good technical documentation reading comprehension, technical reporting, basic workplace communication",
      },
    ],
    coverLetters: {
      tech: `[Subject: Application for AI Developer Intern – Truong Dinh Anh]

Dear SlimAI Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the AI Developer Intern position at SlimAI.

I am highly inspired by SlimAI's goal of building real-world products with active users and revenue using AI. As an AI-first developer, I constantly leverage AI tools (Gemini, Claude, Copilot, Cursor) to accelerate software development and workflow automation.

Why I am a great fit for SlimAI:
- **Built a working AI & Automation tool:** Developed an automated CV builder and optimization tool (cv-editor) via a Telegram Bot. It uses Cloudflare Workers, Gemini API, and GitHub API to analyze JDs, customize CV content, and trigger GitHub Actions to compile PDFs within 40 seconds.
- **Strong technical foundation:** Proficient in Python, JavaScript, TypeScript, Next.js, and Node.js/Express. Capable of learning new stacks rapidly and solving problems independently.
- **User-centric mindset:** Focus on rich UI/UX, micro-interactions, and handling edge cases/data states (Loading, Empty, Error) rather than just writing code.

Please find my attached CV. I look forward to discussing how I can contribute to SlimAI's growth and help build global micro-SaaS products.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
      short: `[Subject: Application for AI Developer Intern – Truong Dinh Anh]

Dear SlimAI Hiring Team,

I am writing to apply for the AI Developer Intern position at SlimAI. As a Computer Science graduate with a strong AI-first mindset, I specialize in leveraging AI to rapidly build high-quality software.

I have built a real AI automation tool: An AI-powered CV optimization system via Telegram Bot using Cloudflare Workers, Gemini API, and GitHub API. I also have solid experience with Python, JavaScript, Next.js, Node.js, and a keen eye for UI/UX design.

I am eager to join SlimAI and help build global software products that generate real value and revenue. Please refer to my attached CV for more details.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
      warm: `[Subject: Application for AI Developer Intern – Truong Dinh Anh]

Dear SlimAI Hiring Team,

My name is Truong Dinh Anh, a recent Computer Science graduate from Ho Chi Minh City Open University. I have been following SlimAI and love your philosophy: "not just learning to code, but using AI to create products with real users and revenue." This aligns perfectly with how I approach software development.

I am self-driven, highly disciplined, and always look for ways to automate tasks using AI. My latest project is a self-built CV builder that automates tailoring via Telegram Bot and Gemini API. I believe my fast learning ability, solid coding skills, and user-centric mindset will be an asset to SlimAI.

Thank you for your time and consideration. I look forward to an opportunity to discuss my application further in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_SlimAI_Intern",
  },
};
