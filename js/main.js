import { initCarousel } from './carousel.min.mjs';
import { setupLazyLoading } from './lazyLoad.min.mjs';
import "./mainNavShadow.min.mjs";

console.log("Calling lazy loading setup...");
setupLazyLoading(); // Setup lazy loading

async function addMainFunctionality() {
  try {
    // Select open/close buttons
    const openSidebarBtn = document.querySelector('.open-sidebar-btn');
    const closeSidebarBtn = document.querySelector('.close-btn');

    if (openSidebarBtn) {
      openSidebarBtn.addEventListener('click', async () => {
        const { toggleSidebar } = await import('./sideBarModule.min.mjs');
        toggleSidebar();
      });
    }

    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener('click', async () => {
        const { toggleSidebar } = await import('./sideBarModule.min.mjs');
        toggleSidebar();
      });
    }

    // Select menu toggle button and add listener
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const { addToggleListener } = await import('./menuModule.min.mjs');
      addToggleListener(menuToggle);
    }
    // Call other dynamic imports
    const { initReadMore } = await import('./readMore.min.mjs');
    initReadMore();
    // Call other dynamic imports
    const { scrollHighlight } = await import('./scrollHighlight.min.mjs');
    scrollHighlight();

    const { initializeTabModules } = await import('./tabModule.min.mjs');
    initializeTabModules();

    const { initLightboxFunctionality } = await import('./lightboxModule.min.mjs');
    initLightboxFunctionality();

    const { closeSidebarOnLinkClick } = await import('./sideBarModule.min.mjs');
    closeSidebarOnLinkClick();

    const { toggleScrolledClass } = await import('./scrollButton.min.mjs');
    toggleScrolledClass();

    const { initializeFormFunctionality } = await import('./formModule.min.mjs');
    initializeFormFunctionality();

    const { initAccordion } = await import('./accordion.min.mjs');
    initAccordion();

    // Initialize carousels
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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log("DOM fully loaded. Initialising scripts...");
    setupLazyLoading();
   
    console.log('Main functionality initialised.');
    await addMainFunctionality();
    console.log("Main functionality initialised.");
  } catch (error) {
    console.error('Error on DOMContentLoaded:', error);
  }
});
