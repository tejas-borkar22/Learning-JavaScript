function outer(msg){
  var a = 10
  let b = 20      // let having a block scope
  function inner(){
    console.log(a,b,msg)
  }
  return inner
}
outer("Hello world")();       //Invoking the "inner" function which was returned. 

// Both works the same way just different syntax.
let inn = outer("Hello");
inn();           //Invoking function stored in 'inn' variable


function counter(){
  var count = 0;
  return function increment(){
    count++
    console.log(count)
  }
}
var cnt1 = counter()
cnt1()
cnt1()

var cnt2 = counter()     //It will create a new fresh copy of counter()
cnt2()
