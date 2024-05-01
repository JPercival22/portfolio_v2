export function initializeTabModules() {
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach((tabContainer) => {
        try {
            const tabButtons = tabContainer.querySelectorAll('.tab-buttons .tab-button');
            const tabContents = tabContainer.querySelectorAll('.tab-contents .tab-module');
  
            // Get active tab index from session storage or default to 0 (Tab1)
            let activeTabIndex = parseInt(sessionStorage.getItem('activeTabIndex')) || 0;
  
            // Ensure that the activeTabIndex is within the valid range
            if (activeTabIndex >= tabContents.length || activeTabIndex < 0) {
                activeTabIndex = 0; // Default to the first tab if the stored index is out of range
            }
  
            // Hide all tab contents except the active one
            tabContents.forEach((content, index) => {
                if (index !== activeTabIndex) {
                    content.style.display = 'none';
                }
            });

            // Show the active tab content and add active class to the button
            tabContents[activeTabIndex].style.display = 'flex';
            tabButtons[activeTabIndex].classList.add('active');
  
            // Add event listener to tab buttons
            tabButtons.forEach((tabButton, index) => {
                tabButton.addEventListener('click', () => {
                    // Hide all tab contents and remove active class from buttons
                    tabContents.forEach((content) => {
                        content.style.display = 'none';
                    });
                    tabButtons.forEach((button) => {
                        button.classList.remove('active');
                    });
  
                    // Display clicked tab content and set active class to button
                    tabContents[index].style.display = 'flex';
                    tabButton.classList.add('active');
  
                    // Store active tab index in session storage
                    sessionStorage.setItem('activeTabIndex', index);
                });
            });
        } catch (error) {
            console.error('Error initializing tab modules:', error);
        }
    });
}
