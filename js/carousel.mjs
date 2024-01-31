// Function to initialize a carousel
export function initCarousel (
  containerId,
  trackId,
  prevButtonId,
  nextButtonId,
  paginationId
) {
  const container = document.getElementById(containerId)
  const track = document.getElementById(trackId)
  const prevButton = document.getElementById(prevButtonId)
  const nextButton = document.getElementById(nextButtonId)
  const pagination = document.getElementById(paginationId)

  if (!container || !track || !prevButton || !nextButton) {
    console.error('Error: Carousel elements not found.')
    return
  }

  // Get all slides in the carousel
  const slides = track.children

  // Set the initial position of the carousel
  let index = 0

  // Set autoplay interval (adjust the duration as needed)
  const autoplayInterval = 7000; // 5000 milliseconds = 5 seconds

  // Add event listener for the previous button
  prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length
    updateCarousel()
    resetAutoplay()
  })

  // Add event listener for the next button
  nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length
    updateCarousel()
    resetAutoplay()
  })

// Function to update the carousel based on the current index
function updateCarousel () {
  // Move the track to show the current slide with a slow transition
  const offset = -index * 100 + '%';
  track.style.transition = 'transform 1s ease'; // Adjust the speed here
  track.style.transform = 'translateX(' + offset + ')';

  // Update pagination if available
  if (pagination) {
    updatePagination();
  }

  // After the transition is complete, remove the transition property
  setTimeout(() => {
    track.style.transition = '';
  }, 1000); // Adjust the time to match the transition duration
}

  // Function to update pagination dots
  function updatePagination () {
    // Check if pagination exists before updating
    if (
      !pagination ||
      !pagination.children ||
      pagination.children.length === 0
    ) {
      createPaginationDots()
      return
    }

    // Remove active class from all pagination dots
    for (let dot of pagination.children) {
      dot.classList.remove('active')
    }

    // Add active class to the current pagination dot
    pagination.children[index].classList.add('active')
  }

  // Function to create pagination dots
  function createPaginationDots () {
    // Check if pagination exists before creating
    if (!pagination) {
      return
    }

    // Clear existing content
    pagination.innerHTML = ''

    // Create pagination dots
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div')
      dot.classList.add('dot')
      if (i === index) {
        dot.classList.add('active')
      }

      // Add click event listener to each pagination dot
      dot.addEventListener('click', () => {
        index = i
        updateCarousel()
        resetAutoplay()
      })

      pagination.appendChild(dot)
    }
  }

  // Autoplay functionality
  function autoplay() {
    index = (index + 1) % slides.length
    updateCarousel()
  }

  // Function to reset autoplay interval
  function resetAutoplay() {
    clearInterval(autoplayIntervalId)
    autoplayIntervalId = setInterval(autoplay, autoplayInterval)
  }

  // Initialize the carousel
  let autoplayIntervalId = setInterval(autoplay, autoplayInterval)
  updateCarousel()
}
