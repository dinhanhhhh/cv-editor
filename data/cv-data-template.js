// =========================================================================
// MASTER CV DATA
// Nguon CV goc de:
// 1. Xem truc tiep qua `cv-template.html`
// 2. Lam du lieu dau vao cho Cloudflare Worker + AI tailor theo JD
// 3. Tao them cac phien ban CV chuyen biet khi can
// =========================================================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Software Developer Intern",
        contact: [
            { icon: "phone", text: "0349421079" },
            { icon: "email", text: "tdinhanh.it@gmail.com", link: "mailto:tdinhanh.it@gmail.com" },
            { icon: "github", text: "github.com/dinhanhhhh", link: "https://github.com/dinhanhhhh" },
            { icon: "address", text: "Thủ Đức, TP. Hồ Chí Minh" }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN TIÊU BIỂU",
            skills: "KỸ NĂNG"
        },
        objective: "Thực tập sinh Software Developer với nền tảng React.js, Next.js, Node.js, Express và TypeScript, có kinh nghiệm xây dựng ứng dụng web full-stack, tích hợp RESTful API và xử lý dữ liệu ở cả frontend lẫn backend. Chủ động ứng dụng AI tools như Gemini, ChatGPT và GitHub Copilot để tăng tốc phân tích, viết code, kiểm thử và tài liệu hóa. Quan tâm đến automation, clean architecture và khả năng duy trì sản phẩm thực tế. Sẵn sàng làm việc full-time, học nhanh và thích nghi tốt với nhiều domain công nghệ khác nhau.",
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "2020 - 2024",
            detail: "Khoa học Máy tính"
        },
        projectDisplayLimit: 2,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Nền tảng tuyển dụng full-stack hỗ trợ đăng tin, nộp hồ sơ, quản lý người dùng và xử lý quy trình ứng tuyển cho nhà tuyển dụng và ứng viên.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Phát triển hơn 20 RESTful API endpoints bằng Node.js và Express cho các nghiệp vụ quản lý việc làm, hồ sơ ứng tuyển và người dùng.",
                    "Tích hợp frontend Next.js với backend services cho các luồng đăng nhập, nộp hồ sơ, cập nhật profile và phân quyền truy cập.",
                    "Triển khai xác thực JWT với HttpOnly cookies, RBAC và refresh token flow để bảo vệ các thao tác nhạy cảm.",
                    "Tối ưu truy vấn MongoDB và cấu trúc xử lý dữ liệu để giúp thời gian phản hồi API xuống dưới 300ms ở các luồng chính."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản trị full-stack phục vụ quản lý hồ sơ sinh viên, đăng ký khóa học, kết quả học tập và dashboard quan sát dữ liệu cho admin.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Xây dựng backend theo cấu trúc module với Node.js và Express để tách rõ business logic, routing và middleware phục vụ khả năng mở rộng.",
                    "Tích hợp Swagger để tài liệu hóa API, hỗ trợ test nhanh và giảm thời gian handoff giữa frontend, backend và QA.",
                    "Phát triển dashboard quản trị responsive bằng Next.js và Tailwind CSS với các thao tác CRUD và giao tiếp dữ liệu thời gian thực.",
                    "Áp dụng access token và refresh token cho luồng xác thực, giúp hệ thống vận hành ổn định và dễ bảo trì hơn."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
            }
        ],
        skills: [
            { cat: "AI-assisted Development", items: "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow" },
            { cat: "Frontend", items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3" },
            { cat: "Backend & API", items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger" },
            { cat: "Databases & Data", items: "MongoDB, MySQL, PostgreSQL, Query Optimization, Data Processing" },
            { cat: "Tools & Deployment", items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code" },
            { cat: "English", items: "Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc cơ bản, có thể viết mô tả kỹ thuật bằng tiếng Anh" }
        ],

        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Master"
    },
    en: {
        name: "TRUONG DINH ANH",
        title: "Software Developer Intern",
        contact: [
            { icon: "phone", text: "0349421079" },
            { icon: "email", text: "tdinhanh.it@gmail.com", link: "mailto:tdinhanh.it@gmail.com" },
            { icon: "github", text: "github.com/dinhanhhhh", link: "https://github.com/dinhanhhhh" },
            { icon: "address", text: "Thu Duc, Ho Chi Minh City" }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "FEATURED PROJECTS",
            skills: "TECHNICAL SKILLS"
        },
        objective: "Software Developer Intern with hands-on experience in React.js, Next.js, Node.js, Express, and TypeScript, capable of building full-stack web applications, integrating RESTful APIs, and handling data across both frontend and backend. Proactively uses AI tools such as Gemini, ChatGPT, and GitHub Copilot to accelerate analysis, coding, testing, and documentation work. Interested in automation, clean architecture, and real-world product delivery. Available full-time, quick to learn, and adaptable across different technical domains.",
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "2020 - 2024",
            detail: "Computer Science"
        },
        projectDisplayLimit: 2,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A full-stack recruitment platform supporting job posting, application submission, user management, and hiring workflows for employers and candidates.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Developed 20+ RESTful API endpoints with Node.js and Express for jobs, applications, and user management workflows.",
                    "Integrated the Next.js frontend with backend services for login, profile updates, job application flows, and access control.",
                    "Implemented JWT authentication with HttpOnly cookies, RBAC, and a refresh token flow to secure sensitive operations.",
                    "Optimized MongoDB queries and data handling flow to keep response times under 300ms on major APIs."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "A full-stack administrative system for student records, course registration, academic performance tracking, and admin data dashboards.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Built a modular backend with Node.js and Express to separate business logic, routing, and middleware for better scalability.",
                    "Integrated Swagger for API documentation and faster testing, reducing handoff friction across frontend, backend, and QA.",
                    "Developed a responsive admin dashboard with Next.js and Tailwind CSS, including CRUD workflows and real-time data handling.",
                    "Implemented access token and refresh token authentication flows to improve system stability and maintainability."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
            }
        ],
        skills: [
            { cat: "AI-assisted Development", items: "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development workflow" },
            { cat: "Frontend", items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, HTML5/CSS3" },
            { cat: "Backend & API", items: "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger" },
            { cat: "Databases & Data", items: "MongoDB, MySQL, PostgreSQL, Query Optimization, Data Processing" },
            { cat: "Tools & Deployment", items: "Git/GitHub, Postman, Docker, Vercel, Render, VS Code" },
            { cat: "English", items: "Read technical documentation, handle basic workplace communication, and write technical descriptions in English" }
        ],

        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Master"
    }
};
