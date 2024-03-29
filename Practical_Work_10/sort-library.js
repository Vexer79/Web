(function (global) {
    const SortLibrary = {};

    const isSorted = function (array, reversed) {
        return reversed
            ? array.every((value, index, item) => !index || item[index - 1] >= value)
            : array.every((value, index, item) => !index || item[index - 1] <= value);
    };
    
    function getCompare(reversed) {
        return reversed ? (left, right) => left < right : (left, right) => left > right;
    }

    function bubbleSort(array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        while (!isSorted(array, reversed)) {
            for (let index = 0; index < array.length - 1; index++) {
                compareCount++;
                if (compare(array[index], array[index + 1])) {
                    swapCount++;
                    let tempElem = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = tempElem;
                }
            }
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    }

    console.log(bubbleSort([6, 5, 4], true));

    function selectionSort(array, reversed) {
        const compare = getCompare(!reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let index = 0; index < array.length - 1; index++) {
            let min = index;
            for (let current = index + 1; current < array.length; current++) {
                compareCount++;
                if (compare(array[current], array[min])) {
                    min = current;
                }
            }
            swapCount++;
            let tempElem = array[index];
            array[index] = array[min];
            array[min] = tempElem;
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    }

    console.log(selectionSort([6, 5, 4], true));

    function insertionSort(array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let index = 1; index < array.length; index++) {
            let left = index - 1;
            if(isSorted(array, reversed)){
                break;
            }
            while (left > -1 && compare(array[left], array[left + 1])) {
                compareCount++;
                swapCount++;
                let tempElem = array[left + 1];
                array[left + 1] = array[left];
                array[left] = tempElem;
                left--;
            }
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    }

    console.log(insertionSort([6, 5, 4]), true);

    global.SortLibrary = SortLibrary;
})(window);
