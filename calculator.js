let shownNumber;


document.addEventListener("DOMContentLoaded", () => {
    updateShownNumber('0');
});

const updateShownNumber = (value) => {
    shownNumber = value;
    document.getElementById("shownNumber").textContent = valueOfShownNumber();
};

const valueOfShownNumber = () => {
    return parseFloat(shownNumber)
};


const concatenateDigit = (value) => {
    updateShownNumber(shownNumber + value);
};