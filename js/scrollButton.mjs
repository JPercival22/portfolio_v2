export function toggleScrolledClass() {
    var scrollButton = document.getElementById("scrollButton");
    if (window.scrollY > 500) { // Adjust the pixel value as needed
      scrollButton.classList.add("scrolled");
    } else {
      scrollButton.classList.remove("scrolled");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", toggleScrolledClass);
  });
  