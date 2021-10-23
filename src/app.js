/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let img = ["♦", "♥", "♠", "♣"];
  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let pag = document.querySelector("body");
  pag.style.background = "green";

  let pinta;
  let numCard;

  pinta = Math.floor(Math.random() * img.length);
  numCard = Math.floor(Math.random() * num.length);

  if (img[pinta] == "♥" || img[pinta] == "♦") {
    document.querySelector("#top").className = "cardRed";
    document.querySelector("#bottom").className = "cardRed";
  } else {
    document.querySelector("#top").className = "cardBlack";
    document.querySelector("#bottom").className = "cardBlack";
  }

  document.querySelector("#top").innerHTML = img[pinta];
  document.querySelector("#center").innerHTML = num[numCard];
  document.querySelector("#bottom").innerHTML = img[pinta];

  console.log(pinta);
  console.log(numCard);
};
