function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    openTab(event, 'tab1'); // Open the first tab by default
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

    evt.currentTarget.classList.add('active');
}

document.getElementById("goBackButton").addEventListener("click", function() {
    history.back();
});

document.getElementById("goForwardButton").addEventListener("click", function() {
    history.forward();
});

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

