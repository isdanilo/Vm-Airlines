document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o formulário de login e os campos
    const form = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Função para exibir mensagens de erro
    function mostrarErro(mensagem) {
        alert(mensagem);
    }

    // Evento de envio do formulário
    form.addEventListener('submit', function(event) {
        // Impede o envio do formulário até as validações serem concluídas
        event.preventDefault();

        // Obtém os valores inseridos pelo usuário
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Recupera os dados do cadastro armazenados no localStorage
        const emailCadastrado = localStorage.getItem('email');
        const passwordCadastrado = localStorage.getItem('password');

        // Verifica se o email e a senha correspondem ao que está no localStorage
        if (!emailCadastrado || !passwordCadastrado) {
            mostrarErro('Nenhum usuário cadastrado encontrado. Por favor, cadastre-se.');
            return;
        }

        if (emailValue === emailCadastrado && passwordValue === passwordCadastrado) {
            // Login bem-sucedido
            alert('Login realizado com sucesso!');
            // Redirecionar para a página principal ou outra página após o login
            window.location.href = '../html/conta.html';
        } else {
            // Login falhou
            mostrarErro('Email ou senha incorretos. Tente novamente.');
        }
    });
});
