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
const arr3 = arr1.slice(0, 3);

//1.2.10
arr3.forEach((elem) => {
    console.log(elem);
});

//1.2.11
const arr3Reversed = arr3.reverse();

//1.2.12
arr3Reversed.forEach((elem) => {
    console.log(elem);
});

//1.2.13
console.log(arr1.indexOf(-6));

//1.2.14
console.log(arr1.filter((elem) => elem > 4));

//1.2.15
arr1[7](arr1[5]);

//1.2.16
console.log(arr1[6](-6));

//1.2.17
for (const index in arr1) {
    console.log(arr1[index]);
}

//1.2.18
for(const key in arr1[5]){
    console.log(arr1[5][key]);
}