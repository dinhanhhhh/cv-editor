// ===================================
// CV Data & Logic
// ===================================

const icons = {
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>`,
    address: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`
};

// cvData được load từ file data tương ứng (khai báo trước script này trong HTML)

// ===================================
// STATE
// ===================================
let currentLang = 'vi';
let baseFontSize = 10;
const DEFAULT_FONT_SIZE = 10;
const DEFAULT_LINE_HEIGHT = '1.5';
const DEFAULT_PADDING = '0 15mm 10mm 15mm';
const DEFAULT_SECTION_MARGIN = '20px';
const DEFAULT_ITEM_MARGIN = '15px';

const labels = {
    vi: {
        role: 'Vai trò',
        description: 'Mô tả',
        technologies: 'Công nghệ',
        github: 'GitHub',
        demo: 'Demo',
        repoBackend: 'Backend',
        repoFrontend: 'Frontend',
        repoDefault: 'Repo'
    },
    en: {
        role: 'Role',
        description: 'Description',
        technologies: 'Technologies',
        github: 'GitHub',
        demo: 'Demo',
        repoBackend: 'Backend',
        repoFrontend: 'Frontend',
        repoDefault: 'Repo'
    }
};

const elements = {
    preview: document.getElementById('cvContent'),
    fontSizeDisplay: document.getElementById('fontSizeDisplay'),
    a4PreviewBtn: document.getElementById('a4PreviewBtn'),
    magicFitBtn: document.getElementById('magicFitBtn'),
    resetBtn: document.getElementById('resetBtn'),
    langViBtn: document.getElementById('lang-vi'),
    langEnBtn: document.getElementById('lang-en'),
    fontIncreaseBtn: document.getElementById('font-increase'),
    fontDecreaseBtn: document.getElementById('font-decrease'),
    downloadBtn: document.getElementById('downloadBtn'),
    downloadBtnText: document.getElementById('btn-text')
};

// ===================================
// FONT CUSTOMIZER
// ===================================
function updateFontSize() {
    elements.preview.style.setProperty('--cv-base-font-size', baseFontSize.toFixed(1) + 'pt');
    elements.fontSizeDisplay.textContent = baseFontSize.toFixed(1) + 'pt';
}

function resetLayoutStyles() {
    elements.preview.style.height = 'auto';
    elements.preview.style.overflow = 'visible';
    elements.preview.style.lineHeight = DEFAULT_LINE_HEIGHT;
    elements.preview.style.padding = DEFAULT_PADDING;
    document.querySelectorAll('.cv-section').forEach(section => {
        section.style.marginBottom = DEFAULT_SECTION_MARGIN;
    });
    document.querySelectorAll('.cv-exp-item, .cv-edu-item').forEach(item => {
        item.style.marginBottom = DEFAULT_ITEM_MARGIN;
    });
}

function setA4Mode(enabled) {
    a4ModeActive = enabled;

    elements.preview.classList.toggle('a4-mode', enabled);
    elements.a4PreviewBtn.classList.toggle('active', enabled);
    elements.a4PreviewBtn.textContent = enabled ? '✅ A4 ON' : '📄 A4 Preview';
    elements.a4PreviewBtn.setAttribute('aria-pressed', String(enabled));
}

function renderContact(contact) {
    return contact.map(c => {
        // Tự động tạo link tel: cho số điện thoại nếu chưa có link
        let link = c.link;
        if (!link && c.icon === 'phone') {
            link = `tel:${c.text.replace(/\s+/g, '')}`;
        }
        
        return `
        <div class="cv-contact-item">
          ${icons[c.icon]}
          ${link 
            ? `<a href="${link}" ${c.icon !== 'phone' ? 'target="_blank" rel="noopener noreferrer"' : ''}>${c.text}</a>` 
            : `<span>${c.text}</span>`}
        </div>
    `}).join('');
}

function renderEducation(education) {
    return `
        <div class="cv-edu-item">
          <div class="cv-edu-header">
            <span class="cv-edu-school">${education.school}</span>
            <span class="cv-edu-date">${education.date}</span>
          </div>
          <div class="cv-edu-detail">${education.detail}</div>
        </div>
    `;
}

function renderProjects(projects, text, limit) {
    const normalizedProjects = Array.isArray(projects) ? projects : [];
    const visibleProjects = typeof limit === 'number'
        ? normalizedProjects.slice(0, limit)
        : normalizedProjects;

    return visibleProjects.map(project => `
        <div class="cv-exp-item">
          <div class="cv-exp-header">
            <span class="cv-exp-project">${project.name}</span>
            <span class="cv-exp-date">${project.date}</span>
          </div>
          <p class="cv-exp-role">${text.role}: ${project.role}</p>
          <p class="cv-exp-desc"><strong>${text.description}:</strong> ${project.desc}</p>
          <ul class="cv-exp-tasks">
            ${project.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
          <p class="cv-exp-tech"><strong>${text.technologies}:</strong> ${project.tech}</p>
          ${project.github ? `
            <p class="cv-exp-github" style="margin-top: 5px;">
              <strong>${text.github}:</strong> 
              ${project.github.includes('|') 
                ? project.github.split('|').map(link => {
                    const cleanLink = link.trim();
                    const label = cleanLink.toLowerCase().includes('-be')
                        ? text.repoBackend
                        : (cleanLink.toLowerCase().includes('-fe') ? text.repoFrontend : text.repoDefault);
                    return `<a href="${cleanLink}" target="_blank" rel="noopener noreferrer" style="margin-right: 8px; text-decoration: underline;">[${label}]</a>`;
                  }).join('')
                : `<a href="${project.github}" target="_blank" rel="noopener noreferrer">${project.github}</a>`
              }
            </p>` : ''}
          ${project.demo ? `<p class="cv-exp-demo"><strong>${text.demo}:</strong> <a href="${project.demo}" target="_blank" rel="noopener noreferrer">${project.demo}</a></p>` : ''}
        </div>
    `).join('');
}

function renderSkills(skills) {
    return skills.map(skill => `
        <tr>
          <td class="cv-skills-category">${skill.cat}</td>
          <td class="cv-skills-items">${skill.items}</td>
        </tr>
    `).join('');
}



elements.fontIncreaseBtn.onclick = () => {
    if (baseFontSize < 14) {
        baseFontSize += 0.5;
        updateFontSize();
    }
};

elements.fontDecreaseBtn.onclick = () => {
    if (baseFontSize > 7) {
        baseFontSize -= 0.5;
        updateFontSize();
    }
};

// ===================================
// MAGIC FIT
// ===================================
function magicFit() {
    const targetHeight = 1120; // Hướng tới khung xấp xỉ 297mm

    elements.preview.style.height = 'auto';
    elements.preview.style.overflow = 'visible';

    // Bắt đầu với các giá trị "rộng rãi" để lấp trang
    baseFontSize = 11.5;
    let currentLineHeight = 1.7;
    let currentPaddingSide = 15;
    let sectionMargin = 25;
    let itemMargin = 20;

    let safety = 0;
    const maxIter = 100;

    function applyStyles() {
        updateFontSize();
        elements.preview.style.lineHeight = currentLineHeight;
        elements.preview.style.padding = `0 ${currentPaddingSide}mm 10mm ${currentPaddingSide}mm`;
        document.querySelectorAll('.cv-section').forEach(s => s.style.marginBottom = sectionMargin + 'px');
        document.querySelectorAll('.cv-exp-item, .cv-edu-item').forEach(i => i.style.marginBottom = itemMargin + 'px');
    }

    // Phase 1: Thu hẹp nếu tràn (Shrink phase)
    while (elements.preview.offsetHeight > targetHeight && safety < maxIter) {
        let changed = false;
        if (sectionMargin > 8) { sectionMargin -= 2; changed = true; }
        else if (itemMargin > 4) { itemMargin -= 2; changed = true; }
        else if (currentLineHeight > 1.25) { currentLineHeight -= 0.05; changed = true; }
        else if (currentPaddingSide > 10) { currentPaddingSide -= 0.5; changed = true; }
        else if (baseFontSize > 9.5) { baseFontSize -= 0.1; changed = true; } // Chỉ giảm font khi kẹt lắm
        
        applyStyles();
        safety++;
        if (!changed) break;
    }

    safety = 0;
    // Phase 2: Giãn nở nếu quá ngắn (Expand phase)
    while (elements.preview.offsetHeight < targetHeight - 50 && safety < maxIter) {
        let changed = false;
        if (currentLineHeight < 1.75) { currentLineHeight += 0.03; changed = true; }
        else if (sectionMargin < 35) { sectionMargin += 2; changed = true; }
        else if (itemMargin < 25) { itemMargin += 2; changed = true; }
        else if (baseFontSize < 11.5) { baseFontSize += 0.1; changed = true; }

        applyStyles();
        safety++;
        if (!changed || elements.preview.offsetHeight > targetHeight - 20) break;
    }

    elements.preview.style.height = '297mm';
    elements.preview.style.overflow = 'hidden';

    elements.magicFitBtn.innerHTML = "Perfect Fit! ✨";
    setTimeout(() => { elements.magicFitBtn.innerHTML = "Magic Fit ✨"; }, 2000);
}

elements.magicFitBtn.onclick = magicFit;

// ===================================
// RESET SETTINGS
// ===================================
function resetSettings() {
    baseFontSize = DEFAULT_FONT_SIZE;
    updateFontSize();
    resetLayoutStyles();
    setA4Mode(false);
}

elements.resetBtn.onclick = resetSettings;

// ===================================
// A4 PREVIEW MODE
// ===================================
let a4ModeActive = false;

elements.a4PreviewBtn.onclick = () => {
    setA4Mode(!a4ModeActive);
};

// ===================================
// RENDER CV
// ===================================
function renderCV(lang) {
    const d = cvData[lang];
    const t = labels[lang];
    elements.downloadBtnText.innerText = d.btnText;
    document.title = d.docTitle;

    const html = `
        <div class="cv-header">
          <div class="cv-name">${d.name}</div>
          <div class="cv-title">${d.title}</div>
          <div class="cv-contact">
            ${renderContact(d.contact)}
          </div>
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.objective}</div>
          <div class="cv-objective">${d.objective}</div>
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.education}</div>
          ${renderEducation(d.education)}
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.projects}</div>
          ${renderProjects(d.projects, t, d.projectDisplayLimit)}
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.skills}</div>
          <table class="cv-skills-table">
            ${renderSkills(d.skills)}
          </table>
        </div>


    `;

    elements.preview.innerHTML = html;
    resetLayoutStyles();
    updateFontSize();
    setA4Mode(a4ModeActive);
    updateCoverLetterText();
}

// ===================================
// LANGUAGE SWITCH
// ===================================
elements.langViBtn.onclick = () => {
    currentLang = 'vi';
    elements.langViBtn.classList.add('active');
    elements.langEnBtn.classList.remove('active');
    elements.langViBtn.setAttribute('aria-pressed', 'true');
    elements.langEnBtn.setAttribute('aria-pressed', 'false');
    renderCV('vi');
};

elements.langEnBtn.onclick = () => {
    currentLang = 'en';
    elements.langEnBtn.classList.add('active');
    elements.langViBtn.classList.remove('active');
    elements.langEnBtn.setAttribute('aria-pressed', 'true');
    elements.langViBtn.setAttribute('aria-pressed', 'false');
    renderCV('en');
};

// ===================================
// PRINT / DOWNLOAD
// ===================================
elements.downloadBtn.onclick = () => {
    window.print();
};

// ===================================
// INIT
// ===================================
// ===================================
// COVER LETTER MANAGER
// ===================================
const urlParams = new URLSearchParams(window.location.search);
const cvVersion = urlParams.get('type') || 'default';
let currentTemplate = 'tech';

const clTemplates = {
    tech: {
        vi: `[Tiêu đề Email: Ứng tuyển vị trí Lập trình viên – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào vị trí Lập trình viên tại Quý công ty.

Với nền tảng kiến thức vững chắc về JavaScript, TypeScript, React và Node.js, tôi đã phát triển thành công nhiều dự án thực tế bao gồm hệ thống tuyển dụng JOB PORTAL PLATFORM, hệ thống quản lý STUDENT MANAGEMENT SYSTEM, và sàn thương mại điện tử E-COMMERCE PLATFORM. Tôi luôn tập trung viết code sạch, tối ưu truy vấn cơ sở dữ liệu và xây dựng giao diện responsive đẹp mắt, nâng cao trải nghiệm người dùng.

Tôi xin gửi kèm CV và mong muốn được trao đổi chi tiết hơn trong một buổi phỏng vấn trực tiếp.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
        en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Developer position at your company.

With a strong foundation in JavaScript, TypeScript, React, and Node.js, I have successfully developed several web applications, including a JOB PORTAL PLATFORM, a STUDENT MANAGEMENT SYSTEM, and an E-COMMERCE PLATFORM. I am committed to writing clean, maintainable code, optimizing database queries, and designing responsive and user-friendly user interfaces.

Please find my attached CV for more details. I look forward to the opportunity of discussing how my skills align with your needs in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },
    short: {
        vi: `[Tiêu đề Email: Ứng tuyển Lập trình viên – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng,

Tôi viết thư này để ứng tuyển vào vị trí Lập trình viên tại Quý công ty. Tôi vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM và có kinh nghiệm thực chiến phát triển các dự án Full-Stack JavaScript/TypeScript.

Tôi sở hữu nền tảng vững chắc về React, Next.js, Node.js và MongoDB. Tôi luôn cam kết viết mã nguồn sạch, tối ưu hóa cơ sở dữ liệu và xây dựng giao diện responsive.

Chi tiết về các dự án và kỹ năng của tôi được trình bày trong CV đính kèm. Rất mong có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
        en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

I am writing to apply for the Developer position at your company. As a Computer Science graduate from Ho Chi Minh City Open University, I have hands-on experience building full-stack web applications using JavaScript and TypeScript.

My technical stack includes React, Next.js, Node.js, and MongoDB. I focus on writing clean code, optimizing queries, and delivering responsive layouts.

Please find my CV attached for more details on my projects and skills. I look forward to discussing my application in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },
    warm: {
        vi: `[Tiêu đề Email: Ứng tuyển Lập trình viên – Mong muốn đồng hành cùng Quý công ty]

Kính gửi Bộ phận Tuyển dụng,

Tôi tên là Trương Đình Anh, một lập trình viên đam mê công nghệ vừa tốt nghiệp Đại học Mở TP.HCM. Tôi theo dõi hoạt động của Quý công ty đã lâu và rất ấn tượng với định hướng cũng như các sản phẩm mà công ty đang xây dựng. Vì vậy, tôi rất hào hứng gửi hồ sơ ứng tuyển này.

Với kinh nghiệm tự xây dựng các dự án web từ con số không và không ngừng nghiên cứu các công nghệ mới, tôi tin rằng tinh thần tự học chủ động và trách nhiệm cao của mình sẽ mang lại giá trị tích cực cho đội ngũ phát triển.

Tôi xin gửi kèm CV và rất mong được gặp gỡ để chia sẻ thêm về đam mê lập trình cũng như định hướng đóng góp lâu dài tại công ty.

Chúc Quý công ty một ngày làm việc hiệu quả!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
        en: `[Subject: Job Application: Developer – Enthusiastic and Ready to Contribute]

Dear Hiring Team,

My name is Truong Dinh Anh, a passionate developer and Computer Science graduate from Ho Chi Minh City Open University. I have been following your company's achievements and am truly inspired by the culture and products you build. I am thrilled to submit my application.

Having built web projects from scratch and constantly explored modern technologies, I am confident that my self-driven learning attitude and strong sense of responsibility will make a positive impact on your team.

I have attached my CV and would love the opportunity to share more about my passion and how I can contribute to your long-term goals.

Have a wonderful day!

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    }
};

function getLocalStorageKey() {
    return `cv_cl_${cvVersion}_${currentLang}_${currentTemplate}`;
}

function getDefaultTemplateText(templateId) {
    if (cvData[currentLang] && cvData[currentLang].coverLetters && cvData[currentLang].coverLetters[templateId]) {
        return cvData[currentLang].coverLetters[templateId];
    }
    if (templateId === 'tech' && cvData[currentLang] && cvData[currentLang].coverLetter) {
        return cvData[currentLang].coverLetter;
    }
    return clTemplates[templateId] ? clTemplates[templateId][currentLang] : '';
}

function renderMarkdownToHtml(md) {
    if (!md) return '';
    let html = md
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
        
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/^---$/gm, '<hr class="cl-preview-hr">');
    
    const lines = html.split('\n');
    let inList = false;
    const processedLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
            const content = trimmed.substring(2);
            let res = '';
            if (!inList) {
                inList = true;
                res += '<ul class="cl-preview-list">';
            }
            res += `<li>${content}</li>`;
            return res;
        } else {
            let res = '';
            if (inList) {
                inList = false;
                res += '</ul>';
            }
            return res + line;
        }
    });
    if (inList) {
        processedLines.push('</ul>');
    }
    html = processedLines.join('\n');
    
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(p => {
        const trimmed = p.trim();
        if (!trimmed) return '';
        if (trimmed.startsWith('<ul') || trimmed.startsWith('<hr') || trimmed.startsWith('<li')) {
            return trimmed;
        }
        return `<p class="cl-preview-p">${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('');
    
    return html;
}

function populateTemplateOptions() {
    const select = document.getElementById('clTemplateSelect');
    if (!select) return;
    
    const options = currentLang === 'vi' ? [
        { value: 'tech', text: 'Chuyên môn 💻' },
        { value: 'short', text: 'Ngắn gọn ⚡' },
        { value: 'warm', text: 'Thân thiện 😊' }
    ] : [
        { value: 'tech', text: 'Tech Focus 💻' },
        { value: 'short', text: 'Concise ⚡' },
        { value: 'warm', text: 'Warm & Cultural 😊' }
    ];
    
    select.innerHTML = options.map(opt => 
        `<option value="${opt.value}" ${opt.value === currentTemplate ? 'selected' : ''}>${opt.text}</option>`
    ).join('');
}

function syncCoverLetterLangButtons() {
    const clLangViBtn = document.getElementById('clLangViBtn');
    const clLangEnBtn = document.getElementById('clLangEnBtn');
    if (clLangViBtn && clLangEnBtn) {
        if (currentLang === 'vi') {
            clLangViBtn.classList.add('active');
            clLangEnBtn.classList.remove('active');
        } else {
            clLangEnBtn.classList.add('active');
            clLangViBtn.classList.remove('active');
        }
    }
}

function updateCoverLetterText() {
    const clTextArea = document.getElementById('clTextArea');
    const clPreviewContainer = document.getElementById('clPreviewContainer');
    if (!clTextArea) return;
    
    populateTemplateOptions();
    syncCoverLetterLangButtons();
    
    const key = getLocalStorageKey();
    const cachedText = localStorage.getItem(key);
    
    let text = '';
    // Tự động bỏ qua cache nếu là text placeholder cũ '**Hello World**' để đồng bộ nội dung chuẩn từ file data
    if (cachedText !== null && cachedText.trim() !== '' && cachedText.trim() !== '**Hello World**') {
        text = cachedText;
    } else {
        text = getDefaultTemplateText(currentTemplate);
    }
    
    clTextArea.value = text;
    if (clPreviewContainer) {
        clPreviewContainer.innerHTML = renderMarkdownToHtml(text);
    }
}

// Setup Event Listeners for Cover Letter Modal
(function initCoverLetter() {
    const clTextArea = document.getElementById('clTextArea');
    const clResetBtn = document.getElementById('clResetBtn');
    const clCopyBtn = document.getElementById('clCopyBtn');
    const coverLetterBtn = document.getElementById('coverLetterBtn');
    const clModalOverlay = document.getElementById('clModalOverlay');
    const clModalCloseBtn = document.getElementById('clModalCloseBtn');
    const clTemplateSelect = document.getElementById('clTemplateSelect');
    const clLangViBtn = document.getElementById('clLangViBtn');
    const clLangEnBtn = document.getElementById('clLangEnBtn');

    if (clTextArea) {
        clTextArea.addEventListener('input', () => {
            const text = clTextArea.value;
            const key = getLocalStorageKey();
            localStorage.setItem(key, text);
            
            const clPreviewContainer = document.getElementById('clPreviewContainer');
            if (clPreviewContainer) {
                clPreviewContainer.innerHTML = renderMarkdownToHtml(text);
            }
        });
    }

    if (clTemplateSelect) {
        clTemplateSelect.onchange = (e) => {
            currentTemplate = e.target.value;
            updateCoverLetterText();
        };
    }

    if (clLangViBtn) {
        clLangViBtn.onclick = () => {
            if (currentLang !== 'vi' && elements.langViBtn) {
                elements.langViBtn.click();
            }
        };
    }

    if (clLangEnBtn) {
        clLangEnBtn.onclick = () => {
            if (currentLang !== 'en' && elements.langEnBtn) {
                elements.langEnBtn.click();
            }
        };
    }

    if (clResetBtn) {
        let confirmTimeout = null;
        let isConfirming = false;

        clResetBtn.onclick = () => {
            if (!isConfirming) {
                // Bước 1: Chuyển sang trạng thái chờ xác nhận
                isConfirming = true;
                clResetBtn.textContent = currentLang === 'vi' ? 'Xác nhận khôi phục? ⚠️' : 'Confirm Reset? ⚠️';
                clResetBtn.style.backgroundColor = '#d90429';
                clResetBtn.style.color = '#ffffff';
                clResetBtn.style.borderColor = '#d90429';
                
                confirmTimeout = setTimeout(() => {
                    // Trở lại trạng thái bình thường nếu không nhấn lại trong 3 giây
                    isConfirming = false;
                    clResetBtn.textContent = currentLang === 'vi' ? 'Khôi phục 🔄' : 'Reset 🔄';
                    clResetBtn.style.backgroundColor = '';
                    clResetBtn.style.color = '';
                    clResetBtn.style.borderColor = '';
                }, 3000);
            } else {
                // Bước 2: Thực hiện hành động khôi phục
                clearTimeout(confirmTimeout);
                isConfirming = false;
                
                clResetBtn.textContent = currentLang === 'vi' ? 'Đã khôi phục! ✓' : 'Reset Success! ✓';
                clResetBtn.style.backgroundColor = '#2d6a4f';
                clResetBtn.style.color = '#ffffff';
                clResetBtn.style.borderColor = '#2d6a4f';

                const key = getLocalStorageKey();
                localStorage.removeItem(key);
                updateCoverLetterText();

                setTimeout(() => {
                    clResetBtn.textContent = currentLang === 'vi' ? 'Khôi phục 🔄' : 'Reset 🔄';
                    clResetBtn.style.backgroundColor = '';
                    clResetBtn.style.color = '';
                    clResetBtn.style.borderColor = '';
                }, 1500);
            }
        };
    }

    if (clCopyBtn && clTextArea) {
        clCopyBtn.onclick = () => {
            const text = clTextArea.value;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = clCopyBtn.textContent;
                clCopyBtn.innerHTML = currentLang === 'vi' ? 'Đã sao chép! ✓' : 'Copied! ✓';
                clCopyBtn.style.background = '#2d6a4f';
                setTimeout(() => {
                    clCopyBtn.innerHTML = originalText;
                    clCopyBtn.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert(currentLang === 'vi' 
                    ? 'Không thể sao chép tự động. Vui lòng chọn và sao chép thủ công.' 
                    : 'Could not copy automatically. Please select and copy manually.');
            });
        };
    }

    if (coverLetterBtn && clModalOverlay) {
        coverLetterBtn.onclick = () => {
            updateCoverLetterText();
            clModalOverlay.style.display = 'flex';
            clModalOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };
        
        const closeModal = () => {
            clModalOverlay.style.display = 'none';
            clModalOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };
        
        if (clModalCloseBtn) {
            clModalCloseBtn.onclick = closeModal;
        }
        
        clModalOverlay.onclick = (e) => {
            if (e.target === clModalOverlay) {
                closeModal();
            }
        };
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && clModalOverlay.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        });
    }
})();

renderCV(currentLang);
