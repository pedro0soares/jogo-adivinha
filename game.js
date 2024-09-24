// game.js
import { generateRandomNumber } from './randomNumber.js';
import { checkAttempt } from './attemptChecker.js';

const MAX_ATTEMPTS = 5;
const randomNumber = generateRandomNumber(1, 100);
let attempts = 0;

function startGame() {
    while (attempts < MAX_ATTEMPTS) {
        const userGuess = parseInt(prompt('Adivinhe um número entre 1 e 100:'));

        if (isNaN(userGuess)) {
            alert('Por favor, insira um número válido.');
            continue;
        }

        attempts++;
        const resultMessage = checkAttempt(userGuess, randomNumber);
        alert(resultMessage); // Usando alert para mostrar o resultado

        if (userGuess === randomNumber) {
            return; // Sai do jogo se o número for adivinhado
        }

        if (attempts === MAX_ATTEMPTS) {
            alert(`Você esgotou suas tentativas. O número era ${randomNumber}.`);
        }
    }
}

startGame();

