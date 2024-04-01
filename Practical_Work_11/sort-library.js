(function (global) {
    const SortLibrary = {};

    const isSorted = function (array, reversed) {
        return reversed
            ? array.every((value, index, item) => !index || item[index - 1] >= value)
            : array.every((value, index, item) => !index || item[index - 1] <= value);
    };

    function getCompare(reversed) {
        if (reversed) {
            return function (left, right) {
                if (left === undefined) {
                    return false;
                } else if (right === undefined) {
                    return true;
                }
                return left < right;
            };
        } else {
            return function (left, right) {
                if (left === undefined) {
                    return true;
                } else if (right === undefined) {
                    return false;
                }
                return left > right;
            };
        }
    }

    SortLibrary.bubbleSort = function (array, reversed = false) {
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
    };

    SortLibrary.selectionSort = function (array, reversed = false) {
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
    };

    SortLibrary.insertionSort = function (array, reversed = false) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let index = 1; index < array.length; index++) {
            let left = index - 1;
            if (isSorted(array, reversed)) {
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
    };

    SortLibrary.shellSort = function (array, reversed = false) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        const len = array.length;
        for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < len; i++) {
                for (let j = i - gap; j >= 0 && compare(array[j], array[j + gap]); j--) {
                    compareCount++;
                    swapCount++;
                    let tempElem = array[j + gap];
                    array[j + gap] = array[j];
                    array[j] = tempElem;
                }
            }
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    };

    global.SortLibrary = SortLibrary;
})(window);
