


function computerPlay() {


const selection = ["rock", "paper", "scissors"];
const randomItem = [Math.floor(Math.random() * selection.length)];
//console.log (randomItem, selection[randomItem])


}

function playRound(playerSelection, computerSelection) {
   
   
    if(playerSelection === computerSelection){
        console.log("Draw!");

    } 
    else if( playerSelection = "rock" && computerSelection = "paper"){
        console.log("Sorry! You Lose! Paper beats Rock!")
    }
    else if (playerSelection = "paper" && computerSelection = "scissors"){
            console.log("Sorry! You Lose! Scissors beats Paper!")
    }
    else if (playerSelection = "scissors" && computerSelection = "rock"){
            console.log("Sorry! You Lose! Rock beats Paper!")
    }        
    else if (playerSelection = "rock"  && computerSelection = "paper") {
            console.log("You Win! Rock beats Paper!")
    } 
    else if (playerSelection = "paper" && computerSelection = "rock") {
            console.log("You Win! Paper beats Rock!")
    }
    else (playerSelection = "scissors" && computerrSelection = "paper") {
            console.log("You Win! Scissors beats Paper!")
    }
}
const playerSelection ="" ;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)