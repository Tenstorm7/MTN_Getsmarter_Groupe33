const carousel1 = document.getElementById("carousel1");
const item = document.querySelectorAll("[data-item]");
let compteur = 0;

function lesCarousels(index) {

    carousel1.style.transform = `translateX(-${index * 33.333}%)`;

    item.forEach((slide, i) => {
        slide.classList.toggle("bg-primary-yellow", i === index);
        slide.classList.toggle("bg-gray-500", i !== index);
    });
}
item.forEach((slide) => {
    slide.addEventListener("click", () => {

        console.log(slide);
        compteur = parseInt(slide.getAttribute("data-item"));
        lesCarousels(compteur);
    });
});

lesCarousels(compteur);

// CAROUSEL2
const carousel2 = document.getElementById("carousel2");
const item2 = document.querySelectorAll("[data-item2]");
let compteur2 = 0;

function lesCarousels2(index) {

    carousel2.style.transform = `translateX(-${index * 33.333}%)`;

    item2.forEach((slide2, i) => {
        slide2.classList.toggle("bg-primary-yellow", i === index);
        slide2.classList.toggle("bg-gray-500", i !== index);
    });
}
item2.forEach((slide2) => {
    slide2.addEventListener("click", () => {

        console.log(slide2);
        compteur2 = parseInt(slide2.getAttribute("data-item2"));
        lesCarousels2(compteur2);
    });
});

lesCarousels2(compteur2);


// CAROUSEL DE LA DERNIÈRE SECTION

// const carousel = document.getElementById("carousel");
// const all = document.querySelectorAll("[data-all]");
// // const menuCloseButton = document.getElementById("mobile-menu-close");
// let mon_compteur= 0;

// function lesCarousels3(index) {

//     carousel.style.transform = `translateX(-${index * 33.333}%)`;

//     all.forEach((slider3, i) => {
//         slider3.classList.toggle("bg-primary-yellow", i === index);
//         slider3.classList.toggle("bg-gray-500", i !== index);
//     });
// }
// item2.forEach((slider3) => {
//     slider3.addEventListener("click", () => {

//         console.log(slider3);
//         compteur2 = parseInt(slider3.getAttribute("data-all"));
//         lesCarousels3(mon_compteur);
//     });
// });
// lesCarousels3(mon_compteur);


// DEUXIÈME ESSAI

// const carousel = document.getElementById("carousel");
// const slider = document.querySelectorAll("[data-all]");
// const menuCloseButton = document.getElementById("mobile-menu-close");
// let currentIndex = 0;


// function updateCarousel(index) {
//     carouselItems.style.transform = `translateX(-${index * 16.6}%)`;
//     slides.forEach((slide, i) => {
//       slide.classList.toggle("bg-primary-yellow", i === index);
//       slide.classList.toggle("bg-gray-400", i !== index);
//     });
  
//     // ****                   *******
//     carousel.style.transform = `translateX(-${index * 33.333}%)`;
//     slider.forEach((slide, i) => {
//       slide.classList.toggle("bg-primary-yellow", i === index);
//       slide.classList.toggle("bg-gray-400", i !== index);
//     });
//   }
//   slider.forEach((slide) => {
//     slide.addEventListener("click", () => {
//       currentIndex = parseInt(slide.getAttribute("data-all"));
//       updateCarousel(currentIndex);
//     });
//   });
  
//   updateCarousel(currentIndex);

