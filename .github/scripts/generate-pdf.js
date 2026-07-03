const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('https');
const FormData = require('form-data'); // using native boundary for simple raw request or form-data package

// ===================================
// CONFIGURATION
// ===================================
const PORT = 3000;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Danh sách các phiên bản CV cần sinh PDF tự động
const CV_VERSIONS = [
    { type: 'default', filename: 'CV_TruongDinhAnh_FullStack.pdf', label: '💼 Full-Stack Dev' },
    { type: 'fimi', filename: 'CV_TruongDinhAnh_Backend_FIMI.pdf', label: '🔴 FIMI Backend' },
    { type: 'backend', filename: 'CV_TruongDinhAnh_Backend.pdf', label: '⚙️ Backend Dev' },
    { type: 'frontend', filename: 'CV_TruongDinhAnh_Frontend.pdf', label: '🎨 Frontend Dev' },
    { type: 'nestjs', filename: 'CV_TruongDinhAnh_NestJS.pdf', label: '🏥 NestJS Dev' },
    { type: 'healthcare', filename: 'CV_TruongDinhAnh_Healthcare.pdf', label: '🦷 Healthcare Fullstack' },
    { type: 'agrizen', filename: 'CV_TruongDinhAnh_Agrizen.pdf', label: '🌱 Agrizen Fullstack' },
    { type: 'opswat', filename: 'CV_TruongDinhAnh_OPSWAT.pdf', label: '🛡️ OPSWAT Security' },
    { type: 'beone', filename: 'CV_TruongDinhAnh_BeOne.pdf', label: '🐝 BeOne Full-Stack JS Intern' },
    { type: 'strapbuild', filename: 'CV_TruongDinhAnh_Strapbuild.pdf', label: '🚀 Strapbuild Junior Full-Stack' }
];

if (!BOT_TOKEN || !CHAT_ID) {
    console.error('❌ Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables must be provided.');
    process.exit(1);
}

// ===================================
// 1. START LOCAL SERVER
// ===================================
const app = express();
app.use(express.static(path.join(__dirname, '../../')));

const server = app.listen(PORT, async () => {
    console.log(`📡 Local server started on http://localhost:${PORT}`);
    
    try {
        await generateAllPDFs();
    } catch (err) {
        console.error('❌ PDF Generation Failed:', err);
    } finally {
        server.close(() => {
            console.log('🔌 Local server shut down.');
            process.exit(0);
        });
    }
});

// ===================================
// 2. GENERATE ALL PDFs USING PUPPETEER
// ===================================
async function generateAllPDFs() {
    // Tự động nhận diện file nào bị thay đổi để chỉ sinh đúng PDF đó
    const { execSync } = require('child_process');
    const fileToTypeMap = {
        'data/cv-data-fullstack.js': 'default',
        'data/cv-data-fimi.js': 'fimi',
        'data/cv-data-be.js': 'backend',
        'data/cv-data-fe.js': 'frontend',
        'data/cv-data-nestjs.js': 'nestjs',
        'data/cv-data-healthcare-fullstack.js': 'healthcare',
        'data/cv-data-agrizen-fullstack.js': 'agrizen',
        'data/cv-data-opswat.js': 'opswat',
        'data/cv-data-beone.js': 'beone',
        'data/cv-data-strapbuild.js': 'strapbuild'
    };

    let targetTypes = [];
    try {
        // Lấy danh sách các file thay đổi trong commit gần nhất
        const diffOutput = execSync('git diff-tree --no-commit-id --name-only -r HEAD', { encoding: 'utf8' });
        const changedFiles = diffOutput.split('\n').map(f => f.trim()).filter(Boolean);
        console.log('📝 Files modified in this commit:', changedFiles);

        for (const file of changedFiles) {
            if (fileToTypeMap[file]) {
                targetTypes.push(fileToTypeMap[file]);
            }
        }
    } catch (err) {
        console.warn('⚠️ Could not run git diff, falling back to generating all CVs.', err.message);
    }

    const versionsToGenerate = targetTypes.length > 0
        ? CV_VERSIONS.filter(cv => targetTypes.includes(cv.type))
        : CV_VERSIONS;

    console.log(`🚀 Versions to compile: ${versionsToGenerate.map(cv => cv.label).join(', ')}`);

    console.log('🤖 Launching headless Chrome...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const cv of versionsToGenerate) {
        console.log(`\n⏳ Generating PDF for: ${cv.label}...`);
        const page = await browser.newPage();
        
        // Thiết lập kích thước viewport chuẩn A4
        await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
        
        // Điều hướng tới CV với query param tương ứng
        const url = `http://localhost:${PORT}/index.html?type=${cv.type}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

        // Tự động trigger A4 Preview Mode trong giao diện nếu cần
        await page.evaluate(() => {
            if (typeof setA4Mode === 'function') {
                setA4Mode(true);
            }
        });

        // Đường dẫn lưu file PDF tạm thời
        const pdfPath = path.join(__dirname, `../../${cv.filename}`);

        // Xuất file PDF chuẩn A4
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });

        console.log(`✅ Saved temporary PDF to: ${cv.filename}`);
        await page.close();

        // 3. Gửi file PDF đó lên Telegram
        await sendPDFToTelegram(pdfPath, cv.filename, cv.label);

        // Xóa file tạm sau khi gửi xong
        try {
            fs.unlinkSync(pdfPath);
            console.log(`🗑️ Deleted temporary file: ${cv.filename}`);
        } catch (e) {
            console.warn(`⚠️ Could not delete temporary file: ${cv.filename}`);
        }
    }

    await browser.close();
    console.log('\n🎉 Finished processing all CVs successfully!');
}

// ===================================
// 3. SEND FILE TO TELEGRAM CHAT
// ===================================
function sendPDFToTelegram(filePath, filename, label) {
    return new Promise((resolve, reject) => {
        console.log(`📤 Sending ${filename} to Telegram...`);

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;
        const fileStream = fs.createReadStream(filePath);
        
        const form = new FormData();
        form.append('chat_id', CHAT_ID);
        form.append('caption', `📄 Bản in PDF mới nhất của CV: **${label}**\n🕒 Cập nhật tự động hoàn tất!`);
        form.append('document', fileStream, {
            filename: filename,
            contentType: 'application/pdf'
        });

        const request = http.request(url, {
            method: 'POST',
            headers: form.getHeaders()
        }, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log(`🚀 Successfully delivered: ${filename}`);
                    resolve();
                } else {
                    console.error(`❌ Telegram API Error (${res.statusCode}):`, body);
                    reject(new Error(`Telegram error ${res.statusCode}`));
                }
            });
        });

        request.on('error', (err) => {
            console.error('❌ Network request error:', err);
            reject(err);
        });

        form.pipe(request);
    });
}
