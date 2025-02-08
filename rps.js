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

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        console.log("You lose. " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else if (computerChoice == humanChoice) {
        console.log("You tied!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const human = getComputerChoice()
        const cpu = getHumanChoice();

        playRound(human, cpu);
    }
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game.");
    } else {
        console.log("You tied!");
    }
}

playGame();
