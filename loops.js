// initialization
// condition
// increment/decrement

// While loop
// let num = 1
// while(num <= 10){
//      console.log(num)
//      num++
// }

// let num2 = 15
// while(num2 >= 10){
//      console.log(num2)
//      num2--
// }

let y = 20
while(y <= 10){
     console.log(y)
     y++
}
// Do while loop
// let x = 0
// do{
//      console.log(x)
//      x++
// }
// while(x <= 10)

let t = 20
do{
     console.log(t)
     t++
}
while(t <= 10)

// For loop
for(let i = 0; i < 10; i++){
     console.log(i)
}

const students = ['ahmed', 'amina', 'feysal', 'hassan', 'farah', 'ali']
let studentsContainer = document.querySelector('.students-container')
for(let i = 0; i < students.length; i++ ){
     // console.log("Ciid wanaagsan " + students[i])
     // studentsContainer.innerHTML += "<p></p>Ciid wanaagsan " + students[i] +"</p>"
     studentsContainer.innerHTML += `<p>Ciid wanaagsan ${students[i]} </p>`
}

const coursesArr = ['html', 'css', 'javascript', 'python', 'php', 'ruby', 'java']
let courses = document.querySelector('.courses')
for(let i = 0; i < coursesArr.length; i++ ){
     courses.innerHTML += `<div> <input type="checkbox"> ${coursesArr[i]} </div>`
}

// Nested loop
const commSkills = [123, 234, 345, 456, 567, 678, 789, 890]
const entrep = [445, 776, 345, 456, 666, 678, 789, 890]
const common = []
for(let i = 0; i < commSkills.length; i++){
     for(let j = 0; j < entrep.length; j++){
          if(commSkills[i] === entrep[j]){
               common.push(entrep[j])
          }
     }
}
console.log(common)
let commonContainer = document.querySelector('.common-container')
for(let i = 0; i < common.length; i++ ){
     commonContainer.innerHTML += `<p> ${common[i]} </p>`
}

// assignment - mutual friends

// For...of
for(let student of students){
    console.log(student) 
}
