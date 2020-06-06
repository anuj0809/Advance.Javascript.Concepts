// function multiply(a, b) {
//   return a * b;
// }


// //This is what is callled as Function Currying :


// const multiplyByTwo = multiply.bind(this, 2);
// const multiplyByTen = multiply.bind(this, 10);

// const x = multiplyByTwo(4)
// const y = multiplyByTen(5);

// console.log(x)
// console.log(y)




function add(a) {
  return function (b) {
    if (b == undefined)
      return a;

    return a + b;
  }
}

console.log(add(2));