var output = document.getElementById("output");
var calculate = document.getElementById("calculate");

convertFn = () => {
  var input = document.getElementById("input").value;
  var temp;
  temp = (input * 9) / 5 + 32;
  output.innerText = temp;
};

calculate.addEventListener("click", convertFn);

//F = (C × 9/5) + 32
