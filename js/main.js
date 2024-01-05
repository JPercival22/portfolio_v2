import { addToggleListener, removeToggleListener } from './menuModule.mjs'
import { handleScroll as navigationHandleScroll } from './navigationModule.mjs' // Rename
import { initFloatingLabels } from './form-floating-labels.mjs'; // Changed import to only 
import { setResponsiveImages } from './responsiveImageModule.mjs'
import { handleScroll } from './navigationModule.mjs'

document.addEventListener('DOMContentLoaded', function () {
  addToggleListener()
  handleScroll()
  initFloatingLabels(); // Call the initFloatingLabels function

  // Function to toggle the menu
  function toggleMenu () {
    document.body.classList.toggle('mobile-menu-open')
  }
  // Example condition for importing and using responsive image module
  const imagesExist = document.querySelectorAll('.responsive-image').length > 0 // Assume all responsive images have a common class 'responsive-image'
  if (imagesExist) {
    import('./responsiveImageModule.mjs')
      .then(({ setResponsiveImages }) => {
        const imageData = [
          {
            elementId: 'ux-guitar',
            smallImagePath: '/assets/images/guitar-lessons-banner.webp',
            largeImagePath: '/assets/images/guitar-lessons-banner.webp'
          },
          {
            elementId: 'syn-banner',
            smallImagePath: '/assets/images/syn-banner.webp',
            largeImagePath: '/assets/images/syn-banner.webp'
          },
          {
            elementId: 'come-together-banner',
            smallImagePath: '/assets/images/Come-Together-Banner.webp',
            largeImagePath: '/assets/images/Come-Together-Banner.webp'
          }
          // Add more image data objects here
        ]

        setResponsiveImages(imageData)
      })
      .catch(error => {
        console.error(
          'An error occurred while importing the responsive image module:',
          error
        )
      })
  }

  // Example condition for importing and using the slider module
  if (document.getElementById('sidebar') !== null) {
    import('./sideBarModule.mjs')
      .then(module2 => {
        // Use module2 functionality here
        module2.toggleSidebar() // Assuming module2 exports a defaultExportedFunction
      })
      .catch(error => {
        console.error('An error occurred while importing module2:', error)
      })
  }
  // Add more condition checks and dynamic imports as needed for other modules
  if (document.querySelector('.read-more') !== null) {
    import('./readMore.mjs')
      .then(readMoreModule => {
        // Use readMoreModule functionality here
        readMoreModule.initReadMore()
      })
      .catch(error => {
        console.error(
          'An error occurred while importing readMoreModule:',
          error
        )
      })
  }
})
