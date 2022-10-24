var userHeight = document.querySelector(".height");
var userWeight = document.querySelector(".weight");
var result = document.querySelector(".result");
var adviceText = document.querySelector(".advice");
var BMI,
  height,
  weight,
  advice = 0;

function calculate() {
  height = userHeight.value / 100; // Convert height from cm to m
  weight = userWeight.value;
  BMI = (weight / height ** 2).toFixed(1); // Round to 2 decimal places
  calculateAdvice();
  result.innerText = "Your BMI is " + BMI;
  adviceText.innerText = advice;
}

function calculateAdvice() {
  if (BMI < 18.5) {
    advice = "You need to eat more! You are underweight";
  } else if (BMI > 18.5 && BMI < 24.9) {
    advice = "Good job, you are a healthy weight!";
  } else if (BMI > 25 && BMI < 29.9) {
    advice = "Maybe think about joining a gym? You are overweight!";
  } else {
    advice = "Put the chocolate down fatty! You're obese!";
  }
}
