export function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  console.log('Accordion items:', accordionItems);  // Debugging line

  accordionItems.forEach(function(item, index) {
    // Add click event listener to each header
    const header = item.querySelector('.accordion-header');
    console.log('Header for item', index, header); // Debugging line

    header.addEventListener('click', function() {
      // Toggle active class on clicked item
      console.log('Item clicked:', item);  // Debugging line

      // Only toggle the clicked item's visibility, keeping other items closed
      if (!item.classList.contains('active')) {
        item.classList.add('active'); // Open the clicked item
      } else {
        item.classList.remove('active'); // Close the clicked item
      }

      // Hide content of other items (if the clicked item is active, remove from others)
      accordionItems.forEach(function(otherItem, otherIndex) {
        if (otherIndex !== index) {
          otherItem.classList.remove('active'); // Close other items
        }
      });
    });

    // Set the first item as active by default
    if (index === 0) {
      item.classList.add('active');
    }
  });
}
