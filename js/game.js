let idRol = '1'
let idCol = '1'
let buttons = document.getElementsByClassName("buttonClass");

function hiderField (marker) {
    for (let i = 0; i < buttons.length; i++) {
        let array = buttons[i]

        idRol = Number((array.id.split('_'))[1])
        idCol = Number((array.id.split('_'))[2])
        if (marker === 1) {
            if (array.textContent === '💣') {
                array.textContent = ''
                array.className = 'buttonClass bombStyle'
            }
        } else if (marker === 0) {
            if (array.className === 'buttonClass bombStyle') {
                array.className = 'buttonClass bombActiveStyle'
            }
        }

    }
}

function buttonCircle () { // функция в функции :D
    for (let i = 0; i < buttons.length; i++) {  //  Цикл, применяющий всем кнопкам фукнцию
        buttons[i].addEventListener("click", function (event) {

            idRol = Number((event.target.id.split('_'))[1])
            idCol = Number((event.target.id.split('_'))[2])


            // console.log("button_" + (idRol+1) + "_" + (idCol+1))
            if (event.target.className.split(' ')[2] !== 'flagStyle') {
                if (event.target.className === 'buttonClass bombStyle') {
                    alert("GameOver")
                    hiderField(0)
                } else {
                    event.target.textContent = checkerBomb(idRol, idCol); // Показываем текст кнопки
                    let eventTarget = event.target.textContent
                    console.log(eventTarget)
                    if (eventTarget === '1') {
                        event.target.className = 'oneOpenButtonStyle buttonClass'
                    } else if (eventTarget === '2') {
                        event.target.className = 'twoOpenButtonStyle buttonClass'
                    } else if (eventTarget === '3') {
                        event.target.className = 'threeOpenButtonStyle buttonClass'
                    } else if (eventTarget === '4') {
                        event.target.className = 'fourOpenButtonStyle buttonClass'
                    } else if (eventTarget === '5') {
                        event.target.className = 'fiveOpenButtonStyle buttonClass'
                    } else {
                        if (event.target.className !== 'openButtonStyle buttonClass') {
                            event.target.className = 'OpenButtonStyle buttonClass'
                        }
                    }
                }
            }

        });
        buttons[i].addEventListener("auxclick", function (event) {
            idRol = Number((event.target.id.split('_'))[1])
            idCol = Number((event.target.id.split('_'))[2])
            console.log(event.target.className.split(" ")[2])
            if (event.target.className.split(" ")[-1] === 'flagStyle') {
                event.target.className = (event.target.className - event.target.className.split(" ")[-1])
            } else if (event.target.className.split(" ")[0] !== 'openButtonStyle' && event.target.className.split(" ")[0] !== 'oneOpenButtonStyle' && event.target.className.split(" ")[0] !== 'twoOpenButtonStyle' && event.target.className.split(" ")[0] !== 'threeOpenButtonStyle' && event.target.className.split(" ")[0] !== 'fourOpenButtonStyle' && event.target.className.split(" ")[0] !== 'fiveOpenButtonStyle'){
                event.target.className = (event.target.className + ' flagStyle')
                console.log('')
            }
        })
    }
}


hiderField(1)
buttonCircle()



function checkerBomb(idRol, idCol) {
    let count = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let actButton = document.getElementById(("button_" + (idRol + i) + "_" + (idCol + j)));
            if (actButton && actButton.className === 'buttonClass bombStyle') {
                count++;
            }
        }
    }

    if (count === 0) {
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let actButton = document.getElementById(("button_" + (idRol + i) + "_" + (idCol + j)));
                if (actButton && !actButton.opened && !isBombNearby(idRol + i, idCol + j)) {
                    actButton.textContent = '';
                    actButton.className = 'openButtonStyle buttonClass'
                    actButton.opened = true; // Отмечаем кнопку как открытую
                    checkerBomb(idRol + i, idCol + j); // Рекурсивный вызов для соседних клеток
                }
            }
        }
    } else {
        return count;
    }
}

function isBombNearby(idRol, idCol) {
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let actButton = document.getElementById(("button_" + (idRol + i) + "_" + (idCol + j)));
            if (actButton && actButton.className === 'buttonClass bombStyle') {
                return true;
            }
        }
    }
    return false;
}


document.getElementById("idMainScoreBoardButtonsButtonReset").addEventListener("click", function() {
    let bBArray = bombsArrayFunc(arrayNxN, numBombs)

    for (let i = 0; i < buttons.length; i++) {
        let array = buttons[i]
        idRol = Number((array.id.split('_'))[1])
        idCol = Number((array.id.split('_'))[2])

        array.textContent = getElement(idRol, idCol, arrayNxN, bBArray)
        array.className = 'buttonClass'
    }
    hiderField(1)

});




document.getElementById("idMainScoreBoardButtonsButtonReset").addEventListener("auxclick", function() {
    document.oncontextmenu = function () {
        return false
    }
});
