const celula = document.querySelectorAll('.celula');
const PlacarJogador1Span = document.querySelector('.PlacarJogador1');
const PlacarJogador2Span = document.querySelector('.PlacarJogador2');
const botaoLimpar = document.querySelector('.limpar');
const botaoRecomecar = document.querySelector('.recomecar');

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let jogador1 = [];
let jogador2 = [];

let placar = {
    jogador1: 0,
    jogador2: 0,
}

let aux = true;

for(let i = 0; i < celula.length; i++){
    celula[i].addEventListener('click', () => {
        if(aux === true){
            adicionarCelulaJogador1(i)
        } else {
            adicionarCelulaJogador2(i)
        }
        verificarVencedor();
    })
}

function adicionarCelulaJogador1(i){
    celula[i].innerHTML = "X";
    jogador1.push(i);
    aux = false;
}

function adicionarCelulaJogador2(i){
    celula[i].innerHTML = "O";
    jogador2.push(i);
    aux = true;
}

function verificarVencedor(){
    combinacoesVitoria.find((item) => {
        if(item.filter((i) => jogador1.includes(i)).length === 3){
            alert("Jogador 1 venceu!");
            placar.jogador1++;
            pegarPlacar();
            limparCampo();
            return item;
        } else if(item.filter((i) => jogador2.includes(i)).length === 3){
            alert("Jogador 2 venceu!");
            placar.jogador2++;
            pegarPlacar();
            limparCampo();
        }
        return
    })
}

function pegarPlacar(){
    PlacarJogador1Span.innerHTML = "Jogador 1: " + placar.jogador1;
    PlacarJogador2Span.innerHTML = "Jogador 2: " + placar.jogador2;
}
pegarPlacar();

function limparCampo(){
    for(let i = 0; i < celula.length; i++){
        celula[i].innerHTML = "";
    }
    jogador1 = [];
    jogador2 = [];
    aux = true;
}

function limparPlacar(){
    placar.jogador1 = 0;
    placar.jogador2 = 0;

    PlacarJogador1Span.innerHTML = "Jogador 1: " + placar.jogador1;
    PlacarJogador2Span.innerHTML = "Jogador 2: " + placar.jogador2;
}

botaoLimpar.addEventListener('click', () => {
    limparCampo();
})

botaoRecomecar.addEventListener('click', () => {
    limparCampo();
    limparPlacar();
})