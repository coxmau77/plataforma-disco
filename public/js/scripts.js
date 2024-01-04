const darkModeBtn = document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click', () => {

    document.querySelector('html').classList.toggle('dark')
});