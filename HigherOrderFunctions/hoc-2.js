function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(5))




multiply1 = (num1) => (num2) => num1 * num2;
console.log(multiply1(4)(5))

