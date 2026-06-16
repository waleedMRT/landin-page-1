const linksContainer = document.getElementById('links-container');
const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav')


menuBtn.addEventListener('click' , ()=> {
    linksContainer.classList.toggle('open')

    const isOpen = linksContainer.classList.contains('open');

    menuIcon.setAttribute('class' , isOpen ? "ri-close-fill" : "ri-menu-fill" )
})


linksContainer.addEventListener('click' , ()=>{
    linksContainer.classList.remove('open')
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        nav.style.backgroundColor = '#f4f4f4';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
});