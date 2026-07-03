// ===================================
// CV DATA - VITECH DIGITAL INTERN DEVELOPER (JAVASCRIPT / NEXTJS / REACT NATIVE)
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Intern Developer (JS / NextJS / React Native)",
    contact: [
      { icon: "phone", text: "0349421079" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thủ Đức, TP. Hồ Chí Minh" },
    ],
    sections: {
      objective: "TÓM TẮT CHUYÊN MÔN",
      education: "HỌC VẤN",
      projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
      skills: "KỸ NĂNG & CÔNG CỤ",
    },
    objective:
      "Thực tập sinh Lập trình viên với nền tảng vững vàng về JavaScript (ES6+), ReactJS, Next.js và TypeScript, định hướng phát triển chuyên sâu cả Web và Mobile (React Native). Đã có kinh nghiệm tự xây dựng dự án Next.js 15 kết nối RESTful API, tối ưu giao diện responsive mượt mà và xử lý dữ liệu JSON. Nắm vững quy trình quản lý mã nguồn bằng Git/GitHub, có tư duy phối hợp tốt với UI/UX Designer để triển khai giao diện theo thiết kế. Sẵn sàng học hỏi công nghệ mới, cam kết tuân thủ lộ trình đào tạo của Vitech Digital để đóng góp giá trị thực tế cho các dự án của công ty.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Ứng dụng web hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Lập trình giao diện người dùng (Frontend) responsive bằng ReactJS, Next.js 15 và Tailwind CSS mượt mà trên các thiết bị Mobile, Tablet và Desktop.",
          "Phối hợp với UI/UX Designer để phân tích và triển khai chi tiết giao diện từ thiết kế Figma, bảo đảm tính nhất quán trải nghiệm người dùng.",
          "Kết nối và làm việc với API từ Backend (REST API, JSON) để xử lý các luồng đăng nhập, nộp hồ sơ và cập nhật thông tin ứng viên.",
          "Sử dụng Git/GitHub để quản lý mã nguồn, phối hợp giải quyết xung đột (conflict) hiệu quả và thực hiện deploy ứng dụng lên Vercel.",
          "Tìm hiểu cơ bản về React Native và cấu trúc StyleSheet, chuẩn bị cho định hướng tối ưu hóa trải nghiệm ứng dụng trên di động."
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Redux Toolkit, Tailwind CSS, RESTful API, Git, Figma",
      },
      {
        name: "HỆ THỐNG QUẢN LÝ SINH VIÊN (STUDENT MANAGEMENT SYSTEM)",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị hồ sơ sinh viên, đăng ký khóa học và Dashboard trực quan hóa dữ liệu cho quản trị viên.",
        github:
          "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng dashboard quản trị responsive bằng Next.js và Tailwind CSS với các thao tác CRUD và giao tiếp dữ liệu thời gian thực.",
          "Tích hợp RESTful API backend (Node.js/Express), kiểm thử hiệu năng và độ ổn định của API bằng Postman.",
          "Tham gia kiểm thử, phát hiện lỗi giao diện/logic và thực hiện tối ưu hóa hiệu năng tải trang phía Client.",
          "Áp dụng cơ chế access token và refresh token cho luồng xác thực bảo mật, xử lý các trạng thái dữ liệu (Loading, Empty, Error) trên giao diện."
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Node.js, Express, MongoDB, Swagger, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "Giao diện & Frontend",
        items:
          "HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Lập trình di động",
        items:
          "React Native (đang tìm hiểu nền tảng), Expo CLI, StyleSheet, State & Props",
      },
      {
        cat: "API & Quản lý State",
        items:
          "RESTful API Integration, JSON data processing, Redux Toolkit, Context API, React Hooks, Postman",
      },
      {
        cat: "Cơ sở dữ liệu & Tools",
        items:
          "MongoDB, PostgreSQL, MySQL, Node.js (Express) cơ bản, Git/GitHub, VS Code, Figma (đọc/xuất tài nguyên thiết kế)",
      },
      {
        cat: "Kỹ năng & Lợi thế",
        items:
          "Tư duy logic tốt, khả năng đọc hiểu tài liệu kỹ thuật bằng tiếng Anh tốt, chủ động học hỏi và có trách nhiệm cao trong công việc",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Intern_Developer_Vitech",
    coverLetter: `[Tiêu đề Email: [Intern Developer] - Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng Công ty TNHH Đầu tư và Phát triển Công nghệ Vitech Digital,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn ứng tuyển vào vị trí Thực tập sinh Lập trình viên (JavaScript / NextJS / React Native) tại Quý công ty.

Qua tìm hiểu về lộ trình đào tạo 3 giai đoạn của Vitech Digital, tôi nhận thấy đây là một lộ trình rất thực tế và bài bản: bắt đầu từ củng cố HTML/CSS/JS ES6+ và REST API (Giai đoạn 1), đi qua ReactJS/NextJS (Giai đoạn 2) và tiến tới làm chủ React Native để phát triển sản phẩm di động thực tế (Giai đoạn 3). Tôi tự tin rằng nền tảng kỹ năng hiện tại của mình hoàn toàn tương thích và sẵn sàng đáp ứng tốt lộ trình đào tạo này:

- Về JavaScript, ReactJS và NextJS: Tôi đã chủ động xây dựng và hoàn thành các sản phẩm thực tế như hệ thống "Job Portal" và "Student Management System". Tôi nắm chắc cách lập trình giao diện responsive, xử lý đồng bộ state, giao tiếp API (REST, JSON) và làm việc chuyên nghiệp với Git/GitHub.
- Về Phối hợp & Thiết kế: Tôi quen thuộc với việc đọc và xuất tài nguyên từ Figma, có khả năng chuyển đổi thiết kế thành giao diện thực tế chuẩn xác và tối ưu trải nghiệm người dùng.
- Định hướng React Native: Bản thân tôi đang nghiên cứu nền tảng phát triển ứng dụng di động với React Native và Expo CLI. Tôi rất mong muốn được rèn luyện trực tiếp dưới sự dẫn dắt của các Mentor giàu kinh nghiệm tại Vitech Digital trong Giai đoạn 3 để hoàn thiện kỹ năng của mình.

Tôi có thể sắp xếp thời gian làm việc toàn thời gian (09:00 - 18:00 từ Thứ 2 đến Thứ 6) hoặc linh hoạt kết hợp làm việc tại văn phòng và làm việc từ xa (WFH) để đảm bảo chất lượng công việc tốt nhất. Với tinh thần tự học cao, chủ động và có trách nhiệm, tôi cam kết nỗ lực hết mình để đóng góp giá trị cho các sản phẩm của Vitech Digital và hướng tới mục tiêu đồng hành lâu dài cùng công ty sau kỳ thực tập.

Tôi xin gửi kèm CV để Quý công ty tiện tham khảo. Rất mong nhận được phản hồi và có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Tôi xin chân thành cảm ơn!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Intern Developer (JS / NextJS / React Native)",
    contact: [
      { icon: "phone", text: "0349421079" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thu Duc, Ho Chi Minh City" },
    ],
    sections: {
      objective: "PROFESSIONAL SUMMARY",
      education: "EDUCATION",
      projects: "TECHNICAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Software Developer Intern with a solid foundation in JavaScript (ES6+), ReactJS, Next.js, and TypeScript, aiming to specialize in Web and Mobile (React Native) development. Experienced in building Next.js 15 projects, integrating RESTful APIs, and handling JSON data. Well-versed in version control using Git/GitHub, with a collaborative mindset to work with UI/UX designers on responsive interface implementations. Ready to learn new technologies and align with Vitech Digital's training roadmap to contribute real value to corporate projects.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A web application supporting job listings, online applications, and applicant profile management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed fully responsive React/Next.js 15 web interfaces with Tailwind CSS across Mobile, Tablet, and Desktop screens.",
          "Collaborated with UI/UX designers to inspect and implement interface designs from Figma assets, ensuring UX consistency.",
          "Integrated RESTful APIs to process JSON data for authentication, job applications, and user profile management workflows.",
          "Utilized Git/GitHub for version control, managing branch conflicts, and successfully deployed to Vercel.",
          "Studied the React Native foundation and basic StyleSheet structure to prepare for mobile optimization initiatives."
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Redux Toolkit, Tailwind CSS, RESTful API, Git, Figma",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "A full-stack administrative system for student records, course registration, and admin data dashboards.",
        github:
          "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a responsive admin dashboard with Next.js and Tailwind CSS, enabling CRUD workflows and real-time data handling.",
          "Integrated RESTful API backend (Node.js/Express) and performed API endpoint testing using Postman.",
          "Participated in testing, debugging UI/logic errors, and optimizing client-side page rendering performance.",
          "Implemented access token and refresh token authentication flows, and managed client-side data states (Loading, Empty, Error)."
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Node.js, Express, MongoDB, Swagger, Postman, Git",
      },
    ],
    skills: [
      {
        cat: "UI & Frontend",
        items:
          "HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Mobile Development",
        items:
          "React Native (learning foundation), Expo CLI, StyleSheet, State & Props",
      },
      {
        cat: "API & State Management",
        items:
          "RESTful API Integration, JSON data processing, Redux Toolkit, Context API, React Hooks, Postman",
      },
      {
        cat: "Databases & Tools",
        items:
          "MongoDB, PostgreSQL, MySQL, basic Node.js (Express), Git/GitHub, VS Code, Figma (asset extraction)",
      },
      {
        cat: "Key Strengths",
        items:
          "Logical thinking, good reading comprehension of English technical documents, self-motivated learner, and high sense of responsibility",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Intern_Developer_Vitech",
    coverLetter: `[Subject: Job Application: Intern Developer – Truong Dinh Anh]

Dear Vitech Digital Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Intern Developer (JavaScript / NextJS / React Native) position at Vitech Digital.

By reviewing Vitech Digital's structured 3-phase training roadmap (from HTML/CSS/JS and REST APIs to ReactJS/NextJS, and finally React Native development), I find myself highly compatible and ready to align with this learning curve:

- JavaScript, ReactJS, and NextJS: I have built and deployed practical applications such as the "Job Portal" and "Student Management System". I have mastered responsive layouts, state synchronization, API integration (REST, JSON), and collaborative Git workflows.
- UI/UX Collaboration: I am experienced in inspecting Figma designs and converting them into high-fidelity web pages with a focus on UI details.
- React Native Aspiration: I have proactively studied React Native and Expo CLI concepts. I am eager to get hands-on experience under the mentorship of senior developers at Vitech Digital during Phase 3 of the roadmap to build real-world mobile apps.

I am fully available to work from 09:00 to 18:00, Monday to Friday, and flexible to work on-site or hybrid (WFH) to deliver optimal results. Eager to learn, proactive, and highly committed, I look forward to contributing to Vitech Digital's projects and aim to achieve a full-time position post-internship.

Please find my attached CV. I look forward to the opportunity of discussing my qualifications in an interview.

Sincerely,

Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
