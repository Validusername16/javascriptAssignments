"use strict";
const PROMPT = require('readline-sync');
let numberInput, stringInput;
let movieTitles = [],reviews1 = [],reviews2 = [],reviews3 = [],reviews4 = [],reviews5 = [],ratings1 = [],ratings2 = [],ratings3 = [],ratings4 = [],ratings5 = [];
function main() {
    mainPrompt();
}
function init() {
    for(let i = 1; i <= 5; i++) {
    movieTitles[i] = PROMPT.question("Please enter Movie number " + i + "'s title.  ");
    }
}
init();
main();
function mainPrompt() {
    numberInput = PROMPT.question("Please enter a selection. 1-Write a review 2-View reviews for a movie 3-View rating of movies (highest to lowest) ");
    if (numberInput == 1) {
        return reviewWriting();
    }else if (numberInput == 2) {
        return viewReviews();
    } else if (numberInput == 3) {
        return averageRatings();
    } else {
        process.stdout.write('\x1Bc');
        console.log("That is an invalid response, please try again.");
        return mainPrompt();
    }
}
function reviewWriting() {

}
