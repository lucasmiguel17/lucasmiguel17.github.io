// FUNCIONAMENTO DA TRANSIÇÃO

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = this.href;

        if (destino) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = destino;
            }, 300);

        }

    });

});
