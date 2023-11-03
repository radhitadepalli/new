// Get references to elements
const fullscreenButton4 = document.getElementById("fullscreenButton4");
const fullscreenModal4 = document.getElementById("fullscreenModal4");
const closeFullscreen4 = document.getElementById("closeFullscreen4");
const fullscreenImage4 = document.getElementById("fullscreenImage4");
const imageToOpen4 = document.getElementById("imageToOpen4");

// Function to open the fullscreen modal with animation
fullscreenButton4.addEventListener("click", () => {
  fullscreenImage4.src = imageToOpen4.src;
  fullscreenModal4.style.display = "block";
  setTimeout(() => {
    fullscreenModal4.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen4.addEventListener("click", () => {
  fullscreenModal4.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal4.style.display = "none";
  }, 300);
});