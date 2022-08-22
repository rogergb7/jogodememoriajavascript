const cardsArray = [
  {
    name: 'beedrill',
    img: 'https://i.ibb.co/v1P4QXG/Beedrill.png',
  },
  {
    name: 'bulbasaur',
    img: 'https://i.ibb.co/qBFD9R9/Bulbasaur.png',
  },
  {
    name: 'caterpie',
    img: 'https://i.ibb.co/GdJ580b/Caterpie.png',
  },
  {
    name: 'charmander',
    img: 'https://i.ibb.co/zfF28mS/Charmander.png',
  },
  {
    name: 'jigglypuff',
    img: 'https://i.ibb.co/9HTH7d3/Jigglypuff.png',
  },
  {
    name: 'meowth',
    img: 'https://i.ibb.co/X8Z9Xz2/Meowth.png',
  },
  {
    name: 'pidgey',
    img: 'https://i.ibb.co/RNt4vtz/Pidgey.png',
  },
  {
    name: 'pikachu',
    img: 'https://i.ibb.co/DzVsdLN/Pikachu.png',
  },
  {
    name: 'Psyduck',
    img: 'https://i.ibb.co/JzqpYn1/Psyduck.png',
  },
  {
    name: 'Squirtle',
    img: 'https://i.ibb.co/MVW7ch5/Squirtle.png',
  },
  {
    name: 'Vulpix',
    img: 'https://i.ibb.co/CVBg8tZ/Vulpix.png',
  },
  {
    name: 'Weedle',
    img: 'https://i.ibb.co/yWcbCnk/Weedle.png',
  },
]

// lista de array duplicado e randomização
const gameGrid = cardsArray
.concat(cardsArray)
.sort(() => 0.5 - Math.random()) 

let firstGuess = '' 
let secondGuess = '' 
let count = 0 
let previousTarget = null 
let delay = 1200 

const game = document.getElementById('game') 
// criando uma section
const grid = document.createElement('section') 
// adicionando classe grid
grid.setAttribute('class', 'grid') 
game.appendChild(grid) 

// Repetição no array
gameGrid.forEach(item => {
const { name, img } = item 

const card = document.createElement('div') 
card.classList.add('card') 
card.dataset.name = name 
// capa da carta
const front = document.createElement('div') 
front.classList.add('front') 
// figura da carta
const back = document.createElement('div') 
back.classList.add('back') 
back.style.backgroundImage = `url(${img})` 

grid.appendChild(card) 
card.appendChild(front) 
card.appendChild(back) 
}) 
// adicionando classe pata esconder se for iguais
const match = () => {
const selected = document.querySelectorAll('.selected') 
selected.forEach(card => {
  card.classList.add('match') 
}) 
} 
// resetando para novas escolhas
const resetGuesses = () => {
firstGuess = '' 
secondGuess = '' 
count = 0 
previousTarget = null 

var selected = document.querySelectorAll('.selected') 
selected.forEach(card => {
  card.classList.remove('selected') 
}) 
} 
// verificando se as cartas clicadas
grid.addEventListener('click', event => {

const clicked = event.target 

if (
  clicked.nodeName === 'SECTION' ||
  clicked === previousTarget ||
  clicked.parentNode.classList.contains('selected') ||
  clicked.parentNode.classList.contains('match')
) {
  return 
}

if (count < 2) {
  count++ 
  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name 
    console.log(firstGuess) 
    clicked.parentNode.classList.add('selected') 
  } else {
    secondGuess = clicked.parentNode.dataset.name 
    console.log(secondGuess) 
    clicked.parentNode.classList.add('selected') 
  }

  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(match, delay) 
    }
    setTimeout(resetGuesses, delay) 
  }
  previousTarget = clicked 
}

}) 