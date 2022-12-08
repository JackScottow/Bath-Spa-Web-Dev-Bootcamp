function daysUntilChristmas(date) {
  const currentDate = new Date(date); // date of input

  const christmas = new Date(2022, 11, 25); // date of christmas yyyy/mm/dd

  const timeDiff = (christmas - currentDate) / 86400000; // divide by miliseconds in a day
  console.log(christmas - currentDate);
  const diffDays = timeDiff;
  return `${diffDays} days until christmas`;
}

//mm/dd/yyyy

// console.log(daysUntilChristmas(new Date())); // todays date
// console.log(daysUntilChristmas("12/5/2022")); // mm/dd/yyyy
// console.log(daysUntilChristmas("26/5/2022")); // mm/dd/yyyy
// console.log(daysUntilChristmas("2022-12-26")); // mm/dd/yyyy

// console.log(Date.now());

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let myS = ["r", "o", "v", "v", "y", "r", "y", "g", "k", "b", "o", "i", "y", "e", "d", "y", "n", "k", "i"];

let ans = [];

myS.forEach((letter) => {
  if (alpha.indexOf(letter) - 10 >= 0) {
    ans.push(alpha[alpha.indexOf(letter) - 10]);
  } else {
    let minus = alpha.indexOf(letter) - 10;
    ans.push(alpha[alpha.length + minus]);
  }
});

console.log(ans.join(""));

let ans2 = [];
["h", "e", "l", "l", "o", "h", "o", "w", "a", "r", "e", "y", "o", "u", "t", "o", "d", "a", "y"].forEach((letter) => {
  if (alpha.indexOf(letter) + 10 <= 25) {
    ans2.push(alpha[alpha.indexOf(letter) + 10]);
  } else {
    let minus = alpha.indexOf(letter) + 10 - 26;
    ans2.push(alpha[minus]);
  }
});

console.log(ans2.join(""));
