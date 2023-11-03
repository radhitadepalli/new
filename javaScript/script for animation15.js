// Get references to elements
const fullscreenButton15 = document.getElementById("fullscreenButton15");
const fullscreenModal15 = document.getElementById("fullscreenModal15");
const closeFullscreen15 = document.getElementById("closeFullscreen15");
const fullscreenImage15 = document.getElementById("fullscreenImage15");
const imageToOpen15 = document.getElementById("imageToOpen15");

// Function to open the fullscreen modal with animation
fullscreenButton15.addEventListener("click", () => {
  fullscreenImage15.src = imageToOpen15.src;
  fullscreenModal15.style.display = "block";
  setTimeout(() => {
    fullscreenModal15.style.opacity = "1";
  }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen15.addEventListener("click", () => {
  fullscreenModal15.style.opacity = "0";
  setTimeout(() => {
    fullscreenModal15.style.display = "none";
  }, 300);
});