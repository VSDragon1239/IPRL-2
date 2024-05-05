
function createHTMLElement(tag, { className, id, text, src, href }) {
    const element = document.createElement(tag);
    if (href) element.href = href;
    if (src) element.src = src;
    if (text) element.innerText = text;
    if (id) element.id = id;
    if (className) element.className = className;
    return element;
}


// ---------------------------------------------------------------------------
let numBombs = 50
let arrayNxN = 16

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

function getElement(row, col, n, bombsArray) {
    return bombsArray[row * n + col];
}



function createButtonsMatrix(n, baseClassName = 'buttonClass') {
    const buttonsConfig = [];
    const bombArray = bombsArrayFunc(arrayNxN, numBombs)

    // Создаем массив конфигураций кнопок для матрицы n*n
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
    return buttonsConfig.map((config) => {
        return createHTMLElement('button', {
            className: config.className,
            id: config.id,
            text: config.text,
        });
    });
}

let buttonsConfig = createButtonsMatrix(arrayNxN); // Матрица 3*3

// Создаем массив кнопок на основе этой матрицы
let gameFieldButtonsArray = createButtonsArray(buttonsConfig);

// ---------------------------------------------------------------------------




// Заголовки 1
const headerH1 = createHTMLElement('h1', { className: 'classNameHeaderH1Style', id: 'idHeaderH1', text: 'ПОНИ - САПЁР' });
const mainScoreBoardH2 = createHTMLElement('h2', { className: 'classNameMainScoreBoardH2Style', id: 'idHMainScoreBoard2', text: 'СТАТИСТИКА' });
const mainScoreBoardTableTimeH3 = createHTMLElement('h3', { className: 'classNameMainScoreBoardTableTimeH3', id: 'idMainScoreBoardTableTimeH3', text: 'ВРЕМЯ' });
const mainScoreBoardTableTimePar1 = createHTMLElement('p', { className: 'classNameMainScoreBoardTableTimePar1', id: 'idMainScoreBoardTableTimePar1', text: '00:00' });
const mainScoreBoardTableScoreH3 = createHTMLElement('h3', { className: 'classNameMainScoreBoardTableScoreH3', id: 'idMainScoreBoardTableScoreH3', text: 'СЧЁТ' });
const mainScoreBoardTableScorePar1 = createHTMLElement('p', { className: 'classNameMainScoreBoardTableScorePar1', id: 'idMainScoreBoardTableScorePar1', text: '0 Очков' });
let mainFieldBoardStatisticIconBombCountGamePar = createHTMLElement('p', { className: 'classNameMainFieldBoardStatisticIconBombCountGamePar1', id: 'idMainFieldBoardStatisticIconBombCountGamePar1', text: `${numBombs}` });
let mainFieldBoardStatisticIconFlagCountGamePar = createHTMLElement('p', { className: 'classNameMainFieldBoardStatisticIconFlagCountGamePar1', id: 'idMainFieldBoardStatisticIconFlagCountGamePar1', text: `${numBombs}` });

// Основные элементы
const header = createHTMLElement('header', { className: 'headerStyle', id: 'idHeader' });
const main = createHTMLElement('main', { className: 'mainStyle', id: 'idMain' });
const footer = createHTMLElement('footer', { className: 'footerStyle', id: 'idFooter' });

// Добавление в body
document.body.append(header);
document.body.append(main);
document.body.append(footer);

// Меню навигации сверху
const headerMainIconGame2 = createHTMLElement('img', { className: 'headerMainIconGameStyle', id: 'idHeaderMainIconGame', src: 'img/main_header_image.png' });
const headerMainIconGame1 = createHTMLElement('img', { className: 'headerMainIconGameStyle', id: 'idHeaderMainIconGame', src: 'img/main_header_image_r.png' });
const headerLinks = createHTMLElement('div', { className: 'headerLinksStyle', id: 'idHeaderLinks' });
const headerNameImage = createHTMLElement('div', { className: 'headerNameImageStyle', id: 'idHeaderNameImage' });
const headerLinkIconLogo = createHTMLElement('div', { className: 'headerLinksIconLogoStyle', id: 'idHeaderLinksIconLogo' });
const headerLinkButtonSettings = createHTMLElement('button', { className: 'headerLinkButtonSettingsStyle', id: 'idHeaderLinkSettings', text: 'НАСТРОЙКИ' });
const headerLinkIconAccount = createHTMLElement('a', { className: 'headerLinkIconAccountStyle', id: 'idHeaderLinkIconAccount', text: 'Аккаунт' });

const mainFieldBoardStatisticIconBombGame = createHTMLElement('img', { className: 'mainFieldBoardStatisticIconGameStyle', id: 'idMainFieldBoardStatisticIconBombGame', src: 'img/elementsOfHarmony.png' });
const mainFieldBoardStatisticIconFlagGame = createHTMLElement('img', { className: 'mainFieldBoardStatisticIconGameStyle', id: 'idMainFieldBoardStatisticIconBombGame', src: 'img/flag.png' });

const mainScoreBoardIconPony = createHTMLElement('img', { className: 'mainScoreBoardIconPonyStyle', id: 'idMainScoreBoardIconPony', src: 'img/ponyIcon.png' });
const mainScoreBoardButtons = createHTMLElement('div', { className: 'mainScoreBoardButtonsStyle', id: 'idMainScoreBoardButtons' });
const mainScoreBoardButtonsButtonReset = createHTMLElement('button', { className: 'mainScoreBoardButtonsButtonResetStyle', id: 'idMainScoreBoardButtonsButtonReset', text: 'ПЕРЕЗАПУСК' });



// Добавление в header
const innerHeader = document.getElementById('idHeader');
innerHeader.append(headerLinks);
innerHeader.append(headerNameImage);

const innerHeaderLinks = document.getElementById('idHeaderLinks');
innerHeaderLinks.append(headerLinkIconLogo);
innerHeaderLinks.append(headerLinkButtonSettings);
innerHeaderLinks.append(headerLinkIconAccount);

const innerHeaderNameImage = document.getElementById('idHeaderNameImage');
innerHeaderNameImage.append(headerMainIconGame1);
innerHeaderNameImage.append(headerH1);
innerHeaderNameImage.append(headerMainIconGame2);

// Игровые элементы
const field = createHTMLElement('div', { className: 'gameFieldStyle', id: 'idField' });
const fieldBoard = createHTMLElement('div', { className: 'gameFieldBoardStyle', id: 'idFieldBoard' });
const fieldBoardStatistic = createHTMLElement('div', { className: 'fieldBoardStatisticStyle', id: 'idFieldBoardStatistic' });
const fieldBoardStatisticBombs = createHTMLElement('div', { className: 'fieldBoardStatisticBombsStyle fieldBoardStatisticStyle', id: 'idFieldBoardStatisticBombs' });
const fieldBoardStatisticFlags = createHTMLElement('div', { className: 'fieldBoardStatisticFlagsStyle fieldBoardStatisticStyle', id: 'idFieldBoardStatisticFlags' });
const scoreBoard = createHTMLElement('div', { className: 'ScoreBoardStyle', id: 'idScoreBoard' });
const scoreBoardTable = createHTMLElement('div', { className: 'ScoreBoardTableStyle', id: 'idScoreBoardTable' });

// Добавление в main
const innerMain = document.getElementById('idMain');
innerMain.append(field);
innerMain.append(scoreBoard);

const innerFieldBoard = document.getElementById('idField');
innerFieldBoard.append(fieldBoardStatistic)
innerFieldBoard.append(fieldBoard)

const innerField = document.getElementById('idFieldBoard');
gameFieldButtonsArray.forEach((buttonX) => {
    innerField.append(buttonX);
});

const innerFieldBoardStatistic = document.getElementById('idFieldBoardStatistic');
innerFieldBoardStatistic.append(fieldBoardStatisticBombs)
innerFieldBoardStatistic.append(fieldBoardStatisticFlags)

const innerFieldBoardStatisticBombs = document.getElementById('idFieldBoardStatisticBombs');
innerFieldBoardStatisticBombs.append(mainFieldBoardStatisticIconBombGame)
innerFieldBoardStatisticBombs.append(mainFieldBoardStatisticIconBombCountGamePar)

const innerFieldBoardStatisticFlags = document.getElementById('idFieldBoardStatisticFlags');
innerFieldBoardStatisticFlags.append(mainFieldBoardStatisticIconFlagGame)
innerFieldBoardStatisticFlags.append(mainFieldBoardStatisticIconFlagCountGamePar)




const innerScoreBoard = document.getElementById('idScoreBoard');
innerScoreBoard.append(mainScoreBoardH2)
innerScoreBoard.append(scoreBoardTable)
innerScoreBoard.append(mainScoreBoardIconPony)
innerScoreBoard.append(mainScoreBoardButtons)

const innerScoreBoardTable = document.getElementById('idScoreBoardTable');
innerScoreBoardTable.append(mainScoreBoardTableTimeH3)
innerScoreBoardTable.append(mainScoreBoardTableTimePar1)
innerScoreBoardTable.append(mainScoreBoardTableScoreH3)
innerScoreBoardTable.append(mainScoreBoardTableScorePar1)

const innerScoreBoardButtons = document.getElementById('idMainScoreBoardButtons');
innerScoreBoardButtons.append(mainScoreBoardButtonsButtonReset)



