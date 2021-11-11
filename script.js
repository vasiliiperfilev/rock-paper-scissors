function computerPlay() {
    //generate random number from 1 to 3
    let computerChoice;
    let randomNum = Math.ceil(Math.random() * 3);
    //1 - rock, 2 - paper, 3 - scissors
    if (randomNum === 3) {
        computerChoice = 'paper';
    }
    else if (randomNum === 2) {
        computerChoice = 'rock';
    }
    else {
        computerChoice = 'scissors';
    }
    //return computer choice
    return computerChoice;
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    //if draw return 3, if player won return 1, if player lost retirn 2
    if (playerChoice === computerChoice){
        return 3
    }
    else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')){
        return 1
    }
    else {
        return 2
    }
}

function game() {
    //wins counters
    let playerWin = 0, computerWin = 0;
    
    //5 rounds
    for (let i = 0; i < 5; i++){
        //use input
        let playerChoice = prompt(`Round ${i+1}: Enter 'rock', 'paper' or 'scissors'`).toLowerCase();
        let computerChoice = computerPlay();
        //result string
        result = playRound(playerChoice, computerChoice);
        //if result 1 player won, if 2 computer won else draw
        if (result === 1){
            console.log(`You won! Because ${playerChoice} beats ${computerChoice}`);
            playerWin++;
        }
        else if (result === 2){
            console.log(`You lost! Because ${computerChoice} beats ${playerChoice}`);
            computerWin++;
        }
        else {
            console.log(`Draw! You both used ${computerChoice}`);
        }
    }

    //if overall player score > computer score player win else computer win
    if (playerWin > computerWin){
        console.log(`Overall score ${playerWin}:${computerWin}. You won!`)
    }
    else if (playerWin === computerWin){
        console.log(`Overall score ${playerWin}:${computerWin}. Draw!`)
    }
    else {
        console.log(`Overall score ${playerWin}:${computerWin}. You lost!`)
    }
}

game();