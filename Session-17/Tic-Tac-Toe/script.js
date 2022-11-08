var squares = document.querySelectorAll("#board div");
var player1 = true;
var arr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (player1) {
      if (arr[square.dataset.x][square.dataset.y] == "") {
        arr[square.dataset.x][square.dataset.y] = "x";
        square.setAttribute("class", "cross");
        player1 = false;
      } else {
        window.alert("No!");
      }
    } else {
      if (arr[square.dataset.x][square.dataset.y] == "") {
        arr[square.dataset.x][square.dataset.y] = "o";
        square.setAttribute("class", "nought");
        player1 = true;
      } else {
        window.alert("No!");
      }
    }
  });
});
