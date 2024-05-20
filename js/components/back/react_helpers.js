function createHTMLElement(tag, { className, id, text, src, href }) {
    const element = document.createElement(tag);
    if (href) element.href = href;
    if (src) element.src = src;
    if (text) element.innerText = text;
    if (id) element.id = id;
    if (className) element.className = className;
    return element;
}

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
        } while (bombsArray[bombPosition] === '💣'); // Повторяем, пока не найдем позицию без бомбы

        bombsArray[bombPosition] = '💣'; // Размещаем бомбу
    }

    return bombsArray;
}

function getElement(row, col, n, bombsArray) {
    return bombsArray[row * n + col];
}

function createButtonsMatrix(n, bombArray, baseClassName = 'buttonClass') {
    const buttonsConfig = [];
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const buttonId = `button_${row}_${col}`; // Уникальный идентификатор для каждой кнопки
            const buttonText = `${getElement(row, col, n, bombArray)}`; // Текст кнопки
            buttonsConfig.push({
                className: `${baseClassName}`,
                id: buttonId,
                text: buttonText,
            });
        }
    }
    return buttonsConfig;
}

function createButtonsArray(buttonsConfig) {
    return buttonsConfig.map(config => (
        <button key={config.id} className={config.className} id={config.id}>
            {config.text}
        </button>
    ));
}
