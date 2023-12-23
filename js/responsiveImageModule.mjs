function setResponsiveImage(elementId, smallImagePath, largeImagePath) {
  const imageElement = document.getElementById(elementId);
  if (!imageElement) {
    console.error('Element with id ' + elementId + ' not found');
    return; // Exit the function early if the element is not found
  }

  if (window.innerWidth < 768) {
    imageElement.src = smallImagePath;
  } else {
    imageElement.src = largeImagePath;
  }
}

export { setResponsiveImage };
