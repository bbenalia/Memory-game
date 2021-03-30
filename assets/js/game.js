import { swapTemplate } from "./templates.js";
import { playGame, checkVictory, idChosen } from "./randomImages.js";
import { getScoring, setName, getCurrentPlayer, convertTime } from "./scoring.js";

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
    document.getElementById("board").addEventListener("click", goToPageFinish);
    const playerPlay = document.querySelector("ul.list>li");
    playerPlay.id = "currentPlayerDelete";
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
function goToPageFinish() {
  const arrayUsers = getScoring();
  // delay event after checkvictory.
  setTimeout(() => {
    if (arrayUsers.length !== arrUserLength) {
      // swap to finish template
      swapTemplate("finish", "left_section");
      arrUserLength = arrayUsers.length;
      //remove
      document.querySelector("#currentPlayerDelete").remove();
      //add time user
      const ul = document.querySelector('ul.list');
      const playerPlay = document.createElement("li");
      playerPlay.textContent = getCurrentPlayer().name;
      const strong = document.createElement('strong');  
      let timeFormat = "";
      if(convertTime(getCurrentPlayer().time).minutes == 0){
        timeFormat = convertTime(getCurrentPlayer().time).seconds + " s" ;
      }else{
        timeFormat = convertTime(getCurrentPlayer().time).minutes + " min" + convertTime(getCurrentPlayer().time).seconds +" s";
      }
      strong.textContent = ' ' + timeFormat;
      const currentPlay = playerPlay.appendChild(strong);
      ul.appendChild(playerPlay);
    }
  }, 700);
}
