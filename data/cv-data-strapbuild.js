// ===================================
// CV DATA - STRAPBUILD JUNIOR FULL-STACK DEVELOPER
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Junior Full-Stack Developer",
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
        objective: "Lập trình viên Full-Stack JavaScript/TypeScript chủ động, đam mê giải quyết các bài toán hệ thống và tối ưu sản phẩm. Có khả năng tự thiết kế kiến trúc, làm chủ mã nguồn và sử dụng hiệu quả các công cụ hỗ trợ (GitHub Copilot, Claude) để tăng tốc độ phát triển mà không bị phụ thuộc. Mong muốn gia nhập Strapbuild để xây dựng các sản phẩm thực tế và phát triển hệ thống AI agent đột phá.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Hệ thống tuyển dụng trực tuyến toàn diện, hỗ trợ ứng tuyển và kết nối giữa nhà tuyển dụng và ứng viên.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Phát triển 20+ RESTful APIs bằng Node.js/Express, tối ưu hóa truy vấn MongoDB và lập chỉ mục (index) giúp giảm thời gian phản hồi API xuống dưới 150ms.",
                    "Thiết kế cơ chế xác thực JWT kết hợp phân quyền RBAC chặt chẽ để bảo vệ tài nguyên hệ thống.",
                    "Xây dựng giao diện Next.js responsive với Tailwind CSS, tối ưu hóa quá trình render phía client."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản lý thông tin học tập của sinh viên tích hợp Dashboard phân tích dữ liệu trực quan.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Áp dụng triệt để tư duy Lập trình chức năng (Functional Programming) giúp viết code sạch, dễ kiểm thử và bảo trì.",
                    "Thiết kế cấu trúc dự án rõ ràng, tối ưu hóa state management trên Next.js dashboard để tránh re-render thừa.",
                    "Sử dụng Docker để container hóa ứng dụng, tự viết script cấu hình môi trường nhất quán giữa các máy phát triển."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Docker, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Trang web thương mại điện tử đồng bộ hóa giỏ hàng thời gian thực và quản lý kho hàng tự động.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Xây dựng React frontend và phát triển các API Express quản lý giao dịch mua sắm, thanh toán.",
                    "Tự nghiên cứu và giải quyết triệt để lỗi xung đột đồng bộ giỏ hàng (race conditions) khi người dùng mở nhiều tab.",
                    "Sử dụng Git Workflow bài bản (Feature Branching) để kiểm soát các bản cập nhật tính năng."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git"
            }
        ],
        skills: [
            { cat: "Ngôn ngữ cốt lõi", items: "JavaScript (ES6+), TypeScript (Cấm dùng 'any'), HTML5/CSS3" },
            { cat: "Frontend Stack", items: "React.js, Next.js, Redux, State Management, Responsive Web Design" },
            { cat: "Backend & Database", items: "Node.js (Express), RESTful API, JWT, RBAC, MongoDB (Mongoose), SQL" },
            { cat: "Công cụ & Tự động", items: "Git (Feature Branching), Docker, Swagger, Postman, Vercel, Render" },
            { cat: "Hiệu suất AI", items: "Sử dụng hiệu quả Claude/ChatGPT/Copilot để sinh code mẫu, giải thích lỗi và tối ưu hóa giải pháp" },
            { cat: "Kỹ năng cá nhân", items: "Tự chủ giải quyết vấn đề, Tư duy phản biện, Làm việc nhóm, Giao tiếp trực tuyến tốt" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Strapbuild_FullStack_Intern_VI",
        coverLetter: `[Tiêu đề Email: Ứng tuyển Junior Full-Stack Developer – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng Strapbuild,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào vị trí Junior Full-Stack Developer tại Strapbuild.

Là một lập trình viên Full-Stack với thế mạnh về JavaScript, TypeScript, React và Node.js, tôi luôn hướng tới việc tự chủ trong kiến trúc, làm chủ mã nguồn và sử dụng hiệu quả các công cụ hỗ trợ (GitHub Copilot, Claude) để tăng tốc độ phát triển mà không bị phụ thuộc. Triết lý làm việc của Strapbuild – "không đổ lỗi cho cá nhân mà tập trung sửa lỗi hệ thống" và "chia sẻ lợi nhuận xứng đáng với kết quả thực tế" – cực kỳ tương thích với tinh thần trách nhiệm cao và mong muốn phát triển bền vững của tôi.

Tôi xin gửi kèm link GitHub cá nhân và phần trả lời cho 3 câu hỏi tuyển dụng của Quý công ty ở bên dưới:

• GitHub: https://github.com/dinhanhhhh
• Portfolio: https://github.com/dinhanhhhh/cv-editor

---

TRẢ LỜI 3 CÂU HỎI TUYỂN DỤNG:

Câu 1: Hãy nghĩ về một thứ bạn từng chủ động bắt tay xây dựng nhưng cuối cùng đã thất bại. Thất bại đó khiến bạn phải trả giá bằng những gì và bạn đã tự mình gánh lấy việc dọn dẹp hậu quả ra sao? Bạn rút ra được điều gì từ đó?

Trả lời:
Trong quá trình phát triển dự án E-Commerce Platform, tôi đã chủ động tự thiết kế và xây dựng một hệ thống đồng bộ trạng thái giỏ hàng (cart state synchronization) và bộ đệm (custom caching) thủ công lưu ở LocalStorage với mong muốn tối ưu hóa trải nghiệm ngoại tuyến (offline support). Tuy nhiên, hệ thống này đã thất bại do phát sinh lỗi bất đồng bộ trạng thái và hiện tượng race condition khi người dùng mở đồng thời nhiều tab trình duyệt để thanh toán các sản phẩm khác nhau.

- Cái giá phải trả: Tôi đã mất gần 2 tuần tập trung phát triển và sửa lỗi liên tục, làm chậm tiến độ tổng thể của dự án và làm suy giảm trải nghiệm người dùng thử (dữ liệu giỏ hàng bị loạn).
- Cách tôi dọn dẹp hậu quả: Tôi quyết định không bỏ cuộc. Tôi chủ động thừa nhận giải pháp tự chế của mình chưa đủ chín chắn, dọn dẹp và xóa bỏ toàn bộ phần mã nguồn tự viết bị lỗi. Sau đó, tôi nghiên cứu kỹ các giải pháp chuẩn của ngành, áp dụng Redux Persist kết hợp với BroadcastChannel API để đồng bộ hóa các tab trình duyệt một cách an sau. Tôi đã thức trắng nhiều đêm để hoàn thành phần viết lại này nhằm đảm bảo dự án kịp hạn bàn giao ban đầu.
- Bài học rút ra: Việc tự xây dựng giải pháp từ đầu là tốt, nhưng không được "tự chế lại bánh xe bò" (reinvent the wheel) một cách mù quáng khi đã có các mẫu kiến trúc hoặc thư viện chuẩn được cộng đồng kiểm chứng. Hơn nữa, việc thiết kế các interface rõ ràng từ đầu sẽ giúp việc đập đi xây lại một phần hệ thống không làm ảnh hưởng đến các module khác.

---

Câu 2: Lần gần đây nhất bạn thật sự đắm chìm sâu vào một điều gì đó là khi nào? Đó là gì, bạn đã đi xa đến đâu với nó, và cuối cùng nó để lại điều gì?

Trả lời:
Lần gần đây nhất tôi đắm chìm sâu là cách đây vài tuần, khi tôi quyết định tự động hóa toàn bộ quy trình cập nhật và sinh file PDF cho các phiên bản CV khác nhau của mình (dự án CV Editor). Tôi không muốn sửa thủ công các file HTML/Word mỗi khi có đợt ứng tuyển mới.

- Tôi đã đi xa đến đâu: Tôi xây dựng một hệ thống CV Editor dạng Single Page Application. Thay vì dừng lại ở giao diện nhập liệu thông thường, tôi viết script Node.js sử dụng Puppeteer (headless browser) để tự động hóa việc render HTML sang PDF chuẩn kích thước A4. Sau đó, tôi cấu hình CI/CD trên GitHub Actions: cứ mỗi khi tôi push cập nhật thông tin CV (dưới dạng các file data JavaScript gọn nhẹ), GitHub Actions sẽ tự động kích hoạt script Puppeteer để xuất ra các file PDF chất lượng cao, đồng thời gọi API Telegram Bot để gửi thẳng tệp PDF mới nhất vào điện thoại của tôi.
- Kết quả để lại: Dự án để lại cho tôi một công cụ làm việc thực tế giúp tiết kiệm hàng giờ căn chỉnh layout mỗi khi ứng tuyển. Quan trọng hơn, tôi đã tích lũy được kiến thức thực chiến về headless browser automation, cách thiết kế CI/CD pipeline tự động hóa hoàn toàn và kỹ năng tối ưu CSS Print Layout mà ít lập trình viên fresher nào chú ý tới.

---

Câu 3: Bạn đã bao giờ tự mình tìm ra điều mà người khác đã bỏ lỡ từ những thông tin thiếu sót, lộn xộn, và tự giải quyết nó chưa? Manh mối là gì, và bạn đã làm gì?

Trả lời:
Khi phát triển dự án Job Portal Platform cùng nhóm bạn, chúng tôi gặp lỗi thời gian phản hồi của API tìm kiếm và lọc việc làm cực kỳ chậm (trên 1.5 giây) khi số lượng bản ghi giả lập (mock data) tăng lên. Cả nhóm bế tắc vì trên máy local với dữ liệu ít, API chạy rất nhanh và không hề có log báo lỗi nào.

- Manh mối: Khi kiểm tra mã nguồn, tôi phát hiện ra API lọc việc làm được viết bằng các truy vấn lồng nhau ($lookup) và tìm kiếm chuỗi bằng Regular Expression không dấu trên MongoDB. Manh mối quan trọng nhất là việc staging database có cấu trúc dữ liệu lộn xộn, thiếu hoàn toàn các chỉ mục (indexes) trên các trường thường xuyên tìm kiếm như "skills" và "title".
- Tôi đã làm gì: Tôi đã tự chạy phân tích kế hoạch thực thi truy vấn bằng lệnh '.explain()' trên cơ sở dữ liệu để chứng minh hệ thống đang phải scan toàn bộ collection (COLLSCAN). Sau đó, tôi tự tái cấu trúc lại schema (denormalize một số trường thông tin ứng viên để giảm thiểu lệnh $lookup lồng nhau), tạo Compound Indexes phù hợp và chuyển cơ chế regex thường sang Text Search của MongoDB. Kết quả là thời gian phản hồi API giảm từ hơn 1.5 giây xuống dưới 150ms mà không cần phải nâng cấp cấu hình máy chủ staging.

---

Tôi xin chân thành cảm ơn Ban tuyển dụng đã dành thời gian đọc hồ sơ của tôi. Tôi rất mong có cơ hội được trao đổi trực tiếp trong buổi phỏng vấn tiếp theo.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079`
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Junior Full-Stack Developer",
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
            skills: "SKILLS"
        },
        objective: "Self-driven Full-Stack JavaScript/TypeScript Developer with a strong passion for system design and product optimization. Capable of making independent architectural decisions, keeping full ownership of source code, and leveraging AI tools (GitHub Copilot, Claude) as accelerators without being dependent. Eager to join Strapbuild to build real-world products and develop innovative AI-agent systems.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "An online job portal connecting candidates with recruiters, featuring secure profile management.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Developed 20+ RESTful APIs using Node.js/Express; optimized MongoDB queries and indexing to achieve sub-150ms response times.",
                    "Designed secure JWT-based authentication combined with granular RBAC to protect resources.",
                    "Built responsive Next.js frontend with Tailwind CSS, optimizing client-side rendering performance."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "A student record system featuring a responsive dashboard for grading and administrative insights.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Applied Functional Programming principles to write clean, easily testable, and maintainable code.",
                    "Structured projects cleanly, optimizing state management in Next.js dashboard to prevent redundant re-renders.",
                    "Utilized Docker to containerize applications, writing custom setup scripts for consistent dev environments."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Docker, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Online store with real-time shopping cart synchronization and inventory checking.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Built React frontend and developed Express APIs for managing orders, checkout, and inventory validation.",
                    "Investigated and resolved race condition sync bugs in cart state when users opened multiple tabs.",
                    "Followed clean Git Workflow (Feature Branching) to organize new features and bug fixes."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git"
            }
        ],
        skills: [
            { cat: "Core Languages", items: "JavaScript (ES6+), TypeScript (Zero 'any' usage), HTML5/CSS3" },
            { cat: "Frontend Stack", items: "React.js, Next.js, Redux, State Management, Responsive Web Design" },
            { cat: "Backend & Database", items: "Node.js (Express), RESTful API, JWT, RBAC, MongoDB (Mongoose), SQL" },
            { cat: "Tools & DevOps", items: "Git (Feature Branching), Docker, Swagger, Postman, Vercel, Render" },
            { cat: "AI Leverage", items: "Effectively leverage Claude/ChatGPT/Copilot for prototyping, debugging, and solution refactoring" },
            { cat: "Soft Skills", items: "Self-driven problem solver, Critical thinking, Remote team collaboration, Clear communication" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Strapbuild_FullStack_Intern_EN",
        coverLetter: `[Subject: Job Application: Junior Full-Stack Developer – Truong Dinh Anh]

Dear Strapbuild Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Junior Full-Stack Developer position at Strapbuild.

As a Full-Stack developer specializing in JavaScript, TypeScript, React, and Node.js, I strive for architectural autonomy, source code ownership, and the effective use of AI tools (Claude, GitHub Copilot) as accelerators rather than crutches. Strapbuild's core culture – "focusing on systemic solutions rather than blaming individuals" and "fair profit sharing based on actual impact" – perfectly aligns with my high sense of responsibility and drive for sustainable development.

I have attached my GitHub profile and my answers to your 3 application questions below:

• GitHub: https://github.com/dinhanhhhh
• Portfolio: https://github.com/dinhanhhhh/cv-editor

---

ANSWERS TO 3 APPLICATION QUESTIONS:

Question 1: Think about something you proactively built but ultimately failed. What did that failure cost you, how did you clean up the mess yourself, and what did you learn?

Answer:
During the development of my E-Commerce Platform project, I decided to design and build a custom local cache and cart state synchronization mechanism using LocalStorage to support offline usage. However, this custom solution failed due to state synchronization bugs and race conditions when users opened multiple browser tabs to purchase different products at the same time.

- The Cost: I spent nearly two weeks coding and debugging, which delayed the overall project timeline and frustrated early test users due to corrupted cart states.
- Cleaning up the mess: I owned my mistake. I admitted that my custom-built solution was premature and completely removed the buggy codebase. I then researched industry-standard solutions, integrating Redux Persist with the BroadcastChannel API to safely synchronize states across browser tabs. I pulled several all-nighters to rewrite the implementation to meet the original deadline.
- Lessons learned: Building things from scratch is valuable, but one must not blindly "reinvent the wheel" when verified patterns and libraries already exist. Furthermore, designing clear interfaces from the start ensures that discarding a part of the system doesn't break other modules.

---

Question 2: When was the last time you were deeply immersed in learning something? What was it, how far did you go, and what did it leave behind?

Answer:
The last time I was deeply immersed was a few weeks ago when I decided to fully automate the PDF rendering and delivery pipeline for my CV versions (the CV Editor project) to avoid manual styling adjustments for different job applications.

- How far I went: I built the CV Editor as a Single Page Application. Rather than stopping at UI rendering, I wrote a Node.js script using Puppeteer (headless browser) to automate exporting the HTML to an A4 PDF. I then set up a CI/CD pipeline using GitHub Actions: whenever I push updates to the CV data files, the workflow runs the Puppeteer script, generates the high-quality PDFs, and triggers a Telegram Bot API to send the fresh files directly to my phone.
- What it left behind: It left me with a highly practical tool that saves hours of formatting layout adjustments. More importantly, it gave me hands-on experience with headless browser automation, custom CI/CD pipelines, and CSS Print Layout optimization.

---

Question 3: Have you ever uncovered something others missed from incomplete, messy information and solved it yourself? What was the clue, and what did you do?

Answer:
While working on a Job Portal Platform project with a team, we encountered an issue where the job searching and filtering API response time was extremely slow (over 1.5 seconds) once mock data grew. The team was stuck because, on local environments with small datasets, it ran instantly without errors.

- The Clue: Checking the codebase, I noticed the search API used nested MongoDB $lookup stages and unindexed regular expressions. The key clue was that the staging database lacked basic compound indexes on frequently queried fields like "skills" and "title".
- What I did: I ran query execution analysis using '.explain()' on the MongoDB database to prove that the database was doing full collection scans (COLLSCAN). I then restructured the schema (denormalizing candidate data to minimize nested lookups), created compound indexes, and switched the text filter to MongoDB Text Search. This reduced API response times from 1.5s to under 150ms.

---

Thank you for your time and consideration. I look forward to the opportunity to discuss my application further in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079`
    }
};

if (typeof module !== 'undefined') {
    module.exports = cvData;
}
