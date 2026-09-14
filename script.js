//connecting the button nodes
const one = document.querySelector(".one");
const two = document.querySelector("two");

//getting the display nodes
const display = document.querySelector("#display")

//making the display responsive to the buttons
one.addEventListener("click", function (){
    display.value="1";
});

two.addEventListener("click", function(){
    display.value = "2";
})