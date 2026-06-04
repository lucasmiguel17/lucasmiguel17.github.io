// Fade In
window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 10);

});

// Fade Out
const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = this.href;

        if (!destino) return;

        e.preventDefault();

        document.body.classList.remove("loaded");
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = destino;
        }, 400);

    });

});
