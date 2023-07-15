let navbar = document.querySelector("#navbar");
const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

// side bar functionality 

let btn = document.querySelector('#sidebar-menu-btn')
let listItem = document.querySelector('.side-bar-list-item')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
  sidebar.classList.toggle('active');
};
