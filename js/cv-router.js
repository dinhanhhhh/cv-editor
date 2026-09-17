/* ===================================
   CV ROUTER - Dynamic Data Loading
   =================================== */
(function () {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('type');

  function start() {
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
      const nav = document.getElementById('versionSwitch');
      if (!nav) return;
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
    }

    // Highlight nút phiên bản đang chọn sau khi DOM sẵn sàng
    function highlightActive() {
      renderNav();
      const btn = document.getElementById(manifest.navId(ver.key));
      if (btn) {
        btn.classList.add('active');
        // Cuộn phần tử active vào giữa menu cho dễ thấy
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
      .then(() => loadScript('js/cv-renderer.js'))
      .catch((error) => {
        console.error(error);
      });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const versionedSrc = window.withCvVersion ? window.withCvVersion(src) : (src + '?v=1.1.0');
      script.src = versionedSrc;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load script: ${versionedSrc}`));
      document.head.appendChild(script);
    });
  }

  // Manifest được nạp đồng bộ trước router trong index.html, nhưng phòng
  // trường hợp router chạy trước (file:// race), chờ tới khi có CV_MANIFEST.
  if (window.CV_MANIFEST) {
    start();
  } else {
    window.addEventListener('DOMContentLoaded', start);
  }
})();
