//BUTTONS
const playedRockButton = document.querySelector("#rock");
const playedPaperButton = document.querySelector("#paper");
const playedScissorsButton = document.querySelector("#scissors");


//Buttons function
playedRockButton.addEventListener("click" , () => {playRound("Rock", getComputerChoice())});
playedPaperButton.addEventListener("click" , () => {playRound("Paper", getComputerChoice())});
playedScissorsButton.addEventListener("click" , () => {playRound("Scissors", getComputerChoice())});

//Game outcome text
const container = document.querySelector('#container');

const gameOutcome = document.createElement('div');
gameOutcome.classList.add('gameOutcome');
gameOutcome.textContent = "Welcome to Rock , Paper , Scissors! Pick an option: ";

container.appendChild(gameOutcome);


const computerChoice = document.createElement('div');
container.appendChild(computerChoice);

const finalScore = document.createElement('div');
let compScore = 0;
let playScore = 0;
container.appendChild(finalScore);


//Functions

function getComputerChoice () {
    let randomChoice = "";
    let num = Math.floor(Math.random() * 10);

    if(num <= 3){
        randomChoice = "Rock";
        computerChoice.textContent = "Computer played rock!";
    } else if (num <= 6) {
        randomChoice = "Paper";
        computerChoice.textContent = "Computer played paper!";
    } else if (num <= 10) {
        randomChoice = "Scissors";
        computerChoice.textContent = "Computer played scissors!";
    }

    return randomChoice;
}  

//This function was buggy!
function announceComputerChoice() {
    let choice = getComputerChoice();

    if(choice == "Rock"){
        computerChoice.textContent = "Computer played rock!";
    }
    else if(choice == "Paper"){
        computerChoice.textContent = "Computer played paper!";
    }
    else if(choice == "Scissors"){
        computerChoice.textContent = "Computer played scissors!";
    }
}


function playRound (playerSelection, computerSelction) {

    let win = 0;

    // IN CASE OF A TIE!
    if(((playerSelection == "Rock") && (computerSelction == "Rock")) || ((playerSelection == "Paper") && (computerSelction == "Paper")) || 
    ((playerSelection == "Scissors") && (computerSelction == "Scissors"))) {
        console.log("It's a tie!");
        gameOutcome.textContent = "It's a tie!";
        win = 0
        return;
    }

    // THE COMPUTER WINS
    else if ((playerSelection == "Scissors") && (computerSelction == "Rock")) {
        console.log("Computer wins! Rock beats Scissors!");
        gameOutcome.textContent = "Computer wins! Rock beats Scissors!";
        win = 1;
        compScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Scissors")) {
        console.log("Computer wins! Scissors beat Paper!");
        gameOutcome.textContent = "Computer wins! Scissors beat Paper!";
        win = 1;
        compScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }
    else if ((playerSelection == "Rock") && (computerSelction == "Paper")) {
        console.log("Computer wins! Paper beats Rock!");
        gameOutcome.textContent = "Computer wins! Paper beats Rock!";
        win = 1;
        compScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }

    // THE PLAYER WINS
    else if ((playerSelection == "Rock") && (computerSelction == "Scissors")) {
        console.log("Player wins! Rock beats Scissors!");
        gameOutcome.textContent = "Player wins! Rock beats Scissors!";
        win = 2;
        playScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }
    else if ((playerSelection == "Scissors") && (computerSelction == "Paper")) {
        console.log("Player wins! Scissors beat Paper!");
        gameOutcome.textContent = "Player wins! Scissors beat Paper!";
        win = 2;
        playScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }
    else if ((playerSelection == "Paper") && (computerSelction == "Rock")) {
        console.log("Player wins! Paper beats Rock!");
        gameOutcome.textContent = "Player wins! Paper beats Rock!";
        win = 2;
        playScore++;
        finalScore.textContent = `Computer : ${compScore} - Player : ${playScore}`;
        return win;
    }
}

//No need to use to for now
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
}


//     if((playerScore > computerScore))
//         return "Player Wins overall!";
//     else if ((computerScore > playerScore))
//         return "Computer wins overall!";
//     else 
//         return "It's a draw overall!"

// }

//REDUNDANT FUNCTION FOR NOW
function customPlay () {
    let playerScore = 0;
    let computerScore = 0; 

    let computerSelction = getComputerChoice();
    let playerSelection = getPlayerChoice();

    const win = playRound(playerSelection, computerSelction);
        if(win == 2){
            playerScore++;
        }
        else if(win == 1) {
            computerScore++;
        }
}
