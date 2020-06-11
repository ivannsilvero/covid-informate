// Navbar responsive, no funcionó. Dejo el código de todos modos para usarlo quizás en un futuro
const navSlide = () => {
    'use strict';
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            (link.style.animation) ? link.style.animation = '': link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5 }s`;
        });
        burger.classList.toggle('toggle');
    });
};

const app = () => {
    navSlide();
};

app();