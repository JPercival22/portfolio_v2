export function toggleScrolledClass() {
  var scrollButton = document.getElementById("scrollButton");
  console.log("scrollButton:", scrollButton); // Add this line
  if (scrollButton && window.scrollY > 500) { // Adjust the pixel value as needed
    scrollButton.classList.add("scrolled");
  } else if (scrollButton) {
    scrollButton.classList.remove("scrolled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", toggleScrolledClass);

  // Call toggleScrolledClass once to initialize the class based on the initial scroll position
  toggleScrolledClass();
});
