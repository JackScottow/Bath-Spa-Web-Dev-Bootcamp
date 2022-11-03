var container = document.getElementById("container");

function fizzBang() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
      container.innerHTML += "<div>" + i + "<br> Fizz </div>";
    } else if (i % 5 === 0 && i % 3 != 0) {
      container.innerHTML += "<div>" + i + "<br> Bang </div>";
    } else if (i % 5 === 0 && i % 5 === 0) {
      container.innerHTML += "<div>" + i + "<br>  FizzBang </div>";
    } else {
      container.innerHTML += "<div>" + i + "</div>";
    }
  }
}

fizzBang();
