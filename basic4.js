// block of code
// var -- global level/ functional
// let - global level/ block level {}
// const - cannot re-initialized
const greet = "Evening"
//greet = "night"

if( 1==1) {
    let greet = "Afternoon"
}

function add(a,b)
{
    let greet = "Morning"
   return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet) 

// do not have name => Anyonymus function -- Function expressions

let sumOfIntegers = function(c,d){
    return c+d
}
console.log(sumOfIntegers(2,3)) //5

console.log("************")

let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(2,3)) // 5







