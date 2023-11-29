console.log("Good morning")
// function expression
function greetings(){
     console.log("Iska warran")
}

greetings()

function greetings2(){
     document.querySelector('.salaan').innerHTML = "Subax wanaagsan"
}
greetings2()


// function with a paramater
function greetSomeone(magac){
     console.log("Asc " + magac)
}
greetSomeone("abdi")
greetSomeone("hassan")
greetSomeone("amina")

// 
function calculateAverage(){
     let bio = 67
     let chem = 89
     let phys = 70
     let total = bio + chem + phys
     let average = total/3
     console.log("Average: " + average)
}
calculateAverage()

//
function calculateAverage2(bio, chem, phys, name){
     let total = bio + chem + phys
     let average = total/3
     console.log(name + ", your average is: " + average)
}

calculateAverage2(70, 78, 60, "mohamed")
calculateAverage2(86, 68, 78, "ahmed")

//
function calculateAverage3(bio, chem, phys, name){
     let total = bio + chem + phys
     let average = total/3
     return name + ", your average is: " + average
}

document.querySelector('.calculate-container').innerHTML = calculateAverage3(70, 78, 60, "sumaya")

// arrow function
const greetings3 = () => {
     console.log("sidee layahay")
}
greetings3()

//
const greetings4 = magac => console.log("sidee layahay " + magac)

greetings4("hassan")

//
const calculateAverage4 = (bio, chem, phys, name) => {
     let total = bio + chem + phys
     let average = total/3
     return name + ", your average is: " + average
}

console.log(calculateAverage4(86, 68, 78, "ahmed"))

// assignment
// q1
function verifyAge(age, name){
     if(age >= 18){
          return "Welcome " + name
     }
     else{
          return "Sorry, come with your parent"
     }
}

console.log(verifyAge(4, "faarax"))

//q2
function changeElementBg(el, color){
     el.style.backgroundColor = color
}

changeElementBg(document.querySelector('.calculate-container'), "green")
changeElementBg(document.querySelector('.salaan'), "magenta")

//q3
function evenOrOdd(number){
     if(number % 2 === 0){
          return "Even"
     }
     else{
          return "Odd"
     }
}

console.log(evenOrOdd(45))
console.log(evenOrOdd(50))

//q4
function reverNumber(number){
     let toString = number+""
     let splitString = toString.split('')
     let reverseString = splitString.reverse()
     let joinString = reverseString.join('')
     let toNumber = Number(joinString)
    return toNumber
}
console.log(reverNumber(6025))

//
function reverNumber2(number){
     let toString = number+""
    return Number(toString.split('').reverse().join(''))
}
console.log(reverNumber2(6025))
console.log(reverNumber2(865465765))

//
function netEarnings(basic_salary){
     let tax = (16/100) * basic_salary
     let loan = (5/100) * basic_salary
     return basic_salary - tax - loan
}
console.log(netEarnings(50000))
console.log(netEarnings(500000))
document.querySelector('.net-earnings').innerHTML = netEarnings(50000)