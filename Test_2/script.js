//Варіант 2
(function (global) {
    function getRandomInt(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function generateArray(n) {
        let array = [];
        for (let index = 0; index < n; index++) {
            array[index] = getRandomInt();
        }
        return array;
    }

    let array = generateArray(20);
    console.log(SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort(array, true));
    document.getElementById("container").textContent = array;
    document.getElementById("generate-button").addEventListener("click", (event) => {
        if (!document.getElementById("select-container")) {
            createContainer();
        } else {
            document.getElementById("select-container").remove();
            createContainer();
        }
    });
    function createContainer() {
        const div = document.createElement("div");
        div.id = "select-container";
        div.style.backgroundColor = "blue";
        div.style.width = "30px";
        div.style.height = `${document.getElementById("height").value}px`;
        document.body.appendChild(div);
    }
})(window);
