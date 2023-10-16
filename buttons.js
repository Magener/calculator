

const initializeOperationButtons = (equationManagementOperations, computationOperations, selectOperationCallback) => {
    Object.entries(equationManagementOperations).forEach(([symbol, managementOperation]) => {
        initializeButton(document.getElementById("operations"), symbol, managementOperation);
    });

    Object.entries(computationOperations).forEach(([symbol, operationComputation]) => {
        initializeButton(document.getElementById("operations"), symbol, () => selectOperationCallback(operationComputation));
    });
};

const initializeDigitButtons = (clickedOnDigitCallback) => {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    digits.forEach((digit) => initializeDigitButton(digit, clickedOnDigitCallback));
};


const initializeDigitButton = (digitValue, clickedOnDigitCallback) => {
    initializeButton(document.getElementById("digits"), digitValue, () => clickedOnDigitCallback(digitValue));
};

const initializeButton = (parentElement, textContent, clickCallback) => {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.addEventListener("click", () => clickCallback());

    parentElement.appendChild(button);
}


export {
    initializeOperationButtons, initializeDigitButtons
}