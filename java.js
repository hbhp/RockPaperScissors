let computerScore = 0; 
let playerScore = 0;
let roundCount= 0;

function getComputerChoice(){ //This works fine
    let num1 = Math.random();
    if (num1 <= 0.333){
        return 'ROCK';
    } else if (num1 >0.333 && num1 <=0.666) {
        return 'PAPER';
    } else if (num1 > 0.666) {
        return 'SCISSORS';
    }
}

function getPlayerChoice(){
    let input = (prompt("Which weapon do you choose: ROCK, PAPER, SCISSORS?"));
    return input;
}

function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    roundCount++;
    if (computerSelection === playerSelection.toUpperCase){ // ONLY PROBLEM NOW IS IT WON'T TIE!!!
        console.log ('A tie! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'){
        computerScore++
        console.log ('The computer chose paper! Computer wins! Paper beats rock! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS'){
        playerScore++
        console.log ('The computer chose paper! You win! Scissors beats paper! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'PAPER'){
        playerScore++
        console.log ('The computer chose rock! You win! Paper beats rock! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'){
        computerScore++
        console.log ('The computer chose rock! Computer wins! Rock beats scissors! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK'){
        computerScore++
        console.log ('The computer chose scissors! You win! Rock beats scissors! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER'){
        computerScore++
        console.log ('The computer chose scissors! Computer wins! Scissors beats paper! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
    } else {
        console.log ('Something went wrong, let\'s try again!');
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
    } 
}