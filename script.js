
////// Roman Numeral Converter //////
function convertToRoman(num) {
    /*
        Converts an integer to a Roman numeral.
        Input: num (integer) - The integer to convert (1-3999)
        Output: (string) - The Roman numeral representation of the integer
    */
    if (num < 1 || num > 3999) {
        return 'Number out of range (1-3999)';
    } else {
        const romanMap = [
            { value: 1000, symbol: "M" },
            { value: 900, symbol: "CM" },
            { value: 500, symbol: "D" },
            { value: 400, symbol: "CD" },
            { value: 100, symbol: "C" },
            { value: 90, symbol: "XC" },
            { value: 50, symbol: "L" },
            { value: 40, symbol: "XL" },
            { value: 10, symbol: "X" },
            { value: 9, symbol: "IX" },
            { value: 5, symbol: "V" },
            { value: 4, symbol: "IV" },
            { value: 1, symbol: "I" }
        ];

        let result = "";

        for (let i = 0; i < romanMap.length; i++) {
            while (num >= romanMap[i].value) {
                result += romanMap[i].symbol;
                num -= romanMap[i].value;
            }
        }

        return result;
    }
}

const convertButton = document.querySelector('#convert-btn');
const inputField = document.querySelector('#number');
const outputDiv = document.querySelector('#output');




convertButton.addEventListener('click', () => {
    const number = parseInt(inputField.value);

    if (isNaN(number)) {
        outputDiv.textContent = 'Please enter a valid number';
    } else {
        if (number <1) {
            outputDiv.textContent = 'Please enter a number greater than or equal to 1';
        } else if (number > 3999) {
            outputDiv.textContent = 'Please enter a number less than or equal to 3999';
        } else {
            const romanNumeral = convertToRoman(number);
            outputDiv.textContent = romanNumeral;
        }
    }
});