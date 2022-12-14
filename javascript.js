const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Rock')
            return `tie`;

        else if (computerSelection === 'Paper')
            return `lose`;

        else if (computerSelection === 'Scissors')
            return `win`;       
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'Rock')
            return `win`;

        else if (computerSelection === 'Paper')
            return `tie`;

        else if (computerSelection === 'Scissors')
            return `lose`;
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Rock')
            return `lose`;

        else if (computerSelection === 'Paper')
            return `win`;

        else if (computerSelection === 'Scissors')
            return `tie`;
    }
};




function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`Enter your choice: "Rock", "Paper" or "Scissors".`);
        if (playerSelection === '' || playerSelection === null){
            alert(`Enter: "Rock", "Paper" or "Scissors"`);
            --i;
        }
        else {
            playerSelection = playerSelection.toUpperCase();
            if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
                alert(`You entered wrong value. Enter "Rock", "Paper" or "Scissors" `)
                --i;
            }
            else {
                computerSelection = getComputerChoice();
                let result = playRound(playerSelection, computerSelection);
              
                if (result === 'win') {
                    ++playerScore;
                }
                else if (result === 'lose') {
                    ++computerScore;
                }
                else if (result === 'tie') {
                    ++playerScore;
                    ++computerScore;
                }
            }

        }

        console.log(`${computerSelection}, ${playerScore} : ${computerScore}`);
    };

    if (playerScore > computerScore) {
        return `You win! ${playerScore} : ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        return `You lose! ${playerScore} : ${computerScore}`;
    }
    else if (playerScore === computerScore) {
        return `It's a tie! ${playerScore} : ${computerScore}`
    }};

    let finalResult = game();

    console.log(finalResult);


    


