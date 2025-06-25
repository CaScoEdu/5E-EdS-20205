let currentLang = "it";
function toggleLanguage() {
  currentLang = currentLang === "it" ? "en" : "it";
  document.querySelectorAll("[data-it][data-en]").forEach((el) => {
    el.textContent = el.dataset[currentLang];
  });
}
