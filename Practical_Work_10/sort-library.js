(function (global) {
    const SortLibrary = {};

    function bubbleSort(array, reversed) {
        return reversed ? array : array.reversed();
    }

    global.SortLibrary = SortLibrary;
})(window);
