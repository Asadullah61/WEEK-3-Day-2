// Control Flow & Functions - Calculator Demo
// This script shows alerts for errors and provides a clear button handler.

const calculate = (operator) => {
    // Read values from the inputs and convert them to numbers.
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let result;

    // Basic input validation with a helpful alert.
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        alert("Please enter both numbers before calculating.");
        return;
    }

    // Perform the selected operation.
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        // Guard against division by zero.
        if (num2 === 0) {
            alert("Cannot divide by zero.");
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    }

    // Update the result on the page.
    document.getElementById("result").textContent = `Result: ${result}`;
};

// Clear both inputs and reset the result label.
const clearCalculator = () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Result: 0";
};