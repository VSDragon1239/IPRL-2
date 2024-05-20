function App() {
    const numBombs = 10;
    const arrayNxN = 16;

    const [bombArray, setBombArray] = React.useState([]);
    const [buttonsConfig, setButtonsConfig] = React.useState([]);
    const [gameFieldButtonsArray, setGameFieldButtonsArray] = React.useState([]);

    React.useEffect(() => {
        const newBombArray = bombsArrayFunc(arrayNxN, numBombs);
        setBombArray(newBombArray);

        const newButtonsConfig = createButtonsMatrix(arrayNxN, newBombArray);
        setButtonsConfig(newButtonsConfig);

        const newGameFieldButtonsArray = createButtonsArray(newButtonsConfig);
        setGameFieldButtonsArray(newGameFieldButtonsArray);
    }, []);

    return (
        <div>
            <Header />
            <Main gameFieldButtonsArray={gameFieldButtonsArray} numBombs={numBombs} />
            <Footer />
        </div>
    );
}


