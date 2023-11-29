const coursesArr = ['html', 'css', 'javascript', 'python', 'php', 'ruby', 'java']
// array.iteratorName(element => {
     
// });
let courses = document.querySelector('.courses')
coursesArr.forEach(course => {
     courses.innerHTML += `
     <div class='course'> 
          <input type="checkbox"> 
          <p>${course} </p>
     </div>`
})

//
let boxes = document.querySelectorAll('.box')
// boxes.forEach(box => {
//      box.classList.toggle('styleBox')
// })

boxes.forEach(box => {
     box.addEventListener('click', function(){
          box.classList.toggle('styleBox')
     })
})

// map
const countries = ['syria', 'oman', 'oman', 'malaysia', 'afghanistan', 'algeria', 'libya', 'iraq', 'yemen', 'algeria']

const initials = countries.map(country => {
     // return country[0]
     return country.charAt(0)
})

document.querySelector('.soomaaliya').innerHTML = initials.join('')

//
const marks = [45, 76, 45, 56, 66, 78, 59, 30]
const newMarks = marks.map(mark => {
     return mark + 10
})

console.log(newMarks)

//Filter
const above50 = marks.filter(mark => {
     return mark > 50
})
console.log(above50)

//
const above6Char = countries.filter(country => {
     return country.length > 6
})
console.log(above6Char)

//
const doesNotEndWithA = countries.filter(country => {
     let firstChar = country.charAt(0)
     let lastChar = country.charAt(country.length - 1)
     if(firstChar === "a" && lastChar === "a"){
          return country
     }
})
console.log(doesNotEndWithA)

// reduce
const aliMarks = [80, 78, 90, 46, 70, 54, 93]
// sum
const total = aliMarks.reduce((sum, mark) => {
     return sum + mark
}, 0)

console.log(total)

// 
const prices = [600, 650, 300, 290, 100, 10, 340, 20]
const totalPrice = prices.reduce((sum, price) => {
     return sum + price
}, 0)
console.log(totalPrice)

// max
const maxMark = aliMarks.reduce((a, b) => {
     if(a > b){
          return a
     }
     else{
          return b
     }
})
console.log(maxMark)

const maxMark2 = aliMarks.reduce((a, b) => {
     if(a > b) return a
     else return b
})
console.log(maxMark2)

const maxMark3 = aliMarks.reduce((a, b) =>  a > b ? a : b)
console.log(maxMark3)

const maxMark4 = aliMarks.reduce((a, b) => Math.max(a, b))
console.log(maxMark4)

// min
const minMark = aliMarks.reduce((a, b) => Math.min(a, b))
console.log(minMark)