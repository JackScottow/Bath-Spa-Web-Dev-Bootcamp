function turnOn() {
  document.getElementById("bulb").src = "img/on.gif";
  document.body.style.backgroundColor = "white";
  window.alert("Phew! That was scary!");
}

function turnOff() {
  if (confirm("Are you sure? It's scary in the dark!") == true) {
    document.getElementById("bulb").src = "img/off.gif";
    document.body.style.backgroundColor = "black";
  } else {
    window.alert("Good idea!");
  }
}
