const faqContainers = document.querySelectorAll(".faq__container");

faqContainers.forEach(container => {
    container.addEventListener("click", () => {
        container.classList.toggle("active");
    })
})

