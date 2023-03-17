// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener("input", e=> {
    searchForm.classList.add('_input');

    if (searchInput.value == '') {
      searchForm.classList.remove('_input');
    }
  });
});