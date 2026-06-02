// ESTRELAS

const gruposDeEstrelas = document.querySelectorAll(".stars");

gruposDeEstrelas.forEach(grupo => {

    const estrelas = grupo.querySelectorAll("span");

    estrelas.forEach((estrela, indice) => {

        estrela.addEventListener("click", () => {

            estrelas.forEach(e => {
                e.classList.remove("ativa");
            });

            for (let i = 0; i <= indice; i++) {
                estrelas[i].classList.add("ativa");
            }

        });

    });

});
