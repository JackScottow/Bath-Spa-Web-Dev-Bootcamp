// const output = document.querySelector("#output");

// const checkRange = (a, b, c) => {
//   let lower = 50;
//   let upper = 99;
//   if ((a >= lower && a <= upper) || (b >= lower && b <= upper) || (c >= lower && c <= upper)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const checkRangea = (...args) => {
//   let lower = 50;
//   let upper = 99;
//   args.forEach((arg) => {
//     if (arg >= lower && arg <= upper) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   });
// };

// checkRangea(1, 2, 3, 4, 5, 6, 7, 9, 20, 105, 55);

// function isInRange(...numbers) {
//   for (let num of numbers) {
//     if (num >= 50 && num <= 99) return true;
//   }
//   return false;
// }

// console.log(isInRange(20, 60, 120)); // true (60)

var isPalindrome = function (x) {
  let arr = x.split("");
  let reversedArr = arr.slice().reverse();
  return arr.toString() === reversedArr.toString();
};

console.log(isPalindrome("HáNNáH"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("level"));
console.log(isPalindrome("jack"));

let hello = "string";
console.log(hello.split());
