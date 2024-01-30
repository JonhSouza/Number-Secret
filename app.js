let numerosSorteados = [];
let numeroMax = 10;
let tentativas = 1;
let numeroSecreto = numeroAleatorio();

mensagemInicial();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

const inputEle = document.getElementById('enter');
inputEle.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        verificarChute();
    }
});


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        exibirTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou com o número de ${tentativas} ${palavraTentativa}!`
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(numerosSorteados);
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('enter').setAttribute('disabled', true);

    } else {
        if (chute > numeroSecreto && chute != '') {
            exibirTexto('p', 'Você errou! O número secreto é menor!');
            tentativas++

        } else if (chute < numeroSecreto && chute != '') {
            exibirTexto('p', 'Você errou! O número secreto é maior!');
            tentativas++
        } else {
            exibirTexto('p', 'Digite um número correspondente');
        }
        limparCampo();
    }

}

function numeroAleatorio() {
    let numeroSelecionado = parseInt(Math.random() * numeroMax + 1);

    if (numerosSorteados.length == numeroMax) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroSelecionado)) {
        return numeroAleatorio();
    } else {
        numerosSorteados.push(numeroSelecionado);
        return numeroSelecionado;
    }

}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('enter').removeAttribute('disabled');
    mensagemInicial();
}

function mensagemInicial() {

    exibirTexto('h1', 'Number Secret');
    exibirTexto('p', `Escolha um número entre 1 a ${numeroMax}`);
}



