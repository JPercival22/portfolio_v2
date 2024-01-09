// Import statements
import { addToggleListener } from './menuModule.mjs';
import { handleScroll as customNavigationHandleScroll } from "./navigationModule.mjs";
import { initFloatingLabels } from "./form-floating-labels.mjs";
import { createTabModule } from "./tabModule.mjs";
import { openLightbox } from './lightbox.mjs';

// Define function to add main functionality
function addMainFunctionality() {
  // Check if menuToggle exists before using it
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    addToggleListener(menuToggle);
  }

  customNavigationHandleScroll();
  initFloatingLabels();
  initializeTabModules();
  preloadWebpImage();
  initLightboxFunctionality(); // Check if this function is called
  handleDynamicImports();
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  addMainFunctionality();
});

// Function to initialize tab modules
function initializeTabModules() {
  const tabContainers = document.querySelectorAll('.tab-container');
  tabContainers.forEach((tabContainer) => {
    try {
      const tabButtons = tabContainer.querySelectorAll('.tab-buttons .tab-button');
      const tabContents = tabContainer.querySelectorAll('.tab-contents .tab-module');

      tabContainer.addEventListener('click', (event) => {
        const tabButton = event.target.closest('.tab-button');
        if (tabButton) {
          tabButtons.forEach((button, index) => {
            if (button === tabButton) {
              tabContents.forEach((tabContent, contentIndex) => {
                if (tabContent) {
                  tabContent.style.display = contentIndex === index ? 'block' : 'none';
                }
              });
              tabButtons.forEach((button) => {
                button.classList.remove('active');
              });
              tabButton.classList.add('active');
              sessionStorage.setItem('activeTabIndex', index);
            }
          });
        }
      });

      const activeTabIndex = sessionStorage.getItem('activeTabIndex');
      if (activeTabIndex !== null && activeTabIndex < tabContents.length) {
        tabContents.forEach((tabContent, index) => {
          tabContent.style.display = index == activeTabIndex ? 'block' : 'none';
        });
        tabButtons.forEach((button, index) => {
          button.classList.toggle('active', index == activeTabIndex);
        });
      } else {
        tabContents[0].style.display = 'block';
        tabButtons[0].classList.add('active');
        sessionStorage.setItem('activeTabIndex', 0);
      }
    } catch (error) {
      console.error('Error initializing tab modules:', error);
    }
  });
}


function initLightboxFunctionality() {
  const figures = document.querySelectorAll('.gallery[data-index]');

  figures.forEach((figure) => {
    const image = figure.querySelector('img');
    const lightboxIndex = figure.getAttribute('data-index');
    const lightbox = document.getElementById(`lightbox_${lightboxIndex}`);
    const figcaption = figure.querySelector('figcaption');

    // trigger lightbox, using image 
    if (image && lightbox) {
      image.addEventListener('click', () => {
        openLightbox(image.src, image.alt, lightbox);
      });

      // Trigger lightbox on figcaption click
      if (figcaption) {
        figcaption.addEventListener('click', () => {
          openLightbox(image.src, image.alt, lightbox);
        });
      }

      const closeBtn = lightbox.querySelector(`#close-btn_${lightboxIndex}`);
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          closeLightbox(lightbox);
        });
      }

      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target === image || event.target === closeBtn) {
          closeLightbox(lightbox);
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.style.display === 'block') {
          closeLightbox(lightbox);
        }
      });
    } else {
      console.error(`Image or Lightbox element not found for figure with data-index ${lightboxIndex}`);
    }
  });
}

function closeLightbox(lightbox) {
  lightbox.style.display = 'none';
  // Additional logic for hiding the lightbox
}
// Preload a webp image
const preloadWebpImage = () => {
  const image = new Image();
  image.src = '/assets/images/contact-page-bkg.webp';
};

// Handle dynamic imports
const handleDynamicImports = async () => {
  try {
    const allImages = document.querySelectorAll('img[data-responsive]');
    if (allImages.length > 0) {
      const { setResponsiveImages } = await import('./responsiveImageModule.mjs');
      setResponsiveImages();
    }

    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
      const { toggleSidebar } = await import('./sideBarModule.mjs');
      toggleSidebar();
    }

    const readMoreElement = document.querySelector('.read-more');
    if (readMoreElement) {
      const { initReadMore } = await import('./readMore.mjs');
      initReadMore();
    }
  } catch (error) {
    console.error('Error handling dynamic imports:', error);
  }
};