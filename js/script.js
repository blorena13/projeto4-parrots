const pegarNCartas = QuantidadeDeCartas();

let numero;

let clique = 0;


function QuantidadeDeCartas(){
    let numero = parseInt(prompt ("Com quantas cartas quer jogar?"));
    while(isNaN(numero)|| numero <4 || numero > 14 || (numero % 2) === 1){
        numero = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
    return numero;

} 



const tabuleiro = document.querySelector('.tabuleiro'); // busca a div mae

const passarosPossiveis = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
const passaroCard = [];


const passaros = [  // cada gif
    './imagens/1.gif', 
    './imagens/2.gif', 
    './imagens/3.gif', 
    './imagens/4.gif', 
    './imagens/5.gif', 
    './imagens/6.gif', 
    './imagens/7.gif', 
];


function adicionarPassarosNoDOM(passaro){

    const main = document.querySelector('main');

    for(let i  = 0; i < pegarNCartas; i++){
        passaroCard[i] = passarosPossiveis [i];
    }

    passaroCard.sort(comparador);


    for(let i = 0; i < pegarNCartas; i++){
        let template = ` 
        <div data-test="card" class="cards" onclick="clicarCards(this)" >

        <div class="front-face face" >
        <img data-test="face-up-image" src= "./imagens/${passaroCard[i]}.gif"/>
        </div>

    
        <div class="back-face face">
        <img data-test="face-down-image" src= "./imagens/back.png"/>
        </div>
        </div>
        `;
        
        main.innerHTML = main.innerHTML + template;

    }
    

}

adicionarPassarosNoDOM();
//criar uma nova carta



function comparador() {
    return Math.random() - 0.5;  //embaralhar

}



let firstCard = '';
let secondCard = '';

function VerificarCartasIguais(){
    const primeiraCarta = firstCard.querySelector('img').src;
    const segundaCarta = secondCard.querySelector('img').src;

    if (primeiraCarta === segundaCarta){
        firstCard.classList.add('front-face');
        secondCard.classList.add('front-face');

            firstCard = '';
            secondCard = '';

            

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

            

        }, 500);
    }
    finalgame();
}


 
function clicarCards(cartaClicada) {
    //revela carta clicada 
    clique = clique + 1;

    if(firstCard === ''){
        cartaClicada.classList.add('reveal-card');
        firstCard =  cartaClicada;
    } else if (secondCard === '') {
        cartaClicada.classList.add('reveal-card');
        secondCard = cartaClicada;

        
    }
    VerificarCartasIguais();


}



function finalgame(){
    let cardFinal = document.querySelectorAll('.reveal-card');
    if (cardFinal.length === pegarNCartas) {
        setTimeout(() => {
            alert(`Você ganhou em ${clique} jogadas!`);
        }, 500);
        
    }

}

