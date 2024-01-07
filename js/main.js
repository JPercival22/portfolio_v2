// Import statements
import { addToggleListener } from './menuModule.mjs'; // Import addToggleListener from menuModule
import { handleScroll as customNavigationHandleScroll } from "./navigationModule.mjs";
import { initFloatingLabels } from "./form-floating-labels.mjs";
import { createTabModule } from "./tabModule.mjs";

// Define menuToggle
const menuToggle = document.querySelector(".menu-toggle");

// Function to add main functionality
function addMainFunctionality() {
  addToggleListener(menuToggle); // Use addToggleListener to attach toggleMobileMenu to menuToggle
  customNavigationHandleScroll();
  initFloatingLabels();
  initializeTabModules();
  preloadWebpImage();
  initLightboxFunctionality();
  handleDynamicImports();
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  addMainFunctionality();
});

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

function openLightbox(imageSrc, imageAlt, lightbox) {
  lightbox.querySelector('img').src = imageSrc;
  lightbox.querySelector('img').alt = imageAlt;
  lightbox.style.display = 'block';
  // Additional logic for displaying/handling the lightbox
}

function closeLightbox(lightbox) {
  lightbox.style.display = 'none';
  // Additional logic for hiding the lightbox
}

function initLightboxFunctionality() {
  const tabContainers = document.querySelectorAll('.tab-container');

  tabContainers.forEach((tabContainer) => {
    const images = tabContainer.querySelectorAll('.gallery img');
    const lightbox = tabContainer.querySelector('.lightbox');
    
    images.forEach((image) => {
      image.addEventListener('click', () => {
        openLightbox(image.src, image.alt, lightbox);
      });
    });

    if (lightbox) {
      const closeBtn = lightbox.querySelector('.close-btn'); // Assuming there's a close button with the class 'close-btn'
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          closeLightbox(lightbox);
        });
      }

      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target === lightbox.querySelector('img') || event.target === closeBtn) {
          closeLightbox(lightbox);
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.style.display === 'block') {
          closeLightbox(lightbox);
        }
      });
    }
  });
}

initLightboxFunctionality();


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

// Call the main functionality
document.addEventListener('DOMContentLoaded', addMainFunctionality);
