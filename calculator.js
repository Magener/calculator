import { shownNumberString, updateShownNumber, valueOfShownNumber, clearShownNumber } from "./shownNumber.js";

import { initializeOperationButtons, initializeDigitButtons } from "./buttons.js";
import Equation from "./equation.js";
import { concatenateDigit, removeLastDigit } from "./numberStringOperations.js";

const currentEquation = new Equation();
let repeatLastOperation = false;

document.addEventListener("DOMContentLoaded", () => {
    const computationOperations = {
        "+": (left, right) => left + right,
        "-": (left, right) => left - right,
        "*": (left, right) => left * right,
        "/": (left, right) => left / right,
    };

    const equationManagementOperations = {
        "=": solveCurrentEquation,
        "C": () => updateShownNumber(removeLastDigit(shownNumberString())),
        "CE": clearCurrentEquation

    };

    clearShownNumber();

    initializeDigitButtons((newDigit) => updateShownNumber(concatenateDigit(shownNumberString(), newDigit)));

    initializeOperationButtons(equationManagementOperations, computationOperations, selectOperation);
});

const clearCurrentEquation = () => {
    clearShownNumber();
    currentEquation.reset();
};

const solveCurrentEquation = () => {
    let result = repeatLastOperation ? currentEquation.resolve() : currentEquation.solve(valueOfShownNumber());
    
    updateShownNumber(result);
    currentEquation.setLeftValue(result);

    repeatLastOperation = true;
};


const selectOperation = (operationComputation) => {
    currentEquation.setLeftValue(valueOfShownNumber());
    currentEquation.setOperationComputation(operationComputation);
    clearShownNumber();

    repeatLastOperation = false;
};