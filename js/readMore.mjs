export function initReadMore() {
  const readMoreLinks = document.querySelectorAll('.read-more');
  const moreContents = document.querySelectorAll('.more-content');

  function openReadMoreDefault() {
    if (window.innerWidth >= 992) {
      moreContents.forEach(moreContent => {
        moreContent.style.display = 'inline';
        moreContent.classList.add('show-more');
      });

      readMoreLinks.forEach(readMoreLink => {
        readMoreLink.style.display = 'none';
      });
    }
  }

  document.addEventListener('click', function(event) {
    if (event.target.matches('.read-more')) {
      event.preventDefault();
      const readMoreLink = event.target;
      const moreContent = readMoreLink.previousElementSibling;

      moreContent.style.display = 'inline';
      readMoreLink.style.display = 'none';
      moreContent.classList.add('show-more');
    }
  });

  openReadMoreDefault(); // Call the function to set default state

  window.addEventListener('resize', openReadMoreDefault); // Adjust when the window is resized
}
