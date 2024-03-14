function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//PALINDROMA
let userWord = prompt("scrivi una parola"); 

//funzione che riscrive una parola al contrario
function wordRevert(word){
    let reverseWord= ""; 
    let i= word.length - 1; 

    while (i>=0){
        reverseWord+= word[i]; 
        i--;
    }
    return reverseWord;
}
//condizione per cui confronto la parola inserita dall'utente con il suo contrario
if (userWord === wordRevert(userWord)) {
    console.log(`la parola ${userWord} è palindroma`);
} else {
    console.log(`la parola ${userWord} non è palindroma, perchè al contrario si legge ${wordRevert(userWord)}`);
}

//PARI E DISPARI

userNum = parseInt(prompt("Pari o dispari ?"))