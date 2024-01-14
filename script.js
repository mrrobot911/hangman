let svgDoc;

const body = document.querySelector('body');
const scaffold = document.createElement('div');
scaffold.className = 'scaffold-container';
const svg = document.createElement('object');
svg.className = 'image-el';
svg.data = './assets/human.svg';
svg.type = 'image/svg+xml';
function resetSvg() {
  if (svgDoc) {
    [1, 2, 3, 4, 5, 6].forEach((el) => {
      svgDoc.querySelectorAll(`.element${el}`).forEach((el2) => {
        el2.setAttribute('visibility', 'hidden');
      });
    });
  }
}
function initializeSvg() {
  svgDoc = svg.contentDocument;
  resetSvg();
}
svg.addEventListener('load', initializeSvg);

const hero = document.createElement('h1');
hero.className = 'hero-el';
hero.innerText = 'Hangman game'.toUpperCase();
scaffold.append(svg, hero);
const main = document.createElement('div');
main.className = 'main-container';
const answer = document.createElement('h2');
answer.className = 'answer-el';
const question = document.createElement('p');
question.className = 'question-el';
const guesses = document.createElement('p');
guesses.className = 'guesses-el';
const keyboard = document.createElement('div');
keyboard.className = 'keyboard-el';
main.append(answer, question, guesses, keyboard);
body.append(scaffold, main);
