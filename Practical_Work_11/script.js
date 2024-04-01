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

    let array = generateArray(101);
    let array1 = [...array, undefined, ...array];
    let array2 = [...array, undefined, ...array];
    let array3 = [...array, undefined, ...array];
    let array4 = [...array, undefined, ...array];
    let array5 = [...array, undefined, ...array];

    console.log("bubble sort");
    console.log(SortLibrary.bubbleSort(array1, true));
    console.log(SortLibrary.bubbleSort(array1));
    console.log("selection sort");
    console.log(SortLibrary.selectionSort(array2, true));
    console.log(SortLibrary.selectionSort(array2));
    console.log("insertion sort");
    console.log(SortLibrary.insertionSort(array3, true));
    console.log(SortLibrary.insertionSort(array3));
    console.log("shell sort");
    console.log(SortLibrary.shellSort(array4, true));
    console.log(SortLibrary.shellSort(array4));
    console.log("quick sort");
    console.log(SortLibrary.quickSort(array5, true));
    console.log(SortLibrary.quickSort(array5));
})(window);
