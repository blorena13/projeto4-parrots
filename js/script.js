const pegarNCartas = QuantidadeDeCartas();

let numero;

function QuantidadeDeCartas(){
    let numero = parseInt(prompt ("Com quantas cartas quer jogar?"));
    while(isNaN(numero)|| numero <4 || numero > 14 || (numero % 2) === 1){
        numero = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
    return numero;

} // ta dando certo! só abre se for número par



const tabuleiro = document.querySelector('.tabuleiro'); // busca a div mae

const passaros = [  // cada gif
    'parrot1',
    'parrot2',
    'parrot3',
    'parrot4',
    'parrot5',
    'parrot6',
    'parrot7',
];

let contador = 7;

function adicionarPassaros(){
    const novoPassaro = document.querySelector('cards');

    passaros.push(novoPassaro.value);
    const main = document.querySelector('main');

    main.innerHTML = main.innerHTML + ` 
    <div class="cards">
    <div class="front-face face">
    <img src= "${novoPassaro.value}.gif"/>
    </div>

    <div class="back-face face">
    <img src= "imagens/back.png"/>
    </div>`
}

function adicionarPassarosNoDOM(){

    const main = document.querySelector('main');

    for(let indice = 0; indice < passaros.length; indice++){
        let template = ` 
        <div class="cards">
        <div class="front-face face">
        <img src= "${passaros[indice]}.gif"/>
        </div>
    
        <div class="back-face face">
        <img src= "imagens/back.png"/>
        </div>
        `;
        main.innerHTML = main.innerHTML + template;
    }
}

adicionarPassarosNoDOM();
//criar uma nova carta


// cria várias para começar o jogo
 

const game = () => { 

    const duplicarPassaros = [ ...passaros, ...passaros];

    const embaralhar = duplicarPassaros.sort();




    duplicarPassaros.forEach((passaro)  => {
        const cards = adicionarPassaros(passaro);
        tabuleiro.appendChild(cards);
    });

    
}

game();