// script.js
const animatedLogo = document.querySelector('.animated-logo');

// Wacht tot de pagina volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
  // Wacht 3 seconden voordat de navigatie naar de andere pagina wordt gestart
  setTimeout(function() {
    animateComplete();
  }, 3000);
});

function animateComplete() {
  location.href = 'index.html'; // Naar pagina2.html
}