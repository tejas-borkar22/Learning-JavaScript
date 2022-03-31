// Function Declaration 
function walk(){
  console.log('Walk')
}

//Anonymous Function Expression
let run = function (){
  console.log('run')
}

// Hoisting : In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Note: JavaScript only hoists declarations, not the initializations.


console.log("\n------------ Default parameters for Functions -------------\n")
function interest(principal,years,rate = 8){
  return principal * rate / 100 * years
}
console.log(interest(28000,2))


console.log("\n------------ Rest parameter JS -------------\n")
/*
Rest : The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript. 
Note that only the last parameter in a function definition can be a rest parameter.
Rest is represented by ...argument
*/ 

function cartTotal(discount, ...prices){
  let total = prices.reduce((acc,current)=> acc + current)
  return total * (1 - discount)
}

let cartVal = cartTotal(0.2, 100,50,30,20)
console.log(`Cart Total = ${cartVal}`)

console.log("\n------------ Getters & Setters in JS -------------\n")

/*

getters => Getters are usedd to access properties
setters => Setters are used to chnge (mutate) properties

In JavaScript, accessor properties are methods that get or set the value of an object. 
For that, we use these two keywords: 
get - to define a getter method to get the property value. 
set - to define a setter method to set the property value.
*/ 


const person = {
  fname : "Baban",
  lname : "Sheth",
  get fullName(){
    return `${person.fname} ${person.lname}`
  },
  set fullName(value){
    if(typeof value !=="string")
      throw new Error("Value is not a string.")
    const parts = value.split(" ")
    if(parts.length !== 2)
      throw new Error("Please Enter a first & last name.")
    this.fname = parts[0]
    this.lname = parts[1]
  }
}

console.log(person.fullName)
try{
  person.fullName = "Raj Jadhav"
}
catch(e){
  console.log(e.message)
}

console.log(person.fullName)



console.log("\n------------ this in JS -------------\n")
/*
In JavaScript, the 'this' keyword refers to an object.
Which object depends on how this is being invoked (used or called).


In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.

Note : this is not a variable. It is a keyword. You cannot change the value of this.
*/ 

const video = {
  title : 'JS Promises in 1 min',
  play(){
    console.log('\nHere this refers to current object : ', this)
  }
}

video.play()

video.stop = function(){
  console.log('\nHere also, this refers to current object : ', this)
}
video.stop()

// this in case of Constructor functions.
function Movie(name,feat){
  this.name = name
  this.featuring = feat
  console.log('\nHere this refers to current object : ', this)
}

const kgf =  new Movie('KGF The Beginnig','Yash')


// this in case of Global Objects.
function playAnyVideo(){
  console.log('\n Here this refers to global object : \n\n', this)
}

playAnyVideo()

console.log("\n------------ Changing this in JS -------------\n")



// Exercises 
console.log("\n------------ Exercise 1 : Sum of Arguments -------------\n")

function sum(...items){
  if(items.length === 1 && Array.isArray(items[0]))        // If passed argument is already an array.   
    items = [ ...items[0] ]                                // Using spread operator.                                                          to   add
  return items.reduce((acc,current)=> acc + current)
}
let Total = sum([2,4,6,8,1])
console.log(Total)

console.log("\n------------ Exercise 2 : Area of Circle -------------\n")

const circle ={
  radius : 2,
  get area(){
    return Math.PI * (this.radius**2 )
  }
} 

console.log(`Area of circle = ${circle.area}`)
circle.radius = 5
console.log(`\nArea of circle = ${circle.area}`)

console.log("\n------------ Exercise 3: Error Handling (Try n Catch) -------------\n")

function countOccurrences(arr,key){
  if( !Array.isArray(arr) )
    throw new Error("Argument must be an array ")
  return arr.reduce((accumulator,currentValue)=>{
    const occurrence = (currentValue === key) ? 1 : 0
    return accumulator + occurrence
  }, 0)
}

try{
  let times = countOccurrences([2,6,7,11,9,7],7)
  console.log(`${times} times ocurred`)
}
catch(e){
  console.log(e.message)
}