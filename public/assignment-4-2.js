"use strict";
const PROMPT = require('readline-sync');
let numberInput, stringInput;
let movieTitles = [],reviews1 = [],reviews2 = [],reviews3 = [],reviews4 = [],reviews5 = [],ratings1 = [],ratings1 = [],ratings2 = [],ratings3 = [],ratings4 = [],ratings5 = [];
function main() {

}
function init() {
    for(let i = 0; i < 5; i++) {
    movieTitles[i] = PROMPT.question("Please enter Movie number " + i + "'s title.  ");
    }
}