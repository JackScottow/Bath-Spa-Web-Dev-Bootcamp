const table = document.querySelector("#table-body");
const filter = document.getElementById("filter");
const submitButton = document.querySelector("#submit");
const cars = [
  { make: "BMW", model: "330D", colour: "Silver", year: 2015 },
  { make: "Audi", model: "A5", colour: "Grey", year: 2017 },
  { make: "Ford", model: "Focus", colour: "Red", year: 2019 },
  { make: "Vauxhall", model: "Corsa", colour: "Black", year: 2008 },
];

const updateCars = (cars) => {
  table.innerHTML = ""; // Reset table
  cars.forEach((car) => {
    table.innerHTML += `<tr>
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.colour}</td>
    <td>${car.year}</td>
    </tr>`;
  });
};

function Car(make, model, colour, year) {
  this.make = make;
  this.model = model;
  this.colour = colour;
  this.year = year;
}

submitButton.addEventListener("click", () => {
  let make = document.querySelector("#make").value;
  let model = document.querySelector("#model").value;
  let colour = document.querySelector("#colour").value;
  let year = document.querySelector("#year").value;
  let newCar = new Car(make, model, colour, year);
  cars.push(JSON.parse(JSON.stringify(newCar)));
  updateCars(cars);
});

filter.addEventListener("keyup", (keyword) => {
  keyword = filter.value;
  let filteredCars = cars.filter(
    (car) =>
      car.make.toUpperCase().includes(keyword.toUpperCase()) ||
      car.model.toUpperCase().includes(keyword.toUpperCase()) ||
      car.colour.toUpperCase().includes(keyword.toUpperCase()) ||
      car.year.toString().includes(keyword)
  );
  updateCars(filteredCars);
});

updateCars(cars);
