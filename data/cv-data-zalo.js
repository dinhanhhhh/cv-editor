// ===================================
// ZALO BUSINESS SOLUTIONS - PRODUCT INTERN CV DATA
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
    vi: {
        projectDisplayLimit: 2,
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Product Intern (Zalo Business Solutions)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            experience: "KINH NGHIỆM THỰC TẾ",
            projects: "DỰ ÁN SẢN PHẨM TIÊU BIỂU",
            skills: "KỸ NĂNG NỔI BẬT"
        },
        objective: "Cử nhân Khoa học Máy tính có tư duy Product-Oriented và định hướng User-Centric sắc bén. Sở hữu kỹ năng phân tích dữ liệu hệ thống mạnh mẽ và khả năng chuyển đổi các yêu cầu phức tạp thành tài liệu đặc tả sản phẩm (PRD, User Flows, Wireframe) rõ ràng cho đội ngũ Kỹ thuật. Có kinh nghiệm xây dựng các sản phẩm thực tế (E-commerce, Job Portal) độc lập và cộng tác nhóm, thành thạo việc chuẩn hóa tài liệu (Swagger, API docs, Markdown). Đam mê tự động hóa quy trình bằng AI (Cursor, Claude, ChatGPT) để nâng cao năng suất. Mong muốn gia nhập Zalo Business Solutions ở vị trí Product Intern để nghiên cứu hành vi người dùng, phân tích chỉ số và đồng hành triển khai các giải pháp sản phẩm nhắn tin & kinh doanh hiệu quả.",
        education: cvGlobalEdu.vi,
        experience: [
            {
                name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
                tasks: [
                    "Phối hợp xác định yêu cầu nghiệp vụ và thiết kế sơ đồ luồng dữ liệu (data flow) cho hệ thống phân tích Vnstock3.",
                    "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers và chuẩn hóa tài liệu API chi tiết để hỗ trợ đội ngũ Frontend tích hợp dễ dàng.",
                    "Kiểm thử chất lượng dữ liệu và trải nghiệm người dùng đầu cuối để tối ưu hóa hiệu suất truy xuất dữ liệu.",
                    "Triển khai và vận hành phiên bản thử nghiệm sản phẩm ổn định trên môi trường Cloud Vercel."
                ],
                tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel"
            }
        ],
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Nền tảng tuyển dụng thông minh với giao diện responsive, được thiết kế và triển khai tối ưu bằng quy trình phối hợp AI.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Nghiên cứu nhu cầu tuyển dụng của thị trường; phác thảo wireframe và xây dựng luồng người dùng (User Flows) tối ưu tỷ lệ chuyển đổi khi nộp hồ sơ.",
                    "Soạn thảo tài liệu mô tả tính năng chi tiết (PRD) cho các luồng nghiệp vụ: ứng tuyển, quản lý hồ sơ và phân quyền RBAC bảo mật.",
                    "Ứng dụng AI (ChatGPT, Claude) để chuẩn hóa tài liệu dự án và tự động hóa viết mã giao diện Next.js, rút ngắn 50% thời gian triển khai."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, MongoDB, JWT, Figma (Wireframing), AI Workflow"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống dashboard quản trị full-stack hỗ trợ xử lý dữ liệu trực quan và theo dõi chỉ số vận hành.",
                github: "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Thiết kế dashboard quản trị responsive hiển thị các biểu đồ trực quan hóa dữ liệu và báo cáo các chỉ số vận hành chính (KPIs, active users).",
                    "Phân tích cơ sở dữ liệu và thiết lập tài liệu API chuẩn hóa bằng Swagger UI, tối ưu hóa quy trình cộng tác kỹ thuật trong nhóm.",
                    "Trích xuất dữ liệu, tối ưu hóa các luồng CRUD nâng cao để đảm bảo hệ thống phản hồi mượt mà cho các tác vụ quản trị."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Swagger UI"
            }
        ],
        skills: [
            { cat: "Product Management", items: "Nghiên cứu thị trường & đối thủ, Soạn thảo PRD, Thiết kế Wireframe & User Flows (Figma), Thiết kế sản phẩm" },
            { cat: "Dữ liệu & Phân tích", items: "Trích xuất dữ liệu (SQL, MongoDB Aggregation), Báo cáo chỉ số (Retention, Churn rate, DAU/MAU), Excel/Google Sheets" },
            { cat: "AI & Quy trình làm việc", items: "Thành thạo Prompt Engineering (ChatGPT, Claude, Cursor) để soạn thảo tài liệu, tóm tắt và tự động hóa tác vụ lặp lại" },
            { cat: "Nền tảng Kỹ thuật", items: "Next.js, React, Node.js, Express, RESTful API, Database Design (PostgreSQL, MongoDB), Swagger/OpenAPI" },
            { cat: "Kỹ năng mềm", items: "Tinh thần Ownership cao, tự giải quyết vấn đề độc lập, làm việc liên phòng ban (Biz/Design/Dev), tiếng Anh tốt" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Zalo_Product",
        coverLetters: {
            tech: `[Tiêu đề Email: Ứng tuyển vị trí Product Intern (Zalo Business Solutions) – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Zalo (VNG Corporation),

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được đồng hành cùng dự án **Zalo Business Solutions** ở vị trí **Product Intern**.

Đọc mô tả công việc, tôi vô cùng hào hứng khi thấy định hướng tìm kiếm nhân tài có sự thoải mái khi làm việc với dữ liệu, có khả năng tự xây dựng tài liệu đặc tả rõ ràng và quen thuộc với việc ứng dụng công cụ AI trong công việc hàng ngày. Tôi tự tin mình đáp ứng tốt yêu cầu nhờ các thế mạnh sau:

- **Tư duy Kỹ thuật & Khả năng Phân tích Dữ liệu**: Nền tảng Khoa học Máy tính giúp tôi dễ dàng làm việc với cơ sở dữ liệu (SQL, MongoDB), tự trích xuất dữ liệu để theo dõi các chỉ số sản phẩm cơ bản (mức độ tiếp nhận, tỷ lệ rời bỏ, xu hướng hoạt động) và biến dữ liệu thô thành nhận định giá trị.
- **Cụ thể hóa đặc tả sản phẩm (PRD & Wireframe)**: Tôi có kinh nghiệm thực tế thiết kế User Flows, vẽ phác thảo Wireframe và soạn thảo tài liệu đặc tả sản phẩm (PRD) cũng như chuẩn hóa tài liệu kỹ thuật (Swagger UI), giúp giảm thiểu thời gian trao đổi và tăng tốc độ triển khai của đội ngũ Kỹ thuật.
- **Ứng dụng AI & Chuẩn hóa quy trình**: Tôi sử dụng thành thạo ChatGPT, Claude và Cursor trong công việc hằng ngày để hỗ trợ soạn thảo, tóm tắt thông tin và tự động hóa các tác vụ lặp lại, tối ưu hiệu suất làm việc cá nhân và tập thể.

Với tinh thần chủ động cao (Ownership), ham học hỏi và định hướng nghề nghiệp rõ ràng theo lĩnh vực Product Management, tôi tin mình sẽ nhanh chóng hòa nhập và đóng góp hiệu quả vào việc tối ưu sản phẩm nhắn tin & kinh doanh cho Zalo.

Tôi xin gửi kèm CV và rất mong có cơ hội trao đổi chi tiết hơn trong một buổi phỏng vấn trực tiếp.

Trân trọng,
Trương Đình Anh`,
            short: `[Tiêu đề Email: Product Intern (Zalo Business Solutions) - Trương Đình Anh]

Kính gửi Ban Tuyển dụng Zalo,

Tôi tên là Trương Đình Anh, tốt nghiệp Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi mong muốn ứng tuyển vị trí **Product Intern** tại **Zalo Business Solutions**.

Với nền tảng kỹ thuật tốt, tư duy phân tích dữ liệu và tinh thần chủ động cao, tôi tự tin đáp ứng các yêu cầu:
- **Đặc tả sản phẩm**: Có kinh nghiệm tự tay vẽ wireframe, thiết kế User Flows và soạn thảo tài liệu PRD rõ ràng giúp đội ngũ Dev triển khai hiệu quả.
- **Tư duy dữ liệu**: Thành thạo trích xuất dữ liệu (SQL, MongoDB) và hỗ trợ theo dõi các chỉ số vận hành của sản phẩm.
- **Tự động hóa bằng AI**: Quen thuộc việc dùng ChatGPT/Claude trong công việc hàng ngày để chuẩn hóa quy trình, soạn thảo biểu mẫu và tối ưu hóa hiệu suất làm việc nhóm.

Cảm ơn anh/chị đã dành thời gian xem xét hồ sơ của tôi.

Trân trọng,
Trương Đình Anh`,
            warm: `[Tiêu đề Email: Đồng hành cùng Zalo Business Solutions – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Zalo,

Chào anh/chị, tôi là Trương Đình Anh, vừa tốt nghiệp Khoa học Máy tính từ Đại học Mở TP.HCM. Khi đọc thông tin tuyển dụng vị trí Product Intern tại **Zalo Business Solutions**, tôi nhận thấy đây chính là cơ hội tuyệt vời để tôi cống hiến năng lực phân tích dữ liệu và tư duy hướng sản phẩm của mình.

Tôi tin rằng một Product Intern xuất sắc cần có kỹ thuật tốt để hiểu Dev đang làm gì, đồng thời sở hữu sự nhạy bén để nắm bắt hành vi người dùng. Nhờ kinh nghiệm tự xây dựng các sản phẩm thực tế kết hợp với các công cụ AI hỗ trợ (Cursor, Claude), tôi đã rèn luyện được tinh thần Ownership cao - sẵn sàng tự tìm hướng giải quyết cho những vấn đề chưa rõ ràng. Tôi rất hào hứng với cơ hội được học hỏi việc nghiên cứu insight người dùng và chuẩn hóa quy trình làm việc cùng các anh chị tại Zalo.

Chúc anh/chị một ngày làm việc tràn đầy năng lượng và hi vọng sớm có cơ hội gặp mặt trao đổi!

Trân trọng,
Trương Đình Anh`
        }
    },

    en: {
        projectDisplayLimit: 2,
        name: "TRUONG DINH ANH",
        title: "Product Intern (Zalo Business Solutions)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            experience: "WORK EXPERIENCE",
            projects: "FEATURED PRODUCT PROJECTS",
            skills: "KEY SKILLS"
        },
        objective: "Computer Science graduate with a strong Product-Oriented mindset and a sharp User-Centric focus. Possesses robust system data analysis skills and the ability to translate complex business needs into clear product specifications (PRDs, User Flows, Wireframes) for Engineering teams. Experienced in building practical web products (E-commerce, Job Portal) both independently and collaboratively, with a strong habit of process standardization (Swagger, API docs, Markdown). Highly proficient in leveraging AI tools (Cursor, Claude, ChatGPT) to automate workflows and optimize team productivity. Eager to join Zalo Business Solutions as a Product Intern to analyze user behavior, track product metrics, and deliver impactful messaging & business solutions.",
        education: cvGlobalEdu.en,
        experience: [
            {
                name: "TAMI TECHNOLOGY CO., LTD",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
                tasks: [
                    "Collaborated on business requirements analysis and designed data flow diagrams for the stock analysis system.",
                    "Developed 15+ secure RESTful API endpoints and standardized detailed API documentation to streamline frontend integration.",
                    "Conducted data quality testing and user feedback analysis to optimize queries and enhance retrieval efficiency.",
                    "Deployed and operated the stable prototype release onto Vercel cloud environment."
                ],
                tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel"
            }
        ],
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A smart recruitment platform with a modern responsive UI, designed and executed rapidly using AI workflows.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Conducted market research on recruitment needs; designed wireframes and mapped out user flows to optimize application conversion rates.",
                    "Drafted detailed Product Requirement Documents (PRDs) for candidate application, resume management, and RBAC security logic.",
                    "Utilized AI tools (ChatGPT, Claude) to standardize documentation and automate frontend code delivery, cutting timeline by 50%."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, MongoDB, JWT, Figma (Wireframing), AI Workflow"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "A full-stack admin dashboard built to visualize data metrics and manage student indexing.",
                tasks: [
                    "Designed a responsive admin dashboard UI featuring data visualization charts to track key operational metrics (KPIs, active users).",
                    "Analyzed system database architecture and structured clear API documentation using Swagger UI to optimize developer collaboration.",
                    "Extracted database elements and optimized CRUD flows to ensure seamless system responses for administrative actions."
                ],
                tech: "Next.js 15, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Swagger UI"
            }
        ],
        skills: [
            { cat: "Product Management", items: "Competitor & Market Research, PRD Drafting, Wireframing & User Flows (Figma), Product Design" },
            { cat: "Data & Analytics", items: "Data Extraction (SQL, MongoDB Aggregation), Product Metrics Tracking (Retention, Churn, DAU/MAU), Excel/Sheets" },
            { cat: "AI & Automation", items: "Proficient in Prompt Engineering (ChatGPT, Claude, Cursor) for drafting, summarization, and task automation" },
            { cat: "Technical Foundation", items: "Next.js, React, Node.js, Express, RESTful API, Database Design (PostgreSQL, MongoDB), Swagger/OpenAPI" },
            { cat: "Soft Skills", items: "Strong Ownership, independent problem-solving, cross-functional collaboration (Biz/Design/Dev), fluent English" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Zalo_Product",
        coverLetters: {
            tech: `[Subject: Job Application: Product Intern (Zalo Business Solutions) – Truong Dinh Anh]

Dear Hiring Team at Zalo (VNG Corporation),

My name is Truong Dinh Anh, a recent Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the **Product Intern** position at **Zalo Business Solutions**.

After reading the job description, I am highly inspired by your search for a candidate who is comfortable with data, capable of creating clear, independent specification documents, and adept at leveraging AI tools in daily workflows. I am confident that I am a great fit for this role based on the following:

- **Technical Foundation & Data Analysis**: My Computer Science education enables me to easily work with databases (SQL, MongoDB), extract product performance metrics (such as adoption, churn, and usage patterns), and turn raw data into actionable insights.
- **Product Specifications (PRD & Wireframing)**: I have hands-on experience mapping User Flows, designing wireframes, and drafting Product Requirement Documents (PRDs). I also standardized developer documentation using Swagger UI, ensuring smooth cross-functional handoffs.
- **AI Integration & Workflow Optimization**: I regularly leverage advanced AI tools (ChatGPT, Claude, Cursor) to assist in drafting documents, summarizing user feedback, and automating repetitive tasks, increasing overall productivity.

With a high sense of ownership, strong adaptability, and a clear career path oriented towards Product Management, I am excited to learn user behavior research and support the deployment of messaging and business features at Zalo.

I have attached my CV and look forward to discussing my qualifications in a personal interview.

Sincerely,
Truong Dinh Anh`,
            short: `[Subject: Product Intern (Zalo Business Solutions) - Truong Dinh Anh]

Dear Hiring Team at Zalo,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I would like to apply for the **Product Intern** position at **Zalo Business Solutions**.

With a strong technical background, a analytical mindset, and a proactive attitude, I bring:
- **Product Specs**: Hands-on experience drafting PRDs, mapping user flows, and wireframing interface layouts to ensure efficient developer alignment.
- **Data Proficiency**: Ability to extract system queries (SQL, MongoDB) and analyze key product adoption metrics.
- **AI Automation**: Proficient in utilizing ChatGPT/Claude to automate repetitive tasks and standardize team workflow templates.

Thank you for considering my application.

Best regards,
Truong Dinh Anh`,
            warm: `[Subject: Joining Zalo Business Solutions – Truong Dinh Anh]

Dear Hiring Team at Zalo,

Hello, my name is Truong Dinh Anh, a Computer Science graduate who is highly passionate about Product Management. I am writing to express my enthusiasm for joining the **Zalo Business Solutions** team as a **Product Intern**.

I believe a great product creator needs strong technical depth to communicate with developers, combined with a sharp empathy for end-users. Through building full-stack products and automating workflows using AI tools (Cursor, Claude), I have developed a solid sense of ownership—taking charge of issues even when process instructions are not clearly defined. I am extremely excited to contribute to standardizing team templates, analyzing user insights, and working alongside senior mentors at Zalo.

Wish you a wonderful day and hope to hear from you soon!

Sincerely,
Truong Dinh Anh`
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cvData;
} else {
    window.cvData = cvData;
}
