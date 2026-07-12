const membersURL = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error("Members data failed");
        }

        const members = await response.json();

        // only silver + gold
        const qualified = members.filter(member =>
            member.membership === 2 || member.membership === 3
        );

        // shuffle
        const shuffled = qualified.sort(() => 0.5 - Math.random());

        const selected = shuffled.slice(0, 3);

        displaySpotlights(selected);

    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {
    const container = document.querySelector("#spotlight-container");

    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("article");
        card.classList.add("business-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">

            <p>${member.address}</p>
            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">Visit Website</a>

            <p>${member.membership === 3 ? "Gold Member" : "Silver Member"}</p>
        `;

        container.appendChild(card);
    });
}

getSpotlights(); 
