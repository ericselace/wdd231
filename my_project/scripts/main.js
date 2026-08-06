/*=====================================
    Green Safe
    Main JavaScript
=====================================*/

/*=========================
    CURRENT YEAR
=========================*/

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/*=========================
    LAST MODIFIED
=========================*/

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

/*=========================
    HAMBURGER MENU
=========================*/

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.textContent =
            navigation.classList.contains("open")
                ? "✖"
                : "☰";

    });

}