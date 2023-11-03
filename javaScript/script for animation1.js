// Get references to elements
const fullscreenButton1 = document.getElementById("fullscreenButton1");
const fullscreenModal1 = document.getElementById("fullscreenModal1");
const closeFullscreen1 = document.getElementById("closeFullscreen1");
const fullscreenImage1 = document.getElementById("fullscreenImage1");
const imageToOpen1 = document.getElementById("imageToOpen1");

// Function to open the fullscreen modal with animation
fullscreenButton1.addEventListener("click", () => {
  fullscreenImage1.src = imageToOpen1.src;
  fullscreenModal1.style.display = "block";
  setTimeout(() => {
    fullscreenModal1.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen1.addEventListener("click", () => {
  fullscreenModal1.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal1.style.display = "none";
  }, 300);
});