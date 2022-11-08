var button = document.getElementById("button");
var results = document.getElementById("results");

button.addEventListener("click", () => {
  var guess = parseInt(document.getElementById("guess").value);
  var actualNumber = Math.floor(Math.random() * 31);
  if (guess === actualNumber) {
    results.innerText = "Well done! The number was " + actualNumber;
  } else {
    results.innerText = "Sorry! The number was " + actualNumber;
  }
  changeColor();
});

function changeColor() {
  var colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
  ];
  let colorPicker = colors[Math.floor(Math.random() * colors.length)];
  let container = document.getElementById("container");
  container.style.backgroundColor = colorPicker;
}

changeColor();
