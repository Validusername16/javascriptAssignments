"use strict";
const PROMPT = require('readline-sync');``
const IO = require('fs');
let customers = [];

function main() {
    console.log(customers[0][1]);
    coupon
}

function init() {
    load();

}

init();
main();
function load() {
    let file = IO.readFileSync('data.csv','utf-8');
    let lines= file.toString().split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        customers.push(lines[i].toString().split(/,/));
    }
}