// ===================================
// CV DATA - Nội dung CV Frontend (Optimized for INTERN)
// ===================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Frontend Developer (React / Next.js)",
        contact: [
            { icon: 'phone', text: '0923202861' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT NĂNG LỰC",
            projects: "DỰ ÁN TIÊU BIỂU",
            skills: "KỸ NĂNG",
            strengths: "ĐIỂM MẠNH",
            education: "HỌC VẤN"
        },
        objective: "Lập trình viên Frontend chuyên React và Next.js, đã xây dựng và triển khai nhiều ứng dụng web thực tế. Có kinh nghiệm thiết kế giao diện, tích hợp API và tối ưu trải nghiệm người dùng. Luôn tập trung viết code rõ ràng, dễ bảo trì và sẵn sàng cho môi trường production.",
        projects: [
            {
                name: "NỀN TẢNG TUYỂN DỤNG (JOB PORTAL)",
                date: "10/2025 - 11/2025",
                role: "Developer (Solo)",
                desc: "Ứng dụng web cho phép đăng tin tuyển dụng, nộp hồ sơ và quản lý người dùng.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Xây dựng giao diện danh sách việc làm, chi tiết và luồng ứng tuyển bằng Next.js, đảm bảo responsive trên nhiều thiết bị.",
                    "Thiết kế luồng xác thực (login/register/protected routes) và quản lý trạng thái người dùng.",
                    "Tích hợp API và xử lý dữ liệu hiển thị mượt mà, đảm bảo trải nghiệm ổn định.",
                    "Xử lý các trạng thái dữ liệu (loading, error, empty) để cải thiện UX.",
                    "Triển khai ứng dụng trên Vercel và cấu hình môi trường."
                ],
                tech: "Next.js, React, TypeScript, Tailwind CSS, REST API, Git, Vercel"
            },
            {
                name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE)",
                date: "08/2025 - 09/2025",
                role: "Developer (Solo)",
                desc: "Ứng dụng web mua sắm với giỏ hàng và quy trình thanh toán.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Xây dựng UI cho sản phẩm, giỏ hàng và checkout bằng React + Tailwind CSS.",
                    "Tích hợp API và xử lý luồng dữ liệu cho các chức năng chính.",
                    "Cải thiện trải nghiệm người dùng trong quá trình checkout (form, validation, UX flow).",
                    "Tối ưu hiển thị trên mobile và desktop.",
                    "Triển khai frontend trên Vercel."
                ],
                tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, REST API, Git, Vercel"
            }
        ],
        skills: [
            { cat: "Front-End",   items: "React.js, Next.js, TypeScript, Tailwind CSS" },
            { cat: "Quản lý trạng thái", items: "React Hooks, Zustand" },
            { cat: "API & Data",  items: "RESTful API, Axios / Fetch" },
            { cat: "Testing",     items: "Jest, Cypress, Postman" },
            { cat: "Tools",       items: "Git, GitHub, Vercel" }
        ],
        strengths: [
            "Chủ động học hỏi và tự xây dựng dự án hoàn chỉnh.",
            "Có tư duy sản phẩm và chú trọng trải nghiệm người dùng.",
            "Khả năng tự học nhanh và thích nghi tốt với công nghệ mới.",
            "Có kinh nghiệm deploy và vận hành ứng dụng thực tế."
        ],
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "10/2020 - 12/2024",
            detail: "Chuyên ngành: Khoa học Máy tính"
        },
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_FE_Intern_VI"
    },
    en: {
        name: "TRUONG DINH ANH",
        title: "Frontend Developer (React / Next.js)",
        contact: [
            { icon: 'phone', text: '0923202861' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            projects: "FEATURED PROJECTS",
            skills: "SKILLS",
            strengths: "STRENGTHS",
            education: "EDUCATION"
        },
        objective: "Frontend Developer specializing in React and Next.js, with hands-on experience building and deploying real-world web applications. Proficient in UI design, API integration, and user experience optimization. Committed to writing clean, maintainable code for production environments.",
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Developer (Solo)",
                desc: "Web application for job posting, application submission, and user management.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Built job listings, details, and application flow UI using Next.js with full responsiveness.",
                    "Designed authentication flows (login/register/protected routes) and user state management.",
                    "Integrated APIs and handled data display smoothly for a stable experience.",
                    "Managed data states (loading, error, and empty states) to enhance UX.",
                    "Deployed the application on Vercel and configured the environment."
                ],
                tech: "Next.js, React, TypeScript, Tailwind CSS, REST API, Git, Vercel"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer (Solo)",
                desc: "Shopping web application with cart and checkout workflows.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Built product, cart, and checkout UI using React + Tailwind CSS.",
                    "Integrated APIs and processed data flows for core features.",
                    "Improved checkout experience (form handling, validation, UX flow).",
                    "Optimized display for mobile and desktop screens.",
                    "Deployed frontend on Vercel."
                ],
                tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, REST API, Git, Vercel"
            }
        ],
        skills: [
            { cat: "Front-End",   items: "React.js, Next.js, TypeScript, Tailwind CSS" },
            { cat: "State Management", items: "React Hooks, Zustand" },
            { cat: "API & Data",  items: "RESTful API, Axios / Fetch" },
            { cat: "Testing",     items: "Jest, Cypress, Postman" },
            { cat: "Tools",       items: "Git, GitHub, Vercel" }
        ],
        strengths: [
            "Proactive learner and builder of end-to-end projects.",
            "Product-oriented mindset with a focus on user experience.",
            "Fast learner and adaptable to new technologies.",
            "Experienced in deploying and operating real-world applications."
        ],
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "10/2020 - 12/2024",
            detail: "Major: Computer Science"
        },
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_FE_Intern_EN"
    }
};
