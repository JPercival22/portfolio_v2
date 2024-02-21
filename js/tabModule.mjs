export function initializeTabModules() {
    const tabContainers = document.querySelectorAll('.tab-container');
    tabContainers.forEach((tabContainer) => {
        try {
            const tabButtons = tabContainer.querySelectorAll('.tab-buttons .tab-button');
            const tabContents = tabContainer.querySelectorAll('.tab-contents .tab-module');
  
            // Get active tab index from session storage or default to 0
            let activeTabIndex = parseInt(sessionStorage.getItem('activeTabIndex')) || 0;
  
            // Hide all tab contents except the active one
            tabContents.forEach((content, index) => {
                if (index !== activeTabIndex) {
                    content.style.display = 'none';
                }
            });
  
            // Add event listener to tab buttons
            tabButtons.forEach((tabButton, index) => {
                // Add click event listener to each tab button
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
  
                // Check if this tab is the active one
                if (index === activeTabIndex) {
                    tabButton.classList.add('active');
                }
            });
        } catch (error) {
            console.error('Error initializing tab modules:', error);
        }
    });
  }
  