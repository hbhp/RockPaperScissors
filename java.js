let computerScore = 0;                                          //SETTING UP SCORES
//    document.getElementById('computerScore').innerHTML = computerScore;
let playerScore = 0;
//    document.getElementById('playerScore').innerHTML = playerScore;
let roundCount= 0;
//    document.getElementById('roundCount').innerHTML = roundCount;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    roundCount++
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.className}`;
    playRound(playerSelection,computerSelection)
    document.getElementById('playerSelection').innerHTML = playerSelection;
    document.getElementById('computerSelection').innerHTML = computerSelection;
    document.getElementById('roundCount').innerHTML = roundCount;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    winnerCheck (playerScore,computerScore);
  });
});

function getComputerChoice(){                                   //GETS COMPUTER'S CHOICE
    let num1 = Math.random();
    if (num1 <= 0.333){
        return 'ROCK';
    } else if (num1 >0.333 && num1 <=0.666) {
        return 'PAPER';
    } else if (num1 > 0.666) {
        return 'SCISSORS';
    }
}

function playRound(playerSelection,computerSelection){                                           //PLAY'S A ROUND
    if (computerSelection === playerSelection.toUpperCase()){
        document.getElementById('result').innerHTML = 'A tie! No points awarded';
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'){
        computerScore++
        document.getElementById('result').innerHTML ='The computer chose paper! Computer wins! Paper beats rock!';
    } else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() === 'SCISSORS'){
        playerScore++
        document.getElementById('result').innerHTML ='The computer chose paper! You win! Scissors beats paper!';
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'PAPER'){
        playerScore++
        document.getElementById('result').innerHTML = 'The computer chose rock! You win! Paper beats rock!';
    } else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'){
        computerScore++
        document.getElementById('result').innerHTML ='The computer chose rock! Computer wins! Rock beats scissors!';
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'ROCK'){
        computerScore++
        document.getElementById('result').innerHTML ='The computer chose scissors! You win!';
    } else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER'){
        computerScore++
        document.getElementById('result').innerHTML ='The computer chose scissors! Computer wins!';
    } else {
        document.getElementById('result').innerHTML ='Something went wrong, let\'s try again!';
    }
}

function winnerCheck (playerScore,computerScore){
    if (playerScore === 5){
        document.getElementById('winner').innerHTML ='YOU WIN!';
    }
    else if (computerScore === 5){
        document.getElementById('winner').innerHTML ='YOU LOSE!';
    }
    else {
        return;
    }
}


