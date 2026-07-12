// store the selected elements that we are going to use .
// Sélection des éléments
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle du menu
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});


