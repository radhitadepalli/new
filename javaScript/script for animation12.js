// Get references to elements
const fullscreenButton12 = document.getElementById("fullscreenButton12");
const fullscreenModal12 = document.getElementById("fullscreenModal12");
const closeFullscreen12 = document.getElementById("closeFullscreen12");
const fullscreenImage12 = document.getElementById("fullscreenImage12");
const imageToOpen12 = document.getElementById("imageToOpen12");

// Function to open the fullscreen modal with animation
fullscreenButton12.addEventListener("click", () => {
  fullscreenImage12.src = imageToOpen12.src;
  fullscreenModal12.style.display = "block";
  setTimeout(() => {
    fullscreenModal12.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen12.addEventListener("click", () => {
  fullscreenModal12.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal12.style.display = "none";
  }, 300);
});