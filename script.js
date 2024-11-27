// Fuegos artificiales
  particlesJS.load('fireworks', 'assets/particles.json', function () {
    console.log('Fuegos artificiales cargados correctamente');
  });

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }

  function navigateTo(section) {
    const content = document.getElementById('content');
    content.style.display = 'block';

    if (section === 'Frases Célebres') {
        //showFrases();
    } else if (section === 'Entradas') {
        //showEntradas();
    } else if (section === 'Galería de Imágenes') {
        //showGallery();
    }
}

  function closeFullscreen() {
    // Eliminar el contenedor de pantalla completa
    const fullscreenContainer = document.querySelector('.fullscreen');
    if (fullscreenContainer) {
        fullscreenContainer.remove();
    }
}
  
  