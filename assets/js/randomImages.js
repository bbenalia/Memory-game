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
 * inject random images in DOM
 * @ Author:
 */
function randomImages(arrayFrom) {
  const arrayTo = [];
  for (let index = 0; index <= 1; index++) {
    //
    arrayFrom.sort(function () {
      return 0.5 - Math.random();
    });
    //
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
const arrSorted = randomImages(arrImg);
// inject in DOM
arrSorted.forEach((element, i) => {
  const img = document.createElement("img");
  // add cover image
  img.setAttribute("src", "./assets/img/imagen4.jpg");
  img.setAttribute("data-id", i);
  img.setAttribute("alt", "mario cover");
  img.addEventListener("click", flipImage);
  board.appendChild(img);
});

/*
 * ...
 * @ Author:
 */
function flipImage() {}
