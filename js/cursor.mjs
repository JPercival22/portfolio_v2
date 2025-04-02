export function initCursor() {
  // Create the cursor dot element
  const dot = document.createElement("div");
  dot.id = "cursor-dot";

  // Apply styles directly to the dot
  dot.style.position = "fixed";
  dot.style.width = "20px";
  dot.style.height = "20px";
  dot.style.backgroundColor = "#c4ffc4c9";
  dot.style.filter = "blur(5px)";
  dot.style.borderRadius = "50%";
  dot.style.zIndex = "9999";
  dot.style.pointerEvents = "none";
  document.body.appendChild(dot);

  // Mouse movement event listener
  document.addEventListener("mousemove", (e) => {
    const offsetX = 15; // Adjust to position dot beside cursor
    const offsetY = 15;

    let targetX = e.clientX + offsetX;
    let targetY = e.clientY + offsetY;

    let currentX = parseFloat(dot.style.left) || 0;
    let currentY = parseFloat(dot.style.top) || 0;

    // Smooth movement function
    function smoothMove() {
      const speed = 0.1; // Adjust this value for faster/slower movement
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      dot.style.left = `${currentX}px`;
      dot.style.top = `${currentY}px`;

      requestAnimationFrame(smoothMove);
    }

    // Start the smooth movement when mouse moves
    requestAnimationFrame(smoothMove);
  });
}
