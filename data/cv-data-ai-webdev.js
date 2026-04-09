// ===================================
// CV DATA - AI-first Web Developer (Fresher)
// Target: AgileOps - [JOB-41]
// ===================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "AI-first Web Developer (Fresher)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN TIÊU BIỂU",
            skills: "KỸ NĂNG"
        },
        objective: "Fresher Web Developer với tư duy AI-first và nền tảng vững chắc về HTML, CSS, JavaScript, React.js và Next.js. Có kinh nghiệm xây dựng giao diện web responsive, tích hợp API và phối hợp frontend-backend. Chủ động ứng dụng AI (Gemini, ChatGPT, GitHub Copilot) vào quy trình phát triển để tăng tốc độ và chất lượng. Sẵn sàng học nhanh, thích nghi tốt và làm việc hiệu quả trong môi trường năng động.",
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "2020 - 2024",
            detail: "Cử nhân Khoa học Máy tính"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Developer (Solo)",
                desc: "Nền tảng tuyển dụng với giao diện responsive hiện đại, tích hợp đầy đủ luồng xác thực và quản lý người dùng.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Xây dựng giao diện Next.js responsive với Tailwind CSS, đảm bảo hiển thị tốt trên mọi thiết bị và trình duyệt.",
                    "Tích hợp 20+ RESTful API endpoints vào frontend để xử lý luồng đăng nhập, ứng tuyển và quản lý người dùng.",
                    "Áp dụng AI tools (GitHub Copilot, ChatGPT) trong quá trình code để tối ưu tốc độ phát triển và chất lượng code.",
                    "Triển khai xác thực JWT với HttpOnly cookies và RBAC để bảo vệ các trang nhạy cảm."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, HTML/CSS, Node.js, Express, MongoDB, JWT"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Developer (Solo)",
                desc: "Hệ thống quản trị full-stack với dashboard admin responsive cho phép quản lý sinh viên và kết quả học tập.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Thiết kế và xây dựng dashboard quản trị responsive với Next.js và Tailwind CSS, tối ưu UX cho người dùng admin.",
                    "Tích hợp Swagger UI để trực quan hóa tài liệu API và hỗ trợ kiểm thử giao diện nhanh hơn.",
                    "Phát triển giao diện xử lý dữ liệu real-time với các thao tác CRUD và phản hồi tức thì cho người dùng."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Developer (Solo)",
                desc: "Ứng dụng mua sắm trực tuyến với giao diện người dùng trực quan, giỏ hàng và quy trình thanh toán mượt mà.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Xây dựng giao diện React (Vite) responsive với Tailwind CSS, đảm bảo trải nghiệm nhất quán trên mobile và desktop.",
                    "Tích hợp API giỏ hàng và checkout với validation form thông minh để tăng độ ổn định dữ liệu.",
                    "Triển khai phân quyền User/Admin với UI thích ứng theo vai trò người dùng."
                ],
                tech: "React, Vite, Tailwind CSS, HTML/CSS, JavaScript, Node.js, Express, MongoDB"
            }
        ],
        skills: [
            { cat: "AI Tools", items: "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development, LLM concepts" },
            { cat: "Frontend", items: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "Backend", items: "Node.js, Express.js, RESTful API, JWT, RBAC, MongoDB, SQL" },
            { cat: "UI/UX", items: "Figma (view), Responsive layout, Mobile-first design, Accessibility cơ bản" },
            { cat: "Công cụ", items: "Git/GitHub, Vercel, Render, Postman, Swagger, VS Code, Docker" },
            { cat: "Ngoại ngữ", items: "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc, viết báo cáo kỹ thuật cơ bản" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_AIWebDev_AgileOps"
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "AI-first Web Developer (Fresher)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "FEATURED PROJECTS",
            skills: "SKILLS"
        },
        objective: "Fresher Web Developer with an AI-first mindset and solid skills in HTML, CSS, JavaScript, React.js, and Next.js. Experienced in building responsive web interfaces, integrating APIs, and collaborating across frontend and backend. Actively leverages AI tools (Gemini, ChatGPT, GitHub Copilot) and prompt engineering to accelerate development and improve code quality. Quick learner, highly adaptable, and thrives in fast-paced environments.",
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "2020 - 2024",
            detail: "Bachelor of Computer Science"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Developer (Solo)",
                desc: "A recruitment platform with a modern responsive UI and full authentication and user management flows.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Built a responsive Next.js UI with Tailwind CSS, ensuring consistent display across devices and browsers.",
                    "Integrated 20+ RESTful API endpoints into the frontend for login, job application, and user management flows.",
                    "Applied AI tools (GitHub Copilot, ChatGPT) throughout the development process to accelerate coding and improve quality.",
                    "Implemented JWT authentication with HttpOnly cookies and RBAC to protect sensitive pages."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, HTML/CSS, Node.js, Express, MongoDB, JWT"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Developer (Solo)",
                desc: "A full-stack management system with a responsive admin dashboard for student records and academic data.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Designed and built a responsive admin dashboard with Next.js and Tailwind CSS, optimized for admin UX.",
                    "Integrated Swagger UI for visual API documentation and faster interface testing.",
                    "Built a real-time data interface with CRUD operations and instant user feedback."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Developer (Solo)",
                desc: "An online shopping app with an intuitive UI, shopping cart, and smooth checkout experience.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Built a responsive React (Vite) UI with Tailwind CSS, ensuring a consistent experience on mobile and desktop.",
                    "Integrated cart and checkout APIs with smart form validation for improved data reliability.",
                    "Implemented User/Admin role-based access with adaptive UI based on user permissions."
                ],
                tech: "React, Vite, Tailwind CSS, HTML/CSS, JavaScript, Node.js, Express, MongoDB"
            }
        ],
        skills: [
            { cat: "AI Tools", items: "Gemini, ChatGPT, GitHub Copilot, Prompt Engineering, AI-assisted development, LLM concepts" },
            { cat: "Frontend", items: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "Backend", items: "Node.js, Express.js, RESTful API, JWT, RBAC, MongoDB, SQL" },
            { cat: "UI/UX", items: "Figma (view), Responsive layout, Mobile-first design, Basic accessibility" },
            { cat: "Tools", items: "Git/GitHub, Vercel, Render, Postman, Swagger, VS Code, Docker" },
            { cat: "English", items: "Read technical docs, workplace communication, able to write basic technical reports" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_AIWebDev_AgileOps"
    }
};
