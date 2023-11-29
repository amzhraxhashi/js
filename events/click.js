// counter
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let count = document.querySelector('.count')

// adding
plus.addEventListener('click', function(){
     count.innerHTML =  parseInt(count.innerHTML) + 10
})

// subtruction
// minus.addEventListener('click', function(){
//      count.innerHTML =  parseInt(count.innerHTML) - 10
// })

minus.addEventListener('click', function(){
     if(parseInt(count.innerHTML) === 0){
          alert("No going beyond 0!")
     }
     else{
          count.innerHTML =  parseInt(count.innerHTML) - 10
     }
})


// changing image
let cuntoImg = document.querySelector('.cunto-img')
cuntoImg.addEventListener('click', function(){
     cuntoImg.src = "../images/food2.jpg"
})

let bulbImg = document.querySelector('.bulb-img')
let bulbCounter = 0
bulbImg.addEventListener('click', function(){
     if(bulbCounter === 0){
          bulbImg.src = "../images/bulboff.png"
          bulbCounter = 1
     }
     else{
          bulbImg.src = "../images/bulbon.png"
          bulbCounter = 0
     }
})

// buttons changing background
let btnsContainer = document.querySelector('.btns-container')
let btnsContainerBtns = document.querySelectorAll('.btns-container button')
btnsContainerBtns.forEach(button => {
     button.addEventListener('click', function(){
          btnsContainerBtns.forEach(button2 => {
               button2.style.color = 'black'
               button2.style.transform = 'scale(1) translateY(0)'
          })
          let btnColor = this.innerHTML
          btnsContainer.style.backgroundColor = btnColor
          this.setAttribute("style", `color: ${btnColor}; transform: scale(1.1) translateY(-5px)`)
     })
})

// menu
let ellipsisVertical = document.querySelector('.fa-ellipsis-vertical')
let menu = document.querySelector('.menu')
ellipsisVertical.addEventListener('click', function(){
     menu.classList.toggle('showMenu')
})

document.addEventListener('click', function(e){
     if(e.target.classList.contains('fa-ellipsis-vertical')){
          return null
     }
     else{
          menu.classList.remove('showMenu')
     }
})
