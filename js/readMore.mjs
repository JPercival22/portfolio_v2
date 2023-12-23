// readMore.js

export function initReadMore() {
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
  }
  