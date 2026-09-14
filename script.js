//connecting the button nodes
const one = document.querySelectorAll(".one");

//getting the display nodes
const display = document.querySelector("#display")

//making the display responsive to the buttons
one.forEach((button) => {
    button.addEventListener("click", () => {
    display.value = "1";
});
});

//making the display responsive to all zero buttons
const zero = document.querySelectorAll(".zero");

zero.forEach((button) => {
    button.addEventListener("click", () => {
        display.value = "0";
    })
})