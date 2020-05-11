const url = "https://swapi.dev/api/";
let peopleOfStarWars = document.querySelector(".people");
let starshipsOfStarWars = document.querySelector(".starships");
let vehiclesOfStarWars = document.querySelector(".vehicles");
let planetsOfStarWars = document.querySelector(".planets");

fetch(url + "people/")
  .then((unparsedData) => unparsedData.json())
  .then((parsedData) => {
    let people = parsedData.results;
    people.forEach((person) => {
      let list = document.createElement("li");
      list.innerHTML = person.name;
      peopleOfStarWars.appendChild(list);
    });
  });

fetch(url + "starships/")
  .then((unparsedData) => unparsedData.json())
  .then((parsedData) => {
    let starships = parsedData.results;
    starships.forEach((starship) => {
      let list = document.createElement("li");
      list.innerHTML = starship.name;
      starshipsOfStarWars.appendChild(list);
    });
  });

fetch(url + "vehicles/")
  .then((unparsedData) => unparsedData.json())
  .then((parsedData) => {
    let vehicles = parsedData.results;
    vehicles.forEach((vehicle) => {
      let list = document.createElement("li");
      list.innerHTML = vehicle.name;
      vehiclesOfStarWars.appendChild(list);
    });
  });

fetch(url + "planets/")
  .then((unparsedData) => unparsedData.json())
  .then((parsedData) => {
    let planets = parsedData.results;
    planets.forEach((planet) => {
      let list = document.createElement("li");
      list.innerHTML = planet.name;
      planetsOfStarWars.appendChild(list);
    });
  });

let buttons = document.querySelectorAll(".header");
let content = document.querySelectorAll(".article");
console.log(buttons);

buttons.forEach((button, i) => {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    let currentClass = content[i].className;
    console.log(currentClass);
    currentClass = "article";
  });
});
