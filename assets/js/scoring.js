const arrUser = [];
const objUser = {};
let startDate;

/* Handling Score -------------------*/
export function gameStart() {
  startDate = new Date();
}

export function gameTime() {
  let time = new Date() - startDate;
  return time;
}

function convertTime(milisec) {
  let minutes = ~~(milisec / 60000);
  let seconds = ~~(milisec / 1000) - minutes * 60;
  return {
    minutes: minutes,
    seconds: seconds,
  };
}

export function setName(name) {
  objUser.name = name;
}

export function setTime(time) {
  objUser.time = time;
}

// [{name: pepe,
//  time: 1245
// },
// {name: juan,
//  time: 1252
// }]
export function scoring() {
  arrUser.push(objUser);
  arrUser.sort(function (a, b) {
    return a - b;
  });
}

export function getScoring() {
  return arrUser;
}

export function getCurrentPlayer(){
  return objUser;
}
