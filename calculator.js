import { shownNumberString, updateShownNumber, valueOfShownNumber, clearShownNumber } from "./shownNumber.js";
import Equation from "./equation.js";

const currentEquation = new Equation();

document.addEventListener("DOMContentLoaded", () => {
    clearShownNumber();

    initializeDigitButtons();

    initializeOperationButtons();
});

const initializeOperationButtons = () => {

    initializeButton(document.getElementById("operations"), "=", () => {
        solveCurrentEquation(valueOfShownNumber());
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