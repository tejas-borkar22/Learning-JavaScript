// map(), reduce() & filter() are higher order functions.

/*
1. Map function : Map function is used to transform an array.

array.map(Any function or logic)

*/
let arr = [5, 3, 7, 2, 8, 4]

console.log("\n---------------- Map() ------------------")
const binary = arr.map((i) => i.toString(2))

console.log(binary)


/*
2. Filter function : Filter is used to filter the values inside an Array.
*/ 

console.log("\n---------------- Filter() ------------------")
function isEven(i){
  return i % 2 === 0
}
const even = arr.filter(isEven)

// const even = arr.filter((x) => x%2 === 0)          Does same thing just using arrow functions

console.log(even)


/*
3. Reduce function : Reduce is used where we have to go through all the elements of an array & come up with a Combined value as an answer. The reducer() function reduces the number of array items into a single item and returns it.
                     for ex. Sum of all elements in an array, Max or min of array
*/

// Find the max in the array
console.log("\n----------------- Reduce() : Max in The Array ------------------")
const output = arr.reduce(function(acc,curr){
  // if(acc < curr)
  //   acc = curr
  // return acc
  (acc < curr) ? acc = curr : acc
  return acc
}, -999)

console.log(output)


// Write a reducer function to return names of people who are below age of 30
console.log("\n---------------- Reduce() function Exercise ------------------")
const users = [
  {firstName: "Raja", lastName: "Bhai", age:26 },
  {firstName: "Deep", lastName: "Rathod", age:45 },
  {firstName: "Elle", lastName: "Haldin", age:26 },
  {firstName: "Neha", lastName: "Gupta", age:32 },
]

let output2 = users.reduce(
  (acc,curr) =>{
    if(curr.age < 30)
      acc.push(`${curr.firstName} ${curr.lastName}`)
    return acc
  }, [])

console.log(output2)