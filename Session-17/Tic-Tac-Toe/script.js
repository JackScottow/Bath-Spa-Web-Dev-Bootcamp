var squares = document.querySelectorAll("#board div");
var player1 = true;
var text = document.getElementById("text");
var arr = [".", ".", ".", ".", ".", ".", ".", ".", "."];
var noWin = true;

const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

squares.forEach((square) => {
  square.addEventListener("click", () => {
    const tileNum = square.dataset.x;
    if (noWin) {
      if (player1) {
        if (arr[tileNum] == ".") {
          arr[tileNum] = "X";
          square.classList.add("cross");
          player1 = false;
          text.innerHTML = "O Turn";
          checkWin();
        } else {
          window.alert("No!");
        }
      } else {
        if (arr[tileNum] == ".") {
          arr[tileNum] = "O";
          square.classList.add("nought");
          player1 = true;
          text.innerHTML = "X Turn";
          checkWin();
        } else {
          window.alert("No!");
        }
      }
    }
  });
});

const checkWin = () => {
  for (let i = 0; i < winArr.length; i++) {
    if (arr[winArr[i][0]] != "." && arr[winArr[i][0]] === arr[winArr[i][1]] && arr[winArr[i][1]] === arr[winArr[i][2]]) {
      text.innerText = `${arr[winArr[i][0]]} Wins!`;
      noWin = false;
    } else if (arr.indexOf(".") == -1 && noWin == true) {
      text.innerText = "Draw!";
    }
  }
};

const resetFn = () => {
  squares.forEach((square) => {
    square.classList.remove("cross");
    square.classList.remove("nought");
  });
  text.innerHTML = "X Turn";
  noWin = true;
  arr = [".", ".", ".", ".", ".", ".", ".", ".", "."];
};
