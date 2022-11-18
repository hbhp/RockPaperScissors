function getComputerChoice(){
    let num1 = Math.random();
    if (num1 <= 0.333){
        return 'ROCK';
    } else if (num1 >0.333 && num1 <=0.666) {
        return 'PAPER';
    } else if (num1 > 0.666) {
        return 'SCISSORS';
    }
}
let playerSelection = playerInput.toUpperCase();

function playRound (computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return 'A tie!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK'){
        return 'Computer wins! Paper beats rock!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS'){
        return 'You win! Scissors beats paper!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER'){
        return 'You win Paper beats rock!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS'){
        return 'Computer wins! Rock beats scissors!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK'){
        return 'You win! Rock beats scissors!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER'){
        return 'Computer wins! Scissors beats paper!';
    } else () => {
        return 'Something when wrong, let\'s try again!';
    }
}
