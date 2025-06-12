const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            menu.classList.remove('menu--open');
        }
    });
});