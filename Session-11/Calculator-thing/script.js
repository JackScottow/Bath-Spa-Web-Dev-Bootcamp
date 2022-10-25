let a = document.getElementById("firstNum").value;
let b = document.getElementById("secondNum").value;
let addButton = document.getElementById("add");
let result = document.getElementById("result");
let a2, b2, result2;

addButton.addEventListener("click", () => {
  a2 = a;
  b2 = b;
  result2 = a2 + b2;
  console.log(result2);
  result.innerText = result2;
});
