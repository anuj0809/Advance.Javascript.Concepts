

/*

Most of the languages are block scoped ,
this means if you are enclosing somethging in a block , a new scope will startfrom there

Javascript is functional scooped , it only creates a new scope if a new function is created

let and const are used for block scoping

*/


//this is functional scope

if (5 > 4) {
  var secret = '12345';
}

console.log(secret)


//this is block scope 

if (5 > 4) {
  let secret1 = '12345'
}

console.log(secret1)



// function() {
//   var secret = '123456'
// }