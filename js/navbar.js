
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links > a');

links.forEach((link) => link.addEventListener('click', () => {
    burgerMenu.classList.remove('x-menu');
    navLinks.classList.remove('show-nav-menu');
}));

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('x-menu');
    navLinks.classList.toggle('show-nav-menu');
});