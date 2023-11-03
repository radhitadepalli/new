// Get references to elements
const fullscreenButton14 = document.getElementById("fullscreenButton14");
const fullscreenModal14 = document.getElementById("fullscreenModal14");
const closeFullscreen14 = document.getElementById("closeFullscreen14");
const fullscreenImage14 = document.getElementById("fullscreenImage14");
const imageToOpen14 = document.getElementById("imageToOpen14");

// Function to open the fullscreen modal with animation
fullscreenButton14.addEventListener("click", () => {
  fullscreenImage14.src = imageToOpen14.src;
  fullscreenModal14.style.display = "block";
  setTimeout(() => {
    fullscreenModal14.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen14.addEventListener("click", () => {
  fullscreenModal14.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal14.style.display = "none";
  }, 300);
});