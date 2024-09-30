const logo = document.getElementById('logo');
const clickSound = document.getElementById('click-sound');

logo.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se navegue antes de reproducir el sonido
    clickSound.currentTime = 0; // Reinicia el sonido
    clickSound.play().catch(error => {
        console.log('No se pudo reproducir el sonido:', error);
    });
    
    // Navega a la página después de un pequeño retraso
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500); // Ajusta el tiempo según sea necesario
});
