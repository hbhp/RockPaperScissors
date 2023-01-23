//THIS ALL WORKS BUT IS NOT THE MOST EFFICIENT - HOLDING ONTO JUST IN CASE

// const rockButton = document.querySelector('#ROCK')             //DECLARES ROCK BUTTON
// const paperButton = document.querySelector('#PAPER')           //DECLARES PAPER BUTTON 
// const scissorsButton = document.querySelector('#SCISSORS')     //DECLARES SCISSORS BUTTON

// rockButton.addEventListener('click', () => {                   //ACTIONS ROCK BUTTON
//     roundCount++
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'ROCK';
//     document.getElementById('playerSelection').innerHTML = playerSelection;
//     playRound(playerSelection,computerSelection)
//     document.getElementById('computerSelection').innerHTML = computerSelection;
//     document.getElementById('roundCount').innerHTML = roundCount;
// });

// paperButton.addEventListener('click', () => {                   //ACTIONS PAPER BUTTON
//     roundCount++
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'PAPER';
//     document.getElementById('playerSelection').innerHTML = playerSelection;
//     playRound(playerSelection,computerSelection)
//     document.getElementById('computerSelection').innerHTML = computerSelection;
//     document.getElementById('roundCount').innerHTML = roundCount;

// });

// scissorsButton.addEventListener('click', () => {                //ACTIONS SCISSORS BUTTON
//     roundCount++
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'SCISSORS';
//     document.getElementById('playerSelection').innerHTML = playerSelection;
//     playRound(playerSelection,computerSelection)
//     document.getElementById('computerSelection').innerHTML = computerSelection;
//     document.getElementById('roundCount').innerHTML = roundCount;

//});
//document.querySelector('#ROCK').onclick = setRock
//document.querySelector('#PAPER').onclick = setPaper
//document.querySelector('#SCISSORS').onclick = setScissors

//function setRock(){
//    let playerSelection = 'ROCK';
//    console.log(playerSelection);
//}
//function setPaper(){
//    let playerSelection = 'PAPER';
//    console.log(playerSelection);
//}
//function setScissors(){
//    let playerSelection = 'SCISSORS';
//    console.log(playerSelection);
//}

//function game(){
//    for (let i = 0; i < 5; i++) {
//        playRound();
//    } 
//    if (playerScore > computerScore){
//        console.log('You win!')
//    } else if (playerScore < computerScore){
//        console.log('Computer Wins!')
//    } else if (playerScore === computerScore){
//        console.log ('It\'s a tie!')
//    } else {
//        console.log ('Whoops - Something went wrong!')
//    }
//}

//function getPlayerChoice(){                               DEFUNCT BUT WORKS
//    let input = (prompt("Which weapon do you choose: ROCK, PAPER, SCISSORS?"));
//    return input;
//}

//Scissors beats paper! This is round ' + roundCount + '. The computer\'s score is ' + computerScore + '. Your score is ' + playerScore +'.