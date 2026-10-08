// =========================================================================
// CREDOSIS CV DATA - FRONTEND ENGINEER INTERN (OVERRIDE FORMAT)
// Digital Solutions, AI Automation & Custom SaaS/CRM Platforms
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  meta: {
    company: "Credosis",
    position: "Frontend Engineer Intern",
    recipient: "Hiring Team at Credosis",
    email: "hello@credosis.com",
    contact: "hello@credosis.com",
    jobUrl: "mailto:hello@credosis.com?subject=Application%20for%20Frontend%20Engineer%20Intern%20-%20Truong%20Dinh%20Anh",
    notes: "Credosis: Digital solutions, AI automation, custom web/SaaS platforms & CRM. Part-Time Remote (~20h/week). Stack: HTML, CSS, JavaScript (ES6+), React, Next.js, Tailwind CSS, RESTful APIs, Git/GitHub. Deadline: 20/10/2026.",
    pitchHighlights: "Chuyên môn Frontend React/Next.js/Tailwind CSS, tư duy hệ thống AI-First, kinh nghiệm thực chiến tiêu thụ RESTful APIs và xây dựng SaaS/CRM dashboards."
  },
  vi: {
    title: "Frontend Engineer Intern",
    objective:
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Chuyên môn phát triển giao diện responsive với React, Next.js, TypeScript và Tailwind CSS, thành thạo tích hợp RESTful APIs và quản lý client state. Từng tối ưu hiệu năng UI và xây dựng hệ thống tự động hóa AI Agent trên Cloudflare Workers. Mong muốn đóng góp vào các dự án SaaS và nền tảng CRM chất lượng cao tại Credosis.",
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa luồng xử lý thông tin nội bộ.",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers phục vụ truy xuất dữ liệu thời gian thực.",
          "Phát triển giao diện dashboard dữ liệu responsive với Next.js và Tailwind CSS, đảm bảo hiển thị mượt mà trên đa thiết bị.",
          "Tích hợp luồng xác thực Google OAuth (NextAuth) bảo vệ các endpoints nhạy cảm và kiểm thử API toàn diện bằng Postman.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên hạ tầng Cloud Vercel, quản lý mã nguồn chặt chẽ qua Git.",
        ],
        tech: "Next.js (App Router), React, Tailwind CSS, PostgreSQL, Supabase, RESTful APIs, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA AI AGENT",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng SaaS quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng giao diện web SPA chuẩn responsive với CSS3 hiện đại, tối ưu trải nghiệm và thời gian tải trang dưới 80ms.",
          "Tích hợp kiến trúc Serverless trên Cloudflare Workers kết nối Telegram Bot Webhook làm kênh tương tác hai chiều.",
          "Kết nối các LLM APIs (Gemini, OpenAI) xây dựng pipeline phân tích dữ liệu và tự động sinh mã nguồn chất lượng cao.",
          "Thiết lập quy trình CI/CD tự động kiểm thử tính toàn vẹn dữ liệu và triển khai tự động qua GitHub Actions.",
        ],
        tech: "React, Next.js, Cloudflare Workers, LLM APIs, Telegram Bot API, Tailwind CSS, GitHub Actions, CI/CD",
      },
      {
        name: "NỀN TẢNG TUYỂN DỤNG SAAS (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống SaaS tuyển dụng full-stack hỗ trợ đăng tin, quản lý hồ sơ và quy trình ứng tuyển thời gian thực.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển giao diện người dùng responsive chuẩn pixel-perfect trên Mobile, Tablet và Desktop bằng Next.js và Tailwind CSS.",
          "Tiêu thụ và tích hợp hệ thống RESTful APIs backend, xử lý đồng bộ hóa client state và tối ưu rendering.",
          "Hiện thực hóa đầy đủ các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) nâng cao trải nghiệm người dùng.",
          "Thiết lập luồng xác thực bảo mật JWT với HttpOnly Cookies, kiểm soát phân quyền truy cập người dùng (RBAC).",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Node.js, Express, RESTful APIs, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design, State Management",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful APIs Integration, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, MySQL, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub Actions (CI/CD), Docker, Postman, Vercel, Cloudflare Workers",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật, giao tiếp cơ bản",
      },
    ],
    emailTemplates: {
      short: `[Tiêu đề Email: Application for Frontend Engineer Intern - Trương Đình Anh]

Dear Credosis Hiring Team,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí Frontend Engineer Intern (Part-Time / Remote) tại Credosis.

Với định hướng phát triển chuyên sâu về Frontend và các nền tảng SaaS/CRM thông minh, tôi tin rằng các kỹ năng và dự án thực tế của mình rất phù hợp với nhu cầu của Quý công ty:
1. Nền tảng Frontend vững chắc: Thành thạo React, Next.js, TypeScript, JavaScript (ES6+) và Tailwind CSS để xây dựng giao diện responsive, pixel-perfect và tối ưu trải nghiệm người dùng.
2. Tiêu thụ RESTful APIs & State Management: Có kinh nghiệm kết nối frontend với backend services, xử lý client state mượt mà và quản lý các trạng thái dữ liệu (Loading, Empty, Error).
3. Đam mê AI Automation & SaaS Systems: Đã tự tay kiến tạo nền tảng AI Agent Automation (Serverless Cloudflare Workers + Telegram Bot + LLM APIs) và hệ thống SaaS Job Portal.

Demo dự án & Mã nguồn:
- CV Editor & AI Agent Platform: https://github.com/dinhanhhhh/cv-editor
- Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL
- GitHub Profile: https://github.com/dinhanhhhh

Tôi rất mong có cơ hội trao đổi chi tiết hơn về cách tôi có thể đóng góp giá trị cho các sản phẩm của Credosis.

Trân trọng,
Trương Đình Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      full: `[Tiêu đề Email: Application for Frontend Engineer Intern - Trương Đình Anh]

Dear Credosis Hiring Team,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi rất hào hứng khi biết Credosis đang tìm kiếm vị trí Frontend Engineer Intern làm việc Remote / Part-Time để cùng xây dựng các giải pháp SaaS, CRM và phần mềm thông minh.

Lý do tôi tin mình là ứng viên phù hợp:
- Thế mạnh React & Next.js: Sử dụng thành thạo Next.js 15, React, TypeScript, HTML5/CSS3 và Tailwind CSS trong các dự án thực tế, tuân thủ tiêu chuẩn clean code và accessibility.
- Tích hợp RESTful APIs: Kinh nghiệm thực chiến kết nối các dịch vụ backend, xử lý bất đồng bộ, xác thực người dùng (JWT/OAuth) và kiểm thử API bằng Postman.
- Tư duy AI-First & Hệ thống: Từng thực tập tại Tami Technology và chủ động xây dựng nền tảng tự động hóa AI Agent trên Cloudflare Workers. Tôi sẵn sàng dành 20+ giờ/tuần với tinh thần chủ động, kỷ luật cao trong môi trường làm việc từ xa.

Dự án tiêu biểu kèm Demo:
1. CV Editor & AI Agent Automation: https://github.com/dinhanhhhh/cv-editor
2. Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL

Kính gửi kèm theo hồ sơ CV của tôi để Quý công ty xem xét. Tôi rất mong có cơ hội phỏng vấn trực tuyến cùng đội ngũ kỹ thuật của Credosis.

Trân trọng,
Trương Đình Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`
    },
    coverLetters: {
      tech: `[Tiêu đề Email: Application for Frontend Engineer Intern - Trương Đình Anh]

Dear Credosis Hiring Team,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi rất hào hứng khi biết Credosis đang tìm kiếm vị trí Frontend Engineer Intern làm việc Remote / Part-Time để cùng xây dựng các giải pháp SaaS, CRM và phần mềm thông minh.

Lý do tôi tin mình là ứng viên phù hợp:
- Thế mạnh React & Next.js: Sử dụng thành thạo Next.js 15, React, TypeScript, HTML5/CSS3 và Tailwind CSS trong các dự án thực tế, tuân thủ tiêu chuẩn clean code và accessibility.
- Tích hợp RESTful APIs: Kinh nghiệm thực chiến kết nối các dịch vụ backend, xử lý bất đồng bộ, xác thực người dùng (JWT/OAuth) và kiểm thử API bằng Postman.
- Tư duy AI-First & Hệ thống: Từng thực tập tại Tami Technology và chủ động xây dựng nền tảng tự động hóa AI Agent trên Cloudflare Workers. Tôi sẵn sàng dành 20+ giờ/tuần với tinh thần chủ động, kỷ luật cao trong môi trường làm việc từ xa.

Dự án tiêu biểu kèm Demo:
1. CV Editor & AI Agent Automation: https://github.com/dinhanhhhh/cv-editor
2. Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL

Kính gửi kèm theo hồ sơ CV của tôi để Quý công ty xem xét. Tôi rất mong có cơ hội phỏng vấn trực tuyến cùng đội ngũ kỹ thuật của Credosis.

Trân trọng,
Trương Đình Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      short: `[Tiêu đề Email: Application for Frontend Engineer Intern - Trương Đình Anh]

Dear Credosis Hiring Team,

Tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí Frontend Engineer Intern (Part-Time / Remote) tại Credosis.

Với định hướng phát triển chuyên sâu về Frontend và các nền tảng SaaS/CRM thông minh, tôi tin rằng các kỹ năng và dự án thực tế của mình rất phù hợp với nhu cầu của Quý công ty:
1. Nền tảng Frontend vững chắc: Thành thạo React, Next.js, TypeScript, JavaScript (ES6+) và Tailwind CSS để xây dựng giao diện responsive, pixel-perfect và tối ưu trải nghiệm người dùng.
2. Tiêu thụ RESTful APIs & State Management: Có kinh nghiệm kết nối frontend với backend services, xử lý client state mượt mà và quản lý các trạng thái dữ liệu (Loading, Empty, Error).
3. Đam mê AI Automation & SaaS Systems: Đã tự tay kiến tạo nền tảng AI Agent Automation (Serverless Cloudflare Workers + Telegram Bot + LLM APIs) và hệ thống SaaS Job Portal.

Demo dự án & Mã nguồn:
- CV Editor & AI Agent Platform: https://github.com/dinhanhhhh/cv-editor
- Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL
- GitHub Profile: https://github.com/dinhanhhhh

Tôi rất mong có cơ hội trao đổi chi tiết hơn về cách tôi có thể đóng góp giá trị cho các sản phẩm của Credosis.

Trân trọng,
Trương Đình Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      warm: `[Tiêu đề Email: Đóng góp giải pháp Frontend & AI Automation tại Credosis – Trương Đình Anh]

Dear Credosis Hiring Team,

Chào Ban Tuyển dụng Credosis, tôi tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính từ Đại học Mở TP.HCM. Tôi đặc biệt ấn tượng với tầm nhìn của Credosis trong việc kết hợp kỹ thuật phần mềm thông minh, AI automation và nền tảng SaaS/CRM để giải quyết bài toán vận hành cho doanh nghiệp.

Là một lập trình viên trẻ đam mê xây dựng giao diện và trải nghiệm số mượt mà, tôi luôn chủ động tìm tòi và ứng dụng công nghệ hiện đại vào sản phẩm thực tế:
- Tự phát triển nền tảng tự động hóa AI Agent trên Cloudflare Workers và xây dựng Job Portal SaaS với Next.js 15, TypeScript và Tailwind CSS.
- Tác phong kỷ luật cao, quen thuộc với quy trình làm việc Remote độc lập và giao tiếp cởi mở trong đội ngũ kỹ thuật.
- Rất mong muốn được đồng hành lâu dài cùng Credosis để học hỏi và đóng góp trực tiếp vào các sản phẩm phần mềm chất lượng cao của công ty.

Kính chúc Quý công ty phát triển vượt bậc và rất mong sớm có cơ hội gặp mặt phỏng vấn trực tuyến!

Trân trọng,
Trương Đình Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`
    },
    interview: {
      notes: "Ôn tập phỏng vấn Frontend Engineer Intern tại Credosis: Tập trung giải thích kiến trúc Component trong React, cơ chế Server Components vs Client Components trong Next.js App Router, kỹ thuật tối ưu hóa re-render, Responsive Design với Tailwind CSS, xử lý HTTP requests / REST APIs và ứng dụng AI tools vào quy trình lập trình.",
      questions: [
        {
          q: "Bạn tổ chức cấu trúc component và quản lý state trong React / Next.js như thế nào?",
          a: "Tách biệt rõ Presentational Components và Container Components. Sử dụng React Hooks (useState, useReducer, custom hooks) cho local state và Zustand/Context API cho global state khi cần. Với Next.js App Router, ưu tiên Server Components để fetch dữ liệu và chỉ dùng 'use client' cho các phần tử có tương tác người dùng."
        },
        {
          q: "Làm thế nào để đảm bảo giao diện responsive pixel-perfect và tối ưu hiệu năng tải trang?",
          a: "Áp dụng phương pháp Mobile-First với Tailwind CSS breakpoints (sm, md, lg, xl). Tối ưu hình ảnh (Next/Image), lazy loading component nặng, tránh layout shift (CLS), và xử lý tốt các trạng thái mạng (Loading/Skeleton, Error states)."
        },
        {
          q: "Bạn có kinh nghiệm gì về AI Automation và SaaS platforms?",
          a: "Tôi đã phát triển hệ thống AI Agent Automation sử dụng Cloudflare Workers và LLM APIs (Gemini/OpenAI), tự động hóa phân tích dữ liệu và sinh mã nguồn qua Telegram Webhooks. Đồng thời xây dựng SaaS Job Portal hỗ trợ đầy đủ quy trình tuyển dụng trực tuyến."
        }
      ]
    }
  },
  en: {
    title: "Frontend Engineer Intern",
    objective:
      "Computer Science graduate from Ho Chi Minh City Open University. Specialized in frontend development with React, Next.js, TypeScript, and Tailwind CSS, experienced in consuming RESTful APIs, state management, and web performance optimization. Background in architecting AI Agent automation platforms and SaaS dashboards. Eager to contribute to scalable SaaS and CRM solutions at Credosis.",
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analytics system and internal pipeline standardization.",
        tasks: [
          "Designed relational database schema and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Architected and optimized RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Developed responsive market data dashboards with Next.js and Tailwind CSS, ensuring high-fidelity rendering across devices.",
          "Integrated Google OAuth (NextAuth) authentication protecting sensitive endpoints and conducted API testing with Postman.",
          "Packaged and deployed production demo application on Cloud Vercel, maintaining structured Git workflows.",
        ],
        tech: "Next.js (App Router), React, Tailwind CSS, PostgreSQL, Supabase, RESTful APIs, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "AI AGENT AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "SaaS automation platform utilizing AI Agent architecture and serverless computing.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered a responsive SPA web interface with modern CSS3, optimizing load times to sub-80ms.",
          "Built serverless architecture on Cloudflare Workers using Telegram Bot Webhooks for bi-directional communication.",
          "Integrated LLM APIs (Gemini, OpenAI) to construct an automated data analysis and code generation pipeline.",
          "Established automated CI/CD workflows for data integrity validation and continuous deployment via GitHub Actions.",
        ],
        tech: "React, Next.js, Cloudflare Workers, LLM APIs, Telegram Bot API, Tailwind CSS, GitHub Actions, CI/CD",
      },
      {
        name: "JOB PORTAL SAAS PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Full-stack SaaS recruitment platform supporting job posting, applicant tracking, and user management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed pixel-perfect responsive user interfaces across mobile, tablet, and desktop using Next.js and Tailwind CSS.",
          "Consumed and integrated backend RESTful APIs, handling smooth client state synchronization and render optimization.",
          "Implemented comprehensive UI state handling (Loading/Skeleton, Empty, Error) for enhanced user experience.",
          "Configured secure JWT authentication with HttpOnly cookies and Role-Based Access Control (RBAC).",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Node.js, Express, RESTful APIs, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design, State Management",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful APIs Integration, JWT, RBAC",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB, MySQL, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub Actions (CI/CD), Docker, Postman, Vercel, Cloudflare Workers",
      },
      {
        cat: "English",
        items: "Technical documentation reading, conversational proficiency",
      },
    ],
    emailTemplates: {
      short: `[Subject: Application for Frontend Engineer Intern - Truong Dinh Anh]

Dear Credosis Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the Frontend Engineer Intern (Part-Time / Remote) position at Credosis.

With a strong foundation in modern frontend development and a keen passion for SaaS and AI-driven platforms, I believe my background aligns well with your team's goals:
1. Core Frontend Foundation: Proficient in React, Next.js, TypeScript, modern JavaScript (ES6+), and Tailwind CSS for building pixel-perfect, responsive interfaces.
2. RESTful API Consumption & State Management: Hands-on experience connecting frontend interfaces with server-side logic and managing state/loading states effectively.
3. AI Automation & SaaS Experience: Built an end-to-end AI Agent Automation platform (Cloudflare Workers + Telegram Bot + LLM APIs) and a recruitment SaaS platform.

Relevant Project Demos:
- CV Editor & AI Agent Platform: https://github.com/dinhanhhhh/cv-editor
- Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL
- GitHub Profile: https://github.com/dinhanhhhh

I would welcome the opportunity to discuss how I can contribute to Credosis's client and SaaS projects.

Sincerely,
Truong Dinh Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      full: `[Subject: Application for Frontend Engineer Intern - Truong Dinh Anh]

Dear Credosis Hiring Team,

My name is Truong Dinh Anh, and I recently graduated with a degree in Computer Science from Ho Chi Minh City Open University. I am excited to apply for the Frontend Engineer Intern position at Credosis.

Why I am a strong match for Credosis:
- Modern React & Next.js Stack: Experienced with Next.js 15, React, TypeScript, HTML5/CSS3, and Tailwind CSS. Committed to clean code, web accessibility, and performance best practices.
- RESTful Integration: Hands-on background consuming backend endpoints, managing asynchronous data flow, implementing auth flows (JWT/OAuth), and testing with Postman.
- AI-Driven Mindset & SaaS Focus: Completed practical internship experience at Tami Technology and independently engineered an AI Agent automation platform. Ready to commit 20 hours/week with high self-discipline in a 100% remote setting.

Featured Projects with Demos:
1. CV Editor & AI Automation Platform: https://github.com/dinhanhhhh/cv-editor
2. Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL

Thank you for your time and consideration. I look forward to hearing from you.

Best regards,
Truong Dinh Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`
    },
    coverLetters: {
      tech: `[Subject: Application for Frontend Engineer Intern - Truong Dinh Anh]

Dear Credosis Hiring Team,

My name is Truong Dinh Anh, and I recently graduated with a degree in Computer Science from Ho Chi Minh City Open University. I am excited to apply for the Frontend Engineer Intern position at Credosis.

Why I am a strong match for Credosis:
- Modern React & Next.js Stack: Experienced with Next.js 15, React, TypeScript, HTML5/CSS3, and Tailwind CSS. Committed to clean code, web accessibility, and performance best practices.
- RESTful Integration: Hands-on background consuming backend endpoints, managing asynchronous data flow, implementing auth flows (JWT/OAuth), and testing with Postman.
- AI-Driven Mindset & SaaS Focus: Completed practical internship experience at Tami Technology and independently engineered an AI Agent automation platform. Ready to commit 20 hours/week with high self-discipline in a 100% remote setting.

Featured Projects with Demos:
1. CV Editor & AI Automation Platform: https://github.com/dinhanhhhh/cv-editor
2. Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL

Thank you for your time and consideration. I look forward to hearing from you.

Best regards,
Truong Dinh Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      short: `[Subject: Application for Frontend Engineer Intern - Truong Dinh Anh]

Dear Credosis Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the Frontend Engineer Intern (Part-Time / Remote) position at Credosis.

With a strong foundation in modern frontend development and a keen passion for SaaS and AI-driven platforms, I believe my background aligns well with your team's goals:
1. Core Frontend Foundation: Proficient in React, Next.js, TypeScript, modern JavaScript (ES6+), and Tailwind CSS for building pixel-perfect, responsive interfaces.
2. RESTful API Consumption & State Management: Hands-on experience connecting frontend interfaces with server-side logic and managing state/loading states effectively.
3. AI Automation & SaaS Experience: Built an end-to-end AI Agent Automation platform (Cloudflare Workers + Telegram Bot + LLM APIs) and a recruitment SaaS platform.

Relevant Project Demos:
- CV Editor & AI Agent Platform: https://github.com/dinhanhhhh/cv-editor
- Job Portal SaaS Platform: https://github.com/dinhanhhhh/JOB-PORTAL
- GitHub Profile: https://github.com/dinhanhhhh

I would welcome the opportunity to discuss how I can contribute to Credosis's client and SaaS projects.

Sincerely,
Truong Dinh Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`,
      warm: `[Subject: Excited to Contribute to Intelligent Software & SaaS at Credosis - Truong Dinh Anh]

Dear Credosis Hiring Team,

Hello! My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am inspired by Credosis's mission in building scalable SaaS platforms, intelligent software, and AI automation for modern businesses.

As an enthusiastic engineer who loves frontend craftmanship and system thinking:
- I take pride in delivering pixel-perfect, responsive user interfaces with Next.js, React, TypeScript, and Tailwind CSS.
- I enjoy exploring AI automation architectures (Cloudflare Workers, LLM APIs) and applying them to accelerate delivery pipelines.
- I possess strong self-discipline in a remote environment, open communication habits, and a genuine desire to grow alongside a high-performing engineering team.

I would love the opportunity to speak with your team and discuss how my skills can bring value to Credosis's ongoing platforms.

Best regards,
Truong Dinh Anh
Email: tdinhanh.it@gmail.com | Phone: 0923202861`
    },
    interview: {
      notes: "Preparation notes for Credosis Frontend Engineer Intern: Focus on component architecture, state management patterns, Tailwind CSS utility usage, API consumption best practices, web performance, and AI-driven engineering workflows.",
      questions: [
        {
          q: "How do you handle state management and API integration in React/Next.js?",
          a: "I structure applications by separating UI logic from data fetching. I use React hooks and custom hooks for local state, and lightweight stores like Zustand when sharing global state. For API integration, I manage asynchronous lifecycle states (loading, error, empty) and ensure proper error boundaries."
        },
        {
          q: "What techniques do you use to ensure pixel-perfect and accessible responsive design?",
          a: "I utilize a mobile-first approach with Tailwind CSS breakpoints. I inspect UI consistency using browser developer tools across various viewport dimensions, leverage semantic HTML elements, and avoid layout shifts."
        },
        {
          q: "What experience do you have with intelligent software or AI automation?",
          a: "I engineered a serverless automation platform on Cloudflare Workers integrating LLM APIs (Gemini/OpenAI) with bidirectional Telegram Webhooks to automate code generation and validation pipelines."
        }
      ]
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
