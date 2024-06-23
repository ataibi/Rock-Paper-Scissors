//  function playGame() {
//     // Computer Output
//     function getComputerChoice() {
//         let computerResult = Math.floor(Math.random() * 3);
//         switch (computerResult) {
//             case 0:
//                 return "rock";
//             case 1:
//                 return "paper";
//             case 2:
//                 return "scissors";
//             default:
//                 return "Hmmmm... I think I messed up somewhere";
//         }
//     }
        
//     // Human input
//     function getHumanChoice () {
//         return prompt("THIS IS THE ROCK PAPER SCISSORS TOURNAMENT !\nWhat are you going to play ?", "Rock, paper or scissors ?");
//     }

//     const winMessage = "Oh my god, you win this round !";
//     const loseMessage = "Boohoo you loose this round...";
//     const drawMessage = "It's a draw";
//     const errorMessage = "You played an unauthorized hand ! Disgusting..."

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRoundRecursive(roundNumber) {
//         if (roundNumber == 0) {
//             return ;
//         }
//         let humanShort = getHumanChoice().toLowerCase().trim();
//         let computerChoice = getComputerChoice();
//         if (humanShort != "rock" 
//                 && humanShort != "paper" 
//                 && humanShort != "scissors") {
//                     console.log(errorMessage);
//             return playRoundRecursive(roundNumber - 1);
//         }
//         else if (humanShort == computerChoice) {
//             console.log(drawMessage);
//             return playRoundRecursive(roundNumber - 1);
//         }
//         else if (humanShort == "rock" && computerChoice == "scissors" 
//                 || humanShort == "paper" && computerChoice == "rock"
//                 || humanShort == "scissors" && computerChoice == "paper") {
//             humanScore++;
//             console.log(winMessage);
//             return playRoundRecursive(roundNumber - 1);
//                 }
//         else {
//             computerScore++;
//             console.log(loseMessage);
//             return playRoundRecursive(roundNumber - 1);
//         }
//     }


//     playRoundRecursive(5);

//     const gameDrawMessage = `Well, whatever you did the computer has a score of ${computerScore}, and your score is ${humanScore} so it's a draw !`;
//     const gameLoseMessage = `With a score of ${computerScore}, computer wins !`;
//     const gameWinMessage = `With a score of ${humanScore}, you win !`;
//     const gameErrorMessage = `Hmmm... the computer has a score of ${computerScore}, and your score is ${humanScore} but to me honest I don't know what happened...`;
    
//     // Calculating winner
//     function declareWinner(player1, player2) {
//         if (player1 == player2) {
//             return gameDrawMessage;
//         }
//         else if (player1 < player2) {
//             return gameLoseMessage;
//         }
//         else if (player1 > player2) {
//             return gameWinMessage;
//         }
//         else {
//             return gameErrorMessage;
//         }
//     } 
    
//     return declareWinner(humanScore, computerScore);
// }

// Starting the game
// alert(playGame());

let playerButtons = {
    paper: document.getElementsByClassName("paper player")[0],
    rock: document.getElementsByClassName("rock player")[0],
    scissors: document.getElementsByClassName("scissors player")[0]
};

let score = {
    player: 0,
    computer: 0
};

let scoreElements = {
    player: document.getElementsByClassName("playerScore")[0],
    computer: document.getElementsByClassName("computerScore")[0],
    message: document.getElementById("gameMessage")
}

let playerHand = document.getElementsByClassName("hand player")[0];
let computerHand = document.getElementsByClassName("hand computer")[0];

    const winMessage = "🎉 You win !! 🎉";
    const loseMessage = "😖 Oh nooo 😖";
    const drawMessage = "😶 It's a draw 😶";
    const errorMessage = "You played an unauthorized hand ! Disgusting..."

function getComputerChoice() {
    let computerResult = Math.floor(Math.random() * 3);
    switch (computerResult) {
        case 0:
            computerHand.textContent = "👊";
            return "rock";
        case 1:
            computerHand.textContent = "✋";
            return "paper";
        case 2:
            computerHand.textContent = "✌️";
            return "scissors";
        default:
            return "Hmmmm... I think I messed up somewhere";
    }
}

function playRound(playerChoice, scores) {
    let humanShort = playerChoice;
    let computerChoice = getComputerChoice();
    if (humanShort != "rock" 
            && humanShort != "paper" 
            && humanShort != "scissors") {
                return errorMessage;
        }
    else if (humanShort == computerChoice) {
        return drawMessage;
    }
    else if (humanShort == "rock" && computerChoice == "scissors" 
            || humanShort == "paper" && computerChoice == "rock"
            || humanShort == "scissors" && computerChoice == "paper") {
        scores.player++;
        return winMessage;
            }
    else {
        scores.computer++;
        return loseMessage;
    }
}

Object.values(playerButtons).forEach(playerButton => {
    playerButton.addEventListener("click", function (e) {
        let choice = this.className.split(" ")[0]
        console.log(choice);
        playerHand.textContent = this.textContent;
        scoreElements.message.textContent = playRound(choice, score);
        scoreElements.computer.textContent = score.computer;
        scoreElements.player.textContent = score.player;
    })
});

document.addEventListener("keydown", (ev) => {
    console.log(ev.key)
    let choice = 0;
    content = 0;
    switch (ev.key) {
        case "q":
            choice = "paper";
            content = "✋";
            break;
        case "w":
            choice = "rock";
            content = "👊";
            break;
        case "e":
            choice = "scissors";
            content = "✌️";
            break;
        default:
            break;
    }
    if (choice === 0) 
        return ;
    playerHand.textContent = content;
    scoreElements.message.textContent = playRound(choice, score);
    scoreElements.computer.textContent = score.computer;
    scoreElements.player.textContent = score.player;
})