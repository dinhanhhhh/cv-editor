// ===================================================================
// TELEGRAM TO GITHUB BRIDGE WORKER - V4 (SUPPORT FILE UPLOAD & PREVIEW)
// ===================================================================

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const payload = await request.json();

      if (!payload.message) {
        return new Response("OK", { status: 200 });
      }

      const chatId = payload.message.chat.id;

      // Bao mat: Chi xu ly tin nhan tu chinh CHAT_ID cua ban
      if (chatId.toString() !== env.TELEGRAM_CHAT_ID.toString()) {
        await sendMsg(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          "Canh bao: Ban khong co quyen truy cap bot nay!",
        );
        return new Response("Unauthorized", { status: 201 });
      }

      let bodyText = "";
      let caption = (payload.message.caption || "").trim();
      let isPreview = false;
      let hashtag = "";

      // 1. XU LY KHI NGUOI DUNG GUI FILE (.js, .json hoac .txt)
      if (payload.message.document) {
        const doc = payload.message.document;
        const fileName = doc.file_name.toLowerCase();

        if (
          !fileName.endsWith(".js") &&
          !fileName.endsWith(".json") &&
          !fileName.endsWith(".txt")
        ) {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "⚠️ Bot chi nhan file du lieu (.js, .json) hoac file Job Description (.txt) thoi ban nhe!",
          );
          return new Response("OK", { status: 200 });
        }

        await sendMsg(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          "📥 Dang tai file " + doc.file_name + " tu Telegram...",
        );

        // Lay thong tin duong dan file tu Telegram API
        const getFileUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getFile?file_id=${doc.file_id}`;
        const fileRes = await fetch(getFileUrl);
        if (!fileRes.ok) {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "❌ Loi: Khong the truy cap API Telegram de lay link tai file.",
          );
          return new Response("OK", { status: 200 });
        }

        const fileData = await fileRes.json();
        if (!fileData.ok || !fileData.result || !fileData.result.file_path) {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "❌ Loi: Telegram tu choi cung cap duong dan file.",
          );
          return new Response("OK", { status: 200 });
        }

        const filePath = fileData.result.file_path;
        const downloadUrl = `https://api.telegram.org/file/bot${env.TELEGRAM_BOT_TOKEN}/${filePath}`;
        const downloadRes = await fetch(downloadUrl);
        if (!downloadRes.ok) {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "❌ Loi: Khong the tai xuong du lieu file tu Telegram.",
          );
          return new Response("OK", { status: 200 });
        }

        bodyText = await downloadRes.text();

        // Neu la file text JD, chuyen huong may do luon
        if (fileName.endsWith(".txt")) {
          const jdText = bodyText.trim();
          let targetHashtag = "";
          if (caption) {
            const parts = caption.split(/\s+/);
            if (parts[0].startsWith("#")) {
              targetHashtag = parts[0];
            } else if (
              parts[0].startsWith("/job") ||
              parts[0].startsWith("/tailor")
            ) {
              targetHashtag = parts[1] || "";
            }
          }
          if (!targetHashtag.startsWith("#")) {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "⚠️ Khi gui file JD .txt, vui long them caption chua hashtag hop le (VD: `#opswat` hoac `/job #opswat`) de bot biet can may do cho phien ban nao!",
            );
            return new Response("OK", { status: 200 });
          }

          try {
            await handleAITailor(
              env,
              chatId,
              `/job ${targetHashtag} ${jdText}`,
            );
          } catch (err) {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "❌ Loi he thong khi may do CV bang AI qua file .txt: " +
                err.message,
            );
          }
          return new Response("OK", { status: 200 });
        }
      }
      // 2. XU LY KHI NGUOI DUNG GUI TIN NHAN TEXT THUONG
      else if (payload.message.text) {
        bodyText = payload.message.text.trim();

        // Lenh /start hoac /help
        if (bodyText.startsWith("/start") || bodyText.startsWith("/help")) {
          const masterCvFile = getMasterCvFile(env);
          const helpText = [
            "🤖 BOT TU DONG HOA PIPELINE CV V4",
            "",
            "1️⃣ CACH 1: AI TU DONG MAY DO CV THEO JOB (Moi ✨)",
            "👉 Nhap lenh theo cu phap:",
            "   /job <#hashtag> <Noi dung tin tuyen dung / JD>",
            "👉 Vi du: `/job #opswat Can tuyen Node.js developer, TypeScript, co tu duy clean code...`",
            "👉 Bot se tu lay CV goc (" +
              masterCvFile +
              "), dung Gemini de may do sang VI & EN, roi tu cap nhat len GitHub de sinh PDF moi!",
            "",
            "2️⃣ CACH 2: KEO THA FILE DATA TUY CHINH",
            "👉 Keo file cv-data-opswat.js vao chat Telegram.",
            "👉 De xem truoc: them caption `/preview #opswat` khi gui file.",
            "👉 De deploy luon: them caption `#opswat` khi gui file.",
            "",
            "3️⃣ CACH 3: DONG TEXT (Chi dung cho update nho)",
            "👉 /preview #opswat { data... }",
            "👉 #opswat { data... }",
            "",
            "4️⃣ XEM LICH SU MAY DO",
            "👉 /history #opswat — Xem tat ca ban backup cua phien ban opswat",
            "👉 /history — Xem toan bo lich su may do",
            "",
            "Hashtag hop le: #opswat, #agrizen, #backend, #frontend, #nestjs, #healthcare, #kitgroup",
          ].join("\n");
          await sendMsg(env.TELEGRAM_BOT_TOKEN, chatId, helpText);
          return new Response("OK", { status: 200 });
        }

        // Kiem tra lenh AI Tailor
        if (bodyText.startsWith("/job") || bodyText.startsWith("/tailor")) {
          try {
            await handleAITailor(env, chatId, bodyText);
          } catch (err) {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "❌ Loi he thong khi may do CV bang AI: " + err.message,
            );
          }
          return new Response("OK", { status: 200 });
        }

        // Kiem tra lenh xem lich su
        if (bodyText.startsWith("/history")) {
          try {
            await handleHistory(env, chatId, bodyText);
          } catch (err) {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "❌ Loi khi truy van lich su: " + err.message,
            );
          }
          return new Response("OK", { status: 200 });
        }
      } else {
        return new Response("OK", { status: 200 });
      }

      // === PHAN TICH LAY PREVIEW VAY HASHTAG ===

      // Kiem tra tu caption truoc (khi gui file)
      if (caption) {
        if (caption.startsWith("/preview")) {
          isPreview = true;
          caption = caption.substring("/preview".length).trim();
        }
        if (caption.startsWith("#")) {
          const parts = caption.split(/\s+/);
          hashtag = parts[0].trim().toLowerCase();
        }
      }

      // Kiem tra tu text body (khi gui text thuong hoac fallback tu file)
      let jsonString = bodyText.trim();
      if (!isPreview && jsonString.startsWith("/preview")) {
        isPreview = true;
        jsonString = jsonString.substring("/preview".length).trim();
      }

      if (!hashtag && jsonString.startsWith("#")) {
        const spaceIdx = jsonString.search(/\s/);
        if (spaceIdx !== -1) {
          hashtag = jsonString.substring(0, spaceIdx).trim().toLowerCase();
          jsonString = jsonString.substring(spaceIdx).trim();
        } else {
          hashtag = jsonString.trim().toLowerCase();
          jsonString = "";
        }
      }

      // Neu van chua tim thay hashtag, tu dong nhan dien qua ten file gui den
      if (!hashtag && payload.message.document) {
        const fileName = payload.message.document.file_name.toLowerCase();
        if (fileName.includes("opswat")) hashtag = "#opswat";
        else if (fileName.includes("agrizen")) hashtag = "#agrizen";
        else if (fileName.includes("be") || fileName.includes("backend"))
          hashtag = "#backend";
        else if (fileName.includes("fe") || fileName.includes("frontend"))
          hashtag = "#frontend";
        else if (fileName.includes("nestjs")) hashtag = "#nestjs";
        else if (fileName.includes("healthcare")) hashtag = "#healthcare";
        else if (fileName.includes("kitgroup")) hashtag = "#kitgroup";
      }

      // Mac dinh neu khong co hashtag
      let targetFile = "data/cv-data-fullstack.js";
      const fileMap = {
        "#agrizen": "data/cv-data-agrizen-fullstack.js",
        "#backend": "data/cv-data-be.js",
        "#frontend": "data/cv-data-fe.js",
        "#nestjs": "data/cv-data-nestjs.js",
        "#healthcare": "data/cv-data-healthcare-fullstack.js",
        "#opswat": "data/cv-data-opswat.js",
        "#kitgroup": "data/cv-data-kitgroup.js",
      };
      if (fileMap[hashtag]) targetFile = fileMap[hashtag];

      // === LOC NHIEU DU LIEU & EXTRACT OBJECT ===
      const firstBrace = jsonString.indexOf("{");
      const lastBrace = jsonString.lastIndexOf("}");

      if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
        if (bodyText.length >= 4090) {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "⚠️ Canh bao: Tin nhan cua ban qua dai (> 4096 ky tu) va da bi Telegram tu dong cat cut o cuoi, dan den thieu dau dong ngoac }.\n\n👉 Vui long luu CV vao file (VD: cv-data-opswat.js) va KEO THA file truc tiep vao chat nay kem hashtag #opswat nhe!",
          );
        } else {
          await sendMsg(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            "❌ Loi: Khong tim thay khoi du lieu { ... } hop le trong file/tin nhan!",
          );
        }
        return new Response("OK", { status: 200 });
      }

      jsonString = jsonString.substring(firstBrace, lastBrace + 1);

      // Parse JSON hoac Convert JS Object -> JSON
      let parsed = null;
      try {
        parsed = JSON.parse(jsonString);
      } catch (e) {
        try {
          const converted = jsObjectToJson(jsonString);
          parsed = JSON.parse(converted);
          jsonString = converted;
        } catch (e2) {
          if (bodyText.length >= 4090) {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "⚠️ Canh bao: Tin nhan cua ban qua dai (> 4096 ky tu) va da bi Telegram tu dong cat cut o cuoi, khien cau truc JSON bi vỡ.\n\n👉 Vui long luu CV vao file (VD: cv-data-opswat.js) va KEO THA file truc tiep vao chat nay kem hashtag #opswat nhe!",
            );
          } else {
            await sendMsg(
              env.TELEGRAM_BOT_TOKEN,
              chatId,
              "❌ Loi: Du lieu khong phai JSON hoac JS object hop le. Kiem tra lai dau ngoac va dau phay!",
            );
          }
          return new Response("OK", { status: 200 });
        }
      }

      // === CHE DO PREVIEW ===
      if (isPreview) {
        const preview = buildPreview(parsed, targetFile);
        await sendMsg(env.TELEGRAM_BOT_TOKEN, chatId, preview);
        return new Response("OK", { status: 200 });
      }

      // === CHE DO DEPLOY ===
      await sendMsg(
        env.TELEGRAM_BOT_TOKEN,
        chatId,
        "🚀 Dang ket noi GitHub de cap nhat " + targetFile + "...",
      );

      const fileContentJs =
        "// AUTO GENERATED BY TELEGRAM BOT\n\nconst cvData = " +
        jsonString +
        ';\n\nif (typeof module !== "undefined") module.exports = cvData;\n';

      const success = await commitToGitHub(env, targetFile, fileContentJs);

      if (success) {
        await sendMsg(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          "✅ Cap nhat thanh cong! GitHub Actions dang tu dong build lai PDF. Vui long cho 30-40s...",
        );
      } else {
        await sendMsg(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          "❌ That bai: Khong the day du lieu len GitHub. Kiem tra lai quyen han cua Token.",
        );
      }
    } catch (err) {
      console.error(err);
    }

    return new Response("OK", { status: 200 });
  },
};

function getMasterCvFile(env) {
  const rawPath = (env.MASTER_CV_FILE || "data/cv-data-template.js").trim();
  return rawPath || "data/cv-data-template.js";
}

// ===================================================================
// HELPER: Convert JS object literal -> JSON string
// ===================================================================
function jsObjectToJson(str) {
  let result = str;

  // Bước 1: Tạm thời ẩn các dấu nháy đơn nằm giữa các chữ cái (sở hữu cách, viết tắt tiếng Anh, ví dụ don't, candidate's)
  result = result.replace(/([a-zA-Z])\\?'([a-zA-Z])/g, '$1__SINGLE_QUOTE_PLACEHOLDER__$2');

  // Bước 2: Thay thế toàn bộ dấu nháy đơn bọc ngoài còn lại thành dấu nháy kép
  result = result.replace(/'/g, '"');

  // Bước 3: Khôi phục lại các dấu nháy đơn trong văn bản
  result = result.replace(/__SINGLE_QUOTE_PLACEHOLDER__/g, "'");

  // Bước 4: Thêm double quotes quanh unquoted keys
  result = result.replace(
    /([{,]\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g,
    '$1"$2":',
  );

  // Xu ly key o dong dau tien
  result = result.replace(/^\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/gm, '"$1":');

  // Bước 5: Xóa trailing commas trước } hoặc ]
  result = result.replace(/,\s*([}\]])/g, "$1");

  // Bước 6: Fix double-quoted keys bị quote 2 lan
  result = result.replace(/""+/g, '"');

  return result;
}

// ===================================================================
// HELPER: Tao ban xem truoc CV tu parsed data
// ===================================================================
function buildPreview(data, targetFile) {
  const lines = [];
  lines.push("📝 === XEM TRUOC CV V4 ===");
  lines.push("🎯 Target File: " + targetFile);
  lines.push("");

  const vi = data.vi || data;
  if (vi.name) lines.push("👤 Ten: " + vi.name);
  if (vi.title) lines.push("💼 Vi tri: " + vi.title);
  if (vi.sections && vi.sections.projects) {
    lines.push("📂 Ten muc Projects (VI): " + vi.sections.projects);
  }
  if (vi.objective)
    lines.push("🎯 Muc tieu: " + vi.objective.substring(0, 100) + "...");

  if (vi.education) {
    lines.push("");
    lines.push(
      "🎓 Hoc van: " +
        (vi.education.school || "") +
        " (" +
        (vi.education.date || "") +
        ")",
    );
  }

  if (vi.projects && vi.projects.length > 0) {
    lines.push("");
    lines.push("💻 Du an (" + vi.projects.length + "):");
    vi.projects.forEach(function (p, i) {
      lines.push("  " + (i + 1) + ". " + p.name + " (" + (p.date || "") + ")");
      if (p.tech) lines.push("     Tech: " + p.tech);
    });
  }

  if (vi.skills && vi.skills.length > 0) {
    lines.push("");
    lines.push("🛠️ Ky nang (" + vi.skills.length + " nhom):");
    vi.skills.forEach(function (s) {
      lines.push("  - " + s.cat + ": " + s.items);
    });
  }

  if (data.en) {
    lines.push("");
    lines.push("🇺🇸 Phien ban EN: Co (" + (data.en.name || "N/A") + ")");
  } else {
    lines.push("");
    lines.push("🇺🇸 Phien ban EN: Khong co");
  }

  lines.push("");
  lines.push("👉 De deploy luon, hay gui lai file va dat caption la: #opswat");

  return lines.join("\n");
}

// Gui tin nhan Telegram
async function sendMsg(token, chatId, text) {
  const url = "https://api.telegram.org/bot" + token + "/sendMessage";
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: text }),
  });
}

// Ghi de file len GitHub bang REST API
async function commitToGitHub(env, filePath, content) {
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;
  const branch = env.GITHUB_BRANCH || "main";

  const url =
    "https://api.github.com/repos/" +
    owner +
    "/" +
    repo +
    "/contents/" +
    filePath;
  const base64Content = btoa(unescape(encodeURIComponent(content)));

  let sha = null;
  const getRes = await fetch(url, {
    headers: {
      Authorization: "token " + token,
      "User-Agent": "Cloudflare-Worker-Telegram-CV",
    },
  });

  if (getRes.status === 200) {
    const fileData = await getRes.json();
    sha = fileData.sha;
  }

  const putRes = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: "token " + token,
      "Content-Type": "application/json",
      "User-Agent": "Cloudflare-Worker-Telegram-CV",
    },
    body: JSON.stringify({
      message: "chore: auto-update cv data via Telegram Bot",
      content: base64Content,
      sha: sha,
      branch: branch,
    }),
  });

  return putRes.status === 200 || putRes.status === 201;
}

// ===================================================================
// AI TAILOR FLOW
// ===================================================================

async function handleAITailor(env, chatId, bodyText) {
  if (!env.GEMINI_API_KEY) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "⚠️ Loi: Vui long cau hinh bien GEMINI_API_KEY trong Cloudflare Worker de dung tinh nang nay!",
    );
    return;
  }

  const match = bodyText.match(
    /^\/(job|tailor)\s+(#[a-zA-Z0-9_-]+)\s+([\s\S]+)$/i,
  );
  if (!match) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "⚠️ Cu phap khong hop le. Vui long gui theo cu phap:\n`/job <#hashtag> <Noi dung JD>`\n(VD: `/job #opswat Cần tuyển...`)",
    );
    return;
  }

  const hashtag = match[2].trim().toLowerCase();
  const jdText = match[3].trim();
  const masterCvFile = getMasterCvFile(env);

  let targetFile = "data/cv-data-fullstack.js";
  const fileMap = {
    "#agrizen": "data/cv-data-agrizen-fullstack.js",
    "#backend": "data/cv-data-be.js",
    "#frontend": "data/cv-data-fe.js",
    "#nestjs": "data/cv-data-nestjs.js",
    "#healthcare": "data/cv-data-healthcare-fullstack.js",
    "#opswat": "data/cv-data-opswat.js",
    "#kitgroup": "data/cv-data-kitgroup.js",
  };
  if (fileMap[hashtag]) targetFile = fileMap[hashtag];

  await sendMsg(
    env.TELEGRAM_BOT_TOKEN,
    chatId,
    "🤖 Dang lay thong tin CV goc (" + masterCvFile + ") tu GitHub...",
  );

  let masterCvContent;
  try {
    masterCvContent = await fetchFromGitHub(env, masterCvFile);
  } catch (err) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "❌ Loi khi tai file CV goc (" +
        masterCvFile +
        ") tu GitHub: " +
        err.message,
    );
    return;
  }

  const firstBrace = masterCvContent.indexOf("{");
  const lastBrace = masterCvContent.lastIndexOf("}");
  if (firstBrace === -1 || lastBrace === -1) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "❌ Loi: File CV goc tren GitHub co cau truc khong hop le.",
    );
    return;
  }

  let cvJsonString = masterCvContent.substring(firstBrace, lastBrace + 1);
  let parsedMasterCv = null;
  try {
    parsedMasterCv = JSON.parse(cvJsonString);
  } catch (e) {
    try {
      const converted = jsObjectToJson(cvJsonString);
      parsedMasterCv = JSON.parse(converted);
      cvJsonString = converted;
    } catch (e2) {
      await sendMsg(
        env.TELEGRAM_BOT_TOKEN,
        chatId,
        "❌ Loi: Khong the chuyen doi du lieu CV goc sang JSON.",
      );
      return;
    }
  }

  await sendMsg(
    env.TELEGRAM_BOT_TOKEN,
    chatId,
    "🧠 Dang gui du lieu den Gemini AI de may do va toi uu hoa CV...",
  );

  let tailoredCvJson;
  try {
    tailoredCvJson = await callGeminiToTailor(
      env.GEMINI_API_KEY,
      parsedMasterCv,
      jdText,
      hashtag,
    );
  } catch (err) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "❌ Loi goi Gemini AI: " + err.message,
    );
    return;
  }

  // Loc dau/cuoi block code neu Gemini tu dong wrap markdown
  const jsonStart = tailoredCvJson.indexOf("{");
  const jsonEnd = tailoredCvJson.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd !== -1) {
    tailoredCvJson = tailoredCvJson.substring(jsonStart, jsonEnd + 1);
  }

  try {
    JSON.parse(tailoredCvJson);
  } catch (err) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "❌ Loi: Ket qua Gemini tra ve khong phai JSON hop le. Thu lai sau!",
    );
    return;
  }

  await sendMsg(
    env.TELEGRAM_BOT_TOKEN,
    chatId,
    "🚀 May do thanh cong! Dang commit du lieu moi len GitHub: " +
      targetFile +
      "...",
  );

  const fileContentJs =
    "// AUTO GENERATED BY TELEGRAM BOT - AI OPTIMIZED FOR " +
    hashtag.toUpperCase() +
    "\n\nconst cvData = " +
    tailoredCvJson +
    ';\n\nif (typeof module !== "undefined") module.exports = cvData;\n';

  const success = await commitToGitHub(env, targetFile, fileContentJs);

  if (success) {
    // Luu ban backup vao data/history/ de giu lich su
    const timestamp = getTimestamp();
    const hashtagName = hashtag.replace("#", "");
    const historyFile = "data/history/" + hashtagName + "-" + timestamp + ".js";
    const historySaved = await commitToGitHub(
      env,
      historyFile,
      fileContentJs,
    );

    let resultMsg =
      "✅ Da tu dong cap nhat " +
      targetFile +
      " tren GitHub!\n🕒 GitHub Actions dang tu dong bien dich PDF cho ban. Vui long cho 30-40s de nhan file...";

    if (historySaved) {
      resultMsg += "\n📂 Ban backup da luu tai: " + historyFile;
    }

    await sendMsg(env.TELEGRAM_BOT_TOKEN, chatId, resultMsg);
  } else {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "❌ That bai: Khong the commit file moi len GitHub.",
    );
  }
}

// Helper: Tao timestamp YYYYMMDD-HHmmss (UTC+7 Vietnam)
function getTimestamp() {
  const now = new Date();
  const vn = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const y = vn.getUTCFullYear();
  const m = String(vn.getUTCMonth() + 1).padStart(2, "0");
  const d = String(vn.getUTCDate()).padStart(2, "0");
  const h = String(vn.getUTCHours()).padStart(2, "0");
  const min = String(vn.getUTCMinutes()).padStart(2, "0");
  const s = String(vn.getUTCSeconds()).padStart(2, "0");
  return y + m + d + "-" + h + min + s;
}

// ===================================
// HISTORY: Liet ke cac ban backup da luu
// ===================================
async function handleHistory(env, chatId, text) {
  // Parse hashtag tu lenh: /history #opswat hoac /history
  const parts = text.trim().split(/\s+/);
  let filterHashtag = "";
  if (parts[1] && parts[1].startsWith("#")) {
    filterHashtag = parts[1].replace("#", "").toLowerCase();
  }

  // Goi GitHub API de list folder data/history/
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;
  const branch = env.GITHUB_BRANCH || "main";

  const url =
    "https://api.github.com/repos/" +
    owner +
    "/" +
    repo +
    "/contents/data/history?ref=" +
    branch;

  const res = await fetch(url, {
    headers: {
      Authorization: "token " + token,
      "User-Agent": "Cloudflare-Worker-Telegram-CV",
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (res.status === 404) {
    await sendMsg(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      "📂 Chua co ban backup nao trong data/history/. Hay dung /job de may do CV truoc!",
    );
    return;
  }

  if (!res.ok) {
    throw new Error("GitHub API Error " + res.status);
  }

  const files = await res.json();

  // Loc chi lay file .js, sort moi nhat truoc
  let jsFiles = files
    .filter((f) => f.type === "file" && f.name.endsWith(".js"))
    .sort((a, b) => b.name.localeCompare(a.name));

  // Loc theo hashtag neu co
  if (filterHashtag) {
    jsFiles = jsFiles.filter((f) => f.name.startsWith(filterHashtag + "-"));
  }

  if (jsFiles.length === 0) {
    const noResultMsg = filterHashtag
      ? "📂 Khong tim thay ban backup nao cho #" +
        filterHashtag +
        " trong lich su."
      : "📂 Chua co ban backup nao trong data/history/.";
    await sendMsg(env.TELEGRAM_BOT_TOKEN, chatId, noResultMsg);
    return;
  }

  // Format danh sach de doc
  const header = filterHashtag
    ? "📂 Lich su may do #" + filterHashtag + " (" + jsFiles.length + " ban):"
    : "📂 Toan bo lich su may do (" + jsFiles.length + " ban):";

  const maxShow = 20; // Gioi han hien thi 20 ban gan nhat
  const displayFiles = jsFiles.slice(0, maxShow);

  const lines = displayFiles.map((f, i) => {
    // Parse timestamp tu ten file: opswat-20260527-001430.js
    const nameNoExt = f.name.replace(".js", "");
    const dashParts = nameNoExt.split("-");
    // Timestamp la 2 phan cuoi: YYYYMMDD va HHmmss
    const datePart = dashParts[dashParts.length - 2] || "";
    const timePart = dashParts[dashParts.length - 1] || "";
    // Hashtag name la phan truoc timestamp
    const tagName = dashParts.slice(0, dashParts.length - 2).join("-");

    let timeStr = "";
    if (datePart.length === 8 && timePart.length === 6) {
      timeStr =
        datePart.substring(6, 8) +
        "/" +
        datePart.substring(4, 6) +
        "/" +
        datePart.substring(0, 4) +
        " " +
        timePart.substring(0, 2) +
        ":" +
        timePart.substring(2, 4) +
        ":" +
        timePart.substring(4, 6);
    } else {
      timeStr = nameNoExt;
    }

    const num = String(i + 1).padStart(2, " ");
    return num + ". 🏷 #" + tagName + "  ⏰ " + timeStr;
  });

  let msg = header + "\n\n" + lines.join("\n");

  if (jsFiles.length > maxShow) {
    msg +=
      "\n\n... va " +
      (jsFiles.length - maxShow) +
      " ban cu hon. Xem day du tren GitHub.";
  }

  // Them link GitHub
  const ghLink =
    "https://github.com/" +
    owner +
    "/" +
    repo +
    "/tree/" +
    branch +
    "/data/history";
  msg += "\n\n🔗 Xem tren GitHub: " + ghLink;

  await sendMsg(env.TELEGRAM_BOT_TOKEN, chatId, msg);
}

async function fetchFromGitHub(env, filePath) {
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;
  const branch = env.GITHUB_BRANCH || "main";

  const url =
    "https://api.github.com/repos/" +
    owner +
    "/" +
    repo +
    "/contents/" +
    filePath +
    "?ref=" +
    branch;
  const res = await fetch(url, {
    headers: {
      Authorization: "token " + token,
      "User-Agent": "Cloudflare-Worker-Telegram-CV",
      Accept: "application/vnd.github.v3.raw",
    },
  });

  if (!res.ok) {
    throw new Error("GitHub API Error " + res.status);
  }

  return await res.text();
}

async function callGeminiToTailor(apiKey, masterCv, jdText, hashtag) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
    apiKey;

  const systemPrompt = [
    "You are a professional CV writing and tailoring expert. Your objective is to optimize a candidate's bilingual (Vietnamese/vi and English/en) CV data to align perfectly with a target Job Description (JD).",
    "",
    "Here is the candidate's master CV data:",
    JSON.stringify(masterCv, null, 2),
    "",
    "Here is the Job Description for the target position:",
    jdText,
    "",
    "Your task is to tailor this CV to make the candidate look like the absolute perfect fit for this specific position.",
    "Follow these rules strictly:",
    "1. Preserve the exact same JSON keys and structure of the input CV data (both 'vi' and 'en' branches). Do NOT omit any fields.",
    "2. Under 'vi' and 'en':",
    "   - 'title': Update the title if necessary to align with the role in the JD (e.g. change 'Full-Stack Developer Intern' to 'Software Engineering Intern' or 'Backend Developer Intern' as appropriate for the JD).",
    "   - 'objective' (Professional Summary): Rewrite this in both languages. Highlight matching key qualifications, passions, and how the candidate's core technologies (React/NextJS/NodeJS/TS) solve the problems outlined in the JD. Maintain the same professional, technical, and proactive tone. Keep it under 4 sentences.",
    "   - 'projects': Review the projects. For each project, rewrite the 'role', 'desc', and especially the 'tasks' array. Align these tasks with the requirements in the JD by emphasizing matching tech stacks, methodologies (e.g. Agile/Scrum, Event-driven, Microservices, Testing, AI workflow), and business/performance outcomes. Ensure you include target keywords from the JD, but do not invent fake facts or projects. Keep exactly 3 projects in the data.",
    "   - 'projectDisplayLimit': Keep this value as 2. Because only the first 2 projects are rendered in the one-page CV template, reorder the 3 projects so the 2 strongest and most relevant ones for the JD appear first, while the least relevant one remains as the third backup project in the data.",
    "   - 'skills': Reorder or slightly adjust the 'skills' categories and items to prioritize technologies and soft skills mentioned in the JD. Maintain the bilingual mapping correctly.",
    "3. Make sure the 'docTitle' field is updated appropriately, e.g., 'CV_TruongDinhAnh_' + hashtag name.",
    "4. Output ONLY a strictly valid, clean JSON string representing the tailored 'cvData'. Do not wrap it in markdown code blocks like ```json. Do not include any greeting or conversational filler. Start directly with the opening curly brace { and end with the closing curly brace }",
  ].join("\n");

  const payload = {
    contents: [
      {
        parts: [{ text: systemPrompt }],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error("Gemini API error status " + res.status);
  }

  const data = await res.json();
  if (
    !data.candidates ||
    data.candidates.length === 0 ||
    !data.candidates[0].content ||
    !data.candidates[0].content.parts ||
    data.candidates[0].content.parts.length === 0
  ) {
    throw new Error("Invalid response from Gemini API");
  }

  return data.candidates[0].content.parts[0].text.trim();
}
