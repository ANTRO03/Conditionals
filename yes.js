
let randomNumber = true;
let computerChoice = true;

const yourChoice1 = "heads";
const yourchoice2 = "tails";



prompt("heads or tails")

if(computerChoice) { userChoice = "You guessed right! The coin flip landed on" + " " + yourChoice1; }

  else if ("tails") { userChoice = "Sorry, the coin flip landed on" + " " + yourchoice2; } 
 
alert(userChoice);

const birthYear = 2023
prompt("what year were you born")
if((2003 - birthYear) < 21){
    alert("Sorry, you are not old enough to drink in the US")
}
  
if((2002 - birthYear) < 21){
  alert("You are old enough to drink in the US...barely")
}  

if((2001 + birthYear) > 21){
  alert("You are old enough to drink in the US")
}



(Math.random() * (maximum - minimum + 1) ) << 0