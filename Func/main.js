//node side effects
//input --> 

const array = [1, 2, 3]

function a(arr) {
  arr.pop();
}

a(array);
console.log(array);

//here the array outside the function 
//is being modified , hence this is a side effect 



function b(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

console.log(b(array));

function multiplyByTwo(arr) {
  return arr.map((element) => element * 2)
}

console.log(multiplyByTwo(array));

function c() {
  console.log("hi");
}


// a function should return the same output for the same input 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; var colours = ["red", "orange", "yellow", "green"]; numbers.forEach(function (color) { if (color % 3 === 0) { console.log(color); } });