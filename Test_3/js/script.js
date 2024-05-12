//p.s в калькуляторі не врахована похибка double
(function () {
    const firstOperandContainer = document.getElementById("first-operand");
    const secondOperandContainer = document.getElementById("second-operand");
    const resultContainer = document.getElementById("result");
    const infoContainer = document.getElementById("content");

    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");
    const logBtn = document.getElementById("logBtn");
    const sinBtn = document.getElementById("sinBtn");
    const tanBtn = document.getElementById("tanBtn");

    const OPERAND_IS_NOT_CORRECT = "Operand is not correct!";

    function add(operand1, operand2) {
        return checkIfOperandsAreCorrect(operand1, operand2)
            ? operand1 + operand2
            : OPERAND_IS_NOT_CORRECT;
    }

    function subtract(operand1, operand2) {
        return checkIfOperandsAreCorrect(operand1, operand2)
            ? operand1 - operand2
            : OPERAND_IS_NOT_CORRECT;
    }

    function multiply(operand1, operand2) {
        return checkIfOperandsAreCorrect(operand1, operand2)
            ? operand1 * operand2
            : OPERAND_IS_NOT_CORRECT;
    }

    function divide(operand1, operand2) {
        return checkIfOperandsAreCorrect(operand1, operand2)
            ? operand2 === 0
                ? "operand 2 is equal to 0"
                : operand1 / operand2
            : OPERAND_IS_NOT_CORRECT;
    }

    function log(operand) {
        return checkIfOperandIsCorrect(operand)
            ? operand > 0
                ? Math.log(operand)
                : "operand 1 is less or equal 0"
            : OPERAND_IS_NOT_CORRECT;
    }

    function sin(operand) {
        return checkIfOperandIsCorrect(operand)
            ? Math.sin(getRadians(operand))
            : OPERAND_IS_NOT_CORRECT;
    }

    function tan(operand) {
        const num = Math.tan(getRadians(operand));
        return checkIfOperandsAreCorrect(operand, num) ? num : OPERAND_IS_NOT_CORRECT;
    }

    function getNumberFromContainer(container) {
        return Number(container.value.replace(",", "."));
    }

    function checkIfOperandsAreCorrect(operand1, operand2) {
        return (
            typeof operand1 === "number" &&
            isFinite(operand1) &&
            typeof operand2 === "number" &&
            isFinite(operand2)
        );
    }

    function checkIfOperandIsCorrect(operand1) {
        return typeof operand1 === "number" && isFinite(operand1);
    }

    function getRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    function insertProperty(string, propName, propValue) {
        const propToReplace = `{{${propName}}}`;
        return string.replace(new RegExp(propToReplace, "g"), propValue);
    }

    function showInfo(func) {
        fetch(`./data/${func}.json`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                fetch("./snippet/info.html")
                    .then((response) => {
                        return response.text();
                    })
                    .then((infoSnippet) => {
                        infoSnippet = insertProperty(infoSnippet, "name", json.name);
                        infoSnippet = insertProperty(infoSnippet, "image_name", json["image_name"]);
                        infoSnippet = insertProperty(infoSnippet, "description", json.description);
                        return infoSnippet;
                    })
                    .then((html) => {
                        infoContainer.innerHTML = html;
                    });
            });
    }

    addBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${add(
            getNumberFromContainer(firstOperandContainer),
            getNumberFromContainer(secondOperandContainer)
        )}`;
        infoContainer.innerHTML = "";
    });

    subtractBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${subtract(
            getNumberFromContainer(firstOperandContainer),
            getNumberFromContainer(secondOperandContainer)
        )}`;
        infoContainer.innerHTML = "";
    });

    multiplyBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${multiply(
            getNumberFromContainer(firstOperandContainer),
            getNumberFromContainer(secondOperandContainer)
        )}`;
        infoContainer.innerHTML = "";
    });

    divideBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${divide(
            getNumberFromContainer(firstOperandContainer),
            getNumberFromContainer(secondOperandContainer)
        )}`;
        infoContainer.innerHTML = "";
    });

    logBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${log(
            getNumberFromContainer(firstOperandContainer)
        )}`;
        showInfo("log");
    });

    sinBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${sin(
            getNumberFromContainer(firstOperandContainer)
        )}`;
        showInfo("sin");
    });

    tanBtn.addEventListener("click", (event) => {
        resultContainer.textContent = `Result: ${tan(
            getNumberFromContainer(firstOperandContainer)
        )}`;
        showInfo("tan");
    });
})();
