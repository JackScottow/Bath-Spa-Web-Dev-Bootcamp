/** Using two separate array's of numbers find the largest number
 * from both ,
 * Then using those  2 numbers  see if they have the same number
 * they are both divisible by with no remainder.
 * example
 *
 * If my  2 bigest numbers are 24 and  48
 * the answear would be 1, 2, 4, 6 ,8 .....
 *
 * if my biggest 2 numbers were  5 and 10
 * the answear would be 1, 5
 */

// const arr1 = Array(10)
//   .fill()
//   .map(() => Math.floor(Math.random() * 20) + 1);
// console.log("Array 1 = ", arr1);

// const arr2 = Array(10)
//   .fill()
//   .map(() => Math.floor(Math.random() * 20) + 1);
// console.log("Array 2 = ", arr2);

// let arr1Max = Math.max(...arr1);
// console.log("Largest of Array 1", arr1Max);

// let arr2Max = Math.max(...arr2);
// console.log("Largest of Array 2", arr2Max);

// let largest = Math.max(arr1Max, arr2Max);
// console.log(largest);

// let smallest = Math.min(arr1Max, arr2Max);
// console.log(smallest);

// let result = [];

// for (let i = 0; i < smallest; i++) {
//   if ((largest % i === 0) & (smallest % i === 0)) {
//     result.push(i);
//   }
// }
// console.log(result);

const select = document.querySelector("#select");
const options = document.querySelectorAll("[data-search]");

const changeDisplay = () => {
  options.forEach((option) => {
    if (option.dataset.search.includes(select.value)) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
};

select.addEventListener("change", changeDisplay);
