let shownNumber;

const updateShownNumber = (value) => {
    if (value.length == 0) {
        value = '0';
    }    

    shownNumber = value.toString();
    document.getElementById("shownNumber").textContent = valueOfShownNumber();
};

const clearShownNumber = () => {
    updateShownNumber('');
};

const valueOfShownNumber = () => {
    return parseFloat(shownNumber)
};

const shownNumberString = () => {
    return shownNumber
};


export {
    shownNumberString, valueOfShownNumber, updateShownNumber, clearShownNumber
}