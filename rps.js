function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let turn = prompt("Choose rock, paper, or scissors");
    turn = turn.toLowerCase();
    return turn;
}

let humanScore = 0;
let computerScore = 0;
const results = document.createElement("div");
document.body.appendChild(results);

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        let result = document.createElement("p");
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ". Human: " + humanScore + " Bot: " + computerScore;
        results.appendChild(result);
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore++;
        let result = document.createElement("p");
        result.textContent = "You lose. " + computerChoice + " beats " + humanChoice + ". Human: " + humanScore + " Bot: " + computerScore;
        results.appendChild(result);
    } else if (computerChoice == humanChoice) {
        let result = document.createElement("p");
        result.textContent = "You tied! Human: " + humanScore + " Bot: " + computerScore;
        results.appendChild(result)
    }

    if (humanScore == 5) {
        let result = document.createElement("p");
        result.textContent = "The Human wins!";
        results.appendChild(result);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        let result = document.creatElement("p");
        result.textContent = "The Bot wins!";
        results.appendChild(result);
        humanScore = 0;
        computerScore = 0;
    }
}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => { playRound("rock", getComputerChoice()); });
paperBtn.addEventListener("click", () => { playRound("paper", getComputerChoice()); });
scissorsBtn.addEventListener("click", () => { playRound("scissors", getComputerChoice()); })
