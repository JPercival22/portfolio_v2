export function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(function(item, index) {
    // Add click event listener to each header
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', function() {
      // Toggle active class on clicked item
      item.classList.toggle('active');
      
      // Hide content of other items
      accordionItems.forEach(function(otherItem, otherIndex) {
        if (otherIndex !== index) {
          otherItem.classList.remove('active');
        }
      });
    });
    
    // Set the first item as active by default
    if (index === 0) {
      item.classList.add('active');
    }
  });
}
