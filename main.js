const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click', ()=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

//about content
ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left"
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right"
});