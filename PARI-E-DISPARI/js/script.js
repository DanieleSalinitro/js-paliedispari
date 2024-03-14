function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//PARI E DISPARI

let userChoice = prompt("Pari o dispari ?");
let userNum = parseInt(prompt("inserisci un numero"))
let botNum = getRndInteger(1,5);

function isEven(number){
  valnum = false;
  if (number % 2 === 0){
    valnum = true;
  }
  return valnum;
}

sumNum= userNum + botNum;

if ( isEven(sumNum) && (userChoice === "pari") ) or (isEven){
  console.log("congratulazioni utente, hai vinto ");
}