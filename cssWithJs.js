// style 
document.querySelector('.demo').style = "border: 2px solid orange"

// setAttribute
document.querySelector('.demo2').setAttribute('style', 'background-color: dodgerblue; padding: 20px; color: white;')

// Add class
let container = document.querySelector('.container')
let addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function(){
     container.classList.add("style-container")
})

// Remove class
let removeBtn = document.querySelector('#removeBtn')
removeBtn.addEventListener('click', function(){
     container.classList.remove("style-container")
})

// Toggle class
let toggleBtn = document.querySelector('#toggleBtn')
toggleBtn.addEventListener('click', function(){
     container.classList.toggle("style-container")
})

