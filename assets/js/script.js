/*==================================
WHY CARD IMAGE SLIDER
==================================*/

const sliders = document.querySelectorAll(".card-slider");

sliders.forEach((slider) => {

    const images = slider.querySelectorAll("img");

    let current = 0;

    setInterval(() => {

        // Hide current image
        images[current].classList.remove("active");

        // Move to next image
        current++;

        if (current >= images.length) {
            current = 0;
        }

        // Show next image
        images[current].classList.add("active");

    }, 4000);

});