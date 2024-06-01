// lazyLoad.js
export function setupLazyLoading() {
  document.addEventListener('lazybeforeunveil', function(e) {
      var target = e.target;
      var isMobile = window.matchMedia("(max-width: 767px)").matches;
      var bg = isMobile ? target.getAttribute('data-bg-mobile') : target.getAttribute('data-bg-desktop');
      if (bg) {
          target.style.backgroundImage = 'url(' + bg + ')';
      }
  });

  // Optional: Update background image on resize
  window.addEventListener('resize', function() {
      var elements = document.querySelectorAll('.lazyload');
      elements.forEach(function(element) {
          if (!element.classList.contains('lazyloaded')) {
              return;
          }
          var isMobile = window.matchMedia("(max-width: 767px)").matches;
          var bg = isMobile ? element.getAttribute('data-bg-mobile') : element.getAttribute('data-bg-desktop');
          if (bg) {
              element.style.backgroundImage = 'url(' + bg + ')';
          }
      });
  });
}
