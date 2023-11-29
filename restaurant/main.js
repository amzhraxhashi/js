const menu = [
     {id: 1, img: '../images/food1.jpg', name: 'Canjeera soomaalia', price: 200, category: 'breakfast'},
     {id: 2, img: '../images/food2.jpg', name: 'Chapati', price: 250, category: 'breakfast'},
     {id: 3, img: '../images/food3.jpg', name: 'Rice with mbuzi stew', price: 250, category: 'lunch'},
     {id: 4, img: '../images/food4.jpg', name: 'Rice njahi', price: 250, category: 'lunch'},
     {id: 5, img: '../images/food5.jpg', name: 'Nduma', price: 250, category: 'breakfast'},
     {id: 6, img: '../images/food6.jpg', name: 'Ngawashe', price: 250, category: 'supper'},
     {id: 7, img: '../images/food7.jpg', name: 'Rice beans', price: 250, category: 'supper'},
     {id: 8, img: '../images/food8.jpg', name: 'Uji', price: 250, category: 'breakfast'},
     {id: 9, img: '../images/food9.jpg', name: 'Ugali mbuzi fry', price: 250, category: 'lunch'},
     {id: 10, img: '../images/food2.jpg', name: 'Chapati', price: 250, category: 'supper'},
     {id: 11, img: '../images/food7.jpg', name: 'Fruit salad', price: 250, category: 'deserts'},
     {id: 12, img: '../images/food3.jpg', name: 'Shawarma', price: 250, category: 'deserts'},
]

window.addEventListener('DOMContentLoaded', function(){
     showMenuItems(menu)
     displayBtns()
})

let menus = document.querySelector('.menus')
function showMenuItems(items){
     const menuList = items.map(item => {
       return `<div class="menu-item">
             <div class="item-img"><img src="${item.img}"></div>
             <div class="item-content">
               <p class="item-name">${item.name}</p>
               <p class="item-price">Ksh ${item.price}</p>
               <p class="item-category">${item.category}</p>
             </div>
         </div>
         `
     })
     menus.innerHTML = menuList.join("")
}

// filter buttons
function displayBtns(){
     // get only unique categories from menu array
     categories = menu.reduce(function(arr, item){
       if(!arr.includes(item.category)){
         arr.push(item.category)
       }
       return arr
     }, ["all"])
      // end
  
     // Loop through the categories, create a button for each category and display them in btns-container
     categoryBtns = categories.map(category =>{
          return `<button id="${category}">${category}</button>`
     }).join("")
 
     let btnsContainer = document.querySelector('.btns-container')
     btnsContainer.innerHTML = categoryBtns
     // end

     
     // Attach an eventlistener to the btns in btns-container 
     let btns = document.querySelectorAll('.btns-container button')
     btns.forEach(btn => {
          btn.addEventListener('click', function(event){
               category = event.target.id
               categoryItems = menu.filter(item => {
                    if(item.category === category){
                         return item
                    }
               })

               if(category === 'all'){
                    showMenuItems(menu)
               }
                  else{
                    showMenuItems(categoryItems)
               }
          })

     })
}
 