"use strict";
//STEP 1: Build logic to show the modals when the buttons are pressed.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll(".show-modal");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showModal();
  });
});

// STEP 2: Once the modals are open add in logic to close the modals when either of the following options are pressed,
//     1. The 'X' GamepadButton.
//     2. Anywhere outside the modal.

const closeModal = [
  document.querySelector(".close-modal"),
  document.querySelector(".overlay"),
];
closeModal.forEach((element) => {
  element.addEventListener("click", () => {
    hideModal();
  });
});

//     3. The 'esc' button on the keyboard is pressed.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideModal();
  }
});

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
