/**
 * ===================================================================
 * JOB APPLICATION TRACKER (TIẾN ĐỘ ỨNG TUYỂN)
 * ===================================================================
 * Quản lý danh sách các công ty và vị trí đã nộp CV, lưu trữ persistent
 * trong localStorage, hỗ trợ đổi trạng thái nhanh, lọc tìm kiếm,
 * sao lưu/khôi phục dữ liệu JSON và liên kết trực tiếp tới bản CV.
 */

(function () {
  const STORAGE_KEY = "cv_job_tracker_data";

  // Danh sách trạng thái chuẩn
  const STATUSES = {
    applied: { key: "applied", label: "📝 Đã nộp", badgeClass: "status-applied", color: "#2563eb" },
    reviewing: { key: "reviewing", label: "⏳ Chờ phản hồi", badgeClass: "status-reviewing", color: "#d97706" },
    interviewing: { key: "interviewing", label: "🎯 Phỏng vấn", badgeClass: "status-interviewing", color: "#7c3aed" },
    offered: { key: "offered", label: "🎉 Trúng tuyển", badgeClass: "status-offered", color: "#059669" },
    rejected: { key: "rejected", label: "❌ Từ chối", badgeClass: "status-rejected", color: "#dc2626" },
  };

  // Dữ liệu mẫu khởi đầu nếu chưa có gì
  const DEFAULT_SEED_DATA = [
    {
      id: "job_octosoft_seed",
      company: "OCTO SOFTWARE",
      position: "Full Stack Developer",
      cvType: "octosoft",
      cvLabel: "🐙 Octo Software Fullstack",
      appliedDate: "2026-09-23",
      status: "applied",
      contact: "tuyendung@octosoft.co",
      notes: "343 Phạm Ngũ Lão, P. Bến Thành, Q.1. Fullstack web + API + CSDL (PostgreSQL, MongoDB). Tích hợp AI / AI Agent (flowagentica.com). Yêu cầu gửi CV + Bảng điểm.",
      jobUrl: "https://flowagentica.com",
      jdText: `OCTO SOFTWARE TUYỂN DỤNG\nFULL STACK DEVELOPER\nLàm việc tại: 343 Phạm Ngũ Lão, Phường Bến Thành, TP.HCM\nKinh nghiệm: Tối thiểu 02 năm\n\nMô tả công việc:\n• Tham gia phân tích yêu cầu, thiết kế và phát triển các tính năng cho hệ thống phần mềm của công ty.\n• Phát triển giao diện web, backend, cơ sở dữ liệu và API.\n• Tích hợp API bên thứ ba, các công cụ AI hoặc AI Agent vào sản phẩm khi có yêu cầu.\n• Kiểm tra, xử lý lỗi, tối ưu hiệu suất và đảm bảo các yêu cầu bảo mật cơ bản của hệ thống.\n• Quản lý mã nguồn bằng Git, tham gia code review và viết tài liệu kỹ thuật cần thiết.\n• Phối hợp với các bộ phận liên quan để đảm bảo tiến độ và chất lượng sản phẩm.\n\nYêu cầu công việc:\nMust have:\n• Tốt nghiệp Cao đẳng/Đại học chuyên ngành Công nghệ Thông tin, Kỹ thuật Phần mềm hoặc ngành liên quan.\n• Có kinh nghiệm tối thiểu từ 2 năm làm phát triển ứng dụng / website.\n• Có kinh nghiệm làm việc với MySQL, PostgreSQL hoặc MongoDB.\n• Sử dụng tốt Git; có khả năng đọc code, debug và xử lý lỗi.\n• Có hiểu biết hoặc kinh nghiệm ứng dụng AI/AI Agent trong quá trình phát triển phần mềm.\n\nNice to have:\n• Phân tích và ra quyết định.\n• Quản lý yêu cầu và ưu tiên yêu cầu.\n• Lập kế hoạch: Kế hoạch kinh doanh, triển khai, phát triển sản phẩm...\n• Yêu thích và định hướng lâu dài, làm việc gắn bó trong lĩnh vực phát triển sản phẩm công nghệ.\n\nQuyền lợi:\n• Mức thu nhập cạnh tranh, thỏa thuận theo năng lực. Xét tăng lương 2 lần mỗi năm.\n• Tham gia đầy đủ BHXH, BHYT, BHTN và các chế độ cho người lao động theo quy định.\n• Thưởng sinh nhật, các ngày lễ, lương T13 theo quy định của công ty.\n• Nghỉ lễ, Tết và nghỉ phép 12 ngày/năm theo chính sách của công ty.\n\nỨNG TUYỂN NGAY:\nGửi CV và bảng điểm: tuyendung@octosoft.co\nTiêu đề: [Full Stack Developer] - Họ và tên`
    },
    {
      id: "job_namphuong_seed",
      company: "NAM PHUONG TECHNOLOGY",
      position: "Thực tập sinh Backend",
      cvType: "namphuong",
      cvLabel: "⚡ Nam Phương Tech BE Intern",
      appliedDate: "2026-09-19",
      status: "reviewing",
      contact: "career@namphuongso.com / 076 381 3891 (Ms. Quỳnh)",
      notes: "Tân Bình. Fulltime T2-T6 (08h-17h30). Hỗ trợ phát triển BE Web/App, API, CSDL. Lợi thế: C#, ASP.NET Core.",
      jobUrl: "",
      jdText: `NAM PHUONG TECHNOLOGY TUYỂN DỤNG\n1. Vị trí: Thực tập sinh Backend\n2. Hình thức làm việc: Fulltime từ thứ 2 đến thứ 6 (08:00 - 12h; 13h30 - 17h30)\n3. Địa điểm làm việc: Tòa nhà Vietnamairlines, 108 Hồng Hà, P2, Tân Bình, TP. HCM\n\nMô tả công việc:\n• Tham gia hỗ trợ phát triển hệ thống Back-end cho các dự án Web/App của công ty dưới sự hướng dẫn của Mentor.\n• Hỗ trợ xây dựng API, xử lý các chức năng và logic nghiệp vụ cơ bản của hệ thống.\n• Tham gia thiết kế, xây dựng và tối ưu cơ sở dữ liệu.\n• Phối hợp với BA, UI/UX Designer, Front-end và Mobile Developer để triển khai các tính năng theo yêu cầu dự án.\n• Hỗ trợ kiểm thử, bảo trì và nâng cấp các hệ thống hiện có.\n\nYêu cầu:\n• Sinh viên năm cuối hoặc mới tốt nghiệp Đại học/Cao đẳng chuyên ngành Công nghệ Thông tin, Khoa học Máy tính, Hệ thống Thông tin hoặc các ngành liên quan.\n• Có kiến thức cơ bản về lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật.\n• Có kiến thức hoặc đã thực hành với .NET (C#, ASP.NET Core) là một lợi thế.\n• Có tinh thần trách nhiệm, tư duy logic tốt và khả năng làm việc nhóm.\n\nQuyền lợi:\n• Chủ động học hỏi, ham tìm hiểu công nghệ mới.\n• Có cơ hội tham gia vào các dự án thực tế của công ty.\n• Môi trường làm việc chuyên nghiệp, thân thiện, hỗ trợ phát triển kỹ năng chuyên môn.\n• Được tiếp cận và học hỏi các công nghệ mới trong quá trình làm việc.\n• Có cơ hội trở thành nhân viên chính thức sau thời gian thực tập.\n• Hỗ trợ phụ cấp thực tập theo năng lực.\n\nCách ứng tuyển:\n• Gửi CV về địa chỉ email: career@namphuongso.com\n• Tiêu đề email: [Ứng tuyển Intern BE – Họ và tên]\n• Liên hệ: 076 381 3891 (Ms. Quỳnh)`
    },
    {
      id: "job_cgecom_seed",
      company: "CÔNG TY TNHH CG ECOM",
      position: "Full Stack Developer",
      cvType: "cgecom",
      cvLabel: "🛒 CG Ecom Fullstack",
      appliedDate: "2026-09-17",
      status: "interviewing",
      contact: "Email tuyển dụng",
      notes: "Gò Vấp. Yêu cầu React/Node, E-commerce, Docker, CI/CD, IT Support nội bộ.",
      jobUrl: "",
      jdText: `[GÒ VẤP] CÔNG TY TNHH CG ECOM\nTUYỂN DỤNG FULL STACK DEVELOPER\nĐịa chỉ: 313/17/6A Phan Huy Ích, An Hội Tây, TP. Hồ Chí Minh (khu vực Gò Vấp cũ)\n\nMÔ TẢ CÔNG VIỆC:\n- Phân tích yêu cầu và thiết kế, phát triển Website theo nhu cầu thực tế của Công ty.\n- Phát triển Front-end & Back-end, đảm bảo giao diện responsive, dễ sử dụng và tối ưu hiệu năng.\n- Xây dựng và tích hợp RESTful API, kết nối các hệ thống/dịch vụ bên thứ ba khi cần.\n- Thiết kế, quản lý và tối ưu Database (PostgreSQL, MongoDB, MySQL).\n- Tiếp nhận yêu cầu từ các phòng ban và chuyển đổi thành giải pháp kỹ thuật phù hợp.\n- Chủ động nghiên cứu, đề xuất công nghệ và giải pháp cải tiến hệ thống.\n- Hỗ trợ xử lý các vấn đề IT nội bộ như máy tính, mạng, phần mềm và thiết bị khi cần.\n\nYÊU CẦU:\n- Tốt nghiệp Cao đẳng/Đại học chuyên ngành CNTT, Kỹ thuật phần mềm hoặc tương đương.\n- Nắm vững Frontend: React.js, Next.js, HTML5, CSS3, JavaScript/TypeScript.\n- Nắm vững Backend: Node.js, Express.js, RESTful API.\n- Cơ sở dữ liệu: PostgreSQL, MongoDB, MySQL... Tối ưu hóa truy vấn.\n- Kiến thức về thương mại điện tử (E-commerce) và quy trình thanh toán là lợi thế lớn.`
    },
    {
      id: "job_favolist5_seed",
      company: "FAVOLIST5 ASIA",
      position: "Intern QA/QC Tester",
      cvType: "favolist5",
      cvLabel: "🧪 Favolist5 QA/QC Intern",
      appliedDate: "2026-09-18",
      status: "applied",
      contact: "giang.ha@favolist5.com / Zalo: 0973820220",
      notes: "Quận 2. Manual Test, Postman API, SQL, AI tools, full-time/part-time >= 4 ngày/tuần.",
      jobUrl: "",
      jdText: `📢 [QUẬN 2, HCM] FAVOLIST5 ASIA TUYỂN INTERN QA/QC TESTER\nFAVOLIST5 ASIA đang tìm kiếm Intern QA/QC Tester đồng hành cùng team IT. 💻✨\n📍 Làm việc tại: P. Bình Trưng, TP.HCM (Quận 2 cũ)\n⏰ Full-time / Part-time (tối thiểu 4 ngày hoặc 8 buổi/tuần)\n💰 Hỗ trợ: 3.000.000 VND/tháng + 31.000 VND tiền ăn trưa/ngày làm việc\n🇯🇵 Tiếng Nhật N3 trở lên là một lợi thế lớn\n🤖 Có cơ hội học hỏi và ứng dụng AI, Manual Test, SQL, API (Postman)...\n📩 Gửi CV: giang.ha@favolist5.com\n📱 Zalo: 0973820220`
    }
  ];

  // State
  let jobs = [];
  let currentFilter = "all";
  let searchQuery = "";
  let editingJobId = null;

  // ----------------------------------------------------
  // LocalStorage Helpers
  // ----------------------------------------------------
  function loadJobs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        jobs = JSON.parse(raw);
        // Tự động bổ sung JD cho CG Ecom & Favolist5 nếu chưa có jdText
        let updated = false;
        jobs.forEach(job => {
          if (!job.jdText) {
            const comp = (job.company || "").toLowerCase().trim();
            const cvT = (job.cvType || "").toLowerCase().trim();
            const notes = (job.notes || "").toLowerCase().trim();

            const seed = DEFAULT_SEED_DATA.find(s => {
              const sComp = s.company.toLowerCase().trim();
              const sCvT = s.cvType.toLowerCase().trim();
              const isCg = (comp.includes("cg") || cvT.includes("cgecom") || notes.includes("react/node") || notes.includes("e-commerce")) && sCvT === "cgecom";
              const isFav = (comp.includes("favolist") || cvT.includes("favolist") || notes.includes("qa/qc") || notes.includes("tester")) && sCvT === "favolist5";
              const matchesCompany = (comp && (sComp.includes(comp) || comp.includes(sComp)));
              const matchesCvType = (cvT && (cvT === sCvT || cvT.includes(sCvT) || sCvT.includes(cvT)));
              return isCg || isFav || matchesCompany || matchesCvType;
            });

            if (seed && seed.jdText) {
              job.jdText = seed.jdText;
              updated = true;
            }
          }
        });
        // Tự động bổ sung job Nam Phương nếu chưa có trong danh sách
        const hasNamPhuong = jobs.some(j => j.cvType === "namphuong" || (j.company && j.company.toLowerCase().includes("nam phuong")));
        if (!hasNamPhuong) {
          jobs.unshift(DEFAULT_SEED_DATA[0]);
          updated = true;
        }

        if (updated) saveJobs();
      } else {
        jobs = [...DEFAULT_SEED_DATA];
        saveJobs();
      }
    } catch (e) {
      console.warn("[JobTracker] Lỗi đọc localStorage:", e);
      jobs = [...DEFAULT_SEED_DATA];
    }
    updateBadge();
  }

  function saveJobs() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    } catch (e) {
      console.error("[JobTracker] Lỗi lưu localStorage:", e);
    }
    updateBadge();
  }

  // ----------------------------------------------------
  // Helpers
  // ----------------------------------------------------
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentCvInfo() {
    // Lấy type từ URL params hoặc default
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") || "default";
    let label = type;
    if (typeof CV_MANIFEST !== "undefined" && Array.isArray(CV_MANIFEST)) {
      const found = CV_MANIFEST.find(m => m.key === type);
      if (found) {
        label = (found.emoji ? found.emoji + " " : "") + (found.label || found.key);
      }
    }
    return { type, label };
  }

  // ----------------------------------------------------
  // UI Rendering
  // ----------------------------------------------------
  function updateBadge() {
    const badge = document.getElementById("trackerBadge");
    if (badge) {
      badge.textContent = jobs.length;
      badge.style.display = jobs.length > 0 ? "inline-block" : "none";
    }
  }

  function renderStats() {
    const total = jobs.length;
    const applied = jobs.filter(j => j.status === "applied").length;
    const reviewing = jobs.filter(j => j.status === "reviewing").length;
    const interviewing = jobs.filter(j => j.status === "interviewing").length;
    const offered = jobs.filter(j => j.status === "offered").length;
    const rejected = jobs.filter(j => j.status === "rejected").length;

    const statsEl = document.getElementById("jobTrackerStats");
    if (!statsEl) return;

    statsEl.innerHTML = `
      <span class="jt-stat-pill stat-total" data-filter="all" title="Xem tất cả">📊 Tổng: <b>${total}</b></span>
      <span class="jt-stat-pill stat-applied" data-filter="applied" title="Lọc đã nộp">📝 Đã nộp: <b>${applied}</b></span>
      <span class="jt-stat-pill stat-reviewing" data-filter="reviewing" title="Lọc chờ phản hồi">⏳ Đang chờ: <b>${reviewing}</b></span>
      <span class="jt-stat-pill stat-interviewing" data-filter="interviewing" title="Lọc phỏng vấn">🎯 Phỏng vấn: <b>${interviewing}</b></span>
      <span class="jt-stat-pill stat-offered" data-filter="offered" title="Lọc trúng tuyển">🎉 Trúng tuyển: <b>${offered}</b></span>
      ${rejected > 0 ? `<span class="jt-stat-pill stat-rejected" data-filter="rejected" title="Lọc từ chối">❌ Từ chối: <b>${rejected}</b></span>` : ""}
    `;

    // Highlight active pill
    statsEl.querySelectorAll(".jt-stat-pill").forEach(pill => {
      if (pill.getAttribute("data-filter") === currentFilter) {
        pill.classList.add("active");
      }
      pill.onclick = () => {
        currentFilter = pill.getAttribute("data-filter");
        renderStats();
        renderJobList();
      };
    });
  }

  function populateCvSelect(selectedType) {
    const select = document.getElementById("jtInputCvType");
    if (!select) return;

    select.innerHTML = "";
    if (typeof CV_MANIFEST !== "undefined" && Array.isArray(CV_MANIFEST)) {
      CV_MANIFEST.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.key;
        opt.textContent = (item.emoji ? item.emoji + " " : "") + item.label;
        if (item.key === selectedType) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });
    } else {
      const opt = document.createElement("option");
      opt.value = "default";
      opt.textContent = "💼 Bản CV Mặc định";
      select.appendChild(opt);
    }
  }

  function renderJobList() {
    const listEl = document.getElementById("jobTrackerList");
    if (!listEl) return;

    // Filter & Search
    let filtered = jobs.filter(job => {
      if (currentFilter !== "all" && job.status !== currentFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const inCompany = (job.company || "").toLowerCase().includes(q);
        const inPosition = (job.position || "").toLowerCase().includes(q);
        const inNotes = (job.notes || "").toLowerCase().includes(q);
        const inCv = (job.cvLabel || job.cvType || "").toLowerCase().includes(q);
        return inCompany || inPosition || inNotes || inCv;
      }
      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="jt-empty-state">
          <div class="jt-empty-icon">📭</div>
          <div class="jt-empty-title">Không tìm thấy đơn ứng tuyển nào</div>
          <div class="jt-empty-desc">${searchQuery ? "Thử tìm kiếm với từ khóa khác hoặc bỏ lọc." : "Bấm nút '➕ Thêm ứng tuyển' bên trên để ghi lại hồ sơ bạn đã nộp."}</div>
        </div>
      `;
      return;
    }

    // Render cards/table
    listEl.innerHTML = filtered.map(job => {
      const statusObj = STATUSES[job.status] || STATUSES.applied;
      const cvUrl = `?type=${encodeURIComponent(job.cvType || "default")}`;
      
      return `
        <div class="jt-card" data-id="${escapeHtml(job.id)}">
          <div class="jt-card-main">
            <div class="jt-card-top">
              <div class="jt-company-wrap">
                <h4 class="jt-company-name">${escapeHtml(job.company)}</h4>
                <span class="jt-position-title">${escapeHtml(job.position || "Vị trí không tên")}</span>
              </div>
              <div class="jt-status-wrap">
                <select class="jt-status-select ${statusObj.badgeClass}" title="Bấm để chọn trạng thái ứng tuyển" onchange="window.cvTracker.changeStatus('${job.id}', this.value)">
                  <option value="applied" ${job.status === "applied" ? "selected" : ""}>📝 Đã nộp</option>
                  <option value="reviewing" ${job.status === "reviewing" ? "selected" : ""}>⏳ Chờ phản hồi</option>
                  <option value="interviewing" ${job.status === "interviewing" ? "selected" : ""}>🎯 Phỏng vấn</option>
                  <option value="offered" ${job.status === "offered" ? "selected" : ""}>🎉 Trúng tuyển</option>
                  <option value="rejected" ${job.status === "rejected" ? "selected" : ""}>❌ Từ chối</option>
                </select>
                <span class="jt-dropdown-arrow" aria-hidden="true">▾</span>
              </div>
            </div>

            <div class="jt-card-meta">
              <span class="jt-meta-item jt-cv-link" title="Bấm để mở bản CV này">
                📄 <a href="${cvUrl}" onclick="event.preventDefault(); window.cvTracker.openCv('${escapeHtml(job.cvType)}');">${escapeHtml(job.cvLabel || job.cvType || "Bản CV")} ↗</a>
              </span>
              <span class="jt-meta-item">
                📅 Ngày nộp: <b>${escapeHtml(job.appliedDate || "N/A")}</b>
              </span>
              ${job.contact ? `<span class="jt-meta-item jt-contact" title="${escapeHtml(job.contact)}">📞 ${escapeHtml(job.contact)}</span>` : ""}
            </div>

            <div class="jt-card-notes has-jd" title="Bấm để xem bản mô tả công việc (JD) chi tiết" onclick="window.cvTracker.viewJd('${job.id}')">
              <span class="jt-notes-icon">💡</span>
              <span class="jt-notes-body">${escapeHtml(job.notes || (job.jdText ? "Bấm xem mô tả công việc chi tiết..." : "Chưa có ghi chú (Bấm xem/thêm JD)..."))}</span>
              <span class="jt-jd-badge" title="Bấm để mở xem JD chi tiết">📄 Xem JD ↗</span>
            </div>
          </div>

          <div class="jt-card-actions">
            <button type="button" class="jt-action-btn jt-btn-jd" title="Xem chi tiết bản mô tả công việc (JD)" onclick="window.cvTracker.viewJd('${job.id}')">📄 JD</button>
            <button type="button" class="jt-action-btn jt-btn-email" title="Soạn email ứng tuyển 1-click cho công ty này" onclick="window.cvTracker.openEmailForJob('${job.id}')">📧 Email</button>
            <button type="button" class="jt-action-btn jt-btn-edit" title="Chỉnh sửa thông tin" onclick="window.cvTracker.openEditForm('${job.id}')">✏️ Sửa</button>
            <button type="button" class="jt-action-btn jt-btn-delete" title="Xóa hồ sơ này" onclick="window.cvTracker.deleteJob('${job.id}')">🗑️ Xóa</button>
          </div>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------------------
  // Form Management
  // ----------------------------------------------------
  function openAddForm() {
    editingJobId = null;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    const formTitle = document.getElementById("jtFormTitle");
    if (!formPanel) return;

    formTitle.textContent = "➕ Thêm đơn ứng tuyển mới";
    
    // Default values
    const cur = getCurrentCvInfo();
    const meta = (window.cvData && window.cvData.meta) || {};
    const viData = (window.cvData && window.cvData.vi) || {};

    document.getElementById("jtInputCompany").value = meta.company || "";
    document.getElementById("jtInputPosition").value = meta.position || viData.title || "";
    populateCvSelect(cur.type);
    document.getElementById("jtInputDate").value = getTodayString();
    document.getElementById("jtInputStatus").value = "applied";
    document.getElementById("jtInputContact").value = meta.email || meta.contact || "";
    document.getElementById("jtInputNotes").value = meta.notes || "";
    const jdInput = document.getElementById("jtInputJd");
    if (jdInput) jdInput.value = meta.jdText || "";

    formPanel.style.display = "block";
    formPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (!meta.company) {
      document.getElementById("jtInputCompany").focus();
    }
  }

  function openEditForm(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    editingJobId = jobId;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    const formTitle = document.getElementById("jtFormTitle");
    if (!formPanel) return;

    formTitle.textContent = "✏️ Chỉnh sửa đơn ứng tuyển: " + job.company;
    document.getElementById("jtInputCompany").value = job.company || "";
    document.getElementById("jtInputPosition").value = job.position || "";
    populateCvSelect(job.cvType || "default");
    document.getElementById("jtInputDate").value = job.appliedDate || getTodayString();
    document.getElementById("jtInputStatus").value = job.status || "applied";
    document.getElementById("jtInputContact").value = job.contact || "";
    document.getElementById("jtInputNotes").value = job.notes || "";
    const jdInput = document.getElementById("jtInputJd");
    if (jdInput) jdInput.value = job.jdText || "";

    formPanel.style.display = "block";
    formPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    document.getElementById("jtInputCompany").focus();
  }

  function closeForm() {
    editingJobId = null;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    if (formPanel) {
      formPanel.style.display = "none";
    }
  }

  function saveForm() {
    const company = (document.getElementById("jtInputCompany").value || "").trim();
    const position = (document.getElementById("jtInputPosition").value || "").trim();
    const cvTypeSelect = document.getElementById("jtInputCvType");
    const cvType = cvTypeSelect ? cvTypeSelect.value : "default";
    const cvLabel = cvTypeSelect && cvTypeSelect.selectedOptions[0] ? cvTypeSelect.selectedOptions[0].textContent : cvType;
    const appliedDate = document.getElementById("jtInputDate").value || getTodayString();
    const status = document.getElementById("jtInputStatus").value || "applied";
    const contact = (document.getElementById("jtInputContact").value || "").trim();
    const notes = (document.getElementById("jtInputNotes").value || "").trim();
    const jdInput = document.getElementById("jtInputJd");
    const jdText = jdInput ? jdInput.value.trim() : "";

    if (!company) {
      alert("Vui lòng nhập tên công ty!");
      document.getElementById("jtInputCompany").focus();
      return;
    }

    if (editingJobId) {
      // Update existing
      const idx = jobs.findIndex(j => j.id === editingJobId);
      if (idx > -1) {
        jobs[idx] = {
          ...jobs[idx],
          company,
          position,
          cvType,
          cvLabel,
          appliedDate,
          status,
          contact,
          notes,
          jdText,
        };
      }
    } else {
      // Add new
      const newJob = {
        id: "job_" + Date.now(),
        company,
        position,
        cvType,
        cvLabel,
        appliedDate,
        status,
        contact,
        notes,
        jdText,
      };
      jobs.unshift(newJob);
    }

    saveJobs();
    closeForm();
    renderStats();
    renderJobList();
  }

  // ----------------------------------------------------
  // JD Viewer Management
  // ----------------------------------------------------
  let viewingJobId = null;

  function viewJd(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    viewingJobId = jobId;
    const overlay = document.getElementById("jtJdModalOverlay");
    const titleEl = document.getElementById("jtJdModalTitle");
    const subTitleEl = document.getElementById("jtJdModalSubtitle");
    const contentEl = document.getElementById("jtJdContent");
    if (!overlay || !contentEl) return;

    titleEl.textContent = "📄 " + job.company;
    subTitleEl.textContent = (job.position ? job.position + " — " : "") + "Ngày nộp: " + (job.appliedDate || "N/A");
    
    let content = (job.jdText || "").trim();
    if (!content && job.notes) {
      content = `[GHI CHÚ VỊ TRÍ TUYỂN DỤNG]\n${job.notes}\n\n` +
                `--------------------------------------------------\n` +
                `💡 Gợi ý: Hồ sơ này chưa lưu bản mô tả công việc (JD) đầy đủ. Bạn có thể bấm nút "✏️ Sửa JD" ở góc trên để dán toàn bộ tin tuyển dụng vào đây lưu trữ và so khớp ATS.`;
    } else if (!content) {
      content = `(Chưa có nội dung JD chi tiết cho hồ sơ này).\n\n💡 Bạn có thể bấm nút "✏️ Sửa JD" bên trên để dán văn bản tin tuyển dụng vào đây.`;
    }
    contentEl.textContent = content;

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
  }

  function editCurrentJd() {
    if (!viewingJobId) return;
    const jobId = viewingJobId;
    closeJdModal();
    openEditForm(jobId);
    setTimeout(() => {
      const jdInput = document.getElementById("jtInputJd");
      if (jdInput) {
        jdInput.scrollIntoView({ behavior: "smooth", block: "center" });
        jdInput.focus();
      }
    }, 150);
  }

  function closeJdModal() {
    viewingJobId = null;
    const overlay = document.getElementById("jtJdModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function copyCurrentJd() {
    const contentEl = document.getElementById("jtJdContent");
    if (!contentEl || !contentEl.textContent) return;
    navigator.clipboard.writeText(contentEl.textContent).then(() => {
      const copyBtn = document.getElementById("jtCopyJdBtn");
      if (copyBtn) {
        const origText = copyBtn.textContent;
        copyBtn.textContent = "✅ Đã sao chép!";
        setTimeout(() => { copyBtn.textContent = origText; }, 2000);
      }
    }).catch(err => {
      alert("Không thể sao chép: " + err.message);
    });
  }

  function openAtsWithCurrentJd() {
    const job = jobs.find(j => j.id === viewingJobId);
    const contentEl = document.getElementById("jtJdContent");
    const jdText = contentEl ? contentEl.textContent : (job ? job.jdText : "");

    closeJdModal();
    closeModal();

    // Mở ATS matcher modal nếu có
    const atsBtn = document.getElementById("atsMatchBtn");
    const atsInput = document.getElementById("atsJdInput");
    const atsAnalyzeBtn = document.getElementById("atsAnalyzeBtn");

    if (atsBtn && atsInput) {
      atsBtn.click();
      if (jdText) {
        atsInput.value = jdText;
        if (atsAnalyzeBtn) {
          setTimeout(() => { atsAnalyzeBtn.click(); }, 300);
        }
      }
    }
  }

  function openEmailWithCurrentJd() {
    const job = jobs.find(j => j.id === viewingJobId);
    const contentEl = document.getElementById("jtJdContent");
    const jdText = contentEl ? contentEl.textContent : (job ? job.jdText : "");

    closeJdModal();
    closeModal();

    if (window.cvEmailGen) {
      window.cvEmailGen.openModal({
        company: job ? job.company : "",
        position: job ? job.position : "",
        contact: job ? job.contact : "",
        jdText: jdText
      });
    }
  }

  function openEmailForJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    closeModal();

    if (window.cvEmailGen) {
      window.cvEmailGen.openModal({
        company: job.company || "",
        position: job.position || "",
        contact: job.contact || "",
        jdText: job.jdText || job.notes || ""
      });
    }
  }

  // Đổi trạng thái trực tiếp từ dropdown
  function changeStatus(jobId, newStatus) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    job.status = newStatus;
    saveJobs();
    renderStats();
    renderJobList();
  }

  // Chuyển nhanh vòng đời trạng thái khi bấm vào status badge
  function cycleStatus(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    const flow = ["applied", "reviewing", "interviewing", "offered", "rejected"];
    const curIdx = flow.indexOf(job.status);
    const nextStatus = flow[(curIdx + 1) % flow.length];

    job.status = nextStatus;
    saveJobs();
    renderStats();
    renderJobList();
  }

  function deleteJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    if (confirm(`Bạn có chắc muốn xóa hồ sơ ứng tuyển tại "${job.company}" không?`)) {
      jobs = jobs.filter(j => j.id !== jobId);
      saveJobs();
      renderStats();
      renderJobList();
    }
  }

  function openCv(cvType) {
    // Đổi type qua router nếu có sẵn hàm switchType hoặc cập nhật URL
    closeModal();
    if (window.history && window.history.pushState) {
      const newUrl = window.location.pathname + "?type=" + encodeURIComponent(cvType);
      window.history.pushState({ type: cvType }, "", newUrl);
      if (typeof window.loadCvFromUrl === "function") {
        window.loadCvFromUrl();
      } else {
        window.location.href = newUrl;
      }
    } else {
      window.location.href = "?type=" + encodeURIComponent(cvType);
    }
  }

  // ----------------------------------------------------
  // Backup & Restore
  // ----------------------------------------------------
  function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jobs, null, 2));
    const downloadAnchor = document.createElement("a");
    const dateStr = getTodayString().replace(/-/g, "");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `cv_job_tracker_backup_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed)) {
            if (confirm(`Tìm thấy ${parsed.length} hồ sơ trong file backup. Bạn có muốn nhập vào danh sách hiện tại không?`)) {
              // Gộp tránh trùng id
              const existingIds = new Set(jobs.map(j => j.id));
              let addedCount = 0;
              parsed.forEach(item => {
                if (!existingIds.has(item.id)) {
                  jobs.push(item);
                  addedCount++;
                }
              });
              saveJobs();
              renderStats();
              renderJobList();
              alert(`Đã nhập thành công ${addedCount} hồ sơ mới!`);
            }
          } else {
            alert("File không đúng định dạng danh sách ứng tuyển!");
          }
        } catch (err) {
          alert("Lỗi khi đọc file JSON: " + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // ----------------------------------------------------
  // Modal Open / Close
  // ----------------------------------------------------
  function openModal() {
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (!overlay) return;

    loadJobs();
    closeForm();
    renderStats();
    renderJobList();

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Lắng nghe phím ESC
    window.addEventListener("keydown", handleKeyDown);
  }

  function closeModal() {
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (!overlay) return;

    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    closeForm();
    window.removeEventListener("keydown", handleKeyDown);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  // ----------------------------------------------------
  // Initialization & Event Binding
  // ----------------------------------------------------
  function init() {
    loadJobs();

    // Nút mở modal bên thanh controls
    const triggerBtn = document.getElementById("jobTrackerBtn");
    if (triggerBtn) {
      triggerBtn.onclick = openModal;
    }

    // Nút đóng modal
    const closeBtn = document.getElementById("jobTrackerCloseBtn");
    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    // Click ra ngoài overlay để đóng
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
      };
    }

    // Search input
    const searchInput = document.getElementById("jtSearchInput");
    if (searchInput) {
      searchInput.oninput = (e) => {
        searchQuery = e.target.value.trim();
        renderJobList();
      };
    }

    // Form buttons
    const addBtn = document.getElementById("jtAddBtn");
    if (addBtn) addBtn.onclick = openAddForm;

    const cancelFormBtn = document.getElementById("jtCancelFormBtn");
    if (cancelFormBtn) cancelFormBtn.onclick = closeForm;

    const saveFormBtn = document.getElementById("jtSaveFormBtn");
    if (saveFormBtn) saveFormBtn.onclick = saveForm;

    // Backup & Restore buttons
    const exportBtn = document.getElementById("jtExportBtn");
    if (exportBtn) exportBtn.onclick = exportData;

    const importBtn = document.getElementById("jtImportBtn");
    if (importBtn) importBtn.onclick = importData;

    // Cloud Sync button & modal
    const syncBtn = document.getElementById("jtSyncBtn");
    if (syncBtn) syncBtn.onclick = openSyncModal;

    const syncCloseTopBtn = document.getElementById("jtSyncCloseTopBtn");
    if (syncCloseTopBtn) syncCloseTopBtn.onclick = closeSyncModal;

    const syncCancelBtn = document.getElementById("jtSyncCancelBtn");
    if (syncCancelBtn) syncCancelBtn.onclick = closeSyncModal;

    const syncPushBtn = document.getElementById("jtSyncPushBtn");
    if (syncPushBtn) syncPushBtn.onclick = pushToCloud;

    const syncPullBtn = document.getElementById("jtSyncPullBtn");
    if (syncPullBtn) syncPullBtn.onclick = pullFromCloud;

    const syncOverlay = document.getElementById("jtSyncModalOverlay");
    if (syncOverlay) {
      syncOverlay.onclick = (e) => {
        if (e.target === syncOverlay) closeSyncModal();
      };
    }

    // JD Viewer modal buttons
    const jdCloseBtn = document.getElementById("jtJdModalCloseBtn");
    if (jdCloseBtn) jdCloseBtn.onclick = closeJdModal;

    const jdCopyBtn = document.getElementById("jtCopyJdBtn");
    if (jdCopyBtn) jdCopyBtn.onclick = copyCurrentJd;

    const jdEditBtn = document.getElementById("jtEditJdBtn");
    if (jdEditBtn) jdEditBtn.onclick = editCurrentJd;

    const jdEmailBtn = document.getElementById("jtEmailJdBtn");
    if (jdEmailBtn) jdEmailBtn.onclick = openEmailWithCurrentJd;

    const jdAtsBtn = document.getElementById("jtAtsJdBtn");
    if (jdAtsBtn) jdAtsBtn.onclick = openAtsWithCurrentJd;

    const jdOverlay = document.getElementById("jtJdModalOverlay");
    if (jdOverlay) {
      jdOverlay.onclick = (e) => {
        if (e.target === jdOverlay) closeJdModal();
      };
    }
  }

  // ----------------------------------------------------
  // Cloudflare KV Sync Management
  // ----------------------------------------------------
  const SYNC_PIN_STORAGE_KEY = "cv_tracker_sync_pin";

  function getWorkerBaseUrl() {
    return (window.CV_WORKER_URL || localStorage.getItem('CV_WORKER_URL') || 'https://cv-telegram-bridge.tdinhanh-it.workers.dev').replace(/\/$/, '');
  }

  function openSyncModal() {
    const overlay = document.getElementById("jtSyncModalOverlay");
    const pinInput = document.getElementById("jtSyncPinInput");
    const statusMsg = document.getElementById("jtSyncStatusMsg");
    if (!overlay) return;

    if (pinInput) {
      pinInput.value = localStorage.getItem(SYNC_PIN_STORAGE_KEY) || "dinhanh2026";
    }
    if (statusMsg) {
      statusMsg.style.display = "none";
    }

    overlay.style.display = "flex";
  }

  function closeSyncModal() {
    const overlay = document.getElementById("jtSyncModalOverlay");
    if (overlay) overlay.style.display = "none";
  }

  function showSyncStatus(msg, isError = false) {
    const statusMsg = document.getElementById("jtSyncStatusMsg");
    if (!statusMsg) return;
    statusMsg.style.display = "block";
    statusMsg.style.background = isError ? "#fef2f2" : "#f0fdf4";
    statusMsg.style.color = isError ? "#b91c1c" : "#15803d";
    statusMsg.style.border = "1px solid " + (isError ? "#fecaca" : "#bbf7d0");
    statusMsg.innerHTML = msg;
  }

  function pushToCloud() {
    const pinInput = document.getElementById("jtSyncPinInput");
    const pin = (pinInput ? pinInput.value.trim() : "") || "dinhanh2026";
    localStorage.setItem(SYNC_PIN_STORAGE_KEY, pin);

    showSyncStatus("⏳ Đang tải lên Cloudflare KV...", false);

    const baseUrl = getWorkerBaseUrl();
    const endpoint = `${baseUrl}/api/tracker?pin=${encodeURIComponent(pin)}`;

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobs })
    })
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        showSyncStatus(`🎉 <b>Đồng bộ thành công!</b> Đã lưu an toàn <b>${jobs.length}</b> đơn ứng tuyển lên Cloud.`, false);
        setTimeout(closeSyncModal, 2500);
      })
      .catch(err => {
        showSyncStatus(`✖ <b>Lỗi đồng bộ:</b> ${err.message}. Kiểm tra kết nối mạng hoặc Worker settings.`, true);
      });
  }

  function pullFromCloud() {
    const pinInput = document.getElementById("jtSyncPinInput");
    const pin = (pinInput ? pinInput.value.trim() : "") || "dinhanh2026";
    localStorage.setItem(SYNC_PIN_STORAGE_KEY, pin);

    showSyncStatus("⏳ Đang tải dữ liệu từ Cloudflare KV...", false);

    const baseUrl = getWorkerBaseUrl();
    const endpoint = `${baseUrl}/api/tracker?pin=${encodeURIComponent(pin)}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        const cloudJobs = data.jobs || [];
        if (!Array.isArray(cloudJobs) || cloudJobs.length === 0) {
          showSyncStatus(`ℹ️ Chưa có dữ liệu nào trên Cloud cho mã PIN <b>${pin}</b>.`, false);
          return;
        }

        if (confirm(`Tìm thấy ${cloudJobs.length} đơn ứng tuyển trên Cloud. Bạn có muốn tải về và ghi đè danh sách hiện tại (${jobs.length} mục)?`)) {
          jobs = cloudJobs;
          saveJobs();
          renderStats();
          renderJobList();
          showSyncStatus(`✔ Đã cập nhật thành công <b>${jobs.length}</b> đơn ứng tuyển từ Cloud!`, false);
          setTimeout(closeSyncModal, 2000);
        }
      })
      .catch(err => {
        showSyncStatus(`✖ <b>Lỗi tải dữ liệu:</b> ${err.message}`, true);
      });
  }

  // Public API
  window.cvTracker = {
    openModal,
    closeModal,
    openSyncModal,
    openAddForm,
    openEditForm,
    closeForm,
    saveForm,
    viewJd,
    closeJdModal,
    copyCurrentJd,
    editCurrentJd,
    openAtsWithCurrentJd,
    openEmailWithCurrentJd,
    openEmailForJob,
    changeStatus,
    cycleStatus,
    deleteJob,
    openCv,
    exportData,
    importData,
    refreshBadge: updateBadge
  };

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
