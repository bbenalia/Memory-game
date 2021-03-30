const arrUser = [];
const objUser = {};

/* Handling Score -------------------*/

function gameStart() {
    startDate = new Date();
}

function gameTime() {
    let time = new Date() - startDate;
    return time;
}

function convertTime(milisec) {
    let minutes = ~~(milisec / 60000);
    let seconds = ~~(milisec / 1000) - minutes * 60;
    return {
        minutes: minutes,
        seconds: seconds
    };
}

function setName(name) {
    objUser.name = name;
}

function setTime(time) {
    objUser.time = time;
}

function scoring(obj) {
    //if() -----comprobacion de usuario existente 
    arrUser.push(obj);

    arrUser.sort(function (a, b) {
        return a - b
    });
    //document.getElementById().innerHTML;;


    console.log("*************************");
    console.log(arrUser);
}