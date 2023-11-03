// Get references to elements
const fullscreenButton6 = document.getElementById("fullscreenButton6");
const fullscreenModal6 = document.getElementById("fullscreenModal6");
const closeFullscreen6 = document.getElementById("closeFullscreen6");
const fullscreenImage6 = document.getElementById("fullscreenImage6");
const imageToOpen6 = document.getElementById("imageToOpen6");

// Function to open the fullscreen modal with animation
fullscreenButton6.addEventListener("click", () => {
  fullscreenImage6.src = imageToOpen6.src;
  fullscreenModal6.style.display = "block";
  setTimeout(() => {
    fullscreenModal6.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen6.addEventListener("click", () => {
  fullscreenModal6.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal6.style.display = "none";
  }, 300);
});