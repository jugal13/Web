// Classes emulation using prototypes

let myobj = { a:2 };
let newObj = Object.create(myobj);

console.log(newObj);
console.log(newObj.a);

Object.getPrototypeOf(newObj)
{ a: 2 }

function Foo() {

}
console.log(Foo.prototype);

let a = new Foo();

Object.getPrototypeOf(a) === Foo.prototype
true


// classes using prototypes in JS
function Dog(name ,sound) {
    this.name = name;
    this.sound = sound;
}
//function Dog is treated as a constructor

Dog.prototype.makeSound = function() {
    console.log(`${this.name} says ${this.sound}`);
}

let fido = new Dog("Fido", "Bow!");
let tiger = new Dog("Tiger", "Bow!");

fido.makeSound();
tiger.makeSound();

// inheritance in JS using prototypes

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(`${ this.name } says ${this.sound}`)
}

function Dog(name,sound) {
    Animal.call(this,name,sound);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.run = function() {
    this.makeSound();
}

let fido = new Dog("Fido", "Bow!");
fido.run();

// classes is a keyword in JS works internally as the example above
// ES6 Syntax for classes in JS

class Animal {
    name;
    sound;

    constructor(name,sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${ this.name } says ${ this.sound }`);
    }
}

class Dog extends Animal { //extend to inherit super class like in java

    constructor(name,sound) {
        super(name,sound); //call super class constructor
    }
}

let fido = new Dog("Fido","Bow!");
fido.makeSound();