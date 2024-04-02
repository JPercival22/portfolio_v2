// navigation.mjs
const navbar = document.getElementById('navbar');
const logoContainer = document.querySelector('.logo-container');

function handleScroll() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      if (logoContainer) {
        logoContainer.style.opacity = 1;
      }
    } else {
      navbar.classList.remove('scrolled');
      if (logoContainer) {
        logoContainer.style.opacity = 0;
      }
    }
  });
}

export { handleScroll };
