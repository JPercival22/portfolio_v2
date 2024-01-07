const openLightbox = (imageSrc, imageAlt, lightbox) => {
  const lightboxImage = lightbox.querySelector('img');
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightbox.style.display = 'block';
};

export { openLightbox };
