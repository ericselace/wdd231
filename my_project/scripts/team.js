/*=====================================
        TEAM MEMBERS
=====================================*/

const teamContainer = document.querySelector("#teamCards");

async function loadTeam() {

    try {

        const response = await fetch("data/team.json");

        if (!response.ok) {
            throw new Error("Unable to load team members.");
        }

        const members = await response.json();

        displayTeam(members);

    } catch (error) {

        console.error(error);

    }

}

function displayTeam(members) {

    if (!teamContainer) return;

    members.forEach(member => {

        const card = document.createElement("article");

        card.classList.add("team-card");

        card.innerHTML = `
            <img
                src="${member.image}"
                alt="${member.name}"
                loading="lazy"
                width="300"
                height="300">

            <div class="team-content">

                <h3>${member.name}</h3>

                <h4>${member.position}</h4>

                <p>${member.bio}</p>

            </div>
        `;

        teamContainer.appendChild(card);

    });

}

loadTeam();