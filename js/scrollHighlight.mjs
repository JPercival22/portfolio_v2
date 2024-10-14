export function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.side-bar-list-item a');
  
    // Set up an IntersectionObserver to detect when sections come into view
    const observerOptions = {
      root: null,
      threshold: 0.6, // Trigger when 60% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const sectionId = section.getAttribute('id');
        const sectionColor = section.getAttribute('data-color');
  
        // Find the corresponding nav item
        const navItem = document.querySelector(`.side-bar-list-item a[href="#${sectionId}"]`);
        
        if (entry.isIntersecting) {
          // Remove .active from all nav items and reset their background colors
          navItems.forEach((item) => {
            item.classList.remove('active');
            item.parentElement.style.backgroundColor = ''; // Reset background of <li>
          });
  
          // Add .active to the current nav item
          if (navItem) {
            navItem.classList.add('active');
            navItem.parentElement.style.backgroundColor = sectionColor; // Change <li> background color
          }
        }
      });
    }, observerOptions);
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Add click event listener for nav items
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', (e) => {
        // Prevent default anchor click behavior
        e.preventDefault();
  
        // Remove .active from all nav items and reset their background colors
        navItems.forEach((item) => {
          item.classList.remove('active');
          item.parentElement.style.backgroundColor = ''; // Reset background of <li>
        });
  
        // Add .active to the clicked nav item
        navItem.classList.add('active');
  
        // Get the section's data-color
        const sectionId = navItem.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        const sectionColor = section.getAttribute('data-color');
  
        // Change the background color of the corresponding <li>
        navItem.parentElement.style.backgroundColor = sectionColor;
  
        // Scroll to the section smoothly
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  