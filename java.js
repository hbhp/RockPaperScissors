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
        console.log ('A tie!');
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'){
        console.log ('Computer wins! Paper beats rock!');
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS'){
        console.log ('You win! Scissors beats paper!');
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'PAPER'){
        console.log ('You win Paper beats rock!');
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'){
        console.log ('Computer wins! Rock beats scissors!');
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK'){
        console.log ('You win! Rock beats scissors!');
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER'){
        console.log ('Computer wins! Scissors beats paper!');
    } else {
        console.log ('Something when wrong, let\'s try again!');
    }
}

function game(){

}