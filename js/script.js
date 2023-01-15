const pegarNCartas = QuantidadeDeCartas();

let numero;

function QuantidadeDeCartas(){
    let numero = parseInt(prompt ("Com quantas cartas quer jogar?"));
    while(isNaN(numero)|| numero <4 || numero > 14 || (numero % 2) === 1){
        numero = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
    return numero;

} 


const tabuleiro = document.querySelector('.tabuleiro'); // busca a div mae

const passaros = [  // cada gif
    'imagens/parrot1.gif',
    'imagens/parrot1.gif',
    'imagens/parrot2.gif',
    'imagens/parrot2.gif',
    'imagens/parrot3.gif',
    'imagens/parrot3.gif',
    'imagens/parrot4.gif',
    'imagens/parrot4.gif',
    'imagens/parrot5.gif',
    'imagens/parrot5.gif',
    'imagens/parrot6.gif',
    'imagens/parrot6.gif',
    'imagens/parrot7.gif',
    'imagens/parrot7.gif',
];

// let indice = numero;

function adicionarPassaros(){
    const novoPassaro = document.querySelector('cards');

    passaros.push(novoPassaro.value);
    const main = document.querySelector('main');

    main.innerHTML = main.innerHTML + ` 
    <div data-test="card" class="cards"  onclick="clicarCards(this)">
    <div class="front-face face">
    <img data-test="face-up-image src= "${novoPassaro.value}"/>
    </div>

    <div class="back-face face" >
    <img data-test="face-down-image" src= "./imagens/back.png"/>
    </div>`

}

function adicionarPassarosNoDOM(passaro){

    const main = document.querySelector('main');
    
    passaros.sort(comparador);

    for(let i = 0; i < pegarNCartas; i++){
        let template = ` 
        <div data-test="card" class="cards" onclick="clicarCards(this)" >
        <div class="front-face face" >
        <img data-test="face-up-image" src= "${passaros[i]}"/>
        </div>

    
        <div class="back-face face">
        <img data-test="face-down-image" src= "./imagens/back.png"/>
        </div>
        </div>
        `;
        main.innerHTML = main.innerHTML + template;
    }


}

function comparador() {
    return Math.random() - 0.5;  //embaralhar

}

adicionarPassarosNoDOM();
//criar uma nova carta

function MudarNomeCarta(){
const carta = document.querySelector('.cards');
carta.setAttribute('data-passaro', passaro);
}

let firstCard = '';
let secondCard = '';

function VerificarCartasIguais(){


}

 
function clicarCards(cartaClicada) {
    //revela carta clicada 
    cartaClicada.className.includes('reveal-card');

    if(firstCard === ''){
        cartaClicada.classList.add('reveal-card');
        firstCard =  cartaClicada;
    } else if (secondCard === '') {
        cartaClicada.classList.add('reveal-card');
        secondCard = cartaClicada;

        VerificarCartasIguais();

    }

}

// começo jogo (falta ainda)
const game = () => { 


    

    
}

game();