function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

console.log(Triangular());
console.log(Triangular(6, 7, 8));
console.log(Triangular(9, 10, 11));

function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}

let PiMultipliedBy2 = PiMultiplier(2);
let PiMultipliedBy2To3 = PiMultiplier(2/3);
let PiDividedBy2 = PiMultiplier(1/2);

console.log(PiMultipliedBy2());
console.log(PiMultipliedBy2To3());
console.log(PiDividedBy2());
