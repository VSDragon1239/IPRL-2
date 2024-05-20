function GameField({ gameFieldButtonsArray, numBombs }) {
    return (
        <div className="gameFieldStyle" id="idField">
            <div className="fieldBoardStatisticStyle" id="idFieldBoardStatistic">
                <div className="fieldBoardStatisticBombsStyle fieldBoardStatisticStyle" id="idFieldBoardStatisticBombs">
                    <img className="mainFieldBoardStatisticIconGameStyle" id="idMainFieldBoardStatisticIconBombGame" src="img/elementsOfHarmony.png" />
                    <p className="classNameMainFieldBoardStatisticIconBombCountGamePar1" id="idMainFieldBoardStatisticIconBombCountGamePar1">{numBombs}</p>
                </div>
                <div className="fieldBoardStatisticFlagsStyle fieldBoardStatisticStyle" id="idFieldBoardStatisticFlags">
                    <img className="mainFieldBoardStatisticIconGameStyle" id="idMainFieldBoardStatisticIconFlagGame" src="img/flag.png" />
                    <p className="classNameMainFieldBoardStatisticIconFlagCountGamePar1" id="idMainFieldBoardStatisticIconFlagCountGamePar1">{numBombs}</p>
                </div>
            </div>
            <div className="gameFieldBoardStyle" id="idFieldBoard">
                {gameFieldButtonsArray.map(button => button)}
            </div>
        </div>
    );
}


