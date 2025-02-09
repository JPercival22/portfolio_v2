function createMobileSidebar() {
    return `
        <div class="contents">
          <button type="button" class="open-sidebar-btn" aria-label="Open side bar button">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
          <div class="tooltip">Contents Menu</div>
        </div>

        <nav id="sidebar" class="mobile-sidebar">
          <div class="header">
            <h4>Contents</h4>
            <button type="button" class="close-btn" aria-label="close sidebar button">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
          </div>
          <ul>
            ${generateSidebarItems()}
          </ul>
        </nav>
    `;
}

function createLargeSidebar() {
    return `
    
          <div class="sideBar sidebar">
            <div class="sideBar-content">
              <div class="header">
                <h3>Contents</h3>
              </div>
              <ul>
                ${generateSidebarItems()}
              </ul>
            </div>
          </div>
     
    `;
}

function generateSidebarItems() {
    const items = [
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
    ];

    return items.map(item => `
        <li class="side-bar-list-item">
          <a href="#${item.id}">
            <span class="side-bar-icon ${item.icon}" title="${item.label}"></span>
            <span class="nav-item">${item.label}</span>
          </a>
        </li>
    `).join('');
}

// Function to insert the appropriate sidebar
function insertSidebar() {
    const mobileSidebarContainer = document.getElementById('mobileSidebar');
    const largeSidebarContainer = document.getElementById('largeSidebar');

    // Check for mobile and large sidebar containers
    if (mobileSidebarContainer) {
        console.log('mobileSidebarContainer exists:', mobileSidebarContainer);
    }
    if (largeSidebarContainer) {
        console.log('largeSidebarContainer exists:', largeSidebarContainer);
    }

    // If the window width is <= 1400px, insert the mobile sidebar
    if (window.innerWidth <= 1400 && !mobileSidebarContainer.querySelector('.mobile-sidebar')) {
        const sidebarMarkup = createMobileSidebar();
        mobileSidebarContainer.insertAdjacentHTML("beforeend", sidebarMarkup);
        console.log("Mobile sidebar inserted into container.");
    } 
    // If the window width is > 1400px, insert the large sidebar
    else if (window.innerWidth > 1400 && !largeSidebarContainer.querySelector('.sideBar')) {
        const sidebarMarkup = createLargeSidebar();
        largeSidebarContainer.insertAdjacentHTML("beforeend", sidebarMarkup);
        console.log("Large sidebar inserted into container.");
    }
}

// Listen for page load and resize events to insert sidebars
window.addEventListener("load", insertSidebar);
window.addEventListener("resize", insertSidebar);

// Functions for sidebar functionality
const sidebar = document.querySelector(".mobile-sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("sidebar-open");
}

function closeSidebarOnLinkClick() {
    const sidebarLinks = document.querySelectorAll('#sidebar a'); // Select all links in the sidebar
    if (sidebarLinks) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', toggleSidebar); // Add event listener to each link to close the sidebar when clicked
        });
    }
}

export { toggleSidebar, closeSidebarOnLinkClick, insertSidebar };
