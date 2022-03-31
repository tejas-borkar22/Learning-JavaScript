console.log("\n------------ Objects in JS -------------\n")
const circle = {
  radius:1,
  location:{
    x:1,
    y:1
  },
  isVisible:true,
  draw: ()=>{
    console.log("draw circle")
  }
}
console.log(circle.isVisible)
console.log(circle['location'])
circle.draw()

// JS Objects are Dynamic in Nature i.e. we can always add or remove properties.
circle.color = "red"
console.log(circle)

delete circle.color
console.log(circle)

console.log("\n------------ Enumerating Properties of an Object -------------\n")
for(let key in circle)
  console.log(key,circle[key])

// Using For Of Loop : Convert given object properties to array, then iterate over that aray.

for(let key of Object.keys(circle))
  console.log(key, circle[key])

console.log("\n------------ Factory Functions -------------\n")
/*  Factory Functions : The Factory Function is similar to constructor functions 
or class functions, but instead of using new to create an object, 
factory functions simply creates an object and returns it.
*/ 

function createPerson(firstname,lastname){
  return{
    firstname: firstname,
    lastname: lastname,
    getFullName(){
      return `${firstname} ${lastname}`
    }
  }
}

const person1 = createPerson("John","Doe")
console.log(person1)


console.log("\n------------ Constructor Functions -------------\n")
// Constructor Functions : A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties. 

// Use Pascal Notation: (OneTwoThree) For naming Constructor Functions.  
function Person(firstname,lastname,age){
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
  this.getFullName = ()=>{
    console.log(`${firstname} ${lastname}`)
  }
}

const person2 = new Person("Raju","Saxena",23) 
console.log(person2)


/*
  In JS Functions, are objects. You can work with functions as if they were objects. For example, you can assign functions to variables, to array elements, and to other objects. They can also be passed around as arguments to other functions or be returned from those functions. The only difference with objects is that functions can be called.
*/ 

console.log("\n------------ Primitives & Reference Types -------------\n")
// Primitives & Reference Types : Primitives are copied by their value, reference types are copied by their reference. 

/*
In JavaScript we have value types, also called primitives, as well as
reference types which are objects. Our primitives are number, string, boolean, undefined and null. Primitives or value types are copied by their value
reference types are Objects, Functions, Arrays which, are copied by their reference(Their address is copied).
*/ 

// Primitives
let a = 15
let b = a
console.log(`Initially Values of a & b are a = ${a} b = ${b}.\n`)
a = 20
console.log(`Finally Values of a & b are a = ${a} b = ${b}.\n`)

// Refernce Types
let x = {value:6}
let y = x

console.log(`Initially Values of x & y are x = ${x.value} y = ${y}.\n`)
x.value = 11
console.log(`Finally Values of x & y are x = ${x.value} y = ${y}.\n`)
console.log()

console.log("\n------------ Cloning an Object -------------\n")

/*
//1. Using For loop 
const anotherCircle = {}
for(let key in circle)
  anotherCircle[key] = circle[key]
  
// 2. Better Approach using object.assign
  const anotherCircle = Object.assign({},circle)
*/ 

// 3. Best Approach using Spread
const anotherCircle = { ...circle }
console.log(anotherCircle)

// String objects
console.log("\n------------ String Object -------------\n")

const str1 =  new String('Hello World !!!')
console.log(`Type of str1 is ${typeof str1}`)

// String primitive
const str2 = "This is my message."
console.log(`Type of str2 is ${typeof str1}`)
// However, when we use the dot notation with a string primitive JavaScript engine internally wraps this with a string object.
console.log(`String Length is ${str2.length}`)
console.log(`Using split with string ${str2.split(" ")}`)

console.log("\n------------ Date Object -------------\n")
const now = new Date()
console.log(now.toDateString())
console.log(now.toISOString())

// Exercises
/*1. Create Address object*/ 
console.log("\n------------ Exercise 1 -------------\n")
let address = {
  city: "Las Vegas",
  street: "ABC Road",
  zipCode: 100192
}

function showAddress(object){
  for(key in object)
    console.log(key, object[key])
}
showAddress(address)


// 2.Factory & Constructor Functions
console.log("\n------------ Exercise 2 -------------\n")
function createAddress(city,street,zip){
  return{
    city,          //Shorthand if key n value both are same
    street,
    zipcode : zip
  }
}
const address2 = createAddress("Pune","FC Road",41005)

console.log(address2)

function Address(city,street,zip){
  this.city = city,
  this.street = street,
  this.zipcode = zip
}

const address3 = new Address("Mumbai","Mira Road",21007)
console.log(address3)

// 3. Object Equality
console.log("\n------------ Object Equality -------------\n")
function areEqual(add1,add2){
  return add1.city === add2.city && add1.street === add2.street && 
  add1.zipcode === add2.zipcode
}

function areSame(add1,add2){
  return add1 === add2
}

console.log(areEqual(address2,address3))
console.log(areSame(address2,address3))

// 4. Create A Blog Post Object
console.log("\n------------ Blog Post Object -------------\n")

let blogPost = {
  title: 'My 2 Cents!!!',
  body : 'Lorem Epusm hgdhjgdfhj gdsgjhfd',
  author : 'Danny James Wilson',
  views : 111,
  comments : [
    {author:'xyz',body:'Noice '},
    {author:'abcd',body:'Awesome '}
  ],
  isLive:true
}

function showBlogs(blog){
  for(let key in blog){
    // if(key === "comments")
    //   showBlogs(key)                      Fix later on.....
    console.log(`${key} = ${blogPost[key]}`)
  }
}

showBlogs(blogPost)

// 5. Create Price Range Object
console.log("\n------------ Price Range -------------\n")

let priceRange = [
  {label : '$', tooltip : 'Inexpensive', minPerPerson : 0, maxPerPerson : 15 },
  {label : '$$', tooltip : 'Moderate', minPerPerson : 16, maxPerPerson : 25 },
  {label : '$', tooltip : 'Inexpensive', minPerPerson : 26, maxPerPerson : 50 }
]

console.log(priceRange)