document.addEventListener("DOMContentLoaded", function () {
    const bienvenida = document.querySelector('.bienvenida');
    const sections = document.querySelectorAll('.reveal');
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    window.addEventListener('scroll', function() {
        // Desaparecer la sección de bienvenida al hacer scroll
        if (window.scrollY > 100) {
            bienvenida.classList.add('hidden');
        } else {
            bienvenida.classList.remove('hidden');
        }

        // Efecto Reveal en secciones
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    });

    // Menú móvil
    console.log(menuToggle);
    cosole.log(navList);
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
