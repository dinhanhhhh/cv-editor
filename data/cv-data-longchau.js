// =========================================================================
// CV DATA - CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU (THỰC TẬP SINH KỸ THUẬT (AI-AGENTS TEAM)) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "meta": {
    "company": "Công ty Cổ phần Dược phẩm FPT Long Châu",
    "position": "Thực Tập Sinh Kỹ Thuật (AI-Agents Team)",
    "recipient": "Ban Tuyển dụng FPT Long Châu (AI-Agents Team)",
    "email": "",
    "contact": "",
    "jobUrl": "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
    "notes": "FPT Long Châu - AI-Agents Team. Hướng chuyên môn: Frontend Portal (React 18, TypeScript, Vite). Điểm cộng: Thành thạo Claude Code, Codex, gọi LLM API xây product chạy được, Docker, Git.",
    "pitchHighlights": "Thế mạnh React 18 / TypeScript / Vite, kinh nghiệm gọi LLM APIs xây product thật và sử dụng thành thạo AI Agent tools (Claude Code, Cursor) trong quy trình phát triển."
  },
  "vi": {
    "projectDisplayLimit": 2,
    "title": "Thực Tập Sinh Kỹ Thuật (AI-Agents Team)",
    "objective": "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Có thế mạnh phát triển giao diện React 18, TypeScript, Vite và ứng dụng AI Agent vào tối ưu quy trình phần mềm (Claude Code, LLM APIs). Từng tự tay xây dựng nền tảng tự động hóa tích hợp LLM API qua Cloudflare Workers và phát triển RESTful APIs tại Tami Technology. Sẵn sàng gia nhập AI-Agents Team tại FPT Long Châu để xây dựng cổng quản trị và vận hành agent.",
    "experience": [
      {
        "name": "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống phân tích dữ liệu thị trường tài chính và chuẩn hóa luồng xử lý thông tin nội bộ.",
        "tasks": [
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers để truy xuất dữ liệu thời gian thực.",
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Tích hợp luồng xác thực Google OAuth (NextAuth) bảo vệ các API endpoints phục vụ phân quyền truy cập.",
          "Kiểm thử chức năng API toàn diện bằng Postman và xử lý lỗi đồng bộ dữ liệu giữa Frontend và Backend.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên hạ tầng Cloud Vercel, quản lý mã nguồn chặt chẽ qua Git."
        ],
        "tech": "React, Next.js, PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Git, Vercel"
      }
    ],
    "projects": [
      {
        "name": "HỆ THỐNG TỰ ĐỘNG HÓA AI AGENT",
        "date": "01/2026 - Hiện tại",
        "role": "Developer",
        "desc": "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        "github": "https://github.com/dinhanhhhh/cv-editor",
        "tasks": [
          "Xây dựng giao diện web quản trị Responsive hỗ trợ xem trước dữ liệu và tương tác theo thời gian thực.",
          "Tích hợp LLM APIs (Gemini/OpenAI) xây dựng pipeline phân tích dữ liệu, tự động hóa trích xuất và tối ưu nội dung.",
          "Phát triển kịch bản kiểm thử tự động (Quality Gate Validator) xác thực tính hợp lệ của cấu trúc dữ liệu trước khi phát hành.",
          "Thiết lập luồng CI/CD với GitHub Actions tự động kích hoạt kiểm thử và deploy ứng dụng lên Production."
        ],
        "tech": "TypeScript, Cloudflare Workers, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD"
      },
      {
        "name": "DASHBOARD QUẢN TRỊ & XỬ LÝ DỮ LIỆU",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Giao diện quản trị portal hiển thị tiến độ luồng dữ liệu, hỗ trợ tìm kiếm, phân quyền và kiểm soát lỗi.",
        "github": "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        "tasks": [
          "Xây dựng giao diện Dashboard quản trị trực quan với React và TypeScript, tối ưu tốc độ phản hồi và chuyển trạng thái.",
          "Phát triển các component lọc đa tiêu chí, phân trang và màn hình hiển thị danh sách cảnh báo xác thực dữ liệu.",
          "Kết nối RESTful API backend, chuẩn hóa cấu trúc dữ liệu qua Swagger UI hỗ trợ debug và bàn giao kỹ thuật.",
          "Triển khai xác thực bảo mật JWT kết hợp phân quyền người dùng (RBAC) chặt chẽ cho từng cấp tài khoản quản trị."
        ],
        "tech": "React 18, TypeScript, Vite, Tailwind CSS, RESTful API, Swagger UI, JWT, RBAC, Git"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React 18, TypeScript, Vite, Next.js, JavaScript, Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, Python, RESTful API Design, JWT, RBAC"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, MySQL, Truy vấn SQL, 3NF, Indexing"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub, Docker, Postman, Swagger, Claude Code, LLM APIs, Vercel"
      },
      {
        "cat": "English",
        "items": "Đọc hiểu tài liệu kỹ thuật"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_FPT_LongChau_AI_Agents",
    "coverLetters": {
      "tech": "[Tiêu đề Email: Ứng tuyển Thực Tập Sinh Kỹ Thuật (AI-Agents Team) – Trương Đình Anh]\n\nKính gửi Ban Tuyển dụng FPT Long Châu (AI-Agents Team),\n\nTôi tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Qua thông tin tuyển dụng, tôi được biết FPT Long Châu đang mở đợt tuyển Thực Tập Sinh Kỹ Thuật cho AI-Agents Team. Với định hướng chuyên môn sâu về **Frontend Portal (React 18, TypeScript, Vite)** kết hợp kinh nghiệm thực chiến với các công cụ AI Agent, tôi viết thư này để bày tỏ nguyện vọng được đồng hành cùng team.\n\nNhững năng lực và kinh nghiệm thực tế tôi có thể đóng góp ngay cho dự án:\n\n1. Thế mạnh Frontend Portal: Thành thạo React 18, TypeScript, Vite và Tailwind CSS; có kinh nghiệm xây dựng các Dashboard quản trị trực quan, xử lý state luồng nghiệp vụ phức tạp, hiển thị lỗi validation và tối ưu trải nghiệm người dùng theo thời gian thực.\n2. Tư duy AI-First & Thực chiến AI Tools: Sử dụng thành thạo Claude Code, Codex, Cursor trong công việc lập trình hàng ngày; biết cách viết prompt chặt chẽ, chia nhỏ task và kiểm chứng kết quả mã nguồn độc lập.\n3. Kinh nghiệm gọi LLM API tạo sản phẩm chạy thật: Tự tay xây dựng hệ thống tự động hóa xử lý dữ liệu tích hợp LLM APIs (Gemini/OpenAI) qua Serverless Cloudflare Workers, có kịch bản Quality Gate kiểm tra tính toàn vẹn của dữ liệu trước khi publish.\n4. Kỷ luật kỹ thuật & Quy trình Spec-Driven: Nắm vững Git (commit sạch, branch rõ ràng), có kiến thức về Web API, Docker và sẵn sàng tiếp cận Vitest, property-based testing để đảm bảo chất lượng hệ thống.\n\nTôi rất ấn tượng với việc FPT Long Châu tiên phong ứng dụng AI Agents vào hệ thống thực tế quy mô lớn. Tôi cam kết dành 100% thời gian thực tập với tinh thần chủ động cao nhất để hoàn thành tốt các nhiệm vụ được giao.\n\nKính gửi kèm CV và link GitHub sản phẩm thực tế: https://github.com/dinhanhhhh\nRất mong có cơ hội được tham gia buổi phỏng vấn trực tiếp cùng team.\n\nTrân trọng,\nTrương Đình Anh\nSố điện thoại: 0923202861\nEmail: tdinhanh.it@gmail.com\nGitHub: https://github.com/dinhanhhhh",
      "short": "[Tiêu đề Email: [AI-Agents Team - Frontend Portal] - Trương Đình Anh]\n\nKính gửi Ban Tuyển dụng FPT Long Châu,\n\nTôi là Trương Đình Anh, Cử nhân Khoa học Máy tính tại Đại học Mở TP.HCM, mong muốn ứng tuyển vị trí Thực Tập Sinh Kỹ Thuật (hướng Frontend Portal) trong AI-Agents Team.\n\nThế mạnh của tôi:\n- Frontend: Thành thạo React 18, TypeScript, Vite và xây dựng giao diện Dashboard quản trị/vận hành luồng dữ liệu.\n- AI-First Mindset: Sử dụng thành thạo Claude Code, Codex trong công việc hàng ngày; đã tự tay gọi LLM APIs để xây dựng sản phẩm tự động hóa chạy thực tế trên Production.\n- Nền tảng hệ thống: Nắm vững Git, RESTful API, CSDL quan hệ (PostgreSQL) và làm quen với Docker.\n\nTôi xin gửi kèm CV và link GitHub: https://github.com/dinhanhhhh\nRất mong sớm nhận được phản hồi từ Quý công ty.\n\nTrân trọng,\nTrương Đình Anh\nSĐT: 0923202861 | Email: tdinhanh.it@gmail.com",
      "warm": "[Tiêu đề Email: Ứng tuyển AI-Agents Team (Frontend Portal) – Trương Đình Anh]\n\nKính gửi Ban Tuyển dụng FPT Long Châu,\n\nEm là Trương Đình Anh, tốt nghiệp Khoa học Máy tính tại ĐH Mở TP.HCM. Khi đọc JD Thực Tập Sinh AI-Agents Team, em thực sự phấn khích vì yêu cầu về việc sử dụng thành thạo các công cụ AI (Claude Code, Codex) và tư duy giao việc cho agent chính là cách em đang làm việc và xây dựng sản phẩm mỗi ngày.\n\nVới thế mạnh chuyên sâu về React 18, TypeScript và Vite, em rất mong muốn được đảm nhận hướng Frontend Portal để xây dựng các màn hình quản trị theo dõi pipeline, hiển thị lỗi validation và giúp đội ngũ vận hành hệ thống AI Agent hiệu quả nhất.\n\nEm xin gửi kèm CV và rất mong có cơ hội được trao đổi cùng các anh chị mentor trong buổi phỏng vấn.\n\nEm xin chân thành cảm ơn!\nTrương Đình Anh\nSĐT: 0923202861\nGitHub: https://github.com/dinhanhhhh"
    }
  },
  "en": {
    "projectDisplayLimit": 2,
    "title": "Technical Intern (AI-Agents Team - Frontend Portal)",
    "objective": "Computer Science graduate, Ho Chi Minh City Open University. Proficient in frontend engineering with React 18, TypeScript, and Vite, leveraging AI agent workflows (Claude Code, LLM APIs) to accelerate software delivery. Built an automated pipeline integrating LLM APIs via Cloudflare Workers and developed real-time RESTful APIs at Tami Technology. Eager to join FPT Long Chau's AI-Agents Team to build intuitive agent operations portals.",
    "experience": [
      {
        "name": "TAMI TECHNOLOGY CO., LTD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Financial market data analysis system and internal data processing pipelines.",
        "tasks": [
          "Built and optimized robust RESTful APIs using Next.js Route Handlers for real-time market data retrieval.",
          "Designed relational database schemas and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Integrated Google OAuth authentication flow with NextAuth protecting sensitive endpoints.",
          "Conducted comprehensive API testing via Postman, resolving data synchronization defects.",
          "Containerized and deployed stable demo instances on Vercel Cloud, maintaining clean Git versioning."
        ],
        "tech": "React, Next.js, PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Git, Vercel"
      }
    ],
    "projects": [
      {
        "name": "AI AGENT AUTOMATION PLATFORM",
        "date": "01/2026 - Present",
        "role": "Developer",
        "desc": "Business process automation platform utilizing AI Agent architecture and Serverless computing.",
        "github": "https://github.com/dinhanhhhh/cv-editor",
        "tasks": [
          "Constructed responsive administrative web interface supporting real-time data preview and user interactions.",
          "Integrated LLM APIs (Gemini/OpenAI) to build automated pipelines for analysis and structured extraction.",
          "Implemented automated Quality Gate validation scripts ensuring schema integrity before publication.",
          "Established GitHub Actions CI/CD workflows triggering automatic testing and production deployment."
        ],
        "tech": "TypeScript, Cloudflare Workers, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD"
      },
      {
        "name": "OPERATIONS & DATA PORTAL DASHBOARD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Administrative portal dashboard displaying pipeline statuses, data filtering, and validation error tracking.",
        "github": "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        "tasks": [
          "Constructed high-performance management dashboard using React and TypeScript, optimizing state transitions.",
          "Developed multi-criteria filtering, pagination, and dedicated alert screens for data validation issues.",
          "Integrated RESTful API backend, standardizing data contracts via Swagger UI for seamless handoff.",
          "Enforced JWT authentication and Role-Based Access Control (RBAC) ensuring granular security permissions."
        ],
        "tech": "React 18, TypeScript, Vite, Tailwind CSS, RESTful API, Swagger UI, JWT, RBAC, Git"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React 18, TypeScript, Vite, Next.js, JavaScript, Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, Python, RESTful API Design, JWT, RBAC"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, MySQL, Relational Database Design (3NF), SQL, Indexing"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub, Docker, Postman, Swagger, Claude Code, LLM APIs, Vercel"
      },
      {
        "cat": "English",
        "items": "Technical documentation reading"
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
