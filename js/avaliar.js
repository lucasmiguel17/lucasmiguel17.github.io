// TÍTULO DA PÁGINA

const parametros = new URLSearchParams(window.location.search);

const produto = parametros.get("produto");

const titulo = document.getElementById("titulo-avaliacao");

if (produto) {
    titulo.textContent = `Avaliando: ${produto}`;
} else {
    titulo.textContent = "Nova avaliação";
}

// AVALIAÇÃO

const estrelas = document.querySelectorAll(".estrela");
const notaTexto = document.getElementById("nota-escolhida");
const notaInput = document.getElementById("nota");

let notaAtual = 0;

estrelas.forEach((estrela, indice) => {

    estrela.addEventListener("click", () => {

        notaAtual = indice + 1;

        notaInput.value = notaAtual;

        notaTexto.textContent = `Nota: ${notaAtual}/5`;

        estrelas.forEach((e, i) => {

            if (i < notaAtual) {
                e.classList.add("ativa");
            } else {
                e.classList.remove("ativa");
            }

        });

    });

});

// ENVIAR AVALIAÇÃO

const formulario = document.getElementById("form-avaliacao");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    if (notaAtual === 0) {
        alert("Escolha uma nota antes de enviar.");
        return;
    }

    alert("Avaliação bem-sucedida!");
    window.location.href = "index.html";

});

// CONTAGEM DE CARACTERES

const review = document.getElementById("nova-review");
const contador = document.getElementById("contador");

review.addEventListener("input", () => {

    contador.textContent =
        `${review.value.length}/500 caracteres`;
    
    if (quantidade > 450) {
        contador.style.color = "orangered";
    }

    if (quantidade >= 500) {
        contador.style.color = "red";
    }

});
