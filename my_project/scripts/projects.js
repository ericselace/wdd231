/*=====================================
        GREEN SAFE PROJECTS
=====================================*/

const cardsContainer = document.querySelector("#projectCards");
const searchInput = document.querySelector("#searchProject");
const filterButtons = document.querySelectorAll("[data-category]");

let allProjects = [];
let currentCategory = "All";

/*=====================================
        LOAD PROJECTS
=====================================*/

async function loadProjects() {

    try {

        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Unable to load projects.");
        }

        allProjects = await response.json();

        if (searchInput) {

            displayProjects(allProjects);

        } else {

            displayProjects(allProjects.slice(0, 3));

        }

    } catch (error) {

        console.error(error);

    }

}

/*=====================================
        DISPLAY PROJECTS
=====================================*/

function displayProjects(projects) {

    if (!cardsContainer) return;

    cardsContainer.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("article");

        card.classList.add("project-card");

        card.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.alt}"
                loading="lazy">

            <div class="project-content">

                <span class="project-status ${project.status.toLowerCase()}">
                    ${project.status}
                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <ul class="project-details">

                    <li><strong>Category:</strong> ${project.category}</li>

                    <li><strong>Location:</strong> ${project.location}</li>

                    <li><strong>Date:</strong> ${project.date}</li>

                </ul>

                <a href="contact.html" class="button">
                    Learn More
                </a>

            </div>


        `;

        cardsContainer.appendChild(card);

    });

}

/*=====================================
        FILTER PROJECTS
=====================================*/

function filterProjects() {

    const keyword = searchInput.value.toLowerCase();

    const filtered = allProjects.filter(project => {

        const matchesCategory =
            currentCategory === "All" ||
            project.category === currentCategory;

        const matchesSearch =
            project.title.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword);

        return matchesCategory && matchesSearch;

    });

    displayProjects(filtered);

}

/*=====================================
        EVENTS
=====================================*/

if (searchInput) {

    searchInput.addEventListener("input", filterProjects);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentCategory = button.dataset.category;

        filterProjects();

    });

});

loadProjects();