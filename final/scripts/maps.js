const buttons = document.querySelectorAll(".map-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const card = button.closest(".map-card");
        const images = card.querySelector(".map-images");

        images.classList.toggle("open");

        if (images.classList.contains("open")) {
            button.textContent = "Hide Map Images";
        } else {
            button.textContent = "View Map Images";
        }

    });
});
