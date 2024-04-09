(function (global) {
    let timer;
    fetch("field.json")
        .then((response) => {
            return response.json();
        })
        .then((object) => {
            start(object);
        })
        .catch((error) => {
            console.log(error);
        });

    const start = function ({ target, fieldPattern }) {
        const startButton = document.getElementById("start-button");
        const restartButton = document.getElementById("restart-button");
        let fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
        const field = buildField(fieldPatternCopy);
        startButton.addEventListener((event) => {
            startTimer();
            addEventsToCells(field, fieldPatternCopy);
        });
        restartButton.addEventListener((event)=>{
            fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
            startTimer();
            addEventsToCells(field, fieldPatternCopy);
        });
    };

    const buildField = function (fieldPattern) {
        const fieldContainer = document.getElementById("field-container");
        clearContainer(fieldContainer);
        const field = [];
        fieldPattern.forEach((row) => {
            const fieldRow = [];
            row.forEach((cellState) => {
                const cell = createCell(cellState);
                fieldContainer.appendChild(cell);
                fieldRow.push(cell);
            });
            field.push(fieldRow);
        });
        return field;
    };

    const clearContainer = function (container) {
        container.innerHTML = "";
    };

    const createCell = function (state) {
        const cell = document.createElement("div");
        cell.classList.add(state ? "active" : "");
        return cell;
    };

    const startTimer = function () {
        timer = setInterval(() => {}, 1000);
    };

    const addEventsToCells = function (field, fieldPattern) {
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[0].length; j++) {
                field[i][j].addEventListener("click", (event) => {
                    toggleCell(field, fieldPattern, i, j);
                    toggleCell(field, fieldPattern, i + 1, j);
                    toggleCell(field, fieldPattern, i - 1, j);
                    toggleCell(field, fieldPattern, i, j + 1);
                    toggleCell(field, fieldPattern, i, j - 1);
                    checkIsAllItemsAreZeros(fieldPattern) && end();
                });
            }
        }
    };

    const toggleCell = function (cell, fieldPattern, i, j) {
        if (i > -1 && i < 6 && j > -1 && j < 6) {
            fieldPattern[i][j] = !fieldPattern[i][j];
            cell.classList.toggle("active");
        }
    };

    const checkIsAllItemsAreZeros = function (fieldPattern) {
        let isAllZeros = true;
        fieldPattern.forEach((row) => {
            row.forEach((cell) => {
                isAllZeros = !cell && isAllZeros ? true : false;
            });
        });
        return isAllZeros;
    };

    const end = function () {
        stopTimer();
        if (!alert("the end")) {
        }
    };

    const stopTimer = function () {
        clearInterval(timer);
    };

    const setTarget = function (target) {
        document.getElementById("target").textContent = target;
    };
})(window);
