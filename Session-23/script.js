const content = document.querySelector("#content");

const cars = [
  { make: "BMW", model: "330D", colour: "Silver", year: 2015 },
  { make: "Audi", model: "A5", colour: "Grey", year: 2017 },
  { make: "Ford", model: "Focus", colour: "Red", year: 2019 },
  { make: "Vauxhall", model: "Corsa", colour: "Black", year: 2008 },
];

const updateCars = () => {
  content.innerHTML = "";
  cars.forEach((car) => {
    content.innerHTML += `
          <p>
          Make: ${car.make} 
          Model: ${car.model}
          Colour: ${car.colour}
          Year: ${car.year}
          </p>`;
  });
};

function Car(carMake, carModel, carColour, carYear) {
  this.make = carMake;
  this.model = carModel;
  this.colour = carColour;
  this.year = carYear;
}

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", () => {
  let carMake = document.querySelector("#make").value;
  let carModel = document.querySelector("#model").value;
  let carColour = document.querySelector("#colour").value;
  let carYear = document.querySelector("#year").value;
  let newCar = new Car(carMake, carModel, carColour, carYear);
  cars.push(JSON.parse(JSON.stringify(newCar)));
  updateCars();
});

updateCars();
