// Function to initialize a carousel
export function initCarousel(containerId, trackId, prevButtonId, nextButtonId, paginationId) {
    const container = document.getElementById(containerId);
    const track = document.getElementById(trackId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);
    const pagination = document.getElementById(paginationId);
  
    if (!container || !track || !prevButton || !nextButton) {
      console.error('Error: Carousel elements not found.');
      return;
    }
  
    // Get all slides in the carousel
    const slides = track.children;
  
    // Set the initial position of the carousel
    let index = 0;
  
    // Add event listener for the previous button
    prevButton.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  
    // Add event listener for the next button
    nextButton.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });
  
    // Function to update the carousel based on the current index
    function updateCarousel() {
      // Move the track to show the current slide
      const offset = -index * 100 + '%';
      track.style.transform = 'translateX(' + offset + ')';
  
      // Update pagination if available
      if (pagination) {
        updatePagination();
      }
    }
  
    // Function to update pagination dots
    function updatePagination() {
      // Check if pagination exists before updating
      if (!pagination || !pagination.children || pagination.children.length === 0) {
        return;
      }
  
      // Remove active class from all pagination dots
      for (let dot of pagination.children) {
        dot.classList.remove('active');
      }
  
      // Add active class to the current pagination dot
      pagination.children[index].classList.add('active');
    }
  
    // Initialize the carousel
    updateCarousel();
  }
  