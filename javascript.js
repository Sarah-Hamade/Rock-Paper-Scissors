// Define variables 
let scorePlayer = 0;
let scoreComputer = 0; 
let computerSelection = getComputerChoice();

// Ramdom generator for the computer
function getComputerChoice() {
    // Create an array
    const comChoice = ["Rock","Paper","Scissor"];
    // Generate a random element inside the array
    const comRandom = comChoice[Math.floor(Math.random() * comChoice.length)];
    return comRandom;
}

// Plays rounds of rock, paper, scissor
function playRound(playerSelection,computerSelection) {
      
    while(scorePlayer <5 && scoreComputer <5){
        
            let computerSelection = getComputerChoice();
            playerSelection;
        
            //Who wins the round?
            if((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissor") ||
                (playerSelection === "Scissor" && computerSelection === "Rock")) { 

                scoreComputer++;
                result.textContent = "You lose! " + computerSelection +  " beats " + playerSelection;
                score.textContent = "Player: " + scorePlayer + " |   Computer: " + scoreComputer;
            }  

            else if(playerSelection === computerSelection) {
                result.textContent = "It's even!";                                                                   
                score.textContent = "Player: " + scorePlayer + " |   Computer: " + scoreComputer;
            }

            else {
                scorePlayer++;
                result.textContent = "You won! " + playerSelection + " beats " + computerSelection;                 
                score.textContent = "Player: " + scorePlayer + "  |  Computer: " + scoreComputer;
            }
            break;
        }

    // Who won the game of 5 rounds?
    if(scorePlayer == 5) { 
        result.textContent = "You Won the game! Congrats!";
        score.textContent = "Player: " + scorePlayer + "  |  Computer: " + scoreComputer;
    }
    else if(scoreComputer == 5) {
        result.textContent =  "You lost the game! Better luck next time.";
        score.textContent = "Player: " + scorePlayer + "  |  Computer: " + scoreComputer;
    }
}

// Call function with button
let playerSelection = document.querySelectorAll('button'); 
playerSelection.forEach((button) => {
    button.addEventListener('click',function() {
        playRound(button.id,computerSelection);
    })
})

// Create div and class for results

const results = document.querySelector('#results');
const result = document.createElement('div');
result.classList.add('result');
results.appendChild(result);

const score = document.createElement('div');
score.classList.add('score');
results.appendChild(score);