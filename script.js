function getComputerChoice(){
    const option=["ROCK","PAPER","SCISSORS"];
    return option[Math.floor(getRandomInt(0,3))];
}
function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
} 
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerSelection.toUpperCase();

    if(playerSelection===computerSelection){
        return "Draw";
    }
    if(playerSelection==="ROCK"&&computerSelection==="PAPER"){
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection==="PAPER"&&computerSelection==="SCISSORS"){
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection==="SCISSORS"&&computerSelection==="ROCK"){
        return "You Lose! Rock beats Scissors";
    }
    if(computerSelection==="ROCK"&&playerSelection==="PAPER"){
        return "You Won! Paper beats Rock";
    }
    if(computerSelection==="PAPER"&&playerSelection==="SCISSORS"){
        return "You Won! Scissors beats Paper";
    }
    if(computerSelection==="SCISSORS"&&playerSelection==="ROCK"){
        return "You Won! Rock beats Scissors";
    }
    return "Incorrect Input!";
 }
function game() {
    let playerScore=0;
    let computerScore=0;
    let finalResult="Draw!";

    for (let i = 0; i < 5; i++) {
        const userInput=window.prompt(`Round ${i}:`+"Enter your choice out of rock, papers & scissors");
        const playerSelection =userInput;
        const computerSelection = getComputerChoice();
        console.log(`Round${i+1}: `+playRound(playerSelection, computerSelection));
        stringCheck=playRound(playerSelection, computerSelection)
        if(stringCheck.includes("Won")){
            playerScore++;
        }
        if(stringCheck.includes("Lose")){
            computerScore++;
        }
     }

    if(playerScore>computerScore){
        finalResult="You Won!";
    }
    if(playerScore<computerScore){
        finalResult="You Lose!";
    }

    console.log(`${finalResult}, Your total score is ${playerScore} and computer score is ${computerScore}`);
}
game();