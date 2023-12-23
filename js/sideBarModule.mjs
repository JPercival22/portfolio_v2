// sidebarModule.mjs
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("sidebar-open");
}

export { toggleSidebar };
