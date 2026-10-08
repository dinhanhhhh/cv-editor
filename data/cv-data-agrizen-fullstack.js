// =========================================================================
// CV DATA - AGRIZEN-FULLSTACK (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "projectDisplayLimit": 2,
    "header": {
      "name": "TRƯƠNG ĐÌNH ANH",
      "title": "Full-Stack Developer Intern (Telegram Test)"
    }
  },
  "en": {
    "projectDisplayLimit": 2,
    "header": {
      "name": "TRUONG DINH ANH",
      "title": "Full-Stack Developer Intern (Telegram Test)"
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
