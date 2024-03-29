//Варіант 2
function TriangleArea(a = 7, h_a = 3) {
    console.log(a * h_a);
}

TriangleArea(3, 6);
TriangleArea();

function Boat(color, avgSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this["max tonnage"] = maxTonnage;
    this.brand = brand;
    this["country of registration"] = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasFamily) {
    this.name = name;
    this["years of experience"] = yearsOfExperience;
    this.hasFamily = hasFamily;
}
let boat = new Boat("orange", 320, 20, "Mercedes-Benz", "Poland");
console.log(boat);
boat.AssignCaptain("Ivan Rokytskyi", 4, true);
console.log(boat);

class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    set setMajorRadius(majorRadius) {
        this.majorRadius = majorRadius;
    }
}

class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static square(majorRadius, minorRadius) {
        return Math.PI * majorRadius * minorRadius;
    }

    square() {
        return Math.PI * this.majorRadius * this.minorRadius;
    }
}

let simpleCircle = new SimpleCircle(5);
console.log(simpleCircle);
let simpleEllipse = new SimpleEllipse(5, 10);
console.log(simpleEllipse);
console.log(simpleEllipse.square());

function SubGenerator(a) {
    return function (b) {
        return a - b;
    }
}

let subFiveGenerator = SubGenerator(5);
console.log(subFiveGenerator(3));

let subThreeGenerator = SubGenerator(3);
console.log(subThreeGenerator(1));
