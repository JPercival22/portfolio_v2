export function createTabModule(title, content) {
  const tabButton = document.createElement('button');
  tabButton.classList.add('tab-button');
  tabButton.textContent = title;

  const tabContent = document.createElement('div');
  tabContent.classList.add('tab-content');
  tabContent.textContent = content;

  function addButtonToContainer(container) {
    container.appendChild(tabButton);
  }

  function addContentToContainer(container) {
    container.appendChild(tabContent);
  }

  return {
    tabButton,
    tabContent,
    addButtonToContainer,
    addContentToContainer,
  };
}
