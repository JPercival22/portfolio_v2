import { toggleSidebar, closeSidebarOnLinkClick } from './sideBarModule.mjs'; // Import the toggleSidebar and closeSidebarOnLinkClick functions from sideBarModule
import { addToggleListener } from './menuModule.mjs';
import { handleScroll as customNavigationHandleScroll } from "./navigationModule.mjs";
import { initFloatingLabels } from "./form-floating-labels.mjs";
import { initializeTabModules } from './tabModule.mjs';
import { initLightboxFunctionality } from './lightboxModule.mjs';
import { initCarousel } from './carousel.mjs';
import './accordion.mjs';

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
  // preloadWebpImage();
  initLightboxFunctionality();
  initCarousels(); // Add initialization for carousels
  handleDynamicImports();
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const openSidebarBtn = document.querySelector('.open-sidebar-btn');
    const closeSidebarBtn = document.querySelector('.close-btn');

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', toggleSidebar); // Add event listener to open button
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', toggleSidebar); // Add event listener to close button
    }

    closeSidebarOnLinkClick(); // Call closeSidebarOnLinkClick to add event listener to links in the sidebar

    addMainFunctionality();
});

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
// const preloadWebpImage = () => {
//   const image = new Image();
//   image.src = '/assets/images/contact-page-bkg.webp';
// };

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
