const card_versions = [
    'imagens/bobrossparrot.gif',
    'imagens/explodyparrot.gif',
    'imagens/fiestaparrot.gif', 
    'imagens/metalparrot.gif',
    'imagens/revertitparrot', 
    'imagens/tripletsparrot',
    'imagens/tripletsparrot',
    'imagens/unicornparrot.gif'];

let number_of_cards=0;
let numer_of_plays=0;
let number_of_pairs=0;

const space_for_cards = document.querySelector('memory-game')


function comparador(){
    return Math.random() - 0.5;
}

function startGame(){
    number_of_cards = prompt('Escolha a quantidade de cartas que deseja jogar: de 4 a 14');
    while (isNaN(number_of_cards) || number_of_cards<4 || number_of_cards>14 || number_of_cards%2 !=0){
        startGame();
    }
    
}
startGame();