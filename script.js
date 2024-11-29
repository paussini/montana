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
    } else if (section === 'Merchandising') {
        document.getElementById('merchandising').style.display = 'block';
      // Aquí agregarías otra sección
    } else if (section === 'Entradas') {
      // Aquí agregarías otra sección
    }
  
    // Cerrar el menú
    toggleMenu();
  }

//   //FRASES
  
// Función para mostrar la imagen ampliada con la frase célebre
function showOverlay(imageSrc, captionText) {
    const overlay = document.getElementById('frases-overlay');
    const overlayImage = document.getElementById('frases-overlay-image');
    const overlayCaption = document.getElementById('frases-overlay-caption');

    // Configura la imagen y la frase
    overlayImage.src = imageSrc;
    overlayCaption.textContent = captionText;

    // Muestra el overlay
    overlay.style.display = 'flex';
}

// Función para cerrar el overlay
function closeOverlay() {
    const overlay = document.getElementById('frases-overlay');
    overlay.style.display = 'none';
}

// Añade eventos a las imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach((img) => {
    const fraseText = img.parentElement.getAttribute('data-frase');
    img.addEventListener('click', () => {
        showOverlay(img.src, fraseText);
    });
});


function closeFrasesCelebres() {
    const frasesCelebresSection = document.getElementById('frases-celebres');
    frasesCelebresSection.style.display = 'none';

    // Si tienes una página principal o menú inicial
    const mainMenu = document.querySelector('.menu');
    if (mainMenu) {
        mainMenu.style.display = 'block'; // Muestra el menú principal
    }
}

function closeMerchandising() {
    document.getElementById('merchandising').style.display = 'none';
}

function showMerchDetails(imageSrc, name, price) {
    const overlay = document.getElementById('merch-overlay');
    document.getElementById('merch-overlay-image').src = imageSrc;
    document.getElementById('merch-overlay-name').textContent = name;
    document.getElementById('merch-overlay-price').textContent = price;
    overlay.style.display = 'flex';
}

function closeMerchOverlay() {
    document.getElementById('merch-overlay').style.display = 'none';
}

