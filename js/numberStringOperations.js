const canNumberBeModified = (numberString, allowsAdditionalDigit) => {
    const MAX_DIGITS_ALLOWED_FOR_MODIFICATION = allowsAdditionalDigit ? 13 : 12;

    return numberString.length < MAX_DIGITS_ALLOWED_FOR_MODIFICATION;
};

const clearMeaninglessSpecialCharacters = (numberString) => {
    let SPECIAL_CHARACTERS = ["-", "."];
    let result = numberString;

    while (SPECIAL_CHARACTERS.some((character) => result.endsWith(character))) {
        result = result.slice(0, -1);
    }

    return result;
}


export const removeLastDigit = (numberString) => {
    return canNumberBeModified(numberString, true) ? clearMeaninglessSpecialCharacters(numberString.slice(0, -1)) : numberString;
};


export const concatenateDigit = (numberString, newDigit) => {
    return canNumberBeModified(numberString, false) ? numberString + newDigit : numberString;
};