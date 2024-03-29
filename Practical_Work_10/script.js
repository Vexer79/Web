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

    let array = generateArray(100);
    let array2 = [...array];
    let array3 = [...array];

    console.log(SortLibrary.bubbleSort(array, true));
    console.log(SortLibrary.bubbleSort(array));
    console.log(SortLibrary.selectionSort(array2, true));
    console.log(SortLibrary.selectionSort(array2));
    console.log(SortLibrary.insertionSort(array3, true));
    console.log(SortLibrary.insertionSort(array3));
})(window);
