"use strict";

// STEP 1: Generate and store a random number for user to guess.

const answer = Math.floor(Math.random() * 20);
console.log(answer);

document.querySelector(".highscore").textContent =
  localStorage.getItem("highscore") || 0;

// STEP 2: Build logic to compare between this number and the one the user entered.

function checkGuessedNumber(value, ans) {
  if (value < ans) {
    return -1;
  } else if (value > ans) {
    return 1;
  } else {
    return 0;
  }
}

// STEP 3: For each incorrect guess from the user the score goes down by one.

const checkButton = document.querySelector(".check");
checkButton.addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;
  const message = document.querySelector(".message");
  const score = document.querySelector(".score");

  // STEP 3: For each incorrect guess from the user the score goes down by one.
  switch (checkGuessedNumber(guess, answer)) {
    case 1:
      message.textContent = "Too High !";
      score.textContent = Number(score.textContent) - 1;
      break;
    case 0:
      message.textContent = "You got it !!";
      document.body.style.background = "green";
      saveScore(score.textContent);
      document.querySelector(".highscore").textContent =
        localStorage.getItem("highscore");
      break;
    case -1:
      message.textContent = "Too Low !";
      score.textContent = Number(score.textContent) - 1;
  }
});

// STEP 4: Once the user enters the correct answer the whole background goes green and the score is saved (only saved if the score is greater than the highscore).
function saveScore(score) {
  const prevHighScore = localStorage.getItem("highscore");

  if (!prevHighScore) {
    localStorage.setItem("highscore", score);
  } else {
    localStorage.setItem(
      "highscore",
      prevHighScore < score ? score : prevHighScore
    );
  }
}

// STEP 5: Build reset logic for when the again button is pressed.
document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
