import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

// Initialisation de la page
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

// Inscrire un étudiant
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);

  byuiCourse.changeEnrollment(sectionNum);

  renderSections(byuiCourse.sections);
});

// Retirer un étudiant
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);

  byuiCourse.changeEnrollment(sectionNum, false);

  renderSections(byuiCourse.sections);
});