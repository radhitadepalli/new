// Get references to elements
const fullscreenButton8 = document.getElementById("fullscreenButton8");
const fullscreenModal8 = document.getElementById("fullscreenModal8");
const closeFullscreen8 = document.getElementById("closeFullscreen8");
const fullscreenImage8 = document.getElementById("fullscreenImage8");
const imageToOpen8 = document.getElementById("imageToOpen8");

// Function to open the fullscreen modal with animation
fullscreenButton8.addEventListener("click", () => {
  fullscreenImage8.src = imageToOpen8.src;
  fullscreenModal8.style.display = "block";
  setTimeout(() => {
    fullscreenModal8.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen8.addEventListener("click", () => {
  fullscreenModal8.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal8.style.display = "none";
  }, 300);
});