/*

Closures has two main benifits:

1)Memory Efficient 
2)Encapsulisation and data privacy 

*/

//1- Memory Efficient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill('@');

  return bigArray[index]
}

console.log(heavyDuty(5))
console.log(heavyDuty(5))
console.log(heavyDuty(5))
console.log(heavyDuty(5))

//Every time we run a function , a new array is 
//created and then destroyed


//how to solve it using closures ? 

function heavyDuty2() {
  const bigArray = new Array(7000).fill("#");
  console.log('created!')

  return function (index) {
    return bigArray[index]
  }
}

const getHD = heavyDuty2();

console.log(getHD(4))
console.log(getHD(5))

//! how beautifully we solved this ...

// 2- Encapsulisation : we only expose to another scope what is actually required 













