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

  function ensureDomReady() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      window.addEventListener('DOMContentLoaded', resolve, { once: true });
    });
  }

  function normalizeDraftData(raw) {
    if (!raw) return raw;
    const data = JSON.parse(JSON.stringify(raw));
    const root = (data.cvData && (data.cvData.vi || data.cvData.en)) ? data.cvData : data;

    // Trường hợp toàn bộ field nằm phẳng ở root
    if (!root.vi && !root.en && root.name) {
      return {
        vi: Object.assign({}, root),
        en: Object.assign({}, root, { name: "TRUONG DINH ANH" })
      };
    }

    if (root.vi) {
      if (!root.vi.skills && Array.isArray(root.skills)) {
        root.vi.skills = root.skills;
      }
      if (!root.vi.btnText && root.btnText) {
        root.vi.btnText = root.btnText;
      }
      if (!root.vi.docTitle && root.docTitle) {
        root.vi.docTitle = root.docTitle;
      }
      if (!root.vi.btnText) {
        root.vi.btnText = "In / Tải PDF";
      }
    }

    // Nếu thiếu nhánh en, tự clone và dịch tiêu đề cơ bản để không bị crash khi chuyển ngôn ngữ
    if (!root.en && root.vi) {
      root.en = JSON.parse(JSON.stringify(root.vi));
      root.en.btnText = "Print / Save PDF";
      if (root.en.sections) {
        root.en.sections.objective = "PROFESSIONAL SUMMARY";
        root.en.sections.education = "EDUCATION";
        root.en.sections.experience = "WORK EXPERIENCE";
        root.en.sections.projects = "FEATURED PROJECTS";
        root.en.sections.skills = "TECHNICAL SKILLS";
      }
    }

    // Nếu thiếu nhánh vi mà có en
    if (!root.vi && root.en) {
      root.vi = JSON.parse(JSON.stringify(root.en));
      root.vi.btnText = "In / Tải PDF";
      if (root.vi.sections) {
        root.vi.sections.objective = "TÓM TẮT CHUYÊN MÔN";
        root.vi.sections.education = "HỌC VẤN";
        root.vi.sections.experience = "KINH NGHIỆM LÀM VIỆC";
        root.vi.sections.projects = "DỰ ÁN TIÊU BIỂU";
        root.vi.sections.skills = "KỸ NĂNG CHUYÊN MÔN";
      }
    }

    // Quy tắc bắt buộc: role luôn luôn là 'Developer'
    ['vi', 'en'].forEach((lang) => {
      if (root[lang]) {
        if (Array.isArray(root[lang].projects)) {
          root[lang].projects.forEach((p) => { p.role = "Developer"; });
        }
        if (Array.isArray(root[lang].experience)) {
          root[lang].experience.forEach((e) => { e.role = "Developer"; });
        }
      }
    });

    return root;
  }

  function renderDraftBanner(key, status, errorMsg) {
    const attachBanner = () => {
      if (!document.body) return;
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
    };

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', attachBanner, { once: true });
    } else {
      attachBanner();
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
        const normalized = normalizeDraftData(draftData);
        window.cvData = normalized;
        window.cvVersion = `draft_${key}`;
        renderDraftBanner(key, 'ready');

        return ensureDomReady().then(() => {
          renderNavForDraft(key);
          return loadScript('data/cv-global.js').then(() => loadScript('js/cv-renderer.js?v=1.2.4'));
        });
      })
      .catch((err) => {
        console.warn('Lỗi tải bản nháp từ KV, chuyển về chế độ thông thường:', err);
        renderDraftBanner(key, 'error', err.message);
        startNormalRouter();
      });
  }

  // Hàm loại bỏ dấu tiếng Việt chuẩn
  function removeVietnameseDiacritics(str) {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  // Từ điển từ đồng nghĩa công nghệ & vai trò
  const SEARCH_SYNONYMS = {
    'fe': 'frontend front-end web client react vue angular typescript js html css ui',
    'frontend': 'fe web react client ui',
    'be': 'backend back-end server node express api nest database sql',
    'backend': 'be server api database',
    'fs': 'fullstack full-stack web dev developer mern',
    'fullstack': 'fs full-stack web all',
    'node': 'nodejs node.js backend be express mern server',
    'react': 'reactjs react.js frontend fe mern web nextjs next',
    'next': 'nextjs next.js react reactjs frontend',
    'ts': 'typescript js javascript',
    'js': 'javascript ts typescript',
    'ai': 'artificial intelligence agent llm automation bot genai chatgpt gpt model',
    'qa': 'tester qc test kiem thu quality assurance manual automation',
    'qc': 'tester qa test kiem thu quality control manual automation',
    'intern': 'thuc tap internship inter trainee fresher junior',
    'thuc tap': 'intern internship trainee',
    'fresher': 'junior moi tot nghiep entry intern',
    'junior': 'fresher intern entry',
    'wp': 'wordpress cms web theme plugin',
    'wordpress': 'wp cms blog web',
    'sb': 'san bay airport lien khuong flight aviation',
    'cntt': 'it cong nghe thong tin engineer helpdesk support ky su',
    'ecom': 'ecommerce e-commerce thuong mai dien tu shop ban hang cg cart store',
    'remote': 'us tu xa lam tu xa wfh'
  };

  function getSearchableKeywords(key, label) {
    const raw = `${key || ''} ${label || ''}`.toLowerCase();
    const noDiacritics = removeVietnameseDiacritics(raw);
    
    // Gộp các từ đồng nghĩa nếu từ khóa xuất hiện trong raw hoặc noDiacritics
    let extra = [];
    for (const [abbr, expansion] of Object.entries(SEARCH_SYNONYMS)) {
      const regex = new RegExp(`(^|[^a-z0-9])${abbr}([^a-z0-9]|$)`, 'i');
      if (regex.test(raw) || regex.test(noDiacritics)) {
        extra.push(expansion);
      }
    }
    
    return `${raw} ${noDiacritics} ${extra.join(' ')}`.replace(/\s+/g, ' ').trim();
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
      const rawQ = e.target.value.trim().toLowerCase();
      const cleanQ = removeVietnameseDiacritics(rawQ);
      const tokens = cleanQ.split(/\s+/).filter(Boolean);
      const items = list.querySelectorAll('.version-item');
      let visibleCount = 0;
      const totalCount = items.length;

      items.forEach((item) => {
        if (tokens.length === 0) {
          item.style.display = '';
          visibleCount++;
          return;
        }

        const keywords = item.dataset.searchKeywords || 
          getSearchableKeywords(item.dataset.key || '', item.textContent || '');
        
        // Mọi token gõ vào đều phải khớp (AND logic)
        const matches = tokens.every(token => {
          if (keywords.includes(token)) return true;
          const syn = SEARCH_SYNONYMS[token];
          if (syn) {
            return syn.split(' ').some(w => keywords.includes(w));
          }
          return false;
        });

        item.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      // Ẩn/hiện tiêu đề nhóm theo trạng thái các item bên dưới
      const groupHeaders = list.querySelectorAll('.version-group-header');
      groupHeaders.forEach((gh) => {
        let sibling = gh.nextElementSibling;
        let hasItemVisible = false;
        while (sibling && !sibling.classList.contains('version-group-header')) {
          if (sibling.classList.contains('version-item') && sibling.style.display !== 'none') {
            hasItemVisible = true;
            break;
          }
          sibling = sibling.nextElementSibling;
        }
        gh.style.display = hasItemVisible ? '' : 'none';
      });

      // Cập nhật số lượng trên tiêu đề: Bản CV (5/43)
      const countEl = document.getElementById('versionCount');
      if (countEl) {
        countEl.textContent = tokens.length === 0 ? totalCount : `${visibleCount}/${totalCount}`;
      }

      let emptyMsg = list.querySelector('.version-empty-msg');
      if (visibleCount === 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('div');
          emptyMsg.className = 'version-empty-msg';
          emptyMsg.style.cssText = 'padding: 14px 10px; font-size: 11.5px; color: #94a3b8; text-align: center; font-style: italic;';
          list.appendChild(emptyMsg);
        }
        emptyMsg.textContent = `🔍 Không tìm thấy bản CV nào khớp với "${e.target.value.trim()}"`;
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

    // Phím tắt toàn cục Ctrl+K hoặc Cmd+K mở thanh Bản CV và focus vào ô tìm kiếm
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (container && searchInput) {
          container.classList.remove('collapsed');
          container.classList.add('flyout-open');
          const toggleBtn = document.getElementById('versionToggleBtn');
          if (toggleBtn) {
            toggleBtn.textContent = '▲';
            toggleBtn.title = 'Thu gọn danh sách bản CV';
          }
          searchInput.focus();
          searchInput.select();
        }
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

    function toggleVersionMenu() {
      const isCollapsed = container.classList.toggle('collapsed');
      container.classList.toggle('flyout-open', !isCollapsed);
      toggleBtn.textContent = isCollapsed ? '▼' : '▲';
      toggleBtn.title = isCollapsed ? 'Mở rộng danh sách bản CV' : 'Thu gọn danh sách bản CV';
    }

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleVersionMenu();
    });

    const header = container.querySelector('.version-header-sticky');
    if (header) {
      header.addEventListener('click', (e) => {
        if (e.target !== toggleBtn && !e.target.closest('input')) {
          toggleVersionMenu();
        }
      });
      header.addEventListener('wheel', (e) => {
        const listEl = document.getElementById('versionList');
        if (listEl) {
          listEl.scrollTop += e.deltaY;
        }
      }, { passive: true });
    }

    container.addEventListener('scroll', () => {
      if (container.scrollTop !== 0) {
        container.scrollTop = 0;
      }
    });

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        container.classList.remove('flyout-open');
      }
    });
  }

  function renderNavForDraft(key) {
    const manifest = window.CV_MANIFEST;
    const nav = document.getElementById('versionList') || document.getElementById('versionSwitch');
    if (!nav || !manifest) return;

    const countEl = document.getElementById('versionCount');
    if (countEl) countEl.textContent = manifest.length + 1;

    nav.innerHTML = '';

    // Nut draft o dau menu
    const draftBtn = document.createElement('a');
    draftBtn.className = 'version-item active';
    draftBtn.href = window.location.href;
    draftBtn.textContent = `📝 #${key.toUpperCase()} (DRAFT)`;
    draftBtn.title = `Bản nháp ${key}`;
    draftBtn.dataset.key = key;
    draftBtn.dataset.searchKeywords = getSearchableKeywords(key, draftBtn.textContent);
    nav.appendChild(draftBtn);

    manifest.forEach((v) => {
      const a = document.createElement('a');
      a.className = 'version-item';
      a.id = manifest.navId(v.key);
      a.href = v.key === 'default' ? 'index.html' : 'index.html?type=' + encodeURIComponent(v.key);
      a.textContent = v.label;
      a.title = v.label;
      a.dataset.key = v.key;
      a.dataset.searchKeywords = getSearchableKeywords(v.key, v.label);
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

    // Lưu trữ Ghim & Gần đây trong localStorage có try/catch (A5)
    function getPinnedKeys() {
      try {
        const raw = localStorage.getItem('CV_PINNED_VERSIONS');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function togglePinnedKey(key) {
      try {
        let keys = getPinnedKeys();
        const idx = keys.indexOf(key);
        if (idx >= 0) {
          keys.splice(idx, 1);
        } else {
          keys.push(key);
        }
        localStorage.setItem('CV_PINNED_VERSIONS', JSON.stringify(keys));
        return keys;
      } catch (e) {
        return [];
      }
    }

    function getRecentKeys() {
      try {
        const raw = localStorage.getItem('CV_RECENT_VERSIONS');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function recordRecentKey(key) {
      if (!key) return;
      try {
        let keys = getRecentKeys().filter((k) => k !== key);
        keys.unshift(key);
        if (keys.length > 5) keys = keys.slice(0, 5);
        localStorage.setItem('CV_RECENT_VERSIONS', JSON.stringify(keys));
      } catch (e) {}
    }

    window.cvVersionStorage = {
      getPinnedKeys,
      togglePinnedKey,
      getRecentKeys,
      recordRecentKey
    };

    function createVersionItemEl(v, isPinned, uniqueIdSuffix = '') {
      const a = document.createElement('a');
      a.className = 'version-item' + (v.key === ver.key ? ' active' : '');
      if (uniqueIdSuffix) {
        a.id = `${manifest.navId(v.key)}-${uniqueIdSuffix}`;
      } else {
        a.id = manifest.navId(v.key);
      }
      a.href = v.key === 'default' ? 'index.html' : 'index.html?type=' + encodeURIComponent(v.key);
      a.title = v.label;
      a.dataset.key = v.key;
      a.dataset.searchKeywords = getSearchableKeywords(v.key, v.label);

      const titleSpan = document.createElement('span');
      titleSpan.className = 'version-item-title';
      titleSpan.textContent = v.label;
      a.appendChild(titleSpan);

      const pinBtn = document.createElement('button');
      pinBtn.type = 'button';
      pinBtn.className = 'version-pin-btn' + (isPinned ? ' pinned' : '');
      pinBtn.title = isPinned ? 'Bỏ ghim bản CV này' : 'Ghim bản CV này lên đầu';
      pinBtn.setAttribute('aria-label', pinBtn.title);
      pinBtn.textContent = isPinned ? '📌' : '☆';
      pinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePinnedKey(v.key);
        renderNav();
        highlightActive(false);
      });
      a.appendChild(pinBtn);

      return a;
    }

    // Render menu chọn phiên bản từ manifest chia nhóm Ghim, Gần đây, Tất cả (A5)
    function renderNav() {
      const nav = document.getElementById('versionList') || document.getElementById('versionSwitch');
      if (!nav) return;

      recordRecentKey(ver.key);
      nav.innerHTML = '';

      const pinnedKeys = getPinnedKeys();
      const recentKeys = getRecentKeys().filter((k) => !pinnedKeys.includes(k));

      // 1. Nhóm Ghim (nếu có)
      if (pinnedKeys.length > 0) {
        const gh = document.createElement('div');
        gh.className = 'version-group-header';
        gh.textContent = `📌 ĐÃ GHIM (${pinnedKeys.length})`;
        nav.appendChild(gh);

        pinnedKeys.forEach((key) => {
          const v = manifest.byKey(key);
          if (v) {
            nav.appendChild(createVersionItemEl(v, true));
          }
        });
      }

      // 2. Nhóm Gần đây (nếu có)
      if (recentKeys.length > 0) {
        const gh = document.createElement('div');
        gh.className = 'version-group-header';
        gh.textContent = `🕒 GẦN ĐÂY (${recentKeys.length})`;
        nav.appendChild(gh);

        recentKeys.forEach((key) => {
          const v = manifest.byKey(key);
          if (v) {
            nav.appendChild(createVersionItemEl(v, false));
          }
        });
      }

      // 3. Nhóm các bản CV còn lại (loại trừ các bản đã ghim / gần đây để không bị trùng lặp)
      const otherVersions = manifest.filter((v) => !pinnedKeys.includes(v.key) && !recentKeys.includes(v.key));
      if (otherVersions.length > 0) {
        const ghAll = document.createElement('div');
        ghAll.className = 'version-group-header';
        ghAll.textContent = (pinnedKeys.length > 0 || recentKeys.length > 0)
          ? `📂 CÁC BẢN KHÁC (${otherVersions.length})`
          : `📂 TẤT CẢ BẢN CV (${manifest.length})`;
        nav.appendChild(ghAll);

        otherVersions.forEach((v) => {
          nav.appendChild(createVersionItemEl(v, false));
        });
      }

      const countEl = document.getElementById('versionCount');
      if (countEl) countEl.textContent = manifest.length;

      // Neu type dang xem chua co trong manifest, them tam 1 nut active vao dau menu
      if (mode && !manifest.byKey(mode)) {
        const a = createVersionItemEl(ver, false, 'custom-preview');
        a.classList.add('active');
        nav.insertBefore(a, nav.firstChild);
      }

      setupNavSearch();
    }

    // Highlight nút phiên bản đang chọn sau khi DOM sẵn sàng
    function highlightActive(shouldScroll = true) {
      renderNav();
      const btns = document.querySelectorAll(`.version-item[data-key="${ver.key}"]`);
      btns.forEach((btn) => btn.classList.add('active'));
      const primaryBtn = document.getElementById(manifest.navId(ver.key));
      if (primaryBtn && shouldScroll) {
        setTimeout(() => {
          primaryBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => highlightActive(true));
    } else {
      highlightActive(true);
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
      .then(() => ensureDomReady())
      .then(() => loadScript('js/cv-renderer.js?v=1.2.4'))
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
