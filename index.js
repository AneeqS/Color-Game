var numSquare = 6;
var colors = generateColors(numSquare);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var answerDisplay = document.querySelector("#answerDisplay");
var newButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function () {

    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");

    numSquare = 3;
    colors = generateColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

});

hardButton.addEventListener("click", function () {

    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");

    numSquare = 6;
    colors = generateColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

newButton.addEventListener("click", function () {

    newButton.textContent = "New Colors?";
    colors = generateColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "cornflowerblue";

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