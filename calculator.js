import { shownNumberString, updateShownNumber } from "./shownNumber.js";

document.addEventListener("DOMContentLoaded", () => {
    updateShownNumber('0');

    initializeDigitButtons();
});


const concatenateDigit = (value) => {
    // TODO: ensure length is less than 10 to deal with a floating point bug.
    updateShownNumber(shownNumberString() + value);
};

const initializeDigitButton = (digitValue) => {
    const button = document.createElement("button");
    button.textContent = digitValue;
    button.addEventListener("click", () =>
        concatenateDigit(digitValue)
    );
    document.getElementById("digits").appendChild(button);
};

const initializeDigitButtons = () => {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    digits.forEach((digit) => initializeDigitButton(digit));
};
