function playGame(argPlayerMove) {

    let computerMove = "nieznany ruch";
    let playerMove = "nieznany ruch";
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let playerInput = argPlayerMove;

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    computerMove = getMoveName(randomNumber);
    playerMove = getMoveName(playerInput);

    printMessage("Komputer zagrał " + computerMove);
    printMessage("Twój ruch to: " + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
            printMessage('Ty wygrywasz!');
        } else if ((computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier')) {
            printMessage('Przegrałeś!');
        } else if (computerMove == playerMove) {
            printMessage('Remis!');
        } else if (playerMove == 'nieznany ruch') {
            printMessage('Źle wybrałeś! Wpisz cyfrę z zakresu 1-3')
        }
    }

    displayResult(computerMove, playerMove);

}

//document.getElementById('play-rock').addEventListener('click', playGame(1));
//document.getElementById('play-paper').addEventListener('click', playGame(2));
//document.getElementById('play-scissors').addEventListener('click', playGame(3));

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});