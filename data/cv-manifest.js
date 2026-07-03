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
      key: "default",
      file: "data/cv-data-fullstack.js",
      emoji: "💼",
      label: "Chung",
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

  root.CV_MANIFEST = CV_MANIFEST;
})(typeof window !== "undefined" ? window : globalThis);
