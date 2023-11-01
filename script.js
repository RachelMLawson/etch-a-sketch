/*
1. Create 16x16 grid of square divs
    - use JS
    - put inside container div
    - careful with borders and margins affectng size of boxes
2. Change div background color when mouseover
3. Add button to trigger a popup asking for number of squares per side for new grid. Replace old grid with new (takes up same total space as
    previous grid). User input has max of 100. (hint: research button tags and prompts)

*/

let btnContainer = document.createElement('div');
btnContainer.classList.add('btnContainer');
document.body.insertBefore(btnContainer, document.body.firstChild);
let newGridBtn = document.createElement('button');
newGridBtn.classList.add('newGridBtn');
let btnText = document.createTextNode("Create New Grid");
newGridBtn.appendChild(btnText);
newGridBtn.addEventListener('click', function() {
    // Display the prompt when the button is clicked
    const userInput = prompt('Please enter the number of squares per side: ');
    console.log(userInput);
    });
btnContainer.appendChild(newGridBtn);

let gridContainer = document.getElementById('gridContainer');

function buildGrid(squaresPerSide) {
    let numberOfSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < numberOfSquares; i++) {

        let gridSquare = document.createElement('div'); 
        gridSquare.classList.add('square'); 

        gridSquare.addEventListener('mouseover', function() {
            gridSquare.classList.add('square-hover');
        });

        gridContainer.appendChild(gridSquare);

        console.log("Append a square");
    }
}

buildGrid(16);