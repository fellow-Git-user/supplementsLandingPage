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