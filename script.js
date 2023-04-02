const darkMode = document.querySelector(".fa-moon");
const moonEl = document.querySelector(".material-symbols-outlined");
const navAnchorEl = document.querySelectorAll(".nav-anchor");
const navItem = document.querySelectorAll(".nav-anchor-bottom");
const phoneAnchor = document.querySelector(".phone-anchor");
const mainContent = document.querySelector(".main-content");
const logo = document.querySelector(".bottom-logo");
const servicesEl = document.querySelector(".Services");
const testimonieEl = document.querySelector(".testimonials");
const footerEl = document.querySelector(".footer");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const phoneIcon = document.querySelector("#phone-icon");
const expElement = document.querySelector("#experience");
const bodyElement = document.querySelector("#body");
const horizontalLineEl = document.getElementsByClassName("horizontal-line");
const socialsEl = document.getElementsByClassName("socials-a");

console.log(horizontalLineEl);
console.log(socialsEl);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navAnchorEl.forEach((n) => {
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const toggleClasses = () => {
  navItem.forEach((item) => {
    item.classList.toggle("element-color");
  });

  for (let j = 0; j < horizontalLineEl.length; j++) {
    horizontalLineEl[j].classList.toggle("display-none");
  }

  for (let k = 0; k < socialsEl.length; k++) {
    socialsEl[k].classList.toggle("socials-color");
  }
  bodyElement.classList.toggle("dark");
  darkMode.classList.toggle("display-none");
  moonEl.classList.toggle("display-none");
  phoneAnchor.classList.toggle("element-color");
  logo.classList.toggle("element-color");
  phoneIcon.classList.toggle("background-color");
  mainContent.classList.toggle("main-background");
  expElement.classList.toggle("main-background");
  servicesEl.classList.toggle("main-background");
  testimonieEl.classList.toggle("main-background");
  footerEl.classList.toggle("main-background");
};

darkMode.addEventListener("click", function () {
  toggleClasses();
});

moonEl.addEventListener("click", function () {
  toggleClasses();
});
