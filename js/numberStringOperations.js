const clearMeaninglessSpecialCharacters = (numberString) => {
    let SPECIAL_CHARACTERS = ["-", "."];
    let result = numberString;

    while (SPECIAL_CHARACTERS.some((character) => result.endsWith(character))) {
        result = result.slice(0, -1);
    }
    
    return result;
}


export const removeLastDigit = (numberString) => {
    return clearMeaninglessSpecialCharacters(numberString.slice(0, -1));
};


export const concatenateDigit = (numberString, newDigit) => {
    const MAX_CONCATINATION_DIGITS = 12;

    if (numberString.length < MAX_CONCATINATION_DIGITS) {
        return numberString + newDigit;
    }

    return numberString;
};