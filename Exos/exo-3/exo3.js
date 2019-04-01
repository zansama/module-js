// you can write js here
console.log('exo-3');
var userInput = prompt('make your choice : rock , paper or scissors');
userInput = userInput.toLowerCase()
function getUserChoice(userInput) {

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        return 'error';
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getComputerChoice() {
    var randomInt = getRandomInt(3);
    if (randomInt === 0){
        return 'rock';
    }else if (randomInt === 1){
        return 'paper';
    } else if (randomInt === 2){
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb'){
        return 'won';
    }
    if (computerChoice === userChoice){
        return 'égalité';
    }
    if (userChoice === 'rock'){
        if (computerChoice ==='scissors'){
            return 'won';
        } else {
            return 'lost';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock'){
            return 'won';
        } else {
            return 'lost';
        }
    } else if (userChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return 'won';
        }else {
            return 'lost';
        }
    }


}
function playGame() {
    var userChoice  = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    return determineWinner(userChoice, computerChoice);
}

console.log(playGame());