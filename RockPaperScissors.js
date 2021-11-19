


function computerPlay() {


const selection = ["rock", "paper", "scissors"];
const randomItem = [Math.floor(Math.random() * selection.length)];
//console.log (randomItem, selection[randomItem])

}

function playRound(playerSelection, computerSelection) {
   
    playerSelection.toLowerCase;
    
   if(playerSelection === computerSelection) {
        console.log("Draw!");

    } else if( playerSelection === "rock" && computerSelection === "paper") {
            return "Sorry! You Lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "Sorry! You Lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "Sorry! You Lose! Rock beats Paper!";
    } else if (playerSelection === "rock"  && computerSelection === "paper") {
            return "You Win! Rock beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats Rock!";
    } else (playerSelection === "scissors" && computerrSelection ==="paper") {
            return "You Win! Scissors beats Paper!";
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
