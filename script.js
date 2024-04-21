const container = document.querySelector('#container');
let column = 16;
let buttonSquare = document.querySelector('.buttonSquare');
let squareColor = 'black';

buildSquares(column);

function buildSquares(column){
for (i=0; i < column*column ; i++){
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    div.style.width = `${500 / column}px`;
    div.style.height = `${500 / column}px`;
    div.addEventListener("mouseover", () => div.style.backgroundColor = squareColor);
}
}


buttonSquare.addEventListener('click', function changeSquare() {  
    const squares = document.querySelectorAll(".square");
    squares.forEach((e) => e.parentNode.removeChild(e));
    do{
        var column = parseInt(window.prompt("Enter the number of lines, from 1 to 100:", "100"), 10);
    }while(isNaN(column) || column > 100 || column < 1);
    buildSquares(column);
});

buttonColor = document.querySelector('.buttonColor');
buttonColor.addEventListener('click', function randomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    squareColor = `#${randomColor}`;
})