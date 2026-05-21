// ===================================
// CV DATA - Healthcare Fullstack Developer
// Tùy chỉnh cho JD: Intern/Junior Fullstack (Healthcare/Dental platform)
// Reframe: Job Portal -> Booking, Student Mgmt -> Records Mgmt
// ===================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Full-Stack Developer Intern (ReactJS & NodeJS)",
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
        objective: "Thực tập sinh Full-Stack Developer với nền tảng vững về ReactJS, Next.js, Node.js và TypeScript. Có kinh nghiệm xây dựng ứng dụng web full-stack bao gồm dashboard quản trị, hệ thống quản lý người dùng và tích hợp RESTful API. Quan tâm đến lĩnh vực Y tế số (HealthTech) và mong muốn đóng góp vào các sản phẩm quản lý phòng khám, booking lịch hẹn. Sẵn sàng học hỏi domain nha khoa, làm việc Agile/Scrum và thích nghi nhanh với nhiều nhiệm vụ.",
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "2020 - 2024",
            detail: "Cử nhân Khoa học Máy tính"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Developer",
                desc: "Nền tảng quản lý đặt lịch & ứng tuyển toàn diện, xử lý luồng booking giữa nhà tuyển dụng và ứng viên — tương tự mô hình booking phòng khám.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Thiết kế và triển khai 20+ RESTful API endpoints xử lý luồng booking và quản lý trạng thái hồ sơ.",
                    "Xử lý state, form validation, loading và error handling cho các luồng nghiệp vụ phức tạp.",
                    "Xây dựng cơ chế xác thực bảo mật JWT kết hợp RBAC để bảo vệ dữ liệu người dùng.",
                    "Tối ưu truy vấn MongoDB, đảm bảo hiệu suất xử lý dữ liệu lớn với phản hồi < 300ms.",
                    "Đảm bảo giao diện Responsive hoàn thiện trên Desktop và Mobile."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản trị hồ sơ full-stack với dashboard, tương tự mô hình quản lý hồ sơ khách hàng/bệnh nhân trong healthcare.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Phát triển hệ thống Dashboard quản trị tập trung, quản lý vòng đời hồ sơ và kết quả dữ liệu.",
                    "Triển khai xác thực đa lớp (Access/Refresh Token) để đảm bảo an toàn thông tin hồ sơ.",
                    "Tài liệu hóa hệ thống API bằng Swagger, hỗ trợ quá trình tích hợp và bàn giao dự án nhanh chóng.",
                    "Xử lý hiển thị dữ liệu real-time trên dashboard responsive, tối ưu trải nghiệm quản trị viên."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Developer",
                desc: "Giải pháp thương mại điện tử với hệ thống automation quản lý kho và đơn hàng.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Tích hợp RESTful API từ backend, xử lý đồng bộ dữ liệu real-time cho giỏ hàng và đơn hàng.",
                    "Triển khai cơ chế phân quyền User/Admin chặt chẽ cho các thao tác quản lý dữ liệu nhạy cảm.",
                    "Tối ưu hóa quy trình checkout và validation form để tăng độ tin cậy của hệ thống."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Frontend", items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "Backend", items: "Node.js, Express.js, NestJS (Learning), RESTful API, JWT, RBAC, Middleware" },
            { cat: "AI & Integration", items: "Tích hợp API AI (OpenAI, Gemini), Chatbot, Swagger, Postman" },
            { cat: "Cơ sở dữ liệu", items: "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Tối ưu hóa truy vấn" },
            { cat: "Công cụ", items: "Git/GitHub, Vercel, Render, Docker" },
            { cat: "Quy trình", items: "Agile/Scrum, Code Review, Trello/Jira, Tư duy sản phẩm" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Healthcare_FullStack_VI"
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Full-Stack Developer Intern (ReactJS & NodeJS)",
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
        objective: "Full-Stack Developer Intern with a solid foundation in ReactJS, Next.js, Node.js, and TypeScript. Experienced in building full-stack web applications including admin dashboards, user management systems, and RESTful API integration. Passionate about HealthTech and eager to contribute to clinic management and appointment booking products. Ready to learn the dental/healthcare domain, work in Agile/Scrum, and adapt quickly to diverse tasks.",
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "2020 - 2024",
            detail: "Bachelor of Computer Science"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Developer",
                desc: "A comprehensive booking & application platform, handling complex flows between employers and candidates — similar to healthcare booking models.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Designed and implemented 20+ RESTful API endpoints for booking flows and application status management.",
                    "Handled state management, complex form validation, loading, and error handling for critical business logic.",
                    "Implemented secure JWT authentication and RBAC to protect sensitive user data.",
                    "Optimized MongoDB queries to ensure high performance with response times under 300ms.",
                    "Delivered a pixel-perfect responsive UI for both Desktop and Mobile devices."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Full-stack administrative system with a dashboard, similar to electronic medical record (EMR) management systems.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Developed a centralized Admin Dashboard managing record lifecycles and academic data.",
                    "Implemented multi-layer authentication (Access/Refresh Tokens) for secure data access.",
                    "Automated API documentation using Swagger to facilitate rapid integration and project handoff.",
                    "Engineered real-time data visualization on a responsive dashboard for administrative efficiency."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Developer",
                desc: "E-commerce solution with intelligent automation for inventory and order management.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Integrated backend RESTful APIs with real-time data synchronization for carts and orders.",
                    "Implemented strict User/Admin authorization mechanisms for sensitive data management.",
                    "Optimized the checkout flow and form validation to enhance system reliability and user trust."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Frontend", items: "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "Backend", items: "Node.js, Express.js, NestJS (Learning), RESTful API, JWT, RBAC, Middleware" },
            { cat: "AI & Integration", items: "AI API Integration (OpenAI, Gemini), Chatbot, Swagger, Postman" },
            { cat: "Databases", items: "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Query Optimization" },
            { cat: "Tools", items: "Git/GitHub, Vercel, Render, Docker" },
            { cat: "Process", items: "Agile/Scrum, Code Review, Trello/Jira, Product Mindset" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Healthcare_FullStack_EN"
    }
};
