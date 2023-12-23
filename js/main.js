import { addToggleListener, removeToggleListener } from './menuModule.mjs';

// Function to toggle the menu
function toggleMenu() {
  document.body.classList.toggle("mobile-menu-open");
}

// Add event listener to toggle the menu on user interaction
addToggleListener();


// Example condition 1 for importing and using module1
if (window.innerWidth < 768) {
  import('./responsiveImageModule.mjs').then((module1) => {
    // Use module1 functionality here
    module1.setResponsiveImage(); // Assuming module1 exports a function named setResponsiveImage
  }).catch((error) => {
    console.error("An error occurred while importing module1:", error);
  });
}

// Example condition 2 for importing and using module2
if (document.getElementById('sidebar') !== null) {
  import('./sideBarModule.mjs').then((module2) => {
    // Use module2 functionality here
    module2.toggleSidebar(); // Assuming module2 exports a defaultExportedFunction
  }).catch((error) => {
    console.error("An error occurred while importing module2:", error);
  });
}
// Add more condition checks and dynamic imports as needed for other modules
if (document.querySelector('.read-more') !== null) {
  import('./readMore.mjs').then((readMoreModule) => {
    // Use readMoreModule functionality here
    readMoreModule.initReadMore();
  }).catch((error) => {
    console.error("An error occurred while importing readMoreModule:", error);
  });
}