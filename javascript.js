const choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice = getComputerChoice();

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
};


console.log(getComputerChoice());