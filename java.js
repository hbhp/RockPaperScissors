const playerSelection = (prompt("Which weapon do you choose: ROCK, PAPER, SCISSORS?"));
const computerSelection = getComputerChoice();
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

function playRound (computerSelection, playerSelection){ //This works fine
    if (computerSelection === playerSelection){
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

function game(){ //This isn't yet working
    for (let i = 0; i < 5; i++) {
        getComputerChoice;
        playRound;
        if ((computerSelection === playerSelection)) {
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        }  else if  (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'){
            computerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'){
            computerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER'){
            computerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS'){
            playerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'PAPER'){
            playerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
            playerScore++;
            console.log ('This is round ' + i + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.');
        } 
    }
}