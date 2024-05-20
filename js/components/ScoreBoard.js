function ScoreBoard( {gameFieldButtonsArray} ) {
    console.log("GameField  ", gameFieldButtonsArray)
    const [buttonsConfig, setButtonsConfig] = React.useState(gameFieldButtonsArray);
    console.log(React.useState(gameFieldButtonsArray))
    
    const handleClick = (x, y) => {
        const newConfig = [...buttonsConfig];
        const button = newConfig[x][y];
        

        if (button.hasBomb) {
            button.className = 'bombActiveStyle';
        } else {
            button.className = 'openButtonStyle';
            button.text = button.adjacentBombs > 0 ? button.adjacentBombs.toString() : '';
        }

        setButtonsConfig(newConfig);
        console.log("handleDClick ", newConfig)
        
    };
    return (
        <div className="ScoreBoardStyle" id="idScoreBoard">
            <h2 className="classNameMainScoreBoardH2Style" id="idHMainScoreBoard2">СТАТИСТИКА</h2>
            <div className="ScoreBoardTableStyle" id="idScoreBoardTable">
                <h3 className="classNameMainScoreBoardTableTimeH3" id="idMainScoreBoardTableTimeH3">ВРЕМЯ</h3>
                <p className="classNameMainScoreBoardTableTimePar1" id="idMainScoreBoardTableTimePar1">00:00</p>
                <h3 className="classNameMainScoreBoardTableScoreH3" id="idMainScoreBoardTableScoreH3">СЧЁТ</h3>
                <p className="classNameMainScoreBoardTableScorePar1" id="idMainScoreBoardTableScorePar1">0 Очков</p>
            </div>
            <img className="mainScoreBoardIconPonyStyle" id="idMainScoreBoardIconPony" src="img/ponyIcon.png" />
            <div className="mainScoreBoardButtonsStyle" id="idMainScoreBoardButtons">
                <button className="mainScoreBoardButtonsButtonResetStyle" id="idMainScoreBoardButtonsButtonReset" onClick={() => handleClick(rowIndex, colIndex)}>ПЕРЕЗАПУСК</button>
            </div>
        </div>
    );
}
