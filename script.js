function computerPlay() {
  return (choice = ["ROCK", "PAPER", "SCISSORS"][
    Math.floor(Math.random() * 3)
  ]);
}

let result = {
  message: "Test",
  playerWins: 0,
  computerWins: 0,
};

function playRound(playerSelection, result) {
  const playerSelectionCaps = playerSelection.toUpperCase();
  const computerSelection = computerPlay();

  // Determine outcome of game
  if (playerSelectionCaps === computerSelection) {
    result["message"] = "It is a draw";
  } else if (playerSelectionCaps == "ROCK" && computerSelection == "PAPER") {
    result["message"] = "You Lose! Paper beats Rock";
    result["computerWins"] += 1;
  } else if (playerSelectionCaps == "ROCK" && computerSelection == "SCISSORS") {
    result["message"] = "You Win! Rock beats Scissors";
    result["playerWins"] += 1;
  } else if (playerSelectionCaps == "PAPER" && computerSelection == "ROCK") {
    result["message"] = "You Win! Paper beats Rock";
    result["playerWins"] += 1;
  } else if (
    playerSelectionCaps == "PAPER" &&
    computerSelection == "SCISSORS"
  ) {
    result["message"] = "You Lose! Scissors beats Paper";
    result["computerWins"] += 1;
  } else if (playerSelectionCaps == "SCISSORS" && computerSelection == "ROCK") {
    result["message"] = "You Lose! Rock beats Scissors";
    result["computerWins"] += 1;
  } else if (
    playerSelectionCaps == "SCISSORS" &&
    computerSelection == "PAPER"
  ) {
    result["message"] = "You Win! Scissors beats Paper";
    result["playerWins"] += 1;
  }

  // Logic to check if there is a winner
  if (result["playerWins"] == 5) {
    result["message"] =
      "Congratulations you reached 5 points first! Scores are reset";
    result["playerWins"] = 0;
    result["computerWins"] = 0;
  } else if (result["computerWins"] == 5) {
    result["message"] =
      "Bad Luck the computer reached 5 points first! Scores are reset";
    result["playerWins"] = 0;
    result["computerWins"] = 0;
  }

  return result;
}

function displayResult(result, playerScore, computerScore) {
  const resultContainer = document.querySelector("#results-container");
  
  const resultBox = document.createElement('div');
  resultBox.classList.add('result-box');
  resultContainer.appendChild(resultBox);

  const resultContent = document.createElement("p");
  resultContent.classList.add("results");
  resultContent.textContent = result["message"];
  resultBox.appendChild(resultContent);

  const resultPlayer = document.createElement("p");
  resultPlayer.classList.add("results");
  resultPlayer.textContent = "| Player Score: " + result["playerWins"];
  resultBox.appendChild(resultPlayer);

  const resultComputer = document.createElement("p");
  resultComputer.classList.add("results");
  resultComputer.textContent = "| User Score: " + result["computerWins"];
  resultBox.appendChild(resultComputer);
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result = playRound(button.id, result);
    displayResult(result);
  });
});
