// JS Refresher
console.log("Hello World");

let myName = 'Tejas Borkar'
console.log(`Hello Guys I am ${myName}, Nice to meet you.`) //Using template strings

let myAge = 20
console.log(`I am ${myAge} years old.`)
console.log('Type of variables: '+ typeof myAge,typeof myName)

console.log('\n--------------------------------------------\n               Objects In JS \n--------------------------------------------')
//Objects in JS
console.log("JS Objects")
let person = {
  name : 'Raju',
  age : 25
}

console.log(person)
/*There are 2 types of ways to access properties of an object. Dot Notation & Braket Notation. */

// 1. Dot Notation
person.name = 'Shyam'
console.log(person.name)

// 2. Bracket Notation
person['name'] = 'Babu'
console.log(person['name'])

console.log('\n--------------------------------------------\n             Arrays In JS \n--------------------------------------------')
//Arrays In JS
let colors = ['red','green','blue','yellow']
console.log(colors.length,'\n')
colors.push('violet')
console.log(`Array after pushing element [${colors}] \n`)

console.log(colors.join(" | "),'\n')

let last = colors.pop()
console.log(`Array [${colors}] after popping [${last}] element \n`)

const subarr = colors.splice(1, 1, 'white')  //Removes element and puts another element instead of it.
console.log(`Subarray is [${subarr}] \nArray is [${colors}] \n`)

console.log(`To sort the Array: [${colors.sort()}] \n`)

colors.forEach(function (color){
  console.log(color)
})

console.log('\n--------------------------------------------\n             Functions in JS\n--------------------------------------------')
// Functions in JS
let Adjectives = ['Soothing💆🏻','Marvelous','Thriving⚡','Wonderful🌈','Thoughtful💭','Fantastic','Savvy🤙']
let days = ['Sunday','Monday','Tuesday','Wednusday','Thursday','Friday','Saturday']
function greet(){
  const d = new Date();
  console.log(`Hello ${myName}, today is a ${Adjectives[d.getDay()]} ${days[d.getDay()]}`)
}
greet()


