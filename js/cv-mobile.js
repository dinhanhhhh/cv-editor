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

    // 6. Lắng nghe thay đổi cỡ chữ từ desktop để đồng bộ lên mobile
    syncFontSize();

    // 7. Tự động đồng bộ trạng thái Bottom Bar khi người dùng tương tác
    document.addEventListener("click", () => setTimeout(syncMobileNavActiveState, 80));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setTimeout(syncMobileNavActiveState, 80);
    });

    // 8. Tự động thu nhỏ tờ CV khổ A4 vừa khít màn hình mobile (Kiến trúc TopCV)
    initCvCanvasScale();
  }

  /**
   * Cập nhật tên bản CV hiện tại lên Mobile Top Bar
   */
  function updateCurrentVersionTitle() {
    const titleEl = document.getElementById("mobileCurrentVersionText");
    if (!titleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const currentKey = urlParams.get("type") || "default";

    if (window.CV_MANIFEST && Array.isArray(window.CV_MANIFEST)) {
      const found = window.CV_MANIFEST.find(item => item.key === currentKey);
      if (found) {
        titleEl.textContent = found.label || `📦 ${found.key}`;
        return;
      }
    }
    titleEl.textContent = "📦 Chọn bản CV";
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

    // 3. In / Lưu PDF
    if (navPrint) {
      navPrint.addEventListener("click", () => {
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
      });
    }

    function renderMobileVersionList() {
      if (!listContainer) return;
      listContainer.innerHTML = "";

      const manifest = window.CV_MANIFEST || [];
      if (countEl) countEl.textContent = manifest.length;

      const urlParams = new URLSearchParams(window.location.search);
      const currentKey = urlParams.get("type") || "default";

      manifest.forEach(item => {
        const a = document.createElement("a");
        a.className = "mobile-version-item" + (item.key === currentKey ? " active" : "");
        a.href = `?type=${encodeURIComponent(item.key)}`;
        a.innerHTML = `
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 600; color: ${item.key === currentKey ? '#fff' : '#0f172a'}; font-size: 11.5px; line-height: 1.25;">${item.label || item.key}</div>
            <div style="font-size: 9.5px; opacity: ${item.key === currentKey ? '0.85' : '0.6'}; margin-top: 1px; font-family: monospace;">type=${item.key}</div>
          </div>
          ${item.key === currentKey ? '<span style="font-size: 12px; margin-left: 6px;">✓</span>' : ''}
        `;
        listContainer.appendChild(a);
      });
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
   * Tự động tính toán scale và bù trừ khoảng trống để tờ CV A4 hiển thị trọn vẹn như TopCV
   */
  function initCvCanvasScale() {
    function updateScale() {
      if (window.innerWidth > 992) {
        document.documentElement.style.removeProperty("--cv-mobile-scale");
        document.documentElement.style.removeProperty("--cv-mobile-margin-bottom");
        return;
      }

      const cvEl = document.getElementById("cvContent");
      if (!cvEl) return;

      // Chiều rộng khả dụng trên mobile (trừ 16px lề hai bên)
      const availWidth = window.innerWidth - 16;
      // Khổ A4 chuẩn desktop 210mm (~794px ở 96 DPI)
      const baseWidth = 794;
      const scale = Math.min(1, Math.max(0.25, availWidth / baseWidth));
      
      document.documentElement.style.setProperty("--cv-mobile-scale", scale.toFixed(4));

      // Tính khoảng bù margin-bottom do CSS transform scale tạo ra
      const fullHeight = cvEl.scrollHeight || cvEl.offsetHeight || 1123;
      const visualHeight = fullHeight * scale;
      const excessGap = fullHeight - visualHeight;
      // Dành 30px đệm dưới đáy trước khi chạm thanh mobile bottom bar (58px)
      const mb = -excessGap + 30;
      document.documentElement.style.setProperty("--cv-mobile-margin-bottom", `${Math.round(mb)}px`);
    }

    // Chạy khi khởi tạo và khi cửa sổ thay đổi kích thước
    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", () => setTimeout(updateScale, 150));

    // Chạy lại sau khi DOM hoặc dữ liệu CV render xong
    setTimeout(updateScale, 100);
    setTimeout(updateScale, 300);
    setTimeout(updateScale, 800);

    // Xuất hàm để các controller khác gọi khi font-size đổi hoặc render lại
    window.updateCvScale = updateScale;
  }

  // Khởi động khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileController);
  } else {
    initMobileController();
  }
})();
