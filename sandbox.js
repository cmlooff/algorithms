class Name {
    constructor (name) {
        this.name = name;
    }

    introduce () {
        console.log('Hello, my name is ${this.name}')
    }
}

const person = new Name ('Chris');

console.log(person)