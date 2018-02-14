"use strict";
const PROMPT = require('readline-sync');
let bedroomCount, bathroomCount, garageSize, lotNumber, total;
const BASE_PRICE = 50000;
const BEDROOM_COST = 17000;
const BATHROOM_COST = 12500;
const GARAGE_SIZE_COST = 6000;
function main() {
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setGarageSize();
    calculatePrice();
    console.log("The total cost for Lot " + lotNumber + " is $" + total);
}
main();
function setLotNumber(){
    lotNumber = PROMPT.question("Please enter a lot number: ");
}
function setBedrooms() {
    bedroomCount = PROMPT.question("How many bedrooms? ");
}
function setBathrooms() {
    bathroomCount = PROMPT.question("How many bathrooms? ");
}
function setGarageSize() {
    garageSize = PROMPT.question("How many cars do you plan to fit in your garage? ");
}
function calculatePrice() {
    total = BASE_PRICE + (BEDROOM_COST * bedroomCount) + (BATHROOM_COST * bathroomCount) + (GARAGE_SIZE_COST + garageSize);
}