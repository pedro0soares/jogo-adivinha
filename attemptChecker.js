// attemptChecker.js
export function checkAttempt(userGuess, randomNumber) {
    if (userGuess > randomNumber) {
        return 'Seu palpite é maior que o número gerado.';
    } else if (userGuess < randomNumber) {
        return 'Seu palpite é menor que o número gerado.';
    } else {
        return 'Parabéns! Você adivinhou o número!';
    }
}
