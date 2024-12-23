const navbars = document.querySelectorAll('.navbar');

function navScroll() {
  function updateNavbarStyle() {
    navbars.forEach(navbar => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Initial update on page load
  updateNavbarStyle();

  window.addEventListener('scroll', updateNavbarStyle);
}

export { navScroll };
