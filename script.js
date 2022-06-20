
let number_of_cards;
let quantidade_de_cartas;
let div_de_cartas = document.querySelector('.memory-game');
let card_versions = [
    'imagens/bobrossparrot.gif',
    'imagens/explodyparrot.gif',
    'imagens/fiestaparrot.gif', 
    'imagens/metalparrot.gif',
    'imagens/revertitparrot.gif', 
    'imagens/tripletsparrot.gif',
    'imagens/tripletsparrot.gif',
    'imagens/unicornparrot.gif'];

startGame();

function comparador(){
    return Math.random() - 0.5;
}

function startGame(){
    number_of_cards = prompt('Escolha a quantidade de cartas que deseja jogar: de 4 a 14');
    while (isNaN(number_of_cards) || number_of_cards<4 || number_of_cards>14 || number_of_cards%2 !=0){
        startGame();
    } 
    card_versions= card_versions.sort(comparador);
    for (let i=0; i<number_of_cards/2;i++) {
        div_de_cartas.innerHTML +=`
        <div class="card" onclick="selecionaCarta(this)">
        <div class="front background"><img src="imagens/front.png"/></div>
        <div class="back background"><img src="${card_versions[i]}"/></div>
        </div>
        <div class="card" onclick="selecionaCarta(this)">
        <div class="front background"><img src="imagens/front.png"/></div>
        <div class="back background"><img src="${card_versions[i]}"/></div>
        </div>`
    }
    quantidade_de_cartas = document.querySelectorAll('.card');
    misturarCartas();
}
function misturarCartas(){
    let cartas_resultantes = [];
    for (let i =0; i <quantidade_de_cartas.length;i++){
        cartas_resultantes.push(quantidade_de_cartas[i].innerHTML);
        cartas_resultantes= cartas_resultantes.sort(comparador);
    }
    for (let j= 0; j<quantidade_de_cartas.length;j++){
        quantidade_de_cartas[j].innerHTML = cartas_resultantes[j];
    }
}
const virarCarta= function(carta1,carta2){
    carta1.querySelector('.front').classList.toggle('virarprafrente');
    carta1.querySelector('.back').classList.toggle('virarpratras');
    carta2.querySelector('front').classList.toggle('virarprafrente');
    carta2.querySelector('.back').classList.toggle('virarpratras');
    primeira_escolhida= undefined;
    segunda_escolhida = undefined;
}
