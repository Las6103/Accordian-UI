// Global Variables
const url = "https://swapi.dev/api/";
let peopleOfStarWars = document.querySelector(".people");
let starshipsOfStarWars = document.querySelector(".starships");
let vehiclesOfStarWars = document.querySelector(".vehicles");
let planetsOfStarWars = document.querySelector(".planets");
let buttons = document.querySelectorAll(".header");
let articles = document.querySelectorAll(".article");

// API Incorporation
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

// Accordian Animation
buttons.forEach((button, i) => {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    let currentClass = articles[i];
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    currentClass.classList.add("active");
  });
});
