let computerMove = "nieznany ruch";
//let playerMove = "nieznany ruch";
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log(randomNumber);
if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = "papier";
} else if (randomNumber == 3) {
    computerMove = "nożyce";
}

console.log(computerMove);