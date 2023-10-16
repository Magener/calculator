

const initializeOperationButtons = (equationManagementOperations, computationOperations, selectOperationCallback) => {
    Object.entries(equationManagementOperations).forEach(([symbol, managementOperation]) => {
        const button = initializeButton(document.getElementById("equationManagementOperations"), symbol, managementOperation);
        addClassesToButton(button, "equationManagementButton", "resizable");
    });

    Object.entries(computationOperations).forEach(([symbol, operationComputation]) => {
        const button = initializeButton(document.getElementById("operations"), symbol, () => selectOperationCallback(operationComputation));
        addClassesToButton(button, "operationButton", "resizable");
    });
};

const initializeDigitButtons = (clickedOnDigitCallback) => {
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    digits.forEach((digit) => initializeDigitButton(digit, clickedOnDigitCallback));
};


const initializeDigitButton = (digitValue, clickedOnDigitCallback) => {
    const button = initializeButton(document.getElementById("digits"), digitValue, () => clickedOnDigitCallback(digitValue));
    addClassesToButton(button, "digitButton", "resizable");
};

const initializeButton = (parentElement, textContent, clickCallback) => {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.addEventListener("click", () => clickCallback());

    parentElement.appendChild(button);

    return button;
};

const addClassesToButton = (button, ...addedClasses) => {
    button.classList.add(...addedClasses);
};

export {
    initializeOperationButtons, initializeDigitButtons
}