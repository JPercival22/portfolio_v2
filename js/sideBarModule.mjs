// Function to generate sidebar items
function generateSidebarItems() {
  return [
    { id: "introduction", label: "Introduction", icon: "introduction-icon" },
    { id: "research", label: "Research", icon: "research-icon" },
    { id: "architecture", label: "Information Architecture", icon: "IA-icon" },
    { id: "interaction", label: "Interaction Design", icon: "ID-icon" },
    { id: "early-designs", label: "Low-Fidelity Designs", icon: "Lo-Fi-icon" },
    { id: "designSystem", label: "Design System", icon: "DesSystem-icon" },
    { id: "hiFidelityDesigns", label: "Hi-Fidelity Designs", icon: "Hi-Fi-icon" },
    { id: "ux-testing", label: "UX Testing", icon: "UXTesting-icon" },
    { id: "results", label: "Test Results", icon: "Results-icon" },
    { id: "conclusion", label: "Conclusion", icon: "Conc-icon" },
    { id: "project-information", label: "Project Information", icon: "Info-icon" }
  ]
  .map(item => `
    <li class="side-bar-list-item">
      <a href="#${item.id}" class="sidebar-link">
        <span class="side-bar-icon ${item.icon}" title="${item.label}"></span>
        <span class="nav-item">${item.label}</span>
      </a>
    </li>
  `).join('');
}

// Insert the sidebar into the page
function insertSidebar() {
  const mobileSidebar = document.getElementById("mobileSidebar"),
        largeSidebar = document.getElementById("largeSidebar");

  if (window.innerWidth <= 1400 && mobileSidebar && !document.getElementById("sidebar")) {
    // Create and insert mobile sidebar
    mobileSidebar.innerHTML = `
      <div class="contents">
        <button type="button" class="open-sidebar-btn" aria-label="Open side bar button">
          <div class="chevron"></div>
        </button>
        <div class="tooltip">Contents Menu</div>
      </div>
      <nav id="sidebar" class="mobile-sidebar">
        <div class="header">
          <h4 class="title">Contents</h4>
          <button type="button" class="close-btn" aria-label="Close sidebar button">
            <span class="chevron"></span>
          </button>
        </div>
        <ul class="side-bar-list">
          ${generateSidebarItems()}
        </ul>
      </nav>
    `;

    // Attach event listeners to buttons
    function attachMobileSidebarListeners() {
      const openButton = document.querySelector(".open-sidebar-btn"),
            closeButton = document.querySelector(".close-btn"),
            sidebar = document.getElementById("sidebar"),
            contentsButton = document.querySelector(".contents");

      if (openButton && closeButton && sidebar && contentsButton) {
        // Open sidebar and hide contents button
        openButton.addEventListener("click", () => {
          sidebar.classList.add("sidebar-open");
          contentsButton.classList.add("hidden"); 
        });

        // Close sidebar and show contents button after transition
        closeButton.addEventListener("click", () => closeSidebar());
      }
    }

    attachMobileSidebarListeners();

    // Handle sidebar link clicks
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor jump behavior
        const targetId = link.getAttribute("href").substring(1); // Get target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
          setTimeout(() => closeSidebar(), 500); // Close sidebar AFTER scrolling
        }
      });
    });
  } else if (window.innerWidth > 1400 && largeSidebar && !document.getElementById("sidebar_lg")) {
    // Create and insert large sidebar for desktops
    largeSidebar.innerHTML = `
      <article>
        <div id="sidebar_lg" class="sideBar sidebar">
          <div class="sideBar-content">
            <div class="header">
              <h3>Contents</h3>
            </div>
            <ul>
              ${generateSidebarItems()}
            </ul>
          </div>
        </div>
      </article>
    `;
  }
}

// Function to close sidebar properly
function closeSidebar() {
  const sidebar = document.getElementById("sidebar"),
        contentsButton = document.querySelector(".contents");

  if (sidebar) {
    sidebar.classList.remove("sidebar-open");
    setTimeout(() => {
      contentsButton.classList.remove("hidden");
    }, 300);
  }
}

// Disable sidebar reopening on scroll
let lastScrollTop = window.scrollY;
window.addEventListener("scroll", () => {
  lastScrollTop = window.scrollY;
});

// Event listeners for page load and resize
window.addEventListener("load", insertSidebar);
window.addEventListener("resize", insertSidebar);

// Export functions
export { closeSidebar, insertSidebar };
