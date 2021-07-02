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
    answer[j].classList.toggle("visible");
  });
}
