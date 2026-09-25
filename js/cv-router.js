/* ===================================
   CV ROUTER - Dynamic Data Loading
   =================================== */
(function () {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('type');
  const draftKey = params.get('draft');

  // Cho phep tuy bien worker URL qua tham so ?worker=... hoac bien toan cuc
  const workerParam = params.get('worker');
  if (workerParam) {
    try {
      localStorage.setItem('CV_WORKER_URL', workerParam);
    } catch (e) {}
  }

  const defaultWorkerUrl = 'https://cv-telegram-bridge.tdinhanh-it.workers.dev';
  const workerApiBase =
    window.CV_WORKER_URL ||
    (function () {
      try {
        return localStorage.getItem('CV_WORKER_URL');
      } catch (e) {
        return null;
      }
    })() ||
    defaultWorkerUrl;

  function renderDraftBanner(key, status, errorMsg) {
    let banner = document.getElementById('cvDraftBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'cvDraftBanner';
      banner.className = 'cv-draft-banner no-print';
      document.body.appendChild(banner);
    }

    const upper = key.toUpperCase();
    if (status === 'loading') {
      banner.className = 'cv-draft-banner loading no-print';
      banner.innerHTML = `
        <div class="draft-content">
          <span class="draft-badge">⏳ ĐANG TẢI BẢN NHÁP</span>
          <span class="draft-desc">Đang kéo dữ liệu #${upper} từ Cloudflare KV...</span>
        </div>
      `;
    } else if (status === 'ready') {
      banner.className = 'cv-draft-banner ready no-print';
      banner.innerHTML = `
        <div class="draft-content">
          <span class="draft-badge">📝 BẢN NHÁP (DRAFT)</span>
          <span class="draft-title">#${upper}</span>
          <span class="draft-desc">Lưu tạm trên Cloudflare KV (Git sạch 100%).</span>
        </div>
        <div class="draft-actions">
          <span class="draft-hint">Chốt bản này? Gõ trên Telegram: <code>/publish #${key.toLowerCase()}</code></span>
        </div>
      `;
    } else if (status === 'error') {
      banner.className = 'cv-draft-banner error no-print';
      banner.innerHTML = `
        <div class="draft-content">
          <span class="draft-badge">⚠️ LỖI BẢN NHÁP</span>
          <span class="draft-desc">${errorMsg || 'Không thể tải bản nháp.'}</span>
        </div>
      `;
      setTimeout(() => banner && banner.remove(), 7000);
    }
  }

  function fetchDraftCv(key) {
    renderDraftBanner(key, 'loading');
    const endpoint = `${workerApiBase.replace(/\/$/, '')}/api/cv?draft=${encodeURIComponent(key)}`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Bản nháp #${key} không tồn tại hoặc đã hết hạn 7 ngày.`);
        }
        return res.json();
      })
      .then((draftData) => {
        // Gán dữ liệu nháp vào window.cvData và đặt cvVersion
        window.cvData = draftData;
        window.cvVersion = `draft_${key}`;
        renderDraftBanner(key, 'ready');

        // Render menu phien ban ben trai
        renderNavForDraft(key);

        // Nạp global data trước rồi nạp renderer
        return loadScript('data/cv-global.js').then(() => loadScript('js/cv-renderer.js?v=1.2.3'));
      })
      .catch((err) => {
        console.warn('Lỗi tải bản nháp từ KV, chuyển về chế độ thông thường:', err);
        renderDraftBanner(key, 'error', err.message);
        startNormalRouter();
      });
  }

  function setupNavSearch() {
    const searchInput = document.getElementById('versionSearchInput');
    const container = document.getElementById('versionSwitch');
    const list = document.getElementById('versionList') || container;
    if (!searchInput || !list) return;

    // Prevent duplicate event listeners
    if (searchInput.dataset.initialized) return;
    searchInput.dataset.initialized = 'true';

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const items = list.querySelectorAll('.version-item');
      let visibleCount = 0;
      items.forEach((item) => {
        const text = (item.textContent || '').toLowerCase();
        const href = (item.getAttribute('href') || '').toLowerCase();
        const matches = !q || text.includes(q) || href.includes(q);
        item.style.display = matches ? 'block' : 'none';
        if (matches) visibleCount++;
      });

      let emptyMsg = list.querySelector('.version-empty-msg');
      if (visibleCount === 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('div');
          emptyMsg.className = 'version-empty-msg';
          emptyMsg.textContent = 'Không có kết quả';
          list.appendChild(emptyMsg);
        }
        emptyMsg.style.display = 'block';
      } else if (emptyMsg) {
        emptyMsg.style.display = 'none';
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
      } else if (e.key === 'Enter') {
        const firstVisible = list.querySelector('.version-item:not([style*="display: none"])');
        if (firstVisible) firstVisible.click();
      }
    });

    setupNavToggle();
  }

  function setupNavToggle() {
    const toggleBtn = document.getElementById('versionToggleBtn');
    const container = document.getElementById('versionSwitch');
    if (!toggleBtn || !container) return;
    if (toggleBtn.dataset.initialized) return;
    toggleBtn.dataset.initialized = 'true';

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isCollapsed = container.classList.toggle('collapsed');
      toggleBtn.textContent = isCollapsed ? '▼' : '▲';
      toggleBtn.title = isCollapsed ? 'Mở rộng danh sách bản CV' : 'Thu gọn danh sách bản CV';
    });
  }

  function renderNavForDraft(key) {
    const manifest = window.CV_MANIFEST;
    const nav = document.getElementById('versionList') || document.getElementById('versionSwitch');
    if (!nav || !manifest) return;

    const countEl = document.getElementById('versionCount');
    if (countEl) countEl.textContent = manifest.length + 1;

    // Nut draft o dau menu
    const draftBtn = document.createElement('a');
    draftBtn.className = 'version-item active';
    draftBtn.href = window.location.href;
    draftBtn.textContent = `📝 #${key.toUpperCase()} (DRAFT)`;
    draftBtn.title = `Bản nháp ${key}`;
    nav.appendChild(draftBtn);

    manifest.forEach((v) => {
      const a = document.createElement('a');
      a.className = 'version-item';
      a.id = manifest.navId(v.key);
      a.href = v.key === 'default' ? 'index.html' : 'index.html?type=' + encodeURIComponent(v.key);
      a.textContent = v.label;
      a.title = v.label;
      nav.appendChild(a);
    });

    setupNavSearch();
  }

  function startNormalRouter() {
    const manifest = window.CV_MANIFEST;
    if (!manifest) {
      console.error('CV_MANIFEST chưa được nạp. Kiểm tra thứ tự <script> trong index.html.');
      return;
    }

    const ver =
      manifest.byKey(mode) ||
      (mode
        ? {
            key: mode,
            file: `data/cv-data-${mode}.js`,
            emoji: '⚡',
            label: `⚡ ${mode.toUpperCase()}`,
          }
        : manifest.byKey('default'));

    // Render menu chọn phiên bản từ manifest (thay cho hardcode trong HTML)
    function renderNav() {
      const nav = document.getElementById('versionList') || document.getElementById('versionSwitch');
      if (!nav) return;

      const countEl = document.getElementById('versionCount');
      if (countEl) countEl.textContent = manifest.length;

      manifest.forEach((v) => {
        const a = document.createElement('a');
        a.className = 'version-item';
        a.id = manifest.navId(v.key);
        a.href = v.key === 'default' ? 'index.html' : 'index.html?type=' + encodeURIComponent(v.key);
        a.textContent = v.label;
        a.title = v.label;
        nav.appendChild(a);
      });

      // Neu type dang xem chua co trong manifest, them tam 1 nut active vao dau menu
      if (mode && !manifest.byKey(mode)) {
        const a = document.createElement('a');
        a.className = 'version-item active';
        a.id = manifest.navId(ver.key);
        a.href = 'index.html?type=' + encodeURIComponent(ver.key);
        a.textContent = ver.label;
        a.title = ver.label;
        nav.insertBefore(a, nav.firstChild);
      }

      setupNavSearch();
    }

    // Highlight nút phiên bản đang chọn sau khi DOM sẵn sàng
    function highlightActive() {
      renderNav();
      const btn = document.getElementById(manifest.navId(ver.key));
      if (btn) {
        btn.classList.add('active');
        setTimeout(() => {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', highlightActive);
    } else {
      highlightActive();
    }

    // Cập nhật Favicon theo emoji của phiên bản
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${ver.emoji}</text></svg>`;
    document.head.appendChild(link);

    // Nạp global data trước → data version → renderer
    loadScript('data/cv-global.js')
      .then(() =>
        loadScript(ver.file).catch((err) => {
          console.warn(`Khong the tai ${ver.file}, chuyen ve phien ban mac dinh:`, err);
          const def = manifest.byKey('default');
          return loadScript(def.file);
        })
      )
      .then(() => loadScript('js/cv-renderer.js?v=1.2.3'))
      .catch((error) => {
        console.error(error);
      });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const versionedSrc = window.withCvVersion ? window.withCvVersion(src) : (src + '?v=1.1.5');
      script.src = versionedSrc;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load script: ${versionedSrc}`));
      document.head.appendChild(script);
    });
  }

  function init() {
    if (draftKey) {
      fetchDraftCv(draftKey);
    } else {
      startNormalRouter();
    }
  }

  if (window.CV_MANIFEST) {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
})();
