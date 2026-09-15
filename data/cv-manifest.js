// ===================================
// CV MANIFEST - Single Source of Truth
// ===================================
// Mọi danh sách phiên bản CV (router, renderer, nav) đều đọc từ đây.
// Thêm phiên bản mới: chỉ cần thêm 1 dòng vào mảng này.
//
// Thứ tự trong mảng = thứ tự hiển thị trong menu chọn phiên bản.
// Phần tử có key 'default' là phiên bản mặc định khi không có ?type=.

(function (root) {
  const CV_MANIFEST = [
    {
      key: "banviet",
      file: "data/cv-data-banviet.js",
      emoji: "🎓",
      label: "🎓 Bản Việt IT WordPress",
    },
    {
      key: "digifytech",
      file: "data/cv-data-digifytech.js",
      emoji: "🔷",
      label: "🔷 DigifyTech BE Intern",
    },
    {
      key: "onhandbi",
      file: "data/cv-data-onhandbi.js",
      emoji: "📊",
      label: "📊 On Hand BI Fullstack",
    },
    {
      key: "lienkhuong",
      file: "data/cv-data-lienkhuong.js",
      emoji: "✈️",
      label: "✈️ Kỹ Sư CNTT - SB Liên Khương",
    },
    {
      key: "webdev-intern",
      file: "data/cv-data-webdev-intern.js",
      emoji: "💻",
      label: "💻 WebDev Intern (Remote US)",
    },
    {
      key: "default",
      file: "data/cv-data-fullstack.js",
      emoji: "💼",
      label: "Chung",
    },
    {
      key: "ginstudio",
      file: "data/cv-data-ginstudio.js",
      emoji: "🎯",
      label: "🎯 GIN Studio Fresher AI",
    },
    {
      key: "slimai",
      file: "data/cv-data-slimai.js",
      emoji: "✨",
      label: "✨ SlimAI Intern",
    },
    {
      key: "alphasphere",
      file: "data/cv-data-alphasphere.js",
      emoji: "🔺",
      label: "🔺 AlphaSphere Fullstack",
    },
    {
      key: "fimi",
      file: "data/cv-data-fimi.js",
      emoji: "🔴",
      label: "🔴 FIMI Backend",
    },
    {
      key: "danggiatrang",
      file: "data/cv-data-danggiatrang.js",
      emoji: "🌱",
      label: "🌱 Đặng Gia Trang DE/BE",
    },
    {
      key: "vitech",
      file: "data/cv-data-vitech.js",
      emoji: "🧡",
      label: "🧡 Vitech Digital",
    },
    {
      key: "zalo",
      file: "data/cv-data-zalo.js",
      emoji: "🔵",
      label: "🔵 Zalo Product",
    },
    {
      key: "vietry",
      file: "data/cv-data-vietry.js",
      emoji: "🍊",
      label: "🍊 Vietry Coder",
    },
    {
      key: "dekon",
      file: "data/cv-data-dekon.js",
      emoji: "🇦🇺",
      label: "🇦🇺 DEKON Intern",
    },
    {
      key: "taptap",
      file: "data/cv-data-taptap.js",
      emoji: "🔴",
      label: "🔴 TAPTAP Intern",
    },
    {
      key: "frontend",
      file: "data/cv-data-fe.js",
      emoji: "🎨",
      label: "Frontend",
    },
    {
      key: "ezgames",
      file: "data/cv-data-ezgames.js",
      emoji: "🚀",
      label: "🚀 EZ Games FE",
    },
    {
      key: "nubitel",
      file: "data/cv-data-nubitel.js",
      emoji: "📶",
      label: "📶 Nubitel FE",
    },
    {
      key: "basevn",
      file: "data/cv-data-basevn.js",
      emoji: "⚡",
      label: "⚡ Base.vn FS",
    },
    {
      key: "backend",
      file: "data/cv-data-be.js",
      emoji: "⚙️",
      label: "Backend",
    },
    {
      key: "nestjs",
      file: "data/cv-data-nestjs.js",
      emoji: "🏥",
      label: "🏥 PKH NestJS",
    },
    {
      key: "healthcare",
      file: "data/cv-data-healthcare-fullstack.js",
      emoji: "🦷",
      label: "🦷 Healthcare FS",
    },
    {
      key: "ai",
      file: "data/cv-data-ai.js",
      emoji: "🤖",
      label: "🤖 AI Researcher",
    },
    {
      key: "ai-webdev",
      file: "data/cv-data-ai-webdev.js",
      emoji: "🌐",
      label: "🌐 AI WebDev",
    },
    {
      key: "yody",
      file: "data/cv-data-yody.js",
      emoji: "🟡",
      label: "🟡 Yody Shaper",
    },
    {
      key: "agrizen",
      file: "data/cv-data-agrizen-fullstack.js",
      emoji: "🌱",
      label: "🌱 Agrizen FS",
    },
    {
      key: "opswat",
      file: "data/cv-data-opswat.js",
      emoji: "🛡️",
      label: "🛡️ OPSWAT Intern",
    },
    {
      key: "beone",
      file: "data/cv-data-beone.js",
      emoji: "🐝",
      label: "🐝 BeOne Intern",
    },
    {
      key: "onesec",
      file: "data/cv-data-onesec.js",
      emoji: "📱",
      label: "📱 ONESEC RN",
    },
    {
      key: "strapbuild",
      file: "data/cv-data-strapbuild.js",
      emoji: "🚀",
      label: "🚀 Strapbuild FS",
    },
    {
      key: "kitgroup",
      file: "data/cv-data-kitgroup.js",
      emoji: "🏢",
      label: "🏢 KIT Group Intern",
    },
    {
      key: "catspeak",
      file: "data/cv-data-catspeak.js",
      emoji: "🐈",
      label: "🐈 CatSpeak FE",
    },
    {
      key: "techsupport",
      file: "data/cv-data-techsupport.js",
      emoji: "🛠️",
      label: "🛠️ Tech Support",
    },
    {
      key: "itdev",
      file: "data/cv-data-itdev.js",
      emoji: "💻",
      label: "💻 IT Dev Intern",
    },
    {
      key: "maxspell",
      file: "data/cv-data-maxspell.js",
      emoji: "🔮",
      label: "🔮 Maxspell WD",
    },
  ];

  // Tiện ích tra cứu nhanh theo key
  CV_MANIFEST.byKey = function (key) {
    return (
      CV_MANIFEST.find(function (v) {
        return v.key === key;
      }) || null
    );
  };

  // id của nút menu tương ứng mỗi phiên bản (dùng để highlight)
  CV_MANIFEST.navId = function (key) {
    return "ver-" + key;
  };

  // Phiên bản ứng dụng để cache-busting toàn bộ tài nguyên (CSS, JS, data)
  const APP_VERSION = "1.1.0";
  CV_MANIFEST.version = APP_VERSION;
  root.CV_APP_VERSION = APP_VERSION;
  root.withCvVersion = function (url) {
    if (!url) return url;
    const v = root.CV_APP_VERSION || APP_VERSION;
    const sep = url.includes("?") ? "&" : "?";
    return url + sep + "v=" + encodeURIComponent(v);
  };

  root.CV_MANIFEST = CV_MANIFEST;
})(typeof window !== "undefined" ? window : globalThis);
