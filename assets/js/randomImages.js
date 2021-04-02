import {
  timeStart,
  setTime,
  scoring,
  gameTime,
  convertTime,
  getCurrentPlayer,
} from "./scoring.js";
import {
  arrImg,
  settings
} from "./data.js";
import {
  playSound
} from "./sound.js";

let arrSorted = [];
/*
 * random images in DOM
 * @ Author:
 */
function randomImages(arrayFrom) {
  const arrayTo = [];
  for (let index = 0; index <= 1; index++) {
    // random function
    arrayFrom.sort(function () {
      return 0.5 - Math.random();
    });
    // sorted array: double length of original
    arrayFrom.forEach((element, i) => {
      arrayTo.push(element);
    });
  }
  return arrayTo;
}

/*
 * inject cover image in DOM
 * @ Author:
 */
// inject in DOM
export function playGame() {
  arrSorted = randomImages(arrImg);
  const board = document.getElementById("board");

  // Loop all images
  arrSorted.forEach((element, i) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    setTimeout(() => {
      // add cover image
      img.setAttribute("src", "./assets/img/imagen4.png");
      // add eventListeners
      img.addEventListener("click", flipImage, true);
      // set time count score
      timeStart();
    }, settings.timePrePlay);
    // other atributtes
    img.setAttribute("src", element.img);
    img.setAttribute("data-id", i);
    img.setAttribute("alt", "mario cover");
    // img.addEventListener("click", flipImage);
    div.appendChild(img);
    board.appendChild(div);
  });
  manageUserTime("#contentPlay", true);
}

/*
 * function flip images
 * @ Author:
 */
let arrChosen = [];

function flipImage(event) {
  const objChosen = {};
  const imgId = event.target.dataset.id;
  // print image
  event.target.src = arrSorted[imgId].img;
  // object chosen
  objChosen.name = arrSorted[imgId].name;
  objChosen.id = imgId;
  // push on array
  arrChosen.push(objChosen);
  // if have 2 images
  if (arrChosen.length >= 2) {
    removeImagesClickEvent();
    setTimeout(() => {
      checkMatch();
    }, settings.timeFlipImage);
  }
}

/*
 * this checks for matches images
 * @ Author:
 */
export const idChosen = [];

function checkMatch() {
  const images = document.querySelectorAll("img[data-id]");
  // if match
  if (
    arrChosen[0].name === arrChosen[1].name &&
    arrChosen[0].id !== arrChosen[1].id
  ) {
    // console.log("Match", idChosen);
    images[arrChosen[0].id].classList.add("matched");
    images[arrChosen[1].id].classList.add("matched");
    images[arrChosen[0].id].removeEventListener("click", flipImage, true);
    images[arrChosen[1].id].removeEventListener("click", flipImage, true);
    // store matched id's
    idChosen.push(arrChosen[0].id);
    idChosen.push(arrChosen[1].id);
    // play sound match
    playSound("match");
  } else {
    images[arrChosen[0].id].classList.add("wrong");
    images[arrChosen[1].id].classList.add("wrong");
    images[arrChosen[0].id].src = "./assets/img/imagen4.png";
    images[arrChosen[1].id].src = "./assets/img/imagen4.png";
    // play sound match
    playSound("noMatch");
  }
  // win
  checkVictory();
  // reset
  arrChosen = [];
  addImagesClickEvent();
}

/*
 * This add event click to all images
 * @ Author:
 */
function addImagesClickEvent() {
  const images = document.querySelectorAll("img[data-id]");
  //
  images.forEach((element) => {
    if (!idChosen.includes(element.dataset.id)) {
      element.addEventListener("click", flipImage, true);
    }
  });
}

/*
 * this remove event click from all images
 * @ Author:
 */
function removeImagesClickEvent() {
  const images = document.querySelectorAll("img[data-id]");
  images.forEach((element) => {
    element.removeEventListener("click", flipImage, true);
  });
}

/*
 * this check for victory
 * @ Author:
 */
export function checkVictory() {
  if (idChosen.length === arrSorted.length) {
    manageUserTime("#contentPlay", false);
    // reset ids matched
    idChosen.splice(0, idChosen.length);
    // calculate time
    setTime(gameTime());
    //  view scoring
    scoring();
  }
}

/*
 * This shows the current time
 * in play screen
 * @ Author:
 */
export function manageUserTime(TagPlace, activate) {
  const d = document,
    v = d.querySelector(TagPlace),
    pTime = d.createElement("p"),
    pName = d.createElement("p");
  let timeInterval = null;
  if (activate) {
    timeInterval = setInterval(() => {
      const name = getCurrentPlayer().name;
      const currentTime = gameTime();
      pName.innerHTML = `Player: ${name}`;
      pTime.textContent = `Current time: ${convertTime(currentTime)}`;
    }, 1000);
    v.appendChild(pName);
    v.appendChild(pTime);
  } else {
    clearInterval(timeInterval);
  }
}