// Efecto para desaparecer el logo al hacer scroll
window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    logo.style.opacity = 1 - window.scrollY / 200;
});

// Efecto Reveal al hacer scroll
const sections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Menú móvil
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
