const menu = document.querySelector('ul')
const menuButton = document.getElementsByClassName('nav-btn')[0]

window.addEventListener('resize', () => {
    if(window.matchMedia("(min-width: 768px)").matches) {
        menu.style.transform = 'translateY(0)';
    } else if (window.matchMedia("(min-width: 300px)").matches) {
        menu.style.transform = 'translateY(-100%)';
    }
})

menu.style.transform = 'translateY(-100%)'
const menuFunction = () => {
    if (menu.style.transform === 'translateY(-100%)') {
        menu.style.transform = 'translateY(0)';
    } else {
        menu.style.transform = 'translateY(-100%)';
    }
};
menuButton.addEventListener('click', menuFunction)