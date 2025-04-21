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
  mobileMenu.classList.toggle("h-screen");
  mobileMenu.classList.toggle("-translate-y-[57rem]");
  menuOpenButton.classList.toggle("hidden");
  menuCloseButton.classList.toggle("hidden");
});
// Fermer le menu mobile
menuCloseButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("h-screen");
  mobileMenu.classList.toggle("-translate-y-[57rem]");
  menuOpenButton.classList.toggle("hidden");
  menuCloseButton.classList.toggle("hidden");
});

function updateCarousel(index) {
  carouselItems.style.transform = `translateX(-${index * 25}%)`;
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

// Carroussel automatique EMPLOYER BENEFITS
const carouselItem = document.getElementById("carousel-auto");
const slide = document.querySelectorAll("[data-slides]");
let currentIndexs = 0;
let autoSlideInterval;
let startX = 0;
let isDragging = false;

function updateCarousels(index) {
  carouselItem.style.transform = `translateX(-${index * 33.33}%)`;
  slide.forEach((slide, i) => {
    slide.classList.toggle("bg-primary-yellow", i === index);
    slide.classList.toggle("bg-gray-500", i !== index);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndexs = (currentIndexs + 1) % slide.length;
    updateCarousels(currentIndexs);
  }, 3500); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById("prevs").addEventListener("click", () => {
  stopAutoSlide();
  currentIndexs = (currentIndexs - 1 + slide.length) % slide.length;
  updateCarousels(currentIndexs);
  startAutoSlide();
});

document.getElementById("nexts").addEventListener("click", () => {
  stopAutoSlide();
  currentIndexs = (currentIndexs + 1) % slide.length;
  updateCarousels(currentIndexs);
  startAutoSlide();
});

slide.forEach((slide) => {
  slide.addEventListener("click", () => {
    stopAutoSlide();
    currentIndexs = parseInt(slide.getAttribute("data-slides"));
    updateCarousels(currentIndexs);
    startAutoSlide();
  });
});

// Touch/Drag functionality
carouselItem.addEventListener("mousedown", (e) => {
  stopAutoSlide();
  startX = e.clientX;
  isDragging = true;
});

carouselItem.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diff = e.clientX - startX;
  if (diff > 50) {
    currentIndexs = (currentIndexs - 1 + slide.length) % slide.length;
    updateCarousel(currentIndexs);
    isDragging = false;
  } else if (diff < -50) {
    currentIndexs = (currentIndexs + 1) % slide.length;
    updateCarousels(currentIndexs);
    isDragging = false;
  }
});

carouselItem.addEventListener("mouseup", () => {
  isDragging = false;
  startAutoSlide();
});

carouselItem.addEventListener("mouseleave", () => {
  isDragging = false;
});

carouselItem.addEventListener("touchstart", (e) => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
  isDragging = true;
});

carouselItem.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const diff = e.touches[0].clientX - startX;
  if (diff > 50) {
    currentIndexs = (currentIndexs - 1 + slide.length) % slide.length;
    updateCarousels(currentIndexs);
    isDragging = false;
  } else if (diff < -50) {
    currentIndexs = (currentIndexs + 1) % slide.length;
    updateCarousels(currentIndexs);
    isDragging = false;
  }
});

carouselItem.addEventListener("touchend", () => {
  isDragging = false;
  startAutoSlide();
});

updateCarousels(currentIndexs);
startAutoSlide(); // Start the automatic sliding

// CAROUSSEL UNDER LATEST NEWS****
const carouselIteml = document.getElementById("carousel-autol");
const slidel = document.querySelectorAll("[data-slidesl]");
let currentIndexsl = 0;

function updateCarouselsl(index) {
  if (carouselIteml.classList.contains("grid-cols-10")) {
    carouselIteml.style.transform = `translateX(-${index * 10}%)`;
  } else {
    carouselIteml.style.transform = `translateX(-${index * 14.285}%)`;
  }
  slidel.forEach((slide, i) => {
    slide.classList.toggle("bg-primary-yellow", i === index);
    slide.classList.toggle("bg-gray-200", i !== index);
  });
}

slidel.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentIndex = parseInt(slide.getAttribute("data-slidesl"));
    updateCarouselsl(currentIndex);
  });
});
updateCarouselsl(currentIndexsl);

// CAROUSSEL UNDER VITAL BEHAVIOURS****
const carouselVital = document.getElementById("carousel-vital");
const slideVital = document.querySelectorAll("[data-vital]");
let currentIndexVital = 1;

function updateCarouselVital(index) {
    if (carouselVital.classList.contains("grid-cols-4")) {
      carouselVital.style.transform = `translateX(-${index *25}%)`;
    } else {
      carouselVital.style.transform = `translateX(-${index * 16.66}%)`;
    }
  slideVital.forEach((slide, i) => {
    slide.classList.toggle("bg-primary-yellow", i === index);
    slide.classList.toggle("bg-gray-500", i !== index);
  });
}
slideVital.forEach((slide) => {
  slide.addEventListener("click", () => {
    currentIndexVital = parseInt(slide.getAttribute("data-vital"));
    updateCarouselVital(currentIndexVital);
  });
});
updateCarouselVital(currentIndexsl);
