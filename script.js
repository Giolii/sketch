const container = document.querySelector('#container');
let buttonColor = document.querySelector('.buttonColor');
let buttonSquare = document.querySelector('.buttonSquare');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let column = 16;
buildSquares(column);

function buildSquares(column){
for (i=0; i < column*column ; i++){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    div.style.width = `${500 / column}px`;
    div.style.height = `${500 / column}px`;
    div.addEventListener("mouseover", () => div.style.backgroundColor = `black`);
    buttonColor.addEventListener('click', function random(){
    div.addEventListener("mouseover", () => {      
    div.style.backgroundColor = `#${randomColor}`;
    let currentBrightness = div.style.filter || 'brightness(1.6)';
    let currentNumber = currentBrightness.match(/[\d.]+/)[0];
    let newBrightness = currentNumber - 0.2;
    div.style.filter = `brightness(${newBrightness})`;

    });
    })
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
