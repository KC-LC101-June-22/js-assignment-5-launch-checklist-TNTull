// Write your helper functions here!
// Teresa Tull worked on this on 8-17-2022

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <div>
                  <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: </li>
                      <li>Diameter: </li>
                      <li>Star: ${star}</li>
                      <li>Distance from Earth: </li>
                      <li>Number of Moons: </li>
                  </ol>
                  <img src="">
                </div>
               `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    if (testInput === number) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let form = document.getElementById("launchForm");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    }

    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field");
    }

    else if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "#ff0000";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    else if (cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoLevel.innerHTML = "Cargo mass too heavy for launch";
    }

    else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoLevel.innerHTML = "Cargo mass too heavy for launch";
    }

    else if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "green";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        launchStatus.innerHTML = "Shuttle is ready for launch";
    }

}

let json = [];
async function myFetch() {

    let planetsReturned = [];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return listedPlanets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
