document.getElementById('proximoBtn').addEventListener('click', function() {
    // Obtém os valores selecionados
    const partida = document.getElementById('partida').value;
    const chegada = document.getElementById('chegada').value;
    const data = document.getElementById('data').value;
    const bagagem = document.getElementById('bagagem').value;

    // Verifica se a data foi selecionada
    if (!data) {
        alert('Por favor, selecione uma data.');
        return; // Impede o redirecionamento se a data não foi escolhida
    }

    // Converte a data selecionada e a data atual para objetos Date
    const dataSelecionada = new Date(data);
    const dataAtual = new Date();

    // Verifica se a data selecionada é anterior à data atual
    if (dataSelecionada < dataAtual.setHours(0, 0, 0, 0)) {
        alert('A data selecionada não pode ser anterior à data atual.');
        return; // Impede o armazenamento e redirecionamento se a data for inválida
    }

    // Se a data for válida, armazena no localStorage
    localStorage.setItem('partida', partida);
    localStorage.setItem('chegada', chegada);
    localStorage.setItem('data', data);
    localStorage.setItem('bagagem', bagagem);

    // Recupera o preço atual do localStorage
    let preco = parseFloat(localStorage.getItem('preco') || '0');

    // Verifica o tipo de bagagem e adiciona R$100 se for acima de 10kg
    if (bagagem === 'Mala acima de 10Kg') {
        preco += 100;
        alert('O preço aumentou em R$100 devido à bagagem acima de 10kg.');
    }

    // Atualiza o preço no localStorage
    localStorage.setItem('preco', preco.toFixed(2));

    // Avisa que as informações foram armazenadas e avança para o próximo passo
    alert('Informações salvas com sucesso!');
    window.location.href = "poltronas.html";
});
