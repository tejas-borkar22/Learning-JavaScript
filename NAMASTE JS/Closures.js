//Closures in JS

function x(){
  var a = 17
  function y(){
    console.log(a)
  }
  return y       // Returns a closure. (function y() along with its lexical scope)
}
var z = x();    //Inner Function y() along with its lexial scope is stored in var z.
console.log(z)
z() //Invoking function y() stored in var z.


// ------------------------
function z(){
  var b = 101
  function x(){
    var a = 17
    function y(){
      console.log(a,b)
    }
    y()       // Returns a closure. (function y() along with its lexical scope)
  }
  x()
}
z()