import { settings } from "./data.js";

const arrUser = [];
const objUser = {};
let startDate;

/*
 * This function handles user time
 */
export function timeStart() {
  startDate = new Date();
}

export function gameTime() {
  let time = new Date() - startDate;
  return time;
}

/*
 * This formats string time
 */
export function convertTime(milisec) {
  let timeFormat = "";
  let minutes = ~~(milisec / 60000);
  let seconds = ~~(milisec / 1000) - minutes * 60;
  // format string
  if (minutes === 0) {
    timeFormat = seconds + "s";
  } else {
    timeFormat = minutes + "min " + seconds + "s";
  }
  return timeFormat;
}

export function setName(name) {
  objUser.name = name;
}

export function setTime(time) {
  objUser.time = time;
}

/*
 * This function stores data users
 * in an array
 */
export function scoring() {
  // clone main object
  if (settings.hardMode) {
    objUser.mode = "Hard";
    console.log("scoring hard");
  } else {
    objUser.mode = "Easy";
    console.log("scoring easy");
  }
  const cloneObj = { ...objUser };
  arrUser.push(cloneObj);
  console.log(arrUser);
  // reset main object
  objUser.name = "";
  objUser.time = "";
  objUser.mode = "";
}

export function clearCurrentPlayer() {
  // reset main object
  objUser.name = "";
  objUser.time = "";
  objUser.mode = "";
}

export function getScoring() {
  return arrUser;
}

export function getCurrentPlayer() {
  return objUser;
}

/*
 * [{name: br, time: 200}, {name:juan, time 400}]
 * This function sets ranking user
 */
export function setScoreRanking(ulSelector) {
  const d = document;
  // get the ul element from DOM
  const ulList = document.querySelector(ulSelector);
  const lis = document.querySelectorAll(`${ulSelector} li`);
  // reset ul
  lis.forEach((element) => {
    element.remove();
  });
  // current player
  if (objUser.name.trim() !== "") {
    const liScore = d.createElement("li");
    const p = d.createElement("p");
    //  create li element
    liScore.textContent = objUser.name;
    p.textContent = " currently playing";
    liScore.appendChild(p);
    // inject in DOM
    ulList.appendChild(liScore);
  }
  // loop for print elements in ul
  arrUser.forEach((element) => {
    const liScore = d.createElement("li");
    const p = d.createElement("p");
    const pm = d.createElement("p");
    liScore.textContent = element.name;
    p.textContent = convertTime(element.time);
    if (element.mode === "Hard") {
      // console.log("ranking hard");
      pm.textContent = "Hard";
    } else {
      // console.log("ranking easy");
      pm.textContent = "Easy";
    }
    // console.log(element.mode);
    // console.log(objUser);

    liScore.appendChild(p);
    liScore.appendChild(pm);
    // inject in DOM
    ulList.appendChild(liScore);
  });
}
