function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

function addToggleListener(menuToggle) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

function removeToggleListener(menuToggle) {
  menuToggle.removeEventListener("click", toggleMobileMenu);
}

export { addToggleListener, removeToggleListener };