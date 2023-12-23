const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("navMenu");

function toggleMobileMenu() {
  navMenu.classList.toggle("show");
}

function addToggleListener() {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

function removeToggleListener() {
  menuToggle.removeEventListener("click", toggleMobileMenu);
}

export { addToggleListener, removeToggleListener };
