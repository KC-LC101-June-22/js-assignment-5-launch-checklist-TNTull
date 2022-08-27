
/*// Write your JavaScript code here!
// Teresa Tull worked on this on 8-17-2022

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let planet = pickPlanet(listedPlanets);

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

    let faultyItems = document.getElementById("faultyItems");
    let list = faultyItems;
    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
 
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoLevelInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    }); 
*/

// Write your JavaScript code here!
// Teresa Tull worked on this on 8-17-2022

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let planet = pickPlanet(listedPlanets);

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

    let faultyItems = document.getElementById("faultyItems");
    let list = faultyItems;
    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
 
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoLevelInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });


});