const darkButton = document.querySelector('#darkMode');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});