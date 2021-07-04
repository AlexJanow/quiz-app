const slider = document.querySelector(".switch");
const cb = document.getElementById("accept");
const element = document.body;

slider.addEventListener("click", () => {
  if (cb.checked === true) {
    element.classList.toggle("night");
    console.log(cb.checked);
  }
});
