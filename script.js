// Fuegos artificiales
/*document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
  
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.animationDelay = `${Math.random() * 3}s`;
      content.appendChild(firework);
    }
  });*/

  particlesJS.load('fireworks', 'assets/particles.json', function () {
    console.log('Fuegos artificiales cargados correctamente');
  });
  
  