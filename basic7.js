module.exports = class Person

{

    age = 25
    get location() {
        return "canada"
    }
    // constructor is method which execute by default when you create object of the class
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //mtehods
    fullName() {
        console.log(this.firstName + this.lastName)
    }

}
// comment vì export Class này để bên basic5.js xài

// let person = new Person("Tim","Joseph")
// let person1 = new Person("Chris","Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())


