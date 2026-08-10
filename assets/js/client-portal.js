/* =========================================================
   TRAFFORD LOGISTICS
   CLIENT PORTAL JAVASCRIPT
========================================================= */


/* =========================================================
   CLIENT PORTAL LOGIN
========================================================= */

const loginForm = document.querySelector(".portal-login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.querySelector("#portal-email").value.trim();

        const password =
            document.querySelector("#portal-password").value.trim();


        /* Validate fields */

        if (!email || !password) {

            alert(
                "Please enter your email address and password."
            );

            return;
        }


        /*
            FRONT-END DEMO SESSION

            No password is stored.
            Real authentication will be connected
            when the backend is implemented.
        */

        sessionStorage.setItem(
            "traffordPortalDemo",
            "true"
        );


        /* Open dashboard */

        window.location.href =
            "client-dashboard.html";

    });

}


/* =========================================================
   CLIENT DASHBOARD ACCESS GUARD
========================================================= */

const isDashboardPage =
    window.location.pathname.includes(
        "client-dashboard.html"
    );


if (isDashboardPage) {

    const portalSession =
        sessionStorage.getItem(
            "traffordPortalDemo"
        );


    if (portalSession !== "true") {

        window.location.replace(
            "client-portal.html"
        );

    }

}


/* =========================================================
   SIGN OUT
========================================================= */

const signOutBtn =
    document.querySelector("#signOutBtn");


if (signOutBtn) {

    signOutBtn.addEventListener(
        "click",
        function () {

            sessionStorage.removeItem(
                "traffordPortalDemo"
            );

        }
    );

}