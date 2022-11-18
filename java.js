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

//let getComputerChoice = () => {  
//    let result = 'Rock' || 'Paper' || 'Scissors';
//    return result;
//}
//create interface for user choice = playerSelection

function declaration (){
    //take playerSelection
    //take getComputerChoice (or alternative result variable)
    //if/else
}