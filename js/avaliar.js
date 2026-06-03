// TÍTULO DA PÁGINA

const parametros = new URLSearchParams(window.location.search);

const produto = parametros.get("produto");

const titulo = document.getElementById("titulo-avaliacao");

if (produto) {
    titulo.textContent = `Avaliando: ${produto}`;
} else {
    titulo.textContent = "Nova avaliação";
}
