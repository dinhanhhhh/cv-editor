// ===================================
// CV DATA - EZ GAMES FRONTEND DEVELOPER INTERN
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
    vi: {
        projectDisplayLimit: 2,
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Frontend Developer Intern",
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
        objective: "Thực tập sinh Frontend Developer chuyên React và Next.js với nền tảng Khoa học Máy tính vững vàng. Có kinh nghiệm xây dựng giao diện responsive mượt mà trên Mobile/Tablet/Desktop, tích hợp REST API và làm việc với các hệ thống cơ sở dữ liệu (PostgreSQL/Supabase, MySQL). Có tư duy hướng đối tượng (OOP) tốt và nền tảng lập trình C#/.NET (lợi thế lớn giúp nhanh chóng tiếp cận Unity/Game Development). Sẵn sàng làm việc full-time, học hỏi chủ động và phối hợp chặt chẽ cùng đội ngũ EZ Games để phát triển các sản phẩm công nghệ và game đột phá.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Ứng dụng web hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Phát triển giao diện React/Next.js responsive toàn diện trên Mobile, Tablet và Desktop.",
                    "Tích hợp các RESTful API endpoints cùng Backend Team để xử lý dữ liệu và đồng bộ hóa trạng thái người dùng.",
                    "Xử lý và kiểm soát tốt các trạng thái dữ liệu phía Client (Loading/Skeleton, Empty, Error) nâng cao trải nghiệm người dùng.",
                    "Thiết kế luồng xác thực phía Client (login/register/protected routes) đảm bảo phân quyền người dùng mượt mà.",
                    "Sử dụng Git/GitHub để quản lý mã nguồn, giải quyết xung đột (conflict) và triển khai ứng dụng lên Vercel."
                ],
                tech: "Next.js 15, React, TypeScript, Tailwind CSS, RESTful API, Git, Vercel"
            },
            {
                name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE)",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Ứng dụng web mua sắm với giỏ hàng tối ưu và quy trình thanh toán mượt mà.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Xây dựng giao diện danh sách sản phẩm, chi tiết, giỏ hàng và thanh toán (checkout) bằng React + Tailwind CSS.",
                    "Xử lý đồng bộ hóa giỏ hàng và lưu trữ cục bộ trạng thái mua sắm của người dùng.",
                    "Cải thiện trải nghiệm người dùng trong quá trình checkout thông qua xác thực dữ liệu đầu vào (form validation) chặt chẽ.",
                    "Tối ưu hóa hình ảnh và tài nguyên tĩnh giúp giảm thời gian tải trang và cải thiện trải nghiệm trên thiết bị di động."
                ],
                tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, RESTful API, Git, Vercel"
            }
        ],
        skills: [
            { cat: "Front-End", items: "React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "State & API", items: "React Hooks, Zustand, RESTful API Integration, Axios, Fetch, JSON data processing" },
            { cat: "Điểm cộng & DB", items: "PostgreSQL, Supabase (đã thực hành thực tế), MySQL, MongoDB, OOP, C#/.NET (sẵn sàng học Unity)" },
            { cat: "Công cụ & Kiểm soát", items: "Git, GitHub, VS Code, Postman (kiểm thử API), Figma (đọc/xuất tài nguyên thiết kế)" },
            { cat: "Kỹ năng mềm", items: "Tư duy giải quyết vấn đề, tinh thần tự học chủ động, teamwork tốt, đọc hiểu tài liệu tiếng Anh tốt" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Frontend_Intern_EZGames",
        coverLetter: `[Tiêu đề Email: EZ Games - Frontend Developer Intern - Trương Đình Anh]

Kính gửi chị Thu Nguyễn và Bộ phận Tuyển dụng Công ty EZ Games,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ sự quan tâm sâu sắc và mong muốn được ứng tuyển vào vị trí Thực tập sinh Frontend Developer tại EZ Games.

Với định hướng phát triển chuyên sâu về lập trình web hiện đại (React/Next.js), tôi đã xây dựng thành công các dự án thực tế như Job Portal và E-Commerce Platform. Tôi tự tin với khả năng cắt giao diện chuẩn UI/UX, tối ưu trải nghiệm responsive mượt mà trên nhiều thiết bị và kết nối dữ liệu qua REST API.

Đặc biệt, tôi nhận thấy các điểm cộng mà EZ Games đang tìm kiếm rất tương đồng với kỹ năng của tôi:
- Về Database/Cloud: Tôi đã có cơ hội thực tập Back-End tại Tami Technology, trực tiếp thiết kế cơ sở dữ liệu PostgreSQL và triển khai trên hạ tầng Supabase Cloud. Điều này giúp tôi hiểu sâu sắc cách phối hợp cùng Backend Team để tối ưu hóa dữ liệu.
- Về Unity/Game: Tôi có tư duy hướng đối tượng (OOP) vững vàng và nền tảng lập trình C#/.NET được đào tạo bài bản qua các đồ án tại trường. Đây là bệ phóng giúp tôi sẵn sàng tìm hiểu và tiếp cận nhanh chóng các dự án sử dụng Unity/Game Development của EZ Games.

EZ Games là một môi trường năng động và phát triển nhanh trong lĩnh vực công nghệ/game. Tôi tin rằng với tinh thần tự học chủ động, trách nhiệm cao và khả năng thích nghi nhanh, tôi sẽ đóng góp tích cực vào \"Dream Team\" của công ty. Tôi sẵn sàng làm việc full-time từ thứ 2 đến thứ 6 và cam kết nỗ lực hết mình để hướng tới vị trí nhân viên chính thức sau kỳ thực tập.

Tôi xin gửi kèm CV để Quý công ty tiện tham khảo. Rất mong nhận được phản hồi và có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Tôi xin chân thành cảm ơn!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },

    en: {
        projectDisplayLimit: 2,
        name: "TRUONG DINH ANH",
        title: "Frontend Developer Intern",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "TECHNICAL PROJECTS",
            skills: "TECHNICAL SKILLS"
        },
        objective: "Frontend Developer Intern specializing in React and Next.js with a solid Computer Science background. Experienced in building responsive interfaces across Mobile/Tablet/Desktop, integrating RESTful APIs, and working with databases (PostgreSQL/Supabase, MySQL). Possesses strong OOP skills and C#/.NET programming foundation (a significant advantage for learning Unity/Game Development). Eager to work full-time, self-motivated, and ready to collaborate with the EZ Games team to build high-performance web and gaming applications.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A web application supporting job listings, online applications, and applicant profile management.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Developed fully responsive React/Next.js interfaces across Mobile, Tablet, and Desktop screens.",
                    "Collaborated with Backend Team to integrate RESTful APIs for handling authentication and user data flows.",
                    "Managed and controlled client-side data states (Loading/Skeleton, Empty, Error) to enhance UX.",
                    "Designed authentication flows (login/register/protected routes) for secure client-side routing.",
                    "Used Git/GitHub for version control, resolving conflicts, and successfully deployed to Vercel."
                ],
                tech: "Next.js 15, React, TypeScript, Tailwind CSS, RESTful API, Git, Vercel"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "A shopping web application with an optimized shopping cart and smooth checkout flow.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Built product catalogs, shopping cart, and checkout UI pages using React and Tailwind CSS.",
                    "Handled state synchronization for shopping cart items and implemented local storage persistence.",
                    "Enhanced the checkout experience with comprehensive form validation and intuitive UX workflows.",
                    "Optimized static assets and images to reduce page load time and improve mobile responsiveness."
                ],
                tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, RESTful API, Git, Vercel"
            }
        ],
        skills: [
            { cat: "Front-End", items: "React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive Design" },
            { cat: "State & API", items: "React Hooks, Zustand, RESTful API Integration, Axios, Fetch, JSON data processing" },
            { cat: "Bonus & DB", items: "PostgreSQL, Supabase (hands-on experience), MySQL, MongoDB, OOP, C#/.NET (ready to learn Unity)" },
            { cat: "Tools", items: "Git, GitHub, VS Code, Postman (API testing), Figma (extracting design assets)" },
            { cat: "Soft Skills", items: "Problem-solving, self-motivated learning, teamwork, good reading comprehension of English docs" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Frontend_Intern_EZGames",
        coverLetter: `[Subject: EZ Games - Frontend Developer Intern - Truong Dinh Anh]

Dear Ms. Thu Nguyen and the EZ Games Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in and apply for the Frontend Developer Intern position at EZ Games.

With a dedicated focus on modern web development (React/Next.js), I have built and deployed real-world web projects, including a Job Portal and an E-Commerce Platform. I am confident in my ability to convert Figma designs into responsive interfaces across Mobile, Tablet, and Desktop, and seamlessly integrate RESTful APIs.

Moreover, the bonus points EZ Games is looking for align perfectly with my technical background:
- Database & Cloud: During my backend internship at Tami Technology, I designed PostgreSQL database schemas and deployed them on Supabase Cloud. This hands-on experience allows me to collaborate effectively with backend developers.
- Unity & Game Dev: I have a solid understanding of Object-Oriented Programming (OOP) and C#/.NET development, which I mastered through academic projects. This foundation will enable me to quickly adapt to Unity and Game Development workflows at EZ Games.

EZ Games offers a dynamic and fast-paced environment for gaming and tech development. I am confident that my self-learning attitude, sense of responsibility, and rapid adaptability will add great value to your "Dream Team." I am fully available to work full-time (Monday to Friday) and committed to working towards a full-time position post-internship.

Please find my attached CV for more details. I look forward to the opportunity of discussing my application in an interview.

Thank you for your time and consideration.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    }
};

if (typeof module !== 'undefined') {
    module.exports = cvData;
}
