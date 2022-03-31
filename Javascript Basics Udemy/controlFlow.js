// If else ....

let hour = new Date().getHours()
// console.log(hour)

if(hour >=6 && hour<12)
  console.log("Good Morning")
else if(hour>=12 && hour<17)
  console.log("Good Afternoon")
else if(hour>=17 && hour<19)
  console.log("Good Evening")
else 
  console.log("Good Night")



// Switch Case

let role = 'admin'

switch (role) {
  case 'guest':
    console.log("Guest User")
    break;
  case 'admin':
    console.log("Administrator User")
    break;
  case 'moderator':
    console.log("Moderator User");
  default:
    console.log("Unknown User")
}

// Iterators - Loops

//1. For Loops
console.log("\n------------For Loop: Odd Numbers-------------\n")
// for(InitialExp; Condition; Increment/Decrement)
for(let i=1; i<=10; i++){
  if(i % 2 !== 0) console.log(i)
}

//2. While Loops
console.log("\n-------------While Loop: Even Numbers-------------\n")
let i = 1
while(i<=10){
  if(i % 2 === 0) console.log(i)
  i++;
}

// 3.Do..While Loop Executed atleast once
console.log("\n-------------Do While Loop-------------\n")
let j = 11
do{
  console.log("This will get executed at least once.",i++)
}while(i<=10)

// 4. For In Loop : Used to iterate over properties of an object or an array.
console.log("\n-------------For In Loop-------------\n")
const person = {
  name : 'Tejas',
  age : "20",
  city : 'Pune'
}

console.log('Iterating over an Object')
for(let key in person)
  console.log(key, person[key])

console.log('Iterating over an Array')
const coolers = ['red','green','blue']
for(let index in coolers)
  console.log(index,coolers[index])


// 5. For of Loop : Better way to iterate over Arrays.
console.log("\n-------------For Of Loop : Better way to iterate over an arrays-------------\n")
for(let color of coolers)
  console.log(color)

// Exercises
// 1. Write a function that takes two numbers and returns the maximum of the two.
function max(num1,num2){
  return (num1 > num2) ? num1 : num2
}
let maxNumber = max(5,4)
console.log(maxNumber)

/*
  2. FizzBuzz Problem 
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by 3 & 5 both => FizzBuzz
Not Divisible by 3 & 5 both => Input Number
Not a Number => Print msg Not a number
*/ 
console.log("\n-------------FizzBuzz Solution-------------\n")
function fizzBuzz(num){
  if(typeof num === 'number'){
    let s = ""
    if(num % 3 === 0) console.log(s += "fizz")
    if(num % 5 === 0) console.log(s += "buzz")
    if(s === "") console.log(num)
    else console.log(s)
  }
  else
    console.log(NaN)
}

for(i=1;i<=20;i++)
  fizzBuzz(i)

/*
  3. Check Speed Problem
Speed Limit = 70
 Speed Limit + 5 = 1 Point
 12 points License Suspended
*/
console.log("\n-------------Speed Limit Problem Solution-------------\n")
function checkSpeed(speed){
  const speedLimit = 70
  const kmPerPoint = 5
  if(speed < speedLimit + kmPerPoint) console.log("Ok")
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint)
    if(points >= 12) console.log("License Suspended :((")
    else console.log("Points", points)
  }
}

checkSpeed(100)

/*
  4. Count Truthy Values
Falsey values
const falsey = [undefined,null,"",false,0,NaN]
*/
console.log("\n------------- Count Truthy Solution-------------\n")
function countTruthy(array){
  let count=0;
  for(let val of array)
    if(val) count++    // JS Engine returns true if value is truthy
  console.log(`Truthy Values ${count}`)
}

let values = [1,2,"hgh",0,7]
countTruthy(values)

/*
  5. Stars pattern Program
*/
console.log("\n------------- Stars Pattern -------------\n")
function showStars(num){
  for(let row=1;row<=num;row++){
    let pattern = ""
    for(let col=1;col<=row;col++)
      pattern += "* "
    console.log(pattern)
  }
}
showStars(2)

console.log("\n------------- Prime Numbers Solution-------------\n")

function findPrimes(limit){
  for(let num=2;num<=limit;num++)
    if(isPrime(num)) console.log(num)
}

function isPrime(num){
  for(let factor=2;factor<=num/2;factor++)
    if(num % factor === 0)
      return false
  return true
}

findPrimes(10)