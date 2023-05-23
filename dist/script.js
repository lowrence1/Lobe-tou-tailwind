// ====DROP DOWN LINKS===//
const faqs = document.querySelectorAll(".faq__question h4");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("open");
    faq.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});


// ====DROP DOWN LINKS===//
const links = document.querySelectorAll(".footer__drop__item h4");
links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});


