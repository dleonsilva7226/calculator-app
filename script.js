let numOne = 1;
let numTwo = 9;
// let operator = "+";
const numbersArr = ["0","1","2","3","4","5","6","7","8","9"];
const coreOperatorsArr = ["/", "*", "%", "+", "-"];

let currentOperation = [];


//Button Listening Function 
const buttons = document.querySelectorAll(".calc-button");
buttons.forEach(function (button){
    button.addEventListener("click", function() {
        let inputValue = document.getElementById("input-box");
        if ((currentOperation.length == 0 || currentOperation.length == 2) && numbersArr.includes(button.innerText)) {
            currentOperation.push(button.innerText);
            inputValue.value =  inputValue.value + button.innerText;
        } else if (currentOperation.length == 1 && coreOperatorsArr.includes(button.innerText)) {
            currentOperation.push(button.innerText);
            inputValue.value =  inputValue.value + button.innerText;
        } else if  (currentOperation.length == 1 && numbersArr.includes(button.innerText)) {
            currentOperation[0] = currentOperation[0] + button.innerText;
            inputValue.value =  inputValue.value + button.innerText;
        } else if (currentOperation.length == 3 && numbersArr.includes(button.innerText)) {
            currentOperation[2] = currentOperation[2] + button.innerText;
            inputValue.value =  inputValue.value + button.innerText;
        } else if (currentOperation.length == 3 && button.innerText === "=") {
            inputValue.value = operate(currentOperation[1], parseInt(currentOperation[0]), parseInt(currentOperation[2]));
            currentOperation = [];
        } else if (button.innerText === "C") {
            inputValue.value = "";
            currentOperation = [];
        }
        console.log(currentOperation.toString());
    });
});


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


//Operating Functions
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