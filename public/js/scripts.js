const darkModeBtn = document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click', ()=>{
    console.log('hola');
    document.querySelector('html').classList.toggle('dark')
});