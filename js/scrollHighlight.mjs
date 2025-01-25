
// Define the colorMap with the section's data-color names and their corresponding colours
  const colorMap = {
    brief_border: '#b2abff',
    research_border: '#ff9494',
    IA_border: '#7aafff',
    Inter_border: '#ffe079',
    LoFi_border: '#9efbe6',
    desSystem_border: '#c5ffff',
    HiFi_border: '#86ffb8',
    uxTest_border: '#21b1c9',
    results_border: '#ffe7b0',
    conclusion_border: '#c6ffc6',
  };

export function scrollHighlight() {
  const sections = document.querySelectorAll('section'); // All sections
  const sidebarItems = document.querySelectorAll('.side-bar-list-item'); // Sidebar links
  
  // Function to highlight the sidebar item based on the section's data-color
  const highlightSidebarItem = (sectionId, color) => {
    sidebarItems.forEach(item => {
      const link = item.querySelector('a');
      const targetId = link.getAttribute('href').substring(1); // Get the target section's id
      
      if (targetId === sectionId) {
        item.style.backgroundColor = color; // Set the background colour to match the section's data-color
      } else {
        item.style.backgroundColor = ''; // Reset for other items
      }
    });
  };

  const handleScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Check if the section is in the viewport
      if (scrollPosition >= sectionTop && window.scrollY <= sectionBottom) {
        const sectionId = section.getAttribute('id');
        const sectionColorName = section.getAttribute('data-color'); // Get the section's data-color value
        const sectionColor = colorMap[sectionColorName]; // Get the corresponding colour from the colorMap
        
        if (sectionColor) {
          highlightSidebarItem(sectionId, sectionColor);
        }
      }
    });
  };

  // Listen to scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Initial check on page load
  handleScroll();
}
