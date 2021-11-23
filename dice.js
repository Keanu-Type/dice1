



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var P1=getRandomInt(1,7);
var P2=getRandomInt(1,7);
console.log("player1 " + P1);
console.log("player2 " + P2);

switch(P1){
  case 1:
      document.getElementById("diceimg1").src = "images/dice1.png";
     break;
  case 2:
      document.getElementById("diceimg1").src = "images/dice2.png";
     break;
  case 3:
      document.getElementById("diceimg1").src = "images/dice3.png";
     break;
  case 4:
      document.getElementById("diceimg1").src = "images/dice4.png";
     break;
  case 5:
      document.getElementById("diceimg1").src = "images/dice5.png";
     break;
  case 6:
      document.getElementById("diceimg1").src = "images/dice6.png";
     break;
default: console.log(P1);
}

switch(P2){
  case 1:
      document.getElementById("diceimg2").src= "images/dice1.png";
     break;
  case 2:
      document.getElementById("diceimg2").src= "images/dice2.png";
     break;
  case 3:
      document.getElementById("diceimg2").src= "images/dice3.png";
     break;
  case 4:
      document.getElementById("diceimg2").src= "images/dice4.png";
     break;
  case 5:
      document.getElementById("diceimg2").src= "images/dice5.png";
     break;
  case 6:
      document.getElementById("diceimg2").src= "images/dice6.png";
     break;
default: console.log(P2);
}
const header = document.getElementById("caption");
if (P1>P2){
  header.textContent = "PLAYER 1 WINS!";
}else if(P2>P1){
  header.textContent = "PLAYER 2 WINS!";
}else{
  header.textContent = "It's a TIE!";
}
