function createHTMLElement(tag, { className, id, text, src, onClick } = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (id) element.id = id;
    if (text) element.textContent = text;
    if (src) element.src = src;
    if (onClick) element.onclick = onClick;
    return element;
}

function bombsArrayFunc(arraySize, numBombs) {
    const bombArray = Array(arraySize).fill(null).map(() => Array(arraySize).fill(false));
    let bombsPlaced = 0;

    while (bombsPlaced < numBombs) {
        const x = Math.floor(Math.random() * arraySize);
        const y = Math.floor(Math.random() * arraySize);
        if (!bombArray[x][y]) {
            bombArray[x][y] = true;
            bombsPlaced++;
        }
    }

    return bombArray;
}

function createButtonsMatrix(arraySize, bombArray) {
    return Array(arraySize).fill(null).map((_, x) =>
        Array(arraySize).fill(null).map((_, y) => {
            const adjacentBombs = calculateAdjacentBombs(x, y, bombArray);
            return {
                id: `${x}-${y}`,
                hasBomb: bombArray[x][y],
                isRevealed: false,
                isFlagged: false,
                adjacentBombs,
                className: "buttonClass",
                text: ""
            };
        })
    );
}

function calculateAdjacentBombs(x, y, bombArray) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /*[0, 0],*/ [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    return directions.reduce((count, [dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < bombArray.length && ny < bombArray[0].length && bombArray[nx][ny]) {
            return count + 1;
        }
        return count;
    }, 0);
}

function createButtonsArray(buttonsMatrix) {
    return buttonsMatrix.map((row, rowIndex) =>
        row.map((button, colIndex) => (
            <div
                key={button.id}
                className={`buttonClass ${button.className}`}
                data-x={rowIndex}
                data-y={colIndex}
            >
                {button.text}
            </div>
        ))
    );
}
