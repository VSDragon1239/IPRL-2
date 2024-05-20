function Main({ gameFieldButtonsArray, numBombs }) {
    return (
        <main className="mainStyle" id="idMain">
            <GameField gameFieldButtonsArray={gameFieldButtonsArray} numBombs={numBombs} />
            <ScoreBoard />
        </main>
    );
}



