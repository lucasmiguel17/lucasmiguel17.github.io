// FADE IN E FADE OUT

window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = this.href;

        if (!destino) return;

        e.preventDefault();

        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = destino;
        }, 400);

    });

});
