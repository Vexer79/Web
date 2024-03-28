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
        return (reversed) ? array.reverse() : array;
    }

    console.log(bubbleSort([1, 3, 6, 3, 1, 3, 5], true));

    global.SortLibrary = SortLibrary;
})(window);
