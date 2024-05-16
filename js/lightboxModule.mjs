// lightboxModule.mjs

const openLightbox = (imageSrc, imageAlt, lightbox) => {
  if (window.innerWidth >= 768) {
    const lightboxImage = lightbox.querySelector('img');
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightbox.style.display = 'block';

    // Attach close button click event listener using event delegation
    document.addEventListener('click', handleDocumentClick);
  }
};

const handleDocumentClick = (event) => {
  const closeBtn = event.target.closest('.lightbox [data-action="close-lightbox"]');
  if (closeBtn) {
    const lightbox = closeBtn.closest('.lightbox');
    if (lightbox) {
      closeLightbox(lightbox);
    }
  }
};

const closeLightbox = (lightbox) => {
  lightbox.style.display = 'none';
  // Additional logic for hiding the lightbox
  document.removeEventListener('click', handleDocumentClick);
};

const initLightboxFunctionality = () => {
  if (window.innerWidth < 767) {
    const lightboxes = document.querySelectorAll('.lightbox');
    lightboxes.forEach(lightbox => lightbox.style.display = 'none');
    return;
  }

  const figures = document.querySelectorAll('.gallery[data-index]');

  figures.forEach((figure) => {
    try {
      const image = figure.querySelector('img');
      const lightboxIndex = figure.getAttribute('data-index');
      const lightbox = document.querySelector(`.lightbox.lightbox_${lightboxIndex}`);
      const figcaption = figure.querySelector('figcaption');

      // Check if image and lightbox are found
      if (image && lightbox) {
        const handleOpenLightbox = () => openLightbox(image.src, image.alt, lightbox);

        image.addEventListener('click', handleOpenLightbox);
        if (figcaption) {
          figcaption.addEventListener('click', handleOpenLightbox);
        }

        lightbox.addEventListener('click', (event) => {
          // Include the close button directly in the condition
          if (
            event.target === lightbox ||
            event.target === image ||
            event.target.closest('.close-btn')
          ) {
            closeLightbox(lightbox);
          }
        });

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox(lightbox);
          }
        });
      } else {
        console.error(`Image or Lightbox element not found for figure with data-index ${lightboxIndex}`);
      }
    } catch (error) {
      console.error('Error processing figure:', error);
    }
  });
};

export { openLightbox, closeLightbox, initLightboxFunctionality };
