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
    const buttonsMatrix = Array(arraySize).fill(null).map((_, x) =>
        Array(arraySize).fill(null).map((_, y) => ({
            id: `${x}-${y}`,
            hasBomb: bombArray[x][y],
            isRevealed: false,
            isFlagged: false,
            adjacentBombs: 0,
            className: "gameFieldButton",
            text: ""
        }))
    );

    for (let x = 0; x < arraySize; x++) {
        for (let y = 0; y < arraySize; y++) {
            if (buttonsMatrix[x][y].hasBomb) continue;
            let adjacentBombs = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (x + i >= 0 && x + i < arraySize && y + j >= 0 && y + j < arraySize) {
                        if (buttonsMatrix[x + i][y + j].hasBomb) {
                            adjacentBombs++;
                        }
                    }
                }
            }
            buttonsMatrix[x][y].adjacentBombs = adjacentBombs;
        }
    }

    return buttonsMatrix;
}

function createButtonsArray(buttonsMatrix) {
    return buttonsMatrix.flat().map(config => (
        <button key={config.id} className={config.className} id={config.id}>
            {config.text}
        </button>
    ));
}


