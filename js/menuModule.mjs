const menuToggle = document.querySelector(".menu-toggle");

function toggleMobileMenu() {
  document.body.classList.toggle("mobile-menu-open"); // Assuming you want to modify the body class
}

menuToggle.addEventListener("click", toggleMobileMenu);

export { toggleMobileMenu };
