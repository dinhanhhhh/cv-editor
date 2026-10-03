/**
 * ==========================================================================
 * CV PRO TOOLS - NÂNG CẤP TÍNH NĂNG CHUYÊN NGHIỆP CHO CV EDITOR
 * Module mở rộng:
 * 1. Command Palette (Ctrl+K / Cmd+K) - Spotlight Quick Actions
 * 2. Bộ chuyển đổi Bố cục Đa dạng (1-Column Classic vs. 2-Column Sidebar)
 * 3. Bảng màu tuyển chọn (Designer Color Presets)
 * 4. CV Health & ATS Quality Audit Scorecard (0-100 điểm)
 * 5. Export Center (JSON Resume Schema Quốc tế & Markdown/Text)
 * ==========================================================================
 */

(function () {
  "use strict";

  // Bộ màu thiết kế chuẩn in ấn và công nghệ
  const COLOR_PALETTES = [
    { id: "emerald", name: "Forest Emerald", hex: "#1b4332", desc: "Trang trọng, chuyên nghiệp (Mặc định)" },
    { id: "navy", name: "Corporate Navy", hex: "#1e3a8a", desc: "Chuẩn mực tập đoàn quốc tế" },
    { id: "charcoal", name: "Slate Charcoal", hex: "#334155", desc: "Tối giản, phong cách Silicon Valley" },
    { id: "burgundy", name: "Tech Burgundy", hex: "#991b1b", desc: "Độc đáo, cá tính nổi bật" },
    { id: "indigo", name: "Royal Indigo", hex: "#4338ca", desc: "Trẻ trung, Fullstack & AI Dev" },
    { id: "cyan", name: "Ocean Teal", hex: "#0e7490", desc: "Hiện đại, sáng sủa, tinh tế" }
  ];

  // Action Verbs chuẩn ATS cho Developer
  const ACTION_VERBS_VI = [
    "xây dựng", "thiết kế", "tối ưu", "triển khai", "tích hợp", "phát triển",
    "tự động hóa", "quản lý", "nâng cấp", "cấu hình", "đóng gói", "viết",
    "phối hợp", "giải quyết", "kiểm thử", "vận hành", "kết nối", "tổ chức",
    "định nghĩa", "phân tích", "chuyển đổi", "tái cấu trúc", "khởi tạo"
  ];

  const ACTION_VERBS_EN = [
    "build", "built", "design", "designed", "implement", "implemented", "develop", "developed",
    "optimize", "optimized", "integrate", "integrated", "automate", "automated", "configure", "configured",
    "deploy", "deployed", "architect", "architected", "refactor", "refactored", "test", "tested",
    "enhance", "enhanced", "spearhead", "spearheaded", "maintain", "maintained", "lead", "led", "create", "created"
  ];

  // State quản lý
  let currentLayoutMode = localStorage.getItem("cv_layout_mode") || "single"; // "single" | "two-column"
  let cmdPaletteActiveIndex = 0;
  let cmdPaletteItems = [];
  let originalRenderCV = null;

  /**
   * Khởi tạo toàn bộ module Pro Tools khi DOM sẵn sàng
   */
  function initProTools() {
    initColorPresetsUI();
    initLayoutSwitcher();
    initCommandPalette();
    initCvHealthAudit();
    initExportCenter();
    bindGlobalShortcuts();
    initDesktopUtilityDropdowns();

    // Lắng nghe sự kiện render lại CV để duy trì layout 2 cột nếu đang bật
    if (typeof window.renderCV === "function") {
      originalRenderCV = window.renderCV;
      window.renderCV = function (lang) {
        originalRenderCV.apply(this, arguments);
        setTimeout(() => {
          if (currentLayoutMode === "two-column") {
            applyLayoutMode("two-column");
          }
        }, 10);
      };
    }

    // Áp dụng layout đã lưu
    setTimeout(() => {
      if (currentLayoutMode === "two-column") {
        applyLayoutMode(currentLayoutMode);
      }
    }, 50);
  }

  /**
   * Khởi tạo các menu dropdown Tiện ích Desktop và Công cụ mở rộng bên trái
   */
  function initDesktopUtilityDropdowns() {
    const utilBtn = document.getElementById("desktopUtilityBtn");
    const utilDropdown = document.getElementById("desktopUtilityDropdown");
    const leftToolsBtn = document.getElementById("leftMoreToolsBtn");
    const leftToolsDropdown = document.getElementById("leftToolsDropdown");

    if (utilBtn && utilDropdown) {
      utilBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = utilDropdown.classList.toggle("open");
        utilBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (leftToolsDropdown) {
          leftToolsDropdown.classList.remove("open");
          if (leftToolsBtn) leftToolsBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    if (leftToolsBtn && leftToolsDropdown) {
      leftToolsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = leftToolsDropdown.classList.toggle("open");
        leftToolsBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (utilDropdown) {
          utilDropdown.classList.remove("open");
          if (utilBtn) utilBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    document.addEventListener("click", (e) => {
      if (utilDropdown && !utilDropdown.contains(e.target) && e.target !== utilBtn) {
        utilDropdown.classList.remove("open");
        if (utilBtn) utilBtn.setAttribute("aria-expanded", "false");
      }
      if (leftToolsDropdown && !leftToolsDropdown.contains(e.target) && e.target !== leftToolsBtn) {
        leftToolsDropdown.classList.remove("open");
        if (leftToolsBtn) leftToolsBtn.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (utilDropdown) {
          utilDropdown.classList.remove("open");
          if (utilBtn) utilBtn.setAttribute("aria-expanded", "false");
        }
        if (leftToolsDropdown) {
          leftToolsDropdown.classList.remove("open");
          if (leftToolsBtn) leftToolsBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  // ==========================================================================
  // 1. COMMAND PALETTE (Đã gỡ bỏ tính năng trùng lặp, chuyển giao cho thanh Tìm kiếm Bản CV)
  // ==========================================================================

  function initCommandPalette() {
    const oldOverlay = document.getElementById("cmdPaletteOverlay");
    if (oldOverlay) oldOverlay.remove();
  }

  function openCommandPalette() {
    const searchInput = document.getElementById("versionSearchInput");
    const container = document.getElementById("versionSwitch");
    if (container && searchInput) {
      container.classList.remove("collapsed");
      container.classList.add("flyout-open");
      const toggleBtn = document.getElementById("versionToggleBtn");
      if (toggleBtn) {
        toggleBtn.textContent = "▲";
        toggleBtn.title = "Thu gọn danh sách bản CV";
      }
      searchInput.focus();
      searchInput.select();
    }
  }

  function closeCommandPalette() {
    const oldOverlay = document.getElementById("cmdPaletteOverlay");
    if (oldOverlay) oldOverlay.remove();
  }

  function getAvailableCommands() {
    const commands = [];
    const lang = window.currentLang || "vi";

    // 1. Danh sách 43 bản CV từ manifest
    const manifest = window.CV_MANIFEST || [];
    manifest.forEach(item => {
      commands.push({
        group: "📦 Bản CV (" + manifest.length + " bản)",
        id: `cv_${item.key}`,
        label: item.label || item.key,
        desc: `Chuyển ngay sang bản CV: ${item.key}`,
        icon: "📄",
        action: () => {
          const url = new URL(window.location.href);
          url.searchParams.set("type", item.key);
          window.location.href = url.toString();
        }
      });
    });

    // 2. Thao tác chính
    commands.push(
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_print",
        label: lang === "vi" ? "In / Lưu file PDF chất lượng cao" : "Print / Save PDF",
        desc: "Mở hộp thoại in trình duyệt chuẩn A4 không lề",
        icon: "🖨️",
        action: () => window.print()
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_magic_fit",
        label: "Magic Fit ✨ (Tự động co vừa 1 trang A4)",
        desc: "Tự động tinh chỉnh font chữ và khoảng cách vừa khít trang A4",
        icon: "✨",
        action: () => {
          const btn = document.getElementById("magicFitBtn") || document.getElementById("mobileMagicFitBtn");
          if (btn) btn.click();
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_health_audit",
        label: "Kiểm tra Sức khỏe CV & Chấm điểm ATS (0-100)",
        desc: "Phân tích độ dài, từ khóa hành động, số liệu và chuẩn ATS",
        icon: "📊",
        action: () => openCvHealthModal()
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_toggle_layout",
        label: currentLayoutMode === "single" ? "Chuyển sang Bố cục 2 Cột (Modern Sidebar)" : "Chuyển sang Bố cục 1 Cột (Classic Minimalist)",
        desc: "Thay đổi giao diện dàn trang CV",
        icon: "📑",
        action: () => toggleLayoutMode()
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_export_center",
        label: "Trung tâm Xuất Dữ Liệu (JSON Resume & Markdown)",
        desc: "Tải file JSON chuẩn quốc tế hoặc copy văn bản ứng tuyển",
        icon: "💾",
        action: () => openExportCenterModal()
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_switch_lang",
        label: lang === "vi" ? "Đổi sang Tiếng Anh (Switch to English)" : "Đổi sang Tiếng Việt",
        desc: "Chuyển đổi ngôn ngữ hiển thị CV",
        icon: "🌐",
        action: () => {
          const targetBtn = lang === "vi" ? document.getElementById("lang-en") : document.getElementById("lang-vi");
          if (targetBtn) targetBtn.click();
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_live_edit",
        label: "Bật / Tắt Chế độ Sửa trực tiếp (Live Edit)",
        desc: "Chỉnh sửa câu chữ trực tiếp ngay trên mặt giấy A4",
        icon: "✏️",
        action: () => {
          const btn = document.getElementById("liveEditBtn") || document.getElementById("mobileLiveEditBtn");
          if (btn) btn.click();
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_job_tracker",
        label: "Mở Bảng Tiến Độ Ứng Tuyển (Job Tracker)",
        desc: "Theo dõi hồ sơ các công ty đã nộp, trạng thái phỏng vấn",
        icon: "📋",
        action: () => {
          if (window.cvTracker && typeof window.cvTracker.openModal === "function") {
            window.cvTracker.openModal();
          } else {
            const btn = document.getElementById("jobTrackerBtn");
            if (btn) btn.click();
          }
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_email_cover",
        label: "Soạn Thư & Email Ứng Tuyển 1-Click",
        desc: "Mở Gmail gửi nhanh hoặc lấy Cover Letter trang trọng",
        icon: "✉️",
        action: () => {
          if (window.cvEmailGen && typeof window.cvEmailGen.openModal === "function") {
            window.cvEmailGen.openModal();
          } else {
            const btn = document.getElementById("coverLetterBtn");
            if (btn) btn.click();
          }
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_interview_prep",
        label: "Cẩm nang Ôn Phỏng Vấn (STAR Questions & Answers)",
        desc: "Bộ câu hỏi kỹ thuật, kiến trúc và tình huống thực tế",
        icon: "🎙️",
        action: () => {
          const btn = document.getElementById("interviewPrepBtn");
          if (btn) btn.click();
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_ats_matcher",
        label: "So khớp JD & Chấm điểm từ khóa ATS",
        desc: "Dán JD công việc để phân tích tỷ lệ trùng khớp từ khóa",
        icon: "🎯",
        action: () => {
          const btn = document.getElementById("atsMatchBtn");
          if (btn) btn.click();
        }
      },
      {
        group: "⚡ Thao tác nhanh",
        id: "cmd_hr_view",
        label: "Chuyển sang chế độ xem cho Nhà Tuyển Dụng (HR View)",
        desc: "Giao diện sạch tĩnh, tối giản, chuyên nghiệp",
        icon: "👁️",
        action: () => {
          const url = new URL(window.location.href);
          url.searchParams.set("view", "hr");
          window.location.href = url.toString();
        }
      }
    );

    // 3. Đổi bảng màu nhanh
    COLOR_PALETTES.forEach(pal => {
      commands.push({
        group: "🎨 Đổi Bảng Màu Chủ Đạo",
        id: `pal_${pal.id}`,
        label: `Màu ${pal.name}`,
        desc: `${pal.desc} (${pal.hex})`,
        icon: "🖌️",
        colorDot: pal.hex,
        action: () => applyPrimaryColor(pal.hex)
      });
    });

    return commands;
  }

  function openCommandPalette() {
    const overlay = document.getElementById("cmdPaletteOverlay");
    const input = document.getElementById("cmdPaletteInput");
    if (!overlay || !input) return;

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    input.value = "";
    filterCommandPalette("");
    input.focus();
  }

  function closeCommandPalette() {
    const overlay = document.getElementById("cmdPaletteOverlay");
    if (overlay) {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function filterCommandPalette(query) {
    const resultsContainer = document.getElementById("cmdPaletteResults");
    if (!resultsContainer) return;

    const allCommands = getAvailableCommands();
    const q = query.toLowerCase().trim();

    if (!q) {
      cmdPaletteItems = allCommands;
    } else {
      cmdPaletteItems = allCommands.filter(item => {
        return (
          item.label.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
        );
      });
    }

    cmdPaletteActiveIndex = 0;
    renderCommandPaletteItems();
  }

  function renderCommandPaletteItems() {
    const resultsContainer = document.getElementById("cmdPaletteResults");
    if (!resultsContainer) return;

    if (cmdPaletteItems.length === 0) {
      resultsContainer.innerHTML = `
        <div class="cmd-empty-state">
          <div class="cmd-empty-icon">🔍</div>
          <div>Không tìm thấy lệnh hoặc bản CV nào phù hợp</div>
        </div>
      `;
      return;
    }

    // Nhóm các lệnh theo group
    let html = "";
    let currentGroup = "";

    cmdPaletteItems.forEach((item, index) => {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        html += `<div class="cmd-group-title">${escapeHtml(currentGroup)}</div>`;
      }

      const isActive = index === cmdPaletteActiveIndex;
      html += `
        <div class="cmd-item ${isActive ? "active" : ""}" data-index="${index}">
          <div class="cmd-item-icon">
            ${item.colorDot ? `<span class="cmd-color-dot" style="background: ${item.colorDot};"></span>` : (item.icon || "⚡")}
          </div>
          <div class="cmd-item-info">
            <div class="cmd-item-label">${escapeHtml(item.label)}</div>
            <div class="cmd-item-desc">${escapeHtml(item.desc)}</div>
          </div>
          ${isActive ? '<kbd class="cmd-item-enter">↵</kbd>' : ""}
        </div>
      `;
    });

    resultsContainer.innerHTML = html;

    // Click handler cho từng item
    resultsContainer.querySelectorAll(".cmd-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-index"), 10);
        cmdPaletteActiveIndex = idx;
        executeSelectedCommand();
      });
      el.addEventListener("mouseenter", () => {
        cmdPaletteActiveIndex = parseInt(el.getAttribute("data-index"), 10);
        updateActiveCmdHighlight();
      });
    });

    scrollActiveCmdIntoView();
  }

  function moveCmdPaletteSelection(delta) {
    if (cmdPaletteItems.length === 0) return;
    cmdPaletteActiveIndex = (cmdPaletteActiveIndex + delta + cmdPaletteItems.length) % cmdPaletteItems.length;
    updateActiveCmdHighlight();
    scrollActiveCmdIntoView();
  }

  function updateActiveCmdHighlight() {
    const resultsContainer = document.getElementById("cmdPaletteResults");
    if (!resultsContainer) return;
    resultsContainer.querySelectorAll(".cmd-item").forEach(el => {
      const idx = parseInt(el.getAttribute("data-index"), 10);
      el.classList.toggle("active", idx === cmdPaletteActiveIndex);
    });
  }

  function scrollActiveCmdIntoView() {
    const resultsContainer = document.getElementById("cmdPaletteResults");
    if (!resultsContainer) return;
    const activeEl = resultsContainer.querySelector(`.cmd-item[data-index="${cmdPaletteActiveIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function executeSelectedCommand() {
    if (cmdPaletteItems[cmdPaletteActiveIndex]) {
      const cmd = cmdPaletteItems[cmdPaletteActiveIndex];
      closeCommandPalette();
      if (typeof cmd.action === "function") {
        cmd.action();
      }
    }
  }

  // ==========================================================================
  // 2. BỐ CỤC ĐA DẠNG (1 CỘT CLASSIC vs. 2 CỘT SIDEBAR)
  // ==========================================================================

  function initLayoutSwitcher() {
    // Thêm nút chuyển đổi layout vào thanh controls nếu chưa có
    const controls = document.querySelector(".controls .controls-row-buttons");
    let btn = document.getElementById("layoutSwitcherBtn");
    if (controls && !btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.id = "layoutSwitcherBtn";
      btn.className = "layout-switch-btn";
      btn.title = "Chuyển đổi giữa Bố cục 1 cột và 2 cột Sidebar";
      btn.innerHTML = currentLayoutMode === "two-column" ? "📑 Bố cục 2 Cột" : "📄 Bố cục 1 Cột";
      controls.appendChild(btn);
    }
    if (btn) {
      btn.onclick = toggleLayoutMode;
    }
    const mobileBtn = document.getElementById("mobileToggleLayoutBtn");
    if (mobileBtn) {
      mobileBtn.onclick = toggleLayoutMode;
    }
  }

  function toggleLayoutMode() {
    currentLayoutMode = currentLayoutMode === "single" ? "two-column" : "single";
    localStorage.setItem("cv_layout_mode", currentLayoutMode);

    const preview = document.getElementById("cvContent");
    if (currentLayoutMode === "single") {
      if (preview) {
        preview.classList.remove("layout-sidebar");
        restoreDomFromTwoColumn(preview);
      }
      // Gọi renderCV gốc để render lại sạch sẽ 100% với đúng thứ tự chuẩn và gán lại đầy đủ event toolbar
      if (typeof originalRenderCV === "function") {
        originalRenderCV(window.currentLang || "vi");
      }
    } else {
      if (preview) {
        preview.classList.add("layout-sidebar");
        reorganizeDomForTwoColumn(preview);
      }
    }

    const btn = document.getElementById("layoutSwitcherBtn");
    if (btn) {
      btn.innerHTML = currentLayoutMode === "two-column" ? "📑 Bố cục 2 Cột" : "📄 Bố cục 1 Cột";
    }

    // Cập nhật lại thanh thước đo A4
    if (typeof window.updateA4FitMeter === "function") {
      requestAnimationFrame(window.updateA4FitMeter);
    }
  }

  function applyLayoutMode(mode) {
    const preview = document.getElementById("cvContent");
    if (!preview) return;

    if (mode === "two-column") {
      preview.classList.add("layout-sidebar");
      reorganizeDomForTwoColumn(preview);
    } else {
      preview.classList.remove("layout-sidebar");
      restoreDomFromTwoColumn(preview);
      if (typeof originalRenderCV === "function") {
        originalRenderCV(window.currentLang || "vi");
      }
    }

    if (typeof window.updateA4FitMeter === "function") {
      requestAnimationFrame(window.updateA4FitMeter);
    }
  }

  function reorganizeDomForTwoColumn(preview) {
    // Kiểm tra nếu đã có wrapper rồi thì thôi
    if (preview.querySelector(".cv-sidebar-body")) return;

    const sections = Array.from(preview.querySelectorAll(".cv-section"));
    if (sections.length === 0) return;

    const wrapper = document.createElement("div");
    wrapper.className = "cv-sidebar-body";

    const sidebarCol = document.createElement("div");
    sidebarCol.className = "cv-col-sidebar";

    const mainCol = document.createElement("div");
    mainCol.className = "cv-col-main";

    sections.forEach(sec => {
      const id = sec.getAttribute("data-section-id");
      if (id === "education" || id === "skills") {
        sidebarCol.appendChild(sec);
      } else {
        mainCol.appendChild(sec);
      }
    });

    wrapper.appendChild(sidebarCol);
    wrapper.appendChild(mainCol);
    preview.appendChild(wrapper);
  }

  function restoreDomFromTwoColumn(preview) {
    const wrapper = preview.querySelector(".cv-sidebar-body");
    if (!wrapper) return;

    const lang = window.currentLang || "vi";
    const d = (window.cvData && window.cvData[lang]) || {};
    const defaultOrder = ["objective", "education", "experience", "projects", "skills"];
    const sectionOrder = (d && Array.isArray(d.sectionOrder) && d.sectionOrder.length > 0)
      ? d.sectionOrder
      : defaultOrder;

    const sectionMap = {};
    const unmapped = [];

    wrapper.querySelectorAll(".cv-section").forEach(sec => {
      const id = sec.getAttribute("data-section-id");
      if (id) {
        sectionMap[id] = sec;
      } else {
        unmapped.push(sec);
      }
    });

    // Đưa các section trở lại preview theo đúng thứ tự chuẩn của CV
    sectionOrder.forEach(id => {
      if (sectionMap[id]) {
        preview.appendChild(sectionMap[id]);
        delete sectionMap[id];
      }
    });

    // Bất kỳ section nào còn lại (nếu có tùy biến)
    Object.values(sectionMap).forEach(sec => preview.appendChild(sec));
    unmapped.forEach(sec => preview.appendChild(sec));

    wrapper.remove();
  }

  // ==========================================================================
  // 3. BẢNG MÀU DESIGNER PRESETS
  // ==========================================================================

  function initColorPresetsUI() {
    // Chèn bảng màu presets vào Settings Drawer
    const settingsGroup = document.querySelector("#settingsDrawerOverlay .settings-group");
    if (settingsGroup && !document.getElementById("colorPresetsContainer")) {
      const container = document.createElement("div");
      container.id = "colorPresetsContainer";
      container.style.cssText = "margin-top: 12px; margin-bottom: 14px;";
      container.innerHTML = `
        <div style="font-size: 11.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">Bảng màu tuyển chọn (1-Click Presets):</div>
        <div class="color-presets-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
          ${COLOR_PALETTES.map(p => `
            <button type="button" class="color-preset-pill" data-hex="${p.hex}" style="display: flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; cursor: pointer; text-align: left; font-size: 11px;">
              <span style="width: 14px; height: 14px; border-radius: 50%; background: ${p.hex}; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>
              <span style="font-weight: 600; color: #1e293b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.name}</span>
            </button>
          `).join("")}
        </div>
      `;
      settingsGroup.appendChild(container);

      container.querySelectorAll(".color-preset-pill").forEach(btn => {
        btn.addEventListener("click", () => {
          const hex = btn.getAttribute("data-hex");
          applyPrimaryColor(hex);
        });
      });
    }
  }

  function applyPrimaryColor(hex) {
    const preview = document.getElementById("cvContent");
    if (preview) {
      preview.style.setProperty("--cv-color", hex);
    }

    const lang = window.currentLang || "vi";
    if (window.cvData && window.cvData[lang]) {
      window.cvData[lang].primaryColor = hex;
      const cvVersion = window.cvVersion || "default";
      const cachedKey = `cv_data_${cvVersion}_${lang}`;
      localStorage.setItem(cachedKey, JSON.stringify(window.cvData[lang]));
    }

    const colorPicker = document.getElementById("primaryColorPicker");
    if (colorPicker) colorPicker.value = hex;

    showToast(`Đã áp dụng bảng màu: ${hex}`);
  }

  // ==========================================================================
  // 4. CV HEALTH & ATS QUALITY AUDIT (SCORECARD)
  // ==========================================================================

  function initCvHealthAudit() {
    // Tạo Modal Sức Khỏe CV nếu chưa có
    if (!document.getElementById("cvHealthModalOverlay")) {
      const overlay = document.createElement("div");
      overlay.className = "cl-modal-overlay cv-health-overlay";
      overlay.id = "cvHealthModalOverlay";
      overlay.setAttribute("aria-hidden", "true");
      overlay.style.display = "none";
      overlay.innerHTML = `
        <div class="cl-modal cv-health-modal" role="dialog" aria-labelledby="cvHealthModalTitle">
          <div class="cl-modal-header">
            <div class="cl-header-left">
              <span class="cl-modal-icon">📊</span>
              <div>
                <h2 id="cvHealthModalTitle" style="margin: 0; font-size: 16px; font-weight: 800; color: #0f172a;">Kiểm Tra Sức Khỏe &amp; Chấm Điểm ATS</h2>
                <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Đánh giá chất lượng nội dung CV theo chuẩn tuyển dụng quốc tế</div>
              </div>
            </div>
            <button type="button" class="cl-modal-close" id="cvHealthCloseTopBtn" aria-label="Đóng">&times;</button>
          </div>

          <div class="cv-health-body" id="cvHealthBody">
            <!-- Nội dung phân tích động -->
          </div>

          <div class="cl-modal-footer">
            <div style="font-size: 11.5px; color: #64748b;">
              💡 <b>Mục tiêu vàng:</b> Đạt từ <b>85 điểm trở lên</b> để đảm bảo vượt qua 95% bộ lọc ATS và gây ấn tượng mạnh với HR.
            </div>
            <button type="button" class="cl-btn-primary" id="cvHealthCloseBtn">Đóng ✓</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeCvHealthModal();
      });

      document.getElementById("cvHealthCloseTopBtn").addEventListener("click", closeCvHealthModal);
      document.getElementById("cvHealthCloseBtn").addEventListener("click", closeCvHealthModal);
    }

    // Gắn sự kiện cho các nút mở CV Health
    const cvHealthBtns = document.querySelectorAll("#cvHealthBtn, #mobileCvHealthBtn, .open-cv-health-btn");
    cvHealthBtns.forEach(b => {
      b.onclick = openCvHealthModal;
    });
  }

  function openCvHealthModal() {
    const overlay = document.getElementById("cvHealthModalOverlay");
    if (!overlay) return;
    runCvHealthAnalysis();
    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeCvHealthModal() {
    const overlay = document.getElementById("cvHealthModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function runCvHealthAnalysis() {
    const body = document.getElementById("cvHealthBody");
    if (!body) return;

    const lang = window.currentLang || "vi";
    const data = (window.cvData && window.cvData[lang]) ? window.cvData[lang] : {};

    // 1. Phân tích độ dài văn bản
    let fullText = "";
    if (data.objective) fullText += " " + data.objective;
    (data.experience || []).forEach(e => {
      fullText += " " + (e.desc || "");
      fullText += " " + (Array.isArray(e.tasks) ? e.tasks.join(" ") : "");
    });
    (data.projects || []).forEach(p => {
      fullText += " " + (p.desc || "");
      fullText += " " + (Array.isArray(p.tasks) ? p.tasks.join(" ") : "");
    });

    const words = fullText.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    let lengthScore = 0;
    let lengthMsg = "";
    if (wordCount >= 340 && wordCount <= 560) {
      lengthScore = 20;
      lengthMsg = "Rất lý tưởng cho 1 trang A4 chuẩn quốc tế.";
    } else if (wordCount >= 250 && wordCount < 340) {
      lengthScore = 15;
      lengthMsg = "Hơi ngắn, có thể bổ sung thêm thành tựu dự án.";
    } else if (wordCount > 560 && wordCount <= 700) {
      lengthScore = 14;
      lengthMsg = "Hơi dài, chú ý co ngắn lại để tránh tràn trang A4.";
    } else {
      lengthScore = 8;
      lengthMsg = "Quá ngắn hoặc quá dài, cần tối ưu lại dung lượng.";
    }

    // 2. Thông tin liên hệ đầy đủ
    let contactScore = 0;
    const contacts = data.contact || [];
    const hasPhone = contacts.some(c => c.icon === "phone" || /\d{8,}/.test(c.text || ""));
    const hasEmail = contacts.some(c => c.icon === "email" || /@/.test(c.text || ""));
    const hasGithub = contacts.some(c => c.icon === "github" || /github/i.test(c.text || ""));
    const hasAddress = contacts.some(c => c.icon === "address" || c.icon === "location" || /Thủ Đức|Hồ Chí Minh|Hà Nội|TP/i.test(c.text || ""));

    if (hasPhone) contactScore += 5;
    if (hasEmail) contactScore += 5;
    if (hasGithub) contactScore += 5;
    if (hasAddress) contactScore += 5;

    // 3. Action Verbs (Động từ hành động)
    const verbList = lang === "vi" ? ACTION_VERBS_VI : ACTION_VERBS_EN;
    const lowerText = fullText.toLowerCase();
    const matchedVerbs = verbList.filter(v => lowerText.includes(v.toLowerCase()));
    let verbScore = 0;
    if (matchedVerbs.length >= 8) verbScore = 25;
    else if (matchedVerbs.length >= 5) verbScore = 19;
    else if (matchedVerbs.length >= 3) verbScore = 13;
    else verbScore = 6;

    // 4. Số liệu định lượng (Measurable Metrics)
    const metricMatches = fullText.match(/\b\d+([.,]\d+)?\s*(%|giây|phút|giờ|tháng|người|lần|ms|s|requests?|users?|txs?)\b/gi) || [];
    let metricScore = 0;
    if (metricMatches.length >= 4) metricScore = 20;
    else if (metricMatches.length >= 2) metricScore = 14;
    else if (metricMatches.length === 1) metricScore = 8;
    else metricScore = 4;

    // 5. Cấu trúc các mục chuẩn ATS
    let sectionScore = 0;
    if (data.objective) sectionScore += 3;
    if (data.education && data.education.length > 0) sectionScore += 3;
    if (data.experience && data.experience.length > 0) sectionScore += 3;
    if (data.projects && data.projects.length > 0) sectionScore += 3;
    if (data.skills && data.skills.length > 0) sectionScore += 3;

    // Tổng điểm
    const totalScore = lengthScore + contactScore + verbScore + metricScore + sectionScore;

    let tierLabel = "Xuất sắc (ATS Top 5%)";
    let tierColor = "#10b981";
    let tierBadge = "🌟";
    if (totalScore < 60) {
      tierLabel = "Cần cải thiện";
      tierColor = "#ef4444";
      tierBadge = "⚠️";
    } else if (totalScore < 75) {
      tierLabel = "Khá";
      tierColor = "#f59e0b";
      tierBadge = "⚡";
    } else if (totalScore < 90) {
      tierLabel = "Tốt (ATS Friendly)";
      tierColor = "#3b82f6";
      tierBadge = "✅";
    }

    body.innerHTML = `
      <div class="cv-health-scorecard">
        <div class="cv-health-circle" style="border-color: ${tierColor};">
          <span class="cv-health-number" style="color: ${tierColor};">${totalScore}</span>
          <span class="cv-health-denom">/100</span>
        </div>
        <div class="cv-health-meta">
          <div class="cv-health-badge" style="background: ${tierColor}15; color: ${tierColor}; border: 1px solid ${tierColor}40;">
            ${tierBadge} ${tierLabel}
          </div>
          <div class="cv-health-summary">
            CV hiện tại đạt <b>${totalScore}/100 điểm</b> theo tiêu chuẩn sàng lọc tự động (ATS) và bộ chỉ số thẩm định hồ sơ kỹ sư phần mềm.
          </div>
        </div>
      </div>

      <div class="cv-health-details">
        <!-- Tiêu chí 1 -->
        <div class="cv-audit-item">
          <div class="cv-audit-header">
            <span class="cv-audit-name">📄 Dung lượng & Độ dài (${wordCount} từ)</span>
            <span class="cv-audit-score">${lengthScore}/20 đ</span>
          </div>
          <div class="cv-audit-desc">${lengthMsg}</div>
        </div>

        <!-- Tiêu chí 2 -->
        <div class="cv-audit-item">
          <div class="cv-audit-header">
            <span class="cv-audit-name">📞 Thông tin liên hệ (${contactScore / 5}/4 kênh)</span>
            <span class="cv-audit-score">${contactScore}/20 đ</span>
          </div>
          <div class="cv-audit-desc">
            ${hasPhone ? "✅ Số điện thoại" : "❌ Thiếu số điện thoại"} • 
            ${hasEmail ? "✅ Email" : "❌ Thiếu email"} • 
            ${hasGithub ? "✅ GitHub link" : "❌ Thiếu GitHub"} • 
            ${hasAddress ? "✅ Địa chỉ làm việc" : "❌ Thiếu địa chỉ"}
          </div>
        </div>

        <!-- Tiêu chí 3 -->
        <div class="cv-audit-item">
          <div class="cv-audit-header">
            <span class="cv-audit-name">🚀 Động từ hành động mạnh (${matchedVerbs.length} từ)</span>
            <span class="cv-audit-score">${verbScore}/25 đ</span>
          </div>
          <div class="cv-audit-desc">
            ${matchedVerbs.length > 0 ? `Đã dùng: <b>${matchedVerbs.slice(0, 5).join(", ")}${matchedVerbs.length > 5 ? "..." : ""}</b>` : "Cần bổ sung các động từ hành động: Xây dựng, Tối ưu, Triển khai..."}
          </div>
        </div>

        <!-- Tiêu chí 4 -->
        <div class="cv-audit-item">
          <div class="cv-audit-header">
            <span class="cv-audit-name">📈 Chỉ số định lượng & Tác động (${metricMatches.length} số liệu)</span>
            <span class="cv-audit-score">${metricScore}/20 đ</span>
          </div>
          <div class="cv-audit-desc">
            ${metricMatches.length > 0 ? `Số liệu nhận diện: <b>${metricMatches.slice(0, 4).join(", ")}</b>` : "Cần bổ sung số liệu minh chứng kết quả (ví dụ: tối ưu 40%, xử lý 100+ requests, rút ngắn 50%)."}
          </div>
        </div>

        <!-- Tiêu chí 5 -->
        <div class="cv-audit-item">
          <div class="cv-audit-header">
            <span class="cv-audit-name">📑 Cấu trúc các mục chuẩn ATS (${sectionScore / 3}/5 mục)</span>
            <span class="cv-audit-score">${sectionScore}/15 đ</span>
          </div>
          <div class="cv-audit-desc">
            Bao gồm đầy đủ: Tóm tắt, Học vấn, Kinh nghiệm, Kỹ năng và Dự án thực tế.
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 5. TRUNG TÂM XUẤT DỮ LIỆU (EXPORT CENTER)
  // ==========================================================================

  function initExportCenter() {
    if (!document.getElementById("exportCenterModalOverlay")) {
      const overlay = document.createElement("div");
      overlay.className = "cl-modal-overlay export-center-overlay";
      overlay.id = "exportCenterModalOverlay";
      overlay.setAttribute("aria-hidden", "true");
      overlay.style.display = "none";
      overlay.innerHTML = `
        <div class="cl-modal export-center-modal" role="dialog" aria-labelledby="exportCenterTitle">
          <div class="cl-modal-header">
            <div class="cl-header-left">
              <span class="cl-modal-icon">💾</span>
              <div>
                <h2 id="exportCenterTitle" style="margin: 0; font-size: 16px; font-weight: 800; color: #0f172a;">Trung Tâm Xuất Dữ Liệu CV</h2>
                <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Xuất đa định dạng chuẩn quốc tế: JSON Resume, Markdown, Plain Text</div>
              </div>
            </div>
            <button type="button" class="cl-modal-close" id="exportCenterCloseTopBtn" aria-label="Đóng">&times;</button>
          </div>

          <div class="export-center-tabs">
            <button type="button" class="export-tab active" id="tabJsonResumeBtn" data-target="paneJsonResume">🌐 JSON Resume (Chuẩn quốc tế)</button>
            <button type="button" class="export-tab" id="tabMarkdownBtn" data-target="paneMarkdown">📝 Markdown / Plain Text (Ứng tuyển)</button>
          </div>

          <div class="export-center-body">
            <!-- Pane 1: JSON Resume -->
            <div class="export-pane active" id="paneJsonResume">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">
                Định dạng chuẩn của <b>jsonresume.org</b>. Bạn có thể dùng file này để import vào các công cụ ATS, Reactive Resume, hoặc hệ thống tuyển dụng toàn cầu.
              </div>
              <textarea id="jsonResumeOutput" class="export-textarea" readonly></textarea>
              <div class="export-actions">
                <button type="button" class="cl-btn-secondary" id="copyJsonResumeBtn">📋 Sao chép JSON</button>
                <button type="button" class="cl-btn-primary" id="downloadJsonResumeBtn">📥 Tải file resume.json</button>
              </div>
            </div>

            <!-- Pane 2: Markdown / Text -->
            <div class="export-pane" id="paneMarkdown" style="display: none;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">
                Định dạng văn bản thuần sạch sẽ (clean text), thuận tiện copy dán thẳng vào các form nộp hồ sơ trực tuyến (LinkedIn Easy Apply, TopCV, VietnamWorks, ITviec).
              </div>
              <textarea id="markdownOutput" class="export-textarea" readonly></textarea>
              <div class="export-actions">
                <button type="button" class="cl-btn-secondary" id="downloadMarkdownBtn">📥 Tải file .md</button>
                <button type="button" class="cl-btn-primary" id="copyMarkdownBtn">📋 Sao chép Toàn bộ Text</button>
              </div>
            </div>
          </div>

          <div class="cl-modal-footer">
            <button type="button" class="cl-btn-primary" id="exportCenterCloseBtn">Đóng ✓</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeExportCenterModal();
      });

      document.getElementById("exportCenterCloseTopBtn").addEventListener("click", closeExportCenterModal);
      document.getElementById("exportCenterCloseBtn").addEventListener("click", closeExportCenterModal);

      // Chuyển tabs
      const tabs = overlay.querySelectorAll(".export-tab");
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          const targetId = tab.getAttribute("data-target");
          overlay.querySelectorAll(".export-pane").forEach(p => {
            p.style.display = p.id === targetId ? "block" : "none";
          });
        });
      });

      // Bind download / copy actions
      document.getElementById("copyJsonResumeBtn").addEventListener("click", () => {
        const text = document.getElementById("jsonResumeOutput").value;
        copyToClipboard(text, "Đã sao chép JSON Resume!");
      });

      document.getElementById("downloadJsonResumeBtn").addEventListener("click", () => {
        const text = document.getElementById("jsonResumeOutput").value;
        downloadTextFile(text, "resume.json", "application/json");
      });

      document.getElementById("copyMarkdownBtn").addEventListener("click", () => {
        const text = document.getElementById("markdownOutput").value;
        copyToClipboard(text, "Đã sao chép bản Markdown!");
      });

      document.getElementById("downloadMarkdownBtn").addEventListener("click", () => {
        const text = document.getElementById("markdownOutput").value;
        downloadTextFile(text, "cv-truong-dinh-anh.md", "text/markdown");
      });
    }

    // Gắn sự kiện cho các nút mở Export Center
    const exportBtns = document.querySelectorAll("#exportCenterBtn, #mobileExportCenterBtn, .open-export-center-btn");
    exportBtns.forEach(b => {
      b.onclick = openExportCenterModal;
    });
  }

  function openExportCenterModal() {
    const overlay = document.getElementById("exportCenterModalOverlay");
    if (!overlay) return;

    try {
      generateExportData();
    } catch (err) {
      console.error("Lỗi tạo dữ liệu xuất CV:", err);
    }
    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeExportCenterModal() {
    const overlay = document.getElementById("exportCenterModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function generateExportData() {
    const lang = window.currentLang || "vi";
    const data = (window.cvData && window.cvData[lang]) ? window.cvData[lang] : {};

    // Chuẩn hóa an toàn các cấu trúc dữ liệu mảng hoặc đối tượng
    const contactList = Array.isArray(data.contact) ? data.contact : [];
    const eduList = Array.isArray(data.education) 
      ? data.education 
      : (data.education && typeof data.education === "object" ? [data.education] : []);
    const expList = Array.isArray(data.experience) ? data.experience : [];
    const skillsList = Array.isArray(data.skills) ? data.skills : [];
    const projectsList = Array.isArray(data.projects) ? data.projects : [];

    // 1. Sinh JSON Resume Schema
    const phoneContact = contactList.find(c => c.icon === "phone");
    const emailContact = contactList.find(c => c.icon === "email");
    const githubContact = contactList.find(c => c.icon === "github");
    const addressContact = contactList.find(c => c.icon === "address" || c.icon === "location");

    const jsonResume = {
      "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
      "basics": {
        "name": data.name || "Trương Đình Anh",
        "label": data.title || "Full-Stack Developer",
        "email": emailContact ? emailContact.text : "tdinhanh.it@gmail.com",
        "phone": phoneContact ? phoneContact.text : "0923202861",
        "url": githubContact ? (githubContact.link || "https://github.com/dinhanhhhh") : "https://github.com/dinhanhhhh",
        "summary": data.objective || "",
        "location": {
          "address": addressContact ? addressContact.text : "Thủ Đức, TP. Hồ Chí Minh",
          "city": "Hồ Chí Minh",
          "countryCode": "VN"
        }
      },
      "work": expList.map(exp => ({
        "name": exp.name || "Tami Technology Co., Ltd",
        "position": exp.role || "Developer",
        "startDate": (exp.date && typeof exp.date === "string" && exp.date.includes("-")) ? exp.date.split("-")[0].trim() : "2025-06",
        "endDate": (exp.date && typeof exp.date === "string" && exp.date.includes("-")) ? exp.date.split("-")[1].trim() : "2025-12",
        "summary": exp.desc || "",
        "highlights": Array.isArray(exp.tasks) ? exp.tasks : []
      })),
      "education": eduList.map(edu => {
        let startYear = "2020";
        let endYear = "2024";
        if (edu.year && typeof edu.year === "string" && edu.year.includes("-")) {
          const parts = edu.year.split("-").map(p => p.trim());
          startYear = parts[0] || "2020";
          endYear = parts[1] || "2024";
        }
        return {
          "institution": edu.school || "Đại học Mở TP. Hồ Chí Minh",
          "area": edu.major || "Khoa học Máy tính",
          "studyType": "Bachelor",
          "startDate": startYear,
          "endDate": endYear
        };
      }),
      "skills": skillsList.map(sk => ({
        "name": sk.cat || "Technical Skills",
        "keywords": (sk.items || "").split(",").map(s => s.trim()).filter(Boolean)
      })),
      "projects": projectsList.map(proj => ({
        "name": proj.name || "",
        "description": proj.desc || "",
        "highlights": Array.isArray(proj.tasks) ? proj.tasks : [],
        "keywords": (proj.tech || "").split(",").map(s => s.trim()).filter(Boolean),
        "url": proj.demo || (proj.github ? proj.github : "")
      }))
    };

    const jsonEl = document.getElementById("jsonResumeOutput");
    if (jsonEl) {
      jsonEl.value = JSON.stringify(jsonResume, null, 2);
    }

    // 2. Sinh Markdown Text
    let md = `# ${data.name || "TRƯƠNG ĐÌNH ANH"}\n`;
    md += `**${data.title || "Full-Stack Developer"}**\n\n`;

    const contactStr = contactList.map(c => c.text).filter(Boolean).join(" | ");
    if (contactStr) md += `📍 ${contactStr}\n\n`;

    if (data.objective) {
      md += `## ${data.sections?.objective || "TÓM TẮT CHUYÊN MÔN"}\n${data.objective}\n\n`;
    }

    if (eduList.length > 0) {
      md += `## ${data.sections?.education || "HỌC VẤN"}\n`;
      eduList.forEach(edu => {
        md += `* **${edu.school}** (${edu.year})\n  Chuyên ngành: ${edu.major}\n`;
      });
      md += "\n";
    }

    if (data.experience && data.experience.length > 0) {
      md += `## ${data.sections?.experience || "KINH NGHIỆM LÀM VIỆC"}\n`;
      data.experience.forEach(exp => {
        md += `### ${exp.name} (${exp.date})\n`;
        md += `* Vai trò: ${exp.role}\n`;
        md += `* Mô tả: ${exp.desc}\n`;
        if (Array.isArray(exp.tasks)) {
          exp.tasks.forEach(t => md += `  - ${t}\n`);
        }
        if (exp.tech) md += `* Công nghệ: ${exp.tech}\n`;
        md += "\n";
      });
    }

    if (data.projects && data.projects.length > 0) {
      md += `## ${data.sections?.projects || "DỰ ÁN TIÊU BIỂU"}\n`;
      data.projects.forEach(proj => {
        md += `### ${proj.name} (${proj.date})\n`;
        md += `* Vai trò: ${proj.role}\n`;
        md += `* Mô tả: ${proj.desc}\n`;
        if (Array.isArray(proj.tasks)) {
          proj.tasks.forEach(t => md += `  - ${t}\n`);
        }
        if (proj.tech) md += `* Công nghệ: ${proj.tech}\n`;
        if (proj.github) md += `* GitHub: ${proj.github}\n`;
        if (proj.demo) md += `* Demo: ${proj.demo}\n`;
        md += "\n";
      });
    }

    if (data.skills && data.skills.length > 0) {
      md += `## ${data.sections?.skills || "KỸ NĂNG CHUYÊN MÔN"}\n`;
      data.skills.forEach(sk => {
        md += `* **${sk.cat}**: ${sk.items}\n`;
      });
    }

    document.getElementById("markdownOutput").value = md.trim();
  }

  // ==========================================================================
  // 6. GLOBAL SHORTCUTS & UTILITIES
  // ==========================================================================

  function bindGlobalShortcuts() {
    // Phím tắt Ctrl+K đã được tích hợp trực tiếp vào ô tìm kiếm Bản CV trong cv-router.js
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || "Đã sao chép vào bộ nhớ tạm!");
      }).catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(successMsg || "Đã sao chép vào bộ nhớ tạm!");
    } catch (e) {
      showToast("Không thể sao chép tự động!");
    }
    document.body.removeChild(ta);
  }

  function downloadTextFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Đã tải file: ${fileName}`);
  }

  function showToast(message) {
    let toast = document.getElementById("cvProToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "cvProToast";
      toast.className = "cv-pro-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Khởi động khi tải xong DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProTools);
  } else {
    initProTools();
  }

  // Expose API cho window
  window.cvProTools = {
    openCommandPalette,
    closeCommandPalette,
    toggleLayoutMode,
    applyPrimaryColor,
    openCvHealthModal,
    openExportCenterModal,
    COLOR_PALETTES
  };

})();
