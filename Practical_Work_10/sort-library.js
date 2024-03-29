(function (global) {
    const SortLibrary = {};

    const isSorted = (arr) => arr.every((value, index, item) => !index || item[index - 1] <= value);

    function bubbleSort(array, reversed) {
        while (!isSorted(array)) {
            for (let index = 0; index < array.length - 1; index++) {
                if (array[index] > array[index + 1]) {
                    let tempElem = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = tempElem;
                }
            }
        }
        return reversed ? array.reverse() : array;
    }

    console.log(bubbleSort([1, 3, 6, 3, 1, 3, 5], true));

    function selectionSort(array, reversed) {
        for (let index = 0; index < array.length - 1; index++) {
            let min = index;
            for (let current = index + 1; current < array.length; current++) {
                if (array[current] < array[min]) {
                    min = current;
                }
            }
            let tempElem = array[index];
            array[index] = array[min];
            array[min] = tempElem;
        }

        return reversed ? array.reverse() : array;
    }

    console.log(selectionSort([1, 3, 6, 3, 1, 3, 5]));

    function insertionSort(array, reversed) {
        for (let index = 1; index < array.length; index++) {
            let left = index - 1;
            while (left > -1 && array[left] > array[left + 1]) {
                let tempElem = array[left + 1];
                array[left + 1] = array[left];
                array[left] = tempElem;
                left--;
            }
        }

        return reversed ? array.reverse() : array;
    }

    console.log(insertionSort([6, 5, 4, 3, 2, 1]));

    global.SortLibrary = SortLibrary;
})(window);
