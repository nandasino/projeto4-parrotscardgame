const card_versions = [
    'imagens/bobrossparrot.gif',
    'imagens/explodyparrot.gif',
    'imagens/fiestaparrot.gif', 
    'imagens/metalparrot.gif',
    'imagens/revertitparrot.gif', 
    'imagens/tripletsparrot.gif',
    'imagens/tripletsparrot.gif',
    'imagens/unicornparrot.gif'];

let number_of_cards=0;
let numer_of_plays=0;
let number_of_pairs=0;

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
        document.querySelector('memory-game').innerHTML +=`
        <div class="card">
        <div class="front background"><img src="imagens/front.png"/></div>
        <div class="back background"><${card_versions[i]}></div>
        </div>
        <div class="card">
        <div class="front background"><img src="imagens/front.png"/></div>
        <div class="back background"><${card_versions[i]}></div>
        </div>`
    }
}
