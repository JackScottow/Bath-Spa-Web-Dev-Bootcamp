var button = document.getElementById("changeButton");

button.addEventListener("click", () => {
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
});
