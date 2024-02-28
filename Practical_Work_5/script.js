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

car1.drive = function() {
    console.log("I am not driving at night");
}
car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
}
car2.drive();

function Truck(color, weight, avgSpeed, brand, model){
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

console.log(new Truck("white", 2500, 60, "Kamaz", "deadMoskal"));
