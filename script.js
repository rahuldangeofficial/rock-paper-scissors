function getComputerChoice(){
    const option=["ROCK","PAPER","SCISSORS"];
    return option[Math.floor(getRandomInt(0,3))];
}
function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
} 
function playRound(playerSelection, computerSelection) {
    if(totalRounds===4){
        if(playerScore>computerScore){
            results.innerText=`You Won! your final score is ${playerScore} & computer score is ${computerScore}`;
        }else if(computerScore>playerScore){
            results.innerText=`You Lost! your final score is ${playerScore} & computer score is ${computerScore}`;
        }else{
            results.innerText=`Draw! your final score is ${playerScore} & computer score is ${computerScore}`;
        }
        totalRounds=0;
        playerScore=0;
        computerScore=0;
        header.innerText=`Round ${totalRounds+1}`;
        display.innerText=`You have 5 rounds to play!`;
        reset.style.display="inline-block";
        header.style.display="none";
        desc.style.display="none";
        display.style.display="none";
        btn.style.display='none';
        return;
    }
    totalRounds++;
    if(playerSelection===computerSelection){
        display.innerText=`Draw, your choice and computer choice are same!`;
    }
    if(playerSelection==="ROCK"&&computerSelection==="PAPER"){
        computerScore++;
        display.innerText=`You Lose! Papers beats Rock  (computer choice:${computerSelection})`;
    }
    if(playerSelection==="PAPER"&&computerSelection==="SCISSORS"){
        computerScore++;
        display.innerText=`You Lose! Scissors beats Papers  (computer choice:${computerSelection})`;
    }
    if(playerSelection==="SCISSORS"&&computerSelection==="ROCK"){
        computerScore++;
        display.innerText=`You Lose! Rock beats Scissors  (computer choice:${computerSelection})`;
    }
    if(computerSelection==="ROCK"&&playerSelection==="PAPER"){
        playerScore++;
        display.innerText=`You Won! Paper beats Rock   (computer choice:${computerSelection})`;
    }
    if(computerSelection==="PAPER"&&playerSelection==="SCISSORS"){
        playerScore++;
        display.innerText=`You Won! Scissors beats Papers   (computer choice:${computerSelection})`;

    }
    if(computerSelection==="SCISSORS"&&playerSelection==="ROCK"){
        playerScore++;
        display.innerText=`You Won! Rock beats Scissors  (computer choice:${computerSelection})`;
    }
    results.innerText=`Your Score:${playerScore} Computer Score:${computerScore}`;
    header.innerText=`Round ${totalRounds+1}`;
 }

 //variables
let header=document.getElementById("header");
let results=document.getElementById("results");
let display=document.getElementById("display");
let reset=document.getElementById("reset");
let desc=document.getElementById('desc');
let btn=document.getElementById('btn');
totalRounds=0;
playerScore=0;
computerScore=0;

//onclick functions
function paperClick(){
    playRound("PAPER",getComputerChoice());
}
function rockClick(){
    playRound("ROCK",getComputerChoice());
}
function scissorsClick(){
    playRound("SCISSORS",getComputerChoice());
}

function resetProgress(){
        reset.style.display="none";
        header.style.display="block";
        desc.style.display="block";
        display.style.display="block";
        btn.style.display='block';
        results.innerText=`Your Score:${playerScore} Computer Score:${computerScore}`;
}