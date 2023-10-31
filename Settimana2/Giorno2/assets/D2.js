/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 2;
let numero2 = 21;

if (numero1 > numero2) {
  document.getElementById('esercizio1').innerHTML = 'numero1 è più grande di numero2';
} else if (numero1 < numero2) {
  document.getElementById ('esercizio1').innerHTML = 'numero1 è più piccolo di numero2';
} else {
  document.getElementById('esercizio1').innerHTML = "i due numeri sono uguali";
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 6;

if (numero !==5) {
  console.log ('not equal');
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3 = 45;
let resto=numero3%5;

if (resto==0) {
  console.log ('divisibile per 5');
} 

let diviso5 = 15;

if (diviso5 % 5 === 0){
  console.log ('divisibile per 5');
  document.getElementById ('diviso5').innerHTML = 'il numero ' + diviso5 + ' è divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let verifica1 = 10;
let verifica2 = 2;

if (verifica1 === 8 || verifica2 === 8 || verifica1 + verifica2 === 8 || verifica1 - verifica2 === 8 || verifica2 - verifica1 === 8 ) {
  document.getElementById ('verifica').innerHTML = 'verificato';
} else { 
  document.getElementById ('verifica').innerHTML = 'non verificato';
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 51;
let spedizione = 10;
let totale = totalShoppingCart;

if (totalShoppingCart < 50) {
  totale += spedizione; // equivale a totale  = totale + spedizione
}

document.getElementById('totale').innerHTML = 'costo totale: euro' + totale; // fuori dall'if

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 51;
totalShoppingCart2 = totalShoppingCart2 * 0,8;
let spedizione2 = 10;
let totale2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totale2 += spedizione2; // equivale a totale  = totale + spedizione
}

document.getElementById('black').innerHTML = 'costo totale: euro' + totale;

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 6;
let x2 = 14;
let x3 = 10;

if (x1 >= x2) {
  if (x3 >= x1) {
    document.getElementById ('primo').innerHTML = x3;
    document.getElementById ('secondo').innerHTML = x1;
    document.getElementById ('terzo').innerHTML = x2;
  } else {
    if (x3 >= x2) {
    document.getElementById ('primo').innerHTML = x1;
    document.getElementById ('secondo').innerHTML = x3;
    document.getElementById ('terzo').innerHTML = x2;
    } else {
      document.getElementById ('primo').innerHTML = x1;
      document.getElementById ('secondo').innerHTML = x2;
      document.getElementById ('terzo').innerHTML = x3;
    }
  }
} else {
  if (x3 >= x2) {
    document.getElementById ('primo').innerHTML = x3;
    document.getElementById ('secondo').innerHTML = x2;
    document.getElementById ('terzo').innerHTML = x1;
  } else {
    if (x3 >= x1) {
    document.getElementById ('primo').innerHTML = x2;
    document.getElementById ('secondo').innerHTML = x3;
    document.getElementById ('terzo').innerHTML = x1;
    } else {
      document.getElementById ('primo').innerHTML = x2;
    document.getElementById ('secondo').innerHTML = x1;
    document.getElementById ('terzo').innerHTML = x3;
    }
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let test = 'Ciao'
if (typeof test === 'number') {
  document.getElementById('typeof').innerHTML = test + ' è un numero';
} else {
  document.getElementById('typeof').innerHTML = test + ' non è un numero';
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let pari = 30;

if (pari %  2 ===0) {
  document.getElementById('pari').innerHTML = pari + ' è un numero pari';
} else {
  document.getElementById('pari').innerHTML = pari + ' è un numero dispari';
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
