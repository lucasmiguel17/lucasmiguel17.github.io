// FADE IN E FADE OUT

function mostrarPagina() {
    document.body.classList.remove("fade-out");
    document.body.classList.add("loaded");
}

window.addEventListener("load", mostrarPagina);

window.addEventListener("pageshow", mostrarPagina);

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = this.href;

        if (!destino) return;

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = destino;
        }, 400);

    });

});
