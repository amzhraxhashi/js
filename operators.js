// arithmatic
let salary  = 50000
let nhif = 300
let nssf = 400
let taxRate = 12
let allowance = 4000

let tax = (taxRate/100) * salary
let netSalary = salary - nhif - nssf - tax + allowance
console.log(netSalary)

// comparison and logical operators
// && -  and
// e.g 1
let mishaar = 4500
let deen = 0
if(mishaar >= 50000 && deen === 0){
     console.log("You are qualified to borrow money!")
}
else{
     console.log("Sorry, you are not qualified!")
}

// e.g 2
let isOrphan = false
let grade = "A"
if(isOrphan && grade === "A"){
     console.log("free education!")
}
else{
     console.log("You are not qualified for free education!")
}

// || - or
// e.g 1
if(mishaar >= 50000 || deen === 0){
     console.log("You are qualified to borrow money!")
}
else{
     console.log("Sorry, you are not qualified!")
}

// e.g 2
if(isOrphan || grade === "A"){
     console.log("free education!")
}
else{
     console.log("You are not qualified for free education!")
}