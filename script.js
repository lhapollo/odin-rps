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
    let msg = "";

    if (humanChoice === computerChoice) {
        msg = "The round is a tie!";
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            msg= "Computer wins! Paper beats Rock!";
        } else {
            humanScore++; 
            msg= "You win! Rock beats Scissors!"; 
        } 
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore++;
            msg= "Computer wins! Scissors beats Paper!";
        } else {
            humanScore++;
            msg= "You win! Paper beats Rock!";
        }
    } else {
        if (computerChoice === "paper"){
            computerScore++;
            msg= "Computer wins! Paper beats Rock!";
        } else {
            humanScore++;
            msg= "You win! Scissors beats Paper!";
        }
    }

    const display = document.querySelector("#game-display");
    display.innerHTML="";

    const result = document.createElement("h1");
    result.textContent = msg;

    const humanScoreTxt = document.createElement("h2");
    const computerScoreTxt = document.createElement("h2");

    humanScoreTxt.textContent = "Your score: " + humanScore;
    computerScoreTxt.textContent = "Computer score: " + computerScore;

    display.appendChild(result);
    display.appendChild(humanScoreTxt);
    display.appendChild(computerScoreTxt);
}

// const playGame = () => {
//     while (humanScore < 5 && computerScore < 5){
//         console.log("Round playing...");
//         console.log(playRound(getHumanChoice(), getComputerChoice()));
//         console.log("Your score: ", humanScore);
//         console.log("Computer score: ", computerScore);
//         if (humanScore === 5){
//             return "You win!";
//         } else if (computerScore === 5){
//             return "Computer wins!";
//         }
//     }
// }

//console.log(playGame());

const rockbtn = document.getElementById("rock-btn");
const paperbtn = document.getElementById("paper-btn");
const scissorsbtn = document.getElementById("scissors-btn");

rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})
scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

