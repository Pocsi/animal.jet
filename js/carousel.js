document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = carousel.querySelectorAll('img');
    
    let currentIndex = 0;
    const totalImages = images.length;

    // Set initial position
    updateCarousel();

    // Add click event listeners to buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    // Function to update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);
}); 