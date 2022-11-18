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

function playRound (computerSelection, playerSelection){
    if (computerSelection === playerSelection.toUpperCase()){
        return 'A tie!';
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'){
        return 'Computer wins! Paper beats rock!';
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS'){
        return 'You win! Scissors beats paper!';
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'PAPER'){
        return 'You win Paper beats rock!';
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'){
        return 'Computer wins! Rock beats scissors!';
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK'){
        return 'You win! Rock beats scissors!';
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER'){
        return 'Computer wins! Scissors beats paper!';
    } else {
        return 'Something when wrong, let\'s try again!';
    }
}