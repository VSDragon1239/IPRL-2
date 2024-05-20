function GameField({ gameFieldButtonsArray, numBombs }) {
    const [buttonsConfig, setButtonsConfig] = React.useState(gameFieldButtonsArray);

    const handleClick = (x, y) => {
        const newConfig = [...buttonsConfig];
        const button = newConfig[x][y];

        if (button.hasBomb) {
            button.className = 'bombActiveStyle';
        } else {
            button.className = 'openButtonStyle'; // Выберите подходящий класс в зависимости от количества соседних бомб
            button.text = button.adjacentBombs > 0 ? button.adjacentBombs.toString() : '';
        }

        setButtonsConfig(newConfig);
    };

    return (
        <div className="gameFieldBoardStyle" id="idFieldBoard">
            {buttonsConfig.map((row, rowIndex) =>
                row.map((button, colIndex) => (
                    <div
                        key={button.id}
                        className={`buttonClass ${button.className}`}
                        onClick={() => handleClick(rowIndex, colIndex)}
                    >
                        {button.text}
                    </div>
                ))
            )}
        </div>
    );
}