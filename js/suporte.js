document.getElementById("form-avaliacao").addEventListener("submit", function(event) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault();

    // Pega os valores digitados pelo usuário
    const nome = document.getElementById("nome").value;
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("nova-review").value;

    // Mensagem de sucesso
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre "${motivo}" foi enviada com sucesso.`);
    window.location.href = "../index.html";

    // Limpa o formulário após o envio
    this.reset();
});
