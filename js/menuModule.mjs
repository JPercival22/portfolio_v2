function toggleMobileMenu(event) {
  const menuToggle = event.target;
  const navMenu = menuToggle.closest('nav').querySelector('.nav-menu');
  navMenu.classList.toggle('show');
}

function addToggleListener(menuToggle) {
  menuToggle.addEventListener('click', toggleMobileMenu);
}

function removeToggleListener(menuToggle) {
  menuToggle.removeEventListener('click', toggleMobileMenu);
}

export { addToggleListener, removeToggleListener };
