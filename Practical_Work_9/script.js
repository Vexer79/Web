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
arr1.forEach(value => {console.log(value);});
