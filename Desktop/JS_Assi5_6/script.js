class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log(`Tuut tuut! Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}, Gas: ${this.gas} liters`);
    }

    race(turns) {
        for (let turn = 1; turn <= turns; turn++) {
            this.consumeGas();
            console.log(`Turn ${turn}: ${this.brand} ${this.model} - Gas Remaining: ${this.gas} liters`);
        }
    }

    consumeGas() {
        const gasLoss = this.calculateGasLoss();
        this.gas -= gasLoss;
    }

    calculateGasLoss() {
        const baseLoss = 5;
        const yearDifference = new Date().getFullYear() - this.year;
        const yearLoss = yearDifference > 0 ? yearDifference : 0;

        return baseLoss + yearLoss;
    }
}

// Create car objects
const honda = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const ford = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const bmw = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const mazda = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const audi = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const kia = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

// Invoke honk method for each car
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

// Simulate race for 7 turns
console.log('\nRace Simulation:');
honda.race(7);
ford.race(7);
bmw.race(7);
mazda.race(7);
audi.race(7);
kia.race(7);
