import { swapTemplate } from "./templates.js";
import { playGame, checkVictory } from "./randomImages.js";
import {
  getScoring,
  setName,
  setScoreRanking,
  getCurrentPlayer,
} from "./scoring.js";

// initial template
swapTemplate("registration", "left_section");
// ranking
swapTemplate("score", "right_section");

// listener to start game boton
document.getElementById("btnStart").addEventListener("click", startGame);

function startGame() {
  const namePlayer = document.getElementById("namePlayer");

  if (namePlayer.value.trim() != "") {
    setName(namePlayer.value);
    swapTemplate("play", "left_section");
    playGame();
    // listener
    document.getElementById("board").addEventListener("click", goToPageFinish);
    // score list
    setScoreRanking("ul.list");
  } else {
    alert("Name required!");
  }
  console.log(getCurrentPlayer());
}

/*
 * this check delays the
 * @ Author:
 */
let arrUserLength = getScoring().length;
function goToPageFinish() {
  const arrayUsers = getScoring();
  // delay event after checkvictory.
  setTimeout(() => {
    if (arrayUsers.length !== arrUserLength) {
      checkVictory();
      // swap to finish template
      swapTemplate("finish", "left_section");
      arrUserLength = arrayUsers.length;
      // score list
      setScoreRanking("ul.list");
      // Listener
      document
        .getElementById("play-again")
        .addEventListener("click", handleStartAgain);
    }
  }, 700);
}

/*
 * This starts again the game
 * @ Author:
 */
function handleStartAgain() {
  swapTemplate("registration", "left_section");
  setTimeout(() => {
    // listener to start game boton
    document.getElementById("btnStart").addEventListener("click", startGame);
  }, 1000);
}
