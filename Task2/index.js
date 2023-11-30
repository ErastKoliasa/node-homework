const mostRepeatedLetters = require('@erastkoliasa/most-repeated-letters');
const fs = require("fs");
const path = process.argv.slice(2);

function readDataFromFile(path) {
    try {
        if(!path) {
            throw new Error('File path not provided.');
        }
        return fs.readFileSync(path, "utf8");
    } catch(error){
        throw new Error(`Error reading the file: ${error.message}`);
    }
}

function displayContentsObject(obj) {
    Object.entries(obj).forEach(([keys, values]) => {
        console.log(`${keys} - ${values}`);
    })
}

function findMostRepeatedLetters(path) {
    try {
        const data = readDataFromFile(path);
        const result = mostRepeatedLetters(data);
        console.log("The most repeated letter in the text:");
        displayContentsObject(result)
    } catch (error) {
        console.error(`Error processing the file: ${error.message}`);
    }
}

findMostRepeatedLetters(path[0]);