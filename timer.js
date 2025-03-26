let timeLeft = 60;  // Temps initial de 60 secondes
let timer;

function startTimer() {
    // Démarre le chronomètre à 60 secondes
    timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft;  // Affiche les secondes restantes sur l'interface

    // Crée un intervalle de 1 seconde pour mettre à jour le chronomètre
    timer = setInterval(function() {
        timeLeft--;  // Diminue le temps restant de 1 seconde
        document.getElementById("timer").textContent = timeLeft;  // Met à jour l'affichage du chronomètre

        if (timeLeft <= 0) {
            clearInterval(timer);  // Arrête le chronomètre une fois que le temps est écoulé
            alert("Temps écoulé !");
            nextWord();  // Passe au mot suivant quand le temps est écoulé
        }
    }, 1000);  // 1000 millisecondes = 1 seconde
}

function resetTimer() {
    // Réinitialise le timer et le remet à 60 secondes
    clearInterval(timer);  // Arrête l'ancien chronomètre s'il existe
    startTimer();  // Démarre un nouveau chronomètre
}