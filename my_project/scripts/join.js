/*=========================================================
                    JOIN FORM
=========================================================*/

const joinForm = document.querySelector("#joinForm");

const joinDialog = document.querySelector("#joinDialog");

const closeJoinDialog =
    document.querySelector("#closeJoinDialog");

const dialogOk =
    document.querySelector("#dialogOk");


/*=========================================================
                FORM SUBMISSION
=========================================================*/

joinForm.addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(joinForm);

    const member = {

        firstName: formData.get("firstName"),

        lastName: formData.get("lastName"),

        email: formData.get("email"),

        phone: formData.get("phone"),

        interest: formData.get("interest"),

        message: formData.get("message")

    };


    /* Save membership information */

    localStorage.setItem(
        "greenSafeMember",
        JSON.stringify(member)
    );


    /* Open confirmation dialog */

    joinDialog.showModal();


    /* Reset form */

    joinForm.reset();

});


/*=========================================================
                CLOSE DIALOG
=========================================================*/

closeJoinDialog.addEventListener("click", () => {

    joinDialog.close();

});


dialogOk.addEventListener("click", () => {

    joinDialog.close();

});


/*=========================================================
                CLICK OUTSIDE
=========================================================*/

joinDialog.addEventListener("click", event => {

    if (event.target === joinDialog) {

        joinDialog.close();

    }

});