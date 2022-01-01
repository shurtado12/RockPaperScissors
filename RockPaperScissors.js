//Rock Paper Scissors Code





function game (){

        
function playRound0 (playerSelection0, computerSelection0) {//player selection to lower case makes player input case insensitive.
// This function contains the code to run a single round of Rock Paper Scissors.
               
  
          
   if(playerSelection0.toLowerCase() === computerSelection0) {//Same selection will render a draw. no points distributed.
        return "Draw!"; 

    } else if(playerSelection0.toLowerCase()   === "rock" && computerSelection0 === "paper") {//player loss increments cpu score by one
        ++roundNumber;
        ++cpuScore;   
        return ["Sorry! You Lose! Paper beats Rock!"];

    } else if ( playerSelection0.toLowerCase()  === "paper" && computerSelection0=== "scissors") {
        ++roundNumber;
        ++cpuScore;  
        return ["Sorry! You Lose! Scissors beats Paper!"] ;

    } else if ( playerSelection0.toLowerCase() === "scissors" && computerSelection0 === "rock") {
        ++roundNumber;
        ++cpuScore;
        return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                           //Player wins increment player score by 1.             
    } else if ( playerSelection0.toLowerCase() === "rock"  && computerSelection0=== "scissors") {
        ++roundNumber;
        ++playerScore;  
        return ["You Win! Rock beats Scissors!"]  ;

    } else if (playerSelection0.toLowerCase() === "paper" && computerSelection0 === "rock") {
        ++roundNumber;
        ++playerScore;    
        return ["You Win! Paper beats Rock!"]   

    } else if ( playerSelection0.toLowerCase() === "scissors" && computerSelection0 ==="paper")  {
        ++roundNumber;
        ++playerScore;  
        return ["You Win! Scissors beats Paper!"] ;

    }
        else {                                  //error message for invalid inputs
            return "Invalid input. Choose Rock, Paper or Scissors.";
        }


        
        
}  
function playRound1 (playerSelection1, computerSelection1) {//player selection to lower case makes player input case insensitive.
    // This function contains the code to run a single round of Rock Paper Scissors.
                   
      
              
       if(playerSelection1.toLowerCase() === computerSelection1) {//Same selection will render a draw. no points distributed.
            return "Draw!"; 
    
        } else if(playerSelection1.toLowerCase()   === "rock" && computerSelection1 === "paper") {//player loss increments cpu score by one
            ++roundNumber;
            ++cpuScore;   
            return ["Sorry! You Lose! Paper beats Rock!"];
    
        } else if ( playerSelection1.toLowerCase()  === "paper" && computerSelection1 === "scissors") {
            ++roundNumber;
            ++cpuScore;  
            return ["Sorry! You Lose! Scissors beats Paper!"] ;
    
        } else if ( playerSelection1.toLowerCase() === "scissors" && computerSelection1 === "rock") {
            ++roundNumber;
            ++cpuScore;
            return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                               //Player wins increment player score by 1.             
        } else if ( playerSelection1.toLowerCase() === "rock"  && computerSelection1 === "scissors") {
            ++roundNumber;
            ++playerScore;  
            return ["You Win! Rock beats Scissors!"]  ;
    
        } else if (playerSelection1.toLowerCase() === "paper" && computerSelection1 === "rock") {
            ++roundNumber;
            ++playerScore;    
            return ["You Win! Paper beats Rock!"]   
    
        } else if ( playerSelection1.toLowerCase() === "scissors" && computerSelection1==="paper")  {
            ++roundNumber;
            ++playerScore;  
            return ["You Win! Scissors beats Paper!"] ;
    
        }
            else {                                  //error message for invalid inputs
                return "Invalid input. Choose Rock, Paper or Scissors.";
            }
    
            
    } 

    function playRound2 (playerSelection2, computerSelection2) {//player selection to lower case makes player input case insensitive.
        // This function contains the code to run a single round of Rock Paper Scissors.
                       
          
                  
           if(playerSelection2.toLowerCase() === computerSelection2) {//Same selection will render a draw. no points distributed.
                return "Draw!"; 
        
            } else if(playerSelection2.toLowerCase()   === "rock" && computerSelection2 === "paper") {//player loss increments cpu score by one
                ++roundNumber;
                ++cpuScore;   
                return ["Sorry! You Lose! Paper beats Rock!"];
        
            } else if ( playerSelection2.toLowerCase()  === "paper" && computerSelection2 === "scissors") {
                ++roundNumber;
                ++cpuScore;  
                return ["Sorry! You Lose! Scissors beats Paper!"] ;
        
            } else if ( playerSelection2.toLowerCase() === "scissors" && computerSelection2 === "rock") {
                ++roundNumber;
                ++cpuScore;
                return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                                   //Player wins increment player score by 1.             
            } else if ( playerSelection2.toLowerCase() === "rock"  && computerSelection2=== "scissors") {
                ++roundNumber;
                ++playerScore;  
                return ["You Win! Rock beats Scissors!"]  ;
        
            } else if (playerSelection2.toLowerCase() === "paper" && computerSelection2 === "rock") {
                ++roundNumber;
                ++playerScore;    
                return ["You Win! Paper beats Rock!"]   
        
            } else if ( playerSelection2.toLowerCase() === "scissors" && computerSelection2 ==="paper")  {
                ++roundNumber;
                ++playerScore;  
                return ["You Win! Scissors beats Paper!"] ;
        
            }
                else {                                  //error message for invalid inputs
                    return "Invalid input. Choose Rock, Paper or Scissors.";
                }
        
                
        } 

        function playRound3 (playerSelection3, computerSelection3) {//player selection to lower case makes player input case insensitive.
            // This function contains the code to run a single round of Rock Paper Scissors.
                           
              
                      
               if(playerSelection3.toLowerCase() === computerSelection3) {//Same selection will render a draw. no points distributed.
                    return "Draw!"; 
            
                } else if(playerSelection3.toLowerCase()   === "rock" && computerSelection3 === "paper") {//player loss increments cpu score by one
                    ++roundNumber;
                    ++cpuScore;   
                    return ["Sorry! You Lose! Paper beats Rock!"];
            
                } else if ( playerSelection3.toLowerCase()  === "paper" && computerSelection3 === "scissors") {
                    ++roundNumber;
                    ++cpuScore;  
                    return ["Sorry! You Lose! Scissors beats Paper!"] ;
            
                } else if ( playerSelection3.toLowerCase() === "scissors" && computerSelection3 === "rock") {
                    ++roundNumber;
                    ++cpuScore;
                    return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                                       //Player wins increment player score by 1.             
                } else if ( playerSelection3.toLowerCase() === "rock"  && computerSelection3 === "scissors") {
                    ++roundNumber;
                    ++playerScore;  
                    return ["You Win! Rock beats Scissors!"]  ;
            
                } else if (playerSelection3.toLowerCase() === "paper" && computerSelection3 === "rock") {
                    ++roundNumber;
                    ++playerScore;    
                    return ["You Win! Paper beats Rock!"]   
            
                } else if ( playerSelection3.toLowerCase() === "scissors" && computerSelection3 ==="paper")  {
                    ++roundNumber;
                    ++playerScore;  
                    return ["You Win! Scissors beats Paper!"] ;
            
                }
                    else {                                  //error message for invalid inputs
                        return "Invalid input. Choose Rock, Paper or Scissors.";
                    }
            
                    
            } 

            function playRound4 (playerSelection4, computerSelection4) {//player selection to lower case makes player input case insensitive.
                // This function contains the code to run a single round of Rock Paper Scissors.
                               
                  
                          
                   if(playerSelection4.toLowerCase() === computerSelection4) {//Same selection will render a draw. no points distributed.
                        return "Draw!"; 
                
                    } else if(playerSelection4.toLowerCase()   === "rock" && computerSelection4 === "paper") {//player loss increments cpu score by one
                        ++roundNumber;
                        ++cpuScore;   
                        return ["Sorry! You Lose! Paper beats Rock!"];
                
                    } else if ( playerSelection4.toLowerCase()  === "paper" && computerSelection4 === "scissors") {
                        ++roundNumber;
                        ++cpuScore;  
                        return ["Sorry! You Lose! Scissors beats Paper!"] ;
                
                    } else if ( playerSelection4.toLowerCase() === "scissors" && computerSelection4 === "rock") {
                        ++roundNumber;
                        ++cpuScore;
                        return ["Sorry! You Lose! Rock beats Scissors!"]  ;
                                                                           //Player wins increment player score by 1.             
                    } else if ( playerSelection4.toLowerCase() === "rock"  && computerSelection4 === "scissors") {
                        ++roundNumber;
                        ++playerScore;  
                        return ["You Win! Rock beats Scissors!"]  ;
                
                    } else if (playerSelection4.toLowerCase() === "paper" && computerSelection4 === "rock") {
                        ++roundNumber;
                        ++playerScore;    
                        return ["You Win! Paper beats Rock!"]   
                
                    } else if ( playerSelection4.toLowerCase() === "scissors" && computerSelection4 ==="paper")  {
                        ++roundNumber;
                        ++playerScore;  
                        return ["You Win! Scissors beats Paper!"] ;
                
                    }
                        else {                                  //error message for invalid inputs
                            return "Invalid input. Choose Rock, Paper or Scissors.";
                        }
                
                        
                } 
    

/*Tlhis is me trying to figure out how to loop the rounds and rng for enemy selection.
*/
    
var playerScore = 0; //score starts at zero for both player and cpu
var cpuScore = 0;
var roundNumber = 0;

var playerSelection0 = prompt("Round 1: Rock, Paper or Scissors?"); //player input i nto text box determines the player choice




var computerSelection0 = computerPlay0(); //cpu selection is determined by the function computerPlay (random)
var computerSelection1 = computerPlay1();
var computerSelection2 = computerPlay2 ();
var computerSelection3 = computerPlay3 ();
var computerSelection4 = computerPlay4 ();

     
function computerPlay0() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}  

function computerPlay1() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}  

function computerPlay2() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}  

function computerPlay3() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}  

function computerPlay4() {// Random selection for CPU 

    
    const selection = ["rock", "paper", "scissors"];
    
    

    const randomItem = [Math.floor(Math.random() * selection.length)];

      
    return (randomItem, selection[randomItem]);
    
}  
 


   console.log(playRound0(playerSelection0, computerSelection0) +" " + "CPU chose" + " " + computerSelection0 + //prints plays and scores
        ". Current Scores - Player Score:" + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

        
 var playerSelection1 =  prompt("Round 2: Rock, Paper, or Scissors?")

   

        console.log(playRound1 (playerSelection1, computerSelection1) +" " + "CPU chose" + " " + computerSelection1 + //prints plays and scores
        ". Current Scores - Player Score:" + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

var playerSelection2 = prompt("Round 3: Rock, Paper, or Scissors?");
       

        console.log(playRound2 (playerSelection2, computerSelection2) +" " + "CPU chose" + " " + computerSelection2 + //prints plays and scores
        ". Current Scores - Player Score: " + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

        
var playerSelection3 = prompt ("Round 4: Rock, Paper, or Scissors?");
        console.log(playRound3(playerSelection3, computerSelection3) +" " + "CPU chose" + " " + computerSelection3 + //prints plays and scores
        ". Current Scores - Player Score:" + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

        
 var playerSelection4 = prompt ("Round 5: Rock, Paper, or Scissors?");

        console.log(playRound4 (playerSelection4, computerSelection4) +" " + "CPU chose" + " " + computerSelection4 + //prints plays and scores
        ". Current Scores - Player Score:" + " " + playerScore + " " + "CPU Score: " + cpuScore + " " + "Round: " + roundNumber );

      ;

    

console.log ("Game Over! Final Scores Player Score:" + playerScore + " CPU Score:" + cpuScore);

}


game ();