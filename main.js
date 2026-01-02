
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// SCROLL REVEAL
ScrollReveal().reveal(".section__header", {
  distance: "40px",
  duration: 800,
  origin: "bottom",
});

ScrollReveal().reveal(".about__card, .class__card", {
  interval: 200,
  distance: "40px",
  origin: "bottom",
});

// SWIPER
new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
});
