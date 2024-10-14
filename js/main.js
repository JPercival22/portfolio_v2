import { initCarousel } from './carousel.mjs';
import { handleScroll } from './scrollHighlight.mjs'; // Import the scroll highlighting functionality

// Define function to add main functionality
async function addMainFunctionality() {
  try {
    // Select the open and close sidebar buttons
    const openSidebarBtn = document.querySelector('.open-sidebar-btn');
    const closeSidebarBtn = document.querySelector('.close-btn');

    // Add event listener for opening the sidebar
    if (openSidebarBtn) {
      openSidebarBtn.addEventListener('click', async () => {
        try {
          const { toggleSidebar } = await import('./sideBarModule.mjs');
          toggleSidebar();
        } catch (error) {
          console.error('Failed to load sidebar module:', error);
        }
      });
    }

    // Add event listener for closing the sidebar
    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener('click', async () => {
        try {
          const { toggleSidebar } = await import('./sideBarModule.mjs');
          toggleSidebar();
        } catch (error) {
          console.error('Failed to load sidebar module:', error);
        }
      });
    }

    // Select the menu toggle button and add toggle listener
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const { addToggleListener } = await import('./menuModule.mjs');
      addToggleListener(menuToggle);
    }

    // Call the handleScroll function from scrollHighlights.mjs
    handleScroll(); // Call this function here

    // Dynamically import and call read-more feature function
    const { initReadMore } = await import('./readMore.mjs');
    initReadMore();

    // Dynamically import and call initializeTabModules function
    const { initializeTabModules } = await import('./tabModule.mjs');
    initializeTabModules();

    // Dynamically import and call initLightboxFunctionality function
    const { initLightboxFunctionality } = await import('./lightboxModule.mjs');
    initLightboxFunctionality();

    // Dynamically import and call closeSidebarOnLinkClick function
    const { closeSidebarOnLinkClick } = await import('./sideBarModule.mjs');
    closeSidebarOnLinkClick();

    // Call toggleScrolledClass to initiate scrolling behavior for back-to-top button
    const { toggleScrolledClass } = await import('./scrollButton.mjs');
    toggleScrolledClass();

    // Call form dynamic fields functionality
    const { initializeFormFunctionality } = await import('./formModule.mjs');
    initializeFormFunctionality();

    // Dynamically import and call initializeAccordion function
    const { initAccordion } = await import('./accordion.mjs');
    initAccordion();

    // Call initCarousel function with appropriate parameters
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach((carousel, index) => {
      const carouselId = carousel.dataset.carousel;
      const carouselTrackId = `carouselTrack_${index}`;
      const prevButtonId = `prevButton_${index}`;
      const nextButtonId = `nextButton_${index}`;
      const paginationId = `pagination_${index}`;
      initCarousel(carouselId, carouselTrackId, prevButtonId, nextButtonId, paginationId);
    });
  } catch (error) {
    console.error('Error adding main functionality:', error);
  }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Set up lazy load background images
    const { setupLazyLoading } = await import('./lazyLoad.mjs');
    setupLazyLoading();

    // Call addMainFunctionality to add main functionality
    await addMainFunctionality();
  } catch (error) {
    console.error('Error on DOMContentLoaded:', error);
  }
});
