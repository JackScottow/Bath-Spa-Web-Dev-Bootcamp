const date = new Date();
const todayDate = date.toISOString().substring(0, 10);
const dateInput = document.querySelector("#booking-date");
dateInput.min = dateInput.value = todayDate;
dateInput.max = new Date(date.setMonth(date.getMonth() + 1)).toISOString().substring(0, 10);

const otherDietReq = document.querySelector(".otherDiet");

const dietReq = document.querySelector("#other");
dietReq.addEventListener("change", () => {
  if (dietReq.checked) {
    otherDietReq.classList.remove("hide");
  } else {
    otherDietReq.classList.add("hide");
  }
});

const submitForm = document.querySelector("#submit-form");
const formValues = document.querySelectorAll("input");
formValues.forEach((value) => {
  console.log(value.id);
});

console.log("hello bethany");
