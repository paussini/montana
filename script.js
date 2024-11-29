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
        const frasesCelebresSection = document.getElementById('frases-celebres');
        frasesCelebresSection.style.display = 'block';
    } else if (section === 'Merchandising') {
        document.getElementById('merchandising').style.display = 'block';
    } else if (section === 'Redes Sociales') {
        // Aquí agregarías otra sección
        document.getElementById('redes-sociales').style.display = 'block';
    }

    // Cerrar el menú
    toggleMenu();
}

// -------------------------
// Funciones para Frases Célebres
// -------------------------

// Función para mostrar el overlay con la imagen y la frase célebre
function showFrasesOverlay(imageSrc, fraseText) {
    const overlay = document.getElementById('frases-overlay');
    const overlayImage = document.getElementById('frases-overlay-image');
    const overlayCaption = document.getElementById('frases-overlay-caption');

    // Configura la imagen y el texto
    overlayImage.src = imageSrc;
    overlayCaption.textContent = fraseText;

    // Muestra el overlay
    overlay.style.display = 'flex';
}

// Función para cerrar el overlay de Frases Célebres
function closeFrasesOverlay() {
    const overlay = document.getElementById('frases-overlay');
    overlay.style.display = 'none';
}

// Añade eventos a las imágenes de la galería en Frases Célebres
const frasesGalleryItems = document.querySelectorAll('.gallery-item img');
frasesGalleryItems.forEach((img) => {
    const fraseText = img.parentElement.getAttribute('data-frase');
    img.addEventListener('click', () => {
        showFrasesOverlay(img.src, fraseText);
    });
});

// Función para cerrar la sección completa de Frases Célebres
function closeFrasesCelebres() {
    const frasesCelebresSection = document.getElementById('frases-celebres');
    frasesCelebresSection.style.display = 'none';

    // Si tienes una página principal o menú inicial
    const mainMenu = document.querySelector('.menu');
    if (mainMenu) {
        mainMenu.style.display = 'block'; // Muestra el menú principal
    }
}

// -------------------------
// Funciones para Merchandising
// -------------------------

// Función para mostrar el overlay con detalles de Merchandising
function showMerchDetails(imageSrc, name, price) {
    const overlay = document.getElementById('merch-overlay');
    const overlayImage = document.getElementById('merch-overlay-image');
    const overlayName = document.getElementById('merch-overlay-name');
    const overlayPrice = document.getElementById('merch-overlay-price');

    // Configura los detalles del producto
    overlayImage.src = imageSrc;
    overlayName.textContent = name;
    overlayPrice.textContent = price;

    // Muestra el overlay
    overlay.style.display = 'flex';
}

// Función para cerrar el overlay de Merchandising
function closeMerchOverlay() {
    const overlay = document.getElementById('merch-overlay');
    overlay.style.display = 'none';
}

// Función para cerrar la sección completa de Merchandising
function closeMerchandising() {
    const merchandisingSection = document.getElementById('merchandising');
    merchandisingSection.style.display = 'none';
}

//Redes sociales
function closeRedesSociales() {
    document.getElementById('redes-sociales').style.display = 'none';
}