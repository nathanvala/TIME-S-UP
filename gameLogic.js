// Variables pour gérer le jeu
let words = [];
let currentRound = 1;
let currentWordIndex = 0;
let currentWords = [];
let score = 0;
let numPlayers = 2; // Nombre de joueurs dans l'équipe (peut être ajusté)

function loadWords() {
    words = JSON.parse(localStorage.getItem("words")) || [];
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = ""; // Effacer la liste avant de la remplir
    words.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        wordList.appendChild(li);
    });
}

function addWord() {
    const wordInput = document.getElementById("word-input");  // Récupère l'élément de saisie du mot
    const word = wordInput.value.trim();  // Récupère le mot, en enlevant les espaces inutiles

    if (word) {  // Vérifie que le mot n'est pas vide
        words.push(word);  // Ajoute le mot à la liste des mots
        localStorage.setItem("words", JSON.stringify(words));  // Sauvegarde les mots dans LocalStorage
        wordInput.value = "";  // Efface la saisie dans la barre de texte après l'ajout du mot
    }
}

function startGame() {
    currentWords = [...words];  // Sauvegarder une copie des mots pour les 3 manches
    score = 0;
    currentWordIndex = 0; // Commencer à partir du premier mot
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    startTimer();
    showNextWord();
}

function showNextWord() {
    if (currentWordIndex < currentWords.length) {
        const word = currentWords[currentWordIndex];
        document.getElementById("current-word").textContent = word;
    } else {
        alert("Tous les mots ont été devinés !");
        endRound();
    }
}

function correctGuess() {
    score++;
    alert("Mot deviné correctement ! Score : " + score);
    nextWord(); 
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= currentWords.length) {
        alert("Tous les mots ont été devinés !");
        endRound();
    } else {
        showNextWord();
    }
}

function endRound() {
    if (currentRound < 3) {
        currentRound++;
        currentWordIndex = 0;
        showNextWord();
    } else {
        alert("La partie est terminée ! Score final : " + score);
        resetGame();
    }
}

function resetGame() {
    localStorage.removeItem("words");
    words = [];
    currentRound = 1;
    currentWordIndex = 0;
    score = 0;
    document.getElementById("setup").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function resetWords() {
    localStorage.removeItem("words");
    words = [];
    loadWords();
}

window.onload = loadWords;