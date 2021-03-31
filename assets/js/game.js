import {
  swapTemplate
} from "./templates.js";
import {
  playGame,
  checkVictory,
  manageUserTime
} from "./randomImages.js";
import {
  getScoring,
  setName,
  setScoreRanking
} from "./scoring.js";

// initial template
swapTemplate("registration", "left_section");
// ranking
swapTemplate("score", "right_section");

// listener to start game boton
document.getElementById("btnStart").addEventListener("click", startGame);

/*
 * This starts the game and
 * changes to game template
 * @ Author:
 */
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
    setScoreRanking("ul.listNav");
  } else {
    alert("Name required!");
  }
}

/*
 * this check victory and
 * delays the finish template
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
      setScoreRanking("ul.listNav");
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

/*
 * This displays the score icon in
 * mobile version
 * @ Author:
 */
document.getElementById("close").addEventListener("click", function () {
  var closed = document.getElementById("close");
  closed.style.display = "none";
});
document.getElementById("open").addEventListener("click", function () {
  var closed = document.getElementById("close");
  closed.style.display = "block";
});



/*
 * this function clean the wrong animation
 * game
 * @ Author:
 */


document.addEventListener("animationend", pruebasP);
function pruebasP() {
  console.log("Funcionaaaa");
  const allImages = document.querySelectorAll("img[data-id]");

  allImages.forEach(element => {
    if (element.classList.contains("wrong")) {
      element.classList.remove("wrong");
    }
  });

}