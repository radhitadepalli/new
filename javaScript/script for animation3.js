// Get references to elements
const fullscreenButton = document.getElementById("fullscreenButton3");
const fullscreenModal = document.getElementById("fullscreenModal3");
const closeFullscreen = document.getElementById("closeFullscreen3");
const fullscreenImage = document.getElementById("fullscreenImage3");
const imageToOpen = document.getElementById("imageToOpen3");

// Function to open the fullscreen modal with animation
fullscreenButton.addEventListener("click", () => {
  fullscreenImage.src = imageToOpen.src;
  fullscreenModal.style.display = "block";
  setTimeout(() => {
    fullscreenModal.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen.addEventListener("click", () => {
  fullscreenModal.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal.style.display = "none";
  }, 300);
});