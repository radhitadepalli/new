// Get references to elements
const fullscreenButton13 = document.getElementById("fullscreenButton13");
const fullscreenModal13 = document.getElementById("fullscreenModal13");
const closeFullscreen13 = document.getElementById("closeFullscreen13");
const fullscreenImage13 = document.getElementById("fullscreenImage13");
const imageToOpen13 = document.getElementById("imageToOpen13");

// Function to open the fullscreen modal with animation
fullscreenButton13.addEventListener("click", () => {
  fullscreenImage13.src = imageToOpen13.src;
  fullscreenModal13.style.display = "block";
  setTimeout(() => {
    fullscreenModal13.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen13.addEventListener("click", () => {
  fullscreenModal13.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal13.style.display = "none";
  }, 300);
});