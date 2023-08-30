function getComputerChoice () {
    let randomChoice = "";
    let num = Math.floor(Math.random() * 10);

    if(num <= 3){
        randomChoice = "Rock";
    } else if (num <= 6) {
        randomChoice = "Paper";
    } else if (num <= 10) {
        randomChoice = "Scissors";
    }

    return randomChoice;
}  

function playRound (playerSelection, computerSelction) {

    let playerWon = 1;
    let computerWon = 1;

    // IN CASE OF A TIE!
    if(((playerSelection == "Rock") && (computerSelction == "Rock")) || ((playerSelection == "Paper") && (computerSelction == "Paper")) || 
    ((playerSelection == "Scissors") && (computerSelction == "Scissors"))) {
        console.log("It's a tie!");
    }

    // THE COMPUTER WINS
    else if ((playerSelection == "Scissors") && (computerSelction == "Rock")) {
        console.log("Computer wins! Rock beats Scissors!");
        return computerWon;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Scissors")) {
        console.log("Computer wins! Scissors beat Paper!");
        return computerWon;
    }
    else if ((playerSelection == "Rock") && (computerSelction == "Paper")) {
        console.log("Computer wins! Paper beats Rock!");
        return computerWon;
    }

    // THE PLAYER WINS
    else if ((playerSelection == "Rock") && (computerSelction == "Scissors")) {
        console.log("Player wins! Rock beats Scissors!");
        return playerWon;
    }
    else if ((playerSelection == "Scissors") && (computerSelction == "Paper")) {
        console.log("Player wins! Scissors beat Paper!");
        return playerWon;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Rock")) {
        console.log("Player wins! Paper beats Rock!");
        return playerWon;
    }
}

function gameToFive(playerWon, computerWon) {
    let playerScore = 0;
    let computerScore = 0;

    playRound();
    if(playerWon == 1)
        playerScore++;
    else
    computerScore++;
    playRound();
    if(playerWon == 1)
        playerScore++;
    else
        computerScore++;
        playRound();
    if(playerWon == 1)
        playerScore++;
    else
        computerScore++;
        playRound();
    if(playerWon == 1)
        playerScore++;
    else
        computerScore++;
        playRound();
    if(playerWon == 1)
        playerScore++;
    else
        computerScore++;

    if(playerScore === 5 && computerScore < 5)
        return "Player Wins!";
    else if (computerScore === 5 && playerScore < 5)
        return "Computer wins!";
}

// console.log(getComputerChoice());

const playerSelection = prompt("What's your choice? Rock, Paper or Scissors!?: ");
const computerSelction = getComputerChoice();

//console.log(playRound(playerSelection, computerSelction))
console.log(gameToFive());