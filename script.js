/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Función para generar contenido dinámico
function createPageContent() {
        
    document.addEventListener("DOMContentLoadeed", createPageContent);
    const app = document.getElementById("app");

    // Crear el encabezado
    const header = document.createElement("header");
    header.innerHTML = "<h1>Bienvenidos a BLACK MATIZ studio</h1>";
    app.appendChild(header);

    // Crear la barra de navegación
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="#about" style="color: white; text-decoration: none; margin: 0 15px;">Nosotros</a>
        <a href="#services" style="color: white; text-decoration: none; margin: 0 15px;">Servicios</a>
        <a href="#contact" style="color: white; text-decoration: none; margin: 0 15px;">Contacto</a>
    `;
    app.appendChild(nav);

    // Crear la sección "Sobre Nosotros"
    const aboutSection = document.createElement("section");
    aboutSection.id = "about";
    aboutSection.innerHTML = `
        <h2 style="font-size: 2em; margin-bottom: 20px; color: #f76c6c;">Sobre Nosotros</h2>
        <p style="font-size: 1.2em; margin-bottom: 20px; color: #555;">
            Especialistas en color, tratamientos capilares, pestañas y micropigmentacion.
        </p>
    `;
    app.appendChild(aboutSection);

    // Crear la sección de servicios
    const servicesSection = document.createElement("section");
    servicesSection.id = "services";
    servicesSection.innerHTML = `
        <h2 style="font-size: 2em; margin-bottom: 20px; color: #f76c6c;">Servicios</h2>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            ${createServiceCard("Corte de Cabello", "Estilos modernos y clásicos adaptados a ti.")}
            ${createServiceCard("Manicura y Pedicura", "Cuidado profesional para tus uñas.")}
            ${createServiceCard("Tratamientos Faciales", "Restaura y cuida la piel de tu rostro.")}
        </div>
    `;
    app.appendChild(servicesSection);

    // Crear la sección de contacto
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.innerHTML = `
        <h2 style="font-size: 2em; margin-bottom: 20px; color: #f76c6c;">Contáctanos</h2>
        <p>Teléfono: 55 8442 6144</p>
        <p>Email: blackmatizstudio@gmail.com</p>
        <p>Dirección: Ciudad de Mexico, Ciudad</p>
    `;
    app.appendChild(contactSection);

    // Crear el pie de página
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>&copy; 2024 BLACK MATIZ studio. Todos los derechos reservados.</p>";
    app.appendChild(footer);
}

// Función para generar una tarjeta de servicio
function createServiceCard(title, description) {
    return `
        <div style="
            background: white; 
            border-radius: 10px; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
            padding: 20px; 
            width: 300px; 
            transition: transform 0.3s ease, box-shadow 0.3s ease;">
            <h3 style="color: #f76c6c;">${title}</h3>
            <p>${description}</p>
        </div>
    `;
}

// Llamar a la función para generar contenido
createPageContent();

