"use strict";
const PROMPT = require('readline-sync');
let totalUses, ratingSum, rateAttempts, rating, average;
let movieTitle;
let exitValue;

function main() {
rateAttempts = 0;
prompt();
    process.stdout.write('\x1Bc');
if(exitValue == true){
    calculate();
} else {

    main();
    }
}

init();
main();
function init() {
    rateAttempts = 0;
    totalUses = 0;
    ratingSum = 0;
    process.stdout.write('\x1Bc');
    movieTitle = PROMPT.question("Please enter the movie's name. ");
    process.stdout.write('\x1Bc');
}
function prompt() {
    rating = PROMPT.question("Please enter a rating for " + movieTitle + ". ");
    rateAttempts++;
    rating = Math.floor(rating);

    if(!isFinite(rating)){
        if(rateAttempts != 3) {
            prompt();
        } else {
            exitValue = true;
        }
    }
    if(rating <= 5 && rating >= 0){
        totalUses++;
        ratingSum = ratingSum+rating;
        exitValue = false;
    } else {
        if(rateAttempts != 3) {
            prompt();
        } else {

            exitValue = true;
        }
    }
}
function calculate() {
    average = ratingSum / totalUses;
    average = average.toFixed(2);
    if(!isNaN(average)) {
        console.log("The average rating for " + movieTitle + " was " + average + ".");
    }  else {
        console.log("Nobody rated " + movieTitle + ".");
    }
}