async function loadEvents() {

    try {

        const response = await fetch("data/events.json");

        if (!response.ok) {
            throw new Error("Unable to load events.");
        }

        const events = await response.json();

        displayEvents(events);

    } catch (error) {

        console.error(error);

    }

}

function displayEvents(events) {

    const container = document.querySelector("#eventCards");

    if (!container) return;

    events.forEach(event => {

        const card = document.createElement("article");

        card.classList.add("event-card");

        card.innerHTML = `
            <span class="event-date">${event.date}</span>

            <h3>${event.title}</h3>

            <p>${event.description}</p>

            <p><strong>🕒 Time:</strong> ${event.time}</p>

            <p><strong>📍 Location:</strong> ${event.location}</p>
        `;

        container.appendChild(card);

    });

}

loadEvents();