console.log("Hello world!");

const getComputerChoice = () => {
    let num = Math.floor(Math.random()*3) + 1;
    if (num === 1) return "rock";
    else if (num === 2) return "paper";
    else return "scissors";
}

//console.log(getComputerChoice());

const getHumanChoice = () => {
    let flag = true;
    while (flag) {
        let input = prompt("Enter your choice (rock, paper, scissors)");
        if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors"){
            return input.toLowerCase();
        } else {
            console.log("Please enter a valid choice");
        }
    }
}

//console.log("human:", getHumanChoice());

let humanScore = 0, computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "The round is a tie!";
    }
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            return "Computer wins! Paper beats Rock!";
        } else {
            humanScore++; 
            return "You win! Rock beats Scissors!"; 
        } 
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore++;
            return "Computer wins! Scissors beats Paper!";
        } else {
            humanScore++;
            return "You win! Paper beats Rock!";
        }
    } else {
        if (computerChoice === "paper"){
            computerScore++;
            return "Computer wins! Paper beats Rock!";
        } else {
            humanScore++;
            return "You win! Scissors beats Paper!";
        }
    }
}

const playGame = () => {
    while (humanScore < 5 && computerScore < 5){
        console.log("Round playing...");
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Your score: ", humanScore);
        console.log("Computer score: ", computerScore);
        if (humanScore === 5){
            return "You win!";
        } else if (computerScore === 5){
            return "Computer wins!";
        }
    }
}

console.log(playGame());