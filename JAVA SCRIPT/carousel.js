let currentImage = 1; // Variable para la imagen actual

        function nextImage() {
            currentImage = (currentImage % 4) + 1; // Avanza a la siguiente imagen
            document.getElementById(`imagen${currentImage}`).checked = true; // Selecciona el radio correspondiente
        }

        function prevImage() {
            currentImage = (currentImage - 1 + 4) % 4 || 4; // Retrocede a la imagen anterior
            document.getElementById(`imagen${currentImage}`).checked = true; // Selecciona el radio correspondiente
        }


// Almacenar los productos disponibles para la búsqueda
const productos = [
    { nombre: "Fuente de poder 5 A - 60 A", url: "fuente-de-poder.html" },
    { nombre: "Tubos de luz LED NEON", url: "tubos-neon.html" },
    { nombre: "Luces NEON FLEX", url: "luces-neon.html" },
    { nombre: "Trompos cometa y variedad", url: "trompos.html" },
    { nombre: "Lampara mango 3 focos", url: "lampara-mango-3-focos.html" },
    { nombre: "Antorcha", url: "lamparas-solares-para-jardin.html" },
    { nombre: "plafones, techo", url: "plafones-led-3-temperaturas.html" },

    // Añadir más productos según sea necesario
];

// Almacenar las secciones disponibles para la búsqueda
const secciones = [

    { nombre: "producto top", id: "producto-top" },

    { nombre: "iluminacion", id: "iluminacion" } 
    
    // Añadir más secciones según sea necesario
];

// Función de búsqueda
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const query = document.getElementById("search-input").value.toLowerCase();
    
    // Buscar en la lista de productos
    const resultadoProductos = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(query)
    );

    // Buscar en la lista de secciones
    const resultadoSecciones = secciones.filter(seccion => 
        seccion.nombre.toLowerCase().includes(query)
    );

    if (resultadoSecciones.length > 0) {
        // Si hay coincidencias en las secciones, desplazar a la sección
        document.getElementById(resultadoSecciones[0].id).scrollIntoView({ behavior: 'smooth' });
    } else if (resultadoProductos.length > 0) {
        // Si hay coincidencias en los productos, redirigir a la página del primer resultado
        window.location.href = resultadoProductos[0].url;
    } else {
        // Si no hay coincidencias, mostrar un mensaje
        alert("No se encontraron resultados para '" + query + "'");
    }
});

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const infoBox = document.querySelector('.info-box');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('visible'); // Alternar la clase 'visible'
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto

            // Aquí puedes cambiar el contenido del cuadro de información según el enlace seleccionado
            infoBox.style.display = 'block'; // Mostrar el cuadro de información

            // Opcional: Cambiar el contenido del cuadro de información según la categoría seleccionada
            const category = link.textContent;
            infoBox.innerHTML = `<h3>${category}</h3><p>Detalles sobre ${category}.</p>`;
        });
    });