var colors =
    ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var answerDisplay = document.querySelector("#answerDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add colors
    squares[i].style.backgroundColor = colors[i];

    //add listeners
    squares[i].addEventListener("click", function () {
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           answerDisplay.textContent = "Correct!";
           colorChange(clickedColor);
       }else{
           this.style.backgroundColor = document.body.style.backgroundColor;
           answerDisplay.textContent = "Wrong!";
       }
    });
}

function colorChange(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}