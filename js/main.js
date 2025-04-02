import { initCarousel as o } from "./carousel.mjs";
import { setupLazyLoading as t } from "./lazyLoad.mjs";
import { insertSidebar as i } from "./sideBarModule.mjs"; // Importing insertSidebar
import "./mainNavShadow.mjs";
import { initCursor } from "./cursor.mjs"; // Import the cursor module

console.log("Calling lazy loading setup...");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // List of pages where the spinner should not be used
    const noSpinnerPages = ["index", "about-me", "contact-form"];

    // Check if the current page URL matches any of the noSpinnerPages
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

    // Only call setupLazyLoading if the current page is not in the excluded pages list
    if (!noSpinnerPages.includes(currentPage)) {
      t(); // Call the lazy load function (which shows the spinner)
    }

    console.log("DOM fully loaded. Initialising scripts...");

    // Dynamically load lazysizes (local script)
    const script = document.createElement("script");
    script.src = "./js/lazysizes.js"; // Updated to use the local file path
    script.async = true;

    // Append lazysizes to the head
    document.head.appendChild(script);

    // Optional: Confirm lazysizes has loaded
    script.onload = () => {
      console.log("lazysizes has been loaded");
    };

    // Optional: Handle error if lazysizes fails to load
    script.onerror = () => {
      console.error("Failed to load lazysizes");
    };

    console.log("Main functionality initialised.");

    // Initialize the cursor functionality
    initCursor(); // Call the cursor function here

    // Explicitly call insertSidebar to remove the unused warning
    i(); // Ensuring the function is called

    // Main functionality script handling
    await (async function addMainFunctionality() {
      try {
        const n = document.querySelector(".menu-toggle");
        if (n) {
          const { addToggleListener: o } = await import("./menuModule.mjs");
          o(n);
        }
        const { initReadMore: e } = await import("./readMore.mjs");
        e();
        const { scrollHighlight: r } = await import("./scrollHighlight.mjs");
        r();
        const { initializeTabModules: l } = await import("./tabModule.mjs");
        l();
        const { initLightboxFunctionality: s } = await import("./lightboxModule.mjs");
        s();
        const { toggleScrolledClass: d } = await import("./scrollButton.mjs");
        d();
        const { initializeFormFunctionality: m } = await import("./formModule.mjs");
        m();
        const { initAccordion: u } = await import("./accordion.mjs");
        u();
        document.querySelectorAll("[data-carousel]").forEach((t, i) => {
          const a = t.dataset.carousel;
          o(a, `carouselTrack_${i}`, `prevButton_${i}`, `nextButton_${i}`, `pagination_${i}`);
        });
      } catch (o) {
        console.error("Error adding main functionality:", o);
      }
    })();
    console.log("Main functionality initialised.");
  } catch (o) {
    console.error("Error on DOMContentLoaded:", o);
  }
});
