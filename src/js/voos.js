function selecionarVoo(botao) {
    // Obtém as informações dos atributos data
    const partida = botao.getAttribute('data-partida');
    const destino = botao.getAttribute('data-destino');
    const horario = botao.getAttribute('data-horario');
    const preco = botao.getAttribute('data-preco');
    
    // Armazena os valores no localStorage
    localStorage.setItem('partida', partida);
    localStorage.setItem('destino', destino);
    localStorage.setItem('horario', horario);
    localStorage.setItem('preco', preco);
    
    // Mensagem de confirmação no console
    console.log('Voo selecionado:', { partida, destino, horario, preco });
}

// Obtém a referência ao botão "Próximo"
const btnProx = document.querySelector(".button-18");

// Adiciona o eventListener ao botão "Próximo"
btnProx.addEventListener('click', function() {
    // Redireciona para a página passagens.html
    window.location.href = "passagens.html";

    
});
