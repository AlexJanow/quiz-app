import { data } from "./lib/db.js";
import { createCardComponent } from "./lib/card.js";

/* Bookmark */

const questionCard = document.querySelectorAll(".card");
const bookmark = document.querySelectorAll(".card-bookmark");
const bookmarkFilled = document.querySelectorAll(".card-bookmark-filled");

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    bookmarkFilled[i].classList.toggle("hidden");
  });
}

const btn = document.querySelectorAll(".button-answer");
const answer = document.querySelectorAll(".answer");

for (let j = 0; j < btn.length; j++) {
  btn[j].addEventListener("click", () => {
    cardAnswer.classList.toggle("visible");
  });
}

//render cards from data

const cardComponents = [];
data.forEach((cardData) => {
  const cardComponent = createCardComponent(cardData);
  cardComponents.push(cardComponent);
});

//append to cardlist

const contentElement = document.querySelector(".card-list");
cardComponents.forEach((cardComponent) => {
  contentElement.append(cardComponent);
});
