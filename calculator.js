import { shownNumberString, updateShownNumber, valueOfShownNumber, clearShownNumber } from "./shownNumber.js";
import Equation from "./equation.js";

const currentEquation = new Equation();

document.addEventListener("DOMContentLoaded", () => {
    clearShownNumber();

    initializeDigitButtons();

    initializeOperationButtons();
});

//TODO: refactor & extract to buttonInitializations
const initializeOperationButtons = () => {

    initializeButton(document.getElementById("operations"), "=", () => {
        solveCurrentEquation(valueOfShownNumber());
    });

    initializeButton(document.getElementById("operations"), "C", () => {
        removeLastDigit();
    });

    initializeButton(document.getElementById("operations"), "CE", () => {
        clearCurrentEquation();
    });

    const operations = {
        "+": (left, right) => left + right,
        "-": (left, right) => left - right,
        "*": (left, right) => left * right,
        "/": (left, right) => left / right,
    };

    Object.entries(operations).forEach(([sign, operationComputation]) => {
        initializeButton(document.getElementById("operations"), sign, () => performOperation(operationComputation));
    });
};

const clearCurrentEquation = () => {
    clearShownNumber();
    currentEquation.reset();
};

const solveCurrentEquation = (rightValue) => {
    updateShownNumber(currentEquation.solve(rightValue));
};

//TODO: deal with the bug of the -
// with the same right value
const performOperation = (operationComputation) => {
    currentEquation.setLeftValue(valueOfShownNumber());
    currentEquation.setOperationComputation(operationComputation);
    clearShownNumber();// TODO: perform after adding an operation
};

//TODO: extract to stringifiedNumberManagement.js
const removeLastDigit = () => {
    let result = shownNumberString().slice(0, -1);

    updateShownNumber(clearMeaninglessSpecialCharacters(result));
};

//TODO: extract to stringifiedNumberManagement.js
const concatenateDigit = (value) => {
    const MAX_CONCATINATION_DIGITS = 12; // TODO: how does that deal with exponential mode? (plaster but works for now)

    if (shownNumberString().length < MAX_CONCATINATION_DIGITS) {
        updateShownNumber(shownNumberString() + value);
    }
};

const initializeDigitButtons = () => {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    digits.forEach((digit) => initializeDigitButton(digit));
};


const initializeDigitButton = (digitValue) => {
    initializeButton(document.getElementById("digits"), digitValue, () => concatenateDigit(digitValue));
};

const initializeButton = (parentElement, textContent, clickCallback) => {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.addEventListener("click", () => clickCallback());

    parentElement.appendChild(button);
}

const clearMeaninglessSpecialCharacters = (numberString) => {
    let SPECIAL_CHARACTERS = ["-", "."];
    let result = numberString;

    while (SPECIAL_CHARACTERS.some((character) => result.endsWith(character))) {
        result = result.slice(0, -1);
    }
    return result;
}
