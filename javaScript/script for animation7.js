// Get references to elements
const fullscreenButton7 = document.getElementById("fullscreenButton7");
const fullscreenModal7 = document.getElementById("fullscreenModal7");
const closeFullscreen7 = document.getElementById("closeFullscreen7");
const fullscreenImage7 = document.getElementById("fullscreenImage7");
const imageToOpen7 = document.getElementById("imageToOpen7");

// Function to open the fullscreen modal with animation
fullscreenButton7.addEventListener("click", () => {
  fullscreenImage7.src = imageToOpen7.src;
  fullscreenModal7.style.display = "block";
  setTimeout(() => {
    fullscreenModal7.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen7.addEventListener("click", () => {
  fullscreenModal7.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal7.style.display = "none";
  }, 300);
});