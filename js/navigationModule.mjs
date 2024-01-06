// NavigationModule.mjs
export function initializeNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolling down
    } else {
      navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when scrolling up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
}
