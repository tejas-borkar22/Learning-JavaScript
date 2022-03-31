// Akshay Saini Namaste Javascript
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      console.log(fullName)
    }
    return writeName();
  }
  return sayName();
}
profile()
console.log(fullName)



let bestFood; 
console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here but it is not initialized
bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
console.log(bestFood);


// Block scope & shadowing in JS
{
  var a = 100
  let b = 200
  const c = 300

  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(a)   //Accesible as declared in Global Scope
/*  
Gives "ReferenceError: b is not defined" as let & const are block scoped
console.log(b)
console.log(c) 
*/

// Shadowing
var x = 1;
console.log(`Inintial value ${x}`)
{
  var x = 10
  let y = 20
  const z = 30

  console.log(`Value after shadowing ${x}`)
  console.log(y)
  console.log(z)
}
console.log(`Value after shadowing ${x}`)

let p = 1
console.log(`Value before shadowing ${p}`)
{
  let p = 100
  let q = 200
  const r = 300

  console.log(`Value after shadowing ${p}`)
  console.log(q)
  console.log(r)  
} 
console.log(p)

