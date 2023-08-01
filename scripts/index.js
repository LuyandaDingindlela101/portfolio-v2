const projects = document.querySelectorAll(".project");
const projects_container = document.querySelector(".projects-container");

projects_container.addEventListener("mouseover", e => {
    let hovered_project = e.target.classList[1];
    if (["project-1", "project-2", "project-3", "project-4", "project-5"].includes(hovered_project)) {
        // LOOP THROUGH ALL THE PROJECTS AND REMOVE THE active CLASS
        projects.forEach(project => { project.classList.remove("active"); })
        // ADD THE active CLASS TO THE HOVERED ITEM
        document.querySelector(`.${hovered_project}`).classList.add("active");
    }
})