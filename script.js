const container = document.querySelector('#container');
let column = 16;
function buildSquares(){
for (i=0; i < column*column ; i++){
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.width = `${500 / column}px`
    div.style.height = `${500/column}px`;
    div.addEventListener("mouseover", () => div.style.backgroundColor = 'black');    
}
}

let square = document.querySelector('.square');
square.addEventListener('click', () => {
    column = Math.sqrt(prompt('How many squares do you want?'))
    console.log(column);
    buildSquares();
});
buildSquares();