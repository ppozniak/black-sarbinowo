const menuToggler = document.querySelector('.site-nav-toggle');
const hamburger = document.querySelector('.hamburger');
const menuButtons = document.querySelectorAll('.site-nav__link');
const overlay = document.querySelector('.overlay');

new SmoothScroll('a[href^="#"]', { offset: 65 });

menuToggler.addEventListener('click', (event) => {
  toggleMenu();
});

overlay.addEventListener('click', (event) => {
  toggleMenu();
});

menuButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    toggleMenu()
  })
});

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  document.body.classList.toggle('site-nav--open');
}

baguetteBox.run('.gallery');
