//change to camelCase from hello_hellO-hellO etc

const changeCase = (string) => {
  let temp = string.toLowerCase().replaceAll("-", "_").split("_");

  for (let i = 1; i < temp.length; i++) {
    temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
  }

  return temp.join("");
};

//it takes four parameters children,partners name, location, jobtitle
//it outputs to the id fortuneTeller in the html file
//  " you will ba a jobTitle in a location and married to partnersName and have children children"
// function needs to have four different values for each parameter

const fortuneTeller = () => {
  let children = Math.floor(Math.random() * 99) + 2;
  let partnersName = ["Sarah", "Bethany", "Olivia", "Jessica"];
  let location = ["Canada", "Barbados", "Cuba", "Iceland"];
  let jobTitle = ["Banker", "Fisherman", "Web Developer", "Truck Driver"];

  let string =
    "I have sucessfully read your fortune! You will ba a " +
    jobTitle[Math.floor(Math.random() * jobTitle.length)] +
    " living in " +
    location[Math.floor(Math.random() * location.length)] +
    ". You will have a wife named " +
    partnersName[Math.floor(Math.random() * partnersName.length)] +
    " and have " +
    children +
    " children!";

  return string;
};

/** build a function  that can calculate and show the following
 *  use math random to  produce  number array with 10 or more random numbers (don't make it endless)
 *  The mean number
 *  The smallest number
 * The largest number
 *  all the even numbers
 * all the odd numbers
 *
 * string output =
 *  The numbers were {}, The mean number is {}, The smallest number was {}, The  largest number was {}, The even numbers are {}, The odd numbers are {}.
 *
 *             I CAN SOLVE PROBLEMS WITH JAVASCRIPT!!!!!!!
 */

const mathsIsFun = () => {
  const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20) + 1);
  const min = Math.min(...array);
  const max = Math.max(...array);
  const even = array.filter((num) => num % 2 === 0);
  const odd = array.filter((num) => num % 2 !== 0);
  const average = array.reduce((a, b) => a + b) / array.length;

  return `              The numbers were ${array},
            the mean is ${average},
            the smallest number was ${min},
            the largest number was ${max},
            the even numbers are ${even},
            the odd numbers are ${odd}
            I CAN SOLVE PROBLEMS WITH JAVASCRIPT!!!!!!!`;
};
