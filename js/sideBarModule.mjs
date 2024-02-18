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

export { toggleSidebar, closeSidebarOnLinkClick };
