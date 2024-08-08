let numOne = 1;
let numTwo = 9;
let operator = "+";


function operate (operator, numOne, numTwo) {
    if (operator === "+") {
        return add(numOne, numTwo);
    } else if (operator === "-") {
        return subtract(numOne, numTwo);
    } else if (operator === "*") {
        return multiply(numOne, numTwo);
    } else if (operator === "/") {
        return divide(numOne, numTwo).toFixed(3);
    } else {
        return "Invalid Operation";
    }
}

function add (numOne, numTwo) {
    return numOne + numTwo;
}
function subtract (numOne, numTwo) {
    return numOne - numTwo;
}
function multiply (numOne, numTwo) {
    return numOne * numTwo;
}
function divide (numOne, numTwo) {
    return numOne / numTwo;
}


console.log(operate("/", numOne, numTwo));