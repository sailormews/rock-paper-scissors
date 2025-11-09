console.log("Hello, World!")

function getComputerChoice() {
    const randomChoice = Math.random(); 
if (randomChoice < 1/3) { 
    return "Rock"; 
} else if (randomChoice < 2/3) { 
    return "Paper"; 
} else { 
    return "Scissors";
} 
}