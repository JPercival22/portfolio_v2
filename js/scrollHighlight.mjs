const e = {
  brief_border: "#b2abff",
  research_border: "#ff9494",
  IA_border: "#7aafff",
  Inter_border: "#ffe079",
  LoFi_border: "#8dbdfb",
  desSystem_border: "#c5ffff",
  HiFi_border: "#e9ffd9",
  uxTest_border: "#95e6f5",
  results_border: "#ffe7b0",
  conclusion_border: "#c6ffc6",
  info_border: "#0e80b5",
};

export function scrollHighlight() {
  const sections = document.querySelectorAll("section");
  const sidebarItems = document.querySelectorAll(".side-bar-list-item");

  const handleScroll = () => {
    const buffer = window.innerHeight * 0.3;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY + buffer >= sectionTop && window.scrollY + buffer < sectionBottom) {
        const sectionId = section.getAttribute("id");
        const colorKey = section.getAttribute("data-color");
        const highlightColor = e[colorKey];

        if (highlightColor) {
          sidebarItems.forEach((item) => {
            const targetId = item.querySelector("a").getAttribute("href").substring(1);
            item.style.backgroundColor = targetId === sectionId ? highlightColor : "";
          });
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on load
}
