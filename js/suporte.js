document.getElementById("form-avaliacao").addEventListener("submit", function(event) {
    
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("nova-review").value;

    alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre "${motivo}" foi enviada com sucesso.`);
    window.location.href = "../index.html";

    this.reset();
});
