let metodoPagamento = '';

        // Função para selecionar o método de pagamento e armazenar no localStorage (sem notificação)
        function selecionarMetodo(metodo) {
            metodoPagamento = metodo;
            localStorage.setItem('metodoPagamento', metodo);
        }

        // Função para gerar um código aleatório de 5 dígitos
        function gerarCodigo() {
            return Math.floor(10000 + Math.random() * 90000); // Gera um número entre 10000 e 99999
        }

        // Adiciona um evento ao botão de pagamento
        document.getElementById('pagarBtn').addEventListener('click', function() {
            if (metodoPagamento) {
                // Gera um código aleatório de 5 dígitos
                const codigoCheckin = gerarCodigo();
                
                // Armazena o código no localStorage
                localStorage.setItem('codigoCheckin', codigoCheckin);
                
                // Exibe o código para o usuário em um alert
                alert(`Pagamento realizado com sucesso! Seu código de check-in é: ${codigoCheckin}`);
                window.location.href = "conta.html";
            } else {
                alert('Por favor, selecione um método de pagamento antes de continuar.');
            }
        });