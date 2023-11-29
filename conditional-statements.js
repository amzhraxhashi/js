// If…else
// ex 1
let marks = 42
if(marks >= 50){
     console.log("Ma sha Allaah. Waad gudubtay!")
}
else{
     console.log("Ninyahow waad dhacaday. Soo dedaal!")
}

// ex 2
let gender = "male"
if(gender === "male"){
     console.log("Meesha rag lagama rabo cabdow!")
}
else{
     console.log("Soo dhawoow!")
}

let num1 = 60
let num2 = "60"

// ==
if(num1 == num2){
     console.log("they are equal")
}
else{
     console.log("They are not equal")
}

// ===
if(num1 === num2){
     console.log("they are equal")
}
else{
     console.log("They are not equal")
}


// Ternary operator
// ex 1
marks >= 50 ? console.log("Ma sha Allaah. Waad gudubtay!") : console.log("Ninyahow waad dhacaday. Soo dedaal!") 
console.log(marks >= 50 ? "Ma sha Allaah. Waad gudubtay!" : "Ninyahow waad dhacaday. Soo dedaal!")
const message = marks >= 50 ? "Ma sha Allaah. Waad gudubtay!" : "Ninyahow waad dhacaday. Soo dedaal!"
console.log(message)

// ex 2
const genderMessage = gender === "male" ? "No entry!" : "Welcome!"
console.log(genderMessage)

// If…else if…else
// gender example
let jinsi = "lab"
if(jinsi === ""){
     console.log("Meesha wax ku qor!")
}
else if(jinsi === "lab"){
     console.log("Meesha wax rag ah lagama rabo ee gooy!")
}
else if(jinsi === "dheddig"){
     console.log("Soo dhawoow!")
}
else{
     console.log("Meesha ciyaarta ka daa!")
}

// let jinsiForm = document.querySelector('.jinsi-form')
// let jinsiInput = document.querySelector('.jinsi-input')
// let warcelin = document.querySelector('.warcelin')
// jinsiForm.addEventListener('submit', function(e){
//      e.preventDefault()
//      let jinsiInputVal = jinsiInput.value
//      if(jinsiInputVal === ""){
//           warcelin.innerHTML = "Meesha wax ku qor!"
//      }
//      else if(jinsiInputVal === "lab"){
//           warcelin.innerHTML = "Meesha wax rag ah lagama rabo ee gooy!"
//      }
//      else if(jinsiInputVal === "dheddig"){
//           warcelin.innerHTML = "Soo dhawoow!"
//      }
//      else{
//           warcelin.innerHTML = "Meesha ciyaarta ka daa!"
//      }
// })

// grading
let celcelis = 57
let grade = ''
if(celcelis >= 70 && celcelis <= 100){
     grade = "A"
}
else if(celcelis >= 60 && celcelis < 70){
     grade = "B"
}
else if(celcelis >= 50 && celcelis < 60){
     grade = "C"
}
else if(celcelis >= 40 && celcelis < 50){
     grade = "D"
}
else if(celcelis >= 0 && celcelis < 40){
     grade = "F"
}
else{
     grade = "Invalid grade!"
}

console.log(grade)

// age

// countries


// Switch…case
// gender example
let jinsi2 = "dheddig"
switch(true){
     case jinsi2 === "": 
     console.log("Meesha wax ku qor!")
     break;
     case jinsi2 === "lab": 
     console.log("Meesha wax rag ah lagama rabo ee gooy!")
     break;
     case jinsi2 === "dheddig": 
     console.log("Soo dhawoow!")
     break;
     default:
          console.log("Meesha ciyaarta ka daa!")
}

switch(jinsi2){
     case "": 
     console.log("Meesha wax ku qor!")
     break;
     case "lab": 
     console.log("Meesha wax rag ah lagama rabo ee gooy!")
     break;
     case "dheddig": 
     console.log("Soo dhawoow!")
     break;
     default:
          console.log("Meesha ciyaarta ka daa!")
}

// grading
let celcelis2 = 89
let grade2 = ''
switch(true){
     case celcelis2 >= 70 && celcelis2 <= 100:
          grade2 = "A"
          break
     case celcelis2 >= 60 && celcelis2 < 70:
          grade2 = "B"
          break
     case celcelis2 >= 50 && celcelis2 < 60:
          grade2 = "C"
          break
     case celcelis2 >= 40 && celcelis2 < 50:
          grade2 = "D"
          break
     case celcelis2 >= 0 && celcelis2 < 40:
          grade2 = "F"
          break
     default:
          grade2 = "Invalid grade!"
}

console.log(grade2)

// age
// 0-3 -> infant
// 3-7 -> baby
// 7-12 -> young
// 13-19 -> teenager
// 20-40 -> youth
// 40-60 -> old
// 60-80 -> very old
// 80-120 -> waxa kuu haraya ayaa isk yar!

// countries
// kenya -> nairobi
// uganda -> kampala
// tanzania -> dodoma
// rwanda -> kigali
// south sudan -> juba
// congo -> kinshasa
// burundi -> bujumbura