var array = ['1', '2', '3']

console.log(array)

console.log(typeof array)


//BEHIND THE SCENES , ARRAYS ARE REPRESENTED LIKE THIS


// var array = {
//   0: '1',
//   1: '2',
//   2: '3'
// }

// console.log(array)


//How to check for arrays then 

const ans = Array.isArray(array)
console.log(ans)