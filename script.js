document.getElementById("reservationForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    // pokaż kreta i dymek
    const box = document.getElementById("successBox");
    box.style.display = "flex";

    // reset formularza
    this.reset();

    // opcjonalnie: schowaj po 6 sekundach
    setTimeout(() => {
        box.style.display = "none";
    }, 6000);
});
