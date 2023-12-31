// navigation.mjs
const navbar = document.getElementById('navbar');

function handleScroll() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

export { handleScroll };
