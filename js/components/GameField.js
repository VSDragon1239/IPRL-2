function GameField() {
    const numBombs = 30;
    const arrayNxN = 16;

    const [bombArray, setBombArray] = React.useState([]);
    const [gameFieldButtonsArray, setGameFieldButtonsArray] = React.useState([]);

    React.useEffect(() => {
        const newBombArray = bombsArrayFunc(arrayNxN, numBombs);
        setBombArray(newBombArray); 

        const newButtonsConfig = createButtonsMatrix(arrayNxN, newBombArray);
        setButtonsConfig(newButtonsConfig);

        const gameFieldButtonsArray = createButtonsArray(newButtonsConfig);
        setGameFieldButtonsArray(gameFieldButtonsArray);
    }, []);
    
    console.log("App buttons ", gameFieldButtonsArray)
    
    const [buttonsConfig, setButtonsConfig] = React.useState(gameFieldButtonsArray);

    const handleClick = (x, y) => {
        // Копируем текущую конфигурацию кнопок для обновления
        const newConfig = [...buttonsConfig];

        // Получаем ссылку на кнопку, по которой кликнули
        const button = newConfig[x][y];

        // Проверяем, есть ли бомба на кнопке
        if (button.hasBomb) {
            // Если есть, изменяем класс кнопки на активный стиль бомбы
            button.className = 'bombActiveStyle';
        } else {
            // Если нет, изменяем класс кнопки на стиль открытой кнопки
            button.className = 'openButtonStyle';
            // Устанавливаем текст кнопки в зависимости от количества соседних бомб
            button.text = button.adjacentBombs > 0 ? button.adjacentBombs.toString() : '';
        }

        // Обновляем состояние конфигурации кнопок
        setButtonsConfig(newConfig);
    };

    // Используем функцию createButtonsArray для создания JSX-разметки кнопок
    const buttonsArrayJSX = createButtonsArray(buttonsConfig, handleClick);
    // Возвращаем JSX-разметку для отображения игрового поля
    return (
        <div className="gameFieldBoardStyle" id="idFieldBoard">
            {buttonsArrayJSX}
        </div>
    );
}
