/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  document.querySelector("h1").innerHTML = "Nuovo Titolo";
};

changeTitle();

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  document.querySelector("h1").className = "myHeading";
};

addClassToTitle();

/*const addClassToTitle = function () {
    document.querySelector("h1").classList.add("myHeading");
  };
  
  addClassToTitle(); */

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  let pContent = document.querySelectorAll("div p");
  pContent.forEach((element) => {
    element.innerText = "Nuovo Testo";
  });
};

changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  let cambioUrls = document.querySelectorAll("a"); // ('a:not(footer a'))
  for (let i = 0; i < cambioUrls.length - 1; i++) {
    cambioUrls[i].href = "https://www.google.com"; // con forEach element.setAttribute('href' , https://www.google.com)
  }
};
changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  let secondList = document.getElementById("secondList");
  let lista = document.createElement("li");
  lista.innerText = "4th";
  secondList.appendChild(lista);
};

addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  let primoDiv = document.getElementById("primoDiv");
  let paragrafo = document.createElement("p");
  paragrafo.innerText = "voglio vedere il nuovo paragrafo";
  primoDiv.appendChild(paragrafo);
};

addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  document.getElementById("firstList").style.display = "none";
  //document.getElementById('firstList').remove();
};

hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  let verde = document.querySelectorAll("ul");
  verde.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const titolo = document.querySelector("h1");
  titolo.onclick = function () {
    titolo.innerText = titolo.innerText.slice(0, -1);
  };
};
makeItClickable();

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.onclick = function () {
    const link = document.querySelector("footer a");
    alert(link.getAttribute("href"));
  };
};
revealFooterLink();

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const prodotti = [
    {
      id: 1,
      immagine: "immagine1",
      nomeProd: "prodotto1",
      quantita: 25,
      prezzo: 57,
    },
    {
      id: 2,
      immagine: "immagine2",
      nomeProd: "prodotto2",
      quantita: 31,
      prezzo: 18,
    },
    {
      id: 3,
      immagine: "immagine3",
      nomeProd: "prodotto3",
      quantita: 25,
      prezzo: 24,
    },
    {
      id: 4,
      immagine: "immagine1",
      nomeProd: "prodotto1",
      quantita: 16,
      prezzo: 47,
    },
    {
      id: 5,
      immagine: "immagine5",
      nomeProd: "prodotto5",
      quantita: 26,
      prezzo: 59,
    },
  ];
  const contenitore = document.getElementById("tableArea");
  const tabella = document.createElement("table");
  tabella.classList.add("tabella");

  const primaRiga = document.createElement("tr");

  const intImmagine = document.createElement("th");
  intImmagine.innerText = "Immagine";

  const intNome = document.createElement("th");
  intNome.innerText = "Nome prodotto";
  const intQty = document.createElement("th");
  intQty.innerText = "Quantità";
  const intPrezzo = document.createElement("th");
  intPrezzo.innerText = "Prezzo";

  primaRiga.appendChild(intImmagine);
  primaRiga.appendChild(intNome);
  primaRiga.appendChild(intQty);
  primaRiga.appendChild(intPrezzo);
  tabella.appendChild(primaRiga);

  for (let i = 0; i < prodotti.length; i++) {
    const nuovaRiga = document.createElement("tr");

    const cellaImmagine = document.createElement("td");
    cellaImmagine.innerText = `${prodotti[i].immagine}`;
    const cellaNome = document.createElement("td");
    cellaNome.innerText = `${prodotti[i].nomeProd}`;
    const cellaQty = document.createElement("td");
    cellaQty.innerText = `${prodotti[i].quantita}`;
    const cellaPrezzo = document.createElement("td");
    cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

    nuovaRiga.appendChild(cellaImmagine);
    nuovaRiga.appendChild(cellaNome);

    nuovaRiga.appendChild(cellaQty);
    nuovaRiga.appendChild(cellaPrezzo);
    tabella.appendChild(nuovaRiga);
  }

  contenitore.appendChild(tabella);
};

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {
  const tabella = document.querySelector("table");
  const nuovaRiga = document.createElement("tr");

  const cellaImmagine = document.createElement("td");
  cellaImmagine.innerText = `Immagine6`;
  const cellaNome = document.createElement("td");
  cellaNome.innerText = `prodotto6`;
  const cellaQty = document.createElement("td");
  cellaQty.innerText = `18`;
  const cellaPrezzo = document.createElement("td");
  cellaPrezzo.innerText = `25`;

  nuovaRiga.appendChild(cellaImmagine);
  nuovaRiga.appendChild(cellaNome);
  nuovaRiga.appendChild(cellaQty);
  nuovaRiga.appendChild(cellaPrezzo);
  tabella.appendChild(nuovaRiga);
};

addRow();

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const immagini = document.querySelectorAll("td img");
  immagini.forEach((element) => (element.style.display = "none"));
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  let cambiaColore = document.getElementById("changeMyColor");
  cambiaColore.style.cursor = "pointer";
  cambiaColore.onclick = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let coloreRandom = `rgb(${red},${green},${blue})`;

    cambiaColore.style.color = coloreRandom;
  };
};

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {
  document
    .querySelectorAll("h1, h2, li, a, p, h3, th, td")
    .forEach((element) => {
      element.innerText = [...element.innerText] // una stringa di testo come array con lo spread operator
        .filter((carattere) => {
          carattere = carattere.toLowerCase();
          return ( // restituzione di elementi filtrati a condizione
            carattere !== "a" &&
            carattere !== "e" &&
            carattere !== "i" &&
            carattere !== "o" &&
            carattere !== "u"
          );
        })
        .join(""); //fusione degli elementi nell'array filtrato in parola unica
    });
};

deleteVowels();