let numOne = 1;
let numTwo = 9;
// let operator = "+";
const numbersArr = ["0","1","2","3","4","5","6","7","8","9", "."];
const coreOperatorsArr = ["/", "*", "+", "-"];

let currentOperation = [];


//Button Listening Function 
const buttons = document.querySelectorAll(".calc-button");
buttons.forEach(function (button){
    button.addEventListener("click", function() {
        let inputValue = document.getElementById("input-box");
        if ((currentOperation.length == 0 || currentOperation.length == 2)) {
            if (numbersArr.includes(button.innerText)) {
                currentOperation.push(button.innerText);
                inputValue.value =  button.innerText;
            } 
        } else if (currentOperation.length == 1 && coreOperatorsArr.includes(button.innerText)) {
            currentOperation.push(button.innerText);
            // inputValue.value =  currentOperation[0];
        } else if  (currentOperation.length == 1 && numbersArr.includes(button.innerText)) {
            currentOperation[0] = currentOperation[0] + button.innerText;
            inputValue.value =  currentOperation[0];
        } else if (currentOperation.length == 3 && numbersArr.includes(button.innerText)) {
            currentOperation[2] = currentOperation[2] + button.innerText;
            inputValue.value = currentOperation[2];
        } else if (currentOperation.length == 3 && button.innerText === "=") {
            inputValue.value = operate(currentOperation[1], parseFloat(currentOperation[0]), parseFloat(currentOperation[2])).toFixed(5);
            currentOperation = [];
            currentOperation.push(inputValue.value);
        } else if (button.innerText === "C") {
            inputValue.value = "";
            currentOperation = [];
        } else if (button.innerText === "+/-") {
            if (currentOperation.length == 1) {
                inputValue.value = (parseFloat(currentOperation[0]) * -1).toString();
                currentOperation[0] = inputValue.value;
            } else if (currentOperation.length == 3) {
                inputValue.value = (parseFloat(currentOperation[2]) * -1).toString();
                currentOperation[2] = inputValue.value;
            }
        } else if (button.innerText === "%") {
            if (currentOperation.length == 1) {
                inputValue.value = (parseFloat(currentOperation[0]) / 100).toString();
                currentOperation[0] = inputValue.value;
            } else if (currentOperation.length == 3) {
                inputValue.value = (parseFloat(currentOperation[2]) / 100).toString();
                currentOperation[2] = inputValue.value;
            }
        } 
        else if (currentOperation.length == 2 && coreOperatorsArr.includes(button.innerText)) {
            currentOperation[1] = button.innerText;
        } else if (button.innerText === ".") {
            if (!inputValue.value.includes(".")) {
                inputValue.value = inputValue.value + ".";
            }
        }
        // console.log(currentOperation.toString());
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
        return divide(numOne, numTwo);
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