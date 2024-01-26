// Import statements
import { addToggleListener } from './menuModule.mjs';
import { handleScroll as customNavigationHandleScroll } from "./navigationModule.mjs";
import { initFloatingLabels } from "./form-floating-labels.mjs";
import { createTabModule } from "./tabModule.mjs";
import { initLightboxFunctionality, openLightbox, closeLightbox } from './lightboxModule.mjs';
import { initCarousel } from './carousel.mjs';
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
  initLightboxFunctionality();
  initCarousels(); // Add initialization for carousels
  handleDynamicImports();
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  addMainFunctionality();
  initLightboxFunctionality();
  document.addEventListener('click', (event) => {
    const closeBtn = event.target.closest('.lightbox [data-action="close-lightbox"]');
    if (closeBtn) {
      const lightbox = closeBtn.closest('.lightbox');
      if (lightbox) {
        lightbox.style.display = 'none';
      }
    }
  });

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

// Function to initialize carousels
function initCarousels() {
  const carouselContainers = document.querySelectorAll('.carousel-container');
  carouselContainers.forEach((carouselContainer, index) => {
    const trackId = `carouselTrack_${index}`;
    const prevButtonId = `prevButton_${index}`;
    const nextButtonId = `nextButton_${index}`;
    const paginationId = `pagination_${index}`;

    initCarousel(carouselContainer.id, trackId, prevButtonId, nextButtonId, paginationId);
  });
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