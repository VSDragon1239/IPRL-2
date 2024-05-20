function ScoreBoard() {
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
                <button className="mainScoreBoardButtonsButtonResetStyle" id="idMainScoreBoardButtonsButtonReset">ПЕРЕЗАПУСК</button>
            </div>
        </div>
    );
}
