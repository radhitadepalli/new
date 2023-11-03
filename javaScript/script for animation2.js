// Get references to elements
const fullscreenButton2 = document.getElementById("fullscreenButton2");
const fullscreenModal2 = document.getElementById("fullscreenModal2");
const closeFullscreen2 = document.getElementById("closeFullscreen2");
const fullscreenImage2 = document.getElementById("fullscreenImage2");
const imageToOpen2 = document.getElementById("imageToOpen2");

// Function to open the fullscreen modal with animation
fullscreenButton2.addEventListener("click", () => {
    fullscreenImage2.src = imageToOpen2.src;
    fullscreenModal2.style.display = "block";
    setTimeout(() => {
        fullscreenModal2.style.opacity = "1";
    }, 10);
});

// Function to close the fullscreen modal with animation
closeFullscreen2.addEventListener("click", () => {
    fullscreenModal2.style.opacity = "0";
    setTimeout(() => {
        fullscreenModal2.style.display = "none";
    }, 300);
});