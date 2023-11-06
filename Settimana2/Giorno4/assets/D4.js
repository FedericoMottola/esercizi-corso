/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1;
let l2;


function area(l1, l2) {
  return l1 * l2;
  }

console.log(area(4, 5));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1;
let numero2;

function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 += numero2) * 3;
  } else { 
    return numero1 += numero2;
}
}
console.log(crazySum(2, 2));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero) {
    let differenza = Math.abs(numero -19);
    if(numero > 19) {
        differenza *= 3;
    }
    return differenza;
}

console.log(crazyDiff(24));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ((n> 20 && n<= 100) || n===400){
    return true;
    } else return false;
}

console.log(boundary(80))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parola = 'EPICODE';

function epify(stringa){
    if (stringa.startsWith(' EPICODE')) {
        return stringa;
    } else {
        return (parola + stringa)
    }
}

console.log(epify(' Ciao'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
    let risultato='';
    numero = Math.abs(numero);
    if(numero % 3 === 0 && numero % 7 === 0) {
        risultato='divisibile per tre e per sette';
    } else if (numero % 7 === 0) {
        risultato='divisibile per 7';
      }  else if (numero % 3 === 0) {
        risultato='divisibile per 3';
    } else {
        risultato='Non multiplo di tre o di sette';
    }

    return risultato;
}

console.log(check3and7(13));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let arrayStringa = stringa.split('');
    let arrayCapovolto = arrayStringa.reverse('');
    let stringaCapovolta = arrayCapovolto.join('');
    return stringaCapovolta
}

console.log(reverseString('federico'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = 'Questo esercizio è il numero otto del gruppo di esercizi del giorno quattro settimana due'

function upperFirst(stringa) {
    let arrayFrase = stringa.split(' ');
    let risultato = [];
    for (let i = 0; i < arrayFrase.length; i++) {
        let prima = arrayFrase[i].charAt(0);
        let parolaTagliata = arrayFrase[i].slice(1);
        let parolaFinale = prima.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    }
    return risultato.join(' ');
}

console.log(upperFirst(frase));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1);
}
console.log(cutString('Ciao Federico'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
let arrayNumeri = [];
for (let i = 0; i < n; i++) {
    arrayNumeri.push(Math.floor(Math.random() *11));
}
return arrayNumeri;
}
console.log(giveMeRandom(5));