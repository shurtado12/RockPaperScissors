//Rock Paper Scissors Code







        
function playRound(playerSelection, computerSelection) {//player selection to lower case makes player input case insensitive.
// This function contains the code to run a single round of Rock Paper Scissors.
               
  
          
   if(playerSelection.toLowerCase() === computerSelection) {//Same selection will render a draw. no points distributed.
        return "Draw!"; 

    } else if(playerSelection.toLowerCase()   === "rock" && computerSelection === "paper") {//player loss increments cpu score by one
        ++roundNumber;
        ++cpuScore;   
        return ["Sorry! You Lose! Paper beats Rock!"];

    } else if ( playerSelection.toLowerCase()  === "paper" && computerSelection === "scissors") {
        ++roundNumber;
        ++cpuScore;  
        return ["Sorry! You Lose! Scissors beats Paper!"] ;

    } else if ( playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++roundNumber;
        ++cpuScore;
        return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                           //Player wins increment player score by 1.             
    } else if ( playerSelection.toLowerCase() === "rock"  && computerSelection === "scissors") {
        ++roundNumber;
        ++playerScore;  
        return ["You Win! Rock beats Scissors!"]  ;

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++roundNumber;
        ++playerScore;    
        return ["You Win! Paper beats Rock!"]   

    } else if ( playerSelection.toLowerCase() === "scissors" && computerSelection ==="paper")  {
        ++roundNumber;
        ++playerScore;  
        return ["You Win! Scissors beats Paper!"] ;

    }
        else {                                  //error message for invalid inputs
            return "Invalid input. Choose Rock, Paper or Scissors.";
        }


        
        
}    /*Tlhis is me trying to figure out how to loop the rounds and rng for enemy selection.
*/
    
let playerScore = 0; //score starts at zero for both player and cpu
let cpuScore = 0;
let roundNumber = 0;

let playerSelection = prompt("Rock, Paper or Scissors?"); //player input i nto text box determines the player choice
let computerSelection = computerPlay(); //cpu selection is determined by the function computerPlay (random)


     
function computerPlay() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}
function game(){
for  (let i = 0; i < 5; i++) {
   
    computerPlay();
    prompt();
   return (playRound(playerSelection, computerSelection) +" " + "CPU chose" + " " + computerSelection + //prints plays and scores
        ". Current Scores - Player Score: " + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

}
    
}
 game ();
    console.log(game)

/*console.log ("Game Over! Final Scores Player Score:" + playerScore + " CPU Score:" + cpuScore)*/

