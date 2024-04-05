// Define function to add main functionality
async function addMainFunctionality() {
  try {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const { addToggleListener } = await import('./menuModule.mjs');
      addToggleListener(menuToggle);
    }

    const { handleScroll } = await import('./navigationModule.mjs');
    handleScroll();

    const { initFloatingLabels } = await import("./form-floating-labels.mjs");
    initFloatingLabels();

    const { initializeTabModules } = await import('./tabModule.mjs');
    initializeTabModules();

    const { initLightboxFunctionality } = await import('./lightboxModule.mjs');
    initLightboxFunctionality();

    const { closeSidebarOnLinkClick } = await import('./sideBarModule.mjs');
    closeSidebarOnLinkClick(); // Call closeSidebarOnLinkClick after adding main functionality

    handleDynamicImports();
  } catch (error) {
    console.error('Error adding main functionality:', error);
  }
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', async () => {
  const openSidebarBtn = document.querySelector('.open-sidebar-btn');
  const closeSidebarBtn = document.querySelector('.close-btn');

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

  await addMainFunctionality(); // Wait for main functionality to be added before calling other functions
});

// Handle dynamic imports
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
