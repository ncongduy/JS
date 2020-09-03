const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    return "Error input! Please choose either rock, paper or scissors!";
  }
};

let getComputerChoice = () => {
  let getNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (getNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
};

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      return "User won.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won.";
    } else {
      return "User won.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      return "User won.";
    }
  } else if (userChoice === "bomb") {
    return "User won 100%. Haha.";
  }
};

function playGame() {
  let userChoice = getUserChoice("scissors");
  let computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
