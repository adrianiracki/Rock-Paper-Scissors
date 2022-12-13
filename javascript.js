const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === '' || playerSelection === null)
        return `Enter: "Rock", "Paper" or "Scissors"`;

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Rock')
            return `It's a tie. Rock vs Rock.`;

        else if (computerSelection === 'Paper')
            return `You lose! Paper beats Rock!`;

        else if (computerSelection === 'Scissors')
            return `You win! Rock beats Scissors!`;       
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'Rock')
            return `You win! Paper beats Rock!`;

        else if (computerSelection === 'Paper')
            return `It's a tie. Paper vs Paper.`;

        else if (computerSelection === 'Scissors')
            return `You lose! Scissors beat Paper!`;
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Rock')
            return `You lose! Rock beats Scissors!`;

        else if (computerSelection === 'Paper')
            return `You win! Scissors beat Paper!`;

        else if (computerSelection === 'Scissors')
            return `It's a tie! Scissors vs Scissors!`;
    }
    
    else return `You entered wrong value. Enter "Rock", "Paper" or "Scissors" `;
};

const playerSelection = prompt(`Enter your choice: "Rock", "Paper" or "Scissors".`);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

