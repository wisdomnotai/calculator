//connecting the button nodes
const one = document.querySelectorAll(".one");
const zero = document.querySelectorAll(".zero");
const clear = document.querySelector(".clear");
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