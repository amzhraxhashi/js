// image-sliding
const images = [
     {id: 1, image: '../images/food1.jpg'},
     {id: 2, image: '../images/food2.jpg'},
     {id: 3, image: '../images/food3.jpg'},
     {id: 4, image: '../images/food4.jpg'},
     {id: 5, image: '../images/food5.jpg'},
     {id: 6, image: '../images/food6.jpg'},
]

const slider = document.querySelector('.slider')
const leftBtn = document.querySelector('.slider-container .fa-chevron-left')
const rightBtn = document.querySelector('.slider-container .fa-chevron-right')

let counter = 0
slider.src = images[counter].image

// next 
rightBtn.addEventListener('click', function(){
     if(counter < images.length - 1){
          counter++
     }
     else{
          counter = 0
     }
     slider.src = images[counter].image
})

// previous
leftBtn.addEventListener('click', function(){
     if(counter > 0){
          counter--
     }
     else{
          counter = images.length - 1
     }
     slider.src = images[counter].image
})

// sliding with timer
function slideImages(){
     if(counter < images.length - 1){
          counter++
          slider.src = images[counter].image
     }
     else{
          counter = 0
          slider.src = images[counter].image
     }
     setTimeout(slideImages, 2000)
}
slideImages()


// sliding with text
const images2 = [
     {id: 1, image: '../images/food1.jpg', text: 'Soo Dhawaada'},
     {id: 2, image: '../images/food2.jpg', text: 'Welcome everyone'},
     {id: 3, image: '../images/food3.jpg', text: 'Delicious Food'},
     {id: 4, image: '../images/food4.jpg', text: 'Somali Cuisine'},
     {id: 5, image: '../images/food5.jpg', text: 'Finger-licking'},
     {id: 6, image: '../images/food6.jpg', text: 'Nutritious'},
]

const slider2 = document.querySelector('.slider2')
const leftBtn2 = document.querySelector('.slider2-container .fa-chevron-left')
const rightBtn2 = document.querySelector('.slider2-container .fa-chevron-right')
const slider2Text = document.querySelector('.slider2-text')

let counter2 = 0
slider2.src = images2[counter2].image
slider2Text.innerHTML = images2[counter2].text

// next 
rightBtn2.addEventListener('click', function(){
     if(counter2 < images2.length - 1){
          counter2++
     }
     else{
          counter2 = 0
     }
     slider2.src = images2[counter2].image
     slider2Text.innerHTML = images2[counter2].text
})

// previous
leftBtn2.addEventListener('click', function(){
     if(counter2 > 0){
          counter2--
     }
     else{
          counter2 = images2.length - 1
     }
     slider2.src = images2[counter2].image
     slider2Text.innerHTML = images2[counter2].text
})