// Import the toggleScrolledClass function from scrollButton.mjs
import { toggleScrolledClass } from './scrollButton.mjs';
import { initializeFormFunctionality } from './formModule.mjs';

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
          // Dynamically import toggleSidebar function from sideBarModule.mjs
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
          // Dynamically import toggleSidebar function from sideBarModule.mjs
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

    // Dynamically import and call handleScroll function
    const { handleScroll } = await import('./navigationModule.mjs');
    handleScroll();

    // Dynamically import and call initializeTabModules function
    const { initializeTabModules } = await import('./tabModule.mjs');
    initializeTabModules();

    // Dynamically import and call initLightboxFunctionality function
    const { initLightboxFunctionality } = await import('./lightboxModule.mjs');
    initLightboxFunctionality();

    // Dynamically import and call closeSidebarOnLinkClick function
    const { closeSidebarOnLinkClick } = await import('./sideBarModule.mjs');
    closeSidebarOnLinkClick(); // Call closeSidebarOnLinkClick after adding main functionality

    // Call toggleScrolledClass to initiate scrolling behavior for back-to-top button
    toggleScrolledClass();
    initializeFormFunctionality();
    // Call handleDynamicImports function
    handleDynamicImports();

  } catch (error) {
    console.error('Error adding main functionality:', error);
  }
}

// Define function to handle dynamic imports
const handleDynamicImports = async () => {
  try {
    // Check if elements that require dynamic imports exist before importing and executing
    const allImages = document.querySelectorAll('img[data-responsive]');
    if (allImages.length > 0) {
      const { setResponsiveImages } = await import('./responsiveImageModule.mjs');
      setResponsiveImages();
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

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Call addMainFunctionality to add main functionality
    await addMainFunctionality();

  } catch (error) {
    console.error('Error on DOMContentLoaded:', error);
  }
});
