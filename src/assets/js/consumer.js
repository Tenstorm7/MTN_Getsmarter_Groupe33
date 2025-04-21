const mon_carousel = document.getElementById("mon_carousel");
const items = document.querySelectorAll("[data-items]");
let compteur = 0;

function lesCarousels(index) {

    mon_carousel.style.transform = `translateX(-${index * 20}%)`;

    items.forEach((slide, i) => {
        slide.classList.toggle("bg-primary-yellow", i === index);
        slide.classList.toggle("bg-gray-500", i !== index);
    });
}
items.forEach((slide) => {
    slide.addEventListener("click", () => {

        console.log(slide);
        compteur = parseInt(slide.getAttribute("data-items"));
        lesCarousels(compteur);
    });
});

lesCarousels(compteur);