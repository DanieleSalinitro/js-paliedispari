function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//PARI E DISPARI

let userChoice = prompt("Pari o dispari ?");
let userNum = parseInt(prompt("inserisci un numero"))
let botNum = getRndInteger(1,5);
console.log(botNum);

function isEven(number){
  valnum = false;
  if (number % 2 === 0){
    valnum = true;
  }
  return valnum;
}

sumNum= userNum + botNum;

if (( isEven(sumNum) === true && userChoice === "pari" ) || ( isEven(sumNum) === false && userChoice === "dispari")) {
  console.log("congratulazioni utente, hai vinto ");
} else{
  console.log("il computer ha vinto !");
}