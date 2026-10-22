// ostapiva IST-41
// 1.2.3–1.2.10 - ES6 NE MOJNA

let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 220;
car1.driver = new Object();
car1.driver.name = "Ostapiv Oleksandr";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

let name = car1.driver.name;

let car2 = {
    color: "red",
    maxSpeed: 250,
    driver: {
        name: "Ostapiv Oleksandr",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function() {
    console.log("I can drive anytime");
};

console.log("car1:", car1);
car1.drive();

console.log("car2:", car2);
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = "Driver " + this.driver.name;

            if (this.driver.nightDriving) {
                message += " drives at night";
            } else {
                message += " does not drive at night";
            }

            message += " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

let truck1 = new Truck("blue", 8000, 90.5, "Volvo", "FH");
let truck2 = new Truck("white", 6500, 85.2, "MAN", "TGX");

truck1.trip();
truck1.AssignDriver(name, true, 3);
truck2.AssignDriver(name, false, 2);

truck1.trip();
truck2.trip();


// 1.2.12–1.2.24 - MOJNA VIKORISTOVUVATU ES6

class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square: a quadrilateral with four equal sides and four right angles.");
        console.log("- Квадрат: чотирикутник із чотирма рівними сторонами та прямими кутами.");
    }

    length() {
        console.log("Perimeter:", 4 * this.a);
    }

    square() {
        console.log("Area:", this.a * this.a);
    }

    info() {
        console.log("Square sides:", this.a, this.a, this.a, this.a);
        console.log("Square angles: 90, 90, 90, 90 degrees");
        console.log("Perimeter:", 4 * this.a);
        console.log("Area:", this.a * this.a);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Rectangle: a quadrilateral with four right angles.");
        console.log("- Прямокутник: чотирикутник, у якого всі кути прямі.");
    }

    length() {
        console.log("Perimeter:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Area:", this.a * this.b);
    }

    info() {
        console.log("Rectangle sides:", this.a, this.b, this.a, this.b);
        console.log("Rectangle angles: 90, 90, 90, 90 degrees");
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b);
    }
}

class Rhombus extends Square {
    constructor(a, alpha) {
        super(a);
        this.alpha = alpha;
        this.beta = 180 - alpha;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
        this._beta = 180 - value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
        this._alpha = 180 - value;
    }

    static help() {
        console.log("Rhombus: a quadrilateral with four equal sides.");
        console.log("Ромб: чотирикутник із чотирма рівними сторонами.");
    }

    length() {
        console.log("Perimeter:", 4 * this.a);
    }

    square() {
        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Rhombus sides:", this.a, this.a, this.a, this.a);
        console.log("Rhombus angles:", this.alpha, this.beta, this.alpha, this.beta, "degrees");
        console.log("Perimeter:", 4 * this.a);
        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha) {
        super(a, b);
        this.alpha = alpha;
        this.beta = 180 - alpha;
    }

    static help() {
        console.log("Parallelogram: a quadrilateral with opposite sides parallel.");
        console.log("- Паралелограм: чотирикутник, у якого протилежні сторони паралельні.");
    }

    length() {
        console.log("Perimeter:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Area:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Parallelogram sides:", this.a, this.b, this.a, this.b);
        console.log("Parallelogram angles:", this.alpha, this.beta, this.alpha, this.beta, "degrees");
        console.log("Perimeter:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square1 = new Square(5);
let rectangle1 = new Rectangle(8, 4);
let rhombus1 = new Rhombus(6, 120);
let parallelogram1 = new Parallelogram(10, 5, 120);

square1.info();
rectangle1.info();
rhombus1.info();
parallelogram1.info();


// 1.2.25–1.2.26

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

let triangle1 = Triangular();
let triangle2 = Triangular(6, 8, 10);
let triangle3 = Triangular(5, 5, 6);

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);


// 1.2.27–1.2.28

function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

let piTimesTwo = PiMultiplier(2);
let piTimesOneAndHalf = PiMultiplier(1.5);
let piDividedByTwo = PiMultiplier(0.5);

console.log(piTimesTwo());
console.log(piTimesOneAndHalf());
console.log(piDividedByTwo());


// 1.2.29–1.2.31

function Painter(color) {
    return function(object) {
        if (object.type === undefined) {
            console.log(color + " No 'type' property occurred!");
        } else {
            console.log(color + " " + object.type);
        }
    };
}

let PaintBlue = Painter("Blue");
let PaintRed = Painter("Red");
let PaintYellow = Painter("Yellow");

let object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let object2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

let object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);

PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);

PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);
