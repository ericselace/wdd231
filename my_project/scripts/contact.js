/*=========================================================
                    CONTACT FORM
=========================================================*/

const contactForm = document.querySelector("#contactForm");

const contactDialog = document.querySelector("#contactDialog");

const closeContactDialog =
    document.querySelector("#closeContactDialog");

const contactDialogOk =
    document.querySelector("#contactDialogOk");


/* ================= FORM SUBMISSION ================= */

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(contactForm);

    const message = {

        name: formData.get("name"),

        email: formData.get("email"),

        subject: formData.get("subject"),

        message: formData.get("message"),

        date: new Date().toISOString()

    };


    /* Save message in localStorage */

    localStorage.setItem(
        "greenSafeContactMessage",
        JSON.stringify(message)
    );


    /* Open confirmation dialog */

    contactDialog.showModal();


    /* Clear form */

    contactForm.reset();

});


/* ================= CLOSE DIALOG ================= */

closeContactDialog.addEventListener("click", () => {

    contactDialog.close();

});


contactDialogOk.addEventListener("click", () => {

    contactDialog.close();

});


/* ================= CLICK OUTSIDE ================= */

contactDialog.addEventListener("click", (event) => {

    if (event.target === contactDialog) {

        contactDialog.close();

    }

});