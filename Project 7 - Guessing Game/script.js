let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random()*10);
}

function getAbsoluteDistance(a, b){
  return Math.abs(a-b);
}

function compareGuesses(user, computer, secret) {
  if(user > 10){
    alert("Your number is out of range. Please choose between 0 and 9.");
    return;
  }
  let humanGuess = getAbsoluteDistance(user, secret);
  let computerGuess = getAbsoluteDistance(computer, secret);
  if(humanGuess <= computerGuess){
    return true;
  } else {
    return false;
  }
}

function updateScore(winner){
  if(winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}




