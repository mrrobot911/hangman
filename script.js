// const SVG_EL = [1, 2, 3, 4, 5, 6];
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const body = document.querySelector('body');
const scaffold = document.createElement('div');
scaffold.className = 'scaffold-container';
const svg = document.createElement('span');
svg.innerHTML = `<svg width="420" height="581" viewBox="0 0 420 581" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="176.337" y="34.6662" width="39" height="199.598" transform="rotate(45 176.337 34.6662)" fill="black" stroke="#FFFEFE" stroke-width="3"/>
<rect x="34.5" y="1.5" width="39" height="578" rx="3.5" fill="black" stroke="#FFFEFE" stroke-width="3"/>
<rect x="351.5" y="34.5" width="39" height="350" rx="3.5" transform="rotate(90 351.5 34.5)" fill="black" stroke="#FFFEFE" stroke-width="3"/>
<rect x="298" y="75" width="10" height="74" fill="black"/>
<circle class="element1" visibility="hidden" cx="303.5" cy="180.5" r="48" fill="white" stroke="#909090" stroke-width="5"/>
<rect class="element2" visibility="hidden" x="300" y="240" width="5" height="131" fill="#909090"/>
<rect class="element3" visibility="hidden" x="380" y="70" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
<rect class="element4" visibility="hidden" y="420" x="100" width="5" height="100" transform="rotate(-39.6353 0 3.18951)"
fill="#909090"/>
<rect class="element5" visibility="hidden" x="480" y="160" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
<rect class="element6" visibility="hidden" y="510" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>
<rect class="element6" visibility="hidden" x="325" y="-90" width="5" height="20" transform="rotate(45)" fill="#909090"/>
<rect class="element6" visibility="hidden" x="345" y="-110" width="5" height="20" transform="rotate(45)" fill="#909090"/>
<rect class="element6" visibility="hidden" y="318" x="78" width="5" height="20" transform="rotate(-45)" fill="#909090"/>
<rect class="element6" visibility="hidden" y="338" x="97" width="5" height="20" transform="rotate(-45)" fill="#909090"/>
<path class="element6" visibility="hidden" d="M 282 210 C 292 190, 312 190, 322 210" stroke="#909090" fill="transparent" stroke-width="3"/>
</svg>`;

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
keyboard.className = 'key-container';
ALPHABET.forEach((el) => {
  const button = document.createElement('button');
  button.className = 'letter-btn';
  button.innerHTML = el;
  keyboard.append(button);
});
main.append(answer, question, guesses, keyboard);
body.append(scaffold, main);
