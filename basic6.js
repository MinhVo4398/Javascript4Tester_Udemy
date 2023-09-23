// Javascript Object
// object is collection of properties

let person = {

     firstName: 'Tim',
     lastName : 'Joe',
     age: 24,
     fullName: function() {
       console.log (this.firstName + this.lastName)
     }
     
}
console.log(person.fullName()) //TimJoe
console.log(person.lastName) // Joe
console.log(person['lastName']) // Joe
person.firstName = 'Tim Dane'
console.log(person.firstName)
person.gender ='male'
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }
delete person.gender
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe' }

console.log('gender' in person)// false because it not exist in object person

// print all the values of the javascript object
for(let key in person) {
    console.log(person[key]) // Tim Dane ,  Joe, 24
   
}
