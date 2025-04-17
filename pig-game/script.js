"use strict";

// OUTLINE THE STEPS FOR THE PROJECT
// STEP 1: Generate a random number for the dice roll (number ranging from 1-6) and display the appropriate dice image.
// STEP 2: While the number is not 1,add the dice value to the users score.
// STEP 3: If the dice value is 1 then we switch the player reseting the score value to 0 (only the highest score will be added).
// STEP 4: The user is also given an option to hold the value where in the final value will be compared with the highscore and the greater one would be stored.
// STEP 5: If any of the payer reaches a score of 100, they win !!
// STEP 6: Build the logic for a realod button which resets the game.

const diceImage = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const resetBtn = document.querySelector(".btn--new");
const currScore = document.querySelectorAll(".current-score");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player0Score = document.getElementById("score--0");
const player1Score = document.getElementById("score--1");

const players = {
  player0: 0,
  player1: 0,
};

let diceValue;

rollDiceBtn.addEventListener("click", () => {
  diceValue = Math.ceil(Math.random() * 6);
  diceImage.src = `images/dice-${diceValue}.png`;

  if (diceValue === 1) {
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }

  if (player0.classList.value.includes("player--active")) {
    currScore[1].textContent = 0;
    currScore[0].textContent = Number(currScore[0].textContent) + diceValue;
  } else {
    currScore[0].textContent = 0;
    currScore[1].textContent = Number(currScore[1].textContent) + diceValue;
  }
});

holdBtn.addEventListener("click", () => {
  if (player0.classList.value.includes("player--active")) {
    players.player0 =
      players.player0 < Number(currScore[0].textContent)
        ? Number(currScore[0].textContent)
        : players.player0;
    player0Score.textContent = players.player0;
    currScore[0].textContent = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  } else {
    players.player1 =
      players.player1 < Number(currScore[1].textContent)
        ? Number(currScore[1].textContent)
        : players.player1;
    player1Score.textContent = players.player1;
    currScore[1].textContent = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }

  if (players.player0 >= 10) {
    player0.classList.add("player--winner");
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
  }

  if (players.player1 >= 100) {
    player1.classList.add("player--winner");
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
