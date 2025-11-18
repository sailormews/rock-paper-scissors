console.log("Hello, World!")

function getComputerChoice() {
    let randomChoice = Math.random(); 
if (randomChoice < 1/3) { 
    return "Rock"; 
} else if (randomChoice < 2/3) { 
    return "Paper"; 
} else { 
    return "Scissors";
} 
}

function getHumanChoice() {
    let userChoice = prompt ("Please enter rock paper or scissors:"); 
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("its a tie!"); 
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("you win paper beats rock"); 
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("you win rock beats scissors"); 
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("you win scissors beats paper")
        } else { 
            console.log("You lose! ${computerChoice} beats ${humanChoice}"); 
        }
    } 

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


