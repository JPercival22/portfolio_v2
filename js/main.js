import { initCarousel } from './carousel.mjs';
import { setupLazyLoading } from './lazyLoad.mjs';
import { insertSidebar } from './sideBarModule.mjs';
import "./mainNavShadow.mjs";

console.log("Calling lazy loading setup...");
setupLazyLoading(); // Setup lazy loading

async function addMainFunctionality() {
 try {
        // Select open/close buttons
        const openSidebarBtn = document.querySelector('.open-sidebar-btn');
        const closeSidebarBtn = document.querySelector('.close-btn');

        if (openSidebarBtn) {
            openSidebarBtn.addEventListener('click', async () => {
                const { toggleSidebar } = await import('./sideBarModule.mjs');
                toggleSidebar();
            });
        }

        if (closeSidebarBtn) {
            closeSidebarBtn.addEventListener('click', async () => {
                const { toggleSidebar } = await import('./sideBarModule.mjs');
                toggleSidebar();
            });
        }

        // Call the function to insert sidebars
        insertSidebar(); 

        // Other initializations (omitted for brevity)


    // Select menu toggle button and add listener
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const { addToggleListener } = await import('./menuModule.mjs');
      addToggleListener(menuToggle);
    }

    // Dynamically import other modules
    const { initReadMore } = await import('./readMore.mjs');
    initReadMore();
    const { scrollHighlight } = await import('./scrollHighlight.mjs');
    scrollHighlight();
    const { initializeTabModules } = await import('./tabModule.mjs');
    initializeTabModules();
    const { initLightboxFunctionality } = await import('./lightboxModule.mjs');
    initLightboxFunctionality();
    
    // Import sidebar functions dynamically
    const { closeSidebarOnLinkClick } = await import('./sideBarModule.mjs');
    closeSidebarOnLinkClick(); // Call closeSidebarOnLinkClick after the import resolves

    const { toggleScrolledClass } = await import('./scrollButton.mjs');
    toggleScrolledClass();

    const { initializeFormFunctionality } = await import('./formModule.mjs');
    initializeFormFunctionality();

    const { initAccordion } = await import('./accordion.mjs');
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
