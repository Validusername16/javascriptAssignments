"use strict";
const PROMPT = require('readline-sync');``
const IO = require('fs');
let customers = [];

function main() {

}

function init() {

}

init();
main();

function load() {
    let file = IO.readFileSync('data\data.csv','utf-8');
    let lines= file.toString().split(/\r?\n/); // Automatically creates SD array on newlines
    for (let i = 0; i < lines.length; i++) {
        customers.push(lines[i].toString().split(/,/)); // Makes students array MD by pushing data between commas in
    }
}