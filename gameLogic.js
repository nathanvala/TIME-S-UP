let words = [];
let currentWords = [];
let currentWordIndex = 0;
let timeLeft = 60;
let timer;
let isRoundActive = false;  // Pour suivre si la manche est encore active

// Fonction pour démarrer la partie
function startGame() {
    currentWords = [...words];  // Créer une copie des mots ajoutés
    shuffleWords();  // Mélanger les mots de manière aléatoire
    score = 0;
    currentWordIndex = 0;  // Commencer à partir du premier mot
    timeLeft = 60;  // Réinitialiser le timer
    isRoundActive = true;  // La manche est maintenant active
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    startTimer();  // Démarrer le chronomètre
    showNextWord();  // Afficher le premier mot
}

// Fonction pour démarrer le chronomètre
function startTimer() {
    timer = setInterval(function() {
        if (isRoundActive) {
            timeLeft--;  // Réduire le temps restant
            document.getElementById("timer").textContent = timeLeft;

            // Arrêter le chrono si le temps est écoulé ou si tous les mots ont été devinés
            if (timeLeft <= 0 || currentWordIndex >= currentWords.length) {
                clearInterval(timer);
                alert("Le temps est écoulé ou tous les mots ont été devinés !");
                // Afficher le bouton pour passer au tour suivant
                document.getElementById("next-round-button").style.display = "block";
            }
        }
    }, 1000);  // Met à jour toutes les secondes
}

// Mélanger les mots de manière aléatoire (Fisher-Yates shuffle)
function shuffleWords() {
    for (let i = currentWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Choisir un index aléatoire
        [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];  // Échanger les éléments
    }
}

// Afficher le mot suivant
function showNextWord() {
    if (currentWordIndex < currentWords.length) {
        const word = currentWords[currentWordIndex];
        document.getElementById("current-word").textContent = word;  // Afficher le mot
    } else {
        alert("Tous les mots ont été devinés !");
        // Afficher le bouton pour passer au tour suivant
        document.getElementById("next-round-button").style.display = "block";
    }
}

// Fonction pour quand un mot est deviné correctement
function correctGuess() {
    currentWordIndex++;  // Passer au mot suivant
    if (currentWordIndex < currentWords.length) {
        showNextWord();  // Afficher le mot suivant
    } else {
        alert("Tous les mots ont été devinés !");
        // Afficher le bouton pour passer au tour suivant
        document.getElementById("next-round-button").style.display = "block";
    }
}

// Passer au mot suivant sans augmenter le score (lorsqu'un mot est passé sans être deviné)
function nextWord() {
    if (currentWordIndex < currentWords.length) {
        currentWordIndex++;  // Passer au mot suivant
        showNextWord();  // Afficher le mot suivant
    } else {
        alert("Tous les mots ont été devinés !");
        // Afficher le bouton pour passer au tour suivant
        document.getElementById("next-round-button").style.display = "block";
    }
}

// Fonction pour finir la manche et passer au tour suivant
function passToNextRound() {
    document.getElementById("next-round-button").style.display = "none";  // Cacher le bouton
    startNextTurn();  // Passer au tour suivant
}

// Fonction pour passer au tour suivant
function startNextTurn() {
    // Réinitialiser le chrono
    timeLeft = 60;
    startTimer();

    // Passer le tour au joueur suivant de l'équipe actuelle
    currentWordIndex = 0;
    showNextWord(); // Afficher le mot pour le nouveau joueur à faire deviner

    // Afficher qui joue
    console.log(`C'est le tour de l'équipe, joueur ${currentPlayerIndex + 1}`);
}