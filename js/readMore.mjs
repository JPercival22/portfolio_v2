// In your module file, e.g., readMoreModule.mjs
export function initReadMore() {
  const readMoreButtons = document.querySelectorAll('.read-more');
  const moreContents = document.querySelectorAll('.more-content');

  function openReadMoreDefault() {
    if (window.innerWidth >= 992) {
      moreContents.forEach(moreContent => {
        moreContent.style.display = 'inline';
        moreContent.classList.add('show-more');
      });

      readMoreButtons.forEach(readMoreButton => {
        readMoreButton.style.display = 'none';
      });
    } else {
      moreContents.forEach(moreContent => {
        moreContent.style.display = 'none';
        moreContent.classList.remove('show-more');
      });

      readMoreButtons.forEach(readMoreButton => {
        readMoreButton.style.display = 'inline';
        readMoreButton.textContent = 'Show more';
      });
    }
  }

  document.addEventListener('click', function(event) {
    if (event.target.matches('.read-more')) {
      event.preventDefault();
      const readMoreButton = event.target;
      const moreContent = readMoreButton.previousElementSibling.querySelector('.more-content');

      if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'inline';
        readMoreButton.textContent = 'Show less';
        moreContent.classList.add('show-more');
      } else {
        moreContent.style.display = 'none';
        readMoreButton.textContent = 'Show more';
        moreContent.classList.remove('show-more');
      }
    }
  });

  openReadMoreDefault(); // Call the function to set default state

  window.addEventListener('resize', openReadMoreDefault); // Adjust when the window is resized
}
