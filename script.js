/*
1. Create 16x16 grid of square divs
    - use JS
    - put inside container div
    - careful with borders and margins affectng size of boxes
2. Change div background color when mouseover
    
*/

let gridContainer = document.getElementById('gridContainer');

function buildGrid(numberOfSquares) {
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

buildGrid(256);