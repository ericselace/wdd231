async function loadProjects() {

    try {

        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Unable to load project data.");
        }

        const projects = await response.json();

        displayProjects(projects);

    } catch (error) {

        console.error(error);

    }

}

function displayProjects(projects) {

    const container = document.querySelector("#projectCards");

    if (!container) return;

    projects.forEach(project => {

        const card = document.createElement("article");

        card.classList.add("project-card");

        card.innerHTML = `
            <img src="${project.image}"
                 alt="${project.alt}"
                 loading="lazy">

            <div class="project-content">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p><strong>Location:</strong> ${project.location}</p>

            </div>
        `;

        container.appendChild(card);

    });

}

loadProjects();