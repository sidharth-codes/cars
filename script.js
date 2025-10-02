// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Get total number of items from the CSS variable for clean separation
    const totalItems = parseInt(getComputedStyle(slider).getPropertyValue('--quantity'));
    let currentRotation = 0;
    const anglePerItem = 360 / totalItems;

    // Function to update carousel rotation via CSS variable
    function rotateCarousel() {
        slider.style.setProperty('--carousel-rotation', `${currentRotation}deg`);
    }})

