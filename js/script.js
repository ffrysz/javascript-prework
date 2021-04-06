let computerMove = "nieznany ruch";
let playerMove = "nieznany ruch";
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == "2") {
    playerMove = "papier";
} else if (playerInput == "3") {
    playerMove = "nożyce";
}

console.log('Gracz wpisał: ' + playerInput);
console.log(playerMove);
console.log(randomNumber);

if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = "papier";
} else if (randomNumber == 3) {
    computerMove = "nożyce";
}

console.log(computerMove);

printMessage("Komputer zagrał " + computerMove);
printMessage("Twój ruch to: " + playerMove);
