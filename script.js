const playerInterface = document.getElementsByClassName("weapon");
for (const weapon of playerInterface){
    weapon.addEventListener('click', playRound);
}

let playerScore = 0,
    computerScore = 0,
    round = 0;
let resultOutput = document.querySelector("#resultText");

function computerPlay() {
    //generate random number from 1 to 3
    let computerChoice;
    let randomNum = Math.ceil(Math.random() * 3);
    //1 - rock, 2 - paper, 3 - scissors
    if (randomNum === 3) {
        computerChoice = 'paper';
    } else if (randomNum === 2) {
        computerChoice = 'rock';
    } else {
        computerChoice = 'scissors';
    }
    //return computer choice
    return computerChoice;
}

function playRound(e) {
    const computerChoice = computerPlay();
    const playerChoice = e.srcElement.dataset.weaponname;

    //if draw return 3, if player won return 1, if player lost retirn 2
    if (playerChoice === computerChoice) {
        resultOutput.textContent = `Round ${round + 1}. Draw! You both used ${computerChoice}`;
    } else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {

        resultOutput.textContent = `Round ${round + 1}.You won! Because ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        resultOutput.textContent = `Round ${round + 1}.You lost! Because ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    round++;
    if (round === 5) {
        checkScores();
        playerScore = 0,
        computerScore = 0,
        round = 0;
    }
}

function checkScores() {
    if (playerScore > computerScore) {
        resultOutput.textContent += `\r\nOverall score ${playerScore}:${computerScore}. You won!`
    } else if (playerScore === computerScore) {
        resultOutput.textContent += `\r\nOverall score ${playerScore}:${computerScore}. Draw!`
    } else {
        resultOutput.textContent += `\r\nOverall score ${playerScore}:${computerScore}. You lost!`
    }
}