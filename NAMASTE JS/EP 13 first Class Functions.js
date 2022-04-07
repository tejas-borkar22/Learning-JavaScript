// Function statements aka Function declaration
function a(){
  console.log("Function a is called, it is Function statement")
}
a()

// Function Expression
var b = function (){
  console.log("This is function expression")
}
b()

// Anonymous Function
/*
Functions without any name are called as anonymous functions,
but we cant use anonymous functions directly. We can use this functions as a parameters in 
eventhandlers or assigning them with some variable

  function (){
    console.log("This is an example of anonymous function")
  }
*/ 

// Named Function Expression
var d = function named(){
  console.log("This is an example of named function expression")
}

/*
    What are the first class functions?
=>  The ability of functions to be used as values & can be passed as an argument to another function,
    & returned from functions is known as first class functions in JS. This ability of functions is 
    also called as "First Class Citizens".
*/ 
