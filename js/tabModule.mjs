// tabModule.mjs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function openTab(event, tabId) {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}

function displayDefaultTabs() {
  const defaultTab = document.querySelector(".default-tab");
  if (defaultTab) {
    defaultTab.style.display = "block";
  }
}

function setActiveTabButton(buttonId) {
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const selectedButton = document.getElementById(buttonId);
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const tabId = event.target.dataset.tabId;
    openTab(event, tabId);
    setActiveTabButton(event.target.id);
  });
});

export { openTab, displayDefaultTabs, setActiveTabButton };
