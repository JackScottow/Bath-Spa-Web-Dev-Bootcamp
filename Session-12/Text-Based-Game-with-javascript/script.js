var start = document.getElementById("start");
var image = document.getElementById("img");
var title = document.getElementById("title");
var text = document.getElementById("text");
var enterName = document.getElementById("enterName");
var buttonBox = document.getElementById("buttonBox");
var charName;
var scenario = {
  one: {
    title: "The beginning",
    image: "img/start.jpg",
    text: "Welcome, charName! You wake up delirious in the middle of a forest camp, next to you are some items to make a fire and a weapon",
    buttons: [
      ["Make Fire", "advanceTo(scenario.two)"],
      ["Take Weapon And Walk", "advanceTo(scenario.three)"],
    ],
  },
  two: {
    title: "Fire",
    image: "img/fire.jpg",
    text: "You have made a fire but have no food to put on it, you should go and find some",
    buttons: [["Take Weapon And Walk", "advanceTo(scenario.three)"]],
  },
  three: {
    title: "Oh no! A boar!",
    image: "img/boar.jpg",
    text: "You have encountered a wild boar, what do you want to do?",
    buttons: [
      ["Kill it", "advanceTo(scenario.four)"],
      ["Run away", "advanceTo(scenario.five)"],
    ],
  },
  four: {
    title: "Oh no! A dead boar!",
    image: "img/dead-boar.jpg",
    text: "Well done charName! You have slain the boar! Do you want to return to camp to cook it or carry on?",
    buttons: [
      ["Return to camp", "advanceTo(scenario.six)"],
      ["Carry on", "advanceTo(scenario.eleven)"], //
    ],
  },
  five: {
    title: "You failed!",
    image: "img/run.jpg",
    text: "You run as fast as you can never to be seen again, better luck next time, charName!",
    buttons: [["Try again", "window.location.reload();"]],
  },
  six: {
    title: "The feast",
    image: "img/cook.jpg",
    text: "You are back at camp and have somehow rustled up a delicious hog roast, wow charName! What a  great chef you are!",
    buttons: [
      ["Go to sleep", "advanceTo(scenario.seven)"],
      ["Head out again", "advanceTo(scenario.twelve)"], //
    ],
  },
  seven: {
    title: "z Z z Z z Z z",
    image: "img/sleep.jpg",
    text: "You sure were tired, charName!",
    buttons: [
      ["Sleep some more", "advanceTo(scenario.seven)"],
      ["Hear a noise and wake up", "advanceTo(scenario.eight)"],
    ],
  },
  eight: {
    title: "Hello? Who's there!?",
    image: "img/wake-up.jpg",
    text: "Uh oh, charName! You have some intruders, they don't look very friendly!",
    buttons: [
      ["Stand and fight", "advanceTo(scenario.nine)"],
      ["Run away", "advanceTo(scenario.five)"],
    ],
  },
  nine: {
    title: "You defeated the enemies!?",
    image: "img/defeated.jpg",
    text: "Well done charName! They put up a hell of a fight!",
    buttons: [["Victory!", "advanceTo(scenario.ten)"]],
  },
  ten: {
    title: "Congratulations!",
    image: "img/win.jpg",
    text: "Well done charName! You have beaten the game!",
    buttons: [["Start again", "window.location.reload();"]],
  },
  eleven: {
    title: "A lonely walk...",
    image: "img/carry-on.jpg",
    text: "You walk through the wildnerness for what seems like forever, don't forget charName! You still have the boar meat with you.",
    buttons: [
      ["Pick some berries", "advanceTo(scenario.fourteen)"],
      ["Go back to eat", "advanceTo(scenario.six)"],
    ],
  },
  twelve: {
    title: "A lonely walk...",
    image: "img/carry-on.jpg",
    text: "You walk through the wildnerness for what seems like forever, maybe you should return to camp to sleep?",
    buttons: [
      ["Pick some berries", "advanceTo(scenario.thirteen)"],
      ["Go back to sleep", "advanceTo(scenario.seven)"],
    ],
  },
  thirteen: {
    title: "Who doesn't love berries?",
    image: "img/berries.jpg",
    text: "You have filled your pockets with berries but now it's definetly time to return to camp for some sleep!",
    buttons: [["Go back to sleep", "advanceTo(scenario.seven)"]],
  },
  fourteen: {
    title: "Who doesn't love berries?",
    image: "img/berries.jpg",
    text: "You have filled your pockets with berries, they would be lovely with the boar meat!",
    buttons: [["Go back to camp", "advanceTo(scenario.fifteen)"]],
  },
  fifteen: {
    title: "The feast",
    image: "img/cook.jpg",
    text: "You are back at camp and have somehow rustled up a delicious hog roast with berries, wow charName! What a  great chef you are! You are thoroughly exhausted now though!",
    buttons: [["Go to sleep", "advanceTo(scenario.seven)"]],
  },
};

start.addEventListener("click", () => {
  charName = document.getElementById("name").value;
  if (charName == "") {
    window.alert("Your character needs a name!");
  } else {
    advanceTo(scenario.one);
    enterName.remove();
  }
});

function advanceTo(s) {
  changeTitle(s.title);
  changeImage(s.image);
  changeText(s.text);
  changeButtons(s.buttons);
}

function changeTitle(header) {
  title.innerHTML = "&nbsp" + header + "&nbsp";
}

function changeText(words) {
  text.innerHTML = words.replace("charName", "<span class='charName'>" + charName + "</span>");
}

function changeImage(img) {
  image.setAttribute("src", img);
}

function changeButtons(buttonList) {
  buttonBox.innerHTML = "";
  if (buttonList.length == 1) {
    buttonBox.innerHTML += "<button onClick=" + buttonList[0][1] + ">" + buttonList[0][0] + "</button>";
  } else {
    for (var i = 0; i < buttonList.length; i++) {
      buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
    }
  }
}
