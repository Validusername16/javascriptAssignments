"use strict";
const PROMPT = require('readline-sync');``
const IO = require('fs');
let customers = [], transactions = [];
let transactionLines = [], masterLines = [];
function main() {
    addTransactions();
}

function init() {
    load();

}

init();
main();
function load() {
    let masterFile = IO.readFileSync('masterlist.csv','utf-8');
    masterLines = masterFile.toString().split(/\r?\n/);
    for (let i = 0; i < masterLines.length; i++) {
        customers.push(masterLines[i].toString().split(/,/));
    }
    let transactionFile = IO.readFileSync('transactions.csv','utf-8');
    transactionLines = transactionFile.toString().split(/\r?\n/);
    for (let i = 0; i < transactionLines.length; i++) {
        transactions.push(transactionLines[i].toString().split(/,/));
    }
}

function addTransactions() {
    IO.writeFile("masterlist.csv", "", (error) => {}); //clears masterlist.csv to refresh it
    for(let i; i < transactions.length; i++) {
       let id = transactions[i][0];
       customers[id][1] = transactions[i][1];
    }
}