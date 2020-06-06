

console.log(name)
console.log(sayHi())


function sayHi() {
  console.log("Hii")
}

var name = "Utkarsh Malik"



//LEARNING: Every time you create a new function , a new execution context is created


var favourateBook = "Harry Potter";


function myFavourates() {
  console.log("My Favourate book is " + favourateBook)
  var favourateBook = "freedom"
  console.log("My Favourate book is " + favourateBook)
}

myFavourates()


console.log();