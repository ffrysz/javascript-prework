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

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrałeś!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Przegrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!');
} else if (playerMove == 'nieznany ruch') {
    printMessage('Źle wybrałeś! Wpisz cyfrę z zakresu 1-3')
}
