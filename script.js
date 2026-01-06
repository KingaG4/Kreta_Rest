document.getElementById("reservationForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    // pokaż kreta i dymek
    const box = document.getElementById("successBox");
    box.style.display = "flex";

    // reset formularza
    this.reset();

    // po 10 sekundach ukryj z fade
    setTimeout(() => {
        box.classList.remove("show");
        // dodatkowo po animacji opacity ustaw display:none
        setTimeout(() => box.style.display = "none", 1000); // 500ms = czas fade-out
    }, 3000); // <- czas widoczności 10 sekund
});
