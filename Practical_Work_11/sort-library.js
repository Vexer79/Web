(function (global) {
    const SortLibrary = {};

    const isSorted = function (array, reversed) {
        const compare = getCompare(reversed);
        for (let i = 0; i < array.length - 1; i++) {
            if (compare(array[i], array[i + 1])) {
                return false;
            }
        }
        return true;
    };

    const hintUndefined = function(){
        console.log("undefined behaves such as the largest number");
    }

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

    SortLibrary.dotComSort = function (array, reversed) {
        array.includes(undefined) && hintUndefined();
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

    SortLibrary.ctrlASort = function (array, reversed) {
        array.includes(undefined) && hintUndefined();
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

    SortLibrary.insertionSort = function (array, reversed) {
        array.includes(undefined) && hintUndefined();
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

    SortLibrary.zapravkaSort = function (array, reversed) {
        array.includes(undefined) && hintUndefined();
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

    let quickSortCompareCount = 0;
    let quickSortSwapCount = 0;

    SortLibrary.studentyEvakyjytsaPidChasMinuvannyaSort = function (array, reversed) {
        array.includes(undefined) && hintUndefined();
        if (array.length <= 1) {
            return array;
        }
        const compare = getCompare(reversed);
        quickSort(array, 0, array.length - 1, compare);
        console.log(`Compare count: ${quickSortCompareCount}`);
        console.log(`Swap count: ${quickSortSwapCount}`);
        quickSortCompareCount = 0;
        quickSortSwapCount = 0;
        return array;
    };

    function partition(array, left, right, compare) {
        let pivot = array[right];
        let index = left - 1;
        for (let i = left; i < right; i++) {
            if (compare(array[i], pivot)) {
                quickSortCompareCount++;
                quickSortSwapCount++;
                index++;
                [array[i], array[index]] = [array[index], array[i]];
            }
        }
        quickSortSwapCount++;
        [array[index + 1], array[right]] = [array[right], array[index + 1]];
        return index + 1;
    }

    function quickSort(array, left, right, compare) {
        if (left < right) {
            let part = partition(array, left, right, compare);
            quickSort(array, left, part - 1, compare);
            quickSort(array, part + 1, right, compare);
        }
    }

    global.SortLibrary = SortLibrary;
})(window);
