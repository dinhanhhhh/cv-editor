// =========================================================================
// CV DATA - GINSTUDIO (FRESHER / JUNIOR AI & SOFTWARE DEVELOPER) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "projectDisplayLimit": 3,
    "title": "Fresher / Junior AI & Software Developer",
    "objective": "Cử nhân Khoa học Máy tính có nền tảng vững vàng về Network, Server, bảo mật thông tin và tư duy logic tốt về luồng dữ liệu (Data flow). Đam mê ứng dụng Generative AI, LLMs (Gemini, Claude, GPT) và Prompt Engineering để phát triển các AI tools, AI agents tự động hóa. Có kinh nghiệm xây dựng các luồng nghiệp vụ tương đương ERP (quản lý kho, giỏ hàng, tuyển dụng doanh nghiệp) và thiết lập hệ thống bảo mật đa lớp (JWT, RBAC). Mong muốn ứng tuyển vào GIN STUDIO để phát triển các giải pháp AI và tối ưu hóa vận hành hệ thống.",
    "experience": [
      {
        "name": "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        "tasks": [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu chứng khoán.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp tối ưu hóa các luồng truy xuất dữ liệu."
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
        "name": "JOB PORTAL PLATFORM (HỆ THỐNG TUYỂN DỤNG DOANH NGHIỆP)",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Hệ thống tuyển dụng trực tuyến toàn diện kết nối nhà tuyển dụng và ứng viên với độ bảo mật cao.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Thiết kế cơ chế bảo mật (Security): Triển khai xác thực JWT kết hợp phân quyền RBAC chặt chẽ cho Nhà tuyển dụng/Ứng viên, sử dụng HttpOnly Cookies và cơ chế Refresh Token.",
          "Tối ưu hóa Backend: Xây dựng 20+ RESTful APIs bằng Node.js/Express, tối ưu hóa truy vấn MongoDB và lập chỉ mục (index) giúp giảm phản hồi API xuống dưới 150ms."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      },
      {
        "name": "OMNICHANNEL E-COMMERCE PLATFORM (ERP-BASED FLOW)",
        "date": "08/2025 - 09/2025",
        "role": "Developer",
        "desc": "Hệ thống thương mại điện tử tích hợp các luồng dữ liệu cốt lõi tương đương ERP (Quản lý giỏ hàng, danh mục sản phẩm, tồn kho và thanh toán).",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Đồng bộ hóa luồng dữ liệu (Data flow sync): Thiết kế giải pháp đồng bộ hóa giỏ hàng đa tab thời gian thực bằng Redux Persist & BroadcastChannel API, ngăn ngừa lệch tồn kho ảo.",
          "Network & Server setup: Triển khai ứng dụng container hóa bằng Docker, cấu hình môi trường nhất quán từ local lên staging server."
        ],
        "tech": "React, Vite, Node.js, Express, MongoDB, Redux Persist, Docker, Tailwind CSS"
      }
    ],
    "skills": [
      {
        "cat": "AI & Tools",
        "items": "Gemini/OpenAI API, Prompt Engineering, Agentic AI, AI tools (Claude, GPT, Lark, Cursor, Copilot)"
      },
      {
        "cat": "Network, Server & Security",
        "items": "Docker (Containerization), Server Deployment (Vercel, Render), Network basics, JWT Security, RBAC (Role-Based Access Control)"
      },
      {
        "cat": "Nghiệp vụ & Data Flow",
        "items": "Tư duy logic luồng dữ liệu (Data flow), hiểu cơ bản về ERP (Quản lý kho, mua hàng, nhân sự/tuyển dụng), RESTful API Design"
      },
      {
        "cat": "Lập trình & Database",
        "items": "TypeScript (Strong), Node.js (Express), JavaScript (ES6+), React/Next.js, MongoDB (Mongoose), MySQL, PostgreSQL"
      },
      {
        "cat": "Kỹ năng mềm",
        "items": "Tự chủ giải quyết vấn đề, Giao tiếp hybrid/online tốt, Đọc hiểu tài liệu kỹ thuật tiếng Anh tốt"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_GinStudio_Fresher_AI",
    "coverLetter": "[Tiêu đề Email: Ứng tuyển Vị trí Fresher/Junior AI & Software Developer – Trương Đình Anh]\n\nKính gửi Ban Tuyển dụng GIN STUDIO,\n\nTôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được làm việc và đồng hành cùng GIN STUDIO ở vị trí Fresher/Junior AI & Software Developer.\n\nVới định hướng là một kỹ sư phần mềm năng động, tôi luôn nỗ lực tích hợp và ứng dụng Generative AI (LLMs như Gemini, Claude, GPT) vào thực tế công việc. Dự án CV-Editor của tôi là một minh chứng thực tế cho việc thiết kế AI Agent tự động hóa hoàn toàn: sử dụng Cloudflare Workers làm cổng kết nối Telegram Bot Bridge đến Gemini API để phân tích và tối ưu hóa nội dung CV theo mô tả công việc (JD), sau đó tự động commit lên GitHub thông qua GitHub API và kích hoạt GitHub Actions để xuất file PDF trong 40 giây.\n\nBên cạnh tư duy AI-first, tôi cũng tự trang bị nền tảng hệ thống vững vàng:\n- Nắm vững kiến thức Network, Server thông qua việc sử dụng Docker để container hóa ứng dụng, cấu hình môi trường nhất quán.\n- Hiểu biết tốt về luồng dữ liệu (Data flow) trong doanh nghiệp thông qua việc xây dựng hệ thống Job Portal (quản lý nhân sự) và E-Commerce Platform (luồng quản lý kho hàng và giỏ hàng, đồng bộ hóa đa tab bằng BroadcastChannel API).\n- Thực thi bảo mật chặt chẽ bằng cách triển khai xác thực JWT (HttpOnly Cookies, Refresh Token) kết hợp phân quyền RBAC.\n\nTriết lý làm việc tại GIN STUDIO - tập trung vào hiệu suất, sự linh hoạt hybrid và cơ hội làm việc sâu với các LLM, AI tools tốt nhất thị trường - cực kỳ tương thích với tinh thần chủ động sáng tạo của tôi. Tôi rất mong có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.\n\nTrân trọng,\nTrương Đình Anh\nSĐT: 0923202861\nGitHub: https://github.com/dinhanhhhh"
  },
  "en": {
    "projectDisplayLimit": 3,
    "title": "Fresher / Junior AI & Software Developer",
    "objective": "Computer Science graduate with a strong foundation in Network, Server administration, information security, and logical data flow design. Passionate about leveraging Generative AI, LLMs (Gemini, Claude, GPT), and Prompt Engineering to build automated AI tools and agents. Experienced in designing ERP-equivalent workflows (inventory control, cart status, enterprise hiring portals) and multi-layer security (JWT, RBAC). Eager to join GIN STUDIO to develop cutting-edge AI solutions and optimize systemic operations.",
    "experience": [
      {
        "name": "TAMI TECHNOLOGY CO., LTD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
        "tasks": [
          "Designed database schemas and successfully deployed PostgreSQL databases on the Supabase cloud infrastructure.",
          "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
          "Integrated Google OAuth authentication via NextAuth (Google Provider) for user sessions.",
          "Tested and optimized API performance using Postman, resolving critical bugs under mentor guidance."
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
        "name": "JOB PORTAL PLATFORM (ENTERPRISE RECRUITMENT SYSTEM)",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "A recruitment platform optimizing the application flow for candidates and streamlining workflows for enterprise recruiters.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Engineered system security (Security): Implemented JWT-based authentication combined with granular RBAC (Role-Based Access Control), utilizing HttpOnly Cookies and Refresh Token mechanism.",
          "Optimized backend performance: Built 20+ secure RESTful APIs using Node.js & Express, optimizing MongoDB query indexing to achieve sub-150ms response times."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      },
      {
        "name": "OMNICHANNEL E-COMMERCE PLATFORM (ERP-BASED FLOW)",
        "date": "08/2025 - 09/2025",
        "role": "Developer",
        "desc": "A multi-platform online shopping platform featuring product catalogs, inventory management, and an optimized checkout process.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Structured Data flow sync: Designed real-time multi-tab cart synchronization using Redux Persist and BroadcastChannel API to prevent virtual inventory discrepancies.",
          "Network & Server setup: Containerized application components using Docker, ensuring highly consistent local-to-staging development environments."
        ],
        "tech": "React, Vite, Node.js, Express, MongoDB, Redux Persist, Docker, Tailwind CSS"
      }
    ],
    "skills": [
      {
        "cat": "AI & Tools",
        "items": "Gemini/OpenAI API, Prompt Engineering, Agentic AI, AI tools (Claude, GPT, Lark, Cursor, Copilot)"
      },
      {
        "cat": "Network, Server & Security",
        "items": "Docker (Containerization), Server Deployment (Vercel, Render), Network basics, JWT Security, RBAC (Role-Based Access Control)"
      },
      {
        "cat": "Business & Data Flow",
        "items": "Data flow logical design, basic ERP understanding (inventory, purchasing, HR/Recruitment workflows), RESTful API Design"
      },
      {
        "cat": "Programming & Databases",
        "items": "TypeScript (Strong), Node.js (Express), JavaScript (ES6+), React/Next.js, MongoDB (Mongoose), MySQL, PostgreSQL"
      },
      {
        "cat": "Soft Skills",
        "items": "Self-driven problem solver, Remote team collaboration, Clear communication, Technical English"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_GinStudio_Fresher_AI"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
