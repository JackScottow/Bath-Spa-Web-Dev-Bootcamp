let a = document.getElementById("firstNum");
let b = document.getElementById("secondNum");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let result = document.getElementById("result");
let x;

addButton.addEventListener("click", () => {
  x = +a.value + +b.value;
  result.innerText = x;
});

subtractButton.addEventListener("click", () => {
  x = +a.value - +b.value;
  result.innerText = x;
});

multiplyButton.addEventListener("click", () => {
  x = +a.value * +b.value;
  result.innerText = x;
});

divideButton.addEventListener("click", () => {
  x = +a.value / +b.value;
  result.innerText = x;
});
