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


  // tool ti[p ]


  var tooltipDelay = 500;
  var timer = null;

  document.body.addEventListener("mouseout", function () {
    window.clearTimeout(timer);
  });

  document.body.addEventListener("mousemove", function (e) {
    var el = e.target;

    if (el != document.body && (el.hasAttribute("title") || el.hasAttribute("data-styletip"))) {
      if (el.title) {
        el["tt-title"] = el.title;
        el["tt-show"] = function (pos) {
          var tip = document.createElement("div");
          tip.classList.add("style-tip");

          if (el.hasAttribute("data-styletip-class")) {
            tip.classList.add(el.getAttribute("data-styletip-class"));
          }

          tip.innerText = el["tt-title"];
          tip.style.zIndex = 9e9;
          tip.style.pointerEvents = "none";
          tip.style.position = "absolute";
          tip.style.left =  "55px";
          tip.style.top = pos.y + "px";
          tip.style.backgroundColor ="grey";
          tip.style.color ="#fff";
          tip.style.padding ="6px";
          tip.style.borderRadius ="10px";
          
          document.body.appendChild(tip);

          el["tt-tip"] = tip;
          this.addEventListener("mouseout", el["tt-destroy"]);
        };

        el["tt-destroy"] = function () {
          if (el["tt-tip"]) {
            document.body.removeChild(el["tt-tip"]);
            delete el["tt-tip"];
          }
        };

        el.removeAttribute("title");
        el.setAttribute("data-styletip", true);
      }

      clearTimeout(timer);
      timer = window.setTimeout(function () {
        el["tt-destroy"]();
        el["tt-show"]({
          x: e.pageX,
          y: e.pageY
        });
      }, tooltipDelay);
    }
  });

})();