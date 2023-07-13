class Animal {
    static #all = [];
    constructor(name, color, habitat) {
        this.name = name;
        this.color = color;
        this.habitat = habitat;
        Animal.#all.push(this);
    }

    static list() {
        return [...Animal.#all]
    }

    static create(className, name, color, habitat) {
        return new className(name, color, habitat)
    }

    sleep() {
        console.log('yawnnnn')
    }

    movement() {
        console.log('walk')
    }

    sound() {
        console.log('aaaaaa')
    }

}

class Bird extends Animal {
    constructor(name, color, habitat) {
        super(name, color, habitat)
    }

    movement() {
        console.log('fly')
    }

    sound() {
        console.log('tweet tweet')
    }
}

class Dog extends Animal {
    constructor(name, color, habitat = 'land') {
        super(name, color, habitat)
    }

    sound() {
        console.log('bark bark')
    }
}

// const jerry = new Dog('Jerry', 'brown', 'land')
// console.log(jerry)

// let milly = Animal.create(Dog, 'milly', 'gold', 'land')
// let potato = Animal.create(Bird, 'potato', 'green', 'sky')

// console.log(Animal.list())
// potato.sound()











const getId = ((id = 1) => () => id++)();

class TaxiCompany {
    static #all = []
    constructor(name, carClass) {
        this.name = name;
        this.id = getId();
        this.carClass = carClass
        TaxiCompany.#all.push(this)
    }

    static list() {
        return [...TaxiCompany.#all]
    }

    static create(name, carClass) {
        return new TaxiCompany(name, carClass)
    }

    findCars() {
        return this.carClass.list().filter(car => {
            return car.companyId === this.id;
        })
    }

}

class TaxiCar {
    static #all = []
    constructor(name, companyId = 'none', companyClass) {
        this.name = name
        this.id = getId();
        this.companyId = companyId;
        this.companyClass = companyClass;
        this.rides = 0
        this.gas = 100
        this.functional = true
        TaxiCar.#all.push(this)
    }

    static list() {
        return [...TaxiCar.#all]
    }

    static create(name, companyId, companyClass) {
        return new TaxiCar(name, companyId, companyClass)
    }

    findCars() {
        return this.carClass.list().filter(car => {
            return car.companyId === this.id;
        })
    }
    getCompany() {
        return this.companyClass.list().find(company => {
            return company.id === this.companyId;
        })
    }

    swapCompany(newId) {
        this.companyId = newId
    }

    noGas() {
        console.log('Your car needs gas')
    }

    fillUp() {
        this.gas = 100;
    }

    breakDown() {
        console.log('Your car needs parts replaced');
        this.functional = false;
    }

    carFix() {
        console.log('Your car is now fixed get to driving!')
        this.functional = true
    }

    drive() {
        if (this.gas === 0) {
            return this.noGas();
        }
        this.rides++;
        this.gas -= 25
    }

}

let bells = new TaxiCompany('Bells', TaxiCar)
let car1 = new TaxiCar('car1', 1, TaxiCompany)
car1.drive()
car1.drive()
car1.drive()
car1.drive()
console.log(TaxiCar.list())
