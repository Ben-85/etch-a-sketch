function makeGrid(cellRows) {
    const container = document.querySelector('#gridContainer');
    gridContainer.style.cssText = `grid-template-columns: repeat(${cellRows}, 1fr)`;
    
    for (let x = 0; x < cellRows; x++) {
        for (let y = 0; y < cellRows; y++) {
            const content = document.createElement('div');
            content.classList.add('cell');
            content.id = `row-${x+1}-column-${y+1}`;
            container.appendChild(content);
        }
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    main();
}

function sliderValue() {
    let valueOfSlider = document.querySelector('#gridWidth').value;
    let div = document.querySelector('#slideWidthValue');
    div.textContent = valueOfSlider + " x " + valueOfSlider;
}

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function main() {
    let width = document.getElementById("gridWidth").value;
    makeGrid(width);

    let blocks = document.querySelectorAll('.cell');
        blocks.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                if (document.getElementById('rgbToggle').checked){
                    cell.style.backgroundColor = '#' + randomColor();
                } else {
                    cell.style.backgroundColor = document.getElementById("colorpicker").value;
                }
            });
        });
}

main();