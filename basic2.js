const flag = true

if(!flag)
{   
    console.log("Condition satisfied")

}
else {
    console.log(flag)
    console.log("condition NOT satisfied")
}

let i =0
while(i>10)
{
    i++;
    console.log(i)
}

do{
    i++;
    
}while(i>10)
console.log(i)

// For loop
// From 1 to 10 give me common mutiple valúe of 2 and 5
console.log("*************")
let n =0
for (let k=1; k<=100; k++) {
    if(k % 2 == 0 && k %5 ==0)
    {
        n++
        console.log(k)
        if( n ==3) {
            break
        }
    }
   
}
console.log("*************")

let required = true
while(required)
{

    console.log(required)
    required = false
}
