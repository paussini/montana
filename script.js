// Fuegos artificiales
particlesJS.load('fireworks', 'assets/particles.json', function () {
    console.log('Fuegos artificiales cargados correctamente');
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  
  function navigateTo(section) {
    // Ocultar todas las secciones primero
    document.querySelectorAll('section').forEach((sec) => (sec.style.display = 'none'));
  
    // Mostrar la sección seleccionada
    if (section === 'Frases Célebres') {
      const frasesCelebres = document.getElementById('frases-celebres');
      frasesCelebres.style.display = 'block'; // Muestra "Frases Célebres"
    } else if (section === 'Galería de imágenes') {
      // Aquí agregarías otra sección
    } else if (section === 'Entradas') {
      // Aquí agregarías otra sección
    }
  
    // Cerrar el menú
    toggleMenu();
  }

  //GALERIA
  
  const gallery = document.querySelector('.gallery');
  const galleryContainer = document.querySelector('.gallery-container');
  const leftButton = document.querySelector('.nav-button.left');
  const rightButton = document.querySelector('.nav-button.right');
  
  let scrollAmount = 0;
  
  function updateGalleryWidth() {
    const totalItems = gallery.children.length; // Número total de elementos
    const visibleWidth = galleryContainer.offsetWidth; // Ancho visible de la galería
    const itemWidth = 220; // Ancho de cada ítem más el gap
    const totalWidth = totalItems * itemWidth; // Ancho total de la galería
  
    gallery.style.width = `${totalWidth}px`; // Ajusta el ancho de la galería
  
    // Muestra u oculta los botones de navegación según el desplazamiento
    leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';
    rightButton.style.display = scrollAmount < totalWidth - visibleWidth ? 'block' : 'none';
  }
  
  leftButton.addEventListener('click', () => {
    scrollAmount -= 220; // Ajusta según el ancho de cada ítem
    if (scrollAmount < 0) scrollAmount = 0;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    updateGalleryWidth();
  });
  
  rightButton.addEventListener('click', () => {
    scrollAmount += 220; // Ajusta según el ancho de cada ítem
    const maxScroll = gallery.scrollWidth - galleryContainer.offsetWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    updateGalleryWidth();
  });
  
  // Ajustar el ancho inicial y actualizar en caso de resize
  window.addEventListener('load', updateGalleryWidth);
  window.addEventListener('resize', updateGalleryWidth);
  
  
  function showFullscreen(imageSrc, captionText) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
  
    fullscreenImage.src = imageSrc;
    fullscreenCaption.textContent = captionText;
    fullscreenContainer.style.display = 'flex';
  }
  
  function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
  }
  