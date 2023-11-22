const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");
const counter = document.getElementById("count");

let count = 0;
counter.innerText = count;
countAddBtn.addEventListener("click", function () {
  count++;
  counter.innerText = count;
});
countSubtractBtn.addEventListener("click", function () {
  count--;
  counter.innerText = count;
});
