var display = document.getElementById("display");
var numbers = document.querySelectorAll(".numbers div");
var operators = document.querySelectorAll(".operators div");
var calculate = document.getElementById("calculate");
var deleteX = document.getElementById("delete");
var clear = document.getElementById("clear");
var op = ["+", "-", "×", "÷"];
var opKeys = ["+", "-", "*", "/"];
var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

deleteFn = () => {
  var currentVal = display.innerText;
  display.innerText = currentVal.slice(0, -1);
};

calculateFn = function () {
  var inputString = display.innerText;
  var numberArr = inputString.split(/\+|\-|\×|\÷/g);
  var operatorArr = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operatorArr.indexOf("÷");
  while (divide != -1) {
    numberArr.splice(divide, 2, numberArr[divide] / numberArr[divide + 1]);
    operatorArr.splice(divide, 1);
    divide = operatorArr.indexOf("÷");
  }

  var multiply = operatorArr.indexOf("×");
  while (multiply != -1) {
    numberArr.splice(multiply, 2, numberArr[multiply] * numberArr[multiply + 1]);
    operatorArr.splice(multiply, 1);
    multiply = operatorArr.indexOf("×");
  }

  var subtract = operatorArr.indexOf("-");
  while (subtract != -1) {
    numberArr.splice(subtract, 2, numberArr[subtract] - numberArr[subtract + 1]);
    operatorArr.splice(subtract, 1);
    subtract = operatorArr.indexOf("-");
  }

  var add = operatorArr.indexOf("+");
  while (add != -1) {
    numberArr.splice(add, 2, parseFloat(numberArr[add]) + parseFloat(numberArr[add + 1]));
    operatorArr.splice(add, 1);
    add = operatorArr.indexOf("+");
  }

  display.innerText = numberArr[0];
};

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

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (keys.includes(e.key)) {
    display.innerText += e.key;
  } else if (opKeys.includes(e.key)) {
    display.innerText += op[opKeys.indexOf(e.key)];
  } else if (e.key == "Backspace") {
    deleteFn();
  } else if (e.key == "Enter") {
    calculateFn();
  }
});

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    var currentVal = display.innerText;
    var lastVal = currentVal[currentVal.length - 1];
    console.log(currentVal);
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
    }
  });
}

calculate.addEventListener("click", calculateFn);

// calculate.addEventListener("click", () => {
//   var currentVal = display.innerText;
//   var lastVal = currentVal[currentVal.length - 1];
//   if (op.includes(lastVal)) {
//     display.innerText = currentVal.slice(0, -1);
//   }
//   var displayReplaced = display.innerText.replace("×", "*").replace("÷", "/");
//   console.log(displayReplaced);
//   display.innerText = Function("return " + displayReplaced)();
// });

deleteX.addEventListener("click", deleteFn);

// divide
// multiply
// add
// subtract
