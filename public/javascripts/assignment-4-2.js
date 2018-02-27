"use strict";
const PROMPT = require('readline-sync');
let numberInput, stringInput;
let movieTitles = [],reviews1 = [],reviews2 = [],reviews3 = [],reviews4 = [],reviews5 = [],ratings1 = [],ratings2 = [],ratings3 = [],ratings4 = [],ratings5 = [];
function main() {
    mainPrompt();
}
function init() {
    for(let i = 0; i <= 4; i++) {
    movieTitles[i] = PROMPT.question("Please enter Movie number " + i + "'s title.  ");
    }
}
init();
main();
function mainPrompt() {
    numberInput = PROMPT.question("Please enter a selection. 1-Write a review 2-View reviews for a movie 3-View rating of movies (highest to lowest) \n");
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
    numberInput = PROMPT.question("Please enter a movie to review: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4] + "\n");
    if (numberInput == 1) {
        ratings1[ratings1.length] = PROMPT.question("Please enter a rating for " + movieTitles[0] + "\n");
        reviews1[reviews1.length] = PROMPT.question("Please enter a review for " + movieTitles[0]  + "\n");
    } else if (numberInput == 2) {
        ratings2[ratings2.length] = PROMPT.question("Please enter a rating for " + movieTitles[1]  + "\n");
        reviews2[reviews2.length] = PROMPT.question("Please enter a rating for " + movieTitles[1]  + "\n");
    } else if (numberInput == 3) {
        ratings3[ratings3.length] = PROMPT.question("Please enter a rating for " + movieTitles[2]  + "\n");
        reviews3[reviews3.length] = PROMPT.question("Please enter a rating for " + movieTitles[2]  + "\n");
    } else if (numberInput == 4) {
        ratings4[ratings4.length] = PROMPT.question("Please enter a rating for " + movieTitles[3]  + "\n");
        reviews4[reviews4.length] = PROMPT.question("Please enter a rating for " + movieTitles[3]  + "\n");
    } else if (numberInput == 5) {
        ratings5[ratings5.length] = PROMPT.question("Please enter a rating for " + movieTitles[4]  + "\n");
        reviews5[reviews5.length] = PROMPT.question("Please enter a rating for " + movieTitles[4]  + "\n");
    } else {
        console.log("Invalid response, try again.");
    }
    console.log(numberInput + "     " + ratings1[ratings1.length - 1] + reviews1[reviews1.length - 1] );
    return main();
}

function viewReviews() {
    numberInput = PROMPT.question("Please enter a movie to view reviews of: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4] + "\n");
    if(numberInput == 1) {
        let temp = ratings1.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews1.length + " ratings for that movie. Please choose which review number you want to read.");
        console.log("Rating number " + numberInput + ":  " + ratings1[temp] + "/5 : " + reviews1[temp]);
    } else if (numberInput == 2) {
        let temp = ratings2.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews2.length + " ratings for that movie. Please choose which review number you want to read.");
        console.log("Rating number " + numberInput + ":  " + ratings2[temp] + "/5 : " + reviews2[temp]);
    } else if (numberInput == 3) {
        let temp = ratings3.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews3.length + " ratings for that movie. Please choose which review number you want to read.");
        console.log("Rating number " + numberInput + ":  " + ratings3[temp] + "/5 : " + reviews3[temp]);
    } else if (numberInput == 4) {
        let temp = ratings4.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews4.length + " ratings for that movie. Please choose which review number you want to read.");
        console.log("Rating number " + numberInput + ":  " + ratings4[temp] + "/5 : " + reviews4[temp]);
    } else if (numberInput == 5) {
        let temp = ratings5.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews5.length + " ratings for that movie. Please choose which review number you want to read.");
        console.log("Rating number " + numberInput + ":  " + ratings5[temp] + "/5 : " + reviews5[temp]);
    } else {
        console.log("That is an invalid response, try again.");
        return viewReviews();
    }
    return main();
}