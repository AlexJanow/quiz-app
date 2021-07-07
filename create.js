const addQuestion = document.getElementById("add-question");
const addAnswer = document.getElementById("add-answer");
const addTags = document.getElementById("add-tags");
const submitButton = document.querySelector(".form__submit-button");

let formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const newQuestion = formElement.addQuestion.value;
  const newAnswer = formElement.addAnswer.value;
  const newTag = formElement.addTags.value;

  console.log(newQuestion);
  console.log(newAnswer);
  console.log(newTag);
  formElement.reset();
});
