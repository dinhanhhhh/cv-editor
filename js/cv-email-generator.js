/**
 * ===================================================================
 * CV APPLICATION EMAIL GENERATOR (TẠO EMAIL ỨNG TUYỂN 1-CLICK)
 * ===================================================================
 * Tự động phân tích phiên bản CV hiện tại (và JD nếu có) để sinh email
 * ứng tuyển hoàn chỉnh theo form chuẩn đã tối ưu (Tiêu đề + 3 gạch đầu
 * dòng kinh nghiệm đắt giá + chữ ký chuyên nghiệp).
 * 
 * Hỗ trợ 1-click Copy nội dung, Copy Subject, Mở trực tiếp Gmail & mailto.
 */

(function () {
  // Dữ liệu profile ứng viên mặc định
  const CANDIDATE = {
    name: "Trương Đình Anh",
    phone: "0923202861",
    email: "tdinhanh.it@gmail.com",
    github: "https://github.com/dinhanhhhh",
    address: "Thủ Đức, TP. Hồ Chí Minh",
    school: "Đại học Mở TP.HCM"
  };

  // Ánh xạ thông tin công ty và vị trí từ cvVersion
  const VERSION_MAP = {
    cgecom: {
      company: "CÔNG TY TNHH CG ECOM",
      position: "Full Stack Developer",
      recipient: "Anh/Chị phụ trách tuyển dụng",
      contact: "",
      profileType: "ecommerce_fullstack"
    },
    favolist5: {
      company: "FAVOLIST5 ASIA",
      position: "Intern QA/QC Tester",
      recipient: "Chị Giang cùng Bộ phận Tuyển dụng",
      contact: "giang.ha@favolist5.com",
      profileType: "qa_tester"
    },
    banviet: {
      company: "TRƯỜNG ĐẠI HỌC GIA ĐỊNH",
      position: "Chuyên viên IT / Web Developer",
      recipient: "Hội đồng Tuyển dụng",
      contact: "",
      profileType: "it_support_web"
    },
    digifytech: {
      company: "DIGIFYTECH",
      position: "Backend Developer Intern",
      recipient: "Bộ phận Tuyển dụng",
      contact: "",
      profileType: "backend_dev"
    },
    onhandbi: {
      company: "ON HAND BI",
      position: "Full Stack Developer",
      recipient: "Anh/Chị phụ trách tuyển dụng",
      contact: "",
      profileType: "ecommerce_fullstack"
    },
    lienkhuong: {
      company: "CẢNG HÀNG KHÔNG LIÊN KHƯƠNG",
      position: "Kỹ sư CNTT",
      recipient: "Hội đồng Tuyển dụng",
      contact: "",
      profileType: "it_support_web"
    },
    "webdev-intern": {
      company: "Hiring Team",
      position: "Web Development Intern",
      recipient: "Hiring Manager",
      contact: "",
      profileType: "webdev_intern"
    }
  };

  // State của modal
  let currentTone = "tech"; // 'tech' | 'short' | 'warm'
  let currentLang = "vi";   // 'vi' | 'en'

  // ----------------------------------------------------
  // Helpers
  // ----------------------------------------------------
  function getCurrentCvKey() {
    if (window.cvVersion) return window.cvVersion;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("type") || "default";
  }

  function getCandidateInfo() {
    let name = CANDIDATE.name;
    let phone = CANDIDATE.phone;
    let email = CANDIDATE.email;
    let github = CANDIDATE.github;

    if (window.cvData && window.cvData[currentLang]) {
      const data = window.cvData[currentLang];
      if (data.name) name = data.name;
      if (Array.isArray(data.contact)) {
        data.contact.forEach(c => {
          if (c.icon === "phone") phone = c.text;
          if (c.icon === "email") email = c.text;
          if (c.icon === "github") github = c.link || ("https://" + c.text);
        });
      }
    }
    return { name, phone, email, github };
  }

  // ----------------------------------------------------
  // Bullet Points Generator (Trích xuất 3 điểm mạnh nhất)
  // ----------------------------------------------------
  function generateHighlights(profileType, jdText, tone, lang) {
    const jdLower = (jdText || "").toLowerCase();
    const isQa = profileType === "qa_tester" || jdLower.includes("qa") || jdLower.includes("tester") || jdLower.includes("test case");

    if (lang === "vi") {
      if (isQa) {
        if (tone === "short") {
          return [
            "Manual & API Testing: Thiết kế test case, kiểm thử chức năng và test 15+ RESTful API endpoints bằng Postman tại Công nghệ TAMI.",
            "Database (SQL): Nắm vững truy vấn PostgreSQL, MongoDB để trực tiếp kiểm tra và đối soát tính toàn vẹn của dữ liệu.",
            "Ứng dụng AI & Tác phong: Dùng AI hỗ trợ sinh test data, rà soát edge cases; sẵn sàng làm việc linh hoạt (full-time/part-time >= 4 ngày/tuần)."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm kiểm thử thực tế: Thiết kế test case chặt chẽ, kiểm thử luồng nghiệp vụ và hơn 15 API endpoints bằng Postman tại Công ty TNHH Công nghệ TAMI.",
            "Đối soát dữ liệu chuẩn xác: Thành thạo truy vấn SQL trên PostgreSQL và MongoDB, giúp phát hiện sớm các lỗi dữ liệu trước khi bàn giao.",
            "Tác phong cầu thị & Năng động: Nhạy bén áp dụng công cụ AI tăng tốc độ test, tinh thần trách nhiệm cao và sẵn sàng đồng hành lâu dài cùng Quý công ty."
          ];
        } else {
          // tech
          return [
            "Manual & API Testing: Thành thạo thiết kế test scenario, boundary value analysis và kiểm thử chức năng cho 15+ RESTful API endpoints bằng Postman trong dự án thực tế tại Công nghệ TAMI.",
            "Truy vấn cơ sở dữ liệu (SQL): Nắm vững cú pháp SQL trên PostgreSQL và MongoDB để trực tiếp kiểm tra, đối soát tính toàn vẹn và nhất quán của dữ liệu.",
            "Ứng dụng AI nâng cao năng suất: Chủ động kết hợp ChatGPT và Gemini để sinh dữ liệu mẫu, rà soát edge cases và cải thiện độ bao phủ của bộ test."
          ];
        }
      } else {
        // Developer / Fullstack / Backend / Frontend
        if (tone === "short") {
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai 15+ RESTful API endpoints, thiết kế cơ sở dữ liệu PostgreSQL trên Supabase Cloud tại Cty TNHH Công nghệ TAMI.",
            "Dự án hoàn chỉnh: Tự phát triển nền tảng E-commerce với React/Tailwind CSS và Node.js/Express/MongoDB, đóng gói Docker, triển khai CI/CD tối ưu tải trang dưới 2s.",
            "Kỹ năng & Tác phong: Thành thạo Git, sẵn sàng hỗ trợ các tác vụ IT nội bộ và có thể nhận việc ngay khi có yêu cầu."
          ];
        } else if (tone === "warm") {
          return [
            "Kinh nghiệm dự án thực tế: Đã tham gia phát triển hệ thống và xử lý hơn 15 API endpoints, tích hợp xác thực bảo mật Google OAuth tại Công ty TNHH Công nghệ TAMI.",
            "Năng lực tự học & Sản phẩm thực tế: Tự xây dựng trọn vẹn nền tảng web ứng dụng React và Node.js, luôn chú trọng trải nghiệm người dùng và hiệu năng mã nguồn.",
            "Tinh thần trách nhiệm & Cầu tiến: Luôn chủ động giải quyết bài toán kỹ thuật, sẵn sàng học hỏi công nghệ mới và đóng góp hết mình cho sự phát triển của công ty."
          ];
        } else {
          // tech
          return [
            "Kinh nghiệm thực tế: Xây dựng và triển khai hơn 15 RESTful API endpoints, thiết kế database PostgreSQL trên Supabase Cloud, tích hợp xác thực Google (NextAuth) trong dự án thực tế tại Công ty TNHH Công nghệ TAMI.",
            "Dự án E-commerce / Web App: Tự phát triển hoàn chỉnh một nền tảng thương mại điện tử (danh mục sản phẩm, giỏ hàng, checkout) với React/Tailwind CSS ở frontend và Node.js/Express/MongoDB ở backend, đóng gói Docker và triển khai CI/CD.",
            "Nền tảng kỹ thuật & AI: Nắm vững JavaScript/TypeScript, RESTful API, Docker, chủ động ứng dụng AI nâng cao năng suất code và linh hoạt hỗ trợ kỹ thuật IT nội bộ."
          ];
        }
      }
    } else {
      // English
      if (isQa) {
        return [
          "Manual & API Testing: Proficient in writing test cases, test scenarios, and executing testing for 15+ RESTful API endpoints using Postman at TAMI Technology.",
          "Database Verification (SQL): Strong SQL skills on PostgreSQL and MongoDB to query and ensure data integrity.",
          "AI-Assisted & Proactive: Leveraged AI tools (ChatGPT, Gemini) to generate mock data and edge case suites; ready for full-time/part-time employment immediately."
        ];
      } else {
        return [
          "Hands-on Experience: Designed and deployed 15+ RESTful API endpoints, managed PostgreSQL on Supabase Cloud, and integrated Google OAuth at TAMI Technology.",
          "Full-Stack E-commerce Project: Built an end-to-end e-commerce platform with React, Node.js, Express, MongoDB, containerized with Docker and deployed via CI/CD.",
          "Technical Foundation & Problem Solving: Strong command of modern JavaScript/TypeScript, Git workflow, AI coding assistants, and ready to adapt quickly to your tech stack."
        ];
      }
    }
  }

  // ----------------------------------------------------
  // Email Generator Function
  // ----------------------------------------------------
  function generateEmail(opts) {
    const { company, position, recipient, jdText, tone, lang } = opts;
    const candidate = getCandidateInfo();
    const highlights = generateHighlights(opts.profileType, jdText, tone, lang);

    const compName = company || (lang === "vi" ? "Quý công ty" : "your company");
    const posTitle = position || (lang === "vi" ? "Vị trí tuyển dụng" : "the position");
    const recName = recipient || (lang === "vi" ? `Bộ phận Tuyển dụng ${compName}` : `Hiring Team at ${compName}`);

    if (lang === "vi") {
      const subject = `[Ứng tuyển] ${posTitle} - ${candidate.name}`;
      
      let intro = `Kính gửi ${recName},\n\nQua thông tin tuyển dụng vị trí ${posTitle} của Quý công ty, em nhận thấy yêu cầu công việc rất phù hợp với định hướng và nền tảng kỹ thuật của bản thân. Em xin phép được gửi hồ sơ ứng tuyển vào vị trí này.`;

      let pointsHeader = "Một số điểm nổi bật trong kinh nghiệm và kỹ năng của em:";
      let pointsText = highlights.map(h => `• ${h}`).join("\n");

      let availability = "Em có thể sắp xếp thời gian làm việc linh hoạt (Full-time / Part-time) và sẵn sàng nhận việc ngay khi Quý công ty có yêu cầu.";
      let attachment = `Em xin gửi kèm CV chi tiết cùng đường dẫn Portfolio/GitHub (${candidate.github}) để Anh/Chị tiện tham khảo thêm về các sản phẩm em đã thực hiện.`;

      let closing = `Em rất mong có cơ hội được trao đổi trực tiếp cùng Anh/Chị trong buổi phỏng vấn sắp tới.\n\nKính chúc Anh/Chị một ngày làm việc hiệu quả và nhiều niềm vui!`;

      let signOff = `Trân trọng,\n${candidate.name}\nSố điện thoại: ${candidate.phone}\nEmail: ${candidate.email}\nGitHub: ${candidate.github}`;

      const body = `${intro}\n\n${pointsHeader}\n\n${pointsText}\n\n${availability}\n${attachment}\n\n${closing}\n\n${signOff}`;

      return { subject, body };
    } else {
      const subject = `[Job Application] ${posTitle} - ${candidate.name}`;

      let intro = `Dear ${recName},\n\nI am writing to express my strong interest in the ${posTitle} opening at ${compName}. With my technical background and hands-on project experience, I believe I can make an immediate and positive contribution to your team.`;

      let pointsHeader = "Key highlights of my qualifications:";
      let pointsText = highlights.map(h => `• ${h}`).join("\n");

      let availability = "I am available to start immediately and excited to commit full-time to the team.";
      let attachment = `I have attached my detailed CV and would like to invite you to review my GitHub portfolio at ${candidate.github} for live demos and code samples.`;

      let closing = `Thank you for your time and consideration. I look forward to the opportunity to discuss my qualifications further in an interview.`;

      let signOff = `Sincerely,\n${candidate.name}\nPhone: ${candidate.phone}\nEmail: ${candidate.email}\nGitHub: ${candidate.github}`;

      const body = `${intro}\n\n${pointsHeader}\n\n${pointsText}\n\n${availability}\n${attachment}\n\n${closing}\n\n${signOff}`;

      return { subject, body };
    }
  }

  // ----------------------------------------------------
  // UI & Event Handlers
  // ----------------------------------------------------
  function openModal(preset) {
    const overlay = document.getElementById("emailGenModalOverlay");
    if (!overlay) return;

    // Detect preset or current cv
    const cvKey = getCurrentCvKey();
    const mapInfo = VERSION_MAP[cvKey] || {};

    // Check if tracker has job
    let trackerJob = null;
    if (window.cvTracker && Array.isArray(window.cvTracker.jobs)) {
      trackerJob = window.cvTracker.jobs.find(j => j.cvType === cvKey);
    }

    const company = (preset && preset.company) || (trackerJob && trackerJob.company) || mapInfo.company || "";
    const position = (preset && preset.position) || (trackerJob && trackerJob.position) || mapInfo.position || (window.cvData && window.cvData[currentLang] && window.cvData[currentLang].title) || "Developer";
    const recipient = (preset && preset.recipient) || mapInfo.recipient || "Anh/Chị phụ trách tuyển dụng";
    const contact = (preset && preset.contact) || (trackerJob && trackerJob.contact) || mapInfo.contact || "";
    const jdText = (preset && preset.jdText) || (trackerJob && trackerJob.jdText) || "";

    // Fill inputs
    const compInput = document.getElementById("egInputCompany");
    const posInput = document.getElementById("egInputPosition");
    const recInput = document.getElementById("egInputRecipient");
    const emailInput = document.getElementById("egInputEmail");
    const jdInput = document.getElementById("egInputJd");

    if (compInput) compInput.value = company;
    if (posInput) posInput.value = position;
    if (recInput) recInput.value = recipient;
    if (emailInput) emailInput.value = contact;
    if (jdInput) jdInput.value = jdText;

    // Set active tone and lang buttons
    updateToneButtons();
    updateLangButtons();

    // Rebuild email
    rebuildEmail();

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    const overlay = document.getElementById("emailGenModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
  }

  function rebuildEmail() {
    const company = (document.getElementById("egInputCompany")?.value || "").trim();
    const position = (document.getElementById("egInputPosition")?.value || "").trim();
    const recipient = (document.getElementById("egInputRecipient")?.value || "").trim();
    const jdText = (document.getElementById("egInputJd")?.value || "").trim();

    const cvKey = getCurrentCvKey();
    const mapInfo = VERSION_MAP[cvKey] || {};

    const result = generateEmail({
      company,
      position,
      recipient,
      jdText,
      tone: currentTone,
      lang: currentLang,
      profileType: mapInfo.profileType
    });

    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    if (subjectEl) subjectEl.value = result.subject;
    if (bodyEl) bodyEl.value = result.body;
  }

  function updateToneButtons() {
    document.querySelectorAll(".eg-tone-btn").forEach(btn => {
      if (btn.getAttribute("data-tone") === currentTone) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function updateLangButtons() {
    document.querySelectorAll(".eg-lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === currentLang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function copySubject() {
    const subjectEl = document.getElementById("egSubjectOutput");
    if (!subjectEl || !subjectEl.value) return;

    navigator.clipboard.writeText(subjectEl.value).then(() => {
      const btn = document.getElementById("egCopySubjectBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "✅ Đã chép!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }
    });
  }

  function copyBody() {
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl || !bodyEl.value) return;

    navigator.clipboard.writeText(bodyEl.value).then(() => {
      const btn = document.getElementById("egCopyBodyBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "✅ Đã sao chép nội dung!";
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  }

  function copyAll() {
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");
    if (!bodyEl) return;

    const full = `Tiêu đề: ${subjectEl ? subjectEl.value : ""}\n\n${bodyEl.value}`;
    navigator.clipboard.writeText(full).then(() => {
      const btn = document.getElementById("egCopyAllBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "✅ Đã sao chép toàn bộ!";
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  }

  function openGmail() {
    const emailInput = document.getElementById("egInputEmail");
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    const to = (emailInput?.value || "").trim();
    const su = subjectEl?.value || "";
    const body = bodyEl?.value || "";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }

  function openMailto() {
    const emailInput = document.getElementById("egInputEmail");
    const subjectEl = document.getElementById("egSubjectOutput");
    const bodyEl = document.getElementById("egBodyOutput");

    const to = (emailInput?.value || "").trim();
    const su = subjectEl?.value || "";
    const body = bodyEl?.value || "";

    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  // ----------------------------------------------------
  // Init
  // ----------------------------------------------------
  function init() {
    // Nút mở trên thanh công cụ
    const openBtn = document.getElementById("emailGenBtn");
    if (openBtn) {
      openBtn.onclick = () => openModal();
    }

    // Nút đóng
    const closeBtn = document.getElementById("emailGenCloseBtn");
    if (closeBtn) closeBtn.onclick = closeModal;

    const overlay = document.getElementById("emailGenModalOverlay");
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
      };
    }

    // Tone buttons
    document.querySelectorAll(".eg-tone-btn").forEach(btn => {
      btn.onclick = () => {
        currentTone = btn.getAttribute("data-tone") || "tech";
        updateToneButtons();
        rebuildEmail();
      };
    });

    // Lang buttons
    document.querySelectorAll(".eg-lang-btn").forEach(btn => {
      btn.onclick = () => {
        currentLang = btn.getAttribute("data-lang") || "vi";
        updateLangButtons();
        rebuildEmail();
      };
    });

    // Inputs change
    ["egInputCompany", "egInputPosition", "egInputRecipient", "egInputJd", "egInputEmail"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.oninput = rebuildEmail;
      }
    });

    // Action buttons
    const copySubjectBtn = document.getElementById("egCopySubjectBtn");
    if (copySubjectBtn) copySubjectBtn.onclick = copySubject;

    const copyBodyBtn = document.getElementById("egCopyBodyBtn");
    if (copyBodyBtn) copyBodyBtn.onclick = copyBody;

    const copyAllBtn = document.getElementById("egCopyAllBtn");
    if (copyAllBtn) copyAllBtn.onclick = copyAll;

    const gmailBtn = document.getElementById("egGmailBtn");
    if (gmailBtn) gmailBtn.onclick = openGmail;

    const mailtoBtn = document.getElementById("egMailtoBtn");
    if (mailtoBtn) mailtoBtn.onclick = openMailto;

    // Phím tắt ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay && overlay.style.display !== "none") {
        closeModal();
      }
    });
  }

  // Export API
  window.cvEmailGen = {
    openModal,
    closeModal,
    rebuildEmail,
    generateEmail
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
