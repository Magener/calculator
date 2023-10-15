let shownNumber;


const updateShownNumber = (value) => {
    shownNumber = value;
    document.getElementById("shownNumber").textContent = valueOfShownNumber();
};

const valueOfShownNumber = () => {
    return parseFloat(shownNumber)
};

const shownNumberString = () => {
    return shownNumber
};


export {
    shownNumberString, valueOfShownNumber, updateShownNumber
}