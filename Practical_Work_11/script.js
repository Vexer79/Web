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
    let arrayUndefined1 = [...array, undefined, ...array];
    let array1 = [...array];
    let arrayUndefined2 = [...array, undefined, ...array];
    let array2 = [...array];
    let arrayUndefined3 = [...array, undefined, ...array];
    let array3 = [...array];
    let arrayUndefined4 = [...array, undefined, ...array];
    let array4 = [...array];
    let arrayUndefined5 = [...array, undefined, ...array];
    let array5 = [...array];

    console.log("bubble sort");
    console.log(SortLibrary.dotComSort(array1, true));
    console.log(SortLibrary.dotComSort(array1));
    console.log("selection sort");
    console.log(SortLibrary.ctrlASort(array2, true));
    console.log(SortLibrary.ctrlASort(array2));
    console.log("insertion sort");
    console.log(SortLibrary.insertionSort(array3, true));
    console.log(SortLibrary.insertionSort(array3));
    console.log("shell sort");
    console.log(SortLibrary.zapravkaSort(array4, true));
    console.log(SortLibrary.zapravkaSort(array4));
    console.log("quick sort");
    console.log(SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort(array5, true));
    console.log(SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort(array5));

    console.log("with undefined");

    console.log("bubble sort");
    console.log(SortLibrary.dotComSort(arrayUndefined1, true));
    console.log(SortLibrary.dotComSort(arrayUndefined1));
    console.log("selection sort");
    console.log(SortLibrary.ctrlASort(arrayUndefined2, true));
    console.log(SortLibrary.ctrlASort(arrayUndefined2));
    console.log("insertion sort");
    console.log(SortLibrary.insertionSort(arrayUndefined3, true));
    console.log(SortLibrary.insertionSort(arrayUndefined3));
    console.log("shell sort");
    console.log(SortLibrary.zapravkaSort(arrayUndefined4, true));
    console.log(SortLibrary.zapravkaSort(arrayUndefined4));
    console.log("quick sort");
    console.log(SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort(arrayUndefined5, true));
    console.log(SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort(arrayUndefined5));
})(window);
