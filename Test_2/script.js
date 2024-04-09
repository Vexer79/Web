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
    
})(window);
