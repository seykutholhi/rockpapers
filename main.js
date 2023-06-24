const choices = ["rock" , "paper" , "scissors"] 
let playerwin = 0;
let computerWin = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
const playRound = (playerSelection, computerSelection) =>{    
    if(computerSelection === "paper"){
        return "You loose! paper beats rock" && computerWin++
    }else if(computerSelection === "scissors"){
        return "You win! rock beats scissors" && playerwin++
    }else{
        return "draw"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));

console.log(`player win = ${playerwin}`)
console.log(`computer win = ${computerWin}`) 
