// navigation.mjs
const navbar = document.getElementById('navBar');

function handleScroll() {
  function updateNavbarStyle() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Initial update on page load
  updateNavbarStyle();

  window.addEventListener('scroll', updateNavbarStyle);
}

export { handleScroll };
