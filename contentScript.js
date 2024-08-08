// function to add a global stylesheet
function addGlobalStyle(css) {
  // Get the head element
  const head = document.head || document.getElementsByTagName("head")[0];
  if (!head) {
    console.error("Failed to get the head element.");
    return;
  }

  // Create a new style element
  const style = document.createElement("style");
  style.textContent = css;

  // Add the style element to the head
  head.appendChild(style);
}

// Add styles to hide the HardsellOverlay and reset body styles
addGlobalStyle(`
  #HardsellOverlay {
    display: none !important;
  }
  body {
    overflow: auto !important;
    position: initial !important;
  }
`);

// Prevent scroll and mousemove events
window.addEventListener("scroll", (event) => event.stopPropagation(), true);
window.addEventListener("mousemove", (event) => event.stopPropagation(), true);
