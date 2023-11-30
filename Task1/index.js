function isValidText(text) {
    if (!text || typeof text !== 'string') {
        throw new Error("Please enter valid text.");
    }
    return true;
}

function countCharacters(text) {
    const characters = {};
    for (const letter of text) {
        characters[letter] ? characters[letter]++ : characters[letter] = 1;
    }
    return characters;
}

function cleanAndLowerCase(text) {
    return text.replace(/[^a-zA-Z]/g, '').toLowerCase();
}

function filterMostRepeatedLetters(counterObj, maxCounter) {
    return Object.keys(counterObj)
        .reduce((result, letter) => {
            if (counterObj[letter] === maxCounter) {
                result[letter] = counterObj[letter];
            }
            return result;
        }, {});
}

function findMostRepeatedLetters(text) {
    if (isValidText(text)) {
        try {
            const cleanedText = cleanAndLowerCase(text)
            const counter = countCharacters(cleanedText);
            const maxCounter = Math.max(...Object.values(counter));
            const mostRepeatedLetters = filterMostRepeatedLetters(counter, maxCounter);
            
            if (!Object.keys(mostRepeatedLetters).length) {
                throw new Error('No letters found in the text. Enter the text in English.');
            }
            return mostRepeatedLetters;

        } catch (error) {
            console.error('Error: ' + error.message);
        }
    }
}

module.exports = findMostRepeatedLetters;
