document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = Array.from(carousel.querySelectorAll('img'));
    
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
        images.forEach((img, index) => {
            img.classList.remove('active', 'prev', 'next');
            
            if (index === currentIndex) {
                img.classList.add('active');
            } else if (index === (currentIndex - 1 + totalImages) % totalImages) {
                img.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalImages) {
                img.classList.add('next');
            }
        });
    }

    // Add click events to images
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);
}); 