// setTimeout()
let gotRight = () =>{
  console.log("Guess which will print first? \n")
  setTimeout(()=>{
    console.log("This will print later on... \n")
  },2500)
  console.log("This will print first.\n")
}
gotRight()


let y = ()=>{
  let count = 1;
  for(let i = 1;i<=5;i++){
    setTimeout(function(){
      console.log(count++)
    }, i*1000)
  }
  console.log("Closures + setTiomeout() \n")
}
y()



function x(){
  for(var i=1;i<=5;i++){
    let x = i
    setTimeout(()=>{
      console.log(x)
    }, 1000)
  }
  console.log("Closures + setTiomeout() \n")
}
x()


function x(){
  for(let i=1;i<=5;i++){
    setTimeout(()=>{
      console.log(i)
    }, 1000)
  }
  console.log("Closures + setTiomeout() \n")
}
x()

