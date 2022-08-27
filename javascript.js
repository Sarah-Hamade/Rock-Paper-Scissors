// Ramdom generator for the computer
function getComputerChoice() {
    // Create an array
    const comChoice = ["Rock","Paper","Scissor"];
    // Generate a random element inside the array
    const comRandom = comChoice[Math.floor(Math.random() * comChoice.length)];
    return comRandom;
}

// Plays one round of rock, paper, scissor
function playRound(playerSelection,computerSelection) {

    // Case-insensitive
    playerSelection = playerSelection.toUpperCase().slice(0,1) + playerSelection.toLowerCase().slice(1,);

    //Who wins the round?
    if(playerSelection === "Rock" && computerSelection === "Paper") {
        scoreComputer++;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissor") {
        scoreComputer++;
        return "You Lose! Scissor beats Paper";
        
    }
    else if(playerSelection === "Scissor" && computerSelection === "Rock") {
        scoreComputer++;
        return "You Lose! Rock beats Scissor";
    } 
    else if(playerSelection === computerSelection) {
        return "It's Even!";
    }
    else {
        scorePlayer++;
        return "You Won! " + playerSelection + " beats " + computerSelection; 
    }
}

// Define variables 
let scorePlayer = 0;
let scoreComputer = 0; 
let computerSelection = getComputerChoice();

// function for whole game
function game() {
 
    // 5 games of Rock, Paper, Scissors
    for(let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock, Paper or Scrissor?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));

        // Counts score
        if("You Lose! Paper beats Rock" || "You Lose! Rock beats Scissor" || "You Lose! Scissor beats Paper"){
            console.log("Player: " + scorePlayer + "    Computer: " + scoreComputer);
        }
        else if("You Won! " + playerSelection + " beats " + computerSelection) {
            console.log("Player: " + scorePlayer + "    Computer: " + scoreComputer);
        }
        else if("It's Even!") {
             console.log("Player: " + scorePlayer + "    Computer: " + scoreComputer);
        }         
    } 

    // Who won the game?
    if(scoreComputer > scorePlayer) {
        console.log("You lost the game!")
    }
    else if(scorePlayer > scoreComputer) {
        console.log("You won the game!")
    }else {
        console.log("It's a tie!")
    }
}     
console.log(game());