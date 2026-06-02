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
        'ai': { data: 'data/cv-data-ai.js', emoji: '🤖', id: 'ver-ai' },
        'ai-webdev': { data: 'data/cv-data-ai-webdev.js', emoji: '🌐', id: 'ver-ai-webdev' },
        'agrizen': { data: 'data/cv-data-agrizen-fullstack.js', emoji: '🌱', id: 'ver-agrizen' },
        'opswat': { data: 'data/cv-data-opswat.js', emoji: '🛡️', id: 'ver-opswat' },
        'catspeak': { data: 'data/cv-data-catspeak.js', emoji: '🐈', id: 'ver-catspeak' },
        'techsupport': { data: 'data/cv-data-techsupport.js', emoji: '🛠️', id: 'ver-techsupport' },
        'itdev': { data: 'data/cv-data-itdev.js', emoji: '💻', id: 'ver-itdev' },
        'kitgroup': { data: 'data/cv-data-kitgroup.js', emoji: '🏢', id: 'ver-kitgroup' },
        'beone': { data: 'data/cv-data-beone.js', emoji: '🐝', id: 'ver-beone' },
        'strapbuild': { data: 'data/cv-data-strapbuild.js', emoji: '🚀', id: 'ver-strapbuild' },
        'default': { data: 'data/cv-data-fullstack.js', emoji: '💼', id: 'ver-default' }
    };

    const ver = versions[mode] || versions['default'];

    // Chờ DOM load xong để highlight menu
    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById(ver.id);
        if (btn) {
            btn.classList.add('active');
            // Tự động cuộn phần tử active vào giữa menu để tăng trải nghiệm tiện ích
            setTimeout(() => {
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
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

    // Nạp global data trước, sau đó nạp data version, cuối cùng mới khởi tạo logic render CV.
    loadScript('data/cv-global.js')
        .then(() => loadScript(ver.data))
        .then(() => loadScript('js/cv-renderer.js'))
        .catch((error) => {
            console.error(error);
        });
})();
