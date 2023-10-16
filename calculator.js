import { shownNumberString, updateShownNumber, valueOfShownNumber, clearShownNumber } from "./shownNumber.js";

import {initializeOperationButtons, initializeDigitButtons} from "./buttons.js";
import Equation from "./equation.js";
import { concatenateDigit, removeLastDigit } from "./numberStringOperations.js";

const currentEquation = new Equation();

document.addEventListener("DOMContentLoaded", () => {
    clearShownNumber();

    initializeDigitButtons((newDigit) => updateShownNumber(concatenateDigit(shownNumberString(), newDigit)));

    const computationOperations = {
        "+": (left, right) => left + right,
        "-": (left, right) => left - right,
        "*": (left, right) => left * right,
        "/": (left, right) => left / right,
    };
    
    let equationManagementOperations = {
        "=": () => updateShownNumber(currentEquation.solve(valueOfShownNumber())),
        "C": () => updateShownNumber(removeLastDigit(shownNumberString())),
        "CE": clearCurrentEquation
    
    };

    initializeOperationButtons(equationManagementOperations, computationOperations, selectOperation);
});

const clearCurrentEquation = () => {
    clearShownNumber();
    currentEquation.reset();
};

//TODO: deal with the bug of the - with the same right value
const selectOperation = (operationComputation) => {
    currentEquation.setLeftValue(valueOfShownNumber());
    currentEquation.setOperationComputation(operationComputation);
    clearShownNumber();// TODO: perform after adding an operation
};