/*

Functions are first class citizens in JS:

It means 3 things:


*/


//1 : we can assign functions to variables 
var stuff = function () { }

//2 : we can pass functions as parameters to a function
function a(fn) {
  fn()
}

a(function () { console.log("Hello") })

//3 : we can return functions as a value from other functions

function b() {
  return function c() { console.log("bye") }
}

var d = b()
d()

