import { addToggleListener } from "./menuModule.mjs";
import { handleScroll as customNavigationHandleScroll } from "./navigationModule.mjs";
import { initFloatingLabels } from "./form-floating-labels.mjs";
import { setResponsiveImages } from "./responsiveImageModule.mjs";
import { createTabModule } from "./tabModule.mjs"; // Import createTabModule from tabModule.mjs

const addMainFunctionality = () => {
  addToggleListener(); // Initiates menu toggle functionality
  customNavigationHandleScroll(); // Handles scroll behavior for navigation
  initFloatingLabels(); // Initializes floating labels for form inputs
  setResponsiveImages(); // Sets up responsive images
  handleDynamicImports(); // Dynamic imports for responsive image, sidebar, and read more modules
  initializeTabModules(); // Initialize tab modules
  preloadWebpImage(); // Preloads a webp image
};

// Function to toggle the menu
function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle"); // Select the menu toggle button
  const navMenu = document.getElementById("navMenu"); // Select the navigation menu

  const toggleMobileMenu = () => {
    navMenu.classList.toggle("show"); // Toggle the 'show' class on the navigation menu
  };

  menuToggle.addEventListener("click", toggleMobileMenu); // Attach the toggleMobileMenu function to the menu toggle button
}

function initializeTabModules() {
  const tabContainers = document.querySelectorAll('.tab-container');
  tabContainers.forEach(tabContainer => {
    const tabButtons = tabContainer.querySelectorAll('.tab-buttons .tab-button');
    const tabContents = tabContainer.querySelectorAll('.tab-contents .tab-module');

    tabButtons.forEach((tabButton, index) => {
      tabButton.addEventListener('click', () => {
        // Hide all tab contents
        tabContents.forEach(tabContent => {
          if (tabContent) {
            tabContent.style.display = 'none';
          }
        });

        // Display the clicked tab content if it exists
        if (tabContents[index]) {
          tabContents[index].style.display = 'block';
        }

        // Update active tab button
        tabButtons.forEach(button => {
          button.classList.remove('active');
        });
        tabButton.classList.add('active');

        // Store the active tab index in sessionStorage
        sessionStorage.setItem('activeTabIndex', index);
      });
    });

    // Retrieve the active tab index from sessionStorage upon page load
    const activeTabIndex = sessionStorage.getItem('activeTabIndex');
    if (activeTabIndex !== null && activeTabIndex < tabContents.length) {
      // Hide all tab contents
      tabContents.forEach(tabContent => {
        if (tabContent) {
          tabContent.style.display = 'none';
        }
      });
      // Display the tab content based on the retrieved active tab index, if it exists
      if (tabContents[activeTabIndex]) {
        tabContents[activeTabIndex].style.display = 'block';
      }
      // Update the active tab button
      tabButtons.forEach(button => {
        button.classList.remove('active');
      });
      if (tabButtons[activeTabIndex]) {
        tabButtons[activeTabIndex].classList.add('active');
      }
    } else {
      // If no valid activeTabIndex is found in sessionStorage, display the content of the first tab
      tabContents[0].style.display = 'block';
      tabButtons[0].classList.add('active');
      sessionStorage.setItem('activeTabIndex', 0);
    }
  });
}



// Function to preload webp image
const preloadWebpImage = () => {
  const image = new Image();
  image.src = '/assets/images/contact-page-bkg.webp';
};

// Function to handle dynamic imports
const handleDynamicImports = () => {
  try {
    const allImages = document.querySelectorAll('img[data-responsive]'); // Assuming data attribute indicates responsive images
    if (allImages.length > 0) {
      import('./responsiveImageModule.mjs')
        .then(({ setResponsiveImages }) => {
          setResponsiveImages();
        })
        .catch(error => {
          console.error('Error importing responsive image module:', error);
        });
    }

    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
      import('./sideBarModule.mjs')
        .then(module => {
          module.toggleSidebar(); // Assuming module exports a toggleSidebar function
        })
        .catch(error => {
          console.error('Error importing sidebar module:', error);
        });
    }

    const readMoreElement = document.querySelector('.read-more');
    if (readMoreElement) {
      import('./readMore.mjs')
        .then(readMoreModule => {
          readMoreModule.initReadMore();
        })
        .catch(error => {
          console.error('Error importing read more module:', error);
        });
    }
  } catch (error) {
    console.error('Error handling dynamic imports:', error);
  }
};

// Additional helper functions or code can be placed below
document.addEventListener('DOMContentLoaded', () => {
  toggleMenu(); // Call the function to handle the menu toggle
  addMainFunctionality(); // Call the composite function on DOM ready
  initializeTabModules(); // Initialize tab modules after the DOM is fully loaded
});