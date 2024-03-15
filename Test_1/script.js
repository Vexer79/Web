//Варіант 2
function TriangleArea(a = 7, h_a = 3) {
    console.log(a * h_a);
}

TriangleArea(3, 6);
TriangleArea();

function Jet() {
    this.color = "orange";
    this.avgSpeed = 320;
    this["max tonnage"] = 20;
    this.brand = "AirBus";
    this["country of registration"] = "Poland";
}

Jet.prototype.AssignCaptain = function () {
    this.name = "Ivan Rokytskyi";
    this["years of experience"] = 4;
    this.hasFamily = true;
}
let jet = new Jet();
console.log(jet);
jet.AssignCaptain();
console.log(jet);