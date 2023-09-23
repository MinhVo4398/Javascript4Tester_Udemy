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

for(let i = 0; i<marks.length; i ++) {
        console.log(marks[i])
}

