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

  const email = document.getElementById("email").value;

  //SO ACEITA EMAIL
  
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailValido.test(email)) {
      alert("Digite um e-mail válido.");
      return;
  }
  
  });
