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
    const itemWidth = galleryContainer.offsetWidth / 5; // Ajusta el ancho dinámico de los ítems según la pantalla
    const totalItems = gallery.children.length;
    const totalWidth = totalItems * itemWidth;
  
    gallery.style.width = `${totalWidth}px`; // Ajusta la galería al tamaño total
  
    // Actualiza los botones de navegación
    leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';
    rightButton.style.display =
      scrollAmount < totalWidth - galleryContainer.offsetWidth ? 'block' : 'none';
  }
  
  leftButton.addEventListener('click', () => {
    const itemWidth = galleryContainer.offsetWidth / 5;
    scrollAmount -= itemWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    updateGalleryWidth();
  });
  
  rightButton.addEventListener('click', () => {
    const itemWidth = galleryContainer.offsetWidth / 5;
    scrollAmount += itemWidth;
    const maxScroll = gallery.scrollWidth - galleryContainer.offsetWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    updateGalleryWidth();
  });
  
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
  
  // Selecciona el contenedor de la sección Frases Célebres
// const frasesCelebresSection = document.getElementById('frases-celebres');

// // Selecciona todas las imágenes dentro de la galería
// const galeriaImages = document.querySelectorAll('#frases-celebres .galeria img');

// // Añade un evento de clic a cada imagen
// galeriaImages.forEach((img) => {
//     img.addEventListener('click', () => {
//         // Obtén la ruta de la imagen para el fondo desde el atributo data-background
//         const backgroundImage = img.getAttribute('data-background');
        
//         // Cambia el fondo de la sección Frases Célebres
//         frasesCelebresSection.style.backgroundImage = `url(${backgroundImage})`;
//     });
// });
