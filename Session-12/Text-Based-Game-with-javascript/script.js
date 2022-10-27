var start = document.getElementById("start");
var content = document.getElementById("container");
var image = document.getElementById("img");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var enterName = document.getElementById("entername");
var option1, option2;
var button1 = document.getElementById("a");
var button2 = document.getElementById("b");
var charName;
const buttonOptions = [
  ["Make Fire", "Take Weapon And Walk"],
  ["C", "D"],
];

start.addEventListener("click", () => {
  charName = document.getElementById("name").value;
  if (charName == "") {
    window.alert("You need a name!");
  } else {
    image.setAttribute("src", "img/start.jpg");
    desc.innerText =
      "Welcome, " + charName + "! You wake up delirious in the middle of a forest camp, next to you are some items to make a fire and a weapon";
    option1 = buttonOptions[0][0];
    option2 = buttonOptions[0][1];
    enterName.remove();
    start.remove();
    button1.classList.remove("hide");
    button2.classList.remove("hide");
    button1.innerText = option1;
    button2.innerText = option2;
  }
});

button1.addEventListener("click", () => {
  title.innerText = "Fire";
  desc.innerText = "You have made a fire but have no food to put on it";
  image.setAttribute("src", "img/fire.jpg");
  button1.classList.add("hide");
});

button2.addEventListener("click", () => {
  title.innerText = "Boar";
  desc.innerText = "You encounter a wild boar";
  image.setAttribute("src", "img/boar.jpg");
});
