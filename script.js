const counter = document.getElementById("counter");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let count = 0;

decreaseButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

increaseButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});