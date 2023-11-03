// Get references to elements
const fullscreenButton16 = document.getElementById("fullscreenButton16");
const fullscreenModal16 = document.getElementById("fullscreenModal16");
const closeFullscreen16 = document.getElementById("closeFullscreen16");
const fullscreenImage16 = document.getElementById("fullscreenImage16");
const imageToOpen16 = document.getElementById("imageToOpen16");

// Function to open the fullscreen modal with animation
fullscreenButton16.addEventListener("click", () => {
  fullscreenImage16.src = imageToOpen16.src;
  fullscreenModal16.style.display = "block";
  setTimeout(() => {
    fullscreenModal16.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen16.addEventListener("click", () => {
  fullscreenModal16.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal16.style.display = "none";
  }, 300);
});