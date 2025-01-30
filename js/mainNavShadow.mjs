(() => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
})();
