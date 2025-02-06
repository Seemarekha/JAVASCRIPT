let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const slots = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.result');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess || guess < 1 || guess > 100)) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        numGuess++;
        displayGuess(guess);
        checkGuess(guess);
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`🎉 You guessed it right!`);
        endGame();
    } else if (numGuess === 10) {
        displayMsg(`❌ Game Over! The number was ${randomNumber}`);
        endGame();
    } else {
        displayMsg(guess < randomNumber ? `⬆️ Number is too low!` : `⬇️ Number is too high!`);
    }

}

function displayGuess(guess) {
    userInput.value = '';
    slots.innerHTML += `${guess}  `;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMsg(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    document.querySelector('#newGame').addEventListener('click', newGame);
}

function newGame() {

    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    slots.innerHTML = '';
    remaining.innerHTML = `10`;
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
}