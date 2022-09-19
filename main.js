document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick = paper;
document.getElementById('scissors').onclick = scissors;

let playerChoice
let aiChoice
let score
let tieCount

function rock(){
    playerChoice = "rock";
    aiChoice = Math.floor(Math.random() * 3 + 1)
    document.getElementById("playerchoice").innerText = `your choice was ${playerChoice}`;
    document.getElementById("playerchoice").style.color = "red";
    document.getElementById("aichoice").innerText = aiChoice;
    document.getElementById('score').innerText ++;
}

function paper(){
    playerChoice = "paper";
    aiChoice = Math.floor(Math.random() * 3 + 1)
    
}

function scissors(){
    playerChoice = "scissors";
}
