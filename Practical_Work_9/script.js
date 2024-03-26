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
for (const key in arr1[5]) {
    console.log(arr1[5][key]);
}

//1.2.19
for (const elem of arr1) {
    console.log(elem);
}

//1.2.20
arr1.version = "1.0.0";

//1.2.21
for (const index in arr1) {
    console.log(arr1[index]);
}

//1.2.22
for (const elem of arr1) {
    console.log(elem);
}

//1.2.23
const Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior",
};

const Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle",
};

const Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee",
};

//1.2.24
const map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

//1.2.25
// console.log(map1.get("Ivanko"));

//1.2.26
console.log(map1.get("Volodyk"));

//1.2.27
for (const key of map1.keys()) {
    console.log(key);
}