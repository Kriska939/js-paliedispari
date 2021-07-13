/* ESERCIZIO PALINDROMA

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

// chiedere all'utente di inserire una parola 

var userWord = prompt("Inserisci una parola", "esose");

// validazione - BONUS

while (!userWord || userWord.trim() === "") {
    userWord = prompt("Inserisci una parola", "esose");
}

userWord = userWord.trim().toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma: (letta al contrario ha lo stesso significato). "isPalindrome" presuppone, dal nome, che l'esito della funzione dovrà essere true o false.

function isPalindrome(word) {

    //girare al contrario la parola dell'utente

    var reverseWord = "";

    for (i = word.length - 1; i >= 0; i--) {

        var character = word[i];
        reverseWord += character;
    }

    // verificare se la parola è uguale all'originale (palindromia)

    if (reverseWord === word) {
        return true;
    } else {
        return false;
    }

}

var palindromeOrNot = isPalindrome(userWord);

if (palindromeOrNot) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}
