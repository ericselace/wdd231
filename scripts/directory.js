// ===============================
// MEMBERS DIRECTORY
// ===============================

const membersContainer = document.querySelector("#members-container");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");

// ===============================
// Membership labels
// ===============================

const membershipLevels = {
    1: "Member",
    2: "Silver Member",
    3: "Gold Member",
    4: "Platinum Member"
};

// ===============================
// Fetch JSON data
// ===============================

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Failed to load JSON: " + response.status);
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML = `
            <p style="color:red; text-align:center;">
                Unable to load members data.
            </p>
        `;
    }
}

// ===============================
// Display members
// ===============================

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("article");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}"
                 alt="${member.name}"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p><strong>Membership:</strong><br>
               ${membershipLevels[member.membership]}
            </p>

            <a href="${member.website}"
               target="_blank"
               rel="noopener noreferrer">
               Visit Website
            </a>
        `;

        membersContainer.appendChild(card);
    });
}

// ===============================
// GRID / LIST TOGGLE
// ===============================

// Default view
membersContainer.classList.add("grid");

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

// ===============================
// FOOTER
// ===============================

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

// ===============================
// INIT
// ===============================

getMembers();