// Get references to elements
const fullscreenButton17 = document.getElementById("fullscreenButton17");
const fullscreenModal17 = document.getElementById("fullscreenModal17");
const closeFullscreen17 = document.getElementById("closeFullscreen17");
const fullscreenImage17 = document.getElementById("fullscreenImage17");
const imageToOpen17 = document.getElementById("imageToOpen17");

// Function to open the fullscreen modal with animation
fullscreenButton17.addEventListener("click", () => {
  fullscreenImage17.src = imageToOpen17.src;
  fullscreenModal17.style.display = "block";
  setTimeout(() => {
    fullscreenModal17.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen17.addEventListener("click", () => {
  fullscreenModal17.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal17.style.display = "none";
  }, 300);
});