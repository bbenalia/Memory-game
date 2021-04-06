import { swapTemplate } from "./templates.js";
import { playGame, checkVictory, manageUserTime } from "./randomImages.js";
import { getScoring, setName, setScoreRanking } from "./scoring.js";
import { playSound, toggleMuteSound } from "./sound.js";
import { settings } from "./data.js";

// initial loading
loading();

setTimeout(() => {
  document.body.className='noblur';
  document.getElementById('loading').style.display='none'; 
// initial template
swapTemplate("registration", "left_section");
// ranking template
swapTemplate("score", "right_section");
// unmute sound
registerPageSound(".volume-mute");
// listener to start game boton
document.getElementById("btnStart").addEventListener("click", startGame);
/*
 * This displays the score icon in
 * mobile version
 * @ Author:
 */
document.getElementById("close").addEventListener("click", function () {
  var closed = document.getElementById("close");
  if (closed.classList.contains("nav-animation")) {
    closed.classList.remove("nav-animation");
  }
});
document.getElementById("open").addEventListener("click", function () {
  var closed = document.getElementById("close");
  closed.classList.add("nav-animation");
  // Sound Coin NavBar
  playSound("openCoin");
});
}, settings.timeLoading);

/*
 * Load template and animation
 * @ Author:
 */
function loading(){
  swapTemplate("loadingL", "left_section");
  swapTemplate("loadingR", "right_section");
  document.body.className='blur';
  swapTemplate("preLoading", "loading");

  /*setTimeout("document.body.className='noblur'", settings.timeLoading);*/
  /*setTimeout(() => {
    document.body.className='noblur';
    document.getElementById('loading').style.display='none';
  }, settings.timeLoading);*/
}


/*
 * This starts the game and
 * changes to game template
 * @ Author:
 */
function startGame() {
  const namePlayer = document.getElementById("namePlayer");
  if (namePlayer.value.trim() != "") {
    // check mode: hard or easy
    checkGameMode();
    // store data
    setName(namePlayer.value);
    swapTemplate("play", "left_section");
    // load game
    playGame();
    // score list
    setScoreRanking("ol.list");
    setScoreRanking("ol.listNav");
    // Add Audio Start
    playSound("startSound");
  } else {
    alert("Name required!");
  }
}

/*
 * This listener wait for animations end
 * @ Author:
 */
document.addEventListener("animationend", handleAnimationEnd);

let arrUserLength = getScoring().length;
function handleAnimationEnd() {
  // clean animations
  cleanAnimations();
  // if game finished
  const arrayUsers = getScoring();
  if (arrayUsers.length !== arrUserLength) {
    checkVictory();
    // swap to finish template
    swapTemplate("finish", "left_section");
    // score list
    setScoreRanking("ol.list");
    setScoreRanking("ol.listNav");
    // Listener
    document
      .getElementById("play-again")
      .addEventListener("click", handleStartAgain);
    // Sound Level Completed
    playSound("levelCompleted");
    arrUserLength = arrayUsers.length;
  }
}

/*
 * This function clean the wrong animation
 * game
 * @ Author:
 */
function cleanAnimations() {
  const allImages = document.querySelectorAll("img[data-id]");
  allImages.forEach((element) => {
    if (element.classList.contains("wrong")) {
      element.classList.remove("wrong");
    }
  });
}

/*
 * Check game mode and set imported variable
 * game
 * @ Author:
 */
function checkGameMode() {
  let option = document.getElementById("mode");
  if (option.value === "hard") {
    settings.hardMode = true;
  } else {
    settings.hardMode = false;
  }
}

/*
 * This starts again the game
 * @ Author:
 */
export function handleStartAgain() {
  swapTemplate("registration", "left_section");
  registerPageSound(".volume-mute");
  setTimeout(() => {
    // listener to start game boton
    document.getElementById("btnStart").addEventListener("click", startGame);
    // unmute sound
  }, 1000);
}

/*
 * this function adds registration sound
 * @ Author:
 */
export function registerPageSound(selector) {
  const d = document;
  const divVolume = document.querySelector(selector);
  divVolume.addEventListener("click", function () {
    d.querySelectorAll(".icon").forEach((element) => {
      element.classList.toggle("volume-show");
    });
    // play and toggle sound
    playSound("register-sound");
    toggleMuteSound("register-sound");
  });
}
