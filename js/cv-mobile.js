/**
 * ===================================================================
 * CV EDITOR MOBILE CONTROLLER (js/cv-mobile.js)
 * ===================================================================
 * Xử lý toàn bộ tương tác điều khiển trên thiết bị di động (<= 992px):
 * 1. Top bar: Chuyển nhanh 43 bản CV & Đổi ngôn ngữ VI/EN.
 * 2. Bottom bar: Truy cập 1-chạm Phỏng vấn, Email, In PDF, Tiến độ.
 * 3. Bottom Sheet Drawer: Cỡ chữ A-/A+, Magic Fit, Khung A4, So khớp JD.
 * ===================================================================
 */

(function () {
  function initMobileController() {
    // 1. Đồng bộ tên bản CV hiện tại lên Mobile Top Bar
    updateCurrentVersionTitle();

    // 2. Gắn sự kiện các nút Bottom Bar
    bindBottomBarActions();

    // 3. Gắn sự kiện Bottom Sheet Drawer (Tiện ích)
    bindDrawerActions();

    // 4. Gắn sự kiện Modal chọn phiên bản CV
    bindVersionModalActions();

    // 5. Đồng bộ nút đổi ngôn ngữ VI/EN trên Mobile Top Bar
    bindLangSwitchActions();

    // 6. Gắn sự kiện Chế độ đọc (Reader Mode)
    bindReaderModeActions();

    // 7. Lắng nghe thay đổi cỡ chữ từ desktop để đồng bộ lên mobile
    syncFontSize();

    // 8. Tự động đồng bộ trạng thái Bottom Bar khi người dùng tương tác
    document.addEventListener("click", () => setTimeout(syncMobileNavActiveState, 80));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setTimeout(syncMobileNavActiveState, 80);
    });

    // 9. Tự động thu nhỏ tờ CV khổ A4 vừa khít màn hình mobile (Kiến trúc TopCV)
    initCvCanvasScale();
  }

  /**
   * Cập nhật tên bản CV hiện tại lên Mobile Top Bar (B3: Nhãn ngắn gọn + tooltip đầy đủ)
   */
  function updateCurrentVersionTitle() {
    const titleEl = document.getElementById("mobileCurrentVersionText");
    if (!titleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const currentKey = urlParams.get("type") || "default";

    if (window.CV_MANIFEST && Array.isArray(window.CV_MANIFEST)) {
      const found = window.CV_MANIFEST.find(item => item.key === currentKey);
      if (found) {
        const emoji = found.emoji || "📦";
        const shortName = found.key === "default" ? "BẢN CHUẨN" : found.key.toUpperCase();
        titleEl.textContent = `${emoji} ${shortName}`;
        titleEl.title = found.label || found.key;
        return;
      }
    }
    titleEl.textContent = "📦 CHỌN BẢN CV";
    titleEl.title = "Bấm để chọn bản CV";
  }

  /**
   * Bật/Tắt Chế độ đọc 1 cột reflow thân thiện trên điện thoại (B2)
   */
  function toggleReaderMode() {
    const isReader = document.body.classList.toggle("cv-reader-mode");
    const topBtn = document.getElementById("mobileReaderModeBtn");
    const drawerBtn = document.getElementById("mobileDrawerReaderBtn");

    if (topBtn) {
      topBtn.textContent = isReader ? "📄 A4" : "📖 Đọc";
      topBtn.classList.toggle("active", isReader);
    }
    if (drawerBtn) {
      const label = drawerBtn.querySelector("span:last-child");
      if (label) label.textContent = isReader ? "Chế độ A4" : "Chế độ đọc";
    }

    if (typeof window.updateCvScale === "function") {
      window.updateCvScale();
    }
  }

  function bindReaderModeActions() {
    const topBtn = document.getElementById("mobileReaderModeBtn");
    if (topBtn) {
      topBtn.addEventListener("click", toggleReaderMode);
    }
  }

  /**
   * Đóng tất cả modal / overlay của mobile trừ cái đang chọn
   */
  function closeAllMobileModals(except = "") {
    if (except !== "drawer") {
      const drawer = document.getElementById("mobileDrawerOverlay");
      if (drawer) drawer.classList.remove("open");
    }
    if (except !== "version") {
      const versionModal = document.getElementById("mobileVersionsOverlay");
      if (versionModal) versionModal.classList.remove("open");
    }
    if (except !== "interview") {
      const interviewOverlay = document.getElementById("interviewModalOverlay");
      if (interviewOverlay) {
        if (typeof window.closeInterviewPrepModal === "function") {
          window.closeInterviewPrepModal();
        } else {
          interviewOverlay.style.display = "none";
          document.body.style.overflow = "";
        }
      }
    }
    if (except !== "email") {
      const emailOverlay = document.getElementById("clModalOverlay");
      if (emailOverlay) {
        if (window.cvEmailGen && typeof window.cvEmailGen.closeModal === "function") {
          window.cvEmailGen.closeModal();
        } else {
          emailOverlay.style.display = "none";
          emailOverlay.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        }
      }
    }
    if (except !== "tracker") {
      const trackerOverlay = document.getElementById("jobTrackerModalOverlay");
      if (trackerOverlay) {
        if (window.cvTracker && typeof window.cvTracker.closeModal === "function") {
          window.cvTracker.closeModal();
        } else {
          trackerOverlay.style.display = "none";
          trackerOverlay.setAttribute("aria-hidden", "true");
          document.body.classList.remove("modal-open");
          document.body.style.overflow = "";
        }
      }
    }
    syncMobileNavActiveState();
  }

  /**
   * Cập nhật trạng thái active (đang mở) cho các nút trên Mobile Bottom Bar
   */
  function syncMobileNavActiveState() {
    const navInterview = document.getElementById("mobileNavInterview");
    const navEmail = document.getElementById("mobileNavEmail");
    const navTracker = document.getElementById("mobileNavTracker");
    const navTools = document.getElementById("mobileNavTools");

    const interviewOverlay = document.getElementById("interviewModalOverlay");
    const emailOverlay = document.getElementById("clModalOverlay");
    const trackerOverlay = document.getElementById("jobTrackerModalOverlay");
    const drawerOverlay = document.getElementById("mobileDrawerOverlay");

    const isInterviewOpen = !!(interviewOverlay && (interviewOverlay.style.display === "flex" || interviewOverlay.style.display === "block"));
    const isEmailOpen = !!(emailOverlay && (emailOverlay.style.display === "flex" || emailOverlay.style.display === "block" || emailOverlay.getAttribute("aria-hidden") === "false"));
    const isTrackerOpen = !!(trackerOverlay && (trackerOverlay.style.display === "flex" || trackerOverlay.style.display === "block" || trackerOverlay.getAttribute("aria-hidden") === "false"));
    const isDrawerOpen = !!(drawerOverlay && drawerOverlay.classList.contains("open"));

    if (navInterview) navInterview.classList.toggle("active", isInterviewOpen);
    if (navEmail) navEmail.classList.toggle("active", isEmailOpen);
    if (navTracker) navTracker.classList.toggle("active", isTrackerOpen);
    if (navTools) navTools.classList.toggle("active", isDrawerOpen);
  }

  /**
   * Gắn sự kiện cho các nút trên Mobile Bottom Bar (Hỗ trợ ấn lần nữa để tắt/mở)
   */
  function bindBottomBarActions() {
    const navInterview = document.getElementById("mobileNavInterview");
    const navEmail = document.getElementById("mobileNavEmail");
    const navPrint = document.getElementById("mobileNavPrint");
    const navTracker = document.getElementById("mobileNavTracker");
    const navTools = document.getElementById("mobileNavTools");

    // 1. Ôn phỏng vấn (Toggle: mở nếu đang đóng, đóng nếu đang mở)
    if (navInterview) {
      navInterview.addEventListener("click", () => {
        const overlay = document.getElementById("interviewModalOverlay");
        const isOpen = overlay && (overlay.style.display === "flex" || overlay.style.display === "block");
        if (isOpen) {
          if (typeof window.closeInterviewPrepModal === "function") {
            window.closeInterviewPrepModal();
          } else {
            overlay.style.display = "none";
            document.body.style.overflow = "";
          }
        } else {
          closeAllMobileModals("interview");
          const originBtn = document.getElementById("interviewPrepBtn");
          if (originBtn) originBtn.click();
          else if (typeof window.openInterviewPrepModal === "function") window.openInterviewPrepModal();
        }
        setTimeout(syncMobileNavActiveState, 80);
      });
    }

    // 2. Soạn thư & Email (Toggle)
    if (navEmail) {
      navEmail.addEventListener("click", () => {
        const overlay = document.getElementById("clModalOverlay");
        const isOpen = overlay && (overlay.style.display === "flex" || overlay.style.display === "block" || overlay.getAttribute("aria-hidden") === "false");
        if (isOpen) {
          if (window.cvEmailGen && typeof window.cvEmailGen.closeModal === "function") {
            window.cvEmailGen.closeModal();
          } else {
            overlay.style.display = "none";
            overlay.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
          }
        } else {
          closeAllMobileModals("email");
          const originBtn = document.getElementById("coverLetterBtn");
          if (originBtn) originBtn.click();
        }
        setTimeout(syncMobileNavActiveState, 80);
      });
    }

    // 3. In / Lưu PDF (Kiểm tra tràn trang theo B6)
    if (navPrint) {
      navPrint.addEventListener("click", () => {
        // Cảnh báo nếu dung lượng vượt 100% trang A4 (B6)
        if (window.currentA4FitPercent && window.currentA4FitPercent > 100) {
          const over = window.currentA4FitPercent - 100;
          const proceed = confirm(
            `⚠️ CẢNH BÁO TRÀN TRANG A4 (+${over}%):\n\n` +
            `Dung lượng nội dung CV hiện tại đang vượt quá 1 trang A4 (${window.currentA4FitPercent}%).\n` +
            `Khi in sang PDF có thể bị rớt một vài dòng sang trang 2.\n\n` +
            `👉 Bấm OK để tiếp tục In.\n` +
            `👉 Bấm Hủy (Cancel) để dùng Magic Fit tự động co vừa khít 1 trang.`
          );
          if (!proceed) return;
        }

        const originBtn = document.getElementById("downloadBtn");
        if (originBtn) originBtn.click();
        else window.print();
      });
    }

    // 4. Tiến độ ứng tuyển (Toggle)
    if (navTracker) {
      navTracker.addEventListener("click", () => {
        const overlay = document.getElementById("jobTrackerModalOverlay");
        const isOpen = overlay && (overlay.style.display === "flex" || overlay.style.display === "block" || overlay.getAttribute("aria-hidden") === "false");
        if (isOpen) {
          if (window.cvTracker && typeof window.cvTracker.closeModal === "function") {
            window.cvTracker.closeModal();
          } else if (overlay) {
            overlay.style.display = "none";
            overlay.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
          }
        } else {
          closeAllMobileModals("tracker");
          const originBtn = document.getElementById("jobTrackerBtn");
          if (originBtn) originBtn.click();
        }
        setTimeout(syncMobileNavActiveState, 80);
      });
    }

    // 5. Nút mở Drawer Tiện ích (Toggle)
    if (navTools) {
      navTools.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileDrawer();
        setTimeout(syncMobileNavActiveState, 80);
      });
    }
  }

  /**
   * Điều khiển Bottom Sheet Drawer
   */
  function toggleMobileDrawer() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    if (!overlay) return;

    const isOpen = overlay.classList.contains("open");
    if (isOpen) {
      overlay.classList.remove("open");
    } else {
      closeAllMobileModals("drawer");
      overlay.classList.add("open");
      syncFontSize();
    }
    syncMobileNavActiveState();
  }

  function bindDrawerActions() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    const closeBtn = document.getElementById("mobileDrawerCloseBtn");

    if (closeBtn) {
      closeBtn.addEventListener("click", toggleMobileDrawer);
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) toggleMobileDrawer();
      });
    }

    // Đổi bản CV từ Drawer (B5)
    const drawerVersionBtn = document.getElementById("mobileDrawerVersionBtn");
    if (drawerVersionBtn) {
      drawerVersionBtn.addEventListener("click", () => {
        toggleMobileDrawer();
        const topVersionBtn = document.getElementById("mobileVersionBtn");
        if (topVersionBtn) topVersionBtn.click();
      });
    }

    // Đổi Chế độ đọc từ Drawer (B2)
    const drawerReaderBtn = document.getElementById("mobileDrawerReaderBtn");
    if (drawerReaderBtn) {
      drawerReaderBtn.addEventListener("click", () => {
        toggleReaderMode();
      });
    }

    // Đổi cỡ chữ A- / A+
    const btnDec = document.getElementById("mobileFontDecrease");
    const btnInc = document.getElementById("mobileFontIncrease");

    if (btnDec) {
      btnDec.addEventListener("click", () => {
        const originBtn = document.getElementById("font-decrease");
        if (originBtn) originBtn.click();
        syncFontSize();
        if (typeof window.updateCvScale === "function") setTimeout(window.updateCvScale, 60);
      });
    }

    if (btnInc) {
      btnInc.addEventListener("click", () => {
        const originBtn = document.getElementById("font-increase");
        if (originBtn) originBtn.click();
        syncFontSize();
        if (typeof window.updateCvScale === "function") setTimeout(window.updateCvScale, 60);
      });
    }

    // Các nút chức năng trong Drawer -> Trigger nút gốc tương ứng
    bindTriggerAction("mobileCvHealthBtn", "cvHealthBtn", true);
    bindTriggerAction("mobileToggleLayoutBtn", "layoutSwitcherBtn", true);
    bindTriggerAction("mobileExportCenterBtn", "exportCenterBtn", true);
    bindTriggerAction("mobileMagicFitBtn", "magicFitBtn", true);
    bindTriggerAction("mobileA4PreviewBtn", "a4PreviewBtn", true);
    bindTriggerAction("mobileResetBtn", "resetBtn", true);
    bindTriggerAction("mobileResetDataBtn", "resetDataBtn", true);
    bindTriggerAction("mobileAtsBtn", "atsMatchBtn", true);
    bindTriggerAction("mobileHrViewBtn", "hrViewBtn", true);
    bindTriggerAction("mobileLiveEditBtn", "liveEditBtn", true);
    bindTriggerAction("mobileDiffBtn", "diffBtn", true);
    bindTriggerAction("mobileSettingsBtn", "settingsBtn", true);
    bindTriggerAction("mobileHotkeysBtn", "hotkeysBtn", true);
  }

  function bindTriggerAction(mobileId, desktopId, closeDrawerAfter = false) {
    const mobileBtn = document.getElementById(mobileId);
    if (!mobileBtn) return;

    mobileBtn.addEventListener("click", () => {
      const desktopBtn = document.getElementById(desktopId);
      if (desktopBtn) desktopBtn.click();
      if (closeDrawerAfter) toggleMobileDrawer();
      if (typeof window.updateCvScale === "function") setTimeout(window.updateCvScale, 100);
    });
  }

  /**
   * Đồng bộ hiển thị cỡ chữ
   */
  function syncFontSize() {
    const displayDesktop = document.getElementById("fontSizeDisplay");
    const displayMobile = document.getElementById("mobileFontDisplay");
    if (displayDesktop && displayMobile) {
      displayMobile.textContent = displayDesktop.textContent || "10.5pt";
    }
  }

  /**
   * Modal chọn bản CV trên Mobile
   */
  function bindVersionModalActions() {
    const versionBtn = document.getElementById("mobileVersionBtn");
    const modalOverlay = document.getElementById("mobileVersionsOverlay");
    const closeBtn = document.getElementById("mobileVersionsCloseBtn");
    const searchInput = document.getElementById("mobileVersionsSearchInput");
    const listContainer = document.getElementById("mobileVersionsList");
    const countEl = document.getElementById("mobileVersionCount");

    if (!versionBtn || !modalOverlay) return;

    // Mở / Đóng modal khi bấm nút
    versionBtn.addEventListener("click", () => {
      if (modalOverlay.classList.contains("open")) {
        modalOverlay.classList.remove("open");
        return;
      }
      closeAllMobileModals("version");
      renderMobileVersionList();
      modalOverlay.classList.add("open");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
    });

    // Đóng modal
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("open");
        syncMobileNavActiveState();
      });
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
        syncMobileNavActiveState();
      }
    });

    // Lọc danh sách bản CV
    if (searchInput && listContainer) {
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        const items = listContainer.querySelectorAll(".mobile-version-item");
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          const match = !q || text.includes(q);
          item.style.display = match ? "flex" : "none";
        });

        // Ẩn tiêu đề nhóm nếu các item bên dưới đều ẩn
        const headers = listContainer.querySelectorAll(".mobile-version-group-header");
        headers.forEach(h => {
          let sib = h.nextElementSibling;
          let hasVisible = false;
          while (sib && !sib.classList.contains("mobile-version-group-header")) {
            if (sib.classList.contains("mobile-version-item") && sib.style.display !== "none") {
              hasVisible = true;
              break;
            }
            sib = sib.nextElementSibling;
          }
          h.style.display = hasVisible ? "" : "none";
        });
      });
    }

    function renderMobileVersionList() {
      if (!listContainer) return;
      listContainer.innerHTML = "";

      const manifest = window.CV_MANIFEST || [];
      if (countEl) countEl.textContent = manifest.length;

      const urlParams = new URLSearchParams(window.location.search);
      const currentKey = urlParams.get("type") || "default";

      const storage = window.cvVersionStorage || {
        getPinnedKeys: () => [],
        getRecentKeys: () => []
      };

      const pinnedKeys = storage.getPinnedKeys();
      const recentKeys = storage.getRecentKeys().filter(k => !pinnedKeys.includes(k));

      function createMobileItem(item, isPinned = false) {
        const a = document.createElement("a");
        a.className = "mobile-version-item" + (item.key === currentKey ? " active" : "");
        a.href = `?type=${encodeURIComponent(item.key)}`;
        a.dataset.key = item.key;
        a.innerHTML = `
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 600; color: ${item.key === currentKey ? '#fff' : '#0f172a'}; font-size: 13px; line-height: 1.3;">${item.label || item.key}</div>
            <div style="font-size: 10.5px; opacity: ${item.key === currentKey ? '0.85' : '0.65'}; margin-top: 2px; font-family: monospace;">type=${item.key}</div>
          </div>
          ${item.key === currentKey ? '<span style="font-size: 14px; margin-left: 6px; font-weight: bold;">✓</span>' : (isPinned ? '<span style="font-size: 13px; margin-left: 6px;">📌</span>' : '')}
        `;
        return a;
      }

      // 1. Nhóm Ghim (nếu có)
      if (pinnedKeys.length > 0) {
        const h = document.createElement("div");
        h.className = "mobile-version-group-header";
        h.textContent = `📌 ĐÃ GHIM (${pinnedKeys.length})`;
        listContainer.appendChild(h);

        pinnedKeys.forEach(k => {
          const item = manifest.find(m => m.key === k);
          if (item) listContainer.appendChild(createMobileItem(item, true));
        });
      }

      // 2. Nhóm Gần đây (nếu có)
      if (recentKeys.length > 0) {
        const h = document.createElement("div");
        h.className = "mobile-version-group-header";
        h.textContent = `🕒 GẦN ĐÂY (${recentKeys.length})`;
        listContainer.appendChild(h);

        recentKeys.forEach(k => {
          const item = manifest.find(m => m.key === k);
          if (item) listContainer.appendChild(createMobileItem(item, false));
        });
      }

      // 3. Nhóm các bản CV còn lại (loại trừ các bản đã ghim / gần đây để không bị trùng lặp)
      const otherVersions = manifest.filter(item => !pinnedKeys.includes(item.key) && !recentKeys.includes(item.key));
      if (otherVersions.length > 0) {
        const hAll = document.createElement("div");
        hAll.className = "mobile-version-group-header";
        hAll.textContent = (pinnedKeys.length > 0 || recentKeys.length > 0)
          ? `📂 CÁC BẢN KHÁC (${otherVersions.length})`
          : `📂 TẤT CẢ BẢN CV (${manifest.length})`;
        listContainer.appendChild(hAll);

        otherVersions.forEach(item => {
          listContainer.appendChild(createMobileItem(item, false));
        });
      }
    }
  }

  /**
   * Đổi ngôn ngữ VI / EN trên Mobile Top Bar
   */
  function bindLangSwitchActions() {
    const viBtn = document.getElementById("mobileLangVi");
    const enBtn = document.getElementById("mobileLangEn");
    const origVi = document.getElementById("lang-vi");
    const origEn = document.getElementById("lang-en");

    if (viBtn && origVi) {
      viBtn.addEventListener("click", () => {
        origVi.click();
        viBtn.classList.add("active");
        if (enBtn) enBtn.classList.remove("active");
      });
    }

    if (enBtn && origEn) {
      enBtn.addEventListener("click", () => {
        origEn.click();
        enBtn.classList.add("active");
        if (viBtn) viBtn.classList.remove("active");
      });
    }
  }

  /**
   * Tự động tính toán scale và kích thước wrapper để tờ CV A4 hiển thị cân đối hoàn hảo
   * Bọc trong wrapper (cvPaperContainer) có width/height đúng bằng kích thước sau scale
   * Căn giữa bằng flex, transform-origin: top left, không bị lệch phải
   */
  function initCvCanvasScale() {
    let manualScale = null;

    function updateScale(forceFit = false) {
      if (forceFit) {
        manualScale = null;
      }

      const cvEl = document.getElementById("cvContent");
      const wrapper = document.getElementById("cvPaperContainer");
      const viewport = document.getElementById("cvViewportWrapper") || document.body;
      if (!cvEl || !wrapper) return;

      // Nếu đang ở Chế độ đọc (Reader Mode), để layout tự nhiên 1 cột
      if (document.body.classList.contains("cv-reader-mode")) {
        wrapper.style.width = "";
        wrapper.style.height = "";
        cvEl.style.width = "";
        cvEl.style.transform = "";
        cvEl.style.position = "";
        return;
      }

      const baseWidth = 794; // Khổ A4 chuẩn 210mm ở 96 DPI
      const fullHeight = cvEl.scrollHeight || cvEl.offsetHeight || 1123;
      const w = window.innerWidth;
      let availWidth;

      if (w <= 600) {
        // Mobile: trừ 16px padding 2 bên (8px mỗi bên)
        availWidth = Math.max(100, viewport.clientWidth - 16);
      } else if (w <= 1024) {
        // Tablet: trừ 32px padding 2 bên
        availWidth = Math.max(100, viewport.clientWidth - 32);
      } else if (w < 1360) {
        // Desktop nhỏ hoặc Zoom: trừ không gian an toàn cho 2 dock 2 bên (140px)
        availWidth = Math.max(100, viewport.clientWidth - 140);
      } else {
        // Desktop rộng
        availWidth = Math.max(100, viewport.clientWidth - 260);
      }

      let scale = availWidth < baseWidth ? availWidth / baseWidth : 1;
      if (manualScale !== null && !forceFit) {
        scale = manualScale;
      }
      scale = Math.min(2.0, Math.max(0.2, scale));

      const scaledWidth = Math.round(baseWidth * scale);
      const scaledHeight = Math.round(fullHeight * scale);

      wrapper.style.width = `${scaledWidth}px`;
      wrapper.style.height = `${scaledHeight}px`;

      cvEl.style.width = `${baseWidth}px`;
      cvEl.style.transformOrigin = "top left";
      cvEl.style.transform = `scale(${scale.toFixed(4)})`;

      if (w <= 992) {
        cvEl.style.position = "absolute";
        cvEl.style.top = "0";
        cvEl.style.left = "0";
        document.documentElement.style.setProperty("--cv-mobile-scale", scale.toFixed(4));
        document.documentElement.style.removeProperty("--cv-desktop-scale");
      } else {
        if (scale < 1 || manualScale !== null) {
          cvEl.style.position = "absolute";
          cvEl.style.top = "0";
          cvEl.style.left = "0";
          document.documentElement.style.setProperty("--cv-desktop-scale", scale.toFixed(4));
        } else {
          cvEl.style.position = "static";
          cvEl.style.transform = "none";
          wrapper.style.width = `${baseWidth}px`;
          wrapper.style.height = `${fullHeight}px`;
          document.documentElement.style.removeProperty("--cv-desktop-scale");
        }
        document.documentElement.style.removeProperty("--cv-mobile-scale");
      }
    }

    // Double-tap zoom & Pinch-to-zoom trên mobile (B2)
    const wrapper = document.getElementById("cvPaperContainer");
    if (wrapper) {
      let lastTap = 0;
      let isZoomed = false;
      let pinchStartDist = 0;
      let initialScale = 1;

      wrapper.addEventListener("touchstart", (e) => {
        if (document.body.classList.contains("cv-reader-mode")) return;
        if (e.touches.length === 2) {
          pinchStartDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialScale = manualScale || 1;
        }
      }, { passive: true });

      wrapper.addEventListener("touchmove", (e) => {
        if (document.body.classList.contains("cv-reader-mode")) return;
        if (e.touches.length === 2 && pinchStartDist > 0) {
          const currentDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const factor = currentDist / pinchStartDist;
          manualScale = Math.min(2.5, Math.max(0.35, initialScale * factor));
          updateScale();
        }
      }, { passive: true });

      wrapper.addEventListener("touchend", (e) => {
        if (document.body.classList.contains("cv-reader-mode")) return;
        if (e.touches.length < 2) {
          pinchStartDist = 0;
        }
        if (e.changedTouches.length === 1 && e.touches.length === 0) {
          const now = Date.now();
          if (now - lastTap < 320) {
            e.preventDefault();
            isZoomed = !isZoomed;
            manualScale = isZoomed ? 1.15 : null;
            updateScale();
          }
          lastTap = now;
        }
      });
    }

    // ResizeObserver tự động tính lại khi layout container thay đổi
    if (window.ResizeObserver && document.body) {
      const ro = new ResizeObserver(() => {
        updateScale();
      });
      ro.observe(document.body);
      const viewport = document.getElementById("cvViewportWrapper");
      if (viewport) ro.observe(viewport);
    }

    // Chạy khi khởi tạo và khi cửa sổ thay đổi kích thước hoặc xoay màn hình
    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", () => setTimeout(updateScale, 150));

    // Chạy lại sau khi DOM hoặc dữ liệu CV render xong
    setTimeout(updateScale, 100);
    setTimeout(updateScale, 300);
    setTimeout(updateScale, 800);

    // Xuất hàm toàn cục để các controller khác gọi
    window.updateCvScale = updateScale;
    window.fitCvToScreen = () => updateScale(true);
    window.setManualCvScale = (s) => {
      manualScale = s;
      updateScale();
    };
  }

  // Khởi động khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileController);
  } else {
    initMobileController();
  }
})();
