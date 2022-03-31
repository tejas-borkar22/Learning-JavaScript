/*
Operators in JavaScript 

Arithmetic operators, 
Assignment operators, 
Comparison operators,
Ternary/Conditional Operators,
Logical operators, and 
Bitwise operators. 
*/ 

let x = 10
let y = 3

console.log("\n------------Arithmatic Operators-------------\n")
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(y ** x)   // Exponentiation Operator


// Increment & Decrement Operators
console.log(x++)  //Post 
console.log(++x)  //Pre

console.log(--y)
console.log(y--)

console.log("\n------------Comparison Operators-------------\n")
console.log(x === y)
console.log(x !== y)
console.log(x > y)
console.log(y < x)


console.log("\n------------Equality Operators-------------\n")
// Strict Equality operator (Type Checking + Value Check)
console.log(1 === 1) 
console.log( 5 === '5')

// Loose Equality Operator (Value Check)
console.log(10 == 10) 
console.log( 15 == '15')
console.log(true == 1)
console.log(true == 19)


/*
Let's imagine we want to implement a rule like this.
If a customer has more than 100 points, they are a gold customer
otherwise, they are a silver customer,
*/ 
console.log("\n------------Ternary/Conditional Operators-------------\n")

let points = 110
let category = points > 100 ? "GOLD": "SILVER"
console.log(`Type of Customer is ${category}`)

/*
Logical Operators : && (AND), || (OR), ! (NOT)

When our javaScript engine tries to evalueate this expression, it looks at each operand 
if that operand is not a boolean true or false, it will try to interpret it as truthy or
falsey, so in JavaScript we have is values which we refer to as Falsey, that's not
boolean false, it's falsey. What are these falsey values? Well we have undefined null, number 0, the boolean
false, and empty string and not a number this values are treated as falsey values. Anything that is not falsey is truthy.
*/ 

console.log("\n------------Logical Operators-------------\n")

console.log(true||"Tejas")
console.log(false||"Tejas")
console.log(true&&"Tejas")
console.log(false&&"Tejas")


console.log(false || 1 || 2) //Short Circuiting
/*
Now, what if we have an expression like this, false or 1, or 2. What do you think we're going to get?
Let's take a look. You get 1. So this is another thing you need to understand about the logical or operator. The evaluation
starts here, as soon as we find an operand that is truthy, that operand is returned, so here our second operand is
truthy, it's value is returned, and here the evaluation stops. 
It doesn't matter what we have on the right side, we could have a million other operands,
they are completely ignored, this is what we call short-circuiting. Short-circuiting. 
That's exactly like short circuiting that we have in electricity.
*/ 


console.log("\n------------Bitwise Operators-------------\n")
/*
Bitwise operators in JavaScript or any other programming languages, are
similar to logical operators, but they work in the individual
bits of a number.

 1 = 00000001
 2 = 00000010
*/

console.log(1 | 2) //Bitwise OR Result = 3
console.log(1 & 2) //Bitwise AND Result = 0