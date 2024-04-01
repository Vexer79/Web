(function (global) {
    const SortLibrary = {};

    const isSorted = function (array, reversed) {
        return reversed
            ? array.every((value, gap, item) => !gap || item[gap - 1] >= value)
            : array.every((value, gap, item) => !gap || item[gap - 1] <= value);
    };

    function getCompare(reversed) {
        return reversed ? (left, right) => left < right : (left, right) => left > right;
    }

    SortLibrary.bubbleSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        while (!isSorted(array, reversed)) {
            for (let gap = 0; gap < len - 1; gap++) {
                compareCount++;
                if (compare(array[gap], array[gap + 1])) {
                    swapCount++;
                    let tempElem = array[gap];
                    array[gap] = array[gap + 1];
                    array[gap + 1] = tempElem;
                }
            }
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.selectionSort = function (array, reversed) {
        const compare = getCompare(!reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let gap = 0; gap < len - 1; gap++) {
            let min = gap;
            for (let current = gap + 1; current < len; current++) {
                compareCount++;
                if (compare(array[current], array[min])) {
                    min = current;
                }
            }
            swapCount++;
            let tempElem = array[gap];
            array[gap] = array[min];
            array[min] = tempElem;
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    };

    SortLibrary.insertionSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        for (let gap = 1; gap < len; gap++) {
            let left = gap - 1;
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

    SortLibrary.shellSort = function (array, reversed) {
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
