prompt ("Com quantas cartas quer jogar?");

const tabuleiro = document.querySelector('.tabuleiro'); // busca a div mae

const passaros = [  // cada gif
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertiparrot',
    'tripletsparrot',
    'unicornparrot',
];

//criar uma nova carta

const createElement = (tag, className) => { 
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

const createCard = (passaro) => {

    const cards = createElement('div', 'cards');
    const front = createElement('div', 'front-face face');
    const back = createElement('div', 'back-face face');

    front.style.img = `(imagens/${passaro}.gif')`;
    back.img = 

    cards.appendChild(front);
    cards.appendChild(back);

    return cards;

}

// cria várias para começar o jogo
 
const game = () => { 
    passaros.forEach((passaro)  => {
        const cards = createCard(passaro);
        tabuleiro.appendChild(cards);
    });

    
}

game();