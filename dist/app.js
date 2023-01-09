// Variables and DOM nodes
let randomNumber = Math.floor(Math.random() * 100 + 1);
const guesses = document.querySelector('.main__guesses');
const result = document.querySelector('.main__last-result');
const lowHi = document.querySelector('.main__low-hi');
const guessSubmit = document.querySelector('.inputfield__input');
const guessField = document.querySelector('.inputfield__submit');
let guessCount = 1;
let resetButton;

// Game
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You got it!';
        result.style.backgroundColor = 'darkgreen';
        lowHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        result.textContent = 'Game Over';
        lowHi.textContent = '';
        setGameOver();
    } else {
        result.textContent = 'Wrong';
        result.style.backgroundColor = 'darkred';
        if (userGuess < randomNumber) {
            lowHi.textContent = 'Last guess as too low';
        } else if (userGuess > randomNumber) {
            lowHi.textContent = 'Last guess was too high';
        }
    }

    guessCount++;
    guessField = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

guessSubmit.addEventListener('click', checkGuess);