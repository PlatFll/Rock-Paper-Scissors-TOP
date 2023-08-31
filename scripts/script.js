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

    let win = 0;

    // IN CASE OF A TIE!
    if(((playerSelection == "Rock") && (computerSelction == "Rock")) || ((playerSelection == "Paper") && (computerSelction == "Paper")) || 
    ((playerSelection == "Scissors") && (computerSelction == "Scissors"))) {
        console.log("It's a tie!");
        win = 0
        return;
    }

    // THE COMPUTER WINS
    else if ((playerSelection == "Scissors") && (computerSelction == "Rock")) {
        console.log("Computer wins! Rock beats Scissors!");
        win = 1;
        return win;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Scissors")) {
        console.log("Computer wins! Scissors beat Paper!");
        win = 1;
        return win;
    }
    else if ((playerSelection == "Rock") && (computerSelction == "Paper")) {
        console.log("Computer wins! Paper beats Rock!");
        win = 1;
        return win;
    }

    // THE PLAYER WINS
    else if ((playerSelection == "Rock") && (computerSelction == "Scissors")) {
        console.log("Player wins! Rock beats Scissors!");
        win = 2;
        return win;
    }
    else if ((playerSelection == "Scissors") && (computerSelction == "Paper")) {
        console.log("Player wins! Scissors beat Paper!");
        win = 2;
        return win;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Rock")) {
        console.log("Player wins! Paper beats Rock!");
        win = 2;
        return win;
    }
}

function gameToFive(win) {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice? Rock, Paper or Scissors!?: ");
        let computerSelction = getComputerChoice();
        const win = playRound(playerSelection, computerSelction);
        if(win == 2){
            playerScore++;
        }
        else if(win == 1) {
            computerScore++;
        }
    }


    if((playerScore > computerScore))
        return "Player Wins overall!";
    else if ((computerScore > playerScore))
        return "Computer wins overall!";
    else 
        return "It's a draw overall!"

}

// console.log(getComputerChoice());



//console.log(playRound(playerSelection, computerSelction))
console.log(gameToFive(playRound()));