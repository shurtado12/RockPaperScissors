


function computerPlay() {


const selection = ["rock", "paper", "scissors"];
const randomItem = [Math.floor(Math.random() * selection.length)];
 return (randomItem, selection[randomItem])

}

function playRound(playerSelection, computerSelection) {
   
   
    
   if(playerSelection.toLowerCase() === computerSelection) {
        return "Draw!";

    } else if(playerSelection.toLowerCase()   === "rock" && computerSelection === "paper") {
            return "Sorry! You Lose! Paper beats Rock!";

    } else if ( playerSelection.toLowerCase()  === "paper" && computerSelection === "scissors") {
            return "Sorry! You Lose! Scissors beats Paper!";

    } else if ( playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            return "Sorry! You Lose! Rock beats Paper!";

    } else if ( playerSelection.toLowerCase() === "rock"  && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats Rock!";

    } else if ( playerSelection.toLowerCase() === "scissors" && computerrSelection ==="paper") 
            {
            return "You Win! Scissors beats Paper!";

    }

}
const playerSelection = "papEr";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection) +" " + "CPU chose" + " " + computerSelection);
