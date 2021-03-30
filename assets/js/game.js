import { swapTemplate } from "./templates.js";
import { playGame, checkVictory, idChosen } from "./randomImages.js";
import { getScoring, setName, getCurrentPlayer } from "./scoring.js";

// initial template
swapTemplate("registration", "left_section");
// ranking
swapTemplate("score", "right_section");

// listener to start game boton
document.getElementById("btnStart").addEventListener("click", startGame);

function startGame() {
  const namePlayer = document.getElementById('namePlayer');
  if( namePlayer.value.trim() != ""){  
    setName(namePlayer.value);
    swapTemplate("play", "left_section");
    playGame();
    document.getElementById("board").addEventListener("click", prueba2);
    const playerPlay = document.querySelector("ul.list>li");
    playerPlay.textContent = getCurrentPlayer().name;
    const strong = document.createElement('strong');
    strong.textContent = ' Currently playing...';
    const currentPlay = playerPlay.appendChild(strong);
  }else{
    alert("Name required!");
  }
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
