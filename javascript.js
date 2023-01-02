const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const playerDiv = document.querySelector('.playerScore');
const computerDiv = document.querySelector('.computerScore');
const messageDiv = document.querySelector('.message');
const buttonsDiv = document.querySelector('.buttons');
const buttons = document.querySelectorAll('.playButton');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === "tie") {
            messageDiv.textContent = `It's a tie! You both choose ${playerSelection}`;
        }
        else if (result === "win") {
            messageDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
            playerScore += 1;
        }
        else if (result === "lose") {
            messageDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
            computerScore += 1;
        };
        playerDiv.textContent = `Player score: ${playerScore}`;
        computerDiv.textContent = `Computer score: ${computerScore}`;

        if (playerScore === 5){
            messageDiv.textContent = `Congratulations! You won the game!`;
            buttons.forEach((button) => button.disabled = true);
            newGame();
        }
        if (computerScore === 5){
            messageDiv.textContent = `You lost the game! Better luck nex time!`;
            buttons.forEach((button) => button.disabled = true);
            newGame();
        };
    });
});

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return `tie`;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper')
            return `lose`;

        else if (computerSelection === 'Scissors')
            return `win`;       
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock')
            return `win`;

        else if (computerSelection === 'Scissors')
            return `lose`;
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock')
            return `lose`;

        else if (computerSelection === 'Paper')
            return `win`;
    };
};

function newGame() {
    const newGameButton = document.createElement('button');
    buttonsDiv.appendChild(newGameButton);
    newGameButton.textContent = 'New Game';
    newGameButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerDiv.textContent = `Player score: 0`;
        computerDiv.textContent = `Computer score: 0`;
        messageDiv.textContent = 'Choose Rock, Paper or Scissors.';
        buttons.forEach((button) => button.disabled = false);
        buttonsDiv.removeChild(newGameButton);
    });
}


    


