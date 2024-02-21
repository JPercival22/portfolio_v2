export function initializeTabModules() {
  const tabContainers = document.querySelectorAll('.tab-container');
  tabContainers.forEach((tabContainer) => {
      try {
          const tabButtons = tabContainer.querySelectorAll('.tab-buttons .tab-button');

          tabButtons.forEach((tabButton, index) => {
              const title = tabButton.textContent.trim();
              const tabContents = tabContainer.querySelectorAll('.tab-contents .tab-module');

              // Check if the index exists
              if (index < tabContents.length) {
                  const tabContent = tabContents[index];
                  const content = tabContent.innerHTML.trim();

                  // Add event listener to tab button
                  tabButton.addEventListener('click', () => {
                      // Hide all tab contents and remove active class from buttons
                      tabContents.forEach((content) => {
                          content.style.display = 'none';
                      });
                      tabButtons.forEach((button) => {
                          button.classList.remove('active');
                      });

                      // Display clicked tab content and set active class to button
                      tabContent.style.display = 'flex';
                      tabButton.classList.add('active');

                      // Store active tab index in session storage
                      sessionStorage.setItem('activeTabIndex', index);
                  });

                  // Check if tab is active
                  const activeTabIndex = sessionStorage.getItem('activeTabIndex');
                  if (activeTabIndex && parseInt(activeTabIndex) === index) {
                      tabContent.style.display = 'flex';
                      tabButton.classList.add('active');
                  }
              }
          });
      } catch (error) {
          console.error('Error initializing tab modules:', error);
      }
  });
}
