"use strict";

// OUTLINE THE STEPS FOR THE PROJECT
// STEP 1: Generate a random number for the dice roll (number ranging from 1-6) and display the appropriate dice image.
// STEP 2: While the number is not 1,add the dice value to the users score.
// STEP 3: If the dice value is 1 then we switch the player reseting the score value to 0 (only the highest score will be added).
// STEP 4: The user is also given an option to hold the value where in the final value will be compared with the highscore and the greater one would be stored.
// STEP 5: If any of the payer reaches a score of 100, they win !!
// STEP 6: Build the logic for a realod button which resets the game.

// ------------IMPORVEMENTS TO WORK ON------------------
// 1. A single activePlayer variable.
// 2. A reusable switchPlayer() function.
// 3. An array scores instead of a players object.
// 4. A resetGame() function instead of location.reload().

const diceImage = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const resetBtn = document.querySelector(".btn--new");
const currScore = document.querySelectorAll(".current-score");
const player = document.querySelectorAll(".player");
const scores = document.querySelectorAll(".score");

const highscore = [0, 0];

let activePlayer = 0;

const switchPlayer = () => {
  player[activePlayer].classList.toggle("player--active");
  currScore[activePlayer].textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player[activePlayer].classList.toggle("player--active");
};

let diceValue;

rollDiceBtn.addEventListener("click", () => {
  diceValue = Math.ceil(Math.random() * 6);
  diceImage.src = `images/dice-${diceValue}.png`;
  if (diceValue === 1) {
    switchPlayer();
  } else {
    currScore[activePlayer].textContent =
      Number(currScore[activePlayer].textContent) + diceValue;
  }
});

holdBtn.addEventListener("click", () => {
  highscore[activePlayer] =
    highscore[activePlayer] < Number(currScore[activePlayer].textContent)
      ? Number(currScore[activePlayer].textContent)
      : highscore[activePlayer];

  scores[activePlayer].textContent = highscore[activePlayer];
  if (highscore[activePlayer] >= 100) {
    player[activePlayer].classList.add("player--winner");
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
  }
  switchPlayer();
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  currScore.forEach((curr) => {
    curr.textContent = 0;
  });
  scores.forEach((score) => {
    score.textContent = 0;
  });
  highscore.fill(0);
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
  player[activePlayer].classList.remove("player--winner");
}
