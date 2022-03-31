console.log("start")
setTimeout(()=>{
  console.log("I am having Trust Issues!!!")
},2000)
console.log("End")

// Assume Millions of lines of code
let start = new Date().getTime()
// console.log(start)
let end = start 
while(end <= start + 5000){              //Blocking the thread for 5 secs
  end = new Date().getTime()
}
// console.log(end)
console.log("While loop Stops here")