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
/* =========================================================
   TRAFFORD LOGISTICS
   GLOBAL SITE SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (!menuToggle || !navLinks) {
        return;
    }


    /* =========================================
       OPEN / CLOSE MOBILE NAVIGATION
    ========================================== */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    /* =========================================
       CLOSE MENU AFTER LINK CLICK
    ========================================== */

    navLinks
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });


    /* =========================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================== */

    document.addEventListener("click", (event) => {

        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });


    /* =========================================
       RESET MOBILE MENU WHEN RETURNING
       TO DESKTOP WIDTH
    ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});