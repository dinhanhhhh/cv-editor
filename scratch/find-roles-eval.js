const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = 'c:\\Users\\Admin\\Documents\\CV_Truong Dinh Anh\\Phỏng vấn\\cv-editor\\data';
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('cv-data-') && f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    try {
        let code = fs.readFileSync(filePath, 'utf8');
        
        // Mock require and global objects
        const sandbox = {
            require: (moduleName) => {
                if (moduleName.includes('cv-global.js')) {
                    return { vi: {}, en: {} };
                }
                return {};
            },
            console,
            global: {
                cvGlobalEdu: { vi: {}, en: {} },
                cvGlobalExp: { vi: [], en: [] }
            },
            cvGlobalEdu: { vi: {}, en: {} },
            cvGlobalExp: { vi: [], en: [] },
            window: {},
            document: {},
            navigator: {},
            location: {}
        };
        
        // Sometimes window is used inside code, e.g. window.cvData = cvData;
        // Let's make window self-referential
        sandbox.window = sandbox;
        
        vm.createContext(sandbox);
        vm.runInContext(code, sandbox);
        
        // Check both sandbox.cvData and sandbox.window.cvData
        const cvData = sandbox.cvData;
        if (cvData) {
            ['vi', 'en'].forEach(lang => {
                if (cvData[lang] && cvData[lang].projects) {
                    cvData[lang].projects.forEach((proj, idx) => {
                        if (proj.role !== 'Developer') {
                            console.log(`${file} [${lang}][proj ${idx}]: "${proj.name}" -> role: "${proj.role}"`);
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e.message);
    }
});
