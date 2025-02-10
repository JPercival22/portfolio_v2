function createMobileSidebar() {
    return `
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
          <ul class="side-bar-list">  <!-- Updated class name -->
            ${generateSidebarItems()}
          </ul>
        </nav>
    `;
}

function createLargeSidebar() {
    return `
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

function insertSidebar() {
    const mobileSidebarContainer = document.getElementById("mobileSidebar");
    const largeSidebarContainer = document.getElementById("largeSidebar");

    if (window.innerWidth <= 1400 && mobileSidebarContainer && !document.getElementById("sidebar")) {
        mobileSidebarContainer.innerHTML = createMobileSidebar();
        attachMobileSidebarListeners();
    } else if (window.innerWidth > 1400 && largeSidebarContainer && !document.getElementById("sidebar_lg")) {
        largeSidebarContainer.innerHTML = createLargeSidebar();
    }
}

function attachMobileSidebarListeners() {
    const openSidebarBtn = document.querySelector(".open-sidebar-btn");
    const closeSidebarBtn = document.querySelector(".close-btn");
    const sidebar = document.getElementById("sidebar");
    const contentsButton = document.querySelector(".contents");

    if (openSidebarBtn && closeSidebarBtn && sidebar && contentsButton) {
        openSidebarBtn.addEventListener("click", () => {
            sidebar.classList.add("sidebar-open");
            contentsButton.style.display = "none"; // Hide when opened
        });

        closeSidebarBtn.addEventListener("click", () => {
            sidebar.classList.remove("sidebar-open");
            setTimeout(() => {
                contentsButton.style.display = "flex"; // Show when closed
            }, 300);
        });
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.toggle("sidebar-open");
    }
}

function closeSidebarOnLinkClick() {
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", toggleSidebar);
    });
}

// Ensure sidebar is inserted dynamically
window.addEventListener("load", insertSidebar);
window.addEventListener("resize", insertSidebar);

// **Ensure all exports remain intact**
export { toggleSidebar, closeSidebarOnLinkClick, insertSidebar };
