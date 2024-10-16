"use strict";

const divCont = document.getElementsByClassName(".container");
const divSimple = document.getElementsByClassName(".simple");
let bodyClick = document.querySelector("body");

bodyClick.addEventListener("keydown", function (e) {
  // console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      divSimple.style.top = "10px";
      break;
    case "ArrowDown":
      divSimple.style.top = "bottom =+10px";
      break;
    case "ArrowLeft":
      divSimple.style.right = "+10px";
      break;
    case "ArrowRight":
      divSimple.style.right = "+10px";
      break;
  }
});
