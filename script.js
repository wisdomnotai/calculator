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
//getting the display nodes
const display = document.querySelector("#display")

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
