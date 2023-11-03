// Get references to elements
const fullscreenButton11 = document.getElementById("fullscreenButton11");
const fullscreenModal11 = document.getElementById("fullscreenModal11");
const closeFullscreen11 = document.getElementById("closeFullscreen11");
const fullscreenImage11 = document.getElementById("fullscreenImage11");
const imageToOpen11 = document.getElementById("imageToOpen11");

// Function to open the fullscreen modal with animation
fullscreenButton11.addEventListener("click", () => {
  fullscreenImage11.src = imageToOpen11.src;
  fullscreenModal11.style.display = "block";
  setTimeout(() => {
    fullscreenModal11.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen11.addEventListener("click", () => {
  fullscreenModal1.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal11.style.display = "none";
  }, 300);
});