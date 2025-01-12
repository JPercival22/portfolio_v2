export function setupLazyLoading() {
  // Check for existing overlay to avoid duplicates
  if (document.querySelector("#loadingOverlay")) {
    return;
  }

  // Add a loading overlay
  const overlay = document.createElement("div");
  overlay.id = "loadingOverlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack spinner and text vertically */
  `;

  // Create the spinner div
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  // Create the loading text div
  const loadingText = document.createElement("div");
  loadingText.classList.add("loading-text");
  loadingText.textContent = "Loading...";

  // Append the spinner and text to the overlay
  overlay.appendChild(spinner);
  overlay.appendChild(loadingText);

  // Append the overlay to the body
  document.body.appendChild(overlay);

  // Hide sections initially
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.visibility = "hidden";
    section.classList.add("hidden"); // For Intersection Observer
  });

  // Add user interaction listeners
  ["click", "keydown"].forEach((eventType) =>
    window.addEventListener(eventType, () => {
      revealAboveTheFold(sections);
      removeOverlay(overlay);
    })
  );

  // Auto-remove overlay after 4 seconds
  setTimeout(() => {
    revealAboveTheFold(sections);
    removeOverlay(overlay);
  }, 4000);

  // Lazy reveal below-the-fold content
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.visibility = "visible";
        target.classList.remove("hidden");
        observer.unobserve(target);
      }
    });
  });

  sections.forEach((section) => observer.observe(section));
}

// Reveal only above-the-fold content
function revealAboveTheFold(sections) {
  sections.forEach((section) => {
    if (isAboveTheFold(section)) {
      section.style.visibility = "visible";
      section.classList.remove("hidden");
    }
  });
}

// Check if a section is above the fold
function isAboveTheFold(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Remove overlay from the DOM
function removeOverlay(overlay) {
  if (overlay) {
    overlay.style.display = "none";
  }
}
