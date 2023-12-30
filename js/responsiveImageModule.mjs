function setResponsiveImages(images) {
  images.forEach((image) => {
    const imageElement = document.getElementById(image.elementId);
    if (!imageElement) {
      console.error('Element with id ' + image.elementId + ' not found');
      return; // Exit the function early if the element is not found
    }

    if (window.innerWidth < 768) {
      imageElement.src = image.smallImagePath;
    } else {
      imageElement.src = image.largeImagePath;
    }
  });
}

export { setResponsiveImages };
