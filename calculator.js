import { shownNumberString, updateShownNumber, valueOfShownNumber, clearShownNumber } from "./shownNumber.js";

document.addEventListener("DOMContentLoaded", () => {
    clearShownNumber();

    initializeDigitButtons();

    initializeOperationButtons();
});



const initializeOperationButtons = () => {
    /*<button onclick="">+</button>
<button onclick="evaluateEquation()">=</button> */

    initializeButton(document.getElementById("operations"), "=", () => {
        solveEquation(valueOfShownNumber());
    });

    //TODO: add dynamic operation initialization through a mapping

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

//TODO: extract class as necessary.
let leftValue, operation;

const solveEquation = (rightValue) => {
    updateShownNumber(operation(leftValue, rightValue));
    leftValue = 0;
};

const initializeOperation = (value, operationCallback) => {
    leftValue = value;
    operation = operationCallback;
};



//TODO: deal with the bug of the -
const performOperation = (operation) => {
    initializeOperation(valueOfShownNumber(), operation);
    clearShownNumber();
};

const concatenateDigit = (value) => {
    // TODO: ensure length is less than 10 to deal with a floating point bug.
    updateShownNumber(shownNumberString() + value);
};

const initializeDigitButton = (digitValue) => {
    initializeButton(document.getElementById("digits"), digitValue, () => concatenateDigit(digitValue));
};

const initializeDigitButtons = () => {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    digits.forEach((digit) => initializeDigitButton(digit));
};

const initializeButton = (parentElement, textContent, clickCallback) => {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.addEventListener("click", () => clickCallback());

    parentElement.appendChild(button);
}