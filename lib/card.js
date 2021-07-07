export function createCardComponent(data) {
  //create section
  const section = createSection();
  const cardHeader = createCardHeader();
  const cardNumber = createCardNumber(data);
  const cardh2 = createCardh2();
  const cardQuestion = createCardQuestion(data);
  const cardButton = createCardButton();
  //answer button
  cardButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("visible");
  });

  const cardAnswer = createCardAnswer(data);
  const cardTags = createCardTags(data);
  const cardBookmark = createBookmark(data);
  //   const cardBookmarkFilled = createBookmarkFilled(data);
  //bookmark toggle

  section.append(cardHeader);
  cardHeader.append(cardNumber);
  cardHeader.append(cardh2);
  cardHeader.append(cardQuestion);
  cardHeader.append(cardButton);
  cardHeader.append(cardAnswer);
  cardHeader.append(cardTags);
  cardHeader.append(cardBookmark);

  return section;
}
function createBookmark(data) {
  const bookmark = document.createElement("div");
  bookmark.classList.add("card-bookmark");
  const bookmarkEmptyImg = document.createElement("img");
  if (data.isBookmarked) {
    bookmarkEmptyImg.src = "/images/bookmarkFilled.png";
  } else {
    bookmarkEmptyImg.src = "/images/bookmark.png";
  }
  bookmark.append(bookmarkEmptyImg);

  bookmark.addEventListener("click", () => {
    if (bookmarkEmptyImg.src.includes("/images/bookmarkFilled.png")) {
      bookmarkEmptyImg.src = "/images/bookmark.png";
    } else {
      bookmarkEmptyImg.src = "/images/bookmarkFilled.png";
    }
  });
  return bookmark;
}

function createSection() {
  const section = document.createElement("article");
  section.classList.add("card");
  return section;
}

function createCardHeader() {
  const cardHeader = document.createElement("header");
  cardHeader.classList.add("card-header");
  return cardHeader;
}

function createCardNumber(data) {
  const cardNumber = document.createElement("p");
  cardNumber.classList.add("id-p");
  cardNumber.textContent = data.id;
  return cardNumber;
}

function createCardh2() {
  const cardh2 = document.createElement("h2");
  cardh2.textContent = "Question";
  return cardh2;
}

function createCardQuestion(data) {
  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("question-p");
  cardQuestion.textContent = data.question;
  return cardQuestion;
}

function createCardButton() {
  const cardButton = document.createElement("button");
  cardButton.classList.add("button-answer");
  cardButton.textContent = "Answer";
  return cardButton;
}

function createCardAnswer(data) {
  const cardAnswer = document.createElement("div");
  cardAnswer.classList.add("cardAnswer");
  cardAnswer.textContent = data.answer;
  return cardAnswer;
}

function createCardTags(data) {
  const cardTags = document.createElement("div");
  cardTags.classList.add("tags");
  cardTags.textContent = data.tags;
  return cardTags;
}
