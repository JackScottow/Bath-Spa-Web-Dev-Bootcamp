var container = document.getElementById("container");

function fizzBang() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
      container.innerHTML += "<div class='fizz'>" + i + "<br> Fizz </div>";
    } else if (i % 5 === 0 && i % 3 != 0) {
      container.innerHTML += "<div class='bang'>" + i + "<br> Bang </div>";
    } else if (i % 5 === 0 && i % 5 === 0) {
      container.innerHTML += "<div class='fizzbang'>" + i + "<br>  FizzBang </div>";
    } else {
      container.innerHTML += "<div>" + i + "</div>";
    }
  }
}

fizzBang();
