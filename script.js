
// create new grid button
let btnContainer = document.createElement('div');
btnContainer.classList.add('btnContainer');
document.body.insertBefore(btnContainer, document.body.firstChild);
let newGridBtn = document.createElement('button');
newGridBtn.classList.add('newGridBtn');
let btnText = document.createTextNode("Create New Grid");
newGridBtn.appendChild(btnText);
newGridBtn.addEventListener('click', function() {
    // Display the prompt when the button is clicked
    const userInput = prompt("Please enter the number of squares per side: ");
    console.log(userInput);
    if (userInput < 0 || userInput > 100 || isNaN(userInput)) {
        alert("Must be a number between 1 and 100")
    }
    else if (userInput > 0 && userInput <= 100) {
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild)
            console.log("removing square");
        }
        buildGrid(userInput);
    }
});

btnContainer.appendChild(newGridBtn);

let gridContainer = document.getElementById('gridContainer');

function buildGrid(squaresPerSide) {
    let numberOfSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < numberOfSquares; i++) {

        let gridSquare = document.createElement('div'); 
        gridSquare.classList.add('square'); 

        // find height and width of squares to make them fit the grid container
        let squareHeight = gridContainer.clientHeight / squaresPerSide;
        let squareWidth = gridContainer.clientWidth / squaresPerSide;
        gridSquare.style.height = squareHeight + 'px';
        gridSquare.style.width = squareWidth + 'px';

        gridSquare.addEventListener('mouseover', function() {
            gridSquare.classList.add('square-hover');
        });

        gridContainer.appendChild(gridSquare);
    }
}

buildGrid(16);