


(function hideGoodLuck() {
    setTimeout(function(){
        document.getElementById('welcome').style.display = 'none';
    }, 1000)
})();


// Recupera gli elementi della pallina e del numero dei punti
var palla = document.getElementById("palla");
var numeroPunti = document.getElementById("number");

// Variabili per la posizione iniziale della pallina
var posizioneY = -50;
var posizioneX = Math.floor(Math.random() * window.innerWidth); // Posizione orizzontale casuale

// Variabile per il conteggio dei punti
var punti = 0;

// Variabile per la velocità
var velocita = 5; // Velocità iniziale, puoi regolare il valore

// Funzione per gestire il movimento della pallina
function muoviPalla() {
    // Incrementa la posizione verticale
    posizioneY += velocita; // Usa la variabile velocità

    // Verifica se la pallina ha raggiunto il fondo dello schermo
    if (posizioneY > window.innerHeight) {
        // Reimposta la posizione verticale
        posizioneY = -50;

        // Genera una nuova posizione orizzontale casuale
        posizioneX = Math.floor(Math.random() * window.innerWidth);

        // Aumenta la velocità dopo ogni clic
        velocita += 1;

        // Aggiorna la posizione orizzontale della pallina
        palla.style.left = posizioneX + "px";
    }

    // Imposta la nuova posizione verticale della pallina
    palla.style.top = posizioneY + "px";
}

// Funzione chiamata quando si clicca sulla pallina
function gestPoints() {
    // Incrementa il conteggio dei punti
    punti++;

    // Aggiorna il testo del numero dei punti
    numeroPunti.textContent = punti;

    // Nasconde la pallina
    palla.style.display = "none";

    // Dopo un ritardo di 1 secondo, reimposta la posizione, aumenta la velocità e mostra la pallina
    setTimeout(function () {
        // Reimposta la posizione verticale
        posizioneY = -50;

        // Genera una nuova posizione orizzontale casuale
        posizioneX = Math.floor(Math.random() * window.innerWidth);

        // Aumenta la velocità dopo ogni clic
        velocita += 1;

        // Aggiorna la posizione orizzontale della pallina
        palla.style.left = posizioneX + "px";

        // Mostra la pallina
        palla.style.display = "block";
    }, 1000);
}

// Imposta l'intervallo per chiamare la funzione di movimento ogni 50 millisecondi (puoi regolare il valore)
var intervalloMovimento = setInterval(muoviPalla, 50);


