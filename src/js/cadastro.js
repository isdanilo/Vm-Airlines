document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o formulário e os campos
    const form = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');
    const passwordInput = document.getElementById('password');

    // Função para validar o CPF (apenas uma validação simples de formato)
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres especiais

        if (cpf.length !== 11) {
            return false; // CPF deve ter 11 dígitos
        }

        // Outras validações de CPF podem ser adicionadas aqui
        return true;
    }

    // Função para validar o email
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Função para exibir mensagens de erro
    function mostrarErro(mensagem) {
        alert(mensagem);
    }

    // Evento de envio do formulário
    form.addEventListener('submit', function(event) {
        // Impede o envio do formulário até as validações serem concluídas
        event.preventDefault();

        // Obtém os valores dos campos
        const emailValue = emailInput.value.trim();
        const cpfValue = cpfInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validação do email
        if (!validarEmail(emailValue)) {
            mostrarErro('Por favor, insira um email válido.');
            return;
        }

        // Validação do CPF
        if (!validarCPF(cpfValue)) {
            mostrarErro('Por favor, insira um CPF válido com 11 dígitos.');
            return;
        }

        // Validação da senha (mínimo de 6 caracteres)
        if (passwordValue.length < 6) {
            mostrarErro('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Se tudo estiver válido, armazena as variáveis no localStorage
        localStorage.setItem('email', emailValue);
        localStorage.setItem('cpf', cpfValue);
        localStorage.setItem('password', passwordValue);

        // Exibe uma mensagem confirmando o cadastro
        alert('Cadastro realizado com sucesso!');

        // Aqui, o formulário pode ser enviado ao servidor, se necessário:
        // form.submit();
    });
});
