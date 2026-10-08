// =========================================================================
// CV DATA - SLIMAI (AI DEVELOPER INTERN) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "projectDisplayLimit": 3,
    "title": "AI Developer Intern",
    "objective": "Cử nhân Khoa học Máy tính có nền tảng thuật toán vững chắc và tư duy AI-first. Đam mê ứng dụng LLMs, Prompt Engineering để phát triển nhanh sản phẩm thực tế. Có kinh nghiệm xây dựng Web App (Next.js), AI Tool/Automation (Cloudflare Workers, Gemini API, Telegram Bot) và Backend (Node.js, SQL/NoSQL). Làm việc kỷ luật, chủ động, nhạy bén UI/UX và mong muốn tạo ra các sản phẩm tinh gọn (micro-SaaS) mang lại giá trị và doanh thu thật.",
    "experience": [
      {
        "name": "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        "tasks": [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu chứng khoán.",
          "Ứng dụng AI tools (GitHub Copilot, ChatGPT) để tự động hóa viết unit test, kiểm thử hiệu năng API bằng Postman.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider) và deploy lên Vercel."
        ],
        "tech": "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    "projects": [
      {
        "name": "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT",
        "date": "01/2026 - Hiện tại",
        "role": "Developer",
        "desc": "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        "github": "https://github.com/dinhanhhhh/cv-editor",
        "tasks": [
          "Xây dựng giao diện web tương tác thời gian thực bằng Vanilla JS/HTML5/CSS3 với hiệu năng cao, zero-dependency.",
          "Thiết kế Serverless Backend trên Cloudflare Workers kết nối Telegram Bot Bridge và tích hợp LLM API (Gemini/OpenAI) để xử lý logic AI Agent tự động.",
          "Tự động hóa pipeline CI/CD với GitHub Actions: Nhận lệnh từ Telegram bot -> AI Agent phân tích và sinh mã nguồn -> tự động commit và trigger build sản phẩm trong 40 giây."
        ],
        "tech": "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD"
      },
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Nền tảng tuyển dụng thông minh với hệ thống backend tự động hóa và xử lý dữ liệu người dùng theo thời gian thực.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Thiết kế giao diện Next.js responsive với Tailwind CSS, tối ưu hóa hiển thị và xử lý chuẩn các trạng thái dữ liệu phía client để tăng tính nhất quán giao diện.",
          "Xây dựng 20+ RESTful API endpoints sử dụng Node.js/Express, tối ưu hóa truy vấn MongoDB giúp phản hồi API dưới 300ms.",
          "Áp dụng AI tools (GitHub Copilot, Gemini) vào quy trình viết code giúp tăng gấp đôi tốc độ phát triển dự án."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      }
    ],
    "skills": [
      {
        "cat": "AI & Automation",
        "items": "Gemini API, OpenAI API, Cloudflare Workers, Prompt Engineering, Agentic AI concepts, AI-assisted development (Cursor, Copilot)"
      },
      {
        "cat": "Lập trình & Core",
        "items": "Python, JavaScript, TypeScript, HTML5/CSS3 (Vanilla CSS, Tailwind CSS), Browser Extension basics"
      },
      {
        "cat": "Backend & Cloud",
        "items": "Node.js, Express.js, RESTful API, PostgreSQL, Supabase, MongoDB, JWT, RBAC, API design"
      },
      {
        "cat": "Công cụ & CI/CD",
        "items": "Git/GitHub, GitHub Actions, Postman, Swagger, Docker, Vercel, Render"
      },
      {
        "cat": "Ngoại ngữ",
        "items": "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt, viết báo cáo/mô tả kỹ thuật, giao tiếp công việc cơ bản"
      }
    ],
    "coverLetters": {
      "tech": "[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]\n\nKính gửi Bộ phận Tuyển dụng SlimAI,\n\nTôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào vị trí Thực tập sinh AI Developer tại SlimAI.\n\nTôi rất ấn tượng với định hướng của SlimAI trong việc dùng AI để tạo ra sản phẩm thực tế có người dùng và doanh thu thật. Bản thân tôi là một người theo đuổi tư duy AI-first, thường xuyên ứng dụng AI (Gemini, Claude, Copilot, Cursor) để gia tăng hiệu suất và tốc độ phát triển phần mềm.\n\nMột số điểm nổi bật về kinh nghiệm của tôi phù hợp với SlimAI:\n- **Đã tự build một AI tool & automation:** Hệ thống tự động hóa tối ưu nội dung CV (cv-editor) theo JD thông qua Telegram Bot chạy trên Cloudflare Workers kết nối Gemini API và GitHub API. Hệ thống tự động nhận JD -> AI phân tích nội dung -> commit lên repo -> GitHub Actions tự biên dịch PDF mới trong 40 giây.\n- **Kỹ năng lập trình tốt:** Thành thạo Python, JavaScript, TypeScript, Next.js và backend Node.js/Express. Có khả năng tự học rất nhanh và tư duy giải quyết vấn đề độc lập.\n- **Quan tâm sâu sắc đến UI/UX:** Luôn thiết kế giao diện tối ưu trải nghiệm người dùng, xử lý đầy đủ các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) thay vì chỉ biết viết code.\n\nTôi xin gửi kèm CV và mong muốn được trao đổi chi tiết hơn trong một buổi phỏng vấn trực tiếp để cùng SlimAI tạo ra các sản phẩm mang lại doanh thu thật.\n\nTrân trọng,\nTrương Đình Anh\nSĐT: 0923202861\nGitHub: https://github.com/dinhanhhhh",
      "short": "[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]\n\nKính gửi Bộ phận Tuyển dụng SlimAI,\n\nTôi viết thư này để ứng tuyển vào vị trí Thực tập sinh AI Developer tại SlimAI. Là một cử nhân Khoa học Máy tính có tư duy AI-first, tôi có thế mạnh trong việc ứng dụng AI để xây dựng sản phẩm nhanh và có tính ứng dụng cao.\n\nTôi đã tự tay xây dựng một AI & Automation tool thực tế: Hệ thống tự động hóa tối ưu nội dung CV theo mô tả công việc (JD) qua Telegram Bot sử dụng Cloudflare Workers, Gemini API và GitHub API. Ngoài ra, tôi có nền tảng tốt về Python, JavaScript, Next.js, Node.js và đặc biệt quan tâm tới UI/UX của sản phẩm.\n\nTôi rất mong muốn được đồng hành cùng SlimAI phát triển các sản phẩm phần mềm nhỏ nhưng đem lại doanh thu thật trên thị trường toàn cầu. Chi tiết dự án có trong CV đính kèm.\n\nTrân trọng,\nTrương Đình Anh\nSĐT: 0923202861\nGitHub: https://github.com/dinhanhhhh",
      "warm": "[Tiêu đề Email: Ứng tuyển Thực tập sinh AI Developer – Trương Đình Anh]\n\nKính gửi Bộ phận Tuyển dụng SlimAI,\n\nTôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi đã theo dõi SlimAI và cực kỳ thích triết lý của công ty: \"không chỉ học code, mà muốn dùng AI để tạo ra sản phẩm có người dùng và doanh thu thật\". Đây cũng chính là kim chỉ nam trong học tập và làm việc của tôi.\n\nLà một người chủ động và kỷ luật, tôi luôn cố gắng tối ưu hóa mọi thứ bằng AI. Dự án gần đây nhất của tôi chính là tự build một tool automation tối ưu CV tự động thông qua Telegram Bot và Gemini API. Tôi tin rằng với khả năng tự học nhanh, nền tảng lập trình vững cùng tư duy hướng đến trải nghiệm người dùng, tôi sẽ đóng góp tích cực cho các sản phẩm của SlimAI.\n\nCảm ơn anh/chị đã dành thời gian đọc thư. Tôi rất mong có cơ hội được phỏng vấn để chia sẻ nhiều hơn.\n\nTrân trọng,\nTrương Đình Anh\nSĐT: 0923202861\nGitHub: https://github.com/dinhanhhhh"
    },
    "docTitle": "CV_TruongDinhAnh_SlimAI_Intern"
  },
  "en": {
    "projectDisplayLimit": 3,
    "title": "AI Developer Intern",
    "objective": "Computer Science graduate with a strong algorithmic foundation and an AI-first mindset. Passionate about utilizing LLMs and Prompt Engineering to rapidly build real-world products. Experienced in Web Apps (Next.js), AI Tools & Automation (Cloudflare Workers, Gemini API, Telegram Bot), and Backend systems (Node.js, SQL/NoSQL). Disciplined, self-driven, UX-focused, and eager to build lean products (micro-SaaS) that generate real revenue.",
    "experience": [
      {
        "name": "TAMI TECHNOLOGY CO., LTD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        "tasks": [
          "Designed database schemas and successfully deployed PostgreSQL databases on Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Leveraged AI tools (GitHub Copilot, ChatGPT) to automate unit test writing and API performance testing with Postman.",
          "Integrated Google OAuth authentication via NextAuth and deployed the demo application smoothly onto Vercel."
        ],
        "tech": "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    "projects": [
      {
        "name": "AI AGENT & AUTOMATION PLATFORM",
        "date": "01/2026 - Present",
        "role": "Developer",
        "desc": "Enterprise automation and management platform leveraging AI Agent architecture and Serverless computing.",
        "github": "https://github.com/dinhanhhhh/cv-editor",
        "tasks": [
          "Engineered real-time interactive web interfaces using Vanilla JS/HTML5/CSS3 with high performance and zero external dependencies.",
          "Designed a Serverless Backend on Cloudflare Workers bridging Telegram Bot and LLM APIs (Gemini/OpenAI) to automate AI Agent workflows.",
          "Automated CI/CD pipelines with GitHub Actions: Processed commands via Telegram Bot -> AI Agent analyzed & generated code -> auto-committed & triggered production builds within 40s."
        ],
        "tech": "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD"
      },
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "An intelligent recruitment platform with automated data processing pipelines and real-time user data handling.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Built a responsive Next.js frontend using Tailwind CSS, systematically handling data states (Loading/Skeleton, Empty, Error) for a polished user experience.",
          "Developed 20+ secure RESTful API endpoints using Node.js and Express, optimizing MongoDB queries to reduce API response times to under 300ms.",
          "Applied AI tools (GitHub Copilot, Gemini) throughout the development process to accelerate coding and improve quality."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      }
    ],
    "skills": [
      {
        "cat": "AI & Automation",
        "items": "Gemini API, OpenAI API, Cloudflare Workers, Prompt Engineering, Agentic AI concepts, AI-assisted development (Cursor, Copilot)"
      },
      {
        "cat": "Programming & Core",
        "items": "Python, JavaScript, TypeScript, HTML5/CSS3 (Vanilla CSS, Tailwind CSS), Browser Extension basics"
      },
      {
        "cat": "Backend & Cloud",
        "items": "Node.js, Express.js, RESTful API, PostgreSQL, Supabase, MongoDB, JWT, RBAC, API design"
      },
      {
        "cat": "Tools & CI/CD",
        "items": "Git/GitHub, GitHub Actions, Postman, Swagger, Docker, Vercel, Render"
      },
      {
        "cat": "Languages",
        "items": "English: Good technical documentation reading comprehension, technical reporting, basic workplace communication"
      }
    ],
    "coverLetters": {
      "tech": "[Subject: Application for AI Developer Intern – Truong Dinh Anh]\n\nDear SlimAI Hiring Team,\n\nMy name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the AI Developer Intern position at SlimAI.\n\nI am highly inspired by SlimAI's goal of building real-world products with active users and revenue using AI. As an AI-first developer, I constantly leverage AI tools (Gemini, Claude, Copilot, Cursor) to accelerate software development and workflow automation.\n\nWhy I am a great fit for SlimAI:\n- **Built a working AI & Automation tool:** Developed an automated CV builder and optimization tool (cv-editor) via a Telegram Bot. It uses Cloudflare Workers, Gemini API, and GitHub API to analyze JDs, customize CV content, and trigger GitHub Actions to compile PDFs within 40 seconds.\n- **Strong technical foundation:** Proficient in Python, JavaScript, TypeScript, Next.js, and Node.js/Express. Capable of learning new stacks rapidly and solving problems independently.\n- **User-centric mindset:** Focus on rich UI/UX, micro-interactions, and handling edge cases/data states (Loading, Empty, Error) rather than just writing code.\n\nPlease find my attached CV. I look forward to discussing how I can contribute to SlimAI's growth and help build global micro-SaaS products.\n\nSincerely,\nTruong Dinh Anh\nPhone: 0923202861\nGitHub: https://github.com/dinhanhhhh",
      "short": "[Subject: Application for AI Developer Intern – Truong Dinh Anh]\n\nDear SlimAI Hiring Team,\n\nI am writing to apply for the AI Developer Intern position at SlimAI. As a Computer Science graduate with a strong AI-first mindset, I specialize in leveraging AI to rapidly build high-quality software.\n\nI have built a real AI automation tool: An AI-powered CV optimization system via Telegram Bot using Cloudflare Workers, Gemini API, and GitHub API. I also have solid experience with Python, JavaScript, Next.js, Node.js, and a keen eye for UI/UX design.\n\nI am eager to join SlimAI and help build global software products that generate real value and revenue. Please refer to my attached CV for more details.\n\nSincerely,\nTruong Dinh Anh\nPhone: 0923202861\nGitHub: https://github.com/dinhanhhhh",
      "warm": "[Subject: Application for AI Developer Intern – Truong Dinh Anh]\n\nDear SlimAI Hiring Team,\n\nMy name is Truong Dinh Anh, a recent Computer Science graduate from Ho Chi Minh City Open University. I have been following SlimAI and love your philosophy: \"not just learning to code, but using AI to create products with real users and revenue.\" This aligns perfectly with how I approach software development.\n\nI am self-driven, highly disciplined, and always look for ways to automate tasks using AI. My latest project is a self-built CV builder that automates tailoring via Telegram Bot and Gemini API. I believe my fast learning ability, solid coding skills, and user-centric mindset will be an asset to SlimAI.\n\nThank you for your time and consideration. I look forward to an opportunity to discuss my application further in an interview.\n\nSincerely,\nTruong Dinh Anh\nPhone: 0923202861\nGitHub: https://github.com/dinhanhhhh"
    },
    "docTitle": "CV_TruongDinhAnh_SlimAI_Intern"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
