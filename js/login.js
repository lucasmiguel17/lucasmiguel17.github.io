// =========================
// LOGIN
// =========================

// Pega o formulário do HTML
const formulario = document.querySelector("form");

// Escuta quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

  // Impede a página de recarregar
  event.preventDefault();

  // Mensagem de sucesso
  alert("Login realizado com sucesso!");

});
