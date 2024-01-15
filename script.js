const PATH_ARRAY = [1, 2, 3, 4, 5, 6];
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const QUESTION_DATA = [
  ['What is a collection of key-value pairs in JavaScript called?', 'object'],
  ['What do you use to remove the first element from an array in JavaScript?', 'shift'],
  ['What is the process of combining two or more arrays in JavaScript called?', 'concat'],
  ['What does the "DOM" stand for in web development?', 'document'],
  ['What is the purpose of "this" keyword in JavaScript?', 'referring'],
  ['What is the purpose of using "typeof" in JavaScript?', 'checking'],
  ['What is the function of a closure in JavaScript?', 'enclosing'],
  ['When would you use the "this" keyword in JavaScript?', 'context'],
  ['What is the difference between "==" and "===" operators in JavaScript?', 'equality'],
  ['What is the difference between "null" and "undefined" in JavaScript?', 'existence'],
  ['What does the term "scope" refer to in JavaScript?', 'visibility'],
  ['What is the purpose of using "constructor" in JavaScript classes?', 'initialize'],
  ['How do you load external modules in JavaScript?', 'import'],
  ['How do you access the last element of an array in JavaScript?', 'indexing'],
  ['What does the term "hoisting" mean in JavaScript?', 'lifted'],
  ['How do you handle event bubbling in JavaScript?', 'propagate'],
];

let countAnsw = 0;
let allLetterrs = [];
let answLetterrs = [];
let [quest, answ] = QUESTION_DATA[Math.floor(Math.random() * QUESTION_DATA.length)];
console.log(`answer is: ${answ}`);
let answTemp = '_'.repeat(answ.length).split('');

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
hero.textContent = 'Hangman game'.toUpperCase();
scaffold.append(svg, hero);
const main = document.createElement('div');
main.className = 'main-container';
const answer = document.createElement('h2');
answer.className = 'answer-el';
answer.textContent = answTemp.join('');
const question = document.createElement('p');
question.className = 'question-el';
question.textContent = quest;
const guesses = document.createElement('p');
guesses.className = 'guesses-el';
guesses.innerHTML = `Incorrect guesses: <span class="answ-count">${countAnsw}/6</span>`;
const keyboard = document.createElement('div');
keyboard.className = 'key-container';
ALPHABET.forEach((el) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `myinput-${el}`;
  input.className = 'letter-input';
  input.value = el;
  const label = document.createElement('label');
  label.textContent = el;
  label.setAttribute('for', `myinput-${el}`);
  label.className = 'letter-btn';
  keyboard.append(input, label);
});
main.append(answer, question, guesses, keyboard);
body.append(scaffold, main);

function changeSvg(props) {
  if (props) {
    document
      .querySelectorAll(`.element${countAnsw}`)
      .forEach((el) => el.setAttribute('visibility', 'visible'));
  } else {
    PATH_ARRAY.forEach((el) => {
      document
        .querySelectorAll(`.element${el}`)
        .forEach((p) => p.setAttribute('visibility', 'hidden'));
    });
  }
}

const inputsArray = document.querySelectorAll('.letter-input');
document.addEventListener('keydown', (e) => {
  inputsArray.forEach((el) => {
    if (e.key === el.value && countAnsw < 6) {
      el.click();
    }
  });
});

keyboard.addEventListener('click', (e) => {
  if (e.target.className === 'letter-input') {
    e.target.setAttribute('disabled', 'true');
    if (!allLetterrs.includes(e.target.value)) {
      if (!answ.split('').includes(e.target.value)) {
        countAnsw += 1;
      } else {
        answLetterrs.push(e.target.value);
        answTemp = answ.split('').map((el) => {
          if (answLetterrs.includes(el)) {
            return el;
          }
          return '_';
        });
        answer.textContent = answTemp.join('');
      }
      allLetterrs.push(e.target.value);
      guesses.innerHTML = `Incorrect guesses: <span class="answ-count">${countAnsw}/6</span>`;
      changeSvg(true);
    }
  }
  if (countAnsw === 6 || !answTemp.includes('_')) {
    inputsArray.forEach((el) => {
      el.setAttribute('disabled', 'true');
    });
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    const wrapperModal = document.createElement('div');
    wrapperModal.className = 'modal-wrapper';
    const outcome = document.createElement('p');
    outcome.className = 'modal-outcome';
    outcome.textContent = countAnsw === 6 ? 'You loose' : 'You win';
    const word = document.createElement('p');
    word.className = 'modal-answer';
    word.innerHTML = `Answer is: <span class="answer-span">${answ}</span>`;
    const restart = document.createElement('button');
    restart.className = 'modal-btn';
    restart.textContent = 'restart game';
    restart.addEventListener('click', () => {
      changeSvg(false);
      countAnsw = 0;
      allLetterrs = [];
      answLetterrs = [];
      [quest, answ] = QUESTION_DATA[Math.floor(Math.random() * QUESTION_DATA.length)];
      console.log(`answer is: ${answ}`);
      answTemp = '_'.repeat(answ.length).split('');
      inputsArray.forEach((el) => {
        el.removeAttribute('disabled');
        // eslint-disable-next-line no-param-reassign
        el.checked = false;
      });
      guesses.innerHTML = `Incorrect guesses: <span class="answ-count">${countAnsw}/6</span>`;
      answer.textContent = answTemp.join('');
      question.textContent = quest;
      body.removeChild(modal);
      body.removeChild(wrapperModal);
    });
    modal.append(outcome, word, restart);
    body.append(modal, wrapperModal);
  }
});
