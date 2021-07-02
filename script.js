/* Bookmark */

const questionCard = document.querySelectorAll(".card");
const bookmark = document.querySelectorAll(".card-bookmark");
const bookmarkFilled = document.querySelectorAll(".card-bookmark-filled");

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    bookmarkFilled[i].classList.toggle("hidden");
  });
}
