document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mainPages").style.display = "block"; // Display mainPages tab by default
    document.getElementById("taskFlow").style.display = "block"; // Display mainPages tab by default
    document.getElementById("siteMap").style.display = "block"; // Display mainPages tab by default
  
    document.getElementById("mainPagesBtn").addEventListener("click", function () {
        showTabContent("mainPages");
        setActiveTabButton("mainPagesBtn");
    });
    document.getElementById("taskFlowBtn").addEventListener("click", function () {
        showTabContent("taskFlow");
        setActiveTabButton("taskFlowBtn");
    });
  
    document.getElementById("topBarCompsBtn").addEventListener("click", function () {
        showTabContent("topBarComps");
        setActiveTabButton("topBarCompsBtn");
    });
    document.getElementById("userFlowBtn").addEventListener("click", function () {
        showTabContent("userFlow");
        setActiveTabButton("userFlowBtn");
    });
    document.getElementById("siteMapBtn").addEventListener("click", function () {
        showTabContent("siteMap");
        setActiveTabButton("siteMapBtn");
    });
    document.getElementById("siteNavigationBtn").addEventListener("click", function () {
        showTabContent("siteNavigation");
        setActiveTabButton("siteNavigationBtn");
    });
  });
  
  function showTabContent(tabId) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
  }
  
  function setActiveTabButton(buttonId) {
    const tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach(function (btn) {
        btn.classList.remove("active"); // Remove "active" class from all tab buttons
    });
  
    const activeButton = document.getElementById(buttonId);
    activeButton.classList.add("active"); // Add "active" class to the clicked tab button
  }
  