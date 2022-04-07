/*
What is callback functions ?

Callback functions: Callback functions are the functions that are passed to another function as an argument. ( In the below code showName ).

High Order funtions :  Functions which take another function as an argument. ( In the below code userName  )
*/ 


// callback function
function showName(name) {
  console.log(`My name is ${name}`)
}

// High order function
function userName(firstName, cb) {
  return cb(firstName)
}

userName("Vansh", showName) // My name is Vansh


setTimeout( ()=>{
  console.log("timer end")
},4000)

function x(callback){
  callback()
  console.log("function x executed")
}
function y(){
  console.log("function y executed")
}
x(y)