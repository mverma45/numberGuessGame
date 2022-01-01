let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Random number between 0 and 9
const generateTarget = () => {
  let randomNum = Math.floor(Math.random() * 10);

return randomNum;

}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
 function difference (humanGuess, computerGuess) {
  return Math.abs(humanGuess - computerGuess);
 } 

 console.log(difference(humanGuess, computerGuess));

if (humanGuess > computerGuess){
  return true;
} else 
return false;
}

const updateScore = (human, computer) 
if(human == true){
  human ++;
} else
computer ++;


const advanceRound = 
  currentRoundNumber ++;
