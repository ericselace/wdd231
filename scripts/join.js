// Set the hidden timestamp field when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = Date.now();
    }
});

// Open a membership modal
function openModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "block";
    }
}

// Make the function available to the HTML
window.openModal = openModal;

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Prevent the "More Info" links from jumping to the top of the page
document.querySelectorAll(".card a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});