
const parentButton = document.getElementById('parentButton');
const crusader = document.querySelector('.crusader');
const subButtons = document.querySelectorAll('.sub-button');

let timeoutId;

function closeSubButtons() {
    crusader.classList.remove('active');
}

function closeAfterTimeout() {
    timeoutId = setTimeout(closeSubButtons, 1000); // Close after 0.5 seconds
}

parentButton.addEventListener('click', (event) => {
    event.stopPropagation();
    crusader.classList.add('active');
    clearTimeout(timeoutId);
    closeAfterTimeout();
});

crusader.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
});

subButtons.forEach((subButton) => {
    subButton.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
    });
});

document.addEventListener('mouseover', () => {
    if (crusader.classList.contains('active')) {
        closeAfterTimeout();
    }
});