let day = 'tuesday '
console.log(day.length) // 8

let subDay = day.slice(0,4)
console.log(subDay) // tues
console.log(day[1]) //u

// tue day
let splitDay = day.split("s")
console.log(splitDay[1].length) //4
console.log(splitDay[1].trim()) //day 
console.log(splitDay[1].trim().length) // 3 

console.log("****************")
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff) //4
diff.toString() // convert to string

let newQuote = day + "is Funday day"
console.log(newQuote)
console.log("--------------------")
let val = newQuote.indexOf("day",5)
console.log(val) //15

// tuesday is Friday
let count = 0
let val1 = newQuote.indexOf("day")
while(val1!== -1) {
    count++ //2
    val1 = newQuote.indexOf("day",val1+1)
}
console.log(count) //3













