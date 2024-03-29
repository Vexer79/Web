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

    SortLibrary.bubbleSort = function (array, reversed) {
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

    SortLibrary.selectionSort = function (array, reversed) {
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

    SortLibrary.shellSort = function (array, reversed) {
        const compare = getCompare(reversed);
        let compareCount = 0;
        let swapCount = 0;
        console.log(array);
        for (let index = Math.floor(array.length / 2); index > 0; index = Math.floor(index / 2)) {
            for (let count = 0; count < Math.floor(array.length / index); count++) {
                for (let element = 0; element < index; element++) {
                    compareCount++;
                    if (
                        compare(
                            array[index * count + element],
                            array[index * (count + 1) + element]
                        )
                    ) {
                        swapCount++;
                        let tempElem = array[index * count + element];
                        array[index * count + element] = array[index * (count + 1) + element];
                        array[index * (count + 1) + element] = tempElem;
                    }
                }
            }
            console.log(array);
        }
        console.log(`Compare count: ${compareCount}`);
        console.log(`Swap count: ${swapCount}`);
        return array;
    };

    global.SortLibrary = SortLibrary;
})(window);
