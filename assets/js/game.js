import { swapTemplate } from "./templates.js";
import { playGame, checkVictory } from "./randomImages.js";

// initial template
swapTemplate("registration", "left_section");
// ranking
swapTemplate("score", "right_section");

// listeners
document.getElementById("btnStart").addEventListener("click", startGame);

function startGame() {
  swapTemplate("play", "left_section");
  playGame();
  document.getElementById("board").addEventListener("click", prueba2);
}

function prueba2() {
  if (checkVictory()) {
    swapTemplate("finish", "left_section");
  }
}
