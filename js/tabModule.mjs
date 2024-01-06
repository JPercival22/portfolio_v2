// tabModule.mjs
export function initTabs(tabLinks, tabContents) {
  function handleTabClick(index) {
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    tabLinks[index].classList.add('active');
    tabContents[index].style.display = 'block';
  }

  tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
      handleTabClick(index);
    });
  });
}

export function openFirstTabByDefault(tabLinks, tabContents) {
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  tabLinks[0].classList.add('active');
  tabContents[0].style.display = 'block';
}
