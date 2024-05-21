// lazyLoad.mjs

export function lazyLoadImages() {
    document.addEventListener('DOMContentLoaded', () => {
      const lazyImages = document.querySelectorAll('img.lazyload');
      
      if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('lazyload');
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });
  
        lazyImages.forEach((lazyImage) => {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Fallback for browsers that do not support IntersectionObserver
        lazyImages.forEach((lazyImage) => {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazyload');
        });
      }
    });
  }
  