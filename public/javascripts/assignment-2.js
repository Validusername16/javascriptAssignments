"use strict";
const PROMPT = require('readline-sync');
let firstName, lastName; //Strings
let policyNumber, Age, accidentFaults, premiumTotal, birthDay, birthMonth, birthYear, currentDay, currentMonth,
    currentYear; //Integers
const BASE_PRICE = 100;
const TODAYS_DATE = 2018;

function main() {
    setFirstName();
    setLastName();
    setPolicyNumber();
    setBirthDate()
    setFaults();
    process.stdout.write('\x1Bc');
    calculate();

    main();
}

process.stdout.write('\x1Bc');
main();

function setFirstName() {
    firstName = PROMPT.question("Please enter your first name. ");
}

function setLastName() {
    lastName = PROMPT.question("Please enter your last name. ");
}


function setPolicyNumber() {
    policyNumber = PROMPT.question("Please enter your policy number. ");
}

function setBirthDate() {
    birthMonth = PROMPT.question("Please enter the month of your birthdate. ");
    birthDay = PROMPT.question("Please enter the day of your birthdate. ");
    birthYear = PROMPT.question("Please enter the year of your birthdate. ");
    if (birthMonth < 0 || birthMonth > 12 || birthDay < 0 || birthDay > 31 || birthYear > currentYear || birthYear == "" || birthMonth == "" || birthDay == "") {
        console.log("I'm sorry. That birthdate is invalid, please try again.");
        return setBirthDate();


    }

    function setFaults() {
        accidentFaults = PROMPT.question("Please enter how many accident faults you've had since " + currentMonth + "/" + currentDay + "/" + (currentYear - 3) + ". ");
    }

    function calculate() {
        Age = TODAYS_DATE - birthYear;
        premiumTotal = BASE_PRICE + (accidentFaults * 50);
        if (Age > 15 && Age < 30) {
            premiumTotal = premiumTotal + 20;
        }
        if (Age >= 30 && Age < 45) {
            premiumTotal = premiumTotal + 10;
        }
        if (Age >= 60) {
            premiumTotal = premiumTotal + 30;
        }
        console.log("Okay " + firstName + " " + lastName + ", Your premium total is $" + premiumTotal);

    }
