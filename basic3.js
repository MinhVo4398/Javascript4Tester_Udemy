var marks = Array(6)

var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20,40,35,12,37,100]
 subMarks = marks.slice(2,5)
console.log(subMarks) // [ 35, 12, 37 ]

console.log("******************")

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) // [20,40,35,12,37,100]
console.log(marks.length)
marks.push(65)
console.log(marks) // [20,40,35,12,37,100, 65]

marks.pop() // delete the last element from array
console.log(marks)
marks.unshift(12) // at the element in the beginning of the array 
console.log(marks)

console.log(marks.indexOf(100)) // 6
// 120 in the array
console.log(marks.includes(120)) // false

console.log("***************")
var sum =0
for(let i = 0; i<marks.length; i ++) {
       // console.log(marks[i])
       sum =  sum + marks[i]   
}
console.log(sum)
console.log("*******Reduce********")
// Reduce 
let total = marks.reduce((sum,mark)=> sum + mark ,0)
console.log(total) // 258

console.log("*****Filter*********")
// Filter
var scores = [12,13,14,16]
// create new array with even numbers of scopes array [12, 14, 16]
var evenScores = []


for(let i = 0; i<scores.length; i ++) {
     if( scores[i] % 2 ==0) {
        evenScores.push(scores[i])
     }
 }
 console.log(evenScores) // [ 12, 14, 16 ]
 let newFilterEvenScores = scores.filter(score=> score % 2 ==0)
 console.log(newFilterEvenScores) //[ 12, 14, 16 ]

console.log("*******MAP**")
// Map
// create new array with even numbers of scopes and mutiply each value with array [12,14,16] =>[36,42,48] and sum them
let mapArray = newFilterEvenScores.map(score=> score *3)
console.log(mapArray) // [ 36, 42, 48 ]

let totalVal = mapArray.reduce((sum,val)=> sum + val,0)
console.log(totalVal) // 126

console.log("*******MAP**")

var score1 = [12,13,14,16]
let sumValues = score1.filter(score => score % 2 ==0).map(score =>score*3).reduce((sum,val)=> sum+val,0) 
console.log(sumValues) // 126

console.log("*********Sorting*****")
let fruits = ["Banana","Mango","Pomegrante","Apple"]
console.log(fruits.sort()) // [ 'Apple', 'Banana', 'Mango', 'Pomegrante' ]
console.log(fruits.reverse()) // [ 'Pomegrante', 'Mango', 'Banana', 'Apple' ]


console.log("************************")
var score1 = [12,003,19,16,14] 
//console.log(score1.sort()) //[ 12, 14, 16, 19, 3 ] -> ko đúng
/*
score1.sort(function(a,b){
        return a-b
})
*/
 
console.log(score1.sort((a,b)=> a -b)) // [ 3, 12, 14, 16, 19 ]

         





