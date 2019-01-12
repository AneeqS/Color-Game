var colors = generateColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var answerDisplay = document.querySelector("#answerDisplay");
var newButton = document.querySelector("#reset");

newButton.addEventListener("click", function () {

    newButton.textContent = "New Colors?";
    colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = document.body.style.backgroundColor;

});

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
           newButton.textContent = "Play Again?"
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
    h1.style.backgroundColor = color;
}

function pickColor() {

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {

    var array = [];

    for(var i = 0; i < num; i++){
        array.push(randomColor());
    }

    return array;
}

function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";

}