var display = document.getElementById("display");
var numbers = document.querySelectorAll(".numbers div");
var operators = document.querySelectorAll(".operators div");
var calculate = document.getElementById("calculate");
var deleteX = document.getElementById("delete");
var clear = document.getElementById("clear");
var copy = document.getElementById("copy");
var op = ["+", "-", "×", "÷"];
var opKeys = ["+", "-", "*", "/"];
var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var numbersJumbled = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

clearFn = () => {
  display.setAttribute("style", "text-align:center; color:red; padding:0");
  display.innerText = "* * * * *";
  setTimeout(function () {
    display.setAttribute("style", "text-align:left");
    display.innerText = "";
  }, 250);
};

deleteFn = () => {
  var currentVal = display.innerText;
  display.innerText = currentVal.slice(0, -1);
};

copyFn = () => {
  if (display.innerText != "Copied!") {
    var copyTemp = display.innerText;
    window.getSelection().selectAllChildren(display);
    document.execCommand("copy");
    display.setAttribute("style", "text-align:center; color:red; padding:0");
    display.innerText = "Copied!";
    setTimeout(function () {
      display.setAttribute("style", "text-align:left");
      display.innerText = copyTemp;
    }, 500);
  }
};

calculateFn = () => {
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

keydownFn = (e) => {
  var currentVal = display.innerText;
  var lastVal = currentVal[currentVal.length - 1];
  if (keys.includes(e.key)) {
    display.innerText += e.key;
    numbers[numbersJumbled.indexOf(e.key)].classList.add("down");
    setTimeout(function () {
      numbers[numbersJumbled.indexOf(e.key)].classList.remove("down");
    }, 100);
  } else if (opKeys.includes(e.key) & (opKeys.indexOf(lastVal) == -1) & (currentVal != "")) {
    display.innerText += op[opKeys.indexOf(e.key)];
    operators[opKeys.indexOf(e.key)].classList.add("down");
    setTimeout(function () {
      operators[opKeys.indexOf(e.key)].classList.remove("down");
    }, 100);
  } else if (e.key == "Backspace") {
    deleteX.classList.add("down");
    setTimeout(function () {
      deleteX.classList.remove("down");
    }, 100);
    deleteFn();
  } else if ((e.key == "Enter") & (opKeys.indexOf(lastVal) == -1)) {
    calculate.classList.add("down");
    setTimeout(function () {
      calculate.classList.remove("down");
    }, 100);
    calculateFn();
  } else if (e.key == "Escape" || e.key == "c") {
    clear.classList.add("down");
    setTimeout(function () {
      clear.classList.remove("down");
    }, 100);
    clearFn();
  } else if ((e.key == ".") & (lastVal != ".")) {
    display.innerText += e.key;
  }
};

for (let i = 0; i < numbers.length; i++) {
  var currentVal = display.innerText;
  var lastVal = currentVal[currentVal.length - 1];
  numbers[i].addEventListener("click", () => {
    if (numbers[i].innerText === "C") {
      clearFn();
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
    }
  });
}

window.addEventListener("keydown", keydownFn);

calculate.addEventListener("click", calculateFn);

deleteX.addEventListener("click", deleteFn);

copy.addEventListener("click", copyFn);
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

// divide
// multiply
// add
// subtract
