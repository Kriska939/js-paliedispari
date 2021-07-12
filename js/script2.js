/* ESERCIZIO PARI E DISPARI

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// STEP 1 - Chiedere un numero all'utente

var userNumber = prompt("Inserisci un numero da 1 a 5", 1);

var displayUserNumber = document.getElementById("userNumber");

displayUserNumber.innerText = "Il numero che hai scelto è: " + userNumber;

// STEP 2 - Creare una funzione per generare il numero del computer 

function generateNumber() {

    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

var cpuNumber = generateNumber();

var displayCpuNumber = document.getElementById("cpuNumber");

displayCpuNumber.innerText = "Il numero del computer è: " + cpuNumber;

// check generator result:
console.log(cpuNumber);

// STEP 3 - Sommiamo i numeri 

var sum = parseInt(userNumber) + parseInt(cpuNumber);


// STEP 4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione):

function isEven(somma) {

    var isEven = false;

    if (somma % 2 === 0) {
        isEven = true;
    }

    return isEven;
}

var result = isEven(sum);

// check risultato isEven:
console.log(result);

// dichiariamo il vincitore: 

var displayWinner = document.getElementById("winner");

if (result) {
    displayWinner.innerText = "Congratulazioni! Hai vinto!"
} else {
    displayWinner.innerText = "Purtroppo hai perso."
}

