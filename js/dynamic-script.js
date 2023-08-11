function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    openTab(null, 'tab1'); // Open the first tab by default
});

function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = 'block';
    }

    if (evt) {
        evt.currentTarget.classList.add('active');
    }
}

function goBack() {
    const goBackButton = document.getElementById("goBackButton");
    window.history.back();
}

function goForward() {
    const forwardButton = document.getElementById("forwardButton");
    window.history.forward();
}

// Load different images based on viewport width
function setResponsiveImage() {
    const imgElement = document.getElementById("responsiveImage");

    if (window.innerWidth <= 480) {
        imgElement.src = "/assets/images/Case-Studies/CS1/CS1-sm-device-demo.webp"; // Image for mobile devices
    } else if (window.innerWidth <= 768) {
        imgElement.src = "/assets/images/Case-Studies/CS1/CS1-lg-device-demo.webp"; // Image for desktops
    }
}

// Adjust the image when the window is resized
window.addEventListener("resize", setResponsiveImage);

function AddTableARIA() {
    try {
      var allTables = document.querySelectorAll('table');
      for (var i = 0; i < allTables.length; i++) {
        allTables[i].setAttribute('role','table');
      }
      var allCaptions = document.querySelectorAll('caption');
      for (var i = 0; i < allCaptions.length; i++) {
        allCaptions[i].setAttribute('role','caption');
      }
      var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
      for (var i = 0; i < allRowGroups.length; i++) {
        allRowGroups[i].setAttribute('role','rowgroup');
      }
      var allRows = document.querySelectorAll('tr');
      for (var i = 0; i < allRows.length; i++) {
        allRows[i].setAttribute('role','row');
      }
      var allCells = document.querySelectorAll('td');
      for (var i = 0; i < allCells.length; i++) {
        allCells[i].setAttribute('role','cell');
      }
      var allHeaders = document.querySelectorAll('th');
      for (var i = 0; i < allHeaders.length; i++) {
        allHeaders[i].setAttribute('role','columnheader');
      }
      // this accounts for scoped row headers
      var allRowHeaders = document.querySelectorAll('th[scope=row]');
      for (var i = 0; i < allRowHeaders.length; i++) {
        allRowHeaders[i].setAttribute('role','rowheader');
      }
    } catch (e) {
      console.log("AddTableARIA(): " + e);
    }
  }
  
  AddTableARIA();