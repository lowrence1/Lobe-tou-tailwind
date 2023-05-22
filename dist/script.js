const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});