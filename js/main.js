import { addToggleListener, removeToggleListener } from './menuModule.mjs'
import { setResponsiveImages } from './responsiveImageModule.mjs';

// Function to toggle the menu
function toggleMenu () {
  document.body.classList.toggle('mobile-menu-open')
}

// Add event listener to toggle the menu on user interaction
addToggleListener()

// Example condition 1 for importing and using responsive image module
if (window.innerWidth < 768) {
  import('./responsiveImageModule.mjs')
    .then(({ setResponsiveImages }) => {
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
    })
    .catch(error => {
      console.error('An error occurred while importing module:', error);
    });
}


// Example condition 2 for importing and using slider module
if (document.getElementById('sidebar') !== null) {
  import('./sideBarModule.mjs')
    .then(module2 => {
      // Use module2 functionality here
      module2.toggleSidebar() // Assuming module2 exports a defaultExportedFunction
    })
    .catch(error => {
      console.error('An error occurred while importing module2:', error)
    })
}
// Add more condition checks and dynamic imports as needed for other modules
if (document.querySelector('.read-more') !== null) {
  import('./readMore.mjs')
    .then(readMoreModule => {
      // Use readMoreModule functionality here
      readMoreModule.initReadMore()
    })
    .catch(error => {
      console.error('An error occurred while importing readMoreModule:', error)
    })
}
