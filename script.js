/* Computer function that randomly returns rock, paper or scissors */

function computerPlay() {
  /* List that contains the three strings */
  /* Randomly select a string for the list */
  /* Return choice */
  return (choice = ["ROCK", "PAPER", "SCISSORS"][
    Math.floor(Math.random() * 3)
  ]);
}

function playRound(playerSelection) {
  /* Convert string to uppercase to avoid any case errors when comparing */
  const playerSelectionCaps = playerSelection.toUpperCase();
  const computerSelection = computerPlay();
  /* If player selection = rock & computer selection = scissors, player wins, */
  /* else if player selection = rock & computer selection = paper, computer wins, else - draw */
  /* Repeat for paper & scissors */
  if (playerSelectionCaps === computerSelection) {
    result = "It is a draw";
  } else if (playerSelectionCaps == "ROCK" && computerSelection == "PAPER") {
    result = "You Lose! Paper beats Rock";
  } else if (playerSelectionCaps == "ROCK" && computerSelection == "SCISSORS") {
    result = "You Win! Rock beats Scissors";
  } else if (playerSelectionCaps == "PAPER" && computerSelection == "ROCK") {
    result = "You Win! Paper beats Rock";
  } else if (
    playerSelectionCaps == "PAPER" &&
    computerSelection == "SCISSORS"
  ) {
    result = "You Lose! Scissors beats Paper";
  } else if (playerSelectionCaps == "SCISSORS" && computerSelection == "ROCK") {
    result = "You Lose! Rock beats Scissors";
  } else if (
    playerSelectionCaps == "SCISSORS" &&
    computerSelection == "PAPER"
  ) {
    result = "You Win! Scissors beats Paper";
  }
  return result;
}

function displayResult(result, playerScore, computerScore) {
  const printResult = document.querySelector("#results");

  const resultContent = document.createElement("p");
  resultContent.classList.add("result");
  resultContent.textContent = result;
  printResult.appendChild(resultContent);

  const resultPlayer = document.createElement("p");
  resultPlayer.classList.add("result");
  resultPlayer.textContent = playerScore;
  printResult.appendChild(resultPlayer);

  const resultComputer = document.createElement("p");
  resultComputer.classList.add("result");
  resultComputer.textContent = computerScore;
  printResult.appendChild(resultComputer);
}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
    displayResult(result, '1', '0');
  });
}); // and for each one we add a 'click' listener

// function game() {
//   /* Run a for loop for 5 games, log if a win occurred */
//   var i;
//   /* Initialize counters for wins/losses of player */
//   let winCount = 0;
//   let loseCount = 0;
//   let drawCount = 0;
//   for (i = 0; i < 5; i++) {
//     /* Select your play */
//     const playerSelection = prompt("Select your weapon of choice");
//     /* Generate computer play */
//     const computerSelection = computerPlay();
//     /* Run game and return result */
//     result = playRound(playerSelection, computerSelection);
//     /* Check if it contains win or lose to determine game outcome */
//     let win = result.includes("Win!");
//     let lose = result.includes("Lose!");

//     /* Check if the game was a win or loss and count */
//     if (win == true) {
//       console.log("You won this round");
//       winCount += 1;
//     } else if (lose == true) {
//       console.log("You lost this round");
//       loseCount += 1;
//     } else {
//       drawCount += 1;
//       console.log("This round was a draw");
//     }
//     /* If the win or loss count goes to 3 declare the outcome of the game */
//     if (winCount == 3) {
//       console.log("Congratulations you won 3/5 rounds!");
//     } else if (loseCount == 3) {
//       console.log("Bad luck, you have lost 3/5 rounds!");
//     } else if (drawCount == 3) {
//       console.log("Try again, it was a draw!");
//     }
//   }
// }
