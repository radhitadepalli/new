// Get references to elements
const fullscreenButton10 = document.getElementById("fullscreenButton10");
const fullscreenModal10 = document.getElementById("fullscreenModal10");
const closeFullscreen10 = document.getElementById("closeFullscreen10");
const fullscreenImage10 = document.getElementById("fullscreenImage10");
const imageToOpen10 = document.getElementById("imageToOpen10");

// Function to open the fullscreen modal with animation
fullscreenButton10.addEventListener("click", () => {
  fullscreenImage10.src = imageToOpen10.src;
  fullscreenModal10.style.display = "block";
  setTimeout(() => {
    fullscreenModal10.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen10.addEventListener("click", () => {
  fullscreenModal10.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal10.style.display = "none";
  }, 300);
});