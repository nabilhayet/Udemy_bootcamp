class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    eat() {
        return `${this.name} is eating!`
    }
}


class Cat extends Pet {
    constructor(name, age, height = 5) {
        super(name, age);
        this.height = height
    }
    meow() {
        return 'Meowee'
    }
}

class Dog extends Pet {
    bark() {
        return 'woof'
    }
    eat() {
        return `${this.name} scarfs his food`
    }
}