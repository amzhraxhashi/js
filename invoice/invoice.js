// select elements
const addBtn = document.querySelector('#add-btn')
const groupsContainer = document.querySelector('.groups-container')

// append input-group
addBtn.addEventListener('click', function(e){
     e.preventDefault()

     // create input-group
     let inputGroup = document.createElement("div")
     inputGroup.className = "input-group"

     // create description
     let description = document.createElement("textarea")
     description.className = "description"
     description.rows = 10
     description.placeholder = "Description"
     description.setAttribute("required", "required")

     // create quantity
     let quantity = document.createElement("input")
     quantity.type = "text"
     quantity.className = "quantity"
     quantity.placeholder = "quantity"
     quantity.setAttribute("required", "required")

     // create price
     let price = document.createElement("input")
     price.type = "text"
     price.className = "price"
     price.placeholder = "price"
     price.setAttribute("required", "required")

     // create total
     let total = document.createElement("input")
     total.type = "text"
     total.className = "total"
     total.placeholder = "total"
     total.setAttribute("required", "required")

     // create delete icon
     let icon = document.createElement('i')
     icon.className = "fa-solid fa-xmark"

     // append description, quantity, price, total to the input-group
     inputGroup.appendChild(description)
     inputGroup.appendChild(quantity)
     inputGroup.appendChild(price)
     inputGroup.appendChild(total)
     inputGroup.appendChild(icon)

     // append the input-group to the groups-container
     groupsContainer.appendChild(inputGroup)
})

// remove input-group
groupsContainer.addEventListener('click', function(e){
     let target = e.target
    if(target.classList.contains("fa-xmark")){
          target.parentNode.remove()
    }
})

// do calculations
groupsContainer.addEventListener('keyup', function(e){
     let target = e.target
    if(target.className === "quantity" || target.className === "price"){
          let parent = target.parentNode
          let quantity = parseInt(parent.querySelector('.quantity').value) || 0 
          let price = parseInt(parent.querySelector('.price').value) || 0
          let total = quantity * price
          parent.querySelector('.total').value = total
    }
})

