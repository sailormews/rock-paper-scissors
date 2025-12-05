console.log("Hello, World!")


function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";  
    }
}  



function getHumanChoice() {
    let userChoice = prompt("Please enter rock paper or scissors:").toLowerCase(); 
    return userChoice;
}

function playGame (rounds = 5) {  
    let humanScore = 0;
    let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    switch(humanChoice) {
    case "rock": 
        if (computerChoice === "scissors") {
            console.log("You win! rock beats scissors"); 
            humanScore++
        } else if (computerChoice === "paper") {
            console.log("You lose! paper beats rock");
            computerScore++ 
        } else console.log("It's a draw, computer chose rock");
        break;
    
    case "paper": 
        if (computerChoice === "rock") { 
            console.log("You win! rock beats paper"); 
            humanScore++ 
        }
        else if (computerChoice === "paper") {
            console.log("It's a draw, computer chose paper");
        } 
        else { 
            console.log("You lose, scissors beats paper!"); 
            computerScore++;
        }
        break; 

    case "scissors": 
        if (computerChoice === "rock") {
            console.log("You lose, rock beats scissors"); 
            computerScore++ 
        }
        else if (computerChoice === "paper") { 
            console.log("You win, paper beats scissors"); 
            humanScore++
        }
        else {
            console.log("It's a draw"); 
        }
        break;

    }
}
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

