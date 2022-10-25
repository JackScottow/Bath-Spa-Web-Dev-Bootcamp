var listArr = [];
// var item = document.getElementById("inputItem").value;
var addButton = document.getElementById("shop-add");
var clearButton = document.getElementById("clear-list");
var removeLastButton = document.getElementById("remove-last");
var list = document.getElementById("list");

addButton.addEventListener("click", () => {
  var item = document.getElementById("inputItem").value;
  if (listArr.includes(item.toUpperCase())) {
    window.alert("You already put that, silly!");
  } else if (item != "") {
    listArr.push(item.toUpperCase());
    list.innerHTML += "<p>" + item + "</p>";
  } else {
    window.alert("You forgot to write something!");
  }
  console.log(listArr);
});

clearButton.addEventListener("click", () => {
  listArr = [];
  list.innerHTML = "";
});

removeLastButton.addEventListener("click", () => {
  listArr.pop(listArr[listArr.length - 1]);
  list.innerHTML = "";
  for (i = 0; i < listArr.length; i++) {
    list.innerHTML += "<p>" + listArr[i] + "</p>";
  }
});
