let computerSelection ='';

function getComputerChoice(){
    let num1 = Math.random();
    if (num1 <= 0.333){
        let computerSelection ='ROCK';
        return 'ROCK';
    } else if (num1 >0.333 && num1 <=0.666) {
        let computerSelection = 'PAPER';
        return 'PAPER';
    } else if (num1 > 0.666) {
        let computerSelection = 'SCISSORS'
        return 'SCISSORS';
    }
}

function playRound (computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return 'It\'s a tie! Try again!';
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

function declaration (){
    //take playerSelection
    //take getComputerChoice (or alternative result variable)
    //if/else
}