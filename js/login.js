const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    alert("Login realizado com sucesso!");

});
