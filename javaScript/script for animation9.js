// Get references to elements
const fullscreenButton9 = document.getElementById("fullscreenButton9");
const fullscreenModal9 = document.getElementById("fullscreenModal9");
const closeFullscreen9 = document.getElementById("closeFullscreen9");
const fullscreenImage9 = document.getElementById("fullscreenImage9");
const imageToOpen9 = document.getElementById("imageToOpen9");

// Function to open the fullscreen modal with animation
fullscreenButton9.addEventListener("click", () => {
  fullscreenImage9.src = imageToOpen9.src;
  fullscreenModal9.style.display = "block";
  setTimeout(() => {
    fullscreenModal9.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen9.addEventListener("click", () => {
  fullscreenModal9.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal9.style.display = "none";
  }, 300);
});