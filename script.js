//creating variables for memory
let firstNumber = "";
let operator = "";
let secondNumber = "";

//connecting the button nodes
const one = document.querySelectorAll(".one");
const zero = document.querySelectorAll(".zero");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".delete")
const add = document.querySelector(".add");
const calculate = document.querySelector(".calculate");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
//getting the display nodes
const display = document.querySelector("#display");

//making the display responsive to the buttons
one.forEach((button) => {
    button.addEventListener("click", () => {
    display.value += "1";
});
});

//making the display responsive to all zero buttons
zero.forEach((button) => {
    button.addEventListener("click", () => {
        display.value += "0";
    })
})
//adding the clear functionality
clear.addEventListener("click", () =>{
    display.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
});
//adding the delete functionality
backspace.addEventListener("click", () => {
    display.value= display.value.slice(0,-1);
});
//adding the plus functionality
add.addEventListener("click", () =>{
    firstNumber = display.value;
    operator = "+";
    display.value = "";
})
//adding the calculate funcitonality
// adding the calculate functionality

calculate.addEventListener("click", () => {
    secondNumber = display.value;
    const first = parseInt(firstNumber, 2);
    const second = parseInt(secondNumber, 2);
    let answer;
    if (operator === "+") {
        answer = first + second;
    }
    if (operator === "-") {
        answer = first - second;
    }
    if(operator === "*"){
        answer = first * second;
    }
    if (operator === "/") {
        if (second === 0) {
        display.value = "ERROR";
        return;
    }
    answer = first / second;
}
    display.value = answer.toString(2);
    firstNumber = "";
    operator = "";
    secondNumber = "";
});
//adding the substraction functionality
subtract.addEventListener("click", () => {
    firstNumber = display.value;
    operator = "-";
    display.value = "";
});
//adding the multiply functionality
multiply.addEventListener("click", () => {
    firstNumber = display.value;
    operator = "*";
    display.value = "";
})
//adding the divide funcitonality
divide.addEventListener("click", () => {
    firstNumber = display.value;
    operator = "/";
    display.value = "";
})