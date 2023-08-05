// nav bar 
(function () {
  "use strict";
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
  let sidebar = document.querySelector('.sidebar')

  btn.onclick = function () {
    sidebar.classList.toggle('active');
  };


})

();

// collapsable table
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// tab view functionality 
const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

