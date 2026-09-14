//connecting the button nodes
const one = document.querySelectorAll(".one");
const zero = document.querySelectorAll(".zero");

//getting the display nodes
const display = document.querySelector("#display")

//making the display responsive to the buttons
one.forEach(function(button) {
    button.addEventListener("click", function (){
    display.value="1";
});
});

