// Hardcoded exchange rates
const CAD_to_USD_rate = 0.75;
const USD_to_CAD_rate = 1.33;

// Function to convert CAD to USD
function convertToUSD() {
    const amount = document.getElementById('amount').value;
    const result = parseFloat(amount) * CAD_to_USD_rate;

    if (!isNaN(result)) {
        displayResult(`${amount} CAD is ${result.toFixed(3)} USD`);
    } else {
        displayResult('Invalid input. Please enter a valid number.');
    }
}

// Function to convert USD to CAD
function convertToCAD() {
    const amount = document.getElementById('amount').value;
    const result = parseFloat(amount) * USD_to_CAD_rate;

    if (!isNaN(result)) {
        displayResult(`${amount} USD is ${result.toFixed(3)} CAD`);
    } else {
        displayResult('Invalid input. Please enter a valid number.');
    }
}

// Function to display the conversion result
function displayResult(message) {
    document.getElementById('conversionResult').innerText = message;
}

