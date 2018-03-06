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
    numberInput = PROMPT.question("Please enter a selection. 1-Write a review 2-View reviews for a movie 3-View average ratings of movies\n");
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
        if (ratings1[ratings1.length-1] > 5 || ratings1[ratings1.length-1] < 0) {
            ratings1.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }
        reviews1[reviews1.length] = PROMPT.question("Please enter a review for " + movieTitles[0]  + "\n");
    } else if (numberInput == 2) {
        ratings2[ratings2.length] = PROMPT.question("Please enter a rating for " + movieTitles[1]  + "\n");
        if (ratings2[ratings2.length-1] > 5 || ratings2[ratings2.length-1] < 0) {
            ratings2.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }

        reviews2[reviews2.length] = PROMPT.question("Please enter a review for " + movieTitles[1]  + "\n");
        if (ratings2[ratings2.length-1] > 5 || ratings2[ratings2.length-1] < 0) {
            ratings2.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }
    } else if (numberInput == 3) {
        ratings3[ratings3.length] = PROMPT.question("Please enter a rating for " + movieTitles[2]  + "\n");
        reviews3[reviews3.length] = PROMPT.question("Please enter a rating for " + movieTitles[2]  + "\n");
        if (ratings3[ratings3.length-1] > 5 || ratings3[ratings3.length-1] < 0) {
            ratings3.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }
    } else if (numberInput == 4) {
        ratings4[ratings4.length] = PROMPT.question("Please enter a rating for " + movieTitles[3]  + "\n");
        reviews4[reviews4.length] = PROMPT.question("Please enter a rating for " + movieTitles[3]  + "\n");
        if (ratings4[ratings4.length-1] > 5 || ratings4[ratings4.length-1] < 0) {
            ratings4.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }
    } else if (numberInput == 5) {
        ratings5[ratings5.length] = PROMPT.question("Please enter a rating for " + movieTitles[4]  + "\n");
        reviews5[reviews5.length] = PROMPT.question("Please enter a rating for " + movieTitles[4]  + "\n");
        if (ratings5[ratings5.length-1] > 5 || ratings5[ratings5.length-1] < 0) {
            ratings5.pop();
            console.log("I'm sorry, that is an invalid response. Please reselect your movie and try again.");
            return reviewWriting();
        }
    } else {
        console.log("Invalid response, try again.");
    }
    return main();
}

function viewReviews() {
    numberInput = PROMPT.question("Please enter a movie to view reviews of: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4] + "\n");
    if(numberInput == 1) {
        let temp = ratings1.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews1.length + " ratings for that movie. Please choose which review number you want to read.");
        if(numberInput < 0 || numberInput > reviews1.length) {
            console.log("That is not a valid review number. Reselect the movie and try again.");
            return viewReviews();
        }
        console.log("Rating number " + numberInput + ":  " + ratings1[temp] + "/5 : " + reviews1[temp]);
    } else if (numberInput == 2) {
        let temp = ratings2.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews2.length + " ratings for that movie. Please choose which review number you want to read.");
        if(numberInput < 0 || numberInput > reviews2.length) {
            console.log("That is not a valid review number. Reselect the movie and try again.");
            return viewReviews();
        }
        console.log("Rating number " + numberInput + ":  " + ratings2[temp] + "/5 : " + reviews2[temp]);
    } else if (numberInput == 3) {
        let temp = ratings3.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews3.length + " ratings for that movie. Please choose which review number you want to read.");
        if(numberInput < 0 || numberInput > reviews3.length) {
            console.log("That is not a valid review number. Reselect the movie and try again.");
            return viewReviews();
        }
        console.log("Rating number " + numberInput + ":  " + ratings3[temp] + "/5 : " + reviews3[temp]);
    } else if (numberInput == 4) {
        let temp = ratings4.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews4.length + " ratings for that movie. Please choose which review number you want to read.");
        if(numberInput < 0 || numberInput > reviews4.length) {
            console.log("That is not a valid review number. Reselect the movie and try again.");
            return viewReviews();
        }
        console.log("Rating number " + numberInput + ":  " + ratings4[temp] + "/5 : " + reviews4[temp]);
    } else if (numberInput == 5) {
        let temp = ratings5.length - 1;
        numberInput = PROMPT.question("There are a total of " + reviews5.length + " ratings for that movie. Please choose which review number you want to read.");
        if(numberInput < 0 || numberInput > reviews1.length) {
            console.log("That is not a valid review number. Reselect the movie and try again.");
            return viewReviews();
        }
        console.log("Rating number " + numberInput + ":  " + ratings5[temp] + "/5 : " + reviews5[temp]);
    } else {
        console.log("That is an invalid response, try again.");
        return viewReviews();
    }
    return main();
}

function averageRatings() {
    let averages = [];
    averages[0] = 0;
    for(let i = 0; i < ratings1.length; i++) {
        averages[0] = averages[0] + ratings1[i];
    }
    averages[0] = averages[0] / ratings1.length;
    console.log(movieTitles[0] + " - " + averages[0]);
    for(let i = 0; i < ratings2.length; i++) {
        averages[1] = averages[1] + ratings2[i];
    }
    averages[1] = averages[1] / ratings2.length;
    console.log(movieTitles[1] + " - " + averages[1]);
    averages[2] = 0;
    for(let i = 0; i < ratings3.length; i++) {
        averages[2] = averages[2] + ratings3[i];
    }
    averages[2] = averages[2] / ratings3.length;
    console.log(movieTitles[2] + " - " + averages[2]);
    averages[3] = 0;
    for(let i = 0; i < ratings4.length; i++) {
        averages[3] = averages[3] + ratings4[i];
    }
    averages[3] = averages[3] / ratings5.length;
    console.log(movieTitles[3] + " - " + averages[3]);
    averages[4] = 0;
    for(let i = 0; i < ratings5.length; i++) {
        averages[4] = averages[4] + ratings5[i];
    }
    averages[4] = averages[4] / ratings4.length;
    console.log(movieTitles[4] + " - " + averages[4]);
    averages.sort(function(a, b){return b-a});
    return main();
}