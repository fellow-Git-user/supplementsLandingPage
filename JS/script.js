const faqContainers = document.querySelectorAll(".faq__container");

faqContainers.forEach(container => {
    container.addEventListener("click", () => {
        container.classList.toggle("active");
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.getElementById('organicIngredientsCarousel');
    const carouselIndicators = document.querySelectorAll('#organicIngredientsCarousel + .product-details__bottom-section .carousel-indicators button');

    if (carouselElement && carouselIndicators.length > 0) {
        const carousel = new bootstrap.Carousel(carouselElement);

        carouselElement.addEventListener('slid.bs.carousel', function (event) {
            const activeIndex = event.to; 
            carouselIndicators.forEach(function(indicator) {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            });

            if (carouselIndicators[activeIndex]) {
                carouselIndicators[activeIndex].classList.add('active');
                carouselIndicators[activeIndex].setAttribute('aria-current', 'true');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIconContainer = document.querySelector('.logo-navbar__icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const desktopNav = document.querySelector('.desktop-nav'); // Reference to desktop nav

    if (hamburgerIconContainer && dropdownMenu && desktopNav) {
        hamburgerIconContainer.addEventListener('click', function() {
            // Toggle 'is-active' class on the icon for animation
            hamburgerIconContainer.classList.toggle('is-active');

            // Toggle display and 'is-active' class on the mobile dropdown menu
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
                dropdownMenu.classList.remove('is-active');
            } else {
                dropdownMenu.style.display = 'block';
                dropdownMenu.classList.add('is-active');
            }
        });

        // Optional: Close menu if a link is clicked
        dropdownMenu.querySelectorAll('.dropdown-menu__link').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerIconContainer.classList.remove('is-active');
                dropdownMenu.style.display = 'none';
                dropdownMenu.classList.remove('is-active');
            });
        });

        // Handle window resizing to ensure correct menu state
        // This is important for when the user resizes the browser
        window.addEventListener('resize', function() {
            if (window.matchMedia('(min-width: 768px)').matches) { // Assuming md breakpoint is 768px
                // If screen is desktop size, ensure mobile menu is hidden
                if (dropdownMenu.classList.contains('is-active')) {
                    hamburgerIconContainer.classList.remove('is-active');
                    dropdownMenu.classList.remove('is-active');
                    dropdownMenu.style.display = 'none'; // Ensure it's hidden from JS side
                }
            }
        });
    }
});