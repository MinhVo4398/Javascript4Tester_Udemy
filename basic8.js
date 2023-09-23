// Inheritance is the main Pillar in Object oriented programming
// One class can inheri/ aquire the properties, Methods of another class
// The class which inherits the properties of other is known as subclass (derive class, child class)
// The class whose properties are inherited is known as superclass

const Person = require("./basic7");

class Pet extends Person
{
    get location() {
        return "BlueCross"
    }
    constructor(firstName, lastName){
        // call parent class constructor 
        super(firstName,lastName)
    }
}

let pet = new Pet ("sam","san")
pet.fullName() //samsan



