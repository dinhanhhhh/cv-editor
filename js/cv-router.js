/* ===================================
   CV ROUTER - Dynamic Data Loading
   =================================== */
(function() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('type');

    // Mapping Icon & Data
    const versions = {
        'backend': { data: 'data/cv-data-be.js', emoji: '⚙️', id: 'ver-backend' },
        'frontend': { data: 'data/cv-data-fe.js', emoji: '🎨', id: 'ver-frontend' },
        'nestjs': { data: 'data/cv-data-nestjs.js', emoji: '🏥', id: 'ver-nestjs' },
        'healthcare': { data: 'data/cv-data-healthcare-fullstack.js', emoji: '🦷', id: 'ver-healthcare' },
        'agrizen': { data: 'data/cv-data-agrizen-fullstack.js', emoji: '🌱', id: 'ver-agrizen' },
        'opswat': { data: 'data/cv-data-opswat.js', emoji: '🛡️', id: 'ver-opswat' },
        'default': { data: 'data/cv-data-fullstack.js', emoji: '💼', id: 'ver-default' }
    };

    const ver = versions[mode] || versions['default'];

    // Chờ DOM load xong để highlight menu
    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById(ver.id);
        if (btn) btn.classList.add('active');
    });

    // Cập nhật Favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${ver.emoji}</text></svg>`;
    document.head.appendChild(link);

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.head.appendChild(script);
        });
    }

    // Nạp data trước, sau đó mới khởi tạo logic render CV.
    loadScript(ver.data)
        .then(() => loadScript('js/cv-renderer.js'))
        .catch((error) => {
            console.error(error);
        });
})();
