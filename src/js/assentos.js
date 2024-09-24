document.addEventListener('DOMContentLoaded', function () {
    const poltronas = document.querySelectorAll('.poltrona');
    const confirmarBtn = document.getElementById('confirmar');
    const excluirBtn = document.getElementById('excluir');
    let selecionadas = [];

    // Função para selecionar/deselecionar uma poltrona
    poltronas.forEach(poltrona => {
        poltrona.addEventListener('click', function () {
            const tipo = poltrona.getAttribute('data-tipo'); // Pega o tipo da poltrona

            // Se a poltrona já estiver selecionada, deseleciona
            if (selecionadas.includes(poltrona)) {
                poltrona.classList.remove('selecionada');
                selecionadas = selecionadas.filter(item => item !== poltrona);
            } else {
                // Caso contrário, seleciona
                poltrona.classList.add('selecionada');
                selecionadas.push(poltrona);
            }
        });
    });

    // Função para gerar a mensagem sobre os assentos selecionados
    function gerarMensagemSelecao() {
        const contador = selecionadas.length;

        // Contar o número de cada tipo de assento selecionado
        const tipos = {
            executiva: 0,
            'economica-plus': 0,
            economica: 0
        };

        selecionadas.forEach(poltrona => {
            const tipo = poltrona.getAttribute('data-tipo');
            tipos[tipo]++;
        });

        // Montar a mensagem exibindo apenas os tipos selecionados
        let mensagem = `Você selecionou ${contador} assento(s):\n`;
        
        if (tipos.executiva > 0) {
            mensagem += `- Executiva: ${tipos.executiva}\n`;
        }
        if (tipos['economica-plus'] > 0) {
            mensagem += `- Econômica Plus: ${tipos['economica-plus']}\n`;
        }
        if (tipos.economica > 0) {
            mensagem += `- Econômica: ${tipos.economica}\n`;
        }

        return { mensagem, tipos };
    }

    // Função para calcular o valor total
    function calcularPrecoTotal(tipos) {
        // Recupera o preço da viagem do localStorage
        let precoBase = parseFloat(localStorage.getItem('preco') || '0');

        // Preços por tipo de poltrona
        const precos = {
            executiva: 2500,
            'economica-plus': 1500,
            economica: 1000
        };

        // Inicializa o valor total com o preço base
        let total = precoBase;

        // Soma o valor das poltronas ao total
        total += tipos.executiva * precos.executiva;
        total += tipos['economica-plus'] * precos['economica-plus'];
        total += tipos.economica * precos.economica;

        return total;
    }

    // Função para armazenar a seleção de assentos no localStorage
    function armazenarSelecao(tipos) {
        localStorage.setItem('assentosSelecionados', JSON.stringify(tipos));
    }

    // Botão para confirmar assentos
    confirmarBtn.addEventListener('click', function () {
        if (selecionadas.length > 0) {
            const { mensagem, tipos } = gerarMensagemSelecao();
            const valorFinal = calcularPrecoTotal(tipos);

            // Armazenar os assentos e quantidade no localStorage
            armazenarSelecao(tipos);
            
            // Atualiza o preço total no localStorage
            localStorage.setItem('preco', valorFinal.toFixed(2));

            alert(`${mensagem}\nValor total da viagem: R$${valorFinal.toFixed(2)}`);
            window.location.href = "pagamento.html"
        } else {
            alert('Nenhum assento selecionado.');
        }
    });

    // Botão para excluir seleção
    excluirBtn.addEventListener('click', function () {
        selecionadas.forEach(poltrona => poltrona.classList.remove('selecionada'));
        selecionadas = [];

        // Calcular o valor total sem os assentos selecionados
        const tipos = gerarMensagemSelecao().tipos;
        const precoBase = parseFloat(localStorage.getItem('preco') || '0');
        const precos = {
            executiva: 2500,
            'economica-plus': 1500,
            economica: 1000
        };
        let total = precoBase;
        //total -= tipos.executiva * precos.executiva;
        //total -= tipos['economica-plus'] * precos['economica-plus'];
        //total -= tipos.economica * precos.economica;

        // Atualizar o preço total no localStorage
        localStorage.setItem('preco', total.toFixed(2));

        alert('Seleção excluída.');
        // Remover os assentos selecionados do localStorage
        localStorage.removeItem('assentosSelecionados');
    });
});