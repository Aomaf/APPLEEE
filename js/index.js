const humburger = document.getElementById('humb');
const nav = document.querySelector('nav');

humburger.addEventListener('click', ()=>{
    console.log('im here')
    nav.classList.toggle('show')
})

