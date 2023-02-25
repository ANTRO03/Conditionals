const userChoice = prompt("heads or tails")
const randomNumber = Math.floor(Math.random() * 2);
let computerChoice



if(randomNumber === 0){
  computerChoice = "heads"
}
else {
  computerChoice = "tails"
}

if(userChoice === computerChoice){
  alert("You guessed right! The coin flip landed on " + userChoice)
}
else{
  alert("Sorry, the coin flip landed on " + computerChoice)
}



const birthYear = prompt("what year were you born")
const age = 2023 - birthYear
if(age < 21){
    alert("Sorry, you are not old enough to drink in the US")
}
  
if(age === 21){
  alert("You are old enough to drink in the US...barely")
}  

if(age > 21){
  alert("You are old enough to drink in the US")
}


