//1.2.3
const arr1 = [
    1,
    5,
    9,
    4,
    { name: "Ivan", mark: -1, subject: "JS" },
    function (number) {
        return number ** 4;
    },
    function (object) {
        console.log(object.name);
    },
    -6,
    14,
];

//1.2.4
arr1.forEach((value) => {
    console.log(value);
});

//1.2.5
arr1.splice(1, 1, 8);

//1.2.6
arr1.splice(3, 0, "Hello");

//1.2.7
const arr2 = arr1.slice(6, 8);

//1.2.8
arr2.forEach((elem) => {
    console.log(elem);
});

//1.2.9
const arr3 = arr1.slice(0,3);
