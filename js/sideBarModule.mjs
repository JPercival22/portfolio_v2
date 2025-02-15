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
        // Open sidebar and hide contents button by adding 'hidden' class
        openButton.addEventListener("click", () => {
          sidebar.classList.add("sidebar-open");
          contentsButton.classList.add("hidden"); // Hide contents button
        });

        // Close sidebar and show contents button by removing 'hidden' class after transition
        closeButton.addEventListener("click", () => {
          sidebar.classList.remove("sidebar-open");

          // Ensure contents button reappears after sidebar closes with delay
          setTimeout(() => {
            contentsButton.classList.remove("hidden"); // Show contents button again
          }, 300); // Adjust timeout to match transition time
        });
      }
    }

    attachMobileSidebarListeners();

    // Hide contents button when sidebar link is clicked
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        const contentsButton = document.querySelector(".contents");
        contentsButton.classList.add("hidden"); // Hide contents button when a link is clicked
        setTimeout(() => {
          document.getElementById("sidebar").classList.remove("sidebar-open");
        }, 300); // Adjust timeout to match sidebar transition time
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

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar && sidebar.classList.toggle("sidebar-open");
}

// Function to close sidebar when a link is clicked
function closeSidebarOnLinkClick() {
  document.querySelectorAll("#sidebar a").forEach((e) => {
    e.addEventListener("click", toggleSidebar);
  });
}

// Event listeners for page load and resize
window.addEventListener("load", insertSidebar);
window.addEventListener("resize", insertSidebar);

// Export functions to make them available for other modules
export { toggleSidebar, closeSidebarOnLinkClick, insertSidebar };
