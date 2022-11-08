var arr = [];
var output = document.getElementById("output");

for (i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 15);
}

console.log(arr);

// arr.forEach((number) => {
//   for (i = 1; i < 11; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
//     // output.innerHTML += `<p> ${number} * ${i} = ${number * i} </p>`;
//   }
// });
console.log();
arr.forEach((number) => {
  if (number % 2 === 0) {
    console.log(`${number} = Even`);
  } else {
    console.log(`${number} = Odd`);
  }
});

// arr.forEach((number) => {
//   output.innerHTML += "<p>" + number + "</p>";
// });
