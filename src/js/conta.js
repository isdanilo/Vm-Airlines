// Função para pegar os dados relevantes da viagem do localStorage
function pegarDadosViagem() {
    const partida = localStorage.getItem('partida');
    const destino = localStorage.getItem('destino');
    const horario = localStorage.getItem('horario');
    const data = localStorage.getItem('data');
    const bagagem = localStorage.getItem('bagagem');
    const metodoPagamento = localStorage.getItem('metodoPagamento');
    const preco = localStorage.getItem('preco');
    
    // Set the values of the input fields
    document.getElementById('partida').value = partida;
    document.getElementById('destino').value = destino;
    document.getElementById('horario').value = horario;
    document.getElementById('data').value = data;
    document.getElementById('bagagem').value = bagagem;
    document.getElementById('metodo-pagamento').value = metodoPagamento;
    document.getElementById('preco').value = preco;
}

const email = localStorage.getItem("email")
const cpf = localStorage.getItem("cpf")
document.getElementById("email_usu").textContent = email
document.getElementById("cpf_usu").textContent = cpf

// Função para realizar o check-in
function realizarCheckin() {
    const codigoViagem = localStorage.getItem('codigoCheckin');

    const codigoInserido = prompt('Digite seu código da viagem:');

    if (codigoInserido === codigoViagem) {
        alert("Viagem Confirmada!")
        //window.location.href = 'index.html';
        document.getElementById('dados-viagem').style.display = 'block';
        pegarDadosViagem(); // Call the function to set the input field values
    } else {
        alert('Código da viagem incorreto. Tente novamente.');
    }
}

// Adiciona evento ao botão de Check-in
document.getElementById('checkin-btn').addEventListener('click', realizarCheckin);