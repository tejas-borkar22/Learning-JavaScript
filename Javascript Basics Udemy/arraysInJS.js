console.log("\n------------ Javascript Arrays -------------\n")

const arr = [3,4]

// End of an array
arr.push(5,6)

// Beginning of an array
arr.unshift(1,2)          //Shift existing elements & add new elements.

// In Between the array 
arr.splice(2,0,'a','b',1)

console.log(arr)

console.log("\n------------ Finding Elements (Primitives) -------------\n")

// Gives the index of element if it is present in the array or else returns -1.
console.log(arr.indexOf('a'))     
console.log(arr.lastIndexOf(3))

console.log(arr.indexOf(1))
console.log(arr.lastIndexOf(1))           //Gives the last index of element

console.log(arr.indexOf('b',4))

// Returns true if the element is presnt in ana array else returns false.
console.log(arr.includes(5))

console.log("\n------------ Finding Elements (Reference Type) -------------\n")

const courses = [
  {id : 1,name: 'Namaste JS'},
  {id : 2, name: 'JS Basics'},
  {id : 3, name: 'U dont know JS'}
]
/*
  array.find() : The arr.find() method in Javascript is used to get the value of the first element in the array that satisfies the provided condition. The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  Syntax : array.find(function(currentValue, index, arr),thisValue);
*/ 
console.log(courses.find((course)=> course.name === 'U dont know JS'
))

console.log(courses.find((course)=> course.name === 'Learn JS'
))

// Arrow Functions : An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. 

console.log("\n------------ Removing Elements In an Array -------------\n")
let numbers = [3,5,7,2,9,1,4,11]

// From End
const last = numbers.pop()
console.log(`Last element is ${last}`)
console.log(`Array is ${numbers}\n`)

// From Beginning
const first = numbers.shift()
console.log(`First element is ${first}`)
console.log(`Array is ${numbers}\n`)


// From Middle
console.log(numbers.splice(3,2))
console.log(`Array is ${numbers}`)

console.log("\n------------ Emptying an Array -------------\n")
// Remove all the elements in one go.

/* 

Solution 1
numbers = []           //Does not work if the array declared with const, or 
                        it has other refernces.         

Solution 2 
numbers.length = 0      //Generally Recommanded

Solution 3
numbers.splice(0,numbers.length)

Solution 4
while(numbers.length > 0 )
  numbers.pop()               //Not recommanded, computationally expensive

*/
console.log(numbers)

console.log("\n------------ Combining and Slicing Arrays -------------\n")
let firstArr = [1,2,3]
let secondArr = [4,5,6]
 
let combined = firstArr.concat(secondArr)
console.log(`Combined Array is [${combined}]\n`)

let sliced = combined.slice(2,5)
console.log(`Sliced Array is [${sliced}]\n`)

console.log("\n------------ Spread Operator -------------\n")

let combinedSpread = [ ...secondArr ,'b', ...firstArr, 'a' ]           //Better way to combine arrays
console.log(`Arrays combined using spread [${combinedSpread}] \n`)
let copy = [ ...combined ]                              //Cloning or copying an array
console.log(copy)

console.log("\n------------ Iterating Over an Array -------------\n")

for(let i of combined){
  console.log(i)
}
console.log("\nIndex \t Number")
combinedSpread.forEach((index,num) => console.log(`\t${num} \t = \t ${index}`) )

console.log("\n------------ Joining Arrays -------------\n")

// Create a URL slug from title / message.

let msg = "How to create slug in JS ???"
let parts = msg.split(' ')
console.log(parts)
let urlSlug = parts.join("-")
console.log(`URL Slug for message = ${urlSlug}`)

console.log("\n------------ Sorting Arrays in JS-------------\n")
numbers.push(1,-2)
numbers.unshift(9)

console.log(`Numbers Array ${numbers}\n`)

numbers.sort()
console.log(`Numbers Array after sorting ${numbers}\n`)

numbers.reverse()
console.log(`Numbers Array after Reverse ${numbers}\n`)

// Sorting Arrays containing objects
console.log("Courses array Before Sorting: ", courses );

courses.sort((a,b)=>{
  const A = a.name.toLowerCase()
  const B = b.name.toLowerCase()

  if(A < B) return -1
  if(A > B) return 1
  else return 0
})

console.log("\nCourses array after Sorting: ", courses)

console.log("\n------------ Testing elements of an Array (Some & Every in JS) -------------\n")

/*
  some() : Some() Method in JavaScript is used to check whether at least one of the elements of the array 
  satisfies the given condition or not. 
  every() : Every() method in JavaScript is used to checks whether all the elements of the array satisfy the 
  given condition or not.
*/ 

const allPositives = numbers.every((value)=>{
  return value >= 0 
})

const atLeastOnePositive = numbers.some((value)=>{
  return value >= 0
})

console.log(`allPositives = ${allPositives} \t atLeastOnePositive = ${atLeastOnePositive}`)


console.log("\n------------ Filter() in JS -------------\n")

// The filter() method creates a new array with all the elements that pass the test implemented by the callback() function.
console.log(`Numbers array = [${numbers}]`)

let even = numbers.filter((num) => num % 2 == 0)

console.log(`Filtered array = [${even}]`)

console.log("\n------------ Map() in JS -------------\n")

let items = numbers
.filter((num)=> num>= 5)
.map((num)=> ({value : num}) )
console.log("Array Mapped to object.value", items)

console.log("\n------------ Reduce() in JS -------------\n")

const sum = numbers.reduce((accumulator,currentValue)=> {return accumulator + currentValue } ,0)
console.log(`Sum of elements is ${sum}`)



// --------------Exercises-------------- 
console.log("\n------------ Exercise 1 : Arrays from Range -------------\n")

function arrayFromRange(min,max){
  const op = []
  for(let i=min;i<=max;i++)
    op.push(i)
  return op
}

const tempArr = arrayFromRange(-10,-4)
console.log(tempArr)

console.log("\n------------ Exercise 2 : Search in Array -------------\n")
function searchInArr(key,arr){
  let i = 0
  for(let element of arr)
    if(key === element) return true
  return false
}

console.log(searchInArr(-7,tempArr))
console.log(searchInArr(5,numbers))

console.log("\n------------ Exercise 3 : Except Array -------------\n")

function except(arr,excluded){
  let output = []
  for(let val of arr){
    if(!excluded.includes(val))
      output.push(val)
  }
  return output
}
let output3 = except(numbers,[-1,1,5,9]) 
console.log(`output 3 is = [${output3}]`)

console.log("\n------------ Exercise 4 : Moving an Element -------------\n")
//Imp Tricky Question

function move(arr,index,offset){
  const position = index + offset
  if(position >= arr.length || position < 0){
    console.error("Invalid offset !!!")
    return
  } 
  let output = [ ...arr ]
  let element = output.splice(index, 1)
  output.splice(position, 0, element)
  return output
}
const output4 = move([1,2,3,4],2,-3)
console.log(`Array after moving an element [${output4}]`)

console.log("\n------------ Exercise 5 : Count Occurrences -------------\n")
 
function countOccurrences(arr,key){
  return arr.reduce((accumulator,currentValue)=>{
    const occurrence = (currentValue === key) ? 1 : 0
    return accumulator + occurrence
  }, 0)
}
numbers.push(1,9,-2)
console.log(`Numbers array = [${numbers}]`)
const times = countOccurrences(numbers, 1)
console.log(`Occurrences of element is ${times}`)

console.log("\n------------ Exercise 6 : Get Max -------------\n")

function getMax(arr){
  if(arr.length === 0) return undefined
  return arr.reduce((acc,curr)=>{ 
    if(acc < curr) 
      acc = curr 
    return acc
  }, -999)
}

const max = getMax([-4,-5,-10,-7])
console.log(`Maximum = ${max}`)

console.log("\n------------ Exercise 7 : Movies -------------\n")

/*
All the movies in 2018 with rating > 4
Sort them with their rating
Descending Order
Pick their title
*/ 

const movies = [
  {title : 'a', year: 2018, rating: 4.5},
  {title : 'b', year: 2018, rating: 4.7},
  {title : 'c', year: 2018, rating: 3.5},
  {title : 'd', year: 2017, rating: 4.0}
]

const topSelects = movies
  .filter((m)=> m.year === 2018 && m.rating >=4 )
  .sort((a,b)=> a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(topSelects)