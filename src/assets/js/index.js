const carouselItems = document.getElementById("carousel-items");
const slides = document.querySelectorAll("[data-slide]");
const sarchBar = document.getElementById("search");

const searchButton = document.getElementById("close-search");
const searchOpenButton = document.getElementById("open-search");
let currentIndex = 0;

// second ccaroussel
const carousel = document.getElementById("carousel");
const slider = document.querySelectorAll("[data-all]");
const menuCloseButton = document.getElementById("mobile-menu-close");

// responsive burger menu
const menuOpenButton = document.getElementById("menu-open-button");
const mobileMenu = document.getElementById("mobile-menu");
// Ouvrir le menu mobile
menuOpenButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-y-[47rem]");
  mobileMenu.classList.add("top-16");
  menuOpenButton.classList.toggle("hidden");
  menuCloseButton.classList.toggle("hidden");
});
// Fermer le menu mobile
menuCloseButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-y-[47rem]");
  menuOpenButton.classList.toggle("hidden");
  menuCloseButton.classList.toggle("hidden");
  mobileMenu.classList.remove("top-16");
});

function updateCarousel(index) {
  carouselItems.style.transform = `translateX(-${index * 16.6}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("bg-primary-yellow", i === index);
    slide.classList.toggle("bg-gray-400", i !== index);
  });

  // ****                   *******
  carousel.style.transform = `translateX(-${index * 33.333}%)`;
  slider.forEach((slide, i) => {
    slide.classList.toggle("bg-primary-yellow", i === index);
    slide.classList.toggle("bg-gray-400", i !== index);
  });
}
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentIndex = parseInt(slide.getAttribute("data-slide"));
    updateCarousel(currentIndex);
  });
});
slider.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentIndex = parseInt(slide.getAttribute("data-all"));
    updateCarousel(currentIndex);
  });
});

searchButton.addEventListener("click", () => {
  sarchBar.classList.toggle("scale-0");
});
searchOpenButton.addEventListener("click", () => {
  sarchBar.classList.toggle("scale-0");
});

updateCarousel(currentIndex);
