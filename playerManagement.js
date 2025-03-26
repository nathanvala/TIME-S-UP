let currentPlayerIndex = 0; // Indice pour suivre quel joueur fait deviner

function switchPlayer() {
    currentPlayerIndex++;
    if (currentPlayerIndex >= numPlayers) {
        currentPlayerIndex = 0; // Revenir au premier joueur
    }
    console.log("C'est le tour du joueur " + (currentPlayerIndex + 1));
}