// What is callback functions ?
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