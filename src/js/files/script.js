// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', () => {
  showSearch();
  addLimit('[data-limit]');
});

function addLimit(elSelector) {
  if (elSelector) {
    document.querySelectorAll(elSelector).forEach(el => {
      el.innerHTML = truncateText(el.innerHTML, 40);
    });
  }
}

function truncateText(text, limit) {
  if (text.length <= limit) {
    return text;
  } else {
    return text.substring(0, limit) + "...";
  }
}

function showSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  if (searchForm) {
    searchInput.addEventListener("input", e=> {
      searchForm.classList.add('_input');
  
      if (searchInput.value == '') {
        searchForm.classList.remove('_input');
      }
    });
  }
}