const arrImg = [
  {
    name: "yellowShell",
    img: "./assets/img/imagen1.jpg",
  },
  {
    name: "greenShell",
    img: "./assets/img/imagen2.jpg",
  },
  {
    name: "blueFlower",
    img: "./assets/img/imagen3.jpg",
  },
  {
    name: "redFlower",
    img: "./assets/img/imagen5.jpg",
  },
  {
    name: "coin",
    img: "./assets/img/imagen6.jpg",
  },
  {
    name: "Luigi",
    img: "./assets/img/imagen7.jpg",
  },
  {
    name: "egg",
    img: "./assets/img/imagen8.jpg",
  },
  {
    name: "blueShell",
    img: "./assets/img/imagen9.jpg",
  },
];

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

const board = document.getElementById("board");
let arrSorted = randomImages(arrImg);
// inject in DOM
function setUpGame() {
  arrSorted.forEach((element, i) => {
    const img = document.createElement("img");
    // add cover image
    setTimeout(() => {
      //img.setAttribute("src", "./assets/img/imagen4.jpg");
      // add eventListeners
      img.addEventListener("click", flipImage, true);
      // set time count score
      gameStart();
    }, 3000);
    img.setAttribute("src", element.img);
    img.setAttribute("data-id", i);
    img.setAttribute("alt", "mario cover");
    // img.addEventListener("click", flipImage);
    board.appendChild(img);
  });
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
    }, 500);
    console.log(arrChosen);
  }
}

/*
 * this checks for matches images
 * @ Author:
 */
const idChosen = [];

function checkMatch() {
  const images = document.querySelectorAll("img[data-id]");
  // if match
  if (
    arrChosen[0].name === arrChosen[1].name &&
    arrChosen[0].id !== arrChosen[1].id
  ) {
    console.log("Match", idChosen);
    images[arrChosen[0].id].removeEventListener("click", flipImage, true);
    images[arrChosen[1].id].removeEventListener("click", flipImage, true);
    // store matched id's
    idChosen.push(arrChosen[0].id);
    idChosen.push(arrChosen[1].id);
  } else {
    images[arrChosen[0].id].src = "./assets/img/imagen4.jpg";
    images[arrChosen[1].id].src = "./assets/img/imagen4.jpg";
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
function checkVictory() {
  if (idChosen.length === arrSorted.length) {
    alert(`Ganó en ${gameTime()} segundos`);
    /*--------------*/
    const images = document.querySelectorAll("img[data-id]");
    images.forEach((element) => {
      element.remove();
    });
    idChosen.splice(0, idChosen.length);
    setTime(gameTime());
    scoring(objUser);

    setTimeout(() => {
      arrSorted = randomImages(arrImg);
      setUpGame();
    }, 1000);
  }
}

// test
arrSorted = randomImages(arrImg);
setUpGame();
