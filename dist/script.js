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



const faqNav = document.querySelectorAll(".faq__nav__link");
const faqContent = document.querySelectorAll(".faq__tab__content");
faqNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaq();
    
    faq.classList.add("active");
   
    const activeFaqContent = document.querySelector(`#${faq.id}-content`);
    removeActiveFaqContent();
    activeFaqContent.classList.add("active");
  });
});

function removeActiveFaq() {
  faqNav.forEach((faq) => {
    faq.classList.remove("active");
  });
}

function removeActiveFaqContent() {
  faqContent.forEach((faq) => {
    faq.classList.remove("active");
  });
}