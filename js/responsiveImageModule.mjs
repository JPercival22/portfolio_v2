function setResponsiveImages() {
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-responsive]');
    const imageData = Array.from(images).map(image => {
      return {
        elementId: image.id,
        smallImagePath: image.getAttribute('data-small'),
        largeImagePath: image.getAttribute('data-large')
      };
    });

    imageData.forEach(image => {
      const imageElement = document.getElementById(image.elementId);
      if (!imageElement) {
        console.error('Element with id ' + image.elementId + ' not found');
        return;
      }

      if (window.innerWidth < 768) {
        imageElement.src = image.smallImagePath;
      } else {
        imageElement.src = image.largeImagePath;
      }
    });
  });
}

export { setResponsiveImages };
