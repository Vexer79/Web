let car1 = new Object();
car1.color = "orange";
car1.maxSpeed = 120;
car1.driver = new Object();
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver.name = "Rokytskyi Ivan";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";

let car2 = new Object();
car2.color = "red";
car2.maxSpeed = 90;
car2.driver = new Object();
car2.tuning = false;
car2["number of accidents"] = 2;

car2.driver.name = "Rokytskyi Ivan";
car2.driver.category = "B";
car2.driver["personal limitations"] = null;

car1.drive = function () {
    console.log("I am not driving at night");
}
car1.drive();

car2.drive = function () {
    console.log("I can drive anytime");
}
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        } else {
            console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience.`);
        }
    };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = new Object();
    this.driver.name = name;
    this.driver.nightDriving = nightDriving;
    this.driver.experience = experience;
}

let firstTruck = new Truck("white", 2500, 120, "Land Rover", "ForceTysa");
let secondTruck = new Truck("black", 3000, 60, "KAMAZ", "Chmonya");

firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Afele", true, 3); // тут мало бути моє ім'я, але щось пішло не так... ¯\_(ツ)_/¯
secondTruck.AssignDriver("Putin", false, 1);

console.log(firstTruck);
console.log(secondTruck);

firstTruck.trip();
secondTruck.trip();