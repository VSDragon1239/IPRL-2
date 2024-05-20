//function createHTMLElement(tag, { className, id, text, src, onClick } = {}) {
//    const element = document.createElement(tag);
//    if (className) element.className = className;
  //  if (id) element.id = id;
    //if (text) element.textContent = text;
    //if (src) element.src = src;
    //if (onClick) element.onclick = onClick;
    //return element;
//}

function bombsArrayFunc(n, numBombs) {
    let bombsArray = [];
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            bombsArray.push(''); // Заполняем массив нулями 
        }
    }

    for (let i = 0; i < numBombs; i++) {
        let bombPosition;
        do {
            bombPosition = Math.floor(Math.random() * n * n); // Генерируем случайную позицию для бомбы
        } while (bombsArray[bombPosition] === 1); // Повторяем, пока не найдем позицию без бомбы

        bombsArray[bombPosition] = '💣'; // Размещаем бомбу
    }

    return bombsArray;
}

function createButtonsMatrix(arraySize, bombArray) {
    // Преобразование одномерного массива bombArray в двумерный для удобства
    const bombMatrix = [];
    for (let i = 0; i < arraySize; i++) {
        bombMatrix[i] = bombArray.slice(i * arraySize, (i + 1) * arraySize);
    }

    return Array(arraySize).fill(null).map((_, x) =>
        Array(arraySize).fill(null).map((_, y) => {
            const adjacentBombs = calculateAdjacentBombs(x, y, bombMatrix, arraySize);
            const hasBomb = bombMatrix[x][y] === '💣';
            return {
                id: `${x}-${y}`,
                hasBomb: hasBomb,
                isRevealed: false,
                isFlagged: false,
                adjacentBombs,
                className: hasBomb ? "isBombStyle" : "buttonClass",
                text: ""
            };
        })
    );
}

function calculateAdjacentBombs(x, y, bombMatrix, arraySize) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /*[0, 0],*/ [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    return directions.reduce((count, [dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < arraySize && ny < arraySize && bombMatrix[nx][ny] === '💣') {
            return count + 1;
        }
        return count;
    }, 0);
}


function createButtonsArray(buttonsMatrix, handleClick) {
    return buttonsMatrix.map((row, rowIndex) =>
        row.map((button, colIndex) => (
            <div
                key={button.id}
                className={`buttonClass ${button.className}`}
                data-x={rowIndex}
                data-y={colIndex}
                onClick={() => handleClick(rowIndex, colIndex)} // Добавлен обработчик клика
            >
                {button.text}
            </div>
        ))
    );
}
