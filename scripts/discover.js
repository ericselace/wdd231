import { discoverItems } from "../data/discover-data.mjs";

const container = document.querySelector("#discover-grid");

discoverItems.forEach((item, index) => {
    const card = document.createElement("article");

    card.classList.add("card");
    card.classList.add(`area${index + 1}`);

    card.innerHTML = `
        <h2>${item.name}</h2>

        <figure>
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </figure>

        <address>${item.address}</address>

        <p>${item.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);
});

const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    message.textContent =
    "Welcome! Let us know if you have any questions.";

}
else {

    const difference = now - Number(lastVisit);

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {

        message.textContent =
        "Back so soon! Awesome!";

    }
    else {

        message.textContent =
        `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;

    }
}

localStorage.setItem("lastVisit", now);