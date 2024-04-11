(function (global) {
    let timer;
    let time;
    let movesCount = 0;
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
        const fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
        let field = buildField(fieldPatternCopy);
        setTarget(target);
        startButton.addEventListener("click", (event) => {
            startTimer();
            addEventsToCells(field, fieldPatternCopy);
        });
        restartButton.addEventListener("click", (event) => {
            const fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
            if (timer) {
                stopTimer();
            }
            startTimer();
            field = buildField(fieldPatternCopy);
            movesCount = 0;
            document.getElementById("moves").textContent = 0;
            addEventsToCells(field, fieldPatternCopy);
        });
    };

    const buildField = function (fieldPattern) {
        const fieldContainer = document.getElementById("field-container");
        clearContainer(fieldContainer);
        const field = [];
        for (let i = 0; i < fieldPattern.length; i++) {
            const fieldRow = [];
            for (let j = 0; j < fieldPattern[0].length; j++) {
                const cell = createCell(fieldPattern[i][j], i, j);
                fieldContainer.appendChild(cell);
                fieldRow.push(cell);
            }
            field.push(fieldRow);
        }
        return field;
    };

    const clearContainer = function (container) {
        container.innerHTML = "";
    };

    const createCell = function (state, i, j) {
        const cell = document.createElement("div");
        cell.id = `${i}_${j}`;
        state && cell.classList.add("active");
        return cell;
    };

    const startTimer = function () {
        time = 0;
        const timerContainer = document.getElementById("timer");
        timerContainer.textContent = "00:00";
        timer = setInterval(() => {
            time++;
            timerContainer.textContent =
                Math.floor((time % 3600) / 60)
                    .toString()
                    .padStart(2, "0") +
                ":" +
                Math.floor(time % 60)
                    .toString()
                    .padStart(2, "0");
        }, 1000);
    };

    const addEventsToCells = function (field, fieldPattern) {
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[0].length; j++) {
                field[i][j].addEventListener("click", (event) => {
                    toggleCell(fieldPattern, i, j);
                    toggleCell(fieldPattern, i + 1, j);
                    toggleCell(fieldPattern, i - 1, j);
                    toggleCell(fieldPattern, i, j + 1);
                    toggleCell(fieldPattern, i, j - 1);
                    checkIsAllItemsAreZeros(fieldPattern) && end();
                    setCount();
                });
            }
        }
    };

    const toggleCell = function (fieldPattern, i, j) {
        const cell = document.getElementById(`${i}_${j}`);
        if (cell) {
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

    const setCount = function () {
        movesCount++;
        document.getElementById("moves").textContent = movesCount;
    };

    const stopTimer = function () {
        clearInterval(timer);
    };

    const setTarget = function (target) {
        document.getElementById("target").textContent = target;
    };
})(window);
