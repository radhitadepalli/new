// Get references to elements
const fullscreenButton5 = document.getElementById("fullscreenButton5");
const fullscreenModal5 = document.getElementById("fullscreenModal5");
const closeFullscreen5 = document.getElementById("closeFullscreen5");
const fullscreenImage5 = document.getElementById("fullscreenImage5");
const imageToOpen5 = document.getElementById("imageToOpen5");

// Function to open the fullscreen modal with animation
fullscreenButton5.addEventListener("click", () => {
  fullscreenImage5.src = imageToOpen5.src;
  fullscreenModal5.style.display = "block";
  setTimeout(() => {
    fullscreenModal5.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen5.addEventListener("click", () => {
  fullscreenModal5.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal5.style.display = "none";
  }, 300);
});