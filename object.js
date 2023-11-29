const myname = "ahmed"

const students = ['ahmed', 'hassan', 'ali']

const ahmedData = {
     firstName: 'ahmed',
     middleName: 'aden',
     lastName: 'ibrahim',
     dob: 1998,
     phone: 72435667,
     salary: 30000,
     taxRate: 5,
     allowance: 5000,
     fullName: function(){
          // return `${this.firstName} ${this.middleName} ${this.lastName}`
          return this.firstName + " " + this.middleName + " " + this.lastName
     },
     tax: function(){
          return (5/100) * this.salary
     },
     netSalary: function(){
          return this.salary + this.allowance - this.tax()
     }
}

//  Accessing properties and methods
console.log(ahmedData['firstName'])
console.log(ahmedData.firstName)

console.log(ahmedData.fullName())
console.log(ahmedData.tax())
console.log(ahmedData.netSalary())


//  Changing value of a property
console.log(ahmedData.dob)
ahmedData.dob = 1996
console.log(ahmedData.dob)

//  Adding new property
ahmedData.email = "ahmed@gmail.com"
console.log(ahmedData.email)

//  Deleting a property 
console.log(ahmedData.phone)
delete ahmedData.phone
console.log(ahmedData.phone)

//  Array of  objects and looping through it
const studentsData = [
     {firstName: 'ahmed', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'hassan', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'ali', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'idris', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'maryam', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'halima', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'amina', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
     {firstName: 'sumaya', middleName: 'aden', lastName: 'ibrahim', dob: 1998, phone: 72435667, salary: 30000, taxRate: 5, allowance: 5000},
]

let studentsContainer = document.querySelector('.students-container')
studentsData.forEach(student => {
     studentsContainer.innerHTML += `<div> 
          <p>First name: ${student.firstName}</p>
          <p>Middle name: ${student.middleName}</p>
          <p>Last name: ${student.lastName}</p>
          <p>Date of birth: ${student.dob}</p>
          <p>Phone number: ${student.phone}</p>
          <p>Salary: ${student.salary}</p>
          <p>Tax rate: ${student.taxRate}</p>
          <p>Allowance: ${student.allowance}</p>
     </div>`
})