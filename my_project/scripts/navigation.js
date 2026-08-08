/* =========================================
   GREEN SAFE - NAVIGATION
========================================= */

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");


/* =========================================
   MOBILE MENU
========================================= */

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


/* =========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================= */

if (navigation) {

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });

    });

}