import { swapTemplate } from "./templates.js";
import { playGame, checkVictory, idChosen } from "./randomImages.js";
import { getScoring } from "./scoring.js";

// initial template
swapTemplate("registration", "left_section");
// ranking
swapTemplate("score", "right_section");

// listener to start game boton
document.getElementById("btnStart").addEventListener("click", startGame);

function startGame() {
  swapTemplate("play", "left_section");
  playGame();
  document.getElementById("board").addEventListener("click", prueba2);
}

/*
 * this check delays the 
 * @ Author:
 */
let arrUserLength = getScoring().length;
function prueba2() {
  const arrayUsers = getScoring();
  // delay event after checkvictory.
  setTimeout(() => {
    if (arrayUsers.length !== arrUserLength) {
      // swap to finish template
      swapTemplate("finish", "left_section");
      arrUserLength = arrUser.length;
    }
  }, 700);
}
