import { addToggleListener } from './menuModule.mjs';
import { initFloatingLabels } from './form-floating-labels.mjs';
import { setResponsiveImages } from './responsiveImageModule.mjs';
import { initializeNavbarScrollEffect } from './NavigationModule.mjs';
import { initTabs, openFirstTabByDefault } from './tabModule.mjs';

document.addEventListener('DOMContentLoaded', function () {
  // Add toggle listener
  addToggleListener();

  const tabLinks = Array.from(document.querySelectorAll('.tab-link'));
  const tabContents = Array.from(document.querySelectorAll('.tab-content'));

  initTabs(tabLinks, tabContents);
  openFirstTabByDefault(tabLinks, tabContents);
  /* Re-initialize functionality after DOM has loaded */
  initializeNavbarScrollEffect();
  addToggleListener();
  initFloatingLabels();

  // Preload functionality for images
  var image = new Image();
  image.src = '/assets/images/contact-page-bkg.webp';

  // Toggle menu function
  function toggleMenu() {
    document.body.classList.toggle('mobile-menu-open');
  }

  // Example condition for importing and using responsive image module
  const imagesExist = document.querySelectorAll('.responsive-image').length > 0;
  if (imagesExist) {
    const imageData = [
      {
        elementId: 'ux-guitar',
        smallImagePath: '/assets/images/guitar-lessons-banner.webp',
        largeImagePath: '/assets/images/guitar-lessons-banner.webp'
      },
      {
        elementId: 'syn-banner',
        smallImagePath: '/assets/images/syn-banner.webp',
        largeImagePath: '/assets/images/syn-banner.webp'
      },
      {
        elementId: 'come-together-banner',
        smallImagePath: '/assets/images/Come-Together-Banner.webp',
        largeImagePath: '/assets/images/Come-Together-Banner.webp'
      }
      // Add more image data objects here
    ];

    setResponsiveImages(imageData);
  }

  // Dynamic import for other modules as needed
  if (document.getElementById('sidebar') !== null) {
    import('./sideBarModule.mjs')
      .then(module2 => {
        module2.toggleSidebar(); // Assuming module2 exports a defaultExportedFunction
      })
      .catch(error => {
        console.error('An error occurred while importing module2:', error);
      });
  }

  // Dynamic import for readMore module
  if (document.querySelector('.read-more') !== null) {
    import('./readMore.mjs')
      .then(readMoreModule => {
        readMoreModule.initReadMore();
      })
      .catch(error => {
        console.error('An error occurred while importing readMoreModule:', error);
      });
  }
});
