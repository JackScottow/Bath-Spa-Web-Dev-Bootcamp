var display = document.getElementById("display");
var numbers = document.querySelectorAll(".numbers div");
var operators = document.querySelectorAll(".operators div");
var calculate = document.getElementById("calculate");
var deleteX = document.getElementById("delete");
var clear = document.getElementById("clear");
var op = ["+", "-", "×", "÷"];

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (numbers[i].innerText === "C") {
      display.setAttribute("style", "text-align:center; color:red; padding:0");
      display.innerText = "* * * * * *";
      setTimeout(function () {
        display.setAttribute("style", "text-align:left");
        display.innerText = "";
      }, 300);
    } else {
      display.innerText += numbers[i].innerText;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    var currentVal = display.innerText;
    var lastVal = currentVal[currentVal.length - 1];

    if (operators[i].innerText === "+") {
      if (op.includes(lastVal)) {
        display.innerText = currentVal.slice(0, -1);
      }
      display.innerText += "+";
    } else if (operators[i].innerText === "-") {
      if (op.includes(lastVal)) {
        display.innerText = currentVal.slice(0, -1);
      }
      display.innerText += "-";
    } else if (operators[i].innerText === "×") {
      if (op.includes(lastVal)) {
        display.innerText = currentVal.slice(0, -1);
      }
      display.innerText += "×";
    } else if (operators[i].innerText === "÷") {
      if (op.includes(lastVal)) {
        display.innerText = currentVal.slice(0, -1);
      }
      display.innerText += "÷";
    } else if (operators[i].innerText === "(") {
      display.innerText += "(";
    } else if (operators[i].innerText === ")") {
      display.innerText += ")";
    }
  });
}

calculate.addEventListener("click", () => {
  var currentVal = display.innerText;
  var lastVal = currentVal[currentVal.length - 1];
  if (op.includes(lastVal)) {
    display.innerText = currentVal.slice(0, -1);
  }
  var displayReplaced = display.innerText.replace("×", "*").replace("÷", "/");
  console.log(displayReplaced);
  display.innerText = Function("return " + displayReplaced)();
});

deleteX.addEventListener("click", () => {
  var currentVal = display.innerText;
  var lastVal = currentVal[currentVal.length - 1];
  display.innerText = currentVal.slice(0, -1);
});
